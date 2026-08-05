import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { applyTheme, currentTheme, readStoredTheme, storeTheme, type Theme } from "@/lib/theme";
import { useI18n } from "@/i18n";

export function ThemeToggle() {
  const { t } = useI18n();
  // Only drives the accessible label. The icon swap is done in CSS off the
  // `dark` class, so it is correct on the very first paint — before this
  // component has had a chance to read storage.
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(readStoredTheme() ?? currentTheme());
  }, []);

  const toggle = () => {
    const next: Theme = currentTheme() === "dark" ? "light" : "dark";
    applyTheme(next);
    storeTheme(next);
    setTheme(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? t.theme.toLight : t.theme.toDark}
      title={theme === "dark" ? t.theme.toLight : t.theme.toDark}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/60 text-foreground transition-all hover:border-primary/50 hover:text-primary"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
    </button>
  );
}
