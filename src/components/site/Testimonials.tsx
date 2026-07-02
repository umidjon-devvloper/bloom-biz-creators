import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Section } from "./Section";

const REVIEWS = [
  {
    name: "Aziz Rasulov",
    role: "Asoschisi, Osiyo Market",
    initials: "AR",
    text: "Narx kalkulyatori orqali qanchaga tushishini bilib, xotirjam buyurtma berdik. 3 hafta ichida sayt ishga tushdi va konversiyamiz 2 barobar oshdi.",
  },
  {
    name: "Malika Yusupova",
    role: "Marketing direktori, Finora",
    initials: "MY",
    text: "Dizayn darajasi kutilganidan yuqori chiqdi. Jamoa har hafta demo qildi, hech qanday kutilmagan holat bo'lmadi.",
  },
  {
    name: "Rustam Karimov",
    role: "CEO, SilkRoad",
    initials: "RK",
    text: "Ilgari bir necha frilanser bilan ishlagandim, deadline muammosi doim bor edi. Bularda hamma narsa aniq — o'z vaqtida topshirildi.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % REVIEWS.length), 6000);
    return () => clearInterval(t);
  }, []);

  const r = REVIEWS[i];

  return (
    <Section
      id="testimonials"
      eyebrow="Mijozlar fikri"
      title={<>Bizni <span className="text-gradient-primary">mijozlarimiz gapiradi</span></>}
    >
      <div className="relative mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-14">
          <Quote className="absolute right-8 top-8 h-16 w-16 text-primary/10" />
          <div className="relative min-h-[180px]">
            <p key={r.name} className="text-lg leading-relaxed text-foreground md:text-xl" style={{ animation: "fade-up 500ms ease-out" }}>
              "{r.text}"
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-primary font-display font-bold text-primary-foreground">
                {r.initials}
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
            onClick={() => setI((v) => (v - 1 + REVIEWS.length) % REVIEWS.length)}
            aria-label="Oldingi"
            className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-2">
            {REVIEWS.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Sharh ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-gradient-primary" : "w-1.5 bg-muted"}`}
              />
            ))}
          </div>
          <button
            onClick={() => setI((v) => (v + 1) % REVIEWS.length)}
            aria-label="Keyingi"
            className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </Section>
  );
}
