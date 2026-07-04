import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

/**
 * Scroll-triggered 3D reveal. The child rises and straightens out of depth when
 * it enters the viewport. Place inside a container that sets `perspective`.
 */
export function Reveal3D({
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
      className={`reveal-3d ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
