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
    kOIVth: "xru8eyw",
    kmVPX3: "x1717udv",
    kogj98: "x1ghz6dp",
    kH6xsr: "x3ct3a4",
    $$css: true
  },
  step: {
    k1xSpc: "xrvj5dj",
    kumcoG: "x176teg",
    kOIVth: "x8233eu",
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  title: {
    kMwMTN: "x1ixqp2s",
    k63SB2: "xk50ysn",
    $$css: true
  },
  active: {
    kMwMTN: "x1gney9c",
    k63SB2: "x1s688f",
    $$css: true
  },
  detail: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  sources: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    $$css: true
  },
  figure: {
    kogj98: "x1ghz6dp",
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  caption: {
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x1dcheo9",
    $$css: true
  }
};
/** Application-supplied work summaries, with per-step state and supporting evidence. */
export const ThoughtSteps = /*#__PURE__*/React.forwardRef(function ThoughtSteps({
  steps,
  children,
  className,
  style,
  ...props
}, ref) {
  const root = rs(["rs-thought-steps", className], styles.root);
  return /*#__PURE__*/_jsxs(Reasoning, {
    ref: ref,
    title: "Work summary",
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("ol", {
      ...rs(["rs-thought-steps-list"], styles.list),
      children: steps.map(step => {
        const active = step.state === "active";
        return /*#__PURE__*/_jsxs("li", {
          ...rs(["rs-thought-steps-step"], styles.step),
          "data-state": step.state,
          children: [/*#__PURE__*/_jsx("span", {
            role: "img",
            "aria-label": step.state ?? "Step",
            children: step.icon ?? (step.state === "complete" ? "✓" : active ? "◉" : "○")
          }), /*#__PURE__*/_jsxs("div", {
            ...rs(["rs-thought-steps-detail"], styles.detail),
            children: [/*#__PURE__*/_jsx("div", {
              ...rs(["rs-thought-steps-title", active && "rs-thought-steps-active"], styles.title, active && styles.active),
              children: step.title
            }), step.description && /*#__PURE__*/_jsx("div", {
              children: step.description
            }), step.content, step.sources && /*#__PURE__*/_jsx("div", {
              ...rs(["rs-thought-steps-sources"], styles.sources),
              children: step.sources
            }), step.image && /*#__PURE__*/_jsxs("figure", {
              ...rs(["rs-thought-steps-figure"], styles.figure),
              children: [step.image, step.caption && /*#__PURE__*/_jsx("figcaption", {
                ...rs(["rs-thought-steps-caption"], styles.caption),
                children: step.caption
              })]
            })]
          })]
        }, step.id);
      })
    }), children]
  });
});
//# sourceMappingURL=thought-steps.js.map
