"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const labels = {
  queued: "Queued",
  rendering: "Rendering",
  complete: "Complete",
  failed: "Failed",
  canceled: "Canceled"
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
  list: {
    kH6xsr: "x3ct3a4",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    k1xSpc: "xrvj5dj",
    $$css: true
  },
  job: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    k8WAf4: "x142x9wm",
    kEafiO: "x1ro6g4h",
    kPef9Z: "x13fuv20",
    kLZC3w: "x1fq36pv",
    $$css: true
  },
  header: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x1pha0wt",
    kjj79g: "x1qughib",
    kOIVth: "x4upkte",
    kGuDYH: "x1jq7itm",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  note: {
    kogj98: "x1ghz6dp",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x4ro2ui",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  progress: {
    k1xSpc: "x1lliihq",
    kzqmXN: "xh8yej3",
    kZKoxP: "x164u9eo",
    keaTxX: "x12r28v4",
    $$css: true
  },
  action: {
    kSGwAc: "x1y8v6su",
    $$css: true
  }
};

/** Host-owned render jobs and available cancel or retry actions. */
export const RenderQueue = /*#__PURE__*/React.forwardRef(function RenderQueue({
  label,
  jobs,
  onCancel,
  onRetry,
  disabled,
  className,
  style,
  ...props
}, ref) {
  const root = rs(["rs-render-queue", className], styles.root);
  const heading = rs(["rs-render-queue-label"], styles.label);
  const list = rs(["rs-render-queue-list"], styles.list);
  const row = rs(["rs-render-queue-job"], styles.job);
  const header = rs(["rs-render-queue-header"], styles.header);
  const note = rs(["rs-render-queue-note"], styles.note);
  const progress = rs(["rs-render-queue-progress"], styles.progress);
  const action = rs(["rs-render-queue-action"], styles.action);
  return /*#__PURE__*/_jsxs("div", {
    ...props,
    ref: ref,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("p", {
      className: heading.className,
      style: heading.style,
      children: label
    }), jobs.length === 0 && /*#__PURE__*/_jsx("p", {
      className: note.className,
      style: note.style,
      children: "No render jobs"
    }), /*#__PURE__*/_jsx("ul", {
      className: list.className,
      style: list.style,
      children: jobs.map(job => {
        const validProgress = job.progress != null && Number.isFinite(job.progress) && job.progress >= 0 && job.progress <= 100;
        const active = job.status === "queued" || job.status === "rendering";
        const retry = job.status === "failed" || job.status === "canceled";
        return /*#__PURE__*/_jsxs("li", {
          className: row.className,
          style: row.style,
          children: [/*#__PURE__*/_jsxs("div", {
            className: header.className,
            style: header.style,
            children: [/*#__PURE__*/_jsx("span", {
              children: job.label
            }), /*#__PURE__*/_jsx("span", {
              children: Object.hasOwn(labels, job.status) ? labels[job.status] : "Unknown status"
            })]
          }), job.detail != null && /*#__PURE__*/_jsx("div", {
            className: note.className,
            style: note.style,
            children: job.detail
          }), active && (validProgress ? /*#__PURE__*/_jsxs(_Fragment, {
            children: [/*#__PURE__*/_jsxs("progress", {
              value: job.progress,
              max: 100,
              "aria-label": `${job.label} progress`,
              className: progress.className,
              style: progress.style,
              children: [job.progress, "%"]
            }), /*#__PURE__*/_jsxs("p", {
              className: note.className,
              style: note.style,
              children: [job.progress, "%"]
            })]
          }) : /*#__PURE__*/_jsx("p", {
            className: note.className,
            style: note.style,
            children: job.progress == null ? "Progress not reported" : "Progress unavailable"
          })), active && onCancel && /*#__PURE__*/_jsx(Button, {
            variant: "ghost",
            size: "sm",
            type: "button",
            disabled: disabled,
            "aria-label": `Cancel ${job.label}`,
            className: action.className,
            style: action.style,
            onClick: () => onCancel(job.id),
            children: "Cancel"
          }), retry && onRetry && /*#__PURE__*/_jsx(Button, {
            variant: "ghost",
            size: "sm",
            type: "button",
            disabled: disabled,
            "aria-label": `Retry ${job.label}`,
            className: action.className,
            style: action.style,
            onClick: () => onRetry(job.id),
            children: "Retry"
          })]
        }, job.id);
      })
    })]
  });
});
//# sourceMappingURL=render-queue.js.map
