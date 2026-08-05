export type Theme = "dark" | "light";

export const THEME_KEY = "ua-theme";

/**
 * Dark is the default everywhere: it is what :root defines, what the server
 * renders, and what a visitor with no stored preference gets. Light is applied
 * on top, so a failure anywhere in this file degrades to the original design
 * rather than to an unstyled page.
 *
 * The inline THEME_INIT script in routes/__root.tsx duplicates the read below
 * on purpose — it has to run before first paint, which is earlier than any
 * module can load. Keep the storage key and class names in step with it.
 */
export function applyTheme(theme: Theme) {
  const el = document.documentElement;
  el.classList.toggle("dark", theme === "dark");
  el.classList.toggle("light", theme === "light");
}

export function readStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(THEME_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null; // Private mode, or storage blocked.
  }
}

export function storeTheme(theme: Theme) {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    /* Preference just won't persist; the current page still switches. */
  }
}

/** Reads the live DOM rather than React state, so a click can never act on a
 *  stale value during the gap between hydration and the first effect. */
export function currentTheme(): Theme {
  return typeof document !== "undefined" && document.documentElement.classList.contains("light")
    ? "light"
    : "dark";
}
