/**
 * Lightweight pure-CSS 3D decor shapes for empty background areas.
 * Real 3D transforms (preserve-3d), continuously animated, non-interactive.
 */

function Cube({ size = 108 }: { size?: number }) {
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
    <div style={{ perspective: "900px" }}>
      <div
        className="relative animate-cube-spin motion-reduce:animate-none [transform-style:preserve-3d]"
        style={{ width: size, height: size }}
      >
        {faces.map((t, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-lg border-2 border-primary/55 bg-gradient-primary/20 shadow-glow"
            style={{ transform: t }}
          />
        ))}
      </div>
    </div>
  );
}

function Ring({ size = 128 }: { size?: number }) {
  return (
    <div style={{ perspective: "700px" }}>
      <div
        className="animate-ring-spin motion-reduce:animate-none rounded-full border-primary/50 [transform-style:preserve-3d]"
        style={{
          width: size,
          height: size,
          borderWidth: 7,
          boxShadow: "0 0 24px oklch(0.62 0.2 285 / 0.35)",
        }}
      />
    </div>
  );
}

function Orb({ size = 96 }: { size?: number }) {
  return (
    <div
      className="animate-glow-pulse motion-reduce:animate-none rounded-full"
      style={{
        width: size,
        height: size,
        background:
          "radial-gradient(circle at 32% 28%, var(--primary-glow), var(--primary) 46%, transparent 72%)",
        boxShadow:
          "0 0 40px oklch(0.62 0.2 285 / 0.4), inset -6px -8px 18px oklch(0.3 0.12 285 / 0.5)",
      }}
    />
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
      className={`pointer-events-none absolute top-1/2 z-0 hidden -translate-y-1/2 animate-float-slow opacity-90 motion-reduce:animate-none lg:block ${
        side === "right" ? "right-[2%]" : "left-[2%]"
      }`}
      style={{ animationDelay: delay }}
    >
      <Shape />
    </div>
  );
}
