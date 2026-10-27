"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import { rs } from "../rs.js";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { Reasoning } from "./reasoning.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    ks0D6T: "x1x1rfll",
    $$css: true
  },
  list: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    kH6xsr: "x3ct3a4",
    kmVPX3: "x1717udv",
    kogj98: "x1ghz6dp",
    $$css: true
  },
  item: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x6s0dn4",
    kOIVth: "x13z6uf9",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "xkpwil5",
    $$css: true
  },
  active: {
    kMwMTN: "x1gney9c",
    k63SB2: "x1s688f",
    $$css: true
  },
  file: {
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kOIVth: "xvh977a",
    kMzoRj: "xmkeg23",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kaIpWk: "xkrxur",
    kmVPX3: "x48ff29",
    kGuDYH: "xboafo0",
    $$css: true
  }
};
/** A default-open task disclosure with supplied rows and file references. */
export const Task = /*#__PURE__*/React.forwardRef(function Task({
  items = [],
  children,
  className,
  style,
  ...props
}, ref) {
  const root = rs(["rs-task", className], styles.root);
  return /*#__PURE__*/_jsxs(Reasoning, {
    ref: ref,
    defaultOpen: true,
    title: "Task",
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("ul", {
      ...rs(["rs-task-list"], styles.list),
      children: items.map(item => {
        const active = item.state === "active";
        return /*#__PURE__*/_jsxs("li", {
          ...rs(["rs-task-item", active && "rs-task-active"], styles.item, active && styles.active),
          "data-state": item.state,
          children: [/*#__PURE__*/_jsx("span", {
            role: "img",
            "aria-label": item.state ?? "Task item",
            children: item.state === "complete" ? "✓" : item.state === "active" ? "◉" : "○"
          }), /*#__PURE__*/_jsx("span", {
            children: item.content
          }), item.file && /*#__PURE__*/_jsx("span", {
            ...rs(["rs-task-file"], styles.file),
            children: item.file
          })]
        }, item.id);
      })
    }), children]
  });
});
//# sourceMappingURL=task.js.map
