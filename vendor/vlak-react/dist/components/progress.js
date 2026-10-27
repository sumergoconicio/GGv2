import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  head: {
    k1xSpc: "x78zum5",
    kjj79g: "x1qughib",
    kGuDYH: "xboafo0",
    k63SB2: "xk50ysn",
    kMwMTN: "x1ixqp2s",
    kb6lSQ: "xjat59b",
    k1K539: "x142q39j",
    $$css: true
  },
  bar: {
    kZKoxP: "x16wp3ig",
    kWkggS: "xow1vt1",
    kaIpWk: "x1cum3z5",
    kVQacm: "xb3r6kr",
    $$css: true
  },
  fill: {
    k1xSpc: "x1lliihq",
    kZKoxP: "x5yr21d",
    kWkggS: "xmgn9m6",
    kaIpWk: "x1cum3z5",
    $$css: true
  }
};
export const Progress = /*#__PURE__*/React.forwardRef(function Progress({
  value,
  max = 100,
  label,
  className,
  style,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  ...props
}, ref) {
  const labelId = React.useId();
  const now = Math.min(max, Math.max(0, value));
  const pct = Math.min(100, Math.max(0, max === 0 ? 0 : value / max * 100));
  const head = rs(["rs-progress-head"], styles.head);
  const bar = rs(["rs-progress"], styles.bar);
  const fill = rs(["rs-progress-fill"], styles.fill);
  const labelledBy = ariaLabelledBy ?? (ariaLabel == null && label != null ? labelId : undefined);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    ...props,
    className: className,
    style: style,
    children: [label != null && /*#__PURE__*/_jsxs("div", {
      className: head.className,
      style: head.style,
      children: [/*#__PURE__*/_jsx("span", {
        id: labelId,
        children: label
      }), /*#__PURE__*/_jsxs("span", {
        children: [Math.round(pct), "%"]
      })]
    }), /*#__PURE__*/_jsx("div", {
      className: bar.className,
      style: bar.style,
      role: "progressbar",
      "aria-label": ariaLabel,
      "aria-labelledby": labelledBy,
      "aria-valuemin": 0,
      "aria-valuemax": max,
      "aria-valuenow": now,
      "aria-valuetext": `${Math.round(pct)}%`,
      children: /*#__PURE__*/_jsx("span", {
        className: fill.className,
        style: {
          ...fill.style,
          width: `${pct}%`
        }
      })
    })]
  });
});
//# sourceMappingURL=progress.js.map
