import { Link } from "@tanstack/react-router";
import { Globe, Building2, ShoppingBag, Smartphone, Server, Palette, ArrowRight } from "lucide-react";
import { Section, Reveal } from "./Section";
import { useI18n } from "@/i18n";

const ICONS = [Globe, Building2, ShoppingBag, Smartphone, Server, Palette];

export function Services({ headless = false, showCta = false }: { headless?: boolean; showCta?: boolean }) {
  const { t } = useI18n();

  return (
    <Section
      id="services"
      eyebrow={headless ? undefined : t.services.eyebrow}
      title={
        headless ? undefined : (
          <>
            {t.services.titleA} <span className="text-gradient-primary">{t.services.titleHl}</span>
          </>
        )
      }
      description={headless ? undefined : t.services.desc}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {t.services.items.map((s, i) => {
          const Icon = ICONS[i];
          return (
            <Reveal key={s.title} delay={i * 80}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 card-hover">
                <div
                  aria-hidden
                  className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary/10 text-primary ring-1 ring-primary/20 transition-transform group-hover:scale-110 group-hover:-rotate-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                    <span className="text-xs text-muted-foreground">{t.common.from}</span>
                    <span className="font-display text-lg font-bold text-gradient-primary">{s.from}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {showCta && (
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-surface"
          >
            {t.home.seeAll}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </Section>
  );
}
