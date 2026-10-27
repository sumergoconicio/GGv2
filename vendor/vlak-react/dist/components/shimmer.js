import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import { rs } from "../rs.js";
import "../tokens.js";
import { mq, vlak } from "../tokens.js";
import { jsx as _jsx } from "react/jsx-runtime";
const sweep = "xf4slbi-B";
const styles = {
  root: {
    kMwMTN: "x1ixqp2s",
    "--rs-shimmer-duration": "xlv1cy4",
    "--rs-shimmer-spread": "xkoyxi1",
    $$css: true
  },
  active: {
    kKwaWg: "x128nqjb",
    kgSjnq: "xakli9p",
    kHypHr: "x1ta4xzc",
    kMwMTN: "x19co3pv xc94w2y x1sy4l04",
    kKVMdj: "xkbuz4a xmmch59 x1r40hq4",
    k44tkh: "x107qajj",
    kyAemX: "x1esw782",
    ko0y90: "xa4qsjk",
    $$css: true
  }
};
/** Animated text for supplied progress. Screen readers receive the text once, without token announcements. */
export const Shimmer = /*#__PURE__*/React.forwardRef(function Shimmer({
  children,
  active = true,
  duration = 2,
  spread = 15,
  className,
  style,
  ...props
}, ref) {
  const root = rs(["rs-shimmer", active && "rs-shimmer-active", className], styles.root, active && styles.active);
  return /*#__PURE__*/_jsx("span", {
    ref: ref,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      "--rs-shimmer-duration": `${Math.max(0.2, Number.isFinite(duration) ? duration : 2)}s`,
      "--rs-shimmer-spread": `${Math.max(0, Math.min(50, Number.isFinite(spread) ? spread : 15))}%`,
      ...style
    },
    children: children
  });
});
//# sourceMappingURL=shimmer.js.map
