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

export const DEFAULT_LANG: Lang = "uz";

/**
 * Reads a `?lang=` override out of parsed search params. Ad campaigns land on a
 * language-pinned URL (`/?lang=ru`) so the server renders that language in the
 * very first HTML response: ad reviewers and crawlers never run the client-side
 * detection below, and a Russian ad pointing at an Uzbek document reads as a
 * language mismatch to them.
 */
export function langFromSearch(search: unknown): Lang | null {
  const raw = (search as { lang?: unknown } | null | undefined)?.lang;
  if (typeof raw !== "string") return null;
  const code = raw.slice(0, 2).toLowerCase();
  return code in translations ? (code as Lang) : null;
}

export function I18nProvider({
  children,
  initialLang,
}: {
  children: ReactNode;
  /** Server-resolved language, from `?lang=`. Pinned — auto-detection is skipped. */
  initialLang?: Lang | null;
}) {
  // Server and first client render must agree, so both start from the URL when
  // it pins a language and from "uz" otherwise; the stored preference is applied
  // right after mount.
  const [lang, setLangState] = useState<Lang>(initialLang ?? DEFAULT_LANG);

  useEffect(() => {
    // An explicit ?lang= wins over anything remembered from a previous visit.
    if (initialLang) {
      try {
        localStorage.setItem(STORAGE_KEY, initialLang);
      } catch {
        /* ignore */
      }
      return;
    }
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
