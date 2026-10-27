"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { Icon } from "./icon.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x6s0dn4",
    kOIVth: "x13z6uf9",
    kMwMTN: "x1gney9c",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  count: {
    kGuDYH: "xkpwil5",
    kMwMTN: "x1ixqp2s",
    kcqcaj: "xss6m8b",
    kLWn49: "xfrs9s4",
    $$css: true
  }
};

/** Removable active filters and result count. Supply filter editors as children. */
export const FilterBar = /*#__PURE__*/React.forwardRef(function FilterBar({
  value,
  defaultValue = [],
  onValueChange,
  resultCount,
  label = "Active filters",
  children,
  className,
  style,
  ...props
}, ref) {
  const [inner, setInner] = React.useState(defaultValue);
  const filters = value ?? inner;
  const root = rs(["rs-filter-bar", className], styles.root);
  const count = rs(["rs-filter-bar-count"], styles.count);
  const change = next => {
    if (value === undefined) setInner(next);
    onValueChange?.(next);
  };
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    role: "group",
    "aria-label": label,
    tabIndex: -1,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [children, filters.map(filter => /*#__PURE__*/_jsxs(Button, {
      variant: "ghost",
      style: {
        width: "auto"
      },
      "aria-label": `Remove ${filter.label} filter`,
      onClick: event => {
        event.currentTarget.parentElement?.focus();
        change(filters.filter(entry => entry.id !== filter.id));
      },
      children: [filter.label, /*#__PURE__*/_jsx(Icon, {
        name: "close",
        size: 12
      })]
    }, filter.id)), !!filters.length && /*#__PURE__*/_jsx(Button, {
      variant: "ghost",
      style: {
        width: "auto"
      },
      onClick: event => {
        event.currentTarget.parentElement?.focus();
        change([]);
      },
      children: "Clear filters"
    }), resultCount != null && /*#__PURE__*/_jsxs("span", {
      ...count,
      role: "status",
      children: [resultCount, " ", resultCount === 1 ? "result" : "results"]
    })]
  });
});
//# sourceMappingURL=filter-bar.js.map
