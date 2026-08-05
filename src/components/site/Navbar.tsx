import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";
import { useI18n } from "@/i18n";

export function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const NAV = [
    { to: "/", label: t.nav.home },
    { to: "/services", label: t.nav.services },
    { to: "/case-studies", label: t.nav.cases },
    { to: "/portfolio", label: t.nav.portfolio },
    { to: "/team", label: t.nav.team },
    { to: "/about", label: t.nav.about },
    { to: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 transition-all duration-500 md:top-6">
      <nav
        className={`relative flex w-full max-w-[1400px] items-center justify-between rounded-full border transition-all duration-500 ${
          scrolled
            ? "border-border/40 bg-background/60 px-4 py-2 shadow-lg backdrop-blur-xl md:px-6 md:py-3"
            : "border-transparent bg-transparent px-2 py-2 md:px-4"
        }`}
      >
        {/* Glow effect behind the navbar when scrolled */}
        {scrolled && (
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-full shadow-[0_0_30px_-5px_rgba(var(--primary),0.3)]"></div>
        )}

        <div className="flex shrink-0 items-center">
          <Logo />
        </div>

        <ul className="hidden items-center gap-1 xl:gap-2 lg:flex">
          {NAV.map((item) => {
            const active = pathname === item.to;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`relative whitespace-nowrap rounded-full px-4 py-2 text-[14px] font-semibold transition-all duration-300 ${
                    active
                      ? // `primary-foreground` is near-white in both themes, which
                        // vanishes against a 20% tint on a light background.
                        "text-primary bg-primary/10"
                      : "text-muted-foreground hover:bg-surface hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* gap tightens on narrow phones — logo, language, theme and the menu
            button all share this row at 360px. */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
          <Link
            to="/contact"
            className="hidden whitespace-nowrap rounded-full px-6 py-2.5 text-[14px] font-bold btn-glow lg:inline-flex"
          >
            {t.common.order}
          </Link>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-border/50 bg-surface/50 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {open && (
          <div className="absolute inset-x-0 top-[calc(100%+1rem)] flex flex-col gap-2 rounded-[2rem] border border-border/40 bg-background/80 p-4 shadow-xl backdrop-blur-xl lg:hidden">
            <ul className="flex flex-col gap-1">
              {NAV.map((item) => {
                const active = pathname === item.to;
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={`block rounded-2xl px-4 py-3 text-base font-semibold transition-colors ${
                        active
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-surface hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li className="mt-2">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="block w-full rounded-2xl py-3.5 text-center text-base font-bold btn-glow"
                >
                  {t.common.order}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
