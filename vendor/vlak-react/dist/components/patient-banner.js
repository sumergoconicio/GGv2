import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kB7OPa: "x9f619",
    kMwMTN: "x1gney9c",
    kWkggS: "xhpg8l3",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kmVPX3: "xomzojh",
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kOIVth: "x8fetqu",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  name: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x1aueamr",
    k63SB2: "x1s688f",
    kLWn49: "x132q4wb",
    kb6lSQ: "xrq0m5f",
    $$css: true
  },
  identifiers: {
    kogj98: "x1ghz6dp",
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x1q5xl8e",
    $$css: true
  },
  field: {
    k7Eaqz: "xeuugli",
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kOIVth: "xvh977a",
    $$css: true
  },
  label: {
    kogj98: "x1ghz6dp",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "xboafo0",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  value: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  context: {
    kogj98: "x1ghz6dp",
    k1xSpc: "xrvj5dj",
    kumcoG: "x1i3q30n x1nk3w99",
    kOIVth: "x8fetqu",
    kEafiO: "x1ro6g4h",
    kPef9Z: "x13fuv20",
    kLZC3w: "x1fq36pv",
    kLKAdn: "x12t3zde",
    $$css: true
  },
  missing: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xkpwil5",
    kMwMTN: "x1ixqp2s",
    kLWn49: "xfrs9s4",
    $$css: true
  }
};

/** A supplied patient identity and explicitly recorded context, without clinical inference. */
export const PatientBanner = /*#__PURE__*/React.forwardRef(function PatientBanner({
  patientName,
  identifiers = [],
  contextItems = [],
  identifiersEmptyLabel = "Identifiers not supplied",
  contextEmptyLabel = "Patient context not supplied",
  children,
  className,
  style,
  ...props
}, ref) {
  const root = rs(["rs-patient-banner", className], styles.root);
  const name = rs(["rs-patient-banner-name"], styles.name);
  const identifiersStyle = rs(["rs-patient-banner-identifiers"], styles.identifiers);
  const field = rs(["rs-patient-banner-field"], styles.field);
  const label = rs(["rs-patient-banner-label"], styles.label);
  const value = rs(["rs-patient-banner-value"], styles.value);
  const context = rs(["rs-patient-banner-context"], styles.context);
  const missing = rs(["rs-patient-banner-missing"], styles.missing);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    role: "group",
    "aria-label": patientName,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("p", {
      ...name,
      children: patientName
    }), identifiers.length > 0 ? /*#__PURE__*/_jsx("dl", {
      ...identifiersStyle,
      children: identifiers.map(item => /*#__PURE__*/_jsxs("div", {
        ...field,
        children: [/*#__PURE__*/_jsx("dt", {
          ...label,
          children: item.label
        }), /*#__PURE__*/_jsx("dd", {
          ...value,
          children: item.value
        })]
      }, item.id))
    }) : /*#__PURE__*/_jsx("p", {
      ...missing,
      children: identifiersEmptyLabel
    }), contextItems.length > 0 ? /*#__PURE__*/_jsx("dl", {
      ...context,
      children: contextItems.map(item => /*#__PURE__*/_jsxs("div", {
        ...field,
        children: [/*#__PURE__*/_jsx("dt", {
          ...label,
          children: item.label
        }), /*#__PURE__*/_jsx("dd", {
          ...value,
          children: item.value
        })]
      }, item.id))
    }) : /*#__PURE__*/_jsx("p", {
      ...missing,
      children: contextEmptyLabel
    }), children]
  });
});
//# sourceMappingURL=patient-banner.js.map
