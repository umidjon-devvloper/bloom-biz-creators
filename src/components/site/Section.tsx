import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const { ref, visible } = useReveal();
  return (
    <section id={id} className={`relative py-20 md:py-28 ${className}`}>
      <div ref={ref} className={`mx-auto max-w-7xl px-6 reveal ${visible ? "is-visible" : ""}`}>
        {(eyebrow || title || description) && (
          <div className="mx-auto mb-14 max-w-2xl text-center">
            {eyebrow && (
              <div className="inline-flex items-center gap-2 rounded-full border border-border glass px-3 py-1 text-xs font-medium text-primary">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base text-muted-foreground md:text-lg">{description}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
