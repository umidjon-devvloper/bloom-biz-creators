import { useState } from "react";
import { Plus } from "lucide-react";
import { Section, Reveal } from "./Section";
import { useI18n } from "@/i18n";

export function FAQ() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section 
      eyebrow={t.about.faqEyebrow} 
      title={
        <span className="text-5xl md:text-7xl font-black tracking-tighter">
          {t.about.faqTitle}
        </span>
      }
    >
      <div className="mx-auto mt-16 max-w-4xl divide-y divide-border/40 border-y border-border/40">
        {t.about.faq.map((item, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={item.q} delay={i * 100}>
              <div className="group transition-colors duration-500 hover:bg-surface/20">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-8 py-8 text-left md:py-10"
                >
                  <span className={`font-display text-2xl font-bold tracking-tight transition-colors duration-500 md:text-4xl ${isOpen ? "text-primary" : "text-foreground group-hover:text-primary/80"}`}>
                    {item.q}
                  </span>
                  <span
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-full border border-border/50 text-foreground transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-glow md:h-14 md:w-14 ${
                      isOpen ? "rotate-45 bg-primary text-primary-foreground shadow-glow border-primary" : ""
                    }`}
                  >
                    <Plus className="h-6 w-6" />
                  </span>
                </button>
                <div
                  className="grid transition-all duration-500 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pb-10 text-lg font-medium leading-relaxed text-muted-foreground opacity-80 md:text-xl">
                      {item.a}
                    </p>
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
