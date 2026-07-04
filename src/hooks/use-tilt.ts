import { useCallback, useRef } from "react";

/**
 * Lightweight pointer-driven 3D tilt. Attach `ref` to the tilting element and
 * spread `handlers` onto the container that should capture the pointer.
 */
export function useTilt(max = 10) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = useCallback(
    (e: React.PointerEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rotY = (px - 0.5) * max * 2;
      const rotX = (0.5 - py) * max * 2;
      el.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
      el.style.setProperty("--mx", `${px * 100}%`);
      el.style.setProperty("--my", `${py * 100}%`);
    },
    [max],
  );

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  }, []);

  return { ref, handlers: { onPointerMove: onMove, onPointerLeave: onLeave } };
}
