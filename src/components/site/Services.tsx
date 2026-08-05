import { Link } from "@tanstack/react-router";
import {
  Globe,
  Building2,
  ShoppingBag,
  Smartphone,
  Server,
  Palette,
  ArrowRight,
} from "lucide-react";
import { Section, Reveal } from "./Section";
import { useI18n } from "@/i18n";

const ICONS = [Globe, Building2, ShoppingBag, Smartphone, Server, Palette];

export function Services({
  headless = false,
  showCta = false,
}: {
  headless?: boolean;
  showCta?: boolean;
}) {
  const { t } = useI18n();

  return (
    <Section
      id="services"
      eyebrow={headless ? undefined : t.services.eyebrow}
      title={
        headless ? undefined : (
          <span className="text-5xl md:text-7xl font-black tracking-tighter">
            {t.services.titleA}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">
              {t.services.titleHl}
            </span>
          </span>
        )
      }
      description={headless ? undefined : t.services.desc}
    >
      <div className="mt-12 flex flex-col border-t border-border/40">
        {t.services.items.map((s, i) => {
          const Icon = ICONS[i];
          const num = String(i + 1).padStart(2, "0");
          return (
            <Reveal key={s.title} delay={i * 100}>
              <div className="group relative flex flex-col items-start justify-between border-b border-border/40 py-10 transition-colors duration-500 hover:bg-surface/40 md:flex-row md:items-center md:py-16 px-4 md:px-8">
                {/* Left side: Number and Title */}
                <div className="flex items-start gap-6 md:gap-12">
                  <span className="font-display text-4xl font-light text-border transition-colors duration-500 group-hover:text-primary md:text-6xl">
                    {num}
                  </span>
                  <div>
                    <h3 className="font-display text-3xl font-black tracking-tight text-foreground transition-transform duration-500 group-hover:translate-x-4 md:text-5xl">
                      {s.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-base font-medium leading-relaxed text-muted-foreground opacity-70 transition-opacity duration-500 group-hover:opacity-100">
                      {s.desc}
                    </p>
                  </div>
                </div>

                {/* Right side: Price and Icon (Reveals on hover on desktop) */}
                <div className="mt-8 flex w-full items-end justify-between md:mt-0 md:w-auto md:flex-col md:items-end md:gap-6">
                  <div className="flex flex-col gap-1 md:text-right">
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      {t.common.startingFrom}
                    </span>
                    <span className="font-display text-xl font-bold text-primary md:text-2xl">
                      {s.from}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 md:-translate-x-8 md:opacity-0 md:transition-all md:duration-500 md:group-hover:translate-x-0 md:group-hover:opacity-100">
                    <div className="grid h-12 w-12 place-items-center rounded-full border border-border/50 bg-background text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow transition-transform group-hover:scale-110">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {showCta && (
        <div className="mt-16 text-center">
          <Link
            to="/services"
            className="group inline-flex items-center gap-3 rounded-full border border-border/50 bg-surface/50 px-8 py-4 text-base font-bold text-foreground backdrop-blur-md transition-all hover:border-primary/50 hover:bg-surface hover:shadow-glow"
          >
            {t.home.seeAll}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </Section>
  );
}
