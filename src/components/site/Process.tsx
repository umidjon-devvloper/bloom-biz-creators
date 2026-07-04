import { Search, PenTool, Code2, Rocket } from "lucide-react";
import { Section, Reveal } from "./Section";
import { useI18n } from "@/i18n";

const ICONS = [Search, PenTool, Code2, Rocket];

export function Process() {
  const { t } = useI18n();

  return (
    <Section
      eyebrow={t.home.processEyebrow}
      title={
        <>
          {t.home.processTitleA}{" "}
          <span className="text-gradient-primary">{t.home.processTitleHl}</span>
        </>
      }
      description={t.home.processDesc}
    >
      <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* connector line */}
        <div
          aria-hidden
          className="absolute left-0 right-0 top-9 hidden h-px bg-linear-to-r from-transparent via-primary/40 to-transparent lg:block"
        />
        {t.home.process.map((step, i) => {
          const Icon = ICONS[i];
          return (
            <Reveal key={step.title} delay={i * 90}>
              <div className="group relative h-full rounded-2xl border border-border bg-card p-6 card-hover">
                <div className="flex items-center justify-between">
                  <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary/10 text-primary ring-1 ring-primary/20 transition-transform group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-display text-5xl font-bold text-primary/10 transition-colors group-hover:text-primary/25">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
