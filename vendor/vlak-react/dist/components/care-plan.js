"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Checkbox } from "./checkbox.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    kHjlTd: "xj0a0fe",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  description: {
    kogj98: "x1ghz6dp",
    k1K539: "xyi6m4r",
    ks0D6T: "x1qp14f0",
    kGuDYH: "xkpwil5",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  list: {
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    kB88ic: "xe8uvvx",
    kEafiO: "x1ro6g4h",
    kPef9Z: "x13fuv20",
    kLZC3w: "x1fq36pv",
    $$css: true
  },
  row: {
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kOIVth: "x8233eu",
    k8WAf4: "x6qoaat",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  title: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x1jchvi3",
    k63SB2: "x1s688f",
    kLWn49: "xwn7fz2",
    $$css: true
  },
  check: {
    k63SB2: "x1s688f",
    kAzted: "x1wszdd",
    k7Eaqz: "xtp0tkc",
    kqGvvJ: "xg7hhy6",
    $$css: true
  },
  detail: {
    kogj98: "x1ghz6dp",
    ks0D6T: "x1qp14f0",
    kGuDYH: "xkpwil5",
    $$css: true
  },
  metadata: {
    kogj98: "x1ghz6dp",
    k1xSpc: "xrvj5dj",
    kumcoG: "x185a7wo x1nk3w99",
    kOIVth: "xpyfehb",
    $$css: true
  },
  field: {
    k7Eaqz: "xeuugli",
    $$css: true
  },
  label: {
    kogj98: "x1ghz6dp",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "xboafo0",
    $$css: true
  },
  value: {
    kogj98: "x1ghz6dp",
    keoZOQ: "x1tbvfm1",
    kGuDYH: "xkpwil5",
    $$css: true
  },
  pending: {
    kGuDYH: "xkpwil5",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  empty: {
    kogj98: "x1ghz6dp",
    k8WAf4: "x6qoaat",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "xkpwil5",
    $$css: true
  }
};

/** A supplied care task list with controlled completion requests and explicit pending states. */
export const CarePlan = /*#__PURE__*/React.forwardRef(function CarePlan({
  tasks,
  description,
  emptyLabel = "No care tasks supplied",
  onCompletedChange,
  children,
  className,
  style,
  ...props
}, ref) {
  const baseId = React.useId();
  const root = rs(["rs-care-plan", className], styles.root);
  const descriptionStyle = rs(["rs-care-plan-description"], styles.description);
  const list = rs(["rs-care-plan-list"], styles.list);
  const row = rs(["rs-care-plan-row"], styles.row);
  const title = rs(["rs-care-plan-title"], styles.title);
  const check = rs(["rs-care-plan-check"], styles.check);
  const detail = rs(["rs-care-plan-detail"], styles.detail);
  const metadata = rs(["rs-care-plan-metadata"], styles.metadata);
  const field = rs(["rs-care-plan-field"], styles.field);
  const label = rs(["rs-care-plan-label"], styles.label);
  const value = rs(["rs-care-plan-value"], styles.value);
  const pending = rs(["rs-care-plan-pending"], styles.pending);
  const empty = rs(["rs-care-plan-empty"], styles.empty);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    role: "group",
    "aria-label": "Care plan",
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [description != null && /*#__PURE__*/_jsx("p", {
      ...descriptionStyle,
      children: description
    }), tasks.length === 0 ? /*#__PURE__*/_jsx("p", {
      ...empty,
      children: emptyLabel
    }) : /*#__PURE__*/_jsx("ul", {
      ...list,
      children: tasks.map((task, index) => {
        const statusId = `${baseId}-${index}-status`;
        return /*#__PURE__*/_jsxs("li", {
          ...row,
          "aria-busy": task.pending || undefined,
          children: [onCompletedChange && typeof task.completed === "boolean" ? /*#__PURE__*/_jsx(Checkbox, {
            ...check,
            label: task.title,
            checked: task.completed,
            disabled: task.pending || task.disabled,
            "aria-describedby": statusId,
            onCheckedChange: completed => onCompletedChange(task.id, completed)
          }) : /*#__PURE__*/_jsx("p", {
            ...title,
            children: task.title
          }), task.description != null && /*#__PURE__*/_jsx("p", {
            ...detail,
            children: task.description
          }), /*#__PURE__*/_jsxs("dl", {
            ...metadata,
            children: [/*#__PURE__*/_jsxs("div", {
              ...field,
              children: [/*#__PURE__*/_jsx("dt", {
                ...label,
                children: "Owner"
              }), /*#__PURE__*/_jsx("dd", {
                ...value,
                children: task.owner ?? "Owner not supplied"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              ...field,
              children: [/*#__PURE__*/_jsx("dt", {
                ...label,
                children: "Due"
              }), /*#__PURE__*/_jsx("dd", {
                ...value,
                children: task.dueLabel ?? "Due date not supplied"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              ...field,
              children: [/*#__PURE__*/_jsx("dt", {
                ...label,
                children: "Status"
              }), /*#__PURE__*/_jsx("dd", {
                ...value,
                id: statusId,
                children: task.status
              })]
            })]
          }), /*#__PURE__*/_jsx("span", {
            role: "status",
            "aria-live": "polite",
            ...pending,
            children: task.pending ? task.pendingLabel ?? "Task update pending" : null
          })]
        }, task.id);
      })
    }), children]
  });
});
//# sourceMappingURL=care-plan.js.map
