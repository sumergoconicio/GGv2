import { useEffect, useRef } from "react";

/** Fixed notebook dot grid; dots near the pointer grow and brighten slightly, never move. */
export function DotGrid() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pitch = 24, base = 0.75, grow = 0.7, reach = 200, baseAlpha = 0.55;
    let px = -9999, py = -9999, raf = 0;

    const draw = () => {
      raf = 0;
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth, h = window.innerHeight;
      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr; canvas.height = h * dpr;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const cs = getComputedStyle(canvas);
      ctx.fillStyle = cs.color;
      const g = parseFloat(cs.getPropertyValue("--dot-grow")) || grow;
      for (let y = pitch / 2; y < h; y += pitch) {
        for (let x = pitch / 2; x < w; x += pitch) {
          const d = Math.hypot(x - px, y - py);
          let r = base, a = baseAlpha;
          if (d < reach) {
            const t = 1 - d / reach, s = t * t * (3 - 2 * t);
            r += g * s; a += (1 - baseAlpha) * s;
          }
          ctx.globalAlpha = a;
          ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
    };
    const schedule = () => { if (!raf) raf = requestAnimationFrame(draw); };
    const move = (e: PointerEvent) => { if (e.pointerType !== "mouse") return; px = e.clientX; py = e.clientY; schedule(); };
    const leave = () => { px = py = -9999; schedule(); };
    draw();
    window.addEventListener("load", schedule);
    const t = window.setTimeout(schedule, 300);
    window.addEventListener("resize", schedule);
    const obs = new MutationObserver(schedule);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class", "data-theme"] });
    if (!reduce) { window.addEventListener("pointermove", move, { passive: true }); document.addEventListener("pointerleave", leave); }
    return () => {
      cancelAnimationFrame(raf); obs.disconnect(); clearTimeout(t);
      window.removeEventListener("load", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="dot-grid" />;
}
