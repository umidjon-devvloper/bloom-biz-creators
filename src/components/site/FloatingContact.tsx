import { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { SITE, telegramLink } from "@/lib/site";
import { useI18n } from "@/i18n";

/**
 * Always-available Telegram handoff. Previously this only appeared after 400px
 * of scrolling, which meant it was missing on exactly the screens where people
 * decide to get in touch: the hero, and any short page. It now shows on every
 * page from the start, with a call button that appears on mobile where tapping
 * to dial is a real option.
 *
 * The prefilled message needs a public @username to survive — see telegramLink
 * in lib/site.ts. With a phone-number link it degrades to opening the chat.
 */
export function FloatingContact() {
  const { t } = useI18n();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setExpanded(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <a
        href={SITE.phoneHref}
        aria-label={t.floating.call}
        className="grid h-12 w-12 place-items-center rounded-full border border-border/60 bg-surface/80 text-foreground shadow-lg backdrop-blur-md transition-all duration-300 hover:border-primary/60 hover:text-primary sm:hidden"
      >
        <Phone className="h-5 w-5" />
      </a>

      <a
        href={telegramLink(t.contact.telegramMessage)}
        target="_blank"
        rel="noreferrer"
        aria-label={t.floating.aria}
        className="inline-flex items-center gap-2 rounded-full px-4 py-3.5 text-sm font-bold btn-glow animate-pulse-glow shadow-lg transition-all duration-300 sm:px-5"
      >
        <MessageCircle className="h-5 w-5 shrink-0" />
        {/* The label unfurls once the visitor is reading rather than landing, so
            it never covers hero content on a small screen. */}
        <span
          className={`overflow-hidden whitespace-nowrap transition-all duration-500 ${
            expanded
              ? "max-w-[14rem] opacity-100"
              : "max-w-0 opacity-0 sm:max-w-[14rem] sm:opacity-100"
          }`}
        >
          {t.floating.telegram}
        </span>
      </a>
    </div>
  );
}
