import { useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Section } from "./Section";
import { useAnimatedNumber } from "@/hooks/use-reveal";
import { useI18n } from "@/i18n";

const PAGE_PRICES = [300, 700, 1400];
const ADDON_PRICES = [350, 250, 500, 2000];
const DESIGN_PRICES = [0, 600];

export function PriceCalculator({ headless = false }: { headless?: boolean }) {
  const { t } = useI18n();
  const navigate = useNavigate();

  const [pages, setPages] = useState(1); // index into PAGE_PRICES
  const [addons, setAddons] = useState<boolean[]>([false, true, false, false]);
  const [design, setDesign] = useState(0); // index into DESIGN_PRICES

  const total = useMemo(() => {
    const base = PAGE_PRICES[pages];
    const add = ADDON_PRICES.reduce((sum, p, i) => (addons[i] ? sum + p : sum), 0);
    return base + add + DESIGN_PRICES[design];
  }, [pages, addons, design]);

  const animated = useAnimatedNumber(total, 500);

  const summary = useMemo(() => {
    const parts: string[] = [t.services.pages[pages].label];
    t.services.addons.forEach((a, i) => addons[i] && parts.push(a.label));
    parts.push(`${t.services.designLabel}: ${t.services.design[design].label}`);
    return parts.join(" · ");
  }, [pages, addons, design, t]);

  const handleOrder = () => {
    try {
      sessionStorage.setItem(
        "ua-order",
        JSON.stringify({ budget: `$${total.toLocaleString("en-US")}`, summary }),
      );
    } catch {
      /* ignore */
    }
    navigate({ to: "/contact" });
  };

  return (
    <Section
      id="calculator"
      eyebrow={headless ? undefined : t.services.calcEyebrow}
      title={
        headless ? undefined : (
          <>
            {t.services.calcTitleA}{" "}
            <span className="text-gradient-primary">{t.services.calcTitleHl}</span>
          </>
        )
      }
      description={headless ? undefined : t.services.calcDesc}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_400px]">
        <div className="space-y-8 rounded-3xl border border-border bg-card p-8 md:p-10">
          {/* Pages */}
          <div>
            <h3 className="font-display text-lg font-bold">{t.services.pagesLabel}</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {t.services.pages.map((p, i) => {
                const active = pages === i;
                return (
                  <button
                    key={p.label}
                    onClick={() => setPages(i)}
                    className={`group relative rounded-xl border p-4 text-left transition-all ${
                      active ? "border-primary bg-primary/5 shadow-glow" : "border-border bg-surface/50 hover:border-primary/40"
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
                    <div className="mt-3 text-xs font-medium text-primary">+${PAGE_PRICES[i]}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Addons */}
          <div>
            <h3 className="font-display text-lg font-bold">{t.services.addonsLabel}</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {t.services.addons.map((a, i) => {
                const active = addons[i];
                return (
                  <button
                    key={a.label}
                    onClick={() => setAddons((s) => s.map((v, j) => (j === i ? !v : v)))}
                    className={`group flex items-start gap-3 rounded-xl border p-4 text-left transition-all ${
                      active ? "border-primary bg-primary/5" : "border-border bg-surface/50 hover:border-primary/40"
                    }`}
                  >
                    <span
                      className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border transition-all ${
                        active ? "border-primary bg-primary text-primary-foreground" : "border-border"
                      }`}
                    >
                      {active && <Check className="h-3 w-3" />}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold">{a.label}</span>
                        <span className="text-xs font-medium text-primary">+${ADDON_PRICES[i]}</span>
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
            <h3 className="font-display text-lg font-bold">{t.services.designLabel}</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {t.services.design.map((d, i) => {
                const active = design === i;
                return (
                  <button
                    key={d.label}
                    onClick={() => setDesign(i)}
                    className={`relative rounded-xl border p-4 text-left transition-all ${
                      active ? "border-primary bg-primary/5 shadow-glow" : "border-border bg-surface/50 hover:border-primary/40"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 font-semibold">
                        {i === 1 && <Sparkles className="h-4 w-4 text-primary" />}
                        {d.label}
                      </span>
                      <span className="text-xs font-medium text-primary">
                        {DESIGN_PRICES[i] ? `+$${DESIGN_PRICES[i]}` : t.services.free}
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
                {t.services.total}
              </div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display text-6xl font-bold text-gradient-primary tabular-nums">
                  ${animated.toLocaleString("en-US")}
                </span>
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{t.services.oneTime}</div>

              <div className="mt-6 space-y-2 rounded-xl border border-border/50 bg-background/40 p-4 text-xs text-muted-foreground">
                <div className="font-medium text-foreground">{t.services.selected}</div>
                <div>{summary}</div>
              </div>

              {/* Lead Capture Form */}
              <form 
                className="mt-6 space-y-3"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const fd = new FormData(e.currentTarget);
                  const email = fd.get("email") as string;
                  const name = fd.get("name") as string;
                  if (email && name) {
                    try {
                      // Call Server Function
                      const { submitLead } = await import("../../api/api");
                      await submitLead({ data: { name, email, metadata: { total, summary } } });
                      alert("PDF sent to " + email);
                    } catch (err) {
                      console.error(err);
                    }
                  }
                }}
              >
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  required
                  className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm focus:border-primary focus:outline-none"
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email to send PDF quote" 
                  required
                  className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm focus:border-primary focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface/80 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-surface"
                >
                  Get Quote as PDF
                </button>
              </form>

              <button
                onClick={handleOrder}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold btn-glow"
              >
                {t.services.orderAtPrice}
                <ArrowRight className="h-4 w-4" />
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
                {t.services.replyNote}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
