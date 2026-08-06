import { Link } from "@tanstack/react-router";
import { ExternalLink, Github, ArrowRight, Terminal } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/site";
import { StoreBadges } from "./StoreBadges";
import { optimizedImage, fallbackToOriginal } from "@/lib/img";
import { useI18n } from "@/i18n";

/**
 * Sticky-stack showcase: each project card pins near the top and the next one
 * decks over it as you scroll. Pure CSS `position: sticky` — no library.
 * Used on the home page; the full filterable grid lives on /portfolio.
 */
export function PortfolioStack({ count = 5 }: { count?: number }) {
  const { t } = useI18n();
  const items = PROJECTS.slice(0, count);

  return (
    <section id="portfolio" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border glass px-3 py-1 text-xs font-medium text-primary">
            {t.portfolio.eyebrow}
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t.portfolio.titleA}{" "}
            <span className="text-gradient-primary">{t.portfolio.titleHl}</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">{t.portfolio.desc}</p>
        </div>

        <div>
          {items.map((p, i) => (
            <div
              key={p.title}
              className="stack-item pb-6 md:pb-8"
              style={{ top: `calc(5.5rem + ${i * 1.4}rem)`, zIndex: i + 1 }}
            >
              <StackCard p={p} viewLabel={t.portfolio.view} />
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-surface"
          >
            {t.home.seeAll}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function StackCard({ p, viewLabel }: { p: Project; viewLabel: string }) {
  const hasLive = p.live !== "#";
  const hasRepo = p.github.includes("github.com");
  // An app ships to the stores, not a URL — those buttons stand in for "view site".
  const hasStore = Boolean(p.appStore || p.playStore);

  return (
    <article
      className={`stack-card group relative flex min-h-[540px] flex-col justify-between overflow-hidden rounded-3xl border bg-card p-7 shadow-elevated md:min-h-[76vh] md:p-12 ${
        p.featured ? "border-primary/40" : "border-border"
      }`}
    >
      {/* Background image + scrim */}
      <div className="absolute inset-0 -z-10">
        <img
          src={optimizedImage(p.image, 1100, 72)}
          alt={p.title}
          loading="lazy"
          decoding="async"
          onError={fallbackToOriginal(p.image)}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
      </div>

      {/* Top HUD row */}
      <div className="flex items-center justify-between font-mono text-[11px] sm:text-xs">
        <span className="inline-flex items-center gap-2 text-muted-foreground">
          <Terminal className="h-3.5 w-3.5" />
          FILE_ID: PRJ-{p.n}
        </span>
        <span className="inline-flex items-center gap-2 rounded-full glass px-2.5 py-1 font-semibold uppercase tracking-wider text-foreground">
          <span
            className={`h-1.5 w-1.5 rounded-full ${p.wip ? "bg-amber-400" : "bg-emerald-400"} animate-pulse`}
          />
          {p.wip ? "In progress" : "Online"}
        </span>
      </div>

      {/* Content */}
      <div className="max-w-2xl">
        <span className="inline-flex items-center rounded-full glass-strong px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-widest text-primary">
          // {p.cat}
        </span>

        <h3 className="mt-4 font-display text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl">
          {p.title}
        </h3>

        <p className="mt-4 max-w-xl text-sm text-muted-foreground md:text-base">{p.desc}</p>

        <p className="mt-4 font-mono text-xs text-foreground/70">▹ {p.highlight}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.stack.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-surface/60 px-2.5 py-0.5 text-[11px] text-muted-foreground backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          {hasLive ? (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-opacity hover:opacity-90"
            >
              {viewLabel} <ExternalLink className="h-4 w-4" />
            </a>
          ) : (
            !hasStore && (
              <span className="inline-flex items-center gap-2 rounded-xl border border-dashed border-border px-6 py-3 text-sm font-medium text-muted-foreground">
                Coming soon
              </span>
            )
          )}
          <StoreBadges appStore={p.appStore} playStore={p.playStore} />
          {hasRepo && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/50 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Github className="h-4 w-4" /> Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
