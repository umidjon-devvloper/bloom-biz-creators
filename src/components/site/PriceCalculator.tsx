import { useMemo, useState } from "react";
import { Check, ArrowRight, ArrowLeft, RotateCcw, Send, MessageCircle } from "lucide-react";
import { Section } from "./Section";
import { useAnimatedNumber } from "@/hooks/use-reveal";
import { telegramLink } from "@/lib/site";
import { useI18n } from "@/i18n";

/**
 * Price model. Base by product type, plus scope, plus opt-in features, plus
 * design level. The output is deliberately a *range*, not a single figure: a
 * four-question form cannot know enough for an exact quote, and quoting one
 * anyway means either padding it or walking it back later — both cost the deal.
 */
const TYPE_BASE = [300, 800, 1500, 2500];
const PAGES_ADD = [0, 250, 600, 1100];
const ADDON_ADD = [350, 450, 300, 250];
const DESIGN_ADD = [0, 600];

/** Upper bound of the quoted range. Wide enough to survive a real brief. */
const RANGE_SPREAD = 1.4;

const roundTo = (n: number, to = 50) => Math.round(n / to) * to;
const money = (n: number) => `$${n.toLocaleString("en-US")}`;

type Step = 0 | 1 | 2 | 3 | 4;

export function PriceCalculator({ headless = false }: { headless?: boolean }) {
  const { t, lang } = useI18n();
  const c = t.calc;

  const [step, setStep] = useState<Step>(0);
  const [type, setType] = useState<number | null>(null);
  const [pages, setPages] = useState<number | null>(null);
  const [addons, setAddons] = useState<boolean[]>([false, false, false, false]);
  const [design, setDesign] = useState<number | null>(null);

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const low = useMemo(() => {
    const base = TYPE_BASE[type ?? 0];
    const scope = PAGES_ADD[pages ?? 0];
    const extras = ADDON_ADD.reduce((sum, p, i) => (addons[i] ? sum + p : sum), 0);
    return roundTo(base + scope + extras + DESIGN_ADD[design ?? 0]);
  }, [type, pages, addons, design]);

  const high = useMemo(() => roundTo(low * RANGE_SPREAD, 100), [low]);

  const animatedLow = useAnimatedNumber(low, 600);
  const animatedHigh = useAnimatedNumber(high, 600);

  const summary = useMemo(() => {
    const parts: string[] = [];
    if (type !== null) parts.push(c.steps.type.options[type].label);
    if (pages !== null) parts.push(c.steps.pages.options[pages].label);
    c.steps.addons.options.forEach((a, i) => addons[i] && parts.push(a.label));
    if (design !== null) parts.push(c.steps.design.options[design].label);
    return parts.join(" · ");
  }, [type, pages, addons, design, c]);

  const priceRange = `${money(low)} – ${money(high)}`;

  const reset = () => {
    setStep(0);
    setType(null);
    setPages(null);
    setAddons([false, false, false, false]);
    setDesign(null);
    setStatus("idle");
    setErrorMsg("");
  };

  /** Single-select answers advance on their own — one tap per question. */
  const choose = (setter: (v: number) => void, next: Step) => (value: number) => {
    setter(value);
    setStep(next);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const contact = String(data.get("contact") ?? "").trim();

    if (!name || !contact) {
      setStatus("error");
      setErrorMsg(c.formErrorRequired);
      return;
    }

    setStatus("loading");
    try {
      const { submitLead } = await import("@/api/api");
      await submitLead({
        data: {
          name,
          contact,
          source: "Price calculator",
          lang,
          metadata: { priceRange, summary },
        },
      });
      setStatus("success");
    } catch (err) {
      // The lead is not lost — the Telegram button next to this form still works.
      console.error(err);
      setStatus("error");
      setErrorMsg(c.formErrorNetwork);
    }
  };

  /** Per-step completion. The add-ons step has no required answer. */
  const answered = [type !== null, pages !== null, true, design !== null];

  const questions = [
    {
      copy: c.steps.type,
      // "$300+" rather than a translated "from $300": `common.from` is a
      // postposition in Uzbek and a preposition in ru/en, so the suffix is the
      // only form that reads correctly in all three languages.
      render: () => (
        <OptionGrid
          options={c.steps.type.options}
          selected={type}
          onSelect={choose(setType, 1)}
          prices={TYPE_BASE.map((p) => `${money(p)}+`)}
        />
      ),
    },
    {
      copy: c.steps.pages,
      render: () => (
        <OptionGrid
          options={c.steps.pages.options}
          selected={pages}
          onSelect={choose(setPages, 2)}
          prices={PAGES_ADD.map((p) => (p ? `+${money(p)}` : "—"))}
        />
      ),
    },
    {
      copy: c.steps.addons,
      render: () => (
        <div className="grid gap-3 sm:grid-cols-2">
          {c.steps.addons.options.map((a, i) => {
            const active = addons[i];
            return (
              <button
                key={a.label}
                type="button"
                aria-pressed={active}
                onClick={() => setAddons((s) => s.map((v, j) => (j === i ? !v : v)))}
                className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition-all ${
                  active
                    ? "border-primary bg-primary/5 shadow-glow"
                    : "border-border bg-surface/40 hover:border-primary/40"
                }`}
              >
                <span
                  className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border transition-all ${
                    active ? "border-primary bg-primary text-primary-foreground" : "border-border"
                  }`}
                >
                  {active && <Check className="h-3 w-3" />}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold">{a.label}</span>
                    <span className="shrink-0 text-xs font-medium text-primary">
                      +{money(ADDON_ADD[i])}
                    </span>
                  </span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">{a.desc}</span>
                </span>
              </button>
            );
          })}
        </div>
      ),
    },
    {
      copy: c.steps.design,
      render: () => (
        <OptionGrid
          options={c.steps.design.options}
          selected={design}
          onSelect={choose(setDesign, 4)}
          prices={DESIGN_ADD.map((p) => (p ? `+${money(p)}` : "—"))}
          columns="sm:grid-cols-2"
        />
      ),
    },
  ];

  return (
    <Section
      id="calculator"
      eyebrow={headless ? undefined : c.eyebrow}
      title={
        headless ? undefined : (
          <>
            {c.titleA} <span className="text-gradient-primary">{c.titleHl}</span>
          </>
        )
      }
      description={headless ? undefined : c.desc}
    >
      <div className="mx-auto max-w-3xl">
        {step < 4 ? (
          <div className="rounded-[2rem] border border-border bg-card/60 p-6 backdrop-blur-md md:p-10">
            {/* Progress */}
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
                {c.step} {step + 1} {c.of} {questions.length}
              </span>
              <div className="flex flex-1 gap-1.5">
                {questions.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                      i <= step ? "bg-primary" : "bg-border"
                    }`}
                  />
                ))}
              </div>
            </div>

            <h3 className="mt-8 font-display text-2xl font-bold tracking-tight md:text-3xl">
              {questions[step].copy.label}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{questions[step].copy.hint}</p>

            <div className="mt-8">{questions[step].render()}</div>

            <div className="mt-8 flex items-center justify-between gap-4 border-t border-border/50 pt-6">
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(0, s - 1) as Step)}
                disabled={step === 0}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground disabled:pointer-events-none disabled:opacity-40"
              >
                <ArrowLeft className="h-4 w-4" />
                {c.prev}
              </button>

              {/* Single-select steps advance on tap, so Next is mainly the way
                  back forward after using Back — it stays disabled until the
                  question is actually answered, so a skipped choice can never
                  end up priced as one thing and summarised as another. The
                  add-ons step is genuinely skippable. */}
              <button
                type="button"
                onClick={() => setStep((s) => (s + 1) as Step)}
                disabled={answered[step] === false}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold btn-glow disabled:pointer-events-none disabled:opacity-40"
              >
                {step === 2 && !addons.some(Boolean) ? c.skip : c.next}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/30 bg-gradient-mesh p-6 shadow-elevated md:p-10">
            <div aria-hidden className="absolute inset-0 -z-0 opacity-40">
              <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary blur-3xl animate-blob" />
            </div>

            <div className="relative">
              <div className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
                {c.resultEyebrow}
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight md:text-3xl">
                {c.resultTitle}
              </h3>

              <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-display text-4xl font-black text-gradient-primary tabular-nums sm:text-5xl md:text-6xl">
                  {money(animatedLow)}
                </span>
                <span className="text-2xl font-bold text-muted-foreground">–</span>
                <span className="font-display text-4xl font-black text-gradient-primary tabular-nums sm:text-5xl md:text-6xl">
                  {money(animatedHigh)}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{c.rangeNote}</p>

              <div className="mt-6 rounded-2xl border border-border/50 bg-background/40 p-4 text-sm">
                <div className="font-semibold text-foreground">{c.selected}</div>
                <div className="mt-1 text-muted-foreground">{summary}</div>
              </div>

              {/* Telegram first: in this market a prospect who has just seen a
                  number wants to ask one question, not fill in a form. */}
              <a
                href={telegramLink(`${c.telegramMessage} ${summary} — ${priceRange}`)}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-bold btn-glow"
              >
                <MessageCircle className="h-4 w-4" />
                {c.telegramCta}
              </a>

              {status === "success" ? (
                <div className="mt-6 rounded-2xl border border-success/30 bg-success/10 p-6 text-center">
                  <Check className="mx-auto h-8 w-8 text-success" />
                  <div className="mt-3 font-display text-lg font-bold text-foreground">
                    {c.formSent}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{c.formSentDesc}</p>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  className="mt-6 rounded-2xl border border-border/50 bg-background/40 p-5"
                >
                  <div className="font-display text-base font-bold">{c.formTitle}</div>
                  <p className="mt-1 text-xs text-muted-foreground">{c.formDesc}</p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <label className="block">
                      <span className="sr-only">{c.formName}</span>
                      <input
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder={c.formNamePh}
                        className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                      />
                    </label>
                    <label className="block">
                      <span className="sr-only">{c.formContact}</span>
                      <input
                        name="contact"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder={c.formContactPh}
                        className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                      />
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface/80 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-surface disabled:opacity-60"
                  >
                    {status === "loading" ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-foreground/30 border-t-foreground" />
                        {c.formSending}
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        {c.formSubmit}
                      </>
                    )}
                  </button>

                  {status === "error" && (
                    <p className="mt-3 text-xs font-medium text-destructive">{errorMsg}</p>
                  )}
                  <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
                    {c.privacy}
                  </p>
                </form>
              )}

              <p className="mt-5 text-xs leading-relaxed text-muted-foreground">{c.disclaimer}</p>

              <button
                type="button"
                onClick={reset}
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                {c.restart}
              </button>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}

function OptionGrid({
  options,
  selected,
  onSelect,
  prices,
  columns = "sm:grid-cols-2",
}: {
  options: { label: string; desc: string }[];
  selected: number | null;
  onSelect: (i: number) => void;
  prices: string[];
  columns?: string;
}) {
  return (
    <div className={`grid gap-3 ${columns}`}>
      {options.map((o, i) => {
        const active = selected === i;
        return (
          <button
            key={o.label}
            type="button"
            aria-pressed={active}
            onClick={() => onSelect(i)}
            className={`rounded-2xl border p-4 text-left transition-all ${
              active
                ? "border-primary bg-primary/5 shadow-glow"
                : "border-border bg-surface/40 hover:border-primary/40"
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-semibold">{o.label}</span>
              <span
                className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border transition-all ${
                  active ? "border-primary bg-primary text-primary-foreground" : "border-border"
                }`}
              >
                {active && <Check className="h-3 w-3" />}
              </span>
            </div>
            <div className="mt-1 text-xs text-muted-foreground">{o.desc}</div>
            <div className="mt-3 text-xs font-medium text-primary">{prices[i]}</div>
          </button>
        );
      })}
    </div>
  );
}
