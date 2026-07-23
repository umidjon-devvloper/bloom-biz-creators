import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";

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
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-48 md:pb-24 border-b border-border/10">
      <div className="absolute inset-0 -z-20 bg-background" />
      <div className="absolute inset-0 -z-10 bg-gradient-mesh opacity-40 mix-blend-screen animate-gradient-shift" />
      <div className="absolute inset-0 -z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 flex flex-col items-center text-center z-10">
        <div
          className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-surface/50 px-5 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-md shadow-sm opacity-0"
          style={{ animation: "fade-up 600ms ease-out 60ms forwards" }}
        >
          <Sparkles className="h-4 w-4" />
          {eyebrow}
        </div>
        
        <h1
          className="mt-8 sm:mt-10 font-display text-4xl sm:text-5xl md:text-7xl lg:text-[6.5rem] font-black leading-[1.1] sm:leading-[1.05] tracking-tight text-foreground opacity-0"
          style={{ animation: "fade-up 700ms ease-out 160ms forwards" }}
        >
          {title}
          {highlight && (
            <>
              {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-glow to-primary px-2 pb-2 inline-block">
                {highlight}
              </span>
            </>
          )}
          {titleAfter && <> {titleAfter}</>}
        </h1>
        
        {description && (
          <p
            className="mx-auto mt-8 max-w-3xl text-lg font-medium text-muted-foreground md:text-xl leading-relaxed opacity-0"
            style={{ animation: "fade-up 700ms ease-out 280ms forwards" }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
