import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx } from "react/jsx-runtime";
const styles = {
  label: {
    kGuDYH: "xboafo0 x1k6fd34",
    k63SB2: "x1s688f",
    kMwMTN: "x1ixqp2s",
    kb6lSQ: "xjat59b",
    kLWn49: "x1d3mw78",
    $$css: true
  }
};

/** Label above a control. 12px, secondary ink. */
export const Label = /*#__PURE__*/React.forwardRef(function Label({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-label", className], styles.label);
  return /*#__PURE__*/_jsx("label", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
//# sourceMappingURL=label.js.map
