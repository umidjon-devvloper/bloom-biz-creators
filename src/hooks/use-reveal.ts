import { useEffect, useRef, useState } from "react";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Scroll-reveal visibility. Reveal styles start at `opacity: 0`, so anything
 * that stops this hook from reporting `visible` leaves a blank section on the
 * page — the failure mode is invisible content, not a missing animation. Hence
 * the fallback timer below: if the observer never fires (layout quirk, zero-height
 * container, a browser that mis-reports intersection) we reveal anyway.
 *
 * See also the `html.js` gate in styles.css, which keeps content visible when JS
 * never runs at all.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;
    if (typeof IntersectionObserver === "undefined" || prefersReducedMotion()) {
      setVisible(true);
      return;
    }
    // Elements taller than the viewport can never reach a fixed intersection
    // ratio (max ratio = viewportHeight / elementHeight), so cap the threshold
    // by what is actually reachable — otherwise tall sections stay invisible.
    const height = node.offsetHeight;
    const reachable =
      height > 0 ? Math.min(threshold, (window.innerHeight * 0.25) / height) : threshold;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: reachable, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(node);

    // Last resort: an element already sitting in the viewport should never stay
    // hidden. Anything below the fold keeps its scroll animation.
    const failsafe = window.setTimeout(() => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) setVisible(true);
    }, 1200);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [threshold, visible]);

  return { ref, visible };
}

/**
 * Counts up to `target` once `start` flips true.
 *
 * Starts *at* the target rather than at zero, which is what makes the number
 * survive server rendering, a failed hydration or a blocked bundle. A stat block
 * reading "0+ completed projects" tells a visitor the site is broken, and that
 * is a worse outcome than never animating at all.
 */
export function useCountUp(target: number, start: boolean, duration = 1800) {
  const [value, setValue] = useState(target);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!start || hasRun.current) return;
    hasRun.current = true;

    // Nothing to animate with, or the visitor asked us not to: the honest value
    // is already on screen, so leave it there.
    if (prefersReducedMotion() || typeof requestAnimationFrame === "undefined") {
      setValue(target);
      return;
    }

    let raf = 0;
    const startTime = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setValue(target);
    };
    setValue(0);
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);

  return value;
}

/** Tweens between values as the source changes — used by the price calculator. */
export function useAnimatedNumber(target: number, duration = 500) {
  const [value, setValue] = useState(target);
  const fromRef = useRef(target);
  useEffect(() => {
    const from = fromRef.current;
    if (from === target) return;
    if (prefersReducedMotion() || typeof requestAnimationFrame === "undefined") {
      fromRef.current = target;
      setValue(target);
      return;
    }
    let raf = 0;
    const startTime = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(from + (target - from) * eased));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        fromRef.current = target;
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return value;
}
