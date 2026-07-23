import { TECH_STACK } from "@/lib/site";
import { useI18n } from "@/i18n";

export function TechMarquee() {
  const { t } = useI18n();
  // Duplicate more times to ensure seamless scrolling on ultra-wide screens
  const items = [...TECH_STACK, ...TECH_STACK, ...TECH_STACK, ...TECH_STACK];

  return (
    <div className="relative border-y border-border/20 bg-background/50 py-12 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
      
      <div className="mb-8 text-center text-xs font-bold uppercase tracking-[0.3em] text-primary">
        {t.hero.stack}
      </div>
      
      <div className="group relative flex overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-6 group-hover:[animation-play-state:paused]">
          {items.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="inline-flex items-center gap-3 rounded-full border border-border/40 bg-surface/30 px-6 py-3 text-sm font-bold text-muted-foreground backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-surface/50 hover:text-foreground hover:shadow-glow"
            >
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-primary-glow shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
