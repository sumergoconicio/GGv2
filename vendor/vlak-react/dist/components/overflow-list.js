"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { inertAttrs } from "../compat.js";
import { Button } from "./button.js";
import { DropdownMenu } from "./dropdown-menu.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    kVAEAm: "x1n2onr6",
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kOIVth: "x13z6uf9",
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  measure: {
    kVAEAm: "x10l6tqk",
    k33iCy: "xlshs6z",
    kfzvcC: "x47corl",
    k1xSpc: "x78zum5",
    kOIVth: "x13z6uf9",
    kzqmXN: "xezivpi",
    k87sOh: "x13vifvy",
    kLqNvP: "x1o0tod",
    $$css: true
  },
  sample: {
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kB7OPa: "x9f619",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kg3NbH: "x1nu5hly",
    kMv6JI: "xjb2p0i",
    kGuDYH: "x1jq7itm",
    kb6lSQ: "xjat59b",
    khDVqt: "xuxw1ft",
    $$css: true
  },
  more: {
    kmuXW: "x2lah0s",
    k7Eaqz: "xeuugli",
    $$css: true
  }
};

/** Keeps priority actions in order and moves the remainder into a keyboard menu. */
export const OverflowList = /*#__PURE__*/React.forwardRef(function OverflowList({
  items,
  label = "Actions",
  maxVisible = items.length,
  className,
  style,
  ...props
}, ref) {
  const limit = Math.max(0, Math.min(items.length, Number.isFinite(maxVisible) ? Math.floor(maxVisible) : items.length));
  const [count, setCount] = React.useState(Math.min(limit, 3));
  const local = React.useRef(null);
  const measure = React.useRef(null);
  const more = React.useRef(null);
  const focusMore = React.useRef(false);
  React.useLayoutEffect(() => {
    const update = () => {
      const available = local.current?.clientWidth ?? 0;
      if (!available || !measure.current) return;
      const widths = [...measure.current.children].map(element => element.getBoundingClientRect().width);
      const all = widths.slice(0, items.length).reduce((total, width) => total + width, 0) + Math.max(0, items.length - 1) * 8;
      let visible = 0;
      let used = 0;
      if (items.length <= limit && all <= available) visible = items.length;else {
        const reserve = (widths.at(-1) ?? 120) + 8;
        for (let index = 0; index < limit; index++) {
          used += (widths[index] ?? 44) + (index ? 8 : 0);
          if (used + reserve > available) break;
          visible++;
        }
      }
      const active = local.current?.contains(document.activeElement) ? document.activeElement?.getAttribute("data-overflow-id") : null;
      if (active && items.findIndex(item => item.id === active) >= visible) focusMore.current = true;
      setCount(visible);
    };
    update();
    if (typeof ResizeObserver === "undefined" || !local.current) return;
    const observer = new ResizeObserver(update);
    observer.observe(local.current);
    if (measure.current) observer.observe(measure.current);
    return () => observer.disconnect();
  }, [items, limit]);
  React.useLayoutEffect(() => {
    if (focusMore.current) {
      more.current?.querySelector("button")?.focus();
      focusMore.current = false;
    }
  });
  const visibleCount = Math.min(count, limit);
  const root = rs(["rs-overflow-list", className], styles.root);
  const measurement = rs(["rs-overflow-list-measure"], styles.measure);
  const sample = rs(["rs-overflow-list-sample"], styles.sample);
  const overflow = rs(["rs-overflow-list-more"], styles.more);
  return /*#__PURE__*/_jsxs("div", {
    ref: element => {
      local.current = element;
      if (typeof ref === "function") ref(element);else if (ref) ref.current = element;
    },
    role: "group",
    "aria-label": label,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [items.slice(0, visibleCount).map(item => /*#__PURE__*/_jsx(Button, {
      "data-overflow-id": item.id,
      variant: "ghost",
      disabled: item.disabled,
      style: {
        width: "auto",
        flexShrink: 0,
        whiteSpace: "nowrap"
      },
      onClick: item.onAction,
      children: item.label
    }, item.id)), visibleCount < items.length && /*#__PURE__*/_jsx("div", {
      ref: more,
      ...overflow,
      children: /*#__PURE__*/_jsx(DropdownMenu, {
        label: "More actions",
        style: {
          minWidth: 0
        },
        items: items.slice(visibleCount).map(item => ({
          label: item.label,
          disabled: item.disabled,
          onSelect: item.onAction
        }))
      })
    }), /*#__PURE__*/_jsxs("div", {
      ref: measure,
      ...measurement,
      "aria-hidden": "true",
      ...inertAttrs(true),
      children: [items.map(item => /*#__PURE__*/_jsx("span", {
        ...sample,
        children: item.label
      }, item.id)), /*#__PURE__*/_jsx("span", {
        ...sample,
        children: "More actions \u25BE"
      })]
    })]
  });
});
//# sourceMappingURL=overflow-list.js.map
