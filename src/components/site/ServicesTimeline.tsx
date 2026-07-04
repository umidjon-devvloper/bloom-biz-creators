import { Fragment, useEffect, useRef, useState } from "react";
import type { ComponentType } from "react";
import { Globe, Building2, ShoppingBag, Smartphone, Server, Palette } from "lucide-react";
import { useI18n } from "@/i18n";
import { TimelineShape } from "./Shapes3D";

const ICONS: ComponentType<{ className?: string }>[] = [
  Globe,
  Building2,
  ShoppingBag,
  Smartphone,
  Server,
  Palette,
];

/**
 * Curved connector between two alternating cards. `toLeft` = the card BELOW this
 * connector sits on the left, so the line snakes from the right (previous card)
 * down to the left (next card). On mobile it collapses to a short straight-ish drop.
 */
function Connector({ toLeft, active }: { toLeft: boolean; active: boolean }) {
  // viewBox 0 0 100 100, stretched (preserveAspectRatio none)
  const d = toLeft
    ? "M69,0 C69,55 31,45 31,100" // from right → to left
    : "M31,0 C31,55 69,45 69,100"; // from left → to right
  return (
    <div className="pointer-events-none relative -my-1 h-16 w-full md:h-24">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="h-full w-full overflow-visible"
        aria-hidden
      >
        <path className="tl-path-track" d={d} pathLength={1} />
        <path className="tl-path-glow" data-active={active} d={d} pathLength={1} />
      </svg>
    </div>
  );
}

export function ServicesTimeline() {
  const { t } = useI18n();
  const items = t.services.items;
  const N = items.length;

  const containerRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeCount, setActiveCount] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const anchor = window.innerHeight * 0.68; // activation point, a bit below center
      const progressPx = anchor - rect.top;
      let count = 0;
      for (const row of rowRefs.current) {
        if (row && row.offsetTop + row.offsetHeight * 0.35 <= progressPx) count++;
      }
      setActiveCount((prev) => (prev === count ? prev : count));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [N]);

  return (
    <section id="services" className="relative py-20 md:py-28">
      <div ref={containerRef} className="mx-auto flex max-w-5xl flex-col px-6">
        {items.map((s, i) => {
          const Icon = ICONS[i];
          const active = i < activeCount;
          const left = i % 2 === 0;
          return (
            <Fragment key={s.title}>
              {i > 0 && <Connector toLeft={left} active={active} />}

              <div
                ref={(node) => {
                  rowRefs.current[i] = node;
                }}
                className="relative w-full"
              >
                <TimelineShape index={i} side={left ? "right" : "left"} />
                <div
                  className={`relative z-10 w-full md:w-[62%] ${left ? "md:mr-auto" : "md:ml-auto"}`}
                >
                  <article
                    data-active={active}
                    className="tl-card group relative w-full overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-500 data-[active=true]:shadow-glow sm:p-9"
                  >
                    <div
                      aria-hidden
                      data-active={active}
                      className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-25 data-[active=true]:opacity-20"
                    />

                    <div className="relative flex items-start gap-5">
                      <div
                        data-active={active}
                        className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-primary/10 text-primary ring-1 ring-primary/20 transition-all duration-500 group-hover:scale-105 data-[active=true]:bg-gradient-primary data-[active=true]:text-primary-foreground data-[active=true]:shadow-glow"
                      >
                        <Icon className="h-7 w-7" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                          <h3 className="font-display text-xl font-bold sm:text-2xl">{s.title}</h3>
                          <span className="whitespace-nowrap text-right leading-tight">
                            <span className="mr-1.5 text-[11px] uppercase tracking-wider text-muted-foreground">
                              {t.common.from}
                            </span>
                            <span className="font-display text-xl font-bold text-gradient-primary">
                              {s.from}
                            </span>
                          </span>
                        </div>
                        <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                          {s.desc}
                        </p>
                      </div>
                    </div>

                    {/* Step index watermark */}
                    <span className="pointer-events-none absolute bottom-4 right-6 font-display text-5xl font-black text-muted/40 sm:text-6xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </article>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}
