/**
 * Premium pure-CSS 3D decor shapes for empty background areas.
 * Real 3D transforms (preserve-3d), continuously animated, non-interactive.
 */

function Cube({ size = 120 }: { size?: number }) {
  const h = size / 2;
  const faces = [
    `rotateY(0deg) translateZ(${h}px)`,
    `rotateY(180deg) translateZ(${h}px)`,
    `rotateY(90deg) translateZ(${h}px)`,
    `rotateY(-90deg) translateZ(${h}px)`,
    `rotateX(90deg) translateZ(${h}px)`,
    `rotateX(-90deg) translateZ(${h}px)`,
  ];
  return (
    <div style={{ perspective: "1200px" }}>
      <div
        className="relative animate-cube-spin motion-reduce:animate-none [transform-style:preserve-3d]"
        style={{ width: size, height: size }}
      >
        {faces.map((t, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-xl border border-primary/30 backdrop-blur-md flex items-center justify-center overflow-hidden"
            style={{ 
              transform: t,
              backgroundColor: "color-mix(in oklab, var(--card) 10%, transparent)",
              boxShadow: "inset 0 0 24px color-mix(in oklab, var(--primary) 20%, transparent)"
            }}
          >
             <div className="absolute inset-0 bg-gradient-primary opacity-20 mix-blend-overlay" />
          </div>
        ))}
        {/* Inner Glowing Core */}
        <div 
          className="absolute inset-[30%] rounded-full bg-primary/70 blur-[16px] animate-pulse-glow"
          style={{ transform: "translateZ(0)" }}
        />
      </div>
    </div>
  );
}

function Ring({ size = 150 }: { size?: number }) {
  return (
    <div style={{ perspective: "1000px", width: size, height: size }} className="relative flex items-center justify-center">
      {/* Outer Ring */}
      <div
        className="absolute inset-0 animate-ring-spin motion-reduce:animate-none rounded-full border border-primary/40 [transform-style:preserve-3d]"
        style={{
          borderWidth: 2,
          boxShadow: "0 0 32px color-mix(in oklab, var(--primary-glow) 40%, transparent), inset 0 0 24px color-mix(in oklab, var(--primary) 30%, transparent)",
        }}
      />
      {/* Inner Ring - Counter Rotating */}
      <div
        className="absolute inset-[18%] rounded-full border border-primary/60 [transform-style:preserve-3d] shadow-glow"
        style={{
          borderWidth: 4,
          animation: "ring-spin 12s linear infinite reverse",
        }}
      />
      {/* Core Orb */}
      <div className="absolute w-[28%] h-[28%] rounded-full bg-gradient-primary shadow-glow animate-glow-pulse" />
    </div>
  );
}

function Orb({ size = 116 }: { size?: number }) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <div
        className="absolute inset-0 rounded-full animate-pulse-glow"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, color-mix(in oklab, var(--primary-glow) 20%, white 40%), var(--primary) 60%, color-mix(in oklab, var(--primary) 40%, black 80%))",
          boxShadow:
            "0 0 45px color-mix(in oklab, var(--primary-glow) 50%, transparent), inset -12px -12px 30px oklch(0 0 0 / 0.35), inset 10px 10px 24px oklch(1 1 1 / 0.35)",
        }}
      />
      {/* Reflection highlight */}
      <div className="absolute top-[12%] left-[16%] w-[35%] h-[25%] rounded-[100%] bg-white/35 blur-[4px] -rotate-45" />
    </div>
  );
}

const SHAPES = [Cube, Ring, Orb] as const;

/**
 * Positions a floating 3D shape in the empty half opposite a timeline card.
 * Hidden below lg (no room next to full-width cards on small screens).
 */
export function TimelineShape({ index, side }: { index: number; side: "left" | "right" }) {
  const Shape = SHAPES[index % SHAPES.length];
  const delay = `${-(index * 2.3).toFixed(1)}s`;
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute top-1/2 z-0 hidden -translate-y-1/2 animate-float-slow opacity-100 motion-reduce:animate-none lg:block ${
        side === "right" ? "right-[2%] xl:right-[6%]" : "left-[2%] xl:left-[6%]"
      }`}
      style={{ animationDelay: delay }}
    >
      <Shape />
    </div>
  );
}

