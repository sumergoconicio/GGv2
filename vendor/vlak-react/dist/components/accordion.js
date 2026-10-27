"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Icon } from "./icon.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const AccordionContext = /*#__PURE__*/React.createContext(undefined);
const styles = {
  acc: {
    kEafiO: "x1ro6g4h",
    kPef9Z: "x13fuv20",
    kLZC3w: "x1fq36pv",
    $$css: true
  },
  item: {
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  summary: {
    kB88ic: "xe8uvvx",
    kkrTdU: "x1ypdohk",
    k1xSpc: "x78zum5",
    kjj79g: "x1qughib",
    kGNEyG: "x6s0dn4",
    kOIVth: "x8233eu",
    k8WAf4: "x142x9wm",
    kg3NbH: "xnjsko4",
    kAzted: "x1rqwxy8 xs41724",
    kGuDYH: "x18ihxl1 x1kikilt",
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
    kmuXW: "x2lah0s",
    kMwMTN: "x1ixqp2s",
    kmkexE: "x1whef1j xrozb4q",
    $$css: true
  },
  chevronOpen: {
    k3aq6I: "x19jd1h0",
    $$css: true
  },
  body: {
    kLKAdn: "xexx8yu",
    kwRFfy: "xyri2b",
    kGO01o: "x2yie3v xk7kboj",
    kZCmMZ: "x1c1uobl",
    kGuDYH: "x1roswp1 x1cncyzl",
    kLWn49: "xfrs9s4",
    kMwMTN: "x1ixqp2s",
    $$css: true
  }
};

/** Native <details> rows on hairlines. */
export const Accordion = /*#__PURE__*/React.forwardRef(function Accordion({
  exclusive,
  className,
  style,
  children,
  ...props
}, ref) {
  const group = React.useId();
  const sx = rs(["rs-acc", className], styles.acc);
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    },
    children: /*#__PURE__*/_jsx(AccordionContext.Provider, {
      value: exclusive ? group : undefined,
      children: children
    })
  });
});
export const AccordionItem = /*#__PURE__*/React.forwardRef(function AccordionItem({
  title,
  defaultOpen,
  className,
  style,
  children,
  onToggle,
  open,
  ...props
}, ref) {
  const group = React.useContext(AccordionContext);
  const [innerOpen, setInnerOpen] = React.useState(!!defaultOpen);
  const isOpen = open ?? innerOpen;
  const item = rs(["rs-acc-item", className], styles.item);
  const summary = rs(["rs-acc-summary"], styles.summary);
  const chevron = rs(["rs-acc-chevron", isOpen && "rs-acc-chevron-open"], styles.chevron, isOpen && styles.chevronOpen);
  const body = rs(["rs-acc-body"], styles.body);
  return /*#__PURE__*/_jsxs("details", {
    ref: ref,
    name: group,
    open: open ?? (defaultOpen || undefined),
    onToggle: e => {
      setInnerOpen(e.currentTarget.open);
      onToggle?.(e);
    },
    ...props,
    className: item.className,
    style: {
      ...item.style,
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
//# sourceMappingURL=accordion.js.map
