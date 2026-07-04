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

      <div className="grid gap-6 [perspective:1400px] sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => (
          <Reveal3D key={p.title} delay={(i % 3) * 110}>
            <ProjectCard p={p} viewLabel={t.portfolio.view} />
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

function ProjectCard({ p, viewLabel }: { p: Project; viewLabel: string }) {
  const hasLive = p.live !== "#";
  const hasRepo = p.github.includes("github.com");
  const cardBorder = p.featured ? "border-primary/40 shadow-glow" : "border-border";

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card card-hover ${cardBorder}`}
    >
      {/* Media */}
      <a
        href={hasLive ? p.live : p.github}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[16/10] overflow-hidden"
        aria-label={`${p.title} — ${viewLabel}`}
      >
        <img
          src={optimizedImage(p.image, 640)}
          alt={p.title}
          width={640}
          height={400}
          loading="lazy"
          decoding="async"
          onError={fallbackToOriginal(p.image)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {p.featured && (
            <span className="inline-flex items-center gap-1 rounded-full bg-gradient-primary px-2.5 py-1 text-[11px] font-semibold text-primary-foreground shadow-glow">
              <Sparkles className="h-3 w-3" /> Featured
            </span>
          )}
          {p.wip && (
            <span className="inline-flex items-center gap-1 rounded-full glass-strong px-2.5 py-1 text-[11px] font-semibold text-foreground">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" /> In progress
            </span>
          )}
        </div>

        {/* View hint */}
        <div className="absolute bottom-3 right-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="inline-flex items-center gap-1.5 rounded-full glass-strong px-3 py-1.5 text-xs font-medium">
            {viewLabel} <ExternalLink className="h-3 w-3" />
          </span>
        </div>
      </a>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          <span className="text-primary">{p.n}</span>
          <span className="h-px flex-1 bg-border" />
          <span>{p.cat}</span>
        </div>

        <h3 className="mt-3 font-display text-lg font-bold leading-snug">{p.title}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{p.desc}</p>

        <p className="mt-3 flex items-start gap-1.5 text-xs text-foreground/80">
          <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
          <span>{p.highlight}</span>
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.stack.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-surface/50 px-2.5 py-0.5 text-[11px] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-5 flex items-center gap-2 border-t border-border pt-4">
          {hasLive ? (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gradient-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              {viewLabel} <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ) : (
            <span className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-dashed border-border px-3 py-2 text-xs font-medium text-muted-foreground">
              Coming soon
            </span>
          )}
          {hasRepo && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-surface/50 px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              aria-label={`${p.title} — source code`}
            >
              <Github className="h-3.5 w-3.5" /> Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
