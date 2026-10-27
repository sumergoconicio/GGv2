"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { ToolCall } from "./tool-call.js";
import { CodeBlock } from "./code-block.js";
import { Tabs, TabList, Tab, TabPanel } from "./tabs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k7Eaqz: "xeuugli",
    $$css: true
  },
  content: {
    k7Eaqz: "xeuugli",
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  output: {
    kogj98: "x1ghz6dp",
    khDVqt: "x126k92a",
    kHjlTd: "xj0a0fe",
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    kMv6JI: "x1mb2qyg",
    $$css: true
  }
};

/** A code/output disclosure. Execution and process isolation remain application-owned. */
export const Sandbox = /*#__PURE__*/React.forwardRef(function Sandbox({
  code,
  language = "Text",
  output,
  codeContent,
  tab,
  defaultTab = "code",
  onTabChange,
  defaultOpen = true,
  children,
  className,
  style,
  ...props
}, ref) {
  const root = rs(["rs-sandbox", className], styles.root);
  const content = rs(["rs-sandbox-content"], styles.content);
  const outputStyle = rs(["rs-sandbox-output"], styles.output);
  return /*#__PURE__*/_jsxs(ToolCall, {
    ...props,
    ref: ref,
    defaultOpen: defaultOpen,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsxs(Tabs, {
      ...content,
      value: tab,
      defaultValue: defaultTab,
      onValueChange: value => onTabChange?.(value),
      children: [/*#__PURE__*/_jsxs(TabList, {
        "aria-label": "Sandbox content",
        children: [/*#__PURE__*/_jsx(Tab, {
          value: "code",
          children: "Code"
        }), /*#__PURE__*/_jsx(Tab, {
          value: "output",
          children: "Output"
        })]
      }), /*#__PURE__*/_jsx(TabPanel, {
        value: "code",
        children: codeContent ?? /*#__PURE__*/_jsx(CodeBlock, {
          code: code,
          language: language
        })
      }), /*#__PURE__*/_jsx(TabPanel, {
        value: "output",
        children: typeof output === "string" || typeof output === "number" ? /*#__PURE__*/_jsx("pre", {
          ...outputStyle,
          children: output
        }) : output ?? /*#__PURE__*/_jsx("p", {
          children: "No output supplied."
        })
      })]
    }), children]
  });
});
//# sourceMappingURL=sandbox.js.map
