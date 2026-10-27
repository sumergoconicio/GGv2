"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { describeTrigger } from "./tooltip.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    kVAEAm: "x1n2onr6",
    k1xSpc: "x1rg5ohu",
    $$css: true
  },
  panel: {
    kVAEAm: "x10l6tqk",
    k87sOh: "x1d1n87m",
    kLqNvP: "x1o0tod",
    kY2c9j: "xhupvvu",
    kzqmXN: "x1nkmp2a x31f5xs",
    kWkggS: "xhpg8l3",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kaIpWk: "x1po71e9 x1m34uwc",
    kGVxlE: "x1cuznne x1qik9ta",
    kmVPX3: "x8hbxov",
    kGuDYH: "x1dcheo9 xrgdnwz",
    kLWn49: "xfrs9s4",
    kb6lSQ: "xjat59b",
    kMwMTN: "x1ixqp2s",
    kSiTet: "xg01cxk x9p0nlo x8w4yw4 xjqejgv",
    k33iCy: "xlshs6z x5etla1 x3fep86 x1v7z9pf",
    kmkexE: "x1487y47 xrozb4q",
    kgeoSG: "x1cpjm7i",
    kEoFBp: "x1hmns74",
    k5Ofw7: "x1oazjvz",
    kSJ0CW: "x1682cnc",
    koaPKo: "xtyp5od",
    kgzTxl: "x1xv4kxf",
    $$css: true
  },
  open: {
    kSiTet: "x1hc1fzr",
    k33iCy: "xnpuxes",
    $$css: true
  }
};

/**
 * Preview panel on hover or keyboard focus. CSS shows it; the panel
 * describes the trigger, and Escape hides it until the pointer leaves.
 */
export const HoverCard = /*#__PURE__*/React.forwardRef(function HoverCard({
  trigger,
  open,
  className,
  style,
  children,
  onKeyDown,
  onPointerLeave,
  onBlur,
  ...props
}, ref) {
  const id = React.useId();
  const [dismissed, setDismissed] = React.useState(false);
  const sx = rs(["rs-hover-card", className], styles.root, {
    "x-default-marker": "x-default-marker",
    $$css: true
  });
  const panel = rs(["rs-hover-card-panel", open && "rs-hover-card-open"], styles.panel, open && styles.open);
  const anchor = /*#__PURE__*/React.isValidElement(trigger) ? describeTrigger(trigger, id) : /*#__PURE__*/_jsx("span", {
    tabIndex: 0,
    "aria-describedby": id,
    children: trigger
  });
  return /*#__PURE__*/_jsxs("span", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    },
    onKeyDown: e => {
      onKeyDown?.(e);
      if (e.key === "Escape") setDismissed(true);
    },
    onPointerLeave: e => {
      onPointerLeave?.(e);
      setDismissed(false);
    },
    onBlur: e => {
      onBlur?.(e);
      if (!e.currentTarget.contains(e.relatedTarget)) setDismissed(false);
    },
    children: [anchor, /*#__PURE__*/_jsx("span", {
      className: panel.className,
      style: panel.style,
      role: "tooltip",
      id: id,
      hidden: dismissed,
      children: children
    })]
  });
});
//# sourceMappingURL=hover-card.js.map
