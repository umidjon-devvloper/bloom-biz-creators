import { useMemo, useState } from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Section } from "./Section";
import { useAnimatedNumber } from "@/hooks/use-reveal";

type PagesKey = "small" | "medium" | "large";

const PAGES: { key: PagesKey; label: string; desc: string; price: number }[] = [
  { key: "small", label: "1 sahifa", desc: "Landing / bir sahifali", price: 300 },
  { key: "medium", label: "3–5 sahifa", desc: "Kichik biznes sayti", price: 700 },
  { key: "large", label: "5+ sahifa", desc: "Korporativ / katalog", price: 1400 },
];

const ADDONS = [
  { key: "payments", label: "To'lov tizimi integratsiyasi", desc: "Click, Payme, Stripe", price: 350 },
  { key: "seo", label: "SEO optimizatsiya", desc: "Meta, sitemap, Core Web Vitals", price: 250 },
  { key: "admin", label: "Admin panel", desc: "Kontentni o'zingiz boshqarasiz", price: 500 },
  { key: "mobile", label: "Mobil ilova qo'shish", desc: "iOS + Android versiya", price: 2000 },
] as const;

type AddonKey = (typeof ADDONS)[number]["key"];

const DESIGN = [
  { key: "standard", label: "Standart", desc: "Toza, professional shablon", price: 0 },
  { key: "premium", label: "Premium", desc: "Awwwards darajasidagi custom dizayn", price: 600 },
] as const;

export function PriceCalculator() {
  const [pages, setPages] = useState<PagesKey>("medium");
  const [addons, setAddons] = useState<Record<AddonKey, boolean>>({
    payments: false,
    seo: true,
    admin: false,
    mobile: false,
  });
  const [design, setDesign] = useState<"standard" | "premium">("standard");

  const total = useMemo(() => {
    const base = PAGES.find((p) => p.key === pages)!.price;
    const add = ADDONS.reduce((sum, a) => (addons[a.key] ? sum + a.price : sum), 0);
    const d = DESIGN.find((d) => d.key === design)!.price;
    return base + add + d;
  }, [pages, addons, design]);

  const animated = useAnimatedNumber(total, 500);

  const summary = useMemo(() => {
    const parts: string[] = [PAGES.find((p) => p.key === pages)!.label];
    ADDONS.forEach((a) => addons[a.key] && parts.push(a.label));
    parts.push(`Dizayn: ${DESIGN.find((d) => d.key === design)!.label}`);
    return parts.join(" · ");
  }, [pages, addons, design]);

  const handleOrder = () => {
    const form = document.getElementById("contact-form");
    const budget = document.getElementById("field-budget") as HTMLInputElement | null;
    const note = document.getElementById("field-note") as HTMLTextAreaElement | null;
    if (budget) budget.value = `$${total.toLocaleString("en-US")}`;
    if (note) note.value = `Tanlangan konfiguratsiya: ${summary}`;
    form?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Section
      id="calculator"
      eyebrow="Shaffof narx"
      title={<>Loyihangiz narxini <span className="text-gradient-primary">o'zingiz hisoblang</span></>}
      description="Hech qanday yashirin to'lov yo'q. Nima tanlasangiz — shu narx."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_400px]">
        {/* Options */}
        <div className="space-y-8 rounded-3xl border border-border bg-card p-8 md:p-10">
          {/* Pages */}
          <div>
            <h3 className="font-display text-lg font-bold">Sahifalar soni</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {PAGES.map((p) => {
                const active = pages === p.key;
                return (
                  <button
                    key={p.key}
                    onClick={() => setPages(p.key)}
                    className={`group relative rounded-xl border p-4 text-left transition-all ${
                      active
                        ? "border-primary bg-primary/5 shadow-glow"
                        : "border-border bg-surface/50 hover:border-primary/40"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{p.label}</span>
                      <span
                        className={`grid h-5 w-5 place-items-center rounded-full border transition-all ${
                          active ? "border-primary bg-primary text-primary-foreground" : "border-border"
                        }`}
                      >
                        {active && <Check className="h-3 w-3" />}
                      </span>
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">{p.desc}</div>
                    <div className="mt-3 text-xs font-medium text-primary">+${p.price}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Addons */}
          <div>
            <h3 className="font-display text-lg font-bold">Qo'shimcha imkoniyatlar</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {ADDONS.map((a) => {
                const active = addons[a.key];
                return (
                  <button
                    key={a.key}
                    onClick={() => setAddons((s) => ({ ...s, [a.key]: !s[a.key] }))}
                    className={`group flex items-start gap-3 rounded-xl border p-4 text-left transition-all ${
                      active
                        ? "border-primary bg-primary/5"
                        : "border-border bg-surface/50 hover:border-primary/40"
                    }`}
                  >
                    <span
                      className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border transition-all ${
                        active
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border"
                      }`}
                    >
                      {active && <Check className="h-3 w-3" />}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold">{a.label}</span>
                        <span className="text-xs font-medium text-primary">+${a.price}</span>
                      </div>
                      <div className="mt-0.5 text-xs text-muted-foreground">{a.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Design */}
          <div>
            <h3 className="font-display text-lg font-bold">Dizayn darajasi</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {DESIGN.map((d) => {
                const active = design === d.key;
                return (
                  <button
                    key={d.key}
                    onClick={() => setDesign(d.key)}
                    className={`relative rounded-xl border p-4 text-left transition-all ${
                      active
                        ? "border-primary bg-primary/5 shadow-glow"
                        : "border-border bg-surface/50 hover:border-primary/40"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 font-semibold">
                        {d.key === "premium" && <Sparkles className="h-4 w-4 text-primary" />}
                        {d.label}
                      </span>
                      <span className="text-xs font-medium text-primary">
                        {d.price ? `+$${d.price}` : "Bepul"}
                      </span>
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">{d.desc}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sticky total */}
        <div className="lg:sticky lg:top-28 h-fit">
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-mesh p-8 shadow-elevated">
            <div className="absolute inset-0 -z-0 opacity-40">
              <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary blur-3xl animate-blob" />
            </div>
            <div className="relative">
              <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Umumiy narx
              </div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display text-6xl font-bold text-gradient-primary tabular-nums">
                  ${animated.toLocaleString("en-US")}
                </span>
              </div>
              <div className="mt-1 text-xs text-muted-foreground">bir martalik to'lov · KDS'siz</div>

              <div className="mt-6 space-y-2 rounded-xl border border-border/50 bg-background/40 p-4 text-xs text-muted-foreground">
                <div className="font-medium text-foreground">Tanlangan konfiguratsiya:</div>
                <div>{summary}</div>
              </div>

              <button
                onClick={handleOrder}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold btn-glow"
              >
                Shu narxda buyurtma berish
                <ArrowRight className="h-4 w-4" />
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
                24 soat ichida aniq taklif yuboramiz
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
