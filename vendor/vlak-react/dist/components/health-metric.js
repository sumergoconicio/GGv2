import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    k8WAf4: "xgepmj6",
    kEafiO: "x1ro6g4h",
    kPef9Z: "x13fuv20",
    kLZC3w: "x1fq36pv",
    kLWn49: "xfrs9s4",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  label: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xkpwil5",
    k63SB2: "xk50ysn",
    $$css: true
  },
  reading: {
    kogj98: "x1ghz6dp",
    k1xSpc: "x78zum5",
    kGNEyG: "x1pha0wt",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  value: {
    kGuDYH: "x579bpy",
    kLWn49: "x1u7k74",
    k63SB2: "xk50ysn",
    kb6lSQ: "xo2cfqc",
    $$css: true
  },
  unit: {
    kGuDYH: "xkpwil5",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  status: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xboafo0",
    k63SB2: "xk50ysn",
    $$css: true
  },
  meta: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "xtw71wu",
    $$css: true
  },
  description: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xkpwil5",
    ks0D6T: "x1qp14f0",
    $$css: true
  }
};

/** A sourced reading with explicit data availability, without clinical interpretation. */
export const HealthMetric = /*#__PURE__*/React.forwardRef(function HealthMetric({
  label,
  value,
  unit,
  status = "available",
  statusLabel,
  dateTime,
  timeLabel,
  source,
  description,
  className,
  style,
  children,
  ...props
}, ref) {
  const hasValue = typeof value === "number" ? Number.isFinite(value) : typeof value === "string" && value.trim().length > 0;
  const state = !hasValue && (status === "available" || status === "stale") ? "unavailable" : status;
  const showValue = hasValue && (state === "available" || state === "stale");
  const labels = {
    available: "Recorded",
    pending: "Pending",
    unavailable: "Unavailable",
    stale: "Last recorded, stale"
  };
  const root = rs(["rs-health-metric", className], styles.root);
  const labelStyle = rs(["rs-health-metric-label"], styles.label);
  const reading = rs(["rs-health-metric-reading"], styles.reading);
  const valueStyle = rs(["rs-health-metric-value"], styles.value);
  const unitStyle = rs(["rs-health-metric-unit"], styles.unit);
  const statusStyle = rs(["rs-health-metric-status"], styles.status);
  const meta = rs(["rs-health-metric-meta"], styles.meta);
  const descriptionStyle = rs(["rs-health-metric-description"], styles.description);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    "data-status": state,
    children: [/*#__PURE__*/_jsx("p", {
      ...labelStyle,
      children: label
    }), showValue && /*#__PURE__*/_jsxs("p", {
      ...reading,
      children: [/*#__PURE__*/_jsx("span", {
        ...valueStyle,
        children: value
      }), unit && /*#__PURE__*/_jsx("span", {
        ...unitStyle,
        children: unit
      })]
    }), /*#__PURE__*/_jsx("p", {
      ...statusStyle,
      children: statusLabel ?? labels[state]
    }), (dateTime || timeLabel || source != null) && /*#__PURE__*/_jsxs("p", {
      ...meta,
      children: [(dateTime || timeLabel) && /*#__PURE__*/_jsx("time", {
        dateTime: dateTime,
        children: timeLabel ?? dateTime
      }), source != null && /*#__PURE__*/_jsx("span", {
        children: source
      })]
    }), description != null && /*#__PURE__*/_jsx("div", {
      ...descriptionStyle,
      children: description
    }), children]
  });
});
//# sourceMappingURL=health-metric.js.map
