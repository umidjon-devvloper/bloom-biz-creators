import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
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
    { to: "/case-studies", label: "Case Studies" },
    { to: "/portfolio", label: t.nav.portfolio },
    { to: "/blog", label: "Blog" },
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        <Logo />

        <ul className="hidden items-center gap-0.5 xl:flex">
          {NAV.map((item) => {
            const active = pathname === item.to;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`relative rounded-full px-3 py-2 text-[14px] font-medium transition-colors ${
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-primary" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <Link
            to="/contact"
            className="hidden rounded-full px-5 py-2 text-[14px] font-semibold btn-glow xl:inline-flex"
          >
            {t.common.order}
          </Link>
          <button
            className="grid h-9 w-9 place-items-center rounded-full border border-border xl:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass-strong border-t border-border xl:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-[15px] font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full px-5 py-3 text-center text-sm font-semibold btn-glow"
            >
              {t.common.order}
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}
