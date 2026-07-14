import { useState } from "react";
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
  const [isVideoOpen, setIsVideoOpen] = useState(false);
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
            <button
              onClick={() => setIsVideoOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-surface hover:shadow-md"
            >
              <Play className="h-4 w-4 text-primary" />
              {t.hero.cta2 || "Showreel"}
            </button>
          </div>

          {/* Trust Badges */}
          <div
            className="mt-12 flex flex-wrap items-center justify-center gap-6 lg:justify-start opacity-0"
            style={{ animation: "fade-up 700ms ease-out 620ms forwards" }}
          >
            <div className="flex items-center gap-2 grayscale transition-all hover:grayscale-0 opacity-70 hover:opacity-100">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Upwork_Logo.svg" alt="Upwork" className="h-6" />
              <span className="text-xs font-semibold">Top Rated</span>
            </div>
            <div className="flex items-center gap-2 grayscale transition-all hover:grayscale-0 opacity-70 hover:opacity-100">
              <svg className="h-6 w-auto" viewBox="0 0 100 24" fill="currentColor">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6Z" />
              </svg>
              <span className="text-xs font-semibold">Clutch 5.0</span>
            </div>
          </div>
        </div>

        {isVideoOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-background">
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="aspect-video w-full bg-secondary flex items-center justify-center">
                <p className="text-muted-foreground">Premium Showreel Video Player Placeholder</p>
              </div>
            </div>
          </div>
        )}

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
