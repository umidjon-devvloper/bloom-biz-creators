import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Section } from "./Section";
import { useI18n } from "@/i18n";

export function Testimonials() {
  const { t } = useI18n();
  const reviews = t.about.reviews;
  const [i, setI] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setI((v) => (v + 1) % reviews.length), 6000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const r = reviews[i] ?? reviews[0];
  const initials = r.name.split(" ").map((w) => w[0]).join("").slice(0, 2);

  return (
    <Section
      id="testimonials"
      eyebrow={t.about.testiEyebrow}
      title={
        <>
          {t.about.testiTitleA} <span className="text-gradient-primary">{t.about.testiTitleHl}</span>
        </>
      }
    >
      <div className="relative mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-14">
          <Quote className="absolute right-8 top-8 h-16 w-16 text-primary/10" />
          <div className="relative min-h-[180px]">
            <p
              key={r.name}
              className="text-lg leading-relaxed text-foreground md:text-xl"
              style={{ animation: "fade-up 500ms ease-out" }}
            >
              "{r.text}"
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-primary font-display font-bold text-primary-foreground">
                {initials}
              </div>
              <div>
                <div className="font-semibold">{r.name}</div>
                <div className="text-sm text-muted-foreground">{r.role}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={() => setI((v) => (v - 1 + reviews.length) % reviews.length)}
            aria-label="Prev"
            className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Review ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-gradient-primary" : "w-1.5 bg-muted"}`}
              />
            ))}
          </div>
          <button
            onClick={() => setI((v) => (v + 1) % reviews.length)}
            aria-label="Next"
            className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </Section>
  );
}
