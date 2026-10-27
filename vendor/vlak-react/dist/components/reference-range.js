import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    kLWn49: "xfrs9s4",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  head: {
    kogj98: "x1ghz6dp",
    k1xSpc: "x78zum5",
    kGNEyG: "x1pha0wt",
    kwnvtZ: "x1a02dak",
    kjj79g: "x1qughib",
    kOIVth: "x4upkte",
    kGuDYH: "xkpwil5",
    $$css: true
  },
  label: {
    k63SB2: "xk50ysn",
    $$css: true
  },
  value: {
    kcqcaj: "xss6m8b",
    kGuDYH: "x1603h9y",
    k63SB2: "xk50ysn",
    kLWn49: "x1u7k74",
    k9WMMc: "xp4054r",
    keTefX: "xvc5jky",
    $$css: true
  },
  track: {
    kVAEAm: "x1n2onr6",
    kZKoxP: "xam5rvr",
    kUOVxO: "x170yi28",
    kgeoSG: "x10tli2e",
    kEoFBp: "x1hmns74",
    kpsdNU: "xm4btww",
    k96MEf: "x1knuo7r",
    kgzTxl: "xyhb6t6",
    kcTAPf: "xkjykve",
    kLkRvE: "x19p9ipd x6272fm",
    $$css: true
  },
  interval: {
    kVAEAm: "x10l6tqk",
    kLqNvP: "x1ug0jj1",
    kzqmXN: "xycev2y",
    kZKoxP: "x164u9eo",
    k87sOh: "xwa60dl",
    k3aq6I: "x1cb1t30",
    kWkggS: "xb223ua x18t4had",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd",
    kB7OPa: "x9f619",
    $$css: true
  },
  marker: {
    kVAEAm: "x10l6tqk",
    k87sOh: "xwa60dl",
    k3aq6I: "x1cb1t30",
    kZKoxP: "x1qa65zt",
    kzqmXN: "x1e7hgle",
    keTefX: "xdjnu0k",
    kWkggS: "xmgn9m6 x99u5fr",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xli9mpl",
    kB7OPa: "x9f619",
    $$css: true
  },
  bounds: {
    k1xSpc: "x78zum5",
    kGNEyG: "x1pha0wt",
    kwnvtZ: "x1a02dak",
    kjj79g: "x1qughib",
    kOIVth: "x4upkte",
    kogj98: "x1ghz6dp",
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  boundValue: {
    k9WMMc: "xp4054r",
    keTefX: "xvc5jky",
    $$css: true
  },
  description: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    $$css: true
  }
};

/** A supplied numeric reference interval. Position describes arithmetic, never clinical status. */
export const ReferenceRange = /*#__PURE__*/React.forwardRef(function ReferenceRange({
  label,
  value,
  minimum,
  maximum,
  unit,
  valueLabel,
  rangeLabel = "Reference interval",
  className,
  style,
  children,
  ...props
}, ref) {
  const hasValue = typeof value === "number" && Number.isFinite(value);
  const hasMinimum = typeof minimum === "number" && Number.isFinite(minimum);
  const hasMaximum = typeof maximum === "number" && Number.isFinite(maximum);
  const invalid = minimum != null && !hasMinimum || maximum != null && !hasMaximum || hasMinimum && hasMaximum && minimum >= maximum;
  const bounded = !invalid && hasMinimum && hasMaximum;
  const suffix = unit ? ` ${unit}` : "";
  const intervalText = invalid || !hasMinimum && !hasMaximum ? "Unavailable" : hasMinimum && hasMaximum ? `${minimum}–${maximum}${suffix}` : hasMinimum ? `At least ${minimum}${suffix}` : `Up to ${maximum}${suffix}`;
  // Normalize first so finite bounds near Number.MAX_VALUE cannot overflow their span.
  const scale = bounded ? Math.max(Math.abs(minimum), Math.abs(maximum), 1) : 1;
  const ratio = bounded && hasValue ? (value / scale - minimum / scale) / (maximum / scale - minimum / scale) : null;
  const position = ratio != null && !Number.isNaN(ratio) ? Math.min(100, Math.max(0, 20 + ratio * 60)) : null;
  const placement = bounded && hasValue ? value < minimum ? "Below displayed interval" : value > maximum ? "Above displayed interval" : null : null;
  const root = rs(["rs-reference-range", className], styles.root);
  const head = rs(["rs-reference-range-head"], styles.head);
  const labelStyle = rs(["rs-reference-range-label"], styles.label);
  const valueStyle = rs(["rs-reference-range-value"], styles.value);
  const track = rs(["rs-reference-range-track"], styles.track);
  const interval = rs(["rs-reference-range-interval"], styles.interval);
  const marker = rs(["rs-reference-range-marker"], styles.marker);
  const bounds = rs(["rs-reference-range-bounds"], styles.bounds);
  const boundValue = rs(["rs-reference-range-bound-value"], styles.boundValue);
  const description = rs(["rs-reference-range-description"], styles.description);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsxs("p", {
      ...head,
      children: [/*#__PURE__*/_jsx("span", {
        ...labelStyle,
        children: label
      }), /*#__PURE__*/_jsx("span", {
        ...valueStyle,
        children: hasValue ? valueLabel ?? `${value}${suffix}` : "No result"
      })]
    }), bounded && /*#__PURE__*/_jsxs("div", {
      ...track,
      "aria-hidden": "true",
      children: [/*#__PURE__*/_jsx("span", {
        ...interval
      }), position != null && /*#__PURE__*/_jsx("span", {
        className: marker.className,
        style: {
          ...marker.style,
          insetInlineStart: `${position}%`
        }
      })]
    }), /*#__PURE__*/_jsxs("p", {
      ...bounds,
      children: [/*#__PURE__*/_jsx("span", {
        children: rangeLabel
      }), /*#__PURE__*/_jsx("span", {
        ...boundValue,
        children: intervalText
      })]
    }), placement && /*#__PURE__*/_jsx("p", {
      ...description,
      children: placement
    }), children]
  });
});
//# sourceMappingURL=reference-range.js.map
