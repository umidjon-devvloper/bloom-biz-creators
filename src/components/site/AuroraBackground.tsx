export function AuroraBackground({ dense = false }: { dense?: boolean }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute -top-40 -left-40 h-[440px] w-[440px] rounded-full bg-gradient-primary opacity-30 blur-3xl animate-aurora" />
      <div
        className="absolute -top-20 right-0 h-[380px] w-[380px] rounded-full bg-primary-glow/40 blur-3xl animate-aurora"
        style={{ animationDelay: "-5s" }}
      />
      {dense && (
        <div
          className="absolute bottom-0 left-1/2 h-[360px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-primary opacity-20 blur-3xl animate-aurora"
          style={{ animationDelay: "-9s" }}
        />
      )}
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(var(--color-foreground)_1px,transparent_1px),linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] [background-size:64px_64px]" />
    </div>
  );
}
