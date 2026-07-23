import { useEffect, useState } from "react";
import { Send, Check, Clock, MessageCircle, Mail, Phone, Terminal } from "lucide-react";
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
    // TODO: backend integration
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
    form.reset();
    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputBase =
    "w-full border-0 border-b-2 bg-transparent px-0 py-4 text-lg font-medium text-foreground placeholder:text-muted-foreground/30 outline-none transition-all focus:border-primary focus:ring-0";

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
          <span className="text-5xl md:text-7xl font-black tracking-tighter">
            {t.contact.titleA} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">{t.contact.titleHl}</span>
          </span>
        )
      }
      description={headless ? undefined : t.contact.desc}
    >
      <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_400px]">
        {/* Terminal/Booking Form */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border/40 bg-surface/20 p-8 backdrop-blur-md md:p-12">
          
          <div className="mb-8 flex items-center gap-3 border-b border-border/40 pb-6">
             <Terminal className="h-6 w-6 text-primary" />
             <span className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
                New_Project_Request.exe
             </span>
          </div>

          <form
            id="contact-form"
            onSubmit={onSubmit}
            className={`${status === "error" ? "animate-shake" : ""}`}
            noValidate
          >
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
              <div className="group sm:col-span-1">
                <label className="block font-mono text-xs font-bold uppercase tracking-widest text-primary/80 transition-colors group-focus-within:text-primary">
                  {t.contact.name} <span className="text-destructive">*</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder={t.contact.namePh}
                  className={`${inputBase} ${errors.name ? "border-destructive" : "border-border/50"}`}
                />
              </div>
              
              <div className="group sm:col-span-1">
                <label className="block font-mono text-xs font-bold uppercase tracking-widest text-primary/80 transition-colors group-focus-within:text-primary">
                  {t.contact.phone} <span className="text-destructive">*</span>
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+998 90 123 45 67"
                  className={`${inputBase} ${errors.phone ? "border-destructive" : "border-border/50"}`}
                />
              </div>
              
              <div className="group sm:col-span-2">
                <label className="block font-mono text-xs font-bold uppercase tracking-widest text-primary/80 transition-colors group-focus-within:text-primary">
                  {t.contact.email} <span className="text-destructive">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className={`${inputBase} ${errors.email ? "border-destructive" : "border-border/50"}`}
                />
              </div>
              
              <div className="group sm:col-span-1">
                <label className="block font-mono text-xs font-bold uppercase tracking-widest text-primary/80 transition-colors group-focus-within:text-primary">
                  {t.contact.projectType}
                </label>
                <select name="type" className={`${inputBase} border-border/50 appearance-none bg-transparent cursor-pointer`} defaultValue="">
                  <option value="" disabled className="bg-background text-muted-foreground">
                    {t.contact.choose}
                  </option>
                  {t.contact.types.map((ty) => (
                    <option key={ty} className="bg-background">{ty}</option>
                  ))}
                </select>
              </div>
              
              <div className="group sm:col-span-1">
                <label className="block font-mono text-xs font-bold uppercase tracking-widest text-primary/80 transition-colors group-focus-within:text-primary">
                  {t.contact.budget}
                </label>
                <input
                  name="budget"
                  type="text"
                  defaultValue={prefill?.budget ?? ""}
                  placeholder={t.contact.budgetPh}
                  className={`${inputBase} border-border/50`}
                />
              </div>
              
              <div className="group sm:col-span-2">
                <label className="block font-mono text-xs font-bold uppercase tracking-widest text-primary/80 transition-colors group-focus-within:text-primary">
                  {t.contact.note}
                </label>
                <textarea
                  name="note"
                  rows={4}
                  defaultValue={prefill?.note ?? ""}
                  placeholder={t.contact.notePh}
                  className={`${inputBase} border-border/50 resize-none`}
                />
              </div>
            </div>

            <div className="mt-12 flex items-center justify-between border-t border-border/40 pt-8">
              <span className="font-mono text-xs text-muted-foreground hidden sm:inline-block">
                SYS: ready for transmission
              </span>
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-10 py-4 font-bold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background disabled:opacity-70 disabled:hover:scale-100 disabled:hover:shadow-none"
              >
                {status === "loading" ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground" />
                    {t.contact.sending}
                  </>
                ) : status === "success" ? (
                  <>
                    <Check className="h-5 w-5" />
                    {t.contact.sent}
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    {t.contact.submit}
                  </>
                )}
              </button>
            </div>

            {status === "success" && (
              <div className="mt-6 rounded-2xl border border-success/30 bg-success/10 px-6 py-4 text-sm font-medium text-success backdrop-blur-sm">
                {t.contact.successMsg}
              </div>
            )}
          </form>
        </div>

        {/* Info Sidebar */}
        <aside className="flex flex-col gap-6">
          <div className="group relative overflow-hidden rounded-[2rem] border border-border/40 bg-surface/20 p-8 backdrop-blur-md transition-colors hover:border-primary/40 hover:bg-surface/40">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-surface/50 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-glow">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <div className="font-display text-lg font-bold text-foreground">{t.contact.replyTitle}</div>
                <div className="mt-1 font-mono text-sm tracking-wide text-muted-foreground">{t.contact.replyHours}</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {contacts.map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center gap-5 rounded-[2rem] border border-border/40 bg-surface/20 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-surface/50 hover:shadow-glow"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-background/50 text-muted-foreground transition-colors group-hover:text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">{label}</div>
                  <div className="mt-1 font-display text-lg font-bold text-foreground">{value}</div>
                </div>
              </a>
            ))}
          </div>
        </aside>
      </div>
    </Section>
  );
}
