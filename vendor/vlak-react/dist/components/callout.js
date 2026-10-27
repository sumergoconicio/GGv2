import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx } from "react/jsx-runtime";
const styles = {
  box: {
    kWkggS: "xhpg8l3",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kaIpWk: "x2u8bby",
    kGVxlE: "x1gnnqk1",
    k8WAf4: "xgepmj6 x1nf832a",
    kg3NbH: "x1qhpy6z xookx22",
    $$css: true
  }
};

/** Paper field, 1px hairline on all sides. Not rounded. No left bar. */
export const Callout = /*#__PURE__*/React.forwardRef(function Callout({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-callout", className], styles.box);
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
//# sourceMappingURL=callout.js.map
