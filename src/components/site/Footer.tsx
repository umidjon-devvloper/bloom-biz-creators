import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Send } from "lucide-react";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";
import { useI18n } from "@/i18n";

const COMPANY_LINKS = ["/about", "/team", "/portfolio", "/services", "/contact"];

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface/50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-gradient-mesh opacity-40 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-5 max-w-sm text-sm text-muted-foreground">{t.footer.tagline}</p>
            <div className="mt-6 flex items-center gap-2">
              {[
                { Icon: Github, href: SITE.github },
                { Icon: Linkedin, href: SITE.linkedin },
                { Icon: Send, href: SITE.telegram },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-glow"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold">{t.footer.servicesTitle}</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {t.footer.services.map((s) => (
                <li key={s}>
                  <Link to="/services" className="transition-colors hover:text-foreground">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">{t.footer.companyTitle}</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {t.footer.company.map((label, i) => (
                <li key={label}>
                  <Link to={COMPANY_LINKS[i]} className="transition-colors hover:text-foreground">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <div>
            © {new Date().getFullYear()} {SITE.name}. {t.footer.rights}
          </div>
          <div>
            {t.footer.location} · {SITE.email}
          </div>
        </div>
      </div>
    </footer>
  );
}
