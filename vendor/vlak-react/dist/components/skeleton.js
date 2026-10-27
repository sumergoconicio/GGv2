import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx } from "react/jsx-runtime";
const rsSkel = "x2t3rfm-B";
const styles = {
  skeleton: {
    k1xSpc: "x1lliihq",
    kWkggS: "xow1vt1",
    kaIpWk: "xkrxur",
    kKVMdj: "x12vp4nf xmmch59",
    k44tkh: "x18hd8ej",
    kyAemX: "x4hg4is",
    ko0y90: "xa4qsjk",
    $$css: true
  }
};
export const Skeleton = /*#__PURE__*/React.forwardRef(function Skeleton({
  width,
  height = 14,
  style,
  className,
  ...props
}, ref) {
  const sx = rs(["rs-skeleton", className], styles.skeleton);
  return /*#__PURE__*/_jsx("span", {
    ref: ref,
    "aria-hidden": "true",
    ...props,
    className: sx.className,
    style: {
      width,
      height,
      ...sx.style,
      ...style
    }
  });
});
//# sourceMappingURL=skeleton.js.map
