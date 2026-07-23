import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, BadgeCheck } from "lucide-react";
import { Section } from "./Section";
import { useI18n } from "@/i18n";

export function Testimonials() {
  const { t } = useI18n();
  const reviews = t.about.reviews;
  const [i, setI] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setI((v) => (v + 1) % reviews.length), 8000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const r = reviews[i] ?? reviews[0];
  const initials = r.name.split(" ").map((w) => w[0]).join("").slice(0, 2);

  // We can use a deterministic random seed for Unsplash avatars to make it look premium
  const avatarUrl = `https://i.pravatar.cc/150?u=${encodeURIComponent(r.name)}`;

  return (
    <Section
      id="testimonials"
      eyebrow={t.about.testiEyebrow}
      title={
        <span className="text-5xl md:text-7xl font-black tracking-tighter">
          {t.about.testiTitleA} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">{t.about.testiTitleHl}</span>
        </span>
      }
    >
      <div className="relative mx-auto mt-16 max-w-5xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border/50 bg-surface/30 p-10 backdrop-blur-md md:p-20">
          
          <Quote className="absolute right-12 top-12 h-32 w-32 text-primary/5 transition-transform duration-700 hover:rotate-12 hover:scale-110" />
          
          <div className="relative min-h-[220px]">
            <p
              key={r.name}
              className="font-display text-2xl font-medium leading-relaxed tracking-tight text-foreground md:text-4xl lg:leading-snug"
              style={{ animation: "fade-up 700ms cubic-bezier(0.16, 1, 0.3, 1) both" }}
            >
              "{r.text}"
            </p>
            
            <div 
              className="mt-12 flex items-center gap-6"
              style={{ animation: "fade-up 700ms cubic-bezier(0.16, 1, 0.3, 1) 200ms both" }}
              key={`${r.name}-meta`}
            >
              <div className="relative">
                <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-primary/20 bg-surface shadow-glow">
                  <img src={avatarUrl} alt={r.name} className="h-full w-full object-cover" />
                </div>
                <div className="absolute -bottom-1 -right-1 rounded-full bg-background p-0.5">
                   <BadgeCheck className="h-5 w-5 fill-primary text-primary-foreground" />
                </div>
              </div>
              
              <div>
                <div className="font-display text-xl font-bold">{r.name}</div>
                <div className="font-medium tracking-wide text-primary">{r.role}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between md:absolute md:-right-6 md:bottom-20 md:mt-0 md:flex-col md:gap-4">
          <button
            onClick={() => setI((v) => (v - 1 + reviews.length) % reviews.length)}
            aria-label="Prev"
            className="grid h-14 w-14 place-items-center rounded-full border border-border/50 bg-surface/50 text-muted-foreground backdrop-blur-md transition-all hover:border-primary/50 hover:bg-primary hover:text-primary-foreground hover:shadow-glow"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <div className="flex gap-2 md:flex-col">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Review ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`transition-all duration-300 ${idx === i ? "h-2 w-8 bg-primary shadow-glow md:h-8 md:w-2" : "h-2 w-2 bg-border hover:bg-primary/50"} rounded-full`}
              />
            ))}
          </div>
          
          <button
            onClick={() => setI((v) => (v + 1) % reviews.length)}
            aria-label="Next"
            className="grid h-14 w-14 place-items-center rounded-full border border-border/50 bg-surface/50 text-muted-foreground backdrop-blur-md transition-all hover:border-primary/50 hover:bg-primary hover:text-primary-foreground hover:shadow-glow"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </Section>
  );
}
