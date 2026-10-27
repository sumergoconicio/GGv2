"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Icon } from "./icon.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
let nextId = 1;
const listeners = new Set();
/** Fired before any <Toaster /> mounted; flushed by the first one. */
const pending = [];

/** Fire a toast from anywhere; a mounted <Toaster /> renders it. */
export function toast(title, options) {
  const item = {
    id: nextId++,
    title,
    description: options?.description,
    duration: options?.duration
  };
  if (listeners.size === 0) {
    pending.push(item);
    return;
  }
  for (const listener of listeners) listener(item);
}
/** Characters in a node tree: what the lifetime scales with. */
function textLength(node) {
  if (node == null || typeof node === "boolean") return 0;
  if (typeof node === "string" || typeof node === "number") return String(node).length;
  if (Array.isArray(node)) return node.reduce((n, child) => n + textLength(child), 0);
  if (/*#__PURE__*/React.isValidElement(node)) return textLength(node.props.children);
  return 0;
}
const PER_CHAR = 50;
const CAP = 15000;
function lifetime(item, min) {
  if (item.duration != null) return item.duration;
  const chars = textLength(item.title) + textLength(item.description);
  return Math.min(Math.max(min, CAP), min + chars * PER_CHAR);
}
const toastIn = "x18re5ia-B";
const styles = {
  stack: {
    kVAEAm: "xixxii4",
    krVfgx: "x24nu2v x1kik5cu",
    kt4wiu: "xorcwq8 xh8zuxm",
    kLqNvP: "x1ogorkz",
    kY2c9j: "xcg5e97",
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kGNEyG: "xuk3077 x11g0wa5",
    kOIVth: "x13z6uf9 x1wht0sx",
    $$css: true
  },
  toast: {
    k1xSpc: "x78zum5",
    kGNEyG: "x1cy8zhl",
    kOIVth: "xb6y1gh",
    kWkggS: "xhpg8l3",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kaIpWk: "x1po71e9 x16r9t5",
    kGVxlE: "x1cuznne x1qik9ta",
    kLKAdn: "x1pe9zv5 xbsecwk",
    kg3NbH: "x13s4r1c x1aulylm",
    kGO01o: "x1v0wz0i x1lwl7di",
    ks0D6T: "x1mali8n xyl5pi8",
    kzqmXN: "xvolacv",
    kKVMdj: "xqcmdr3 xmmch59",
    k44tkh: "x1athf16",
    kyAemX: "x1nn5e1t",
    $$css: true
  },
  title: {
    k1xSpc: "x1lliihq",
    kGuDYH: "x1dcheo9 x1cncyzl",
    k63SB2: "x1s688f",
    kb6lSQ: "xjat59b",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  body: {
    kGuDYH: "x1up2fpq xrgdnwz",
    kLWn49: "xfrs9s4",
    kb6lSQ: "xjat59b",
    kMwMTN: "x1ixqp2s",
    keoZOQ: "xvijh9v xh14h4q",
    k1K539: "xat24cr",
    kUOVxO: "xrxpjvj",
    $$css: true
  },
  close: {
    kmkexE: "x1487y47 xrozb4q",
    kB7OPa: "x9f619",
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kmuXW: "x2lah0s",
    keTefX: "xvc5jky",
    keoZOQ: "x15s5u4p x1ygc5qf",
    k71WvV: "xryawk1 x1j1ef6",
    kzqmXN: "x1uyfxw7 xla6mwc",
    kZKoxP: "x9ve8r1 x128uv7p",
    kmVPX3: "x1717udv",
    kMzoRj: "xc342km",
    kaIpWk: "xkrxur",
    kWkggS: "xjbqb8w xqol87o",
    kMwMTN: "x1gney9c",
    kkrTdU: "x1ypdohk",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x14tvtkk",
    kInvED: "x7s97pk",
    $$css: true
  }
};
export const Toaster = /*#__PURE__*/React.forwardRef(function Toaster({
  duration = 4000,
  closeLabel = "Dismiss",
  className,
  style,
  ...props
}, ref) {
  const [items, setItems] = React.useState([]);
  const timers = React.useRef(new Map());
  const minRef = React.useRef(duration);
  minRef.current = duration;
  const remove = React.useCallback(id => {
    const timer = timers.current.get(id);
    if (timer?.handle) clearTimeout(timer.handle);
    timers.current.delete(id);
    setItems(current => current.filter(i => i.id !== id));
  }, []);
  const run = React.useCallback(id => {
    const timer = timers.current.get(id);
    if (!timer || timer.handle || timer.holds.size) return;
    timer.started = Date.now();
    timer.handle = setTimeout(() => remove(id), timer.remaining);
  }, [remove]);

  /** Hover and focus each hold the timer; it resumes when both let go. */
  const hold = React.useCallback((id, reason) => {
    const timer = timers.current.get(id);
    if (!timer) return;
    timer.holds.add(reason);
    if (!timer.handle) return;
    clearTimeout(timer.handle);
    timer.handle = null;
    timer.remaining = Math.max(0, timer.remaining - (Date.now() - timer.started));
  }, []);
  const release = React.useCallback((id, reason) => {
    const timer = timers.current.get(id);
    if (!timer) return;
    timer.holds.delete(reason);
    run(id);
  }, [run]);
  React.useEffect(() => {
    const timerMap = timers.current;
    const add = item => {
      timerMap.set(item.id, {
        remaining: lifetime(item, minRef.current),
        started: 0,
        handle: null,
        holds: new Set()
      });
      setItems(current => [...current, item]);
      run(item.id);
    };
    listeners.add(add);
    pending.splice(0).forEach(add);
    return () => {
      listeners.delete(add);
      for (const timer of timerMap.values()) if (timer.handle) clearTimeout(timer.handle);
      timerMap.clear();
    };
  }, [run]);
  const stack = rs(["rs-toasts", className], styles.stack);
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    ...props,
    className: stack.className,
    style: {
      ...stack.style,
      ...style
    },
    role: "status",
    "aria-live": "polite",
    children: items.map(item => {
      const card = rs(["rs-toast"], styles.toast);
      const heading = rs(["rs-toast-title"], styles.title);
      const body = rs(["rs-toast-body"], styles.body);
      const close = rs(["rs-toast-close"], styles.close);
      return /*#__PURE__*/_jsxs("div", {
        className: card.className,
        style: card.style,
        onPointerEnter: () => hold(item.id, "hover"),
        onPointerLeave: () => release(item.id, "hover"),
        onFocus: () => hold(item.id, "focus"),
        onBlur: e => {
          if (!e.currentTarget.contains(e.relatedTarget)) release(item.id, "focus");
        },
        children: [/*#__PURE__*/_jsxs("div", {
          children: [/*#__PURE__*/_jsx("span", {
            className: heading.className,
            style: heading.style,
            children: item.title
          }), item.description != null && /*#__PURE__*/_jsx("p", {
            className: body.className,
            style: body.style,
            children: item.description
          })]
        }), /*#__PURE__*/_jsx("button", {
          type: "button",
          "aria-label": closeLabel,
          className: close.className,
          style: close.style,
          onClick: () => remove(item.id),
          children: /*#__PURE__*/_jsx(Icon, {
            name: "close",
            size: 12
          })
        })]
      }, item.id);
    })
  });
});
//# sourceMappingURL=toast.js.map
