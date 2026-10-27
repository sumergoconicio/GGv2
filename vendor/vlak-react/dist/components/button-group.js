import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx } from "react/jsx-runtime";
const styles = {
  group: {
    kB7OPa: "x9f619",
    k1xSpc: "x3nfvp2 xerj2k5",
    kGNEyG: "x1qjc9v5",
    kAzted: "x5fktsu",
    kzqmXN: "xvolacv",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kaIpWk: "xkrxur x16r9t5",
    kWkggS: "xb223ua",
    kOIVth: "x1qayl2o",
    kVQacm: "xb3r6kr",
    $$css: true
  }
};

/** Flush joined actions. One hairline between. Group owns the outer stroke. */
export const ButtonGroup = /*#__PURE__*/React.forwardRef(function ButtonGroup({
  className,
  style,
  children,
  ...props
}, ref) {
  const sx = rs(["rs-btn-group", className], styles.group);
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    role: "group",
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    },
    children: React.Children.map(children, child => /*#__PURE__*/React.isValidElement(child) ? /*#__PURE__*/React.cloneElement(child, {
      grouped: true
    }) : child)
  });
});
//# sourceMappingURL=button-group.js.map
