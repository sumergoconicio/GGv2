import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx } from "react/jsx-runtime";
const variantClass = {
  outline: "rs-badge",
  solid: "rs-badge-solid",
  muted: "rs-badge-muted"
};
const styles = {
  base: {
    kGuDYH: "x12lo8hy",
    k63SB2: "x1s688f",
    kb6lSQ: "x16q24ku",
    kLWn49: "x37zpob",
    kaIpWk: "xkrxur",
    $$css: true
  },
  outline: {
    kMwMTN: "x1nzlwsg",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x13mfgmy",
    k8WAf4: "x5utbj",
    kg3NbH: "xvpgqt4",
    $$css: true
  },
  solid: {
    kMwMTN: "x19rmm7l",
    kWkggS: "xmgn9m6",
    k8WAf4: "x1o5vn8x",
    kg3NbH: "x12pyf1d",
    $$css: true
  },
  muted: {
    kMwMTN: "x1gney9c",
    kWkggS: "xow1vt1",
    k8WAf4: "x1o5vn8x",
    kg3NbH: "x12pyf1d",
    $$css: true
  }
};
export const Badge = /*#__PURE__*/React.forwardRef(function Badge({
  variant = "outline",
  className,
  style,
  ...props
}, ref) {
  const sx = rs([variantClass[variant], className], styles.base, variant === "solid" ? styles.solid : variant === "muted" ? styles.muted : styles.outline);
  return /*#__PURE__*/_jsx("span", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
//# sourceMappingURL=badge.js.map
