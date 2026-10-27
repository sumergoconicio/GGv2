import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx } from "react/jsx-runtime";
const styles = {
  kbd: {
    kMv6JI: "x1mb2qyg",
    kGuDYH: "x12lo8hy",
    k63SB2: "xk50ysn",
    kMwMTN: "x1ixqp2s",
    kWkggS: "xhpg8l3",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kt9PQ7: "xlxy82",
    kaIpWk: "xkrxur",
    k8WAf4: "xj8oexa",
    kg3NbH: "x18a9hih",
    kLWn49: "x1u7k74",
    $$css: true
  },
  pair: {
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kOIVth: "xvh977a",
    $$css: true
  }
};
export const Kbd = /*#__PURE__*/React.forwardRef(function Kbd({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-kbd", className], styles.kbd);
  return /*#__PURE__*/_jsx("kbd", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
export const KbdPair = /*#__PURE__*/React.forwardRef(function KbdPair({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-kbd-pair", className], styles.pair);
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
//# sourceMappingURL=kbd.js.map
