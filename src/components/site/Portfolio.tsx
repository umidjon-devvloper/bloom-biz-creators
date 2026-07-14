import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ExternalLink, ArrowRight, Github, Sparkles } from "lucide-react";
import { Section } from "./Section";
import { Reveal3D } from "./Reveal3D";
import { PROJECTS, type Project, type ProjectFilter } from "@/lib/site";
import { optimizedImage, fallbackToOriginal } from "@/lib/img";
import { useI18n } from "@/i18n";

type Cat = "all" | ProjectFilter;

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

      <div className="mx-auto max-w-6xl flex flex-col gap-16 md:gap-32">
        {shown.map((p, i) => (
          <Reveal3D key={p.title} delay={100}>
            <ProjectCard p={p} viewLabel={t.portfolio.view} index={i} />
          </Reveal3D>
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

function ProjectCard({ p, viewLabel, index }: { p: Project; viewLabel: string; index: number }) {
  const hasLive = p.live !== "#";
  const hasRepo = p.github.includes("github.com");
  const cardBorder = p.featured ? "border-primary/40 shadow-glow" : "border-border";
  const isEven = index % 2 === 0;

  return (
    <article
      className={`group relative flex flex-col md:flex-row ${isEven ? "" : "md:flex-row-reverse"} gap-8 lg:gap-16 items-center`}
    >
      {/* Media */}
      <a
        href={hasLive ? p.live : p.github}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative block w-full md:w-[55%] shrink-0 overflow-hidden rounded-2xl border bg-card ${cardBorder} aspect-[16/10]`}
        aria-label={`${p.title} — ${viewLabel}`}
      >
        <img
          src={optimizedImage(p.image, 1200)}
          alt={p.title}
          width={1200}
          height={750}
          loading="lazy"
          decoding="async"
          onError={fallbackToOriginal(p.image)}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Badges */}
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {p.featured && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-glow">
              <Sparkles className="h-3.5 w-3.5" /> Featured
            </span>
          )}
          {p.wip && (
            <span className="inline-flex items-center gap-1.5 rounded-full glass-strong px-3 py-1.5 text-xs font-semibold text-foreground">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" /> In progress
            </span>
          )}
        </div>

        {/* View hint */}
        <div className="absolute bottom-4 right-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="inline-flex items-center gap-1.5 rounded-full glass-strong px-4 py-2 text-xs font-semibold">
            {viewLabel} <ExternalLink className="h-3.5 w-3.5" />
          </span>
        </div>
      </a>

      {/* Body */}
      <div className="flex w-full md:w-[45%] flex-col py-4">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          <span className="text-primary">{p.n}</span>
          <span className="h-px w-8 bg-border" />
          <span>{p.cat}</span>
        </div>

        <h3 className="mt-5 font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">{p.title}</h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">{p.desc}</p>

        <p className="mt-6 flex items-start gap-2 text-sm font-medium text-foreground/90">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span>{p.highlight}</span>
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {p.stack.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-surface/50 px-3.5 py-1 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-10 flex items-center gap-4 border-t border-border pt-6">
          {hasLive ? (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105 active:scale-95"
            >
              {viewLabel} <ArrowRight className="h-4 w-4" />
            </a>
          ) : (
            <span className="inline-flex items-center justify-center gap-2 rounded-full border border-dashed border-border px-6 py-3 text-sm font-medium text-muted-foreground">
              Coming soon
            </span>
          )}
          {hasRepo && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:text-primary"
              aria-label={`${p.title} — source code`}
            >
              <Github className="h-4 w-4" /> Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

