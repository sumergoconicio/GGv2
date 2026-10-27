"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { jsx as _jsx } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "x78zum5",
    kOIVth: "x13z6uf9",
    kXHlph: "xw2csxc",
    k8WAf4: "x1o5vn8x",
    k7Eaqz: "xeuugli",
    ks0D6T: "x193iq5w",
    $$css: true
  },
  wrap: {
    kwnvtZ: "x1a02dak",
    $$css: true
  },
  item: {
    kmuXW: "x2lah0s",
    kzqmXN: "x14atkfc",
    khDVqt: "xuxw1ft",
    $$css: true
  }
};
export const Suggestions = /*#__PURE__*/React.forwardRef(function Suggestions({
  wrap = false,
  className,
  style,
  ...props
}, ref) {
  const root = rs(["rs-suggestions", wrap && "rs-suggestions-wrap", className], styles.root, wrap && styles.wrap);
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    role: "group",
    "aria-label": "Suggested prompts",
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    }
  });
});
export const Suggestion = /*#__PURE__*/React.forwardRef(function Suggestion({
  value,
  onSelect,
  children,
  className,
  style,
  ...props
}, ref) {
  const root = rs(["rs-suggestions-item", className], styles.item);
  return /*#__PURE__*/_jsx(Button, {
    ref: ref,
    variant: "ghost",
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    onClick: () => onSelect?.(value),
    children: children ?? value
  });
});
//# sourceMappingURL=suggestions.js.map
