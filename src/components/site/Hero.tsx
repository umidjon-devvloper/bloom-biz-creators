import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Play, Code2, Smartphone, Palette, Rocket } from "lucide-react";
import { useI18n } from "@/i18n";
import { useTilt } from "@/hooks/use-tilt";
import { AuroraBackground } from "./AuroraBackground";

const CODE_LINES: { indent: number; parts: { text: string; cls: string }[] }[] = [
  { indent: 0, parts: [{ text: "const", cls: "text-primary" }, { text: " agency ", cls: "text-foreground" }, { text: "=", cls: "text-muted-foreground" }, { text: " {", cls: "text-foreground" }] },
  { indent: 1, parts: [{ text: "name", cls: "text-primary-glow" }, { text: ": ", cls: "text-muted-foreground" }, { text: "'Umidjon Agency'", cls: "text-success" }, { text: ",", cls: "text-muted-foreground" }] },
  { indent: 1, parts: [{ text: "stack", cls: "text-primary-glow" }, { text: ": [", cls: "text-muted-foreground" }, { text: "'React'", cls: "text-success" }, { text: ", ", cls: "text-muted-foreground" }, { text: "'Node'", cls: "text-success" }, { text: "],", cls: "text-muted-foreground" }] },
  { indent: 1, parts: [{ text: "delivery", cls: "text-primary-glow" }, { text: ": ", cls: "text-muted-foreground" }, { text: "'7 days'", cls: "text-success" }, { text: ",", cls: "text-muted-foreground" }] },
  { indent: 1, parts: [{ text: "ship", cls: "text-primary" }, { text: ": () => ", cls: "text-muted-foreground" }, { text: "🚀", cls: "text-foreground" }, { text: ",", cls: "text-muted-foreground" }] },
  { indent: 0, parts: [{ text: "}", cls: "text-foreground" }] },
];

const FLOAT_BADGES = [
  { Icon: Code2, label: "Web", cls: "left-[-6%] top-[18%]", delay: "0s" },
  { Icon: Smartphone, label: "Mobile", cls: "right-[-7%] top-[30%]", delay: "-2s" },
  { Icon: Palette, label: "Design", cls: "left-[2%] bottom-[8%]", delay: "-4s" },
  { Icon: Rocket, label: "Launch", cls: "right-[-4%] bottom-[14%]", delay: "-6s" },
];

export function Hero() {
  const { t } = useI18n();
  const tilt = useTilt(9);

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <AuroraBackground dense />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-1.5 text-xs font-medium text-muted-foreground opacity-0"
            style={{ animation: "fade-up 700ms ease-out 100ms forwards" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            <span>{t.hero.badge}</span>
          </div>

          <h1
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl opacity-0"
            style={{ animation: "fade-up 700ms ease-out 220ms forwards" }}
          >
            {t.hero.titleA}{" "}
            <span className="shimmer-text">{t.hero.titleHl}</span> {t.hero.titleB}
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg opacity-0"
            style={{ animation: "fade-up 700ms ease-out 340ms forwards" }}
          >
            {t.hero.subtitle}
          </p>

          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-3 opacity-0"
            style={{ animation: "fade-up 700ms ease-out 460ms forwards" }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold btn-glow"
            >
              {t.hero.cta1}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-surface hover:shadow-md"
            >
              <Play className="h-4 w-4" />
              {t.hero.cta2}
            </Link>
          </div>

          <div
            className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs text-muted-foreground opacity-0"
            style={{ animation: "fade-up 700ms ease-out 620ms forwards" }}
          >
            {t.hero.trust.map((tr) => (
              <div key={tr} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
                {tr}
              </div>
            ))}
          </div>
        </div>

        {/* 3D floating scene */}
        <div
          className="relative mx-auto mt-20 max-w-5xl opacity-0 perspective-2000"
          style={{ animation: "fade-up 900ms ease-out 780ms forwards" }}
        >
          <div className="absolute inset-0 -z-10 bg-gradient-mesh blur-3xl opacity-60" />

          {/* Floating capability badges */}
          {FLOAT_BADGES.map(({ Icon, label, cls, delay }) => (
            <div
              key={label}
              className={`absolute z-20 hidden animate-float-slow md:block ${cls}`}
              style={{ animationDelay: delay }}
            >
              <div className="flex items-center gap-2 rounded-2xl border border-border glass-strong px-3.5 py-2.5 shadow-lg">
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-primary text-primary-foreground">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-xs font-semibold">{label}</span>
              </div>
            </div>
          ))}

          <div
            ref={tilt.ref}
            {...tilt.handlers}
            className="tilt-card relative rounded-2xl border border-border glass-strong p-3 shadow-elevated"
          >
            <div className="flex items-center gap-1.5 px-2 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-chart-4/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
              <span className="ml-3 text-[10px] text-muted-foreground">{t.hero.codeCaption}</span>
            </div>

            <div className="grid gap-3 md:grid-cols-[1.1fr_1fr]">
              {/* Code panel */}
              <div className="relative overflow-hidden rounded-xl border border-border bg-background/80 p-5 font-mono text-[13px] leading-relaxed">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-16 animate-scan-line bg-linear-to-b from-primary/25 to-transparent" />
                {CODE_LINES.map((line, i) => (
                  <div
                    key={i}
                    className="opacity-0"
                    style={{ animation: `fade-up 500ms ease-out ${900 + i * 130}ms forwards`, paddingLeft: `${line.indent * 1.25}rem` }}
                  >
                    {line.parts.map((p, j) => (
                      <span key={j} className={p.cls}>
                        {p.text}
                      </span>
                    ))}
                  </div>
                ))}
                <span className="ml-1 inline-block h-4 w-0.5 animate-pulse bg-primary align-middle" />
              </div>

              {/* Metrics panel */}
              <div className="grid content-center gap-3 rounded-xl bg-background/60 p-4">
                {t.hero.metrics.map((m, i) => (
                  <div key={m.label} className="rounded-lg border border-border bg-surface/70 p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-muted-foreground">{m.label}</div>
                      <div className="font-display text-xl font-bold text-gradient-primary">{m.value}</div>
                    </div>
                    <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-gradient-primary"
                        style={{ width: `${[92, 78, 98][i]}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
