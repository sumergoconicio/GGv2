"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useMergedRefs } from "../merge-refs.js";
import { jsx as _jsx } from "react/jsx-runtime";
const breathe = "xa0ld53-B";
const flow = "x1l8i50e-B";
const resonate = "xbuf7qk-B";
const styles = {
  root: {
    k1xSpc: "xwz0xwf",
    kgQiWS: "x1ku5rj1",
    kmuXW: "x2lah0s",
    kXLuUW: "xxymvpz",
    kMwMTN: "x1gney9c",
    kVQacm: "xb3r6kr",
    kaIpWk: "x16rqkct",
    kWkggS: "x6583kg x18t4had",
    "--rs-persona-play-state": "x1cma9ho",
    "--rs-persona-wave-gap": "x8nbtdv",
    "--rs-persona-ring-stretch": "xyp8f57",
    "--rs-persona-wave-height": "x1xhhowb",
    "--rs-persona-visual-scale": "xrtqcyt",
    $$css: true
  },
  running: {
    "--rs-persona-play-state": "xb2hov4",
    $$css: true
  },
  listening: {
    "--rs-persona-wave-gap": "xbhepfc",
    $$css: true
  },
  thinking: {
    "--rs-persona-wave-gap": "x2tcaqv",
    "--rs-persona-ring-stretch": "x1bvn9cx",
    $$css: true
  },
  speaking: {
    "--rs-persona-wave-gap": "x12fyuf",
    "--rs-persona-ring-stretch": "xodtspf",
    $$css: true
  },
  asleep: {
    "--rs-persona-play-state": "x1cma9ho",
    $$css: true
  },
  visual: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kOIVth: "xhu3q14",
    kzqmXN: "xycev2y",
    kZKoxP: "xlxyqfn",
    k1ekBW: "xy6w8to",
    kIyJzY: "x1fbs3r x1y25mgo x1torhi3",
    kAMwcw: "xz4gly6",
    $$css: true
  },
  bar: {
    kzqmXN: "x17vnrad",
    kZKoxP: "x176ro3i",
    kWkggS: "xtwfq29 x99u5fr",
    kaIpWk: "xkrxur",
    k3nNDw: "x1g0ag68",
    kKVMdj: "xba21xu xmmch59 x1r40hq4",
    k44tkh: "xius3t",
    kyAemX: "x4hg4is",
    ko0y90: "xa4qsjk",
    k5bvn2: "x1p7kkq8",
    k1ekBW: "xua3uq3",
    kIyJzY: "x1fbs3r x1y25mgo x1torhi3",
    kAMwcw: "xz4gly6",
    $$css: true
  },
  orb: {
    k1xSpc: "xrvj5dj",
    kgQiWS: "x1ku5rj1",
    kzqmXN: "x12wacv3",
    kZKoxP: "xqesh9j",
    k3aq6I: "xb1h41d",
    k1ekBW: "x11xpdln",
    kIyJzY: "x97pzxe x1y25mgo x1torhi3",
    kAMwcw: "xz4gly6",
    $$css: true
  },
  orbSurface: {
    k1xSpc: "x1lliihq",
    kzqmXN: "xh8yej3",
    kZKoxP: "x5yr21d",
    kaIpWk: "xpw69ff",
    kKwaWg: "x1hdzbg x1yukxs4",
    kWkggS: "xmgn9m6 x99u5fr",
    kKVMdj: "x19zzwt8 xmmch59 x1r40hq4",
    k44tkh: "xyatv1b",
    kyAemX: "x4hg4is",
    ko0y90: "xa4qsjk",
    k5bvn2: "x1p7kkq8",
    $$css: true
  },
  rings: {
    k1xSpc: "xrvj5dj",
    kgQiWS: "x1ku5rj1",
    kzqmXN: "xi9l4ab",
    kZKoxP: "x12ogm2o",
    k3aq6I: "x6odkds",
    k1ekBW: "x11xpdln",
    kIyJzY: "x97pzxe x1y25mgo x1torhi3",
    kAMwcw: "xz4gly6",
    $$css: true
  },
  ring: {
    k1xSpc: "x1lliihq",
    kJuA4N: "x15r89dc",
    kB7OPa: "x9f619",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1r7ld26 xz1l38o",
    kaIpWk: "x16rqkct",
    kKVMdj: "xxvrcix xmmch59 x1r40hq4",
    k44tkh: "xgzmjyv",
    kyAemX: "x4hg4is",
    ko0y90: "xa4qsjk",
    k5bvn2: "x1p7kkq8",
    $$css: true
  }
};
const stateIntensity = {
  idle: 0.25,
  listening: 0.65,
  thinking: 0.45,
  speaking: 0.85,
  asleep: 0
};

/** Three native monochrome visuals share five conversational states and an optional custom renderer. */
export const Persona = /*#__PURE__*/React.forwardRef(function Persona({
  state = "idle",
  variant = "waveform",
  size = 48,
  label,
  intensity,
  paused = false,
  onMotionChange,
  children,
  renderVisual,
  className,
  style,
  ...props
}, ref) {
  const rootRef = React.useRef(null);
  const mergedRef = useMergedRefs(rootRef, ref);
  const [canAnimate, setCanAnimate] = React.useState(false);
  React.useEffect(() => {
    let mounted = true;
    let intersecting = typeof IntersectionObserver !== "function";
    const reduced = typeof window.matchMedia === "function" ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
    const forced = typeof window.matchMedia === "function" ? window.matchMedia("(forced-colors: active)") : null;
    const update = () => {
      if (mounted) setCanAnimate(intersecting && document.visibilityState !== "hidden" && !reduced?.matches && !forced?.matches);
    };
    const observer = typeof IntersectionObserver === "function" ? new IntersectionObserver(entries => {
      intersecting = entries[0]?.isIntersecting ?? false;
      update();
    }) : null;
    if (rootRef.current) observer?.observe(rootRef.current);
    document.addEventListener("visibilitychange", update);
    reduced?.addEventListener("change", update);
    forced?.addEventListener("change", update);
    update();
    return () => {
      mounted = false;
      observer?.disconnect();
      document.removeEventListener("visibilitychange", update);
      reduced?.removeEventListener("change", update);
      forced?.removeEventListener("change", update);
    };
  }, []);
  const animated = canAnimate && !paused && state !== "asleep";
  const motionCallback = React.useRef(onMotionChange);
  React.useEffect(() => {
    motionCallback.current = onMotionChange;
  }, [onMotionChange]);
  React.useEffect(() => {
    motionCallback.current?.(animated);
  }, [animated]);
  const diameter = Number.isFinite(size) ? Math.max(1, size) : 48;
  const energy = state === "asleep" ? 0 : typeof intensity === "number" && Number.isFinite(intensity) ? Math.max(0, Math.min(1, intensity)) : stateIntensity[state];
  const root = rs(["rs-persona", className, animated && "rs-persona-running", state === "listening" && "rs-persona-listening", state === "thinking" && "rs-persona-thinking", state === "speaking" && "rs-persona-speaking", state === "asleep" && "rs-persona-asleep"], styles.root, animated && styles.running, state === "listening" && styles.listening, state === "thinking" && styles.thinking, state === "speaking" && styles.speaking, state === "asleep" && styles.asleep);
  const visual = rs(["rs-persona-visual"], styles.visual);
  const bar = rs(["rs-persona-bar"], styles.bar);
  const orb = rs(["rs-persona-orb"], styles.orb);
  const orbSurface = rs(["rs-persona-orb-surface"], styles.orbSurface);
  const rings = rs(["rs-persona-rings"], styles.rings);
  const ring = rs(["rs-persona-ring"], styles.ring);
  const builtIn = variant === "orb" ? /*#__PURE__*/_jsx("span", {
    ...orb,
    "aria-hidden": "true",
    children: /*#__PURE__*/_jsx("span", {
      ...orbSurface
    })
  }) : variant === "rings" ? /*#__PURE__*/_jsx("span", {
    ...rings,
    "aria-hidden": "true",
    children: [0, 1, 2].map(index => /*#__PURE__*/_jsx("span", {
      ...ring,
      style: {
        ...ring.style,
        width: `${44 + index * 26}%`,
        height: `${44 + index * 26}%`,
        animationDelay: `${index * -0.6}s`
      }
    }, index))
  }) : /*#__PURE__*/_jsx("span", {
    ...visual,
    "aria-hidden": "true",
    children: [0, 1, 2, 3].map(index => /*#__PURE__*/_jsx("span", {
      ...bar,
      style: {
        ...bar.style,
        animationDelay: `${index * -0.32}s`
      }
    }, index))
  });
  const semantics = label ? {
    role: "img",
    "aria-label": `${label}: ${state}`
  } : {
    "aria-hidden": true
  };
  return /*#__PURE__*/_jsx("div", {
    ...props,
    ...semantics,
    ref: mergedRef,
    "data-state": state,
    "data-variant": renderVisual || children != null ? "custom" : variant,
    "data-animated": animated,
    className: root.className,
    style: {
      ...root.style,
      width: diameter,
      height: diameter,
      "--rs-persona-wave-height": `${16 + energy * 84}%`,
      "--rs-persona-visual-scale": 0.72 + energy * 0.28,
      ...style
    },
    children: renderVisual ? renderVisual({
      state,
      size: diameter,
      intensity: energy,
      animated
    }) : children ?? builtIn
  });
});
//# sourceMappingURL=persona.js.map
