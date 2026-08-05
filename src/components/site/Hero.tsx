import { Link } from "@tanstack/react-router";
import { ArrowRight, Calculator, FolderGit2, Users, CalendarDays } from "lucide-react";
import { FACTS } from "@/lib/site";
import { useI18n } from "@/i18n";

/** Index-aligned with `hero.stats` in translations. */
const STAT_ICONS = [FolderGit2, Users, CalendarDays];

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Gradients & Effects */}
      <div className="absolute inset-0 -z-30 bg-background" />

      {/* Huge Ambient Aurora */}
      <div className="absolute left-1/2 top-0 -z-20 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-[100%] bg-primary/25 blur-[120px] mix-blend-screen animate-pulse-glow" />
      <div className="absolute right-0 top-[20%] -z-20 h-[500px] w-[500px] translate-x-1/3 rounded-[100%] bg-accent/20 blur-[120px] mix-blend-screen" />

      {/* Perspective Grid Floor */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[100vh] overflow-hidden [perspective:800px] opacity-70">
        <div className="absolute inset-0 top-1/2 origin-bottom [transform:rotateX(75deg)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklab,var(--primary)_15%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--primary)_15%,transparent)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,transparent,black_60%,transparent)]" />
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

      {/* Central Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
        {/* Availability Badge */}
        <div
          className="inline-flex items-center gap-3 rounded-full border border-border/50 bg-surface/50 px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur-md shadow-sm opacity-0"
          style={{ animation: "fade-up 800ms cubic-bezier(0.22, 1, 0.36, 1) 100ms forwards" }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
          </span>
          {t.hero.badge}
        </div>

        {/* Massive Headline */}
        <h1
          className="mt-10 sm:mt-12 font-display text-4xl sm:text-5xl md:text-6xl lg:text-[6.5rem] font-black leading-[1.1] sm:leading-[1.05] tracking-tight text-foreground opacity-0"
          style={{ animation: "fade-up 1000ms cubic-bezier(0.22, 1, 0.36, 1) 300ms forwards" }}
        >
          {t.hero.titleA}
          <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-glow to-primary px-2 pb-2 inline-block">
            {t.hero.titleHl}
          </span>
          <br className="hidden sm:block" />
          <span className="text-foreground/90">{t.hero.titleB}</span>
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto mt-10 max-w-3xl text-lg font-medium text-muted-foreground md:text-xl leading-relaxed opacity-0"
          style={{ animation: "fade-up 1000ms cubic-bezier(0.22, 1, 0.36, 1) 500ms forwards" }}
        >
          {t.hero.subtitle}
        </p>

        {/* CTAs — the primary action is the calculator the subtitle promises. */}
        <div
          className="mt-10 sm:mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row opacity-0"
          style={{ animation: "fade-up 1000ms cubic-bezier(0.22, 1, 0.36, 1) 700ms forwards" }}
        >
          <Link
            to="/services"
            hash="calculator"
            className="group relative flex w-full sm:w-auto items-center justify-center gap-2 rounded-full px-8 py-4 sm:px-10 sm:py-5 text-base font-bold btn-glow overflow-hidden"
          >
            <Calculator className="relative z-10 h-5 w-5" />
            <span className="relative z-10">{t.hero.cta1}</span>
            <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/case-studies"
            className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-border/50 bg-surface/50 px-8 py-4 sm:px-10 sm:py-5 text-base font-bold text-foreground backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-surface hover:shadow-glow"
          >
            {t.hero.cta2}
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/*
          Stats sit in the flow rather than floating absolutely over the hero.
          The floating version was positioned into the same band as the headline,
          so on a ~1400px screen the first card covered the opening letter — and
          it was `hidden xl:block`, meaning the one audience most likely to check
          these numbers, phone visitors, never saw them at all.

          Every value is read from FACTS, derived from the project list, so each
          can be verified by counting the portfolio grid. This is deliberately
          not where awards or client-revenue figures go: a number a visitor can
          disprove in one search costs more than it earns.
        */}
        <div
          className="mt-14 flex flex-wrap items-center justify-center gap-3 sm:gap-4 opacity-0"
          style={{ animation: "fade-up 1000ms cubic-bezier(0.22, 1, 0.36, 1) 900ms forwards" }}
        >
          {t.hero.stats.map((stat, i) => {
            const Icon = STAT_ICONS[i];
            const tone = [
              "bg-primary/15 text-primary ring-primary/25",
              "bg-success/15 text-success ring-success/25",
              "bg-accent text-accent-foreground ring-accent-foreground/20",
            ][i];
            return (
              <div
                key={stat.key}
                className="flex items-center gap-3 rounded-2xl border border-border/40 bg-surface/40 py-3 pl-3 pr-5 backdrop-blur-xl"
              >
                <span
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ring-1 ${tone}`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-left">
                  <span className="block text-lg font-black leading-none text-foreground tabular-nums">
                    {FACTS[stat.key]}
                    {stat.suffix}
                  </span>
                  <span className="mt-1 block text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    {stat.label}
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
