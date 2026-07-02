import { Section } from "./Section";
import { useCountUp, useReveal } from "@/hooks/use-reveal";

const STATS = [
  { value: 50, suffix: "+", label: "Tugallangan loyiha" },
  { value: 3, suffix: "+", label: "Yillik tajriba" },
  { value: 100, suffix: "%", label: "Mijoz mamnunligi" },
  { value: 24, suffix: "s", label: "O'rtacha javob vaqti" },
];

function Stat({ value, suffix, label }: (typeof STATS)[number]) {
  const { ref, visible } = useReveal();
  const n = useCountUp(value, visible, 1800);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl font-bold text-gradient-primary tabular-nums md:text-5xl">
        {n}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export function About() {
  return (
    <Section
      id="about"
      eyebrow="Biz haqimizda"
      title={<>2022 yildan beri <span className="text-gradient-primary">g'oyalarni ishga tushiramiz</span></>}
      description="Kichik, lekin kuchli jamoa. Har bir loyihaga mahsulot egasidek qaraymiz — chunki natija sizniki, obro' bizniki."
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="absolute inset-0 -z-10 bg-gradient-mesh blur-3xl opacity-60" />
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl border border-border bg-gradient-primary opacity-90" />
              <div className="aspect-[4/5] rounded-2xl border border-border glass" />
            </div>
            <div className="space-y-4 pt-10">
              <div className="aspect-[4/5] rounded-2xl border border-border bg-surface-elevated" />
              <div className="aspect-square rounded-2xl border border-border bg-gradient-mesh" />
            </div>
          </div>
        </div>

        <div>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            Biz — O'zbekistondagi kichik, lekin tajribali dasturchilar jamoasimiz.
            Bizning maqsadimiz sodda: mijozning biznesiga real qiymat qo'shadigan
            mahsulot yaratish. Bo'sh va'dalar emas — deadlinelar, aniq narx va
            ishga tushirilgandan keyin ham qo'llab-quvvatlash.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Har bir loyihaga bitta shaxsiy menejer biriktiriladi",
              "Haftalik hisobot va real-time progress",
              "Kod sizniki — GitHub'da sizga topshiriladi",
              "Ishga tushirgandan keyin 3 oy bepul texnik yordam",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-primary" />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid grid-cols-2 gap-6 rounded-2xl border border-border bg-card p-6 md:grid-cols-4">
            {STATS.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
