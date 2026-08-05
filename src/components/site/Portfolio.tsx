import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ExternalLink, Wrench } from "lucide-react";
import { Section } from "./Section";
import { Reveal3D } from "./Reveal3D";
import { PROJECTS, type Project, type ProjectFilter } from "@/lib/site";
import { optimizedImage, fallbackToOriginal } from "@/lib/img";
import { useI18n } from "@/i18n";

type Cat = "all" | ProjectFilter;

/**
 * Cards used to carry a rotating set of invented business metrics ("2M+ Active
 * Users", "$10M+ Revenue Generated") assigned to projects by array index — so
 * the same figure landed on whichever project happened to sit in that slot.
 * They are gone. What each card shows now is what the project actually is: its
 * stack, a factual highlight, and a link you can open.
 */
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

  let shown = PROJECTS.filter((p) => filter === "all" || p.filter === filter);
  if (limit) shown = shown.slice(0, limit);

  return (
    <Section
      id="portfolio"
      eyebrow={headless ? undefined : t.portfolio.eyebrow}
      title={
        headless ? undefined : (
          <span className="text-5xl md:text-7xl font-black tracking-tighter">
            {t.portfolio.titleA}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">
              {t.portfolio.titleHl}
            </span>
          </span>
        )
      }
      description={headless ? undefined : t.portfolio.desc}
    >
      {!limit && (
        <div className="mb-16 flex flex-wrap justify-center gap-3">
          {t.portfolio.filters.map((label, i) => {
            const key = keys[i];
            return (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`rounded-full px-6 py-2.5 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  filter === key
                    ? "bg-foreground text-background shadow-lg"
                    : "border border-border/50 bg-surface/50 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      )}

      {/* Asymmetrical Grid Layout */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
        {shown.map((p, i) => (
          <Reveal3D
            key={p.title}
            delay={100 + (i % 3) * 100}
            className={
              i % 4 === 0
                ? "md:col-span-12"
                : i % 4 === 1
                  ? "md:col-span-7"
                  : i % 4 === 2
                    ? "md:col-span-5"
                    : "md:col-span-12"
            }
          >
            <CaseStudyCard p={p} isFull={i % 4 === 0 || i % 4 === 3} />
          </Reveal3D>
        ))}
      </div>

      {showCta && (
        <div className="mt-20 text-center">
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-3 rounded-full border border-border/50 bg-surface/50 px-8 py-4 text-base font-bold text-foreground backdrop-blur-md transition-all hover:border-primary/50 hover:bg-surface hover:shadow-glow"
          >
            {t.portfolio.viewAll}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </Section>
  );
}

function CaseStudyCard({ p, isFull }: { p: Project; isFull: boolean }) {
  const { t } = useI18n();
  const hasLive = p.live !== "#";

  return (
    <article
      className={`group relative flex flex-col ${isFull ? "md:flex-row" : ""} h-full overflow-hidden rounded-[2rem] border border-border/40 bg-surface/20 transition-colors duration-500 hover:border-primary/40 hover:bg-surface/40`}
    >
      {/* Image Container */}
      <a
        href={hasLive ? p.live : p.github}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative block shrink-0 overflow-hidden ${isFull ? "w-full md:w-3/5" : "w-full"} aspect-[4/3] ${isFull ? "md:aspect-auto" : ""}`}
      >
        <img
          src={optimizedImage(p.image, 1200)}
          alt={p.title}
          loading="lazy"
          decoding="async"
          onError={fallbackToOriginal(p.image)}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />

        {p.wip && (
          <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-muted-foreground backdrop-blur-md">
            <Wrench className="h-3 w-3" />
            {t.portfolio.wip}
          </span>
        )}

        {/* Hover Hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 backdrop-blur-[2px] bg-background/20">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow transform scale-90 transition-transform duration-500 group-hover:scale-100">
            <ArrowRight className="h-6 w-6 -rotate-45" />
          </span>
        </div>
      </a>

      {/* Content Container */}
      <div
        className={`flex flex-col justify-between p-6 sm:p-8 md:p-12 ${isFull ? "w-full md:w-2/5" : "w-full"}`}
      >
        <div>
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-primary">
            <span>{p.cat}</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span className="text-muted-foreground">{p.n}</span>
          </div>

          <h3 className="mt-6 font-display text-3xl font-black leading-tight tracking-tight md:text-4xl">
            {p.title}
          </h3>
          <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground line-clamp-3">
            {p.desc}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {p.stack.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border/50 bg-background/50 px-4 py-1.5 text-xs font-bold text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* What the project actually is, plus the two links that prove it. */}
        <div className="mt-10 rounded-2xl border border-border/40 bg-background/50 p-6">
          <p className="font-mono text-xs leading-relaxed text-foreground/70">▹ {p.highlight}</p>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
            {hasLive && (
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-foreground transition-colors hover:text-primary"
              >
                {t.common.openSite}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
            {p.caseStudy && (
              <Link
                to="/case-studies/$slug"
                params={{ slug: p.caseStudy }}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
              >
                {t.portfolio.readCase}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
