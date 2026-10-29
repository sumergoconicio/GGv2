/** DotGrid.tsx draws the scrolling notebook texture and pointer response. */
import { useEffect, useRef } from "react";

/** Read a six-digit palette hex into RGB channels; returns null for an unsupported colour format. */
function paletteRgb(value: string) {
  const hex = value.trim();
  if (!/^#[0-9a-f]{6}$/i.test(hex)) return null;
  return [1, 3, 5].map((start) => parseInt(hex.slice(start, start + 2), 16));
}

/** Draw page-anchored dots that grow and turn translucent mango near the pointer; returns a decorative canvas. */
export function DotGrid() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pitch = 24,
      base = 0.75,
      grow = 0.7,
      reach = 200;
    let px = -9999,
      py = -9999,
      raf = 0;

    const draw = () => {
      raf = 0;
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth,
        h = window.innerHeight;
      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const cs = getComputedStyle(canvas);
      const ink = paletteRgb(cs.getPropertyValue("--text"));
      const mango = paletteRgb(cs.getPropertyValue("--mango"));
      if (!ink || !mango) return;
      const baseAlpha = parseFloat(cs.getPropertyValue("--dot-opacity")) || 0.176;
      const hoverAlpha = 0.27;
      const colors = Array.from({ length: 16 }, (_, step) => {
        const channels = ink.map((channel, i) =>
          Math.round(channel + (((mango[i] ?? channel) - channel) * step) / 15),
        );
        return `rgb(${channels.join(",")})`;
      });
      const g = parseFloat(cs.getPropertyValue("--dot-grow")) || grow;
      for (let y = pitch / 2 - (window.scrollY % pitch); y < h; y += pitch) {
        for (let x = pitch / 2; x < w; x += pitch) {
          const d = Math.hypot(x - px, y - py);
          let r = base,
            a = baseAlpha;
          let colorIndex = 0;
          if (d < reach) {
            const t = 1 - d / reach,
              s = t * t * (3 - 2 * t);
            r += g * s;
            a += (hoverAlpha - baseAlpha) * s;
            colorIndex = Math.round(s * 15);
          }
          ctx.fillStyle = colors[colorIndex] || colors[0] || "transparent";
          ctx.globalAlpha = a;
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(draw);
    };
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      px = e.clientX;
      py = e.clientY;
      schedule();
    };
    const leave = () => {
      px = py = -9999;
      schedule();
    };
    draw();
    window.addEventListener("load", schedule);
    const t = window.setTimeout(schedule, 300);
    window.addEventListener("resize", schedule);
    window.addEventListener("scroll", schedule, { passive: true });
    const obs = new MutationObserver(schedule);
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });
    if (!reduce) {
      window.addEventListener("pointermove", move, { passive: true });
      document.addEventListener("pointerleave", leave);
    }
    return () => {
      cancelAnimationFrame(raf);
      obs.disconnect();
      clearTimeout(t);
      window.removeEventListener("load", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="dot-grid" />;
}
