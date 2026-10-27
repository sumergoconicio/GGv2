"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useMergedRefs } from "../merge-refs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  split: {
    k1xSpc: "x78zum5",
    kXwgrk: "x1q0g3np x9u9o7l",
    kzqmXN: "xh8yej3",
    $$css: true
  },
  pane: {
    k7Eaqz: "xeuugli",
    kVQacm: "xb3r6kr",
    $$css: true
  },
  handle: {
    kmuXW: "x2lah0s",
    kzqmXN: "x1uyfxw7 x16afccg",
    kZKoxP: "x128uv7p",
    keoZOQ: "xdj266r x1w97is1",
    k1K539: "xat24cr xjtvxp8",
    keTefX: "x2vb6cf x1yygogp",
    k71WvV: "x14vtlcs x1y4j53p",
    kVAEAm: "x1n2onr6",
    kY2c9j: "xltisah",
    kkrTdU: "xicojor xl46x44",
    kWkggS: "xjbqb8w",
    kMzoRj: "xc342km",
    ksu8eU: "xng3xce",
    kmVPX3: "x1717udv",
    kFalU9: "x5ve5x3",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x14tvtkk",
    kInvED: "x7s97pk",
    k5JduY: "x1s928wv",
    kwXMNM: "x1j6awrg",
    kc1e00: "xlpxaom xcht3j4",
    kH8aOt: "x1sqd5qw",
    k3foIR: "x1m1drc7 x1c7345j",
    k8Iv0R: "x1xrz1ek x1ofpwmo",
    kkgrvl: "xv6d0c5 x9fjkoh",
    k4zj60: "x1wu5om5",
    ks3ayO: "xfbqdoa x1nf9wp7",
    kU8QeM: "xwnwc82",
    kFJxch: "x10bu2nv x1flza3w",
    kGK3vK: "xtnd0mx xdn26to",
    kUltx: "x1abkkgd x2tqfwx",
    $$css: true
  }
};
const STACK_QUERY = "(max-width: 640px)";
const noop = () => {};

/** True once the split stacks (the phone recut). False on the server and where matchMedia is missing. */
function useStacked() {
  const subscribe = React.useCallback(onChange => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return noop;
    const mql = window.matchMedia(STACK_QUERY);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  const read = () => typeof window !== "undefined" && typeof window.matchMedia === "function" ? window.matchMedia(STACK_QUERY).matches : false;
  return React.useSyncExternalStore(subscribe, read, () => false);
}

/** Two panes on a draggable hairline. Arrows step, Home/End jump; the axis follows the layout. */
export const Split = /*#__PURE__*/React.forwardRef(function Split({
  initial = 50,
  min = 20,
  max = 80,
  handleLabel = "Resize panes",
  className,
  style,
  children,
  ...props
}, ref) {
  const [share, setShare] = React.useState(initial);
  const rootRef = React.useRef(null);
  const setRootRef = useMergedRefs(rootRef, ref);
  const stacked = useStacked();
  const clamp = v => Math.min(max, Math.max(min, v));
  const onPointerDown = e => {
    e.preventDefault();
    e.target.setPointerCapture(e.pointerId);
    const rect = rootRef.current?.getBoundingClientRect();
    if (!rect) return;
    const move = ev => setShare(clamp(stacked ? (ev.clientY - rect.top) / rect.height * 100 : (ev.clientX - rect.left) / rect.width * 100));
    const up = () => {
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerup", up);
    };
    document.addEventListener("pointermove", move);
    document.addEventListener("pointerup", up);
  };
  const onKeyDown = e => {
    const step = e.shiftKey ? 10 : 2;
    let next = null;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = share - step;else if (e.key === "ArrowRight" || e.key === "ArrowDown") next = share + step;else if (e.key === "Home") next = min;else if (e.key === "End") next = max;
    if (next === null) return;
    e.preventDefault();
    setShare(clamp(next));
  };
  const root = rs(["rs-split", className], styles.split);
  const pane = rs(["rs-split-pane"], styles.pane);
  const handle = rs(["rs-split-handle"], styles.handle);
  const size = pct => stacked ? {
    height: `${pct}%`,
    width: "auto"
  } : {
    width: `${pct}%`
  };
  return /*#__PURE__*/_jsxs("div", {
    ref: setRootRef,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("div", {
      className: pane.className,
      style: {
        ...pane.style,
        ...size(share)
      },
      children: children[0]
    }), /*#__PURE__*/_jsx("button", {
      type: "button",
      className: handle.className,
      style: handle.style,
      role: "separator",
      "aria-orientation": stacked ? "horizontal" : "vertical",
      "aria-valuenow": Math.round(share),
      "aria-valuemin": min,
      "aria-valuemax": max,
      "aria-label": handleLabel,
      onPointerDown: onPointerDown,
      onKeyDown: onKeyDown
    }), /*#__PURE__*/_jsx("div", {
      className: pane.className,
      style: {
        ...pane.style,
        ...size(100 - share)
      },
      children: children[1]
    })]
  });
});
//# sourceMappingURL=resizable.js.map
