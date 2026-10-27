import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx } from "react/jsx-runtime";
const spin = "x1fy8ia8-B";
const styles = {
  spinner: {
    k1xSpc: "x3nfvp2",
    kzqmXN: "xcdlrvm",
    kZKoxP: "x1l36t39",
    kMwMTN: "x1gney9c",
    kXLuUW: "xxymvpz",
    $$css: true
  },
  ring: {
    k1xSpc: "x1lliihq",
    kzqmXN: "xcdlrvm",
    kZKoxP: "x1l36t39",
    kKVMdj: "xpedhrg xmmch59",
    k44tkh: "xof6966",
    kyAemX: "x1esw782",
    ko0y90: "xa4qsjk",
    $$css: true
  }
};

/** Hairline ring. Stops under prefers-reduced-motion. */
export const Spinner = /*#__PURE__*/React.forwardRef(function Spinner({
  label = "Loading",
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-spinner", className], styles.spinner);
  const ring = rs(["rs-spinner-ring"], styles.ring);
  return /*#__PURE__*/_jsx("span", {
    ref: ref,
    role: "status",
    "aria-label": label,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    },
    children: /*#__PURE__*/_jsx("svg", {
      viewBox: "0 0 16 16",
      width: "16",
      height: "16",
      fill: "none",
      "aria-hidden": "true",
      className: ring.className,
      style: ring.style,
      children: /*#__PURE__*/_jsx("circle", {
        cx: "8",
        cy: "8",
        r: "6.5",
        stroke: "currentColor",
        strokeWidth: "1",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        vectorEffect: "non-scaling-stroke",
        strokeDasharray: "28 13"
      })
    })
  });
});
//# sourceMappingURL=spinner.js.map
