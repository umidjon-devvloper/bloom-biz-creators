import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, ExternalLink, MessageCircle, Quote } from "lucide-react";
import { StoreBadges } from "../components/site/StoreBadges";
import { CASE_STUDIES, getCaseStudy, listCaseStudies } from "../lib/case-studies";
import { optimizedImage, fallbackToOriginal } from "../lib/img";
import { PROJECTS, SITE, telegramLink } from "../lib/site";
import { useI18n } from "../i18n";
import { BreadcrumbJsonLd } from "../components/site/JsonLd";

export const Route = createFileRoute("/case-studies/$slug")({
  component: CaseStudyDetail,
  loader: ({ params }) => {
    const found = getCaseStudy(params.slug);
    if (!found) throw notFound();
    return { slug: params.slug };
  },
  // Per-page meta is the point of splitting case studies out: each one targets
  // its own search intent. Rendered in Uzbek, matching the document's default
  // language — head() runs before the client language preference is known.
  head: ({ params }) => {
    const found = CASE_STUDIES.find((c) => c.slug === params.slug);
    if (!found) return {};
    const copy = found.copy.uz;
    const origin = `https://www.${SITE.domain}`;
    const project = PROJECTS.find((p) => p.title === found.project);
    return {
      meta: [
        { title: `${copy.title} | Umidjon Agency` },
        { name: "description", content: copy.summary },
        { property: "og:title", content: copy.title },
        { property: "og:description", content: copy.summary },
        { property: "og:type", content: "article" },
        { property: "og:image", content: project?.image || `${origin}/logo.png` },
      ],
    };
  },
});

function CaseStudyDetail() {
  const { slug } = Route.useLoaderData();
  const { t, lang } = useI18n();

  const found = getCaseStudy(slug);
  if (!found) {
    return <div className="py-32 text-center text-2xl">{t.cases.notFound}</div>;
  }

  const { study, project } = found;
  const copy = study.copy[lang];
  const others = listCaseStudies()
    .filter((c) => c.study.slug !== slug)
    .slice(0, 3);

  const origin = `https://www.${SITE.domain}`;

  return (
    <article className="min-h-screen pt-32 pb-24 md:pt-40">
      <BreadcrumbJsonLd
        items={[
          { name: "Case Studies", url: `${origin}/case-studies` },
          { name: copy.title, url: `${origin}/case-studies/${slug}` },
        ]}
      />
      <div className="mx-auto max-w-4xl px-6">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.cases.back}
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
            {study.industry[lang]}
          </span>
          <span className="text-sm text-muted-foreground">
            {t.cases.clientLabel}: {study.client}
          </span>
        </div>

        <h1 className="mt-6 font-display text-4xl font-black leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
          {copy.title}
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-muted-foreground">{copy.summary}</p>
      </div>

      <div className="mx-auto mt-14 max-w-6xl px-6">
        <img
          src={optimizedImage(project.image, 1600)}
          alt={project.title}
          onError={fallbackToOriginal(project.image)}
          className="max-h-[620px] w-full rounded-[2rem] border border-border/40 object-cover"
        />
      </div>

      <div className="mx-auto mt-16 max-w-3xl px-6">
        <div className="grid gap-14">
          <section>
            <h2 className="font-display text-2xl font-black tracking-tight md:text-3xl">
              {t.cases.problem}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{copy.problem}</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-black tracking-tight md:text-3xl">
              {t.cases.solution}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{copy.solution}</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-black tracking-tight md:text-3xl">
              {t.cases.delivered}
            </h2>
            <ul className="mt-6 space-y-4">
              {copy.delivered.map((d) => (
                <li key={d} className="flex items-start gap-4">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/20 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-lg leading-relaxed text-foreground/90">{d}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Rendered only when a client has confirmed real figures. An empty
              section is better than a padded one. */}
          {study.metrics && study.metrics.length > 0 && (
            <section>
              <h2 className="font-display text-2xl font-black tracking-tight md:text-3xl">
                {t.cases.metrics}
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {study.metrics.map((m) => (
                  <div key={m.label} className="rounded-2xl border border-border bg-card p-6">
                    <div className="font-display text-4xl font-black text-gradient-primary">
                      {m.value}
                    </div>
                    <div className="mt-1 font-medium text-muted-foreground">{m.label}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {study.quote && (
            <section className="rounded-[2rem] border border-border/40 bg-surface/20 p-8 backdrop-blur-md md:p-10">
              <Quote className="h-8 w-8 text-primary/40" />
              <p className="mt-4 font-display text-xl leading-relaxed text-foreground md:text-2xl">
                “{study.quote[lang].text}”
              </p>
              <div className="mt-6">
                <div className="font-bold text-foreground">{study.quote[lang].author}</div>
                <div className="text-sm text-primary">{study.quote[lang].role}</div>
              </div>
            </section>
          )}

          <section>
            <h2 className="font-display text-2xl font-black tracking-tight md:text-3xl">
              {t.cases.stack}
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border/50 bg-surface/50 px-4 py-2 text-sm font-bold text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-border/50 bg-surface/50 px-7 py-3.5 text-sm font-bold transition-all hover:border-primary/50 hover:shadow-glow"
              >
                {t.cases.liveSite}
                <ExternalLink className="h-4 w-4" />
              </a>
            )}

            {/* For an app the store listing is the live URL — same proof, different door. */}
            <StoreBadges
              appStore={project.appStore}
              playStore={project.playStore}
              className="mt-8"
            />
          </section>
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-[2rem] border border-primary/30 bg-gradient-mesh p-8 text-center md:p-12">
          <h2 className="font-display text-2xl font-black tracking-tight md:text-3xl">
            {t.cases.cta}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">{t.cases.ctaDesc}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/services"
              hash="calculator"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold btn-glow"
            >
              {t.common.calcPrice}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={telegramLink(t.contact.telegramMessage)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-7 py-3.5 text-sm font-bold transition-all hover:border-primary/50"
            >
              <MessageCircle className="h-4 w-4" />
              {t.common.writeTelegram}
            </a>
          </div>
        </div>

        {/* Other case studies */}
        {others.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-xl font-black tracking-tight">{t.cases.others}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {others.map(({ study: o, project: op }) => (
                <Link
                  key={o.slug}
                  to="/case-studies/$slug"
                  params={{ slug: o.slug }}
                  className="group overflow-hidden rounded-2xl border border-border/40 bg-surface/20 transition-colors hover:border-primary/40"
                >
                  <img
                    src={optimizedImage(op.image, 480)}
                    alt={op.title}
                    loading="lazy"
                    onError={fallbackToOriginal(op.image)}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-4">
                    <div className="text-xs font-bold uppercase tracking-widest text-primary">
                      {o.industry[lang]}
                    </div>
                    <div className="mt-2 font-display text-sm font-bold leading-snug">
                      {o.copy[lang].title}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
