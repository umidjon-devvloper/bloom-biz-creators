import { ArrowRight, Sparkles, Play } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Animated background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-hero" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-gradient-primary opacity-30 blur-3xl animate-blob"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-0 h-[380px] w-[380px] rounded-full bg-primary-glow/40 blur-3xl animate-blob-delayed"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(var(--color-foreground)_1px,transparent_1px),linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] [background-size:64px_64px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-1.5 text-xs font-medium text-muted-foreground opacity-0"
            style={{ animation: "fade-up 700ms ease-out 100ms forwards" }}
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>Yangi loyihalar uchun bandmiz — 2026 yanvar</span>
          </div>

          <h1
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl opacity-0"
            style={{ animation: "fade-up 700ms ease-out 220ms forwards" }}
          >
            Biznesingiz uchun{" "}
            <span className="text-gradient-primary animate-gradient-shift">professional websayt</span>{" "}
            va ilovalar
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg opacity-0"
            style={{ animation: "fade-up 700ms ease-out 340ms forwards" }}
          >
            Tez, sifatli va shaffof narxda. Narx kalkulyatori orqali loyihangiz
            qiymatini bir daqiqada hisoblang — bo'sh so'zsiz, aniq raqam bilan.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-3 opacity-0"
            style={{ animation: "fade-up 700ms ease-out 460ms forwards" }}
          >
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold btn-glow"
            >
              Buyurtma berish
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-surface hover:shadow-md"
            >
              <Play className="h-4 w-4" />
              Portfolio ko'rish
            </a>
          </div>

          {/* Trust row */}
          <div
            className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs text-muted-foreground opacity-0"
            style={{ animation: "fade-up 700ms ease-out 620ms forwards" }}
          >
            {["50+ tugallangan loyiha", "3+ yil tajriba", "24 soat ichida javob", "100% shaffof narx"].map(
              (t) => (
                <div key={t} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" />
                  {t}
                </div>
              ),
            )}
          </div>
        </div>

        {/* Floating mockup */}
        <div
          className="relative mx-auto mt-20 max-w-5xl opacity-0"
          style={{ animation: "fade-up 900ms ease-out 780ms forwards" }}
        >
          <div className="absolute inset-0 -z-10 bg-gradient-mesh blur-3xl opacity-60" />
          <div className="animate-float rounded-2xl border border-border glass-strong p-3 shadow-elevated">
            <div className="flex items-center gap-1.5 px-2 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-chart-4/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
              <span className="ml-3 text-[10px] text-muted-foreground">devora.uz — mijoz loyihasi</span>
            </div>
            <div className="grid gap-3 rounded-xl bg-background/60 p-6 md:grid-cols-3">
              {[
                { label: "Konversiya", value: "+184%" },
                { label: "Sahifa tezligi", value: "1.2s" },
                { label: "SEO ball", value: "98/100" },
              ].map((m) => (
                <div key={m.label} className="rounded-lg border border-border bg-surface/70 p-5">
                  <div className="text-xs text-muted-foreground">{m.label}</div>
                  <div className="mt-2 font-display text-3xl font-bold text-gradient">{m.value}</div>
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full w-4/5 rounded-full bg-gradient-primary" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
