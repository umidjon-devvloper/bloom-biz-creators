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
          <span className="text-5xl md:text-7xl font-black tracking-tighter">
            {t.about.whyTitleA}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">
              {t.about.whyTitleHl}
            </span>
          </span>
        )
      }
      description={headless ? undefined : t.about.whyDesc}
    >
      <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
        {/* Left Side: Editorial Statement */}
        <div className="lg:col-span-5">
          <div className="sticky top-32">
            <h2 className="font-display text-4xl font-black leading-tight tracking-tighter md:text-5xl">
              {t.about.whyLeadA} <br />
              <span className="text-muted-foreground">{t.about.whyLeadB}</span>
            </h2>
            <p className="mt-8 text-lg font-medium leading-relaxed text-muted-foreground">
              {t.about.whyLeadBody}
            </p>
          </div>
        </div>

        {/* Right Side: Minimalist Strengths List */}
        <div className="flex flex-col gap-12 lg:col-span-7">
          {t.about.reasons.map((r, i) => {
            const Icon = ICONS[i];
            const num = String(i + 1).padStart(2, "0");
            return (
              <Reveal key={r.title} delay={i * 100}>
                <div className="group relative flex flex-col items-start gap-6 border-t border-border/40 pt-10 sm:flex-row sm:items-start sm:gap-10">
                  <div className="flex shrink-0 items-center gap-6">
                    <span className="font-display text-xl font-bold text-muted-foreground transition-colors group-hover:text-primary">
                      {num}
                    </span>
                    <div className="grid h-16 w-16 place-items-center rounded-2xl bg-surface/50 text-foreground transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-glow">
                      <Icon className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                      {r.title}
                    </h3>
                    <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground opacity-80 transition-opacity duration-500 group-hover:opacity-100">
                      {r.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
