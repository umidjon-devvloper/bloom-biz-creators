import { Check } from "lucide-react";
import { Section } from "./Section";
import { useCountUp, useReveal } from "@/hooks/use-reveal";
import { FACTS } from "@/lib/site";
import { useI18n } from "@/i18n";

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, visible } = useReveal();
  const n = useCountUp(value, visible, 2000);
  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-[2rem] border border-border/40 bg-surface/20 p-8 text-center backdrop-blur-md transition-all duration-500 hover:border-primary/50 hover:bg-surface/50 hover:shadow-glow"
    >
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />
      <div className="relative font-display text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/60 tabular-nums tracking-tighter md:text-7xl">
        {n}
        <span className="text-primary">{suffix}</span>
      </div>
      <div className="relative mt-4 font-mono text-sm font-bold uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-foreground">
        {label}
      </div>
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
          <span className="text-5xl md:text-7xl font-black tracking-tighter">
            {t.about.titleA}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">
              {t.about.titleHl}
            </span>
          </span>
        )
      }
      description={headless ? undefined : t.about.desc}
    >
      <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
        <div className="relative perspective-1000 order-2 lg:order-1">
          <div className="absolute inset-0 -z-10 bg-gradient-mesh blur-3xl opacity-40 mix-blend-screen" />
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="aspect-square animate-float-slow rounded-[2.5rem] border border-border/50 bg-gradient-to-br from-primary/80 to-primary-glow/80 shadow-glow backdrop-blur-md" />
              <div className="aspect-4/5 rounded-[2.5rem] border border-border/50 bg-surface/30 backdrop-blur-md" />
            </div>
            <div className="space-y-6 pt-16">
              <div className="aspect-4/5 rounded-[2.5rem] border border-border/50 bg-surface-elevated/50 backdrop-blur-md" />
              <div
                className="aspect-square animate-float-slow rounded-[2.5rem] border border-border/50 bg-gradient-mesh backdrop-blur-md"
                style={{ animationDelay: "-3s" }}
              />
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h3 className="font-display text-3xl font-black leading-tight tracking-tight text-foreground md:text-5xl">
            {t.about.titleA} <br />
            <span className="text-primary">{t.about.titleHl}</span>
          </h3>
          <p className="mt-8 text-lg font-medium leading-relaxed text-muted-foreground md:text-xl">
            {t.about.body}
          </p>
          <ul className="mt-10 space-y-5">
            {t.about.points.map((p) => (
              <li key={p} className="flex items-start gap-4 text-base font-medium">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-foreground/90">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Statistics — values come from FACTS so they cannot contradict the
          portfolio, and the note underneath tells visitors how to check them. */}
      <div className="mt-24 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {t.about.stats.map((s) => (
          <Stat key={s.key} value={FACTS[s.key]} suffix={s.suffix} label={s.label} />
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
        {t.about.statsNote}
      </p>
    </Section>
  );
}
