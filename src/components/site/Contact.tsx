import { useState } from "react";
import { Send, Check, Clock, MessageCircle, Mail, Phone, Plus } from "lucide-react";
import { Section } from "./Section";
import { useI18n } from "@/i18n";
import { SITE, telegramLink } from "@/lib/site";

/**
 * Two required fields: name and a phone/Telegram handle.
 *
 * The previous form asked for name, phone, email, project type, budget and a
 * note — six fields standing between a warm visitor and a conversation. Project
 * type and budget are questions we can ask in the first reply; asking them up
 * front only filters out the people who were willing to talk. The optional note
 * stays collapsed so it costs nothing to ignore.
 */
export function Contact({ headless = false }: { headless?: boolean }) {
  const { t, lang } = useI18n();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [showNote, setShowNote] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const contact = String(data.get("contact") ?? "").trim();
    const note = String(data.get("note") ?? "").trim();

    const errs: Record<string, boolean> = {};
    if (!name) errs.name = true;
    if (!contact) errs.contact = true;
    setErrors(errs);
    if (Object.keys(errs).length) {
      setStatus("error");
      setErrorMsg(t.contact.errorRequired);
      return;
    }

    setStatus("loading");
    try {
      const { submitLead } = await import("@/api/api");
      await submitLead({
        data: { name, contact, note: note || undefined, source: "Contact page", lang },
      });
      setStatus("success");
      form.reset();
      setShowNote(false);
    } catch (err) {
      // Never swallow this silently — the Telegram button below is the fallback
      // and the error text points the visitor at it.
      console.error(err);
      setStatus("error");
      setErrorMsg(t.contact.errorNetwork);
    }
  };

  const inputBase =
    "w-full rounded-2xl border bg-background/40 px-5 py-4 text-base font-medium text-foreground placeholder:text-muted-foreground/40 outline-none transition-colors focus:border-primary";

  const contacts = [
    {
      Icon: MessageCircle,
      label: t.contact.telegramLabel,
      value: SITE.telegramHandle,
      href: telegramLink(t.contact.telegramMessage),
      primary: true,
    },
    { Icon: Phone, label: t.contact.phoneLabel, value: SITE.phone, href: SITE.phoneHref },
    { Icon: Mail, label: t.contact.emailLabel, value: SITE.email, href: `mailto:${SITE.email}` },
  ];

  return (
    <Section
      id="contact"
      eyebrow={headless ? undefined : t.contact.eyebrow}
      title={
        headless ? undefined : (
          <span className="text-5xl md:text-7xl font-black tracking-tighter">
            {t.contact.titleA}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">
              {t.contact.titleHl}
            </span>
          </span>
        )
      }
      description={headless ? undefined : t.contact.desc}
    >
      <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border/40 bg-surface/20 p-8 backdrop-blur-md md:p-12">
          <h3 className="font-display text-2xl font-bold tracking-tight">{t.contact.formTitle}</h3>

          {status === "success" ? (
            <div className="mt-8 rounded-[2rem] border border-success/30 bg-success/10 p-8 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-success/20 text-success">
                <Check className="h-7 w-7" />
              </div>
              <div className="mt-4 font-display text-xl font-bold text-foreground">
                {t.contact.sent}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{t.contact.successMsg}</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-8" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    {t.contact.name}
                  </span>
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder={t.contact.namePh}
                    className={`${inputBase} ${errors.name ? "border-destructive" : "border-border/50"}`}
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    {t.contact.contact}
                  </span>
                  <input
                    name="contact"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder={t.contact.contactPh}
                    className={`${inputBase} ${errors.contact ? "border-destructive" : "border-border/50"}`}
                  />
                </label>
              </div>

              {showNote ? (
                <label className="mt-4 block">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    {t.contact.note}
                  </span>
                  <textarea
                    name="note"
                    rows={4}
                    placeholder={t.contact.notePh}
                    className={`${inputBase} resize-none border-border/50`}
                  />
                </label>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowNote(true)}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
                >
                  <Plus className="h-4 w-4" />
                  {t.contact.noteToggle}
                </button>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-10 py-4 font-bold text-primary-foreground transition-all duration-300 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background disabled:opacity-70 sm:w-auto"
              >
                {status === "loading" ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground" />
                    {t.contact.sending}
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    {t.contact.submit}
                  </>
                )}
              </button>

              {status === "error" && (
                <p className="mt-4 text-sm font-medium text-destructive">{errorMsg}</p>
              )}
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                {t.contact.privacy}
              </p>
            </form>
          )}

          {/* The form is the secondary path — most people here would rather send
              one message than fill anything in. */}
          <div className="mt-10 border-t border-border/40 pt-8">
            <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {t.contact.orDivider}
            </div>
            <a
              href={telegramLink(t.contact.telegramMessage)}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold btn-glow sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              {t.common.writeTelegram}
            </a>
          </div>
        </div>

        {/* Info Sidebar */}
        <aside className="flex flex-col gap-6">
          <div className="group relative overflow-hidden rounded-[2rem] border border-border/40 bg-surface/20 p-8 backdrop-blur-md transition-colors hover:border-primary/40 hover:bg-surface/40">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-surface/50 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-glow">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <div className="font-display text-lg font-bold text-foreground">
                  {t.contact.replyTitle}
                </div>
                <div className="mt-1 font-mono text-sm tracking-wide text-muted-foreground">
                  {t.contact.replyHours}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {contacts.map(({ Icon, label, value, href, primary }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className={`group flex items-center gap-5 rounded-[2rem] border p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-surface/50 hover:shadow-glow ${
                  primary ? "border-primary/40 bg-primary/5" : "border-border/40 bg-surface/20"
                }`}
              >
                <div
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition-colors ${
                    primary
                      ? "bg-primary text-primary-foreground"
                      : "bg-background/50 text-muted-foreground group-hover:text-primary"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    {label}
                  </div>
                  <div className="mt-1 truncate font-display text-lg font-bold text-foreground">
                    {value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </aside>
      </div>
    </Section>
  );
}
