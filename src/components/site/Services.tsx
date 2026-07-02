import {
  Globe, Building2, ShoppingBag, Smartphone, Server, Palette,
} from "lucide-react";
import { Section, Reveal } from "./Section";

const SERVICES = [
  {
    icon: Globe,
    title: "Landing page",
    desc: "Konversiya uchun optimallashtirilgan, tez yuklanadigan bir sahifali sayt.",
    from: "$300",
  },
  {
    icon: Building2,
    title: "Korporativ sayt",
    desc: "Kompaniyangiz uchun ko'p sahifali, CMS bilan boshqariladigan yechim.",
    from: "$800",
  },
  {
    icon: ShoppingBag,
    title: "Onlayn do'kon",
    desc: "To'lov, savat, admin panel — sotuvni to'liq boshqariladigan e-commerce.",
    from: "$1 500",
  },
  {
    icon: Smartphone,
    title: "Mobil ilova",
    desc: "iOS va Android uchun native tuyg'udagi cross-platform ilovalar.",
    from: "$2 500",
  },
  {
    icon: Server,
    title: "Backend / API",
    desc: "Xavfsiz, kengayadigan server infratuzilma va REST/GraphQL API.",
    from: "$600",
  },
  {
    icon: Palette,
    title: "UI/UX dizayn",
    desc: "Brend darajasidagi, foydalanuvchini o'ylab yaratilgan mahsulot dizayni.",
    from: "$400",
  },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Xizmatlarimiz"
      title={<>Bir joydan — <span className="text-gradient-primary">to'liq mahsulot</span></>}
      description="Dizayndan tortib serverni ishga tushirishgacha. Bir jamoa, bitta manzil."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 80}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 card-hover">
              <div
                aria-hidden
                className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
              />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary/10 text-primary ring-1 ring-primary/20 transition-transform group-hover:scale-110">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xs text-muted-foreground">dan boshlab</span>
                  <span className="font-display text-lg font-bold text-gradient-primary">{s.from}</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
