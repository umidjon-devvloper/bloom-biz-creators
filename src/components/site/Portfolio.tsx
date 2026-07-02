import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Section, Reveal } from "./Section";

type Cat = "all" | "web" | "mobile" | "ecom";

const FILTERS: { key: Cat; label: string }[] = [
  { key: "all", label: "Barchasi" },
  { key: "web", label: "Websaytlar" },
  { key: "mobile", label: "Mobil ilovalar" },
  { key: "ecom", label: "E-commerce" },
];

const PROJECTS: {
  title: string;
  desc: string;
  tags: string[];
  cat: Exclude<Cat, "all">;
  link: string;
  hue: string;
}[] = [
  { title: "Finora Bank", desc: "Onlayn bank uchun mijoz kabineti", tags: ["React", "TypeScript", "Node"], cat: "web", link: "#", hue: "270" },
  { title: "Osiyo Market", desc: "Ko'p sotuvchili marketplace", tags: ["Next.js", "Stripe", "Postgres"], cat: "ecom", link: "#", hue: "200" },
  { title: "FitPulse", desc: "Sog'liq va sport uchun mobil ilova", tags: ["React Native", "Firebase"], cat: "mobile", link: "#", hue: "330" },
  { title: "Toshkent Delivery", desc: "Restoran va yetkazib berish platformasi", tags: ["Vue", "Nest", "Redis"], cat: "web", link: "#", hue: "150" },
  { title: "SilkRoad Store", desc: "Hunarmandchilik onlayn do'koni", tags: ["Shopify", "Custom Theme"], cat: "ecom", link: "#", hue: "40" },
  { title: "EduKids", desc: "Bolalar uchun ta'lim ilovasi", tags: ["Flutter", "Supabase"], cat: "mobile", link: "#", hue: "310" },
];

export function Portfolio() {
  const [filter, setFilter] = useState<Cat>("all");
  const shown = PROJECTS.filter((p) => filter === "all" || p.cat === filter);

  return (
    <Section
      id="portfolio"
      eyebrow="Bajarilgan ishlar"
      title={<>Loyihalarimiz — <span className="text-gradient-primary">natijalar tili bilan</span></>}
      description="Ba'zi mijozlar oshkora ko'rsatishga ruxsat bermagan — to'liq portfolio uchun bog'laning."
    >
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              filter === f.key
                ? "bg-gradient-primary text-primary-foreground shadow-glow"
                : "border border-border bg-surface/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => (
          <Reveal key={p.title} delay={i * 60}>
            <a
              href={p.link}
              className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-card card-hover"
            >
              <div
                className="relative aspect-[16/10] overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, oklch(0.55 0.2 ${p.hue}) 0%, oklch(0.72 0.17 ${Number(p.hue) + 40}) 100%)`,
                }}
              >
                <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:40px_40px]" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="font-display text-4xl font-bold text-primary-foreground/90">
                    {p.title.split(" ").map((w) => w[0]).join("")}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1.5 rounded-full glass-strong px-3 py-1.5 text-xs font-medium">
                    Ko'rish <ExternalLink className="h-3 w-3" />
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-border bg-surface/50 px-2.5 py-0.5 text-[11px] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
