import { Github, Linkedin } from "lucide-react";
import { Section, Reveal } from "./Section";

const TEAM = [
  {
    name: "Jasur Karimov",
    role: "Full-Stack Developer",
    level: "Senior",
    initials: "JK",
    skills: [
      { name: "React", value: 95 },
      { name: "Node.js", value: 90 },
      { name: "PostgreSQL", value: 85 },
    ],
    github: "#",
    linkedin: "#",
  },
  {
    name: "Nozima Rahmonova",
    role: "UI/UX Designer",
    level: "Senior",
    initials: "NR",
    skills: [
      { name: "Figma", value: 98 },
      { name: "Webflow", value: 80 },
      { name: "Motion", value: 75 },
    ],
    github: "#",
    linkedin: "#",
  },
  {
    name: "Sardor Yusupov",
    role: "Mobile Developer",
    level: "Middle+",
    initials: "SY",
    skills: [
      { name: "React Native", value: 90 },
      { name: "Swift", value: 70 },
      { name: "Kotlin", value: 72 },
    ],
    github: "#",
    linkedin: "#",
  },
  {
    name: "Dilnoza Tursunova",
    role: "Backend Engineer",
    level: "Middle",
    initials: "DT",
    skills: [
      { name: "Go", value: 82 },
      { name: "Python", value: 88 },
      { name: "Docker", value: 78 },
    ],
    github: "#",
    linkedin: "#",
  },
];

export function Team() {
  return (
    <Section
      id="team"
      eyebrow="Jamoa"
      title={<>Kod yozadigan <span className="text-gradient-primary">haqiqiy odamlar</span></>}
      description="Har bir mutaxassisning darajasi va texnologiyalari ochiq ko'rsatilgan."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((m, i) => (
          <Reveal key={m.name} delay={i * 80}>
            <div className="group h-full rounded-2xl border border-border bg-card p-6 card-hover">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary font-display text-lg font-bold text-primary-foreground shadow-glow">
                    {m.initials}
                  </div>
                  <span className="absolute -bottom-1 -right-1 rounded-full border-2 border-card bg-success px-1.5 py-0.5 text-[9px] font-bold uppercase text-primary-foreground">
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
                {m.skills.map((s) => (
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
                  href={m.github}
                  aria-label={`${m.name} GitHub`}
                  className="grid h-8 w-8 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={m.linkedin}
                  aria-label={`${m.name} LinkedIn`}
                  className="grid h-8 w-8 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
