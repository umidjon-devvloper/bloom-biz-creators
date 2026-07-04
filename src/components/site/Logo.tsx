import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group flex items-center gap-2.5 ${className}`}>
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary shadow-glow transition-transform group-hover:scale-105">
        <span className="font-display text-base font-extrabold text-primary-foreground">U</span>
        <span
          aria-hidden
          className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[15px] font-bold tracking-tight">
          Umidjon<span className="text-gradient-primary"> Agency</span>
        </span>
        <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          Web · Mobile · Design
        </span>
      </span>
    </Link>
  );
}
