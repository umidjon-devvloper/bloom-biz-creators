import { useEffect, useState } from "react";
import { Send, Check, Clock, MessageCircle, Mail, Phone } from "lucide-react";
import { Section } from "./Section";
import { useI18n } from "@/i18n";
import { SITE } from "@/lib/site";

export function Contact({ headless = false }: { headless?: boolean }) {
  const { t } = useI18n();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [prefill, setPrefill] = useState<{ budget: string; note: string } | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("ua-order");
      if (raw) {
        const data = JSON.parse(raw) as { budget: string; summary: string };
        setPrefill({ budget: data.budget, note: `${t.services.selected} ${data.summary}` });
        sessionStorage.removeItem("ua-order");
      }
    } catch {
      /* ignore */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const contacts = [
    { Icon: Phone, label: t.contact.phoneLabel, value: SITE.phone, href: SITE.phoneHref },
    { Icon: Mail, label: t.contact.emailLabel, value: SITE.email, href: `mailto:${SITE.email}` },
    { Icon: MessageCircle, label: t.contact.telegramLabel, value: SITE.telegramHandle, href: SITE.telegram },
  ];

  return (
    <Section
      id="contact"
      eyebrow={headless ? undefined : t.contact.eyebrow}
      title={
        headless ? undefined : (
          <>
            {t.contact.titleA} <span className="text-gradient-primary">{t.contact.titleHl}</span>
          </>
        )
      }
      description={headless ? undefined : t.contact.desc}
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
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">{t.contact.name}</label>
              <input
                name="name"
                type="text"
                placeholder={t.contact.namePh}
                className={`${inputBase} ${errors.name ? "border-destructive" : "border-border"}`}
              />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">{t.contact.phone}</label>
              <input
                name="phone"
                type="tel"
                placeholder="+998 90 123 45 67"
                className={`${inputBase} ${errors.phone ? "border-destructive" : "border-border"}`}
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">{t.contact.email}</label>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                className={`${inputBase} ${errors.email ? "border-destructive" : "border-border"}`}
              />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">{t.contact.projectType}</label>
              <select name="type" className={`${inputBase} border-border appearance-none`} defaultValue="">
                <option value="" disabled>
                  {t.contact.choose}
                </option>
                {t.contact.types.map((ty) => (
                  <option key={ty}>{ty}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">{t.contact.budget}</label>
              <input
                name="budget"
                type="text"
                defaultValue={prefill?.budget ?? ""}
                placeholder={t.contact.budgetPh}
                className={`${inputBase} border-border`}
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">{t.contact.note}</label>
              <textarea
                name="note"
                rows={4}
                defaultValue={prefill?.note ?? ""}
                placeholder={t.contact.notePh}
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
                {t.contact.sending}
              </>
            ) : status === "success" ? (
              <>
                <Check className="h-4 w-4" />
                {t.contact.sent}
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                {t.contact.submit}
              </>
            )}
          </button>

          {status === "success" && (
            <div className="mt-4 rounded-xl border border-success/30 bg-success/10 px-4 py-3 text-sm text-success">
              {t.contact.successMsg}
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
                <div className="font-semibold">{t.contact.replyTitle}</div>
                <div className="text-xs text-muted-foreground">{t.contact.replyHours}</div>
              </div>
            </div>
          </div>

          {contacts.map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50"
            >
              <Icon className="h-5 w-5 text-primary" />
              <div>
                <div className="text-xs text-muted-foreground">{label}</div>
                <div className="font-semibold">{value}</div>
              </div>
            </a>
          ))}
        </aside>
      </div>
    </Section>
  );
}
