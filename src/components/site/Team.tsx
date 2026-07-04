import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import { Section, Reveal } from "./Section";
import { useI18n } from "@/i18n";

/**
 * Language-neutral metadata, index-aligned with translations.team.members.
 * Drop a photo into /public/team/<photo> to replace the gradient initials —
 * the component falls back to initials automatically if the image is missing.
 */
const TEAM_META = [
  { initials: "UY", photo: "/team/1.jpg", accent: "275", skills: [{ name: "React", value: 96 }, { name: "Architecture", value: 92 }, { name: "Node.js", value: 90 }] },
  { initials: "JK", photo: "/team/2.jpg", accent: "255", skills: [{ name: "React", value: 95 }, { name: "Node.js", value: 90 }, { name: "PostgreSQL", value: 85 }] },
  { initials: "NR", photo: "/team/3.jpg", accent: "320", skills: [{ name: "Figma", value: 98 }, { name: "Webflow", value: 80 }, { name: "Motion", value: 75 }] },
  { initials: "SY", photo: "/team/4.jpg", accent: "200", skills: [{ name: "React Native", value: 90 }, { name: "Swift", value: 70 }, { name: "Kotlin", value: 72 }] },
  { initials: "DT", photo: "/team/5.jpg", accent: "150", skills: [{ name: "Go", value: 82 }, { name: "Python", value: 88 }, { name: "Docker", value: 78 }] },
  { initials: "AS", photo: "/team/6.jpg", accent: "40", skills: [{ name: "CI/CD", value: 88 }, { name: "AWS", value: 80 }, { name: "Testing", value: 84 }] },
];

function Avatar({ photo, initials, accent }: { photo: string; initials: string; accent: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl shadow-glow">
      <div
        className="absolute inset-0 grid place-items-center font-display text-lg font-bold text-primary-foreground"
        style={{
          background: `linear-gradient(135deg, oklch(0.62 0.2 ${accent}) 0%, oklch(0.74 0.17 ${Number(accent) + 40}) 100%)`,
        }}
      >
        {initials}
      </div>
      {!failed && (
        <img
          src={photo}
          alt={initials}
          loading="lazy"
          onError={() => setFailed(true)}
          className="relative h-full w-full object-cover"
        />
      )}
    </div>
  );
}

export function Team({ headless = false, showJoin = false }: { headless?: boolean; showJoin?: boolean }) {
  const { t } = useI18n();

  return (
    <Section
      id="team"
      eyebrow={headless ? undefined : t.team.eyebrow}
      title={
        headless ? undefined : (
          <>
            {t.team.titleA} <span className="text-gradient-primary">{t.team.titleHl}</span>
          </>
        )
      }
      description={headless ? undefined : t.team.desc}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.team.members.map((m, i) => {
          const meta = TEAM_META[i];
          return (
            <Reveal key={m.name} delay={i * 70}>
              <div className="group mesh-border h-full rounded-2xl border border-border bg-card p-6 card-hover">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Avatar photo={meta.photo} initials={meta.initials} accent={meta.accent} />
                    <span className="absolute -bottom-1 -right-1 grid h-5 w-5 place-items-center rounded-full border-2 border-card bg-success text-[8px] text-primary-foreground">
                      ●
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-bold leading-tight">{m.name}</h3>
                    <div className="text-xs text-muted-foreground">{m.role}</div>
                    <div className="mt-1 inline-flex rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                      {m.level}
                    </div>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {meta.skills.map((s) => (
                    <div key={s.name}>
                      <div className="mb-1 flex items-center justify-between text-xs">
                        <span className="font-medium text-foreground">{s.name}</span>
                        <span className="text-muted-foreground tabular-nums">{s.value}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-gradient-primary transition-all duration-1000 group-hover:brightness-110"
                          style={{ width: `${s.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 border-t border-border pt-4">
                  <a
                    href="#"
                    aria-label={`${m.name} GitHub`}
                    className="grid h-8 w-8 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    aria-label={`${m.name} LinkedIn`}
                    className="grid h-8 w-8 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {showJoin && (
        <Reveal>
          <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-3xl border border-border bg-gradient-mesh p-8 text-center md:flex-row md:p-10 md:text-left">
            <div>
              <h3 className="font-display text-xl font-bold">{t.team.joinTitle}</h3>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">{t.team.joinDesc}</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold btn-glow"
            >
              {t.team.joinBtn}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      )}
    </Section>
  );
}
