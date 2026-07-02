import { Eye, Zap, Users2, LifeBuoy, ShieldCheck, Rocket } from "lucide-react";
import { Section, Reveal } from "./Section";

const REASONS = [
  { icon: Eye, title: "Shaffof narx", desc: "Kalkulyator orqali yakuniy narxni oldindan bilasiz. Yashirin qo'shimchalar yo'q." },
  { icon: Zap, title: "Tez yetkazib berish", desc: "Landing 7 kunda, korporativ sayt 2–3 haftada. Deadlinelarga qattiq amal qilamiz." },
  { icon: Users2, title: "Jamoaviy ish", desc: "Bitta frilanser emas — dizayner, dev va menejerdan iborat jamoa." },
  { icon: LifeBuoy, title: "Ishga tushgandan keyin ham yordam", desc: "3 oy bepul bug-fix va konsultatsiya. Keyin arzon oylik obuna." },
  { icon: ShieldCheck, title: "Kod sizniki", desc: "GitHub repozitoriya sizga topshiriladi. Hech qanday qulflash yo'q." },
  { icon: Rocket, title: "Natijaga yo'naltirilgan", desc: "Konversiya, tezlik, SEO — dizayn go'zal, lekin biznes ham o'sadi." },
];

export function WhyUs() {
  return (
    <Section
      id="why"
      eyebrow="Nega bizni tanlash kerak"
      title={<>Boshqa dasturchiga emas, <span className="text-gradient-primary">bizga yozing</span></>}
      description="Chunki biz siz uchun oddiy 'buyurtma' emas, uzoq muddatli hamkorsiz."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {REASONS.map((r, i) => (
          <Reveal key={r.title} delay={i * 70}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 card-hover">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary/10 text-primary ring-1 ring-primary/20 transition-transform group-hover:scale-110 group-hover:rotate-6">
                  <r.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-bold">{r.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
