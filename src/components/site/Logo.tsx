import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group flex items-center gap-3 ${className}`}>
      <span className="relative grid h-10 w-10 md:h-11 md:w-11 place-items-center transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
        <img
          src="/logo.png"
          alt="Umidjon Agency"
          className="h-full w-full object-contain drop-shadow-[0_2px_8px_oklch(0.55_0.2_285/0.35)]"
        />
      </span>
      <span className="font-display text-[22px] md:text-[24px] font-extrabold leading-none tracking-tight">
        Umidjon<span className="text-gradient-primary"> Agency</span>
      </span>
    </Link>
  );
}
