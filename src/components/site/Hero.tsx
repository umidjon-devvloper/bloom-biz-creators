import type { ComponentType } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Play,
  LayoutTemplate,
  Building2,
  ShoppingCart,
  Smartphone,
  Server,
  Palette,
} from "lucide-react";
import { useI18n } from "@/i18n";
import { AuroraBackground } from "./AuroraBackground";

// Index-aligned with t.services.items
const SERVICE_ICONS: ComponentType<{ className?: string }>[] = [
  LayoutTemplate, // Landing page
  Building2, // Corporate website
  ShoppingCart, // Online store
  Smartphone, // Mobile app
  Server, // Backend / API
  Palette, // UI/UX design
];

const maskFade = {
  WebkitMaskImage: "linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)",
  maskImage: "linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)",
} as const;

export function Hero() {
  const { t } = useI18n();
  const services = t.services.items.map((s, i) => ({ ...s, Icon: SERVICE_ICONS[i] }));
  const colA = services.slice(0, 3);
  const colB = services.slice(3, 6);

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <AuroraBackground dense />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        {/* LEFT — copy */}
        <div className="text-center lg:text-left">
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
            className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl opacity-0"
            style={{ animation: "fade-up 700ms ease-out 220ms forwards" }}
          >
            {t.hero.titleA}{" "}
            <span className="shimmer-text">{t.hero.titleHl}</span> {t.hero.titleB}
          </h1>

          <p
            className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg lg:mx-0 opacity-0"
            style={{ animation: "fade-up 700ms ease-out 340ms forwards" }}
          >
            {t.hero.subtitle}
          </p>

          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start opacity-0"
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
            className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground lg:justify-start opacity-0"
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

        {/* RIGHT — 3D vertical marquee columns */}
        <div
          className="relative opacity-0 [perspective:1600px]"
          style={{ animation: "fade-up 900ms ease-out 700ms forwards" }}
        >
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-mesh blur-3xl opacity-50" />

          <div className="mb-4 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground lg:text-left">
            {t.services.eyebrow}
          </div>

          <div className="flex justify-center gap-4 [transform:rotateX(9deg)_rotateY(-16deg)_rotate(1deg)] [transform-style:preserve-3d] sm:gap-5">
            <MarqueeColumn services={colA} direction="up" />
            <MarqueeColumn services={colB} direction="down" className="mt-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

type ServiceCard = {
  title: string;
  desc: string;
  from: string;
  Icon: ComponentType<{ className?: string }>;
};

function MarqueeColumn({
  services,
  direction,
  className = "",
}: {
  services: ServiceCard[];
  direction: "up" | "down";
  className?: string;
}) {
  // 4 sets + uniform trailing margin per tile: translateY(-50%) spans exactly two
  // sets (taller than the viewport), so the loop is seamless with no gap at the seam.
  const loop = [...services, ...services, ...services, ...services];
  return (
    <div
      className={`h-[440px] w-[190px] shrink-0 overflow-hidden sm:h-[500px] sm:w-[220px] ${className}`}
      style={maskFade}
    >
      <div
        className={`flex flex-col ${
          direction === "up" ? "animate-marquee-up" : "animate-marquee-down"
        } motion-reduce:animate-none`}
      >
        {loop.map((s, i) => (
          <ServiceTile key={`${s.title}-${i}`} s={s} />
        ))}
      </div>
    </div>
  );
}

function ServiceTile({ s }: { s: ServiceCard }) {
  const { Icon } = s;
  return (
    <div className="group mb-4 rounded-2xl border border-border glass-strong p-4 shadow-elevated transition-colors hover:border-primary/40">
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
          <Icon className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold">{s.title}</div>
          <div className="text-[11px] text-primary">
            {/* from $X */}
            <span className="text-muted-foreground">from </span>
            {s.from}
          </div>
        </div>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-3">{s.desc}</p>
    </div>
  );
}
