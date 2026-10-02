import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal3D } from "../components/site/Reveal3D";
import { StoreBadges } from "../components/site/StoreBadges";
import { CtaBand } from "../components/site/CtaBand";
import { listCaseStudies } from "../lib/case-studies";
import type { ProjectFilter } from "../lib/site";
import { optimizedImage, fallbackToOriginal } from "../lib/img";
import { useI18n, langFromSearch, DEFAULT_LANG } from "../i18n";
import { PAGE_META } from "../i18n/translations";

type Cat = "all" | ProjectFilter;

/**
 * Served from lib/case-studies.ts rather than MongoDB. These pages are the main
 * SEO surface of the site, and the previous version rendered nothing at all if
 * the database was unreachable — MONGODB_URI falls back to localhost, so in a
 * fresh deploy that was the normal case, not the edge case.
 */
export const Route = createFileRoute("/case-studies/")({
  component: CaseStudies,
  head: ({ match }) => {
    const lang = langFromSearch(match.search) ?? DEFAULT_LANG;
    const m = PAGE_META[lang]["case-studies"];
    return {
      meta: [
        { title: m.title },
        { name: "description", content: m.description },
        { property: "og:title", content: m.title },
        { property: "og:description", content: m.description },
      ],
    };
  },
});

function CaseStudies() {
  const { t, lang } = useI18n();
  // Same four buckets as the portfolio grid, driven off the linked project's
  // `filter` so a case study can never drift into a category its project isn't in.
  const [filter, setFilter] = useState<Cat>("all");
  const keys: Cat[] = ["all", "web", "mobile", "ecom"];
  const cases = listCaseStudies().filter(
    ({ project }) => filter === "all" || project.filter === filter,
  );

  return (
    <div className="pb-8">
      <PageHeader
        eyebrow={t.cases.eyebrow}
        title={t.cases.titleA}
        highlight={t.cases.titleHl}
        description={t.cases.desc}
      />

      <div className="mx-auto mt-16 max-w-7xl px-6">
        <div className="mb-14 flex flex-wrap justify-center gap-3">
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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {cases.map(({ study, project }, i) => {
            const copy = study.copy[lang];
            const isFull = i % 3 === 0;

            return (
              <Reveal3D
                key={study.slug}
                delay={100 + (i % 3) * 100}
                className={isFull ? "md:col-span-12" : "md:col-span-6"}
              >
                <article
                  className={`group relative flex h-full flex-col ${isFull ? "md:flex-row" : ""} overflow-hidden rounded-[2rem] border border-border/40 bg-surface/20 transition-colors duration-500 hover:border-primary/40 hover:bg-surface/40`}
                >
                  <Link
                    to="/case-studies/$slug"
                    params={{ slug: study.slug }}
                    className={`relative block shrink-0 overflow-hidden ${isFull ? "w-full md:w-3/5" : "w-full"} aspect-[16/10] ${isFull ? "md:aspect-auto" : ""}`}
                  >
                    <img
                      src={optimizedImage(project.image, 1200)}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      onError={fallbackToOriginal(project.image)}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
                  </Link>

                  <div
                    className={`flex flex-col justify-between p-6 sm:p-8 md:p-10 ${isFull ? "w-full md:w-2/5" : "w-full"}`}
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-widest text-primary">
                        <span>{study.industry[lang]}</span>
                        <span className="h-1 w-1 rounded-full bg-border" />
                        <span className="text-muted-foreground">
                          {t.cases.clientLabel}: {study.client}
                        </span>
                      </div>

                      <h2 className="mt-5 font-display text-2xl font-black leading-tight tracking-tight md:text-3xl">
                        {copy.title}
                      </h2>
                      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        {copy.summary}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.stack.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border/50 bg-background/50 px-3 py-1 text-xs font-bold text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
                      <Link
                        to="/case-studies/$slug"
                        params={{ slug: study.slug }}
                        className="inline-flex items-center gap-2 text-sm font-bold text-foreground transition-colors hover:text-primary"
                      >
                        {t.proof.readCase}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                      {/* An app has no site to open — its stores are the link. */}
                      {project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
                        >
                          {t.common.openSite}
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>

                    <StoreBadges
                      appStore={project.appStore}
                      playStore={project.playStore}
                      className="mt-5"
                    />
                  </div>
                </article>
              </Reveal3D>
            );
          })}
        </div>
      </div>

      <CtaBand />
    </div>
  );
}
