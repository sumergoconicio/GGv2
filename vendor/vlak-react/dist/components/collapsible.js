"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Icon } from "./icon.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  summary: {
    kB88ic: "xe8uvvx",
    kkrTdU: "x1ypdohk",
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kOIVth: "x1r2bq03",
    kAzted: "x1wszdd xs41724",
    k7Eaqz: "xtp0tkc",
    kGuDYH: "x1roswp1 x1kikilt",
    k63SB2: "x1s688f",
    kb6lSQ: "xjat59b",
    kMwMTN: "x1gney9c",
    kGqHtl: "x1i5lizr",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x14tvtkk",
    kInvED: "x7s97pk",
    $$css: true
  },
  chevron: {
    kmkexE: "x1whef1j xrozb4q",
    $$css: true
  },
  chevronOpen: {
    k3aq6I: "x19jd1h0",
    $$css: true
  },
  body: {
    kLKAdn: "x1pe9zv5 x6v3z81",
    kwRFfy: "xyri2b",
    kGO01o: "x18d9i69",
    kZCmMZ: "x1c1uobl",
    kGuDYH: "x1roswp1 x1cncyzl",
    kLWn49: "xfrs9s4",
    kMwMTN: "x1ixqp2s",
    $$css: true
  }
};

/** A bare native <details>. */
export const Collapsible = /*#__PURE__*/React.forwardRef(function Collapsible({
  title,
  defaultOpen,
  className,
  style,
  children,
  onToggle,
  open,
  ...props
}, ref) {
  const [innerOpen, setInnerOpen] = React.useState(!!defaultOpen);
  const isOpen = open ?? innerOpen;
  const root = rs(["rs-disclosure", className]);
  const summary = rs(["rs-disclosure-summary"], styles.summary);
  const chevron = rs(["rs-acc-chevron", "rs-disclosure-chevron", isOpen && "rs-disclosure-chevron-open"], styles.chevron, isOpen && styles.chevronOpen);
  const body = rs(["rs-disclosure-body"], styles.body);
  return /*#__PURE__*/_jsxs("details", {
    ref: ref,
    open: open ?? (defaultOpen || undefined),
    onToggle: e => {
      setInnerOpen(e.currentTarget.open);
      onToggle?.(e);
    },
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsxs("summary", {
      className: summary.className,
      style: summary.style,
      children: [title, /*#__PURE__*/_jsx(Icon, {
        name: "chevron-right",
        rotate: 90,
        className: chevron.className,
        style: chevron.style
      })]
    }), /*#__PURE__*/_jsx("div", {
      className: body.className,
      style: body.style,
      children: children
    })]
  });
});
//# sourceMappingURL=collapsible.js.map
