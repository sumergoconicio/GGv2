import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx } from "react/jsx-runtime";
const styles = {
  box: {
    kVAEAm: "x1n2onr6",
    k1xSpc: "xrvj5dj",
    kzqmXN: "xh8yej3",
    kVQacm: "xb3r6kr",
    kaIpWk: "x1po71e9",
    $$css: true
  }
};
export const AspectRatio = /*#__PURE__*/React.forwardRef(function AspectRatio({
  ratio = 16 / 9,
  style,
  className,
  ...props
}, ref) {
  const sx = rs(["rs-ratio", className], styles.box);
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      aspectRatio: ratio,
      ...style
    }
  });
});
//# sourceMappingURL=aspect-ratio.js.map
