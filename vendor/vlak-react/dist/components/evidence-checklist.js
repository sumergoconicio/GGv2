"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    kLWn49: "xfrs9s4",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  heading: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x1c3i2sq",
    k63SB2: "x1s688f",
    kLWn49: "xwn7fz2",
    $$css: true
  },
  summary: {
    kogj98: "x1ghz6dp",
    keoZOQ: "x1mjqqkp",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "xkpwil5",
    ks0D6T: "x1qp14f0",
    $$css: true
  },
  list: {
    kogj98: "x1ghz6dp",
    keoZOQ: "xj1urod",
    kmVPX3: "x1717udv",
    kB88ic: "xe8uvvx",
    kEafiO: "x1ro6g4h",
    kPef9Z: "x13fuv20",
    kLZC3w: "x1fq36pv",
    $$css: true
  },
  item: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    k8WAf4: "xgepmj6",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  head: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kjj79g: "x1qughib",
    kOIVth: "x1tmakyn",
    kGuDYH: "xkpwil5",
    $$css: true
  },
  label: {
    kogj98: "x1ghz6dp",
    k63SB2: "x1s688f",
    $$css: true
  },
  requirement: {
    kMwMTN: "x1ixqp2s",
    kGuDYH: "xboafo0",
    $$css: true
  },
  detail: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xkpwil5",
    kMwMTN: "x1ixqp2s",
    ks0D6T: "x1qp14f0",
    $$css: true
  },
  record: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x1tmakyn",
    kGuDYH: "xkpwil5",
    $$css: true
  },
  status: {
    kGuDYH: "xkpwil5",
    k63SB2: "xk50ysn",
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    $$css: true
  },
  action: {
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kZKoxP: "xt7dq6l",
    khDVqt: "xeaf4i8",
    kLWn49: "xwn7fz2",
    k8WAf4: "x13eudtd",
    $$css: true
  },
  empty: {
    kogj98: "x1ghz6dp",
    k8WAf4: "xgepmj6",
    kGuDYH: "xkpwil5",
    kMwMTN: "x1ixqp2s",
    $$css: true
  }
};

/** Evidence requirements, file records, and verification status with controlled action requests. */
export const EvidenceChecklist = /*#__PURE__*/React.forwardRef(function EvidenceChecklist({
  label,
  items,
  summary,
  emptyLabel = "Evidence requirements not supplied",
  onAction,
  children,
  className,
  style,
  ...props
}, ref) {
  const baseId = React.useId();
  const root = rs(["rs-evidence-checklist", className], styles.root);
  const heading = rs(["rs-evidence-checklist-heading"], styles.heading);
  const summaryStyle = rs(["rs-evidence-checklist-summary"], styles.summary);
  const list = rs(["rs-evidence-checklist-list"], styles.list);
  const itemStyle = rs(["rs-evidence-checklist-item"], styles.item);
  const head = rs(["rs-evidence-checklist-head"], styles.head);
  const itemLabel = rs(["rs-evidence-checklist-label"], styles.label);
  const requirement = rs(["rs-evidence-checklist-requirement"], styles.requirement);
  const detail = rs(["rs-evidence-checklist-detail"], styles.detail);
  const record = rs(["rs-evidence-checklist-record"], styles.record);
  const statusStyle = rs(["rs-evidence-checklist-status"], styles.status);
  const actions = rs(["rs-evidence-checklist-actions"], styles.actions);
  const action = rs(["rs-evidence-checklist-action"], styles.action);
  const empty = rs(["rs-evidence-checklist-empty"], styles.empty);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    role: "group",
    "aria-label": label,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("p", {
      ...heading,
      children: label
    }), summary != null && /*#__PURE__*/_jsx("p", {
      ...summaryStyle,
      children: summary
    }), items.length > 0 ? /*#__PURE__*/_jsx("ul", {
      ...list,
      children: items.map((item, index) => {
        const requirementId = `${baseId}-${index}-requirement`;
        const recordId = `${baseId}-${index}-record`;
        const statusId = `${baseId}-${index}-status`;
        return /*#__PURE__*/_jsxs("li", {
          ...itemStyle,
          children: [/*#__PURE__*/_jsxs("div", {
            ...head,
            children: [/*#__PURE__*/_jsx("p", {
              ...itemLabel,
              children: item.label
            }), /*#__PURE__*/_jsx("span", {
              ...requirement,
              id: requirementId,
              children: item.requirement ?? "Requirement not supplied"
            })]
          }), item.description != null && /*#__PURE__*/_jsx("p", {
            ...detail,
            children: item.description
          }), /*#__PURE__*/_jsxs("div", {
            ...record,
            id: recordId,
            children: [/*#__PURE__*/_jsx("span", {
              children: item.fileName ?? "File details not supplied"
            }), item.receivedLabel != null && /*#__PURE__*/_jsx("span", {
              ...detail,
              children: item.receivedLabel
            })]
          }), /*#__PURE__*/_jsxs("div", {
            role: "status",
            "aria-live": "polite",
            "aria-atomic": "true",
            ...statusStyle,
            children: [/*#__PURE__*/_jsx("span", {
              id: statusId,
              children: item.status ?? "Status not supplied"
            }), item.pending && /*#__PURE__*/_jsxs("span", {
              children: [" \xB7 ", item.pendingLabel ?? "Evidence update pending"]
            })]
          }), onAction && (item.actions?.length ?? 0) > 0 && /*#__PURE__*/_jsx("div", {
            ...actions,
            "aria-busy": item.pending || undefined,
            children: item.actions?.map(choice => /*#__PURE__*/_jsx(Button, {
              ...action,
              type: "button",
              variant: "ghost",
              disabled: item.pending || item.disabled || choice.disabled,
              "aria-label": `${choice.label}: ${item.label}`,
              "aria-describedby": `${requirementId} ${recordId} ${statusId}`,
              onClick: () => onAction(item.id, choice.id),
              children: choice.label
            }, choice.id))
          })]
        }, item.id);
      })
    }) : /*#__PURE__*/_jsx("p", {
      ...empty,
      children: emptyLabel
    }), children]
  });
});
//# sourceMappingURL=evidence-checklist.js.map
