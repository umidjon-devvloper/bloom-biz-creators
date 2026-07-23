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
        <span className="text-5xl md:text-7xl font-black tracking-tighter">
          {t.home.processTitleA}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">{t.home.processTitleHl}</span>
        </span>
      }
      description={t.home.processDesc}
    >
      <div className="mx-auto mt-16 max-w-4xl">
        <div className="relative flex flex-col gap-16 md:gap-24">
          
          {/* Vertical connecting line */}
          <div
            aria-hidden
            className="absolute bottom-0 left-[39px] top-4 w-px bg-gradient-to-b from-primary via-border/50 to-transparent md:left-[59px]"
          />

          {t.home.process.map((step, i) => {
            const Icon = ICONS[i];
            const num = String(i + 1).padStart(2, "0");
            
            return (
              <Reveal key={step.title} delay={i * 150}>
                <div className="group relative flex items-start gap-8 md:gap-16">
                  
                  {/* Timeline Node */}
                  <div className="relative z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-border/50 bg-background/80 backdrop-blur-sm transition-all duration-500 group-hover:border-primary group-hover:bg-surface md:h-[120px] md:w-[120px]">
                    <div className="absolute inset-0 rounded-full bg-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="font-display text-2xl font-black text-muted-foreground transition-colors duration-500 group-hover:text-primary md:text-4xl">
                      {num}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col pt-3 md:pt-8">
                    <div className="flex items-center gap-4">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-surface/50 text-foreground transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-glow md:h-12 md:w-12">
                        <Icon className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <h3 className="font-display text-2xl font-bold tracking-tight text-foreground transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                        {step.title}
                      </h3>
                    </div>
                    
                    <div className="mt-6 rounded-2xl border border-border/40 bg-surface/20 p-6 backdrop-blur-md transition-colors duration-500 group-hover:border-primary/20 md:p-8">
                      <p className="text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
                        {step.desc}
                      </p>
                    </div>
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
