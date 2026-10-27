import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { ReferenceRange } from "./reference-range.js";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    kH6xsr: "x3ct3a4",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  item: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    k8WAf4: "xgepmj6",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  head: {
    k1xSpc: "x78zum5",
    kGNEyG: "x1pha0wt",
    kjj79g: "x1qughib",
    kwnvtZ: "x1a02dak",
    kOIVth: "x4upkte",
    $$css: true
  },
  name: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xkpwil5",
    k63SB2: "x1s688f",
    $$css: true
  },
  status: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  reading: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kjj79g: "x1qughib",
    kGNEyG: "x1pha0wt",
    kOIVth: "x4upkte",
    kogj98: "x1ghz6dp",
    kGuDYH: "x1603h9y",
    k63SB2: "xk50ysn",
    kLWn49: "x1u7k74",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  readingLabel: {
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  readingValue: {
    k9WMMc: "xp4054r",
    keTefX: "xvc5jky",
    $$css: true
  },
  unit: {
    kGuDYH: "xkpwil5",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  note: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xkpwil5",
    ks0D6T: "x1qp14f0",
    $$css: true
  },
  time: {
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    $$css: true
  }
};

/** Supplied laboratory results with explicit report states and optional reference intervals. */
export const LabResults = /*#__PURE__*/React.forwardRef(function LabResults({
  label,
  results,
  emptyLabel = "No results available",
  className,
  style,
  children,
  ...props
}, ref) {
  const root = rs(["rs-lab-results", className], styles.root);
  const itemStyle = rs(["rs-lab-results-item"], styles.item);
  const head = rs(["rs-lab-results-head"], styles.head);
  const name = rs(["rs-lab-results-name"], styles.name);
  const statusStyle = rs(["rs-lab-results-status"], styles.status);
  const reading = rs(["rs-lab-results-reading"], styles.reading);
  const readingLabel = rs(["rs-lab-results-reading-label"], styles.readingLabel);
  const readingValue = rs(["rs-lab-results-reading-value"], styles.readingValue);
  const unit = rs(["rs-lab-results-unit"], styles.unit);
  const note = rs(["rs-lab-results-note"], styles.note);
  const time = rs(["rs-lab-results-time"], styles.time);
  const labels = {
    final: "Final",
    pending: "Pending",
    unavailable: "Unavailable",
    amended: "Amended"
  };
  return /*#__PURE__*/_jsxs("ul", {
    ref: ref,
    "aria-label": label,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [results.length === 0 && /*#__PURE__*/_jsx("li", {
      ...itemStyle,
      children: emptyLabel
    }), results.map(result => {
      const hasValue = typeof result.value === "number" ? Number.isFinite(result.value) : typeof result.value === "string" && result.value.trim().length > 0;
      const requestedStatus = result.status ?? "final";
      const status = !hasValue && requestedStatus === "final" ? "unavailable" : requestedStatus;
      const showValue = hasValue && (status === "final" || status === "amended");
      const hasRange = result.minimum != null || result.maximum != null;
      return /*#__PURE__*/_jsxs("li", {
        ...itemStyle,
        "data-status": status,
        children: [/*#__PURE__*/_jsxs("div", {
          ...head,
          children: [/*#__PURE__*/_jsx("p", {
            ...name,
            children: result.name
          }), /*#__PURE__*/_jsxs("p", {
            ...statusStyle,
            children: [labels[status], result.statusLabel != null && /*#__PURE__*/_jsxs(_Fragment, {
              children: [" \xB7 ", result.statusLabel]
            })]
          })]
        }), showValue && hasRange && typeof result.value === "number" ? /*#__PURE__*/_jsx(ReferenceRange, {
          label: "Result",
          value: result.value,
          minimum: result.minimum,
          maximum: result.maximum,
          unit: result.unit,
          rangeLabel: result.rangeLabel
        }) : showValue && /*#__PURE__*/_jsxs("p", {
          ...reading,
          children: [/*#__PURE__*/_jsx("span", {
            ...readingLabel,
            children: "Result"
          }), /*#__PURE__*/_jsxs("span", {
            ...readingValue,
            children: [result.value, result.unit && /*#__PURE__*/_jsxs(_Fragment, {
              children: [" ", /*#__PURE__*/_jsx("span", {
                ...unit,
                children: result.unit
              })]
            })]
          })]
        }), status === "amended" && !hasValue && /*#__PURE__*/_jsx("p", {
          ...note,
          children: "Result unavailable"
        }), (result.dateTime || result.timeLabel) && /*#__PURE__*/_jsx("time", {
          ...time,
          dateTime: result.dateTime,
          children: result.timeLabel ?? result.dateTime
        }), result.note != null && /*#__PURE__*/_jsx("div", {
          ...note,
          children: result.note
        })]
      }, result.id);
    }), children]
  });
});
//# sourceMappingURL=lab-results.js.map
