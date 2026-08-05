import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ExternalLink, Info } from "lucide-react";
import { Section, Reveal } from "./Section";
import { CLIENT_SITES } from "@/lib/site";
import { optimizedImage, fallbackToOriginal } from "@/lib/img";
import { useI18n } from "@/i18n";

/**
 * Replaces the old testimonial carousel, which quoted three named people at
 * three companies that appear nowhere else on the site, over avatars pulled from
 * i.pravatar.cc — a random-face generator. A single fabricated review poisons
 * every true claim next to it, and a prospect who reverse-searches the photo
 * finds out in seconds.
 *
 * What replaces it is the strongest evidence actually available: client sites
 * that are live right now, each one a link the visitor can open and check. When
 * real, attributable reviews exist, add them alongside this block — don't put
 * them back in place of it.
 */
export function ClientProof() {
  const { t } = useI18n();

  return (
    <Section
      id="proof"
      eyebrow={t.proof.eyebrow}
      title={
        <span className="text-5xl md:text-7xl font-black tracking-tighter">
          {t.proof.titleA}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">
            {t.proof.titleHl}
          </span>
        </span>
      }
      description={t.proof.desc}
    >
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CLIENT_SITES.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 100}>
            <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-border/40 bg-surface/20 backdrop-blur-md transition-all duration-500 hover:border-primary/40 hover:bg-surface/40">
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="relative block aspect-[16/10] overflow-hidden"
              >
                <img
                  src={optimizedImage(p.image, 720)}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                  onError={fallbackToOriginal(p.image)}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-success/40 bg-background/80 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-success backdrop-blur-md">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
                  </span>
                  {t.proof.liveNote}
                </span>
              </a>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold leading-snug tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 font-mono text-xs text-muted-foreground">{p.highlight}</p>

                <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-foreground transition-colors hover:text-primary"
                  >
                    {t.proof.openSite}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  {p.caseStudy && (
                    <Link
                      to="/case-studies/$slug"
                      params={{ slug: p.caseStudy }}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
                    >
                      {t.proof.readCase}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Says plainly why there is no review carousel here. Naming the gap costs
          less credibility than filling it with something invented. */}
      <div className="mx-auto mt-12 flex max-w-3xl items-start gap-4 rounded-[2rem] border border-border/40 bg-surface/20 p-6 backdrop-blur-md md:p-8">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary">
          <Info className="h-5 w-5" />
        </div>
        <div>
          <div className="font-display text-base font-bold text-foreground">
            {t.proof.noReviewsTitle}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {t.proof.noReviewsBody}
          </p>
        </div>
      </div>
    </Section>
  );
}
