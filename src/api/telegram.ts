import type { LeadInput } from "./api";

/**
 * Lead notifications to Telegram.
 *
 * The admin panel already stores every lead, but a lead nobody sees until the
 * next time someone opens /admin is a lead answered a day late. This pushes it
 * to the phone the moment it arrives.
 *
 * Both values come from the environment — the token is a credential and must
 * never be committed. Missing config is not an error: the site then behaves
 * exactly as it did before, storing leads without notifying.
 */

const TOKEN = process.env.TELEGRAM_BOT_TOKEN ?? "";
const CHAT_ID = process.env.TELEGRAM_CHAT_ID ?? "";

/** Telegram's HTML parse mode rejects unescaped &, < and > anywhere in the text. */
function esc(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/** Tashkent time — the number is read by a person sitting in that timezone. */
function stamp() {
  return new Intl.DateTimeFormat("ru-RU", {
    timeZone: "Asia/Tashkent",
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());
}

function buildMessage(lead: LeadInput) {
  const lines = [
    "🔔 <b>Yangi lead</b>",
    "",
    `👤 <b>Ism:</b> ${esc(lead.name)}`,
    `📞 <b>Aloqa:</b> ${esc(lead.contact)}`,
  ];

  if (lead.email) lines.push(`✉️ <b>Email:</b> ${esc(lead.email)}`);
  if (lead.note) lines.push("", `📝 ${esc(lead.note)}`);

  // The price calculator sends its answers along; a plain object dump would be
  // unreadable on a phone, so each known field gets its own line.
  const meta = lead.metadata ?? {};
  if (meta.priceRange) lines.push("", `💰 <b>Byudjet:</b> ${esc(meta.priceRange)}`);
  if (Array.isArray(meta.summary)) {
    for (const item of meta.summary as unknown[]) {
      if (item && typeof item === "object") {
        const row = item as Record<string, unknown>;
        const label = row.label ?? row.q ?? row.question ?? "";
        const value = row.value ?? row.a ?? row.answer ?? "";
        lines.push(`• ${esc(label)}: ${esc(value)}`);
      } else {
        lines.push(`• ${esc(item)}`);
      }
    }
  } else if (typeof meta.summary === "string") {
    lines.push("", esc(meta.summary));
  }

  lines.push("", `📍 ${esc(lead.source ?? "Sayt")} · 🌐 ${esc(lead.lang ?? "uz")} · 🕒 ${stamp()}`);

  return lines.join("\n");
}

/**
 * Never throws. A Telegram outage or a wrong chat id must not turn a saved lead
 * into an error message for the visitor, who would then think the form failed.
 */
export async function notifyLead(lead: LeadInput) {
  if (!TOKEN || !CHAT_ID) return false;

  try {
    const res = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: buildMessage(lead),
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    if (!res.ok) {
      console.error("[telegram] sendMessage failed:", res.status, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.error("[telegram] notifyLead error:", err);
    return false;
  }
}
