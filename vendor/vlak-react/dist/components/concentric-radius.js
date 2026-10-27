"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";

/** The exact inner circle shares its outer circle's center. No iterative fitting is needed. */
import { jsx as _jsx } from "react/jsx-runtime";
export function innerRadius(outerRadius, padding, _options = {}) {
  if (!Number.isFinite(outerRadius) || outerRadius <= 0) return 0;
  if (!Number.isFinite(padding) || padding <= 0) return outerRadius;
  return Math.max(0, outerRadius - padding);
}
export function concentricInner(outer, padding) {
  return innerRadius(outer, padding);
}
export function concentricOuter(inner, padding) {
  return Math.max(0, inner) + Math.max(0, padding);
}
const NestInnerRadius = /*#__PURE__*/React.createContext(null);
function nestVars(out, gap) {
  const style = {
    "--rs-in": "max(0px, calc(var(--rs-out) - var(--rs-gap)))"
  };
  if (out != null) style["--rs-out"] = `${out}px`;
  if (gap != null) style["--rs-gap"] = `${gap}px`;
  return style;
}
const styles = {
  nest: {
    kB7OPa: "x9f619",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kaIpWk: "x7w7bwx",
    kmVPX3: "xm8squx",
    kWkggS: "xhpg8l3",
    $$css: true
  },
  inner: {
    kB7OPa: "x9f619",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kaIpWk: "x10g176o",
    kAzted: "x17qorbb",
    kWkggS: "xhpg8l3",
    k1xSpc: "x78zum5",
    kGNEyG: "xuk3077",
    $$css: true
  }
};
export const Nest = /*#__PURE__*/React.forwardRef(function Nest({
  radius,
  pad,
  style,
  className,
  children,
  ...props
}, ref) {
  const inherited = React.useContext(NestInnerRadius);
  const out = radius ?? inherited ?? undefined;
  const next = out != null && pad != null ? concentricInner(out, pad) : inherited;
  const sx = rs(["rs-nest", className], styles.nest);
  return /*#__PURE__*/_jsx(NestInnerRadius.Provider, {
    value: next ?? null,
    children: /*#__PURE__*/_jsx("div", {
      ref: ref,
      ...props,
      className: sx.className,
      style: {
        ...sx.style,
        ...nestVars(out, pad),
        ...style
      },
      children: children
    })
  });
});
export const NestInner = /*#__PURE__*/React.forwardRef(function NestInner({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-nest-in", className], styles.inner);
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
//# sourceMappingURL=concentric-radius.js.map
