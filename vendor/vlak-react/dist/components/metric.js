import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kfiyM8: "x10ukxgv",
    kOIVth: "x8fetqu",
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  label: {
    kMwMTN: "x1ixqp2s",
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    kogj98: "x1ghz6dp",
    $$css: true
  },
  reading: {
    k1xSpc: "x78zum5",
    kGNEyG: "x1pha0wt",
    kOIVth: "x13z6uf9",
    kAzted: "xd4eqea",
    k7Eaqz: "xeuugli",
    kcqcaj: "xss6m8b",
    kLWn49: "xo5v014",
    $$css: true
  },
  value: {
    kGuDYH: "xjka9kf",
    kb6lSQ: "xo2cfqc",
    k63SB2: "xk50ysn",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  unit: {
    kGuDYH: "x1c3i2sq",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  detail: {
    kogj98: "x1ghz6dp",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    $$css: true
  }
};

/** A numeric reading with stable baseline, tabular figures, and an explicit unit. */
export const Metric = /*#__PURE__*/React.forwardRef(function Metric({
  label,
  value,
  unit,
  description,
  comparison,
  trend,
  locale = "en",
  formatOptions,
  className,
  style,
  ...props
}, ref) {
  const root = rs(["rs-metric", className], styles.root);
  const lab = rs(["rs-metric-label"], styles.label);
  const reading = rs(["rs-metric-reading"], styles.reading);
  const figure = rs(["rs-metric-value"], styles.value);
  const suffix = rs(["rs-metric-unit"], styles.unit);
  const detail = rs(["rs-metric-detail"], styles.detail);
  const formatted = typeof value === "number" ? new Intl.NumberFormat(locale, formatOptions).format(value) : value;
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("p", {
      ...lab,
      children: label
    }), /*#__PURE__*/_jsxs("div", {
      ...reading,
      children: [/*#__PURE__*/_jsx("span", {
        ...figure,
        children: formatted
      }), unit != null && /*#__PURE__*/_jsx("span", {
        ...suffix,
        children: unit
      })]
    }), description != null && /*#__PURE__*/_jsx("p", {
      ...detail,
      children: description
    }), comparison != null && /*#__PURE__*/_jsx("p", {
      ...detail,
      children: comparison
    }), trend]
  });
});
//# sourceMappingURL=metric.js.map
