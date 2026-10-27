"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
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
  header: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kjj79g: "x1qughib",
    kOIVth: "x1tmakyn",
    kGO01o: "x2yie3v",
    kGuDYH: "xkpwil5",
    $$css: true
  },
  zone: {
    kMwMTN: "x1ixqp2s",
    kcqcaj: "xss6m8b",
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
    k1xSpc: "xrvj5dj",
    kumcoG: "x1swfu1c x1nk3w99",
    kOIVth: "x19gx3kl",
    k8WAf4: "x6qoaat",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  time: {
    kGuDYH: "xkpwil5",
    kcqcaj: "xss6m8b",
    k63SB2: "x1s688f",
    $$css: true
  },
  body: {
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    k7Eaqz: "xeuugli",
    kOIVth: "x13z6uf9",
    $$css: true
  },
  name: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x1jchvi3",
    k63SB2: "x1s688f",
    kLWn49: "xwn7fz2",
    $$css: true
  },
  detail: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xkpwil5",
    ks0D6T: "x1qp14f0",
    $$css: true
  },
  status: {
    kogj98: "x1ghz6dp",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "xkpwil5",
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    keoZOQ: "x1tbvfm1",
    $$css: true
  },
  action: {
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kZKoxP: "xt7dq6l",
    k8WAf4: "x13eudtd",
    khDVqt: "xeaf4i8",
    kLWn49: "xwn7fz2",
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

/** A controlled record of supplied medication rows, not a dosing or reminder engine. */
export const MedicationSchedule = /*#__PURE__*/React.forwardRef(function MedicationSchedule({
  items,
  timeZone,
  dateLabel,
  emptyLabel = "No medication entries supplied",
  onAction,
  children,
  className,
  style,
  ...props
}, ref) {
  const baseId = React.useId();
  const root = rs(["rs-medication-schedule", className], styles.root);
  const header = rs(["rs-medication-schedule-header"], styles.header);
  const zone = rs(["rs-medication-schedule-zone"], styles.zone);
  const list = rs(["rs-medication-schedule-list"], styles.list);
  const row = rs(["rs-medication-schedule-row"], styles.row);
  const time = rs(["rs-medication-schedule-time"], styles.time);
  const body = rs(["rs-medication-schedule-body"], styles.body);
  const name = rs(["rs-medication-schedule-name"], styles.name);
  const detail = rs(["rs-medication-schedule-detail"], styles.detail);
  const status = rs(["rs-medication-schedule-status"], styles.status);
  const actions = rs(["rs-medication-schedule-actions"], styles.actions);
  const action = rs(["rs-medication-schedule-action"], styles.action);
  const empty = rs(["rs-medication-schedule-empty"], styles.empty);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    role: "group",
    "aria-label": "Medication schedule",
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsxs("div", {
      ...header,
      children: [dateLabel != null && /*#__PURE__*/_jsx("span", {
        children: dateLabel
      }), /*#__PURE__*/_jsx("span", {
        ...zone,
        children: timeZone
      })]
    }), items.length === 0 ? /*#__PURE__*/_jsx("p", {
      ...empty,
      children: emptyLabel
    }) : /*#__PURE__*/_jsx("ol", {
      ...list,
      children: items.map((item, index) => {
        const nameId = `${baseId}-${index}-name`;
        const timeId = `${baseId}-${index}-time`;
        const doseId = `${baseId}-${index}-dose`;
        const statusId = `${baseId}-${index}-status`;
        return /*#__PURE__*/_jsxs("li", {
          ...row,
          "aria-labelledby": nameId,
          "aria-busy": item.pending || undefined,
          children: [item.dateTime ? /*#__PURE__*/_jsx("time", {
            ...time,
            id: timeId,
            dateTime: item.dateTime,
            children: item.timeLabel
          }) : /*#__PURE__*/_jsx("span", {
            ...time,
            id: timeId,
            children: item.timeLabel
          }), /*#__PURE__*/_jsxs("div", {
            ...body,
            children: [/*#__PURE__*/_jsx("p", {
              ...name,
              id: nameId,
              children: item.name
            }), /*#__PURE__*/_jsx("p", {
              ...detail,
              id: doseId,
              children: item.dose
            }), item.instructions != null && /*#__PURE__*/_jsx("p", {
              ...detail,
              children: item.instructions
            }), /*#__PURE__*/_jsx("p", {
              ...status,
              id: statusId,
              children: item.status
            }), /*#__PURE__*/_jsx("span", {
              role: "status",
              "aria-live": "polite",
              ...status,
              children: item.pending ? item.pendingLabel ?? "Record update pending" : null
            }), onAction && (item.actions?.length ?? 0) > 0 && /*#__PURE__*/_jsx("div", {
              ...actions,
              children: item.actions?.map(choice => /*#__PURE__*/_jsx(Button, {
                ...action,
                variant: "ghost",
                type: "button",
                disabled: item.pending || item.disabled || choice.disabled,
                "aria-label": `${choice.label}: ${item.name}`,
                "aria-describedby": `${timeId} ${doseId} ${statusId}`,
                onClick: () => onAction(item.id, choice.id),
                children: choice.label
              }, choice.id))
            })]
          })]
        }, item.id);
      })
    }), children]
  });
});
//# sourceMappingURL=medication-schedule.js.map
