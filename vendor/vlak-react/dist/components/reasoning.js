"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    kB7OPa: "x9f619",
    k7Eaqz: "xeuugli",
    kzqmXN: "xh8yej3",
    ks0D6T: "x1qp14f0",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j xaxtmmi",
    kaIpWk: "xkrxur",
    kWkggS: "xhpg8l3",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  inline: {
    kMzoRj: "xc342km",
    kWkggS: "xjbqb8w",
    $$css: true
  },
  summary: {
    kB7OPa: "x9f619",
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kwnvtZ: "x1a02dak",
    kOIVth: "xb6y1gh",
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    k8WAf4: "xo0yzjp",
    kg3NbH: "xnxx81d",
    kaIpWk: "x1pjcqnp",
    kB88ic: "xe8uvvx",
    kkrTdU: "x1ypdohk",
    kGuDYH: "x1roswp1",
    kLWn49: "xfrs9s4",
    kGqHtl: "x1i5lizr",
    kWkggS: "xjbqb8w xqol87o x1awx03v",
    kMwMTN: "x1gney9c x9dgriy",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x14tvtkk",
    kInvED: "x1bqaal",
    $$css: true
  },
  indicator: {
    k1xSpc: "x1lliihq",
    kmuXW: "x2lah0s",
    kzqmXN: "xcdlrvm",
    kZKoxP: "x1l36t39",
    $$css: true
  },
  summaryInline: {
    k8WAf4: "x18g2hj5",
    kg3NbH: "x1ryrjj2",
    kMwMTN: "x1ixqp2s xcfh57o x9dgriy",
    kWkggS: "xjbqb8w x2zesa2 xx0noxj",
    $$css: true
  },
  title: {
    kzQI83: "x1iyjqo2",
    k63SB2: "x1s688f",
    $$css: true
  },
  titleInline: {
    k63SB2: "xo1l8bm",
    $$css: true
  },
  status: {
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x1dcheo9",
    $$css: true
  },
  content: {
    k8WAf4: "x13bzzdc",
    kg3NbH: "xnxx81d",
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    kHjlTd: "xj0a0fe",
    kMwMTN: "x1ixqp2s",
    $$css: true
  }
};

/** A native disclosure for a work summary supplied by the application. */
export const Reasoning = /*#__PURE__*/React.forwardRef(function Reasoning({
  title = "Work summary",
  status = "complete",
  statusLabel,
  open,
  defaultOpen = false,
  onOpenChange,
  variant = "panel",
  durationMs,
  measureDuration = false,
  autoExpand = false,
  autoCollapseDelay = false,
  onToggle,
  children,
  className,
  style,
  ...props
}, ref) {
  const [innerOpen, setInnerOpen] = React.useState(defaultOpen);
  const [elapsed, setElapsed] = React.useState(0);
  const manuallyChanged = React.useRef(false);
  const changeOpen = React.useRef(next => {
    if (open === undefined) setInnerOpen(next);
    onOpenChange?.(next);
  });
  changeOpen.current = next => {
    if (open === undefined) setInnerOpen(next);
    onOpenChange?.(next);
  };
  const previousStatus = React.useRef(undefined);
  const began = React.useRef(null);
  React.useEffect(() => {
    const nextInterval = status === "streaming" && previousStatus.current !== "streaming";
    const completed = status === "complete" && previousStatus.current === "streaming";
    previousStatus.current = status;
    if (nextInterval) {
      manuallyChanged.current = false;
      began.current = Date.now();
      setElapsed(0);
      if (autoExpand) changeOpen.current(true);
    }
    if (completed && began.current !== null) setElapsed(Math.max(0, Date.now() - began.current));
    if (completed && autoCollapseDelay !== false && !manuallyChanged.current) {
      const timer = setTimeout(() => {
        if (!manuallyChanged.current) changeOpen.current(false);
      }, Math.max(0, Number.isFinite(autoCollapseDelay) ? autoCollapseDelay : 0));
      return () => clearTimeout(timer);
    }
  }, [status, autoExpand, autoCollapseDelay]);
  React.useEffect(() => {
    if (!measureDuration || status !== "streaming") return;
    const timer = setInterval(() => {
      if (began.current !== null) setElapsed(Math.max(0, Date.now() - began.current));
    }, 1000);
    return () => clearInterval(timer);
  }, [status, measureDuration]);
  const duration = durationMs ?? (measureDuration ? elapsed : undefined);
  const isOpen = open ?? innerOpen;
  const inline = variant === "inline";
  const root = rs(["rs-reasoning", inline && "rs-reasoning-inline", className], styles.root, inline && styles.inline);
  const summary = rs(["rs-reasoning-summary", inline && "rs-reasoning-summary-inline"], styles.summary, inline && styles.summaryInline);
  const indicator = rs(["rs-reasoning-indicator"], styles.indicator);
  const titleStyle = rs(["rs-reasoning-title", inline && "rs-reasoning-title-inline"], styles.title, inline && styles.titleInline);
  const statusStyle = rs(["rs-reasoning-status"], styles.status);
  const content = rs(["rs-reasoning-content"], styles.content);
  return /*#__PURE__*/_jsxs("details", {
    ref: ref,
    ...props,
    open: isOpen,
    "data-status": status,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    onToggle: event => {
      const nextOpen = event.currentTarget.open;
      if (nextOpen !== isOpen) {
        manuallyChanged.current = true;
        if (open === undefined) setInnerOpen(nextOpen);else event.currentTarget.open = open;
        onOpenChange?.(nextOpen);
      }
      onToggle?.(event);
    },
    children: [/*#__PURE__*/_jsxs("summary", {
      ...summary,
      onClick: event => {
        manuallyChanged.current = true;
        if (open !== undefined) {
          event.preventDefault();
          onOpenChange?.(!open);
        }
      },
      children: [/*#__PURE__*/_jsx("svg", {
        ...indicator,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        focusable: "false",
        children: /*#__PURE__*/_jsx("path", {
          d: isOpen ? "m6 9 6 6 6-6" : "m9 6 6 6-6 6"
        })
      }), /*#__PURE__*/_jsx("span", {
        ...titleStyle,
        children: title
      }), /*#__PURE__*/_jsxs("span", {
        ...statusStyle,
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [statusLabel ?? (status === "streaming" ? "In progress" : "Complete"), duration !== undefined && Number.isFinite(duration) && /*#__PURE__*/_jsx("span", {
          "aria-hidden": status === "streaming" || undefined,
          children: ` · ${Math.round(Math.max(0, duration) / 1000)}s`
        })]
      })]
    }), /*#__PURE__*/_jsx("div", {
      ...content,
      children: children
    })]
  });
});
//# sourceMappingURL=reasoning.js.map
