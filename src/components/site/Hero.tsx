import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Play, Star, TrendingUp, Users } from "lucide-react";
import { useI18n } from "@/i18n";

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { t } = useI18n();

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Gradients & Effects */}
      <div className="absolute inset-0 -z-30 bg-background" />
      
      {/* Huge Ambient Aurora */}
      <div className="absolute left-1/2 top-0 -z-20 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-[100%] bg-primary/25 blur-[120px] mix-blend-screen animate-pulse-glow" />
      <div className="absolute right-0 top-[20%] -z-20 h-[500px] w-[500px] translate-x-1/3 rounded-[100%] bg-accent/20 blur-[120px] mix-blend-screen" />

      {/* Perspective Grid Floor */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[100vh] overflow-hidden [perspective:800px] opacity-70">
        <div className="absolute inset-0 top-1/2 origin-bottom [transform:rotateX(75deg)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklab,var(--primary)_15%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--primary)_15%,transparent)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,transparent,black_60%,transparent)]" />
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      
      {/* Central Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
        
        {/* Availability Badge */}
        <div
          className="inline-flex items-center gap-3 rounded-full border border-border/50 bg-surface/50 px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur-md shadow-sm opacity-0"
          style={{ animation: "fade-up 800ms cubic-bezier(0.22, 1, 0.36, 1) 100ms forwards" }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
          </span>
          {t.hero.badge}
        </div>

        {/* Massive Headline */}
        <h1
          className="mt-10 sm:mt-12 font-display text-4xl sm:text-5xl md:text-6xl lg:text-[6.5rem] font-black leading-[1.1] sm:leading-[1.05] tracking-tight text-foreground opacity-0"
          style={{ animation: "fade-up 1000ms cubic-bezier(0.22, 1, 0.36, 1) 300ms forwards" }}
        >
          {t.hero.titleA}
          <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-glow to-primary px-2 pb-2 inline-block">
            {t.hero.titleHl}
          </span>
          <br className="hidden sm:block" />
          <span className="text-foreground/90">{t.hero.titleB}</span>
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto mt-10 max-w-3xl text-lg font-medium text-muted-foreground md:text-xl leading-relaxed opacity-0"
          style={{ animation: "fade-up 1000ms cubic-bezier(0.22, 1, 0.36, 1) 500ms forwards" }}
        >
          {t.hero.subtitle}
        </p>

        {/* CTAs */}
        <div
          className="mt-10 sm:mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row opacity-0"
          style={{ animation: "fade-up 1000ms cubic-bezier(0.22, 1, 0.36, 1) 700ms forwards" }}
        >
          <Link
            to="/contact"
            className="group relative flex w-full sm:w-auto items-center justify-center gap-2 rounded-full px-8 py-4 sm:px-10 sm:py-5 text-base font-bold btn-glow overflow-hidden"
          >
            <span className="relative z-10">{t.hero.cta1}</span>
            <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <button
            onClick={() => setIsVideoOpen(true)}
            className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-border/50 bg-surface/50 px-8 py-4 sm:px-10 sm:py-5 text-base font-bold text-foreground backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-surface hover:shadow-glow"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-primary/20 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
              <Play className="h-4 w-4 ml-0.5" />
            </span>
            {t.hero.cta2 || "View Showreel"}
          </button>
        </div>
      </div>

      {/* Floating Elements (Glassmorphic Stats) */}
      <div className="pointer-events-none absolute inset-0 z-20 hidden overflow-hidden xl:block">
        {/* Stat 1 */}
        <div 
          className="absolute left-[5%] top-[25%] flex items-center gap-4 rounded-[2rem] border border-border/40 bg-surface/30 p-4 pr-8 backdrop-blur-xl shadow-xl animate-float-slow opacity-0"
          style={{ animation: "fade-in 1000ms ease forwards 1000ms, float-slow 8s ease-in-out infinite" }}
        >
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/20 text-primary ring-1 ring-primary/30">
            <Star className="h-6 w-6" />
          </div>
          <div>
            <div className="text-xl font-black text-foreground">5.0</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Clutch Rating</div>
          </div>
        </div>

        {/* Stat 2 */}
        <div 
          className="absolute right-[5%] top-[30%] flex items-center gap-4 rounded-[2rem] border border-border/40 bg-surface/30 p-4 pr-8 backdrop-blur-xl shadow-xl animate-float opacity-0"
          style={{ animation: "fade-in 1000ms ease forwards 1200ms, float 7s ease-in-out infinite" }}
        >
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-success/20 text-success ring-1 ring-success/30">
            <TrendingUp className="h-6 w-6" />
          </div>
          <div>
            <div className="text-xl font-black text-foreground">$50M+</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Client Revenue</div>
          </div>
        </div>

        {/* Stat 3 */}
        <div 
          className="absolute bottom-[25%] left-[10%] flex items-center gap-4 rounded-[2rem] border border-border/40 bg-surface/30 p-4 pr-8 backdrop-blur-xl shadow-xl animate-float-delayed opacity-0"
          style={{ animation: "fade-in 1000ms ease forwards 1400ms, float-slow 9s ease-in-out infinite" }}
        >
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-accent-foreground ring-1 ring-accent-foreground/30">
            <Users className="h-6 w-6" />
          </div>
          <div>
            <div className="text-xl font-black text-foreground">100+</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Enterprise Clients</div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl">
          <div className="relative w-full max-w-5xl rounded-[2rem] overflow-hidden border border-border/50 bg-background shadow-2xl animate-fade-up">
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute right-6 top-6 z-10 grid h-12 w-12 place-items-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-primary"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-video w-full bg-surface flex flex-col items-center justify-center text-center p-8">
              <Play className="h-16 w-16 text-primary/50 mb-4" />
              <h3 className="font-display text-3xl font-bold text-foreground">Premium Showreel</h3>
              <p className="text-muted-foreground mt-2">Connect your YouTube/Vimeo ID here.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
