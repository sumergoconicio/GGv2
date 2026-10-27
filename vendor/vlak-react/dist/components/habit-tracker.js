"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
const statusLabels = {
  complete: "Complete",
  missed: "Missed",
  skipped: "Skipped",
  unrecorded: "Unrecorded"
};
const statusMarks = {
  complete: "✓",
  missed: "×",
  skipped: "–",
  unrecorded: "·"
};
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  label: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x1jq7itm",
    k63SB2: "x1s688f",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  description: {
    kogj98: "x1ghz6dp",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x1jq7itm",
    kLWn49: "xfrs9s4",
    ks0D6T: "x1qp14f0",
    $$css: true
  },
  days: {
    k1xSpc: "xrvj5dj",
    kumcoG: "x1nh781e",
    kOIVth: "x13z6uf9",
    kH6xsr: "x3ct3a4",
    kmVPX3: "x1717udv",
    kogj98: "x1ghz6dp",
    $$css: true
  },
  day: {
    k7Eaqz: "xeuugli",
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    kfiyM8: "x10ukxgv",
    k9WMMc: "x2b8uid",
    $$css: true
  },
  date: {
    kGuDYH: "x4ro2ui",
    kLWn49: "xfrs9s4",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  control: {
    k1xSpc: "xrvj5dj",
    kAPf3g: "x1o2pa38",
    kfiyM8: "xc26acl",
    kOIVth: "xvh977a",
    kAzted: "x17qorbb",
    k7Eaqz: "xtp0tkc",
    kB7OPa: "x9f619",
    kzqmXN: "xh8yej3",
    kmVPX3: "x7gbtqy",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd",
    kaIpWk: "xkrxur",
    kWkggS: "xhpg8l3",
    kMwMTN: "x1gney9c",
    kMv6JI: "xjb2p0i",
    kGuDYH: "x4ro2ui",
    kLWn49: "xfrs9s4",
    kkrTdU: "x1ypdohk",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  complete: {
    kWkggS: "xmgn9m6 xf7h6k7",
    kMwMTN: "x19rmm7l x1pljmm8",
    $$css: true
  },
  unavailable: {
    kkrTdU: "xt0e3qv",
    kSiTet: "xwq05k6 x1nyumiu",
    $$css: true
  },
  static: {
    kkrTdU: "xt0e3qv",
    $$css: true
  },
  mark: {
    kGuDYH: "x1603h9y",
    kLWn49: "x1u7k74",
    $$css: true
  }
};

/** Dated completion records with caller-owned state and no inferred streak. */
export const HabitTracker = /*#__PURE__*/React.forwardRef(function HabitTracker({
  label,
  description,
  days,
  onDayChange,
  disabled = false,
  readOnly = false,
  className,
  style,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
  ...props
}, ref) {
  const id = React.useId();
  const interactive = onDayChange != null && !readOnly;
  const root = rs(["rs-habit-tracker", className], styles.root);
  const heading = rs(["rs-habit-tracker-label"], styles.label);
  const copy = rs(["rs-habit-tracker-description"], styles.description);
  const list = rs(["rs-habit-tracker-days"], styles.days);
  const dayStyle = rs(["rs-habit-tracker-day"], styles.day);
  const dateStyle = rs(["rs-habit-tracker-date"], styles.date);
  const mark = rs(["rs-habit-tracker-mark"], styles.mark);
  return /*#__PURE__*/_jsxs("div", {
    ...props,
    ref: ref,
    role: "group",
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy ?? (ariaLabel == null ? `${id}-label` : undefined),
    "aria-describedby": [ariaDescribedBy, description != null && `${id}-description`].filter(Boolean).join(" ") || undefined,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("p", {
      id: `${id}-label`,
      className: heading.className,
      style: heading.style,
      children: label
    }), description != null && /*#__PURE__*/_jsx("p", {
      id: `${id}-description`,
      className: copy.className,
      style: copy.style,
      children: description
    }), days.length === 0 && /*#__PURE__*/_jsx("p", {
      className: copy.className,
      style: copy.style,
      children: "No days recorded"
    }), /*#__PURE__*/_jsx("ul", {
      className: list.className,
      style: list.style,
      children: days.map((day, index) => {
        const complete = day.status === "complete";
        const unavailable = interactive && (disabled || day.disabled);
        const control = rs(["rs-habit-tracker-control", complete && "rs-habit-tracker-complete", unavailable && "rs-habit-tracker-unavailable", !interactive && "rs-habit-tracker-static"], styles.control, complete && styles.complete, unavailable && styles.unavailable, !interactive && styles.static);
        const contents = /*#__PURE__*/_jsxs(_Fragment, {
          children: [/*#__PURE__*/_jsx("span", {
            "aria-hidden": "true",
            className: mark.className,
            style: mark.style,
            children: statusMarks[day.status]
          }), /*#__PURE__*/_jsx("span", {
            id: `${id}-status-${index}`,
            children: statusLabels[day.status]
          })]
        });
        return /*#__PURE__*/_jsxs("li", {
          className: dayStyle.className,
          style: dayStyle.style,
          children: [/*#__PURE__*/_jsx("span", {
            className: dateStyle.className,
            style: dateStyle.style,
            children: day.label
          }), interactive ? /*#__PURE__*/_jsx("button", {
            type: "button",
            disabled: disabled || day.disabled,
            "aria-pressed": complete,
            "aria-label": `${day.label}: completion`,
            "aria-describedby": `${id}-status-${index}`,
            className: control.className,
            style: control.style,
            onClick: () => onDayChange?.(day.date, complete ? "unrecorded" : "complete"),
            children: contents
          }) : /*#__PURE__*/_jsx("div", {
            className: control.className,
            style: control.style,
            children: contents
          })]
        }, day.date);
      })
    })]
  });
});
//# sourceMappingURL=habit-tracker.js.map
