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
    kwnvtZ: "x1a02dak",
    kGNEyG: "x1pha0wt",
    kOIVth: "xpj7pl4",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  value: {
    kGuDYH: "x1q74xe4",
    k63SB2: "xk50ysn",
    kb6lSQ: "xrq0m5f",
    kLWn49: "x1u7k74",
    $$css: true
  },
  uncertainty: {
    kGuDYH: "x1jchvi3",
    $$css: true
  },
  unit: {
    kGuDYH: "xkpwil5",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  context: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    ks0D6T: "x1qp14f0",
    $$css: true
  }
};

/** A supplied scientific reading without inferred precision, confidence or unit conversion. */
export const MeasurementValue = /*#__PURE__*/React.forwardRef(function MeasurementValue({
  label,
  value,
  unit,
  uncertainty,
  uncertaintyLabel,
  notation = "plain",
  status = "recorded",
  source,
  description,
  className,
  style,
  children,
  ...props
}, ref) {
  const valid = typeof value === "number" ? Number.isFinite(value) : typeof value === "string" && value.trim().length > 0;
  const state = status === "recorded" && !valid ? "unavailable" : status;
  const validUncertainty = typeof uncertainty === "number" && Number.isFinite(uncertainty) && uncertainty >= 0;
  const format = number => notation === "scientific" ? number.toExponential() : String(number);
  const root = rs(["rs-measurement-value", className], styles.root);
  const heading = rs(["rs-measurement-value-label"], styles.label);
  const reading = rs(["rs-measurement-value-reading"], styles.reading);
  const amount = rs(["rs-measurement-value-number"], styles.value);
  const error = rs(["rs-measurement-value-uncertainty"], styles.uncertainty);
  const unitStyle = rs(["rs-measurement-value-unit"], styles.unit);
  const context = rs(["rs-measurement-value-context"], styles.context);
  return /*#__PURE__*/_jsxs("div", {
    ...props,
    ref: ref,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    "data-status": state,
    children: [/*#__PURE__*/_jsx("p", {
      ...heading,
      children: label
    }), state === "recorded" ? /*#__PURE__*/_jsxs("p", {
      ...reading,
      children: [/*#__PURE__*/_jsx("span", {
        ...amount,
        children: typeof value === "number" ? format(value) : value
      }), validUncertainty && /*#__PURE__*/_jsxs("span", {
        ...error,
        children: ["\xB1 ", format(uncertainty)]
      }), unit && /*#__PURE__*/_jsx("span", {
        ...unitStyle,
        children: unit
      })]
    }) : /*#__PURE__*/_jsx("p", {
      ...context,
      children: state === "pending" ? "Measurement pending" : "Measurement unavailable"
    }), state === "recorded" && uncertainty != null && /*#__PURE__*/_jsx("p", {
      ...context,
      children: validUncertainty ? uncertaintyLabel ?? "Supplied uncertainty" : "Uncertainty unavailable"
    }), source != null && /*#__PURE__*/_jsx("div", {
      ...context,
      children: source
    }), description != null && /*#__PURE__*/_jsx("div", {
      ...context,
      children: description
    }), children]
  });
});
//# sourceMappingURL=measurement-value.js.map
