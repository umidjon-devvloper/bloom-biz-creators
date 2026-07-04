import { Check } from "lucide-react";
import { Section } from "./Section";
import { useCountUp, useReveal } from "@/hooks/use-reveal";
import { useI18n } from "@/i18n";

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, visible } = useReveal();
  const n = useCountUp(value, visible, 1800);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl font-bold text-gradient-primary tabular-nums md:text-5xl">
        {n}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export function About({ headless = false }: { headless?: boolean }) {
  const { t } = useI18n();

  return (
    <Section
      id="about"
      eyebrow={headless ? undefined : t.about.eyebrow}
      title={
        headless ? undefined : (
          <>
            {t.about.titleA} <span className="text-gradient-primary">{t.about.titleHl}</span>
          </>
        )
      }
      description={headless ? undefined : t.about.desc}
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative perspective-1000">
          <div className="absolute inset-0 -z-10 bg-gradient-mesh blur-3xl opacity-60" />
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square animate-float-slow rounded-2xl border border-border bg-gradient-primary opacity-90" />
              <div className="aspect-4/5 rounded-2xl border border-border glass" />
            </div>
            <div className="space-y-4 pt-10">
              <div className="aspect-4/5 rounded-2xl border border-border bg-surface-elevated" />
              <div
                className="aspect-square animate-float-slow rounded-2xl border border-border bg-gradient-mesh"
                style={{ animationDelay: "-3s" }}
              />
            </div>
          </div>
        </div>

        <div>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{t.about.body}</p>
          <ul className="mt-6 space-y-3">
            {t.about.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-primary text-primary-foreground">
                  <Check className="h-3 w-3" />
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid grid-cols-2 gap-6 rounded-2xl border border-border bg-card p-6 md:grid-cols-4">
            {t.about.stats.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
