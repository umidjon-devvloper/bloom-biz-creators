import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Section, Reveal } from "./Section";
import { useI18n } from "@/i18n";

type Cat = "all" | "web" | "mobile" | "ecom";

// Index-aligned with translations.portfolio.items
const META: { cat: Exclude<Cat, "all">; tags: string[]; hue: string }[] = [
  { cat: "web", tags: ["React", "TypeScript", "Node"], hue: "270" },
  { cat: "ecom", tags: ["Next.js", "Stripe", "Postgres"], hue: "200" },
  { cat: "mobile", tags: ["React Native", "Firebase"], hue: "330" },
  { cat: "web", tags: ["Vue", "Nest", "Redis"], hue: "150" },
  { cat: "ecom", tags: ["Shopify", "Custom Theme"], hue: "40" },
  { cat: "mobile", tags: ["Flutter", "Supabase"], hue: "310" },
];

export function Portfolio({
  headless = false,
  limit,
  showCta = false,
}: {
  headless?: boolean;
  limit?: number;
  showCta?: boolean;
}) {
  const { t } = useI18n();
  const [filter, setFilter] = useState<Cat>("all");
  const keys: Cat[] = ["all", "web", "mobile", "ecom"];

  const all = t.portfolio.items.map((p, i) => ({ ...p, ...META[i] }));
  let shown = all.filter((p) => filter === "all" || p.cat === filter);
  if (limit) shown = shown.slice(0, limit);

  return (
    <Section
      id="portfolio"
      eyebrow={headless ? undefined : t.portfolio.eyebrow}
      title={
        headless ? undefined : (
          <>
            {t.portfolio.titleA} <span className="text-gradient-primary">{t.portfolio.titleHl}</span>
          </>
        )
      }
      description={headless ? undefined : t.portfolio.desc}
    >
      {!limit && (
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {t.portfolio.filters.map((label, i) => {
            const key = keys[i];
            return (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  filter === key
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : "border border-border bg-surface/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => (
          <Reveal key={p.title} delay={i * 60}>
            <a
              href="#"
              className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-card card-hover"
            >
              <div
                className="relative aspect-[16/10] overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, oklch(0.55 0.2 ${p.hue}) 0%, oklch(0.72 0.17 ${Number(p.hue) + 40}) 100%)`,
                }}
              >
                <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:40px_40px]" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="font-display text-4xl font-bold text-primary-foreground/90">
                    {p.title.split(" ").map((w) => w[0]).join("")}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1.5 rounded-full glass-strong px-3 py-1.5 text-xs font-medium">
                    {t.portfolio.view} <ExternalLink className="h-3 w-3" />
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-surface/50 px-2.5 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      {showCta && (
        <div className="mt-12 text-center">
          <Link
            to="/portfolio"
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
