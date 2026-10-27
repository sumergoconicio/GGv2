import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    kH6xsr: "x3ct3a4",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  item: {
    k1xSpc: "xrvj5dj",
    kumcoG: "x1gkv2y9 x1nk3w99",
    kOIVth: "x1tmakyn",
    k8WAf4: "xgepmj6",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  time: {
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  content: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  head: {
    k1xSpc: "x78zum5",
    kjj79g: "x1qughib",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x1pha0wt",
    kOIVth: "x4upkte",
    $$css: true
  },
  symptom: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xkpwil5",
    k63SB2: "x1s688f",
    $$css: true
  },
  intensity: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  body: {
    kogj98: "x1ghz6dp",
    ks0D6T: "x1qp14f0",
    kGuDYH: "xkpwil5",
    $$css: true
  },
  summary: {
    kAzted: "x1wszdd",
    k7Eaqz: "xtp0tkc",
    k1xSpc: "xtcx8v3",
    kfiyM8: "xc26acl",
    kkrTdU: "x1ypdohk",
    kGuDYH: "xkpwil5",
    kaIpWk: "xkrxur",
    kI3sdo: "x1a2a7pz x42huo6",
    kInvED: "x1hl8ikr",
    kg3NbH: "xllzysa",
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    $$css: true
  }
};

/** A time-ordered record of supplied symptoms, descriptions and native detail disclosures. */
export const SymptomDiary = /*#__PURE__*/React.forwardRef(function SymptomDiary({
  entries,
  emptyLabel = "No symptoms recorded",
  order = "newest",
  className,
  style,
  children,
  ...props
}, ref) {
  const sorted = entries.map((entry, index) => ({
    entry,
    index,
    timestamp: Date.parse(entry.dateTime)
  })).sort((a, b) => {
    if (Number.isNaN(a.timestamp)) return Number.isNaN(b.timestamp) ? a.index - b.index : 1;
    if (Number.isNaN(b.timestamp)) return -1;
    return (order === "newest" ? b.timestamp - a.timestamp : a.timestamp - b.timestamp) || a.index - b.index;
  });
  const root = rs(["rs-symptom-diary", className], styles.root);
  const item = rs(["rs-symptom-diary-item"], styles.item);
  const time = rs(["rs-symptom-diary-time"], styles.time);
  const content = rs(["rs-symptom-diary-content"], styles.content);
  const head = rs(["rs-symptom-diary-head"], styles.head);
  const symptom = rs(["rs-symptom-diary-symptom"], styles.symptom);
  const intensity = rs(["rs-symptom-diary-intensity"], styles.intensity);
  const body = rs(["rs-symptom-diary-body"], styles.body);
  const summary = rs(["rs-symptom-diary-summary"], styles.summary);
  const actions = rs(["rs-symptom-diary-actions"], styles.actions);
  return /*#__PURE__*/_jsxs("ol", {
    ref: ref,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [sorted.length === 0 && /*#__PURE__*/_jsx("li", {
      ...item,
      children: emptyLabel
    }), sorted.map(({
      entry,
      timestamp
    }) => {
      const displayTime = entry.timeLabel ?? (Number.isNaN(timestamp) ? "Time not recorded" : entry.dateTime);
      return /*#__PURE__*/_jsxs("li", {
        ...item,
        children: [/*#__PURE__*/_jsx("time", {
          ...time,
          dateTime: Number.isNaN(timestamp) ? undefined : entry.dateTime,
          children: displayTime
        }), /*#__PURE__*/_jsxs("div", {
          ...content,
          children: [/*#__PURE__*/_jsxs("div", {
            ...head,
            children: [/*#__PURE__*/_jsx("p", {
              ...symptom,
              children: entry.symptom
            }), entry.intensity != null && /*#__PURE__*/_jsx("p", {
              ...intensity,
              children: entry.intensity
            })]
          }), entry.notes != null && /*#__PURE__*/_jsx("div", {
            ...body,
            children: entry.notes
          }), entry.details != null && /*#__PURE__*/_jsxs("details", {
            children: [/*#__PURE__*/_jsx("summary", {
              ...summary,
              "aria-label": entry.detailsLabel ?? `Details for ${entry.symptom}, ${displayTime}`,
              children: "Details"
            }), /*#__PURE__*/_jsx("div", {
              ...body,
              children: entry.details
            })]
          }), entry.actions != null && /*#__PURE__*/_jsx("div", {
            ...actions,
            children: entry.actions
          })]
        })]
      }, entry.id);
    }), children]
  });
});
//# sourceMappingURL=symptom-diary.js.map
