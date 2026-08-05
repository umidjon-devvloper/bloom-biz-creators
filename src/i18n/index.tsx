import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations, type Dict, type Lang, LANGS } from "./translations";

const STORAGE_KEY = "ua-lang";

type I18nCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
};

const I18nContext = createContext<I18nCtx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  // Default to "uz" on both server and first client render to avoid hydration
  // mismatches; the stored preference is applied right after mount.
  const [lang, setLangState] = useState<Lang>("uz");

  useEffect(() => {
    let next: Lang | null = null;
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored && translations[stored]) next = stored;
    } catch {
      /* ignore */
    }
    if (!next && typeof navigator !== "undefined") {
      const nav = navigator.language.slice(0, 2).toLowerCase();
      if (nav === "ru") next = "ru";
      else if (nav === "en") next = "en";
    }
    if (next && next !== lang) setLangState(next);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<I18nCtx>(() => ({ lang, setLang, t: translations[lang] }), [lang, setLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within <I18nProvider>");
  return ctx;
}

const FALLBACK: I18nCtx = { lang: "uz", setLang: () => {}, t: translations.uz };

/**
 * Same as useI18n, but safe outside the provider. Router-level boundaries
 * (notFound, error) can render in place of the tree that mounts I18nProvider, and
 * throwing there would replace a translated 404 with a crash.
 */
export function useI18nOptional() {
  return useContext(I18nContext) ?? FALLBACK;
}

export { LANGS };
export type { Lang };
