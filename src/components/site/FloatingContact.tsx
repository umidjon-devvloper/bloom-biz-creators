import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export function FloatingContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="https://t.me/"
      target="_blank"
      rel="noreferrer"
      aria-label="Telegram orqali yozing"
      className={`fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold btn-glow animate-pulse-glow transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <MessageCircle className="h-4 w-4" />
      <span className="hidden sm:inline">Telegram'da yozing</span>
    </a>
  );
}
