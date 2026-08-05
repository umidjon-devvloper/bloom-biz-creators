import type { ReactNode } from "react";
import { Activity, Code2, LayoutTemplate } from "lucide-react";

/**
 * Premium Glassmorphic UI Fragments for empty background areas.
 * Features ambient glowing orbs and floating glass panels.
 *
 * Panel fills are drawn from the `foreground` token rather than literal white,
 * so the glass inverts with the theme instead of disappearing on a light page.
 */

function GlassWrapper({
  children,
  rotation = "rotate-12",
  glowColor = "bg-primary/20",
}: {
  children: ReactNode;
  rotation?: string;
  glowColor?: string;
}) {
  return (
    <div className="relative w-64 h-48 md:w-72 md:h-56 group">
      {/* Ambient Glowing Orb */}
      <div
        className={`absolute inset-0 ${glowColor} blur-[70px] rounded-full animate-pulse-glow transition-all duration-700 group-hover:scale-110 group-hover:opacity-80`}
      />

      {/* Floating Glass Panel */}
      <div
        className={`absolute inset-0 rounded-2xl border border-foreground/10 bg-foreground/5 backdrop-blur-xl shadow-lg overflow-hidden transition-all duration-700 hover:scale-105 hover:rotate-0 ${rotation}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 to-transparent opacity-50" />
        <div className="relative h-full w-full p-5 flex flex-col">{children}</div>
      </div>
    </div>
  );
}

function CodeSnippetShape() {
  return (
    <GlassWrapper rotation="-rotate-3" glowColor="bg-primary/20">
      {/* macOS dots */}
      <div className="flex gap-1.5 mb-4">
        <div className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-500/50" />
      </div>

      {/* Code lines */}
      <div className="flex flex-col gap-3 flex-1 justify-center">
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-primary/70" />
          <div className="h-2 w-3/4 rounded bg-primary/40" />
        </div>
        <div className="h-2 w-1/2 rounded bg-foreground/20 ml-6" />
        <div className="h-2 w-2/3 rounded bg-foreground/20 ml-6" />
        <div className="h-2 w-1/3 rounded bg-primary/40 mt-1" />
        <div className="h-2 w-4/5 rounded bg-foreground/20 ml-6" />
      </div>
    </GlassWrapper>
  );
}

function ChartShape() {
  return (
    <GlassWrapper rotation="rotate-3" glowColor="bg-success/20">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="h-3 w-1/3 rounded bg-foreground/30" />
        <Activity className="w-4 h-4 text-success/70" />
      </div>

      {/* Bar Chart */}
      <div className="flex items-end justify-between flex-1 gap-2 mt-2">
        {[40, 70, 45, 90, 60, 100].map((height, i) => (
          <div
            key={i}
            className="w-full rounded-t-sm bg-gradient-to-t from-success/10 to-success/50"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </GlassWrapper>
  );
}

function BrowserShape() {
  return (
    <GlassWrapper rotation="-rotate-6" glowColor="bg-accent/20">
      {/* Browser Bar */}
      <div className="flex items-center gap-2 border-b border-foreground/10 pb-3 mb-4">
        <LayoutTemplate className="w-4 h-4 text-accent/70" />
        <div className="h-2 w-1/2 rounded bg-foreground/20 mx-auto" />
      </div>

      {/* Wireframe Blocks */}
      <div className="flex flex-col gap-3 flex-1">
        <div className="w-full h-1/3 rounded bg-accent/20" />
        <div className="flex gap-2 h-2/3">
          <div className="w-1/2 h-full rounded bg-foreground/10" />
          <div className="w-1/2 h-full flex flex-col gap-2">
            <div className="w-full h-1/2 rounded bg-foreground/10" />
            <div className="w-full h-1/2 rounded bg-foreground/10" />
          </div>
        </div>
      </div>
    </GlassWrapper>
  );
}

const SHAPES = [CodeSnippetShape, ChartShape, BrowserShape] as const;

/**
 * Positions a floating premium UI fragment in the empty half opposite a timeline card.
 * Hidden below lg (no room next to full-width cards on small screens).
 */
export function TimelineShape({ index, side }: { index: number; side: "left" | "right" }) {
  const Shape = SHAPES[index % SHAPES.length];
  const delay = `${-(index * 2.3).toFixed(1)}s`;
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute top-1/2 z-0 hidden -translate-y-1/2 animate-float-slow opacity-100 motion-reduce:animate-none lg:block ${
        side === "right" ? "right-[5%] xl:right-[10%]" : "left-[5%] xl:left-[10%]"
      }`}
      style={{ animationDelay: delay }}
    >
      <Shape />
    </div>
  );
}
