import { Eye, Zap, Users2, LifeBuoy, ShieldCheck, Rocket } from "lucide-react";
import { Section, Reveal } from "./Section";
import { useI18n } from "@/i18n";

const ICONS = [Eye, Zap, Users2, LifeBuoy, ShieldCheck, Rocket];

export function WhyUs({ headless = false }: { headless?: boolean }) {
  const { t } = useI18n();

  return (
    <Section
      id="why"
      eyebrow={headless ? undefined : t.about.whyEyebrow}
      title={
        headless ? undefined : (
          <>
            {t.about.whyTitleA} <span className="text-gradient-primary">{t.about.whyTitleHl}</span>
          </>
        )
      }
      description={headless ? undefined : t.about.whyDesc}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {t.about.reasons.map((r, i) => {
          const Icon = ICONS[i];
          return (
            <Reveal key={r.title} delay={i * 70}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 card-hover">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary/10 text-primary ring-1 ring-primary/20 transition-transform group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-bold">{r.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
