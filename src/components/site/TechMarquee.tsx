import { TECH_STACK } from "@/lib/site";
import { useI18n } from "@/i18n";

export function TechMarquee() {
  const { t } = useI18n();
  const items = [...TECH_STACK, ...TECH_STACK];

  return (
    <div className="relative border-y border-border bg-surface/30 py-8">
      <div className="mb-6 text-center text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
        {t.hero.stack}
      </div>
      <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-4 group-hover:[animation-play-state:paused]">
          {items.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
