import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import { Section, Reveal } from "./Section";
import { SITE } from "@/lib/site";
import { useI18n } from "@/i18n";

/**
 * Language-neutral metadata, index-aligned with translations.team.members.
 * `photo` is empty by default so no broken-image (404) requests are made and the
 * gradient initials show. To use a real photo, drop a file into /public/team/ and
 * set e.g. `photo: "/team/1.jpg"` — the <img> only renders when `photo` is set.
 *
 * `accent` is a hue that feeds the default initials gradient; `bg` overrides it
 * with a full CSS background when a tile needs an exact colour instead of a hue.
 */
const TEAM_META = [
  {
    initials: "UG",
    photo: "/portrait.webp",
    // The portrait is a transparent cut-out, so this gradient IS its background.
    // Built from --primary so it is literally the site's blue in both themes —
    // the hue+40 formula below would drift into the violet the gold fights with.
    bg: "linear-gradient(135deg, color-mix(in oklab, var(--primary) 72%, black) 0%, var(--primary) 100%)",
    accent: "260",
    skills: ["React & Next.js", "TypeScript", "Node.js"],
    github: SITE.github,
    linkedin: SITE.linkedin,
  },
  {
    initials: "DH",
    photo: "",
    bg: "",
    accent: "200",
    skills: ["Node.js", "PostgreSQL", "React"],
    github: "",
    linkedin: "",
  },
  {
    initials: "UA",
    photo: "",
    bg: "",
    accent: "320",
    skills: ["React & Vue", "Tailwind CSS", "Motion & UI"],
    github: "",
    linkedin: "",
  },
];

const bentoClass =
  "relative overflow-hidden rounded-[2rem] border border-border/60 bg-card/40 p-8 backdrop-blur-md transition-all duration-500 hover:border-primary/50 hover:bg-card/60 hover:shadow-glow";
const bentoClassNoPadding =
  "relative overflow-hidden rounded-[2rem] border border-border/60 bg-card/40 backdrop-blur-md transition-all duration-500 hover:border-primary/50 hover:bg-card/60 hover:shadow-glow";

function BentoAvatar({
  photo,
  initials,
  accent,
  bg,
}: {
  photo: string;
  initials: string;
  accent: string;
  bg: string;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="group relative h-full w-full min-h-[16rem]">
      <div
        className="absolute inset-0 grid place-items-center font-display text-8xl font-black text-primary-foreground opacity-90 transition-transform duration-700 group-hover:scale-110"
        style={{
          background:
            bg ||
            `linear-gradient(135deg, oklch(0.62 0.2 ${accent}) 0%, oklch(0.74 0.17 ${Number(accent) + 40}) 100%)`,
        }}
      >
        {initials}
      </div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

      {photo && !failed && (
        <img
          src={photo}
          alt={initials}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="relative h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}
    </div>
  );
}

function Identity({
  m,
  meta,
  align = "left",
}: {
  m: { name: string; role: string; level: string };
  meta: { initials: string };
  align?: "left" | "right";
}) {
  return (
    <>
      <div
        className={`absolute -bottom-16 ${align === "left" ? "-right-10" : "-left-10"} opacity-[0.02] pointer-events-none select-none transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-[0.04]`}
      >
        <span className="font-display text-[16rem] font-black leading-none">{meta.initials}</span>
      </div>
      <div className="relative z-10 flex h-full flex-col justify-center">
        <h3 className="font-display text-4xl font-black tracking-tight text-foreground md:text-5xl lg:text-6xl">
          {m.name}
        </h3>
        <p className="mt-3 text-xl font-bold text-primary md:text-2xl">{m.role}</p>
        <div className={`mt-6 flex ${align === "left" ? "justify-start" : "justify-end"}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/80 px-5 py-2 text-xs font-bold uppercase tracking-widest text-muted-foreground shadow-sm backdrop-blur-md">
            {m.level}
          </div>
        </div>
      </div>
    </>
  );
}

/**
 * Skills used to carry a self-assigned percentage ("React 98%"). A number that
 * only its own subject can score isn't evidence of anything, and next to real
 * figures it drags them down with it — so the stack is listed plainly instead.
 */
function BentoSkills({ skills }: { skills: string[] }) {
  return (
    <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-3">
      {skills.map((s) => (
        <div
          key={s}
          className="flex h-full min-h-[8rem] flex-col justify-end rounded-2xl border border-border/40 bg-background/50 p-5 transition-colors duration-300 hover:border-primary/40 hover:bg-background/80"
        >
          <span className="font-display text-xl font-black leading-tight text-foreground lg:text-2xl">
            {s}
          </span>
        </div>
      ))}
    </div>
  );
}

/** Renders only the profiles that exist — an icon linking to "#" is a dead end. */
function BentoSocials({
  m,
  meta,
}: {
  m: { name: string };
  meta: { github: string; linkedin: string };
}) {
  const links = [
    {
      href: meta.github,
      Icon: Github,
      name: "GitHub",
      hover: "hover:border-primary hover:bg-primary hover:text-primary-foreground",
    },
    {
      href: meta.linkedin,
      Icon: Linkedin,
      name: "LinkedIn",
      hover: "hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white",
    },
  ].filter((l) => l.href);

  if (!links.length) {
    return <span className="text-xs font-medium text-muted-foreground">{m.name}</span>;
  }

  return (
    <>
      {links.map(({ href, Icon, name, hover }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${m.name} ${name}`}
          className={`group/social relative flex h-14 w-14 items-center justify-center rounded-full border border-border/60 bg-background/60 text-muted-foreground shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-glow ${hover}`}
        >
          <Icon className="h-6 w-6 transition-transform group-hover/social:-rotate-12" />
        </a>
      ))}
    </>
  );
}

export function Team({
  headless = false,
  showJoin = false,
}: {
  headless?: boolean;
  showJoin?: boolean;
}) {
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
      <div className="mx-auto max-w-6xl flex flex-col gap-16 md:gap-24">
        {t.team.members.map((m, i) => {
          const meta = TEAM_META[i];
          if (!meta) return null; // Defensive check
          const isEven = i % 2 === 0;

          return (
            <Reveal key={m.name} delay={100} className="w-full">
              <div className="flex flex-col gap-4">
                {/* Top Row */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 md:min-h-[18rem]">
                  {isEven ? (
                    <>
                      <div className={`${bentoClassNoPadding} md:col-span-1 lg:col-span-1`}>
                        <BentoAvatar
                          photo={meta.photo}
                          initials={meta.initials}
                          accent={meta.accent}
                          bg={meta.bg}
                        />
                      </div>
                      <div className={`${bentoClass} md:col-span-2 lg:col-span-3 text-left group`}>
                        <Identity m={m} meta={meta} align="left" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={`${bentoClass} md:col-span-2 lg:col-span-3 text-right group`}>
                        <Identity m={m} meta={meta} align="right" />
                      </div>
                      <div className={`${bentoClassNoPadding} md:col-span-1 lg:col-span-1`}>
                        <BentoAvatar
                          photo={meta.photo}
                          initials={meta.initials}
                          accent={meta.accent}
                          bg={meta.bg}
                        />
                      </div>
                    </>
                  )}
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                  {isEven ? (
                    <>
                      <div className={`${bentoClass} md:col-span-3 p-6`}>
                        <BentoSkills skills={meta.skills} />
                      </div>
                      <div
                        className={`${bentoClass} md:col-span-1 flex flex-row md:flex-col items-center justify-center gap-6 p-6`}
                      >
                        <BentoSocials m={m} meta={meta} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className={`${bentoClass} md:col-span-1 flex flex-row md:flex-col items-center justify-center gap-6 p-6`}
                      >
                        <BentoSocials m={m} meta={meta} />
                      </div>
                      <div className={`${bentoClass} md:col-span-3 p-6`}>
                        <BentoSkills skills={meta.skills} />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {showJoin && (
        <Reveal>
          <div className="mt-24 flex flex-col items-center justify-between gap-8 rounded-[2.5rem] border border-border bg-gradient-mesh p-10 text-center shadow-lg md:flex-row md:p-14 md:text-left">
            <div className="max-w-xl">
              <h3 className="font-display text-3xl font-black tracking-tight md:text-4xl">
                {t.team.joinTitle}
              </h3>
              <p className="mt-4 text-lg text-muted-foreground">{t.team.joinDesc}</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-3 rounded-full px-8 py-4 text-base font-bold btn-glow transition-transform hover:scale-105 active:scale-95"
            >
              {t.team.joinBtn}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </Reveal>
      )}
    </Section>
  );
}
