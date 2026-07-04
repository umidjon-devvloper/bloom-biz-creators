import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { useI18n } from "@/i18n";

export function CtaBand() {
  const { t } = useI18n();

  return (
    <section className="relative px-6 py-20 md:py-28">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-primary/30 bg-gradient-mesh p-10 text-center shadow-elevated md:p-16">
        <div aria-hidden className="absolute inset-0 -z-0 opacity-50">
          <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-primary blur-3xl animate-blob" />
          <div className="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-primary-glow blur-3xl animate-blob-delayed" />
        </div>
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-1.5 text-xs font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            {t.services.calcEyebrow}
          </span>
          <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t.home.ctaTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
            {t.home.ctaDesc}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold btn-glow"
            >
              {t.home.ctaBtn}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-surface"
            >
              {t.common.learnMore}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
