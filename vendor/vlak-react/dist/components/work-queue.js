"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import { rs } from "../rs.js";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { Checkbox } from "./checkbox.js";
import { Reasoning } from "./reasoning.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  section: {
    ks0D6T: "x1x1rfll",
    $$css: true
  },
  list: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8fetqu",
    kmVPX3: "x1717udv",
    kogj98: "x1ghz6dp",
    kH6xsr: "x3ct3a4",
    kskxy: "x18fb9vk",
    kORKVm: "x1odjw0f",
    $$css: true
  },
  item: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    k8WAf4: "x18g2hj5",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  row: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kwnvtZ: "x1a02dak",
    kjj79g: "x1qughib",
    kOIVth: "x13z6uf9",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  content: {
    kUk6DE: "xehxkzz",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  complete: {
    kMwMTN: "x1ixqp2s",
    kMnn75: "x5lhwog",
    $$css: true
  },
  detail: {
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x1dcheo9",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kOIVth: "xvh977a",
    kwnvtZ: "x1a02dak",
    $$css: true
  }
};
/** Supplied prompt and todo sections. Checking a row requests a change; the application owns scheduling. */
export const WorkQueue = /*#__PURE__*/React.forwardRef(function WorkQueue({
  sections,
  label = "Work queue",
  onItemCheckedChange,
  emptyMessage = "Nothing queued.",
  className,
  style,
  ...props
}, ref) {
  const root = rs(["rs-work-queue", className], styles.root);
  return /*#__PURE__*/_jsx("section", {
    ref: ref,
    "aria-label": label,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: sections.length ? sections.map(section => /*#__PURE__*/_jsxs(Reasoning, {
      ...rs(["rs-work-queue-section"], styles.section),
      title: section.title,
      defaultOpen: section.defaultOpen ?? true,
      statusLabel: `${section.items.filter(item => item.completed).length}/${section.items.length}`,
      children: [/*#__PURE__*/_jsx("ul", {
        ...rs(["rs-work-queue-list"], styles.list),
        tabIndex: 0,
        "aria-label": `${section.title} items`,
        children: section.items.map(item => {
          const completed = !!item.completed;
          return /*#__PURE__*/_jsxs("li", {
            ...rs(["rs-work-queue-item"], styles.item),
            children: [/*#__PURE__*/_jsxs("div", {
              ...rs(["rs-work-queue-row"], styles.row),
              children: [/*#__PURE__*/_jsx("div", {
                ...rs(["rs-work-queue-content", completed && "rs-work-queue-complete"], styles.content, completed && styles.complete),
                children: onItemCheckedChange ? /*#__PURE__*/_jsx(Checkbox, {
                  checked: completed,
                  disabled: item.disabled,
                  onCheckedChange: checked => onItemCheckedChange(section.id, item.id, checked),
                  label: item.content
                }) : /*#__PURE__*/_jsxs("span", {
                  children: [completed && /*#__PURE__*/_jsx("span", {
                    "aria-label": "Complete",
                    children: "\u2713 "
                  }), item.content]
                })
              }), item.actions && /*#__PURE__*/_jsx("div", {
                ...rs(["rs-work-queue-actions"], styles.actions),
                children: item.actions
              })]
            }), item.description && /*#__PURE__*/_jsx("div", {
              ...rs(["rs-work-queue-detail"], styles.detail),
              children: item.description
            }), item.attachments]
          }, item.id);
        })
      }), section.items.length === 0 && /*#__PURE__*/_jsx("p", {
        children: emptyMessage
      })]
    }, section.id)) : /*#__PURE__*/_jsx("p", {
      role: "status",
      children: emptyMessage
    })
  });
});
//# sourceMappingURL=work-queue.js.map
