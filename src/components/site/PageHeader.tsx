import type { ReactNode } from "react";
import { AuroraBackground } from "./AuroraBackground";

export function PageHeader({
  eyebrow,
  title,
  highlight,
  titleAfter,
  description,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  titleAfter?: string;
  description?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-20">
      <AuroraBackground />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div
          className="inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-1.5 text-xs font-medium text-primary opacity-0"
          style={{ animation: "fade-up 600ms ease-out 60ms forwards" }}
        >
          {eyebrow}
        </div>
        <h1
          className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl opacity-0"
          style={{ animation: "fade-up 700ms ease-out 160ms forwards" }}
        >
          {title}
          {highlight && (
            <>
              {" "}
              <span className="text-gradient-primary">{highlight}</span>
            </>
          )}
          {titleAfter && <> {titleAfter}</>}
        </h1>
        {description && (
          <p
            className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg opacity-0"
            style={{ animation: "fade-up 700ms ease-out 280ms forwards" }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
