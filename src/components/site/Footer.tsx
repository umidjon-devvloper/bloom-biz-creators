import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Send, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";
import { useI18n } from "@/i18n";

const COMPANY_LINKS = ["/about", "/team", "/portfolio", "/services", "/contact"];
const PLATFORM_LINKS = ["/careers", "/portal", "/maintenance"];

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="relative overflow-hidden border-t border-border/40 bg-background pb-8 pt-24 md:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-full bg-gradient-mesh opacity-20 mix-blend-screen"
      />
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Massive Call to Action Area */}
        <div className="flex flex-col items-start justify-between border-b border-border/40 pb-16 md:flex-row md:items-end">
          <h2 className="font-display text-5xl font-black leading-[0.9] tracking-tighter text-foreground sm:text-7xl md:text-8xl lg:text-[8rem]">
            {t.footer.ctaTitleA}
            <br />
            <span className="text-muted-foreground">{t.footer.ctaTitleB}</span>
          </h2>
          <div className="mt-12 flex items-center gap-4 md:mt-0">
            {[
              { Icon: Github, href: SITE.github, name: "GitHub" },
              { Icon: Linkedin, href: SITE.linkedin, name: "LinkedIn" },
              { Icon: Send, href: SITE.telegram, name: "Telegram" },
            ].map(({ Icon, href, name }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                target="_blank"
                rel="noreferrer"
                className="group relative flex h-16 w-16 items-center justify-center rounded-full border border-border/50 bg-surface/50 text-foreground transition-all duration-500 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow"
              >
                <Icon className="h-6 w-6 transition-transform duration-500 group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>

        {/* Editorial Grid Links */}
        <div className="grid grid-cols-2 gap-12 py-16 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-8">
              <Logo />
            </div>
            <p className="max-w-sm text-lg font-medium text-muted-foreground">{t.footer.tagline}</p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 text-xl font-bold transition-colors hover:text-primary"
              >
                {t.common.order}
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {t.footer.servicesTitle}
            </h4>
            <ul className="mt-8 space-y-4">
              {t.footer.services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-base font-semibold transition-colors hover:text-primary"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {t.footer.companyTitle}
            </h4>
            <ul className="mt-8 space-y-4">
              {t.footer.company.map((label, i) => (
                <li key={label}>
                  <Link
                    to={COMPANY_LINKS[i]}
                    className="text-base font-semibold transition-colors hover:text-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {t.footer.platformTitle}
            </h4>
            <ul className="mt-8 space-y-4">
              {/* /privacy used to be listed here but no such route exists — a
                  footer link to a 404 reads as an unfinished site. */}
              {t.footer.platform.map((label, i) => (
                <li key={label}>
                  <Link
                    to={PLATFORM_LINKS[i]}
                    className="text-base font-semibold transition-colors hover:text-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 text-sm font-medium text-muted-foreground md:flex-row">
          <div>
            © {new Date().getFullYear()} {SITE.name}. {t.footer.rights}
          </div>
          <div className="flex items-center gap-4">
            <span>{t.footer.location}</span>
            <span className="h-1 w-1 rounded-full bg-border"></span>
            <span>{SITE.email}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
