import { useState } from "react";
import { Plus } from "lucide-react";
import { Section, Reveal } from "./Section";
import { useI18n } from "@/i18n";

export function FAQ() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section eyebrow={t.about.faqEyebrow} title={t.about.faqTitle}>
      <div className="mx-auto max-w-3xl space-y-3">
        {t.about.faq.map((item, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={item.q} delay={i * 60}>
              <div
                className={`overflow-hidden rounded-2xl border bg-card transition-colors ${
                  isOpen ? "border-primary/40" : "border-border"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-semibold">{item.q}</span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-gradient-primary text-primary-foreground" : ""
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
