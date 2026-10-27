import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx } from "react/jsx-runtime";
const styles = {
  chip: {
    kMv6JI: "x1mb2qyg",
    kGuDYH: "x12lo8hy x8hqeb2",
    k63SB2: "xk50ysn",
    kMwMTN: "x1ixqp2s",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1p1n6e9",
    k8WAf4: "x5utbj x93xex7",
    kg3NbH: "x8srd2o x507p67",
    kLWn49: "xo5v014",
    kaIpWk: "xkrxur x16r9t5",
    k1xSpc: "x1p0ob66",
    kGNEyG: "x1wbzo2s",
    kAzted: "xs41724",
    $$css: true
  }
};

/** Mono identifier with a 1px mixed border. */
export const Chip = /*#__PURE__*/React.forwardRef(function Chip({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-chip", className], styles.chip);
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
//# sourceMappingURL=chip.js.map
