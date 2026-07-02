import { useState } from "react";
import { Send, Check, Clock, MessageCircle, Mail, Phone } from "lucide-react";
import { Section } from "./Section";

const PROJECT_TYPES = [
  "Landing page",
  "Korporativ sayt",
  "Onlayn do'kon",
  "Mobil ilova",
  "Backend / API",
  "Boshqa",
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();

    const errs: Record<string, boolean> = {};
    if (!name) errs.name = true;
    if (!phone) errs.phone = true;
    if (!email) errs.email = true;
    setErrors(errs);
    if (Object.keys(errs).length) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 600);
      return;
    }

    setStatus("loading");
    // TODO: backend integration (Telegram bot / email). Placeholder simulation:
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
    form.reset();
    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputBase =
    "w-full rounded-xl border bg-surface/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary focus:bg-surface focus:shadow-[0_0_0_4px_color-mix(in_oklab,var(--color-primary)_18%,transparent)]";

  return (
    <Section
      id="contact"
      eyebrow="Buyurtma / Aloqa"
      title={<>Loyihangizni <span className="text-gradient-primary">bugun boshlaymiz</span></>}
      description="Formani to'ldiring — 24 soat ichida siz bilan bog'lanamiz va aniq taklif yuboramiz."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <form
          id="contact-form"
          onSubmit={onSubmit}
          className={`rounded-3xl border border-border bg-card p-8 md:p-10 ${status === "error" ? "animate-shake" : ""}`}
          noValidate
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Ism *</label>
              <input
                name="name"
                type="text"
                placeholder="Ismingiz"
                className={`${inputBase} ${errors.name ? "border-destructive" : "border-border"}`}
              />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Telefon *</label>
              <input
                name="phone"
                type="tel"
                placeholder="+998 90 123 45 67"
                className={`${inputBase} ${errors.phone ? "border-destructive" : "border-border"}`}
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Email *</label>
              <input
                name="email"
                type="email"
                placeholder="siz@example.com"
                className={`${inputBase} ${errors.email ? "border-destructive" : "border-border"}`}
              />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Loyiha turi</label>
              <select name="type" className={`${inputBase} border-border appearance-none`} defaultValue="">
                <option value="" disabled>Tanlang…</option>
                {PROJECT_TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Byudjet</label>
              <input
                id="field-budget"
                name="budget"
                type="text"
                placeholder="$0 (kalkulyatordan avtomatik)"
                className={`${inputBase} border-border`}
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Qo'shimcha izoh</label>
              <textarea
                id="field-note"
                name="note"
                rows={4}
                placeholder="Loyihangiz haqida qisqacha yozing…"
                className={`${inputBase} border-border resize-none`}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold btn-glow disabled:opacity-70 sm:w-auto"
          >
            {status === "loading" ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground" />
                Yuborilmoqda…
              </>
            ) : status === "success" ? (
              <>
                <Check className="h-4 w-4" />
                Yuborildi!
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Buyurtmani yuborish
              </>
            )}
          </button>

          {status === "success" && (
            <div className="mt-4 rounded-xl border border-success/30 bg-success/10 px-4 py-3 text-sm text-success">
              Rahmat! Arizangiz qabul qilindi — 24 soat ichida javob beramiz.
            </div>
          )}
        </form>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary/10 text-primary ring-1 ring-primary/20">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">24 soat ichida javob</div>
                <div className="text-xs text-muted-foreground">Ish kunlari 09:00–20:00</div>
              </div>
            </div>
          </div>

          <a href="tel:+998900000000" className="flex items-center gap-3 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50">
            <Phone className="h-5 w-5 text-primary" />
            <div>
              <div className="text-xs text-muted-foreground">Telefon</div>
              <div className="font-semibold">+998 90 000 00 00</div>
            </div>
          </a>

          <a href="mailto:hello@devora.uz" className="flex items-center gap-3 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50">
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <div className="text-xs text-muted-foreground">Email</div>
              <div className="font-semibold">hello@devora.uz</div>
            </div>
          </a>

          <a href="https://t.me/" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50">
            <MessageCircle className="h-5 w-5 text-primary" />
            <div>
              <div className="text-xs text-muted-foreground">Telegram</div>
              <div className="font-semibold">@devora_team</div>
            </div>
          </a>
        </aside>
      </div>
    </Section>
  );
}
