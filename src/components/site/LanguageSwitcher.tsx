import { useEffect, useRef, useState } from "react";
import { Check, Globe } from "lucide-react";
import { LANGS, useI18n } from "@/i18n";

export function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = LANGS.find((l) => l.code === lang)!;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Language"
        className="inline-flex h-9 items-center gap-1.5 rounded-full border border-border bg-surface/60 px-3 text-xs font-semibold text-foreground transition-all hover:border-primary/50 hover:text-primary"
      >
        <Globe className="h-4 w-4" />
        <span className="uppercase">{current.code}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-11 z-50 w-44 overflow-hidden rounded-2xl border border-border glass-strong p-1.5 shadow-elevated">
          {LANGS.map((l) => {
            const active = l.code === lang;
            return (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-2 rounded-xl px-3 py-2 text-sm transition-colors ${
                  active ? "bg-primary/10 text-primary" : "text-foreground hover:bg-accent"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-base leading-none">{l.flag}</span>
                  {l.label}
                </span>
                {active && <Check className="h-3.5 w-3.5" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
