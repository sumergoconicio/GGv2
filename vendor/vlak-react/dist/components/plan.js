"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import { rs } from "../rs.js";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { Reasoning } from "./reasoning.js";
import { Shimmer } from "./shimmer.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    ks0D6T: "x1x1rfll",
    $$css: true
  },
  description: {
    kogj98: "x7qn6qj",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    keoZOQ: "xj1urod",
    $$css: true
  },
  footer: {
    kEafiO: "x178xt8z",
    kPef9Z: "x13fuv20",
    kLZC3w: "x1fq36pv",
    kLKAdn: "x12t3zde",
    keoZOQ: "xj1urod",
    $$css: true
  }
};
/** A proposed plan with supplied steps and actions. Execution remains application-owned. */
export const Plan = /*#__PURE__*/React.forwardRef(function Plan({
  title,
  description,
  streaming = false,
  actions,
  footer,
  children,
  className,
  style,
  ...props
}, ref) {
  const root = rs(["rs-plan", className], styles.root);
  return /*#__PURE__*/_jsxs(Reasoning, {
    ref: ref,
    defaultOpen: true,
    ...props,
    title: /*#__PURE__*/_jsx(Shimmer, {
      active: streaming,
      children: title
    }),
    status: streaming ? "streaming" : "complete",
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [description && /*#__PURE__*/_jsx("p", {
      ...rs(["rs-plan-description"], styles.description),
      children: /*#__PURE__*/_jsx(Shimmer, {
        active: streaming,
        children: description
      })
    }), children, actions && /*#__PURE__*/_jsx("div", {
      ...rs(["rs-plan-actions"], styles.actions),
      children: actions
    }), footer && /*#__PURE__*/_jsx("footer", {
      ...rs(["rs-plan-footer"], styles.footer),
      children: footer
    })]
  });
});
//# sourceMappingURL=plan.js.map
