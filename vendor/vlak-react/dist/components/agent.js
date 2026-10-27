"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Badge } from "./badge.js";
import { Collapsible } from "./collapsible.js";
import { CodeBlock } from "./code-block.js";
import { JSONViewer } from "./json-viewer.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k7Eaqz: "xeuugli",
    kzqmXN: "xh8yej3",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j xz1l38o",
    kaIpWk: "xkrxur",
    kMwMTN: "x1gney9c",
    kWkggS: "xhpg8l3",
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  header: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x6s0dn4",
    kOIVth: "x8233eu",
    kmVPX3: "x1uz70x1",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  title: {
    k63SB2: "x1s688f",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  content: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8fetqu",
    kmVPX3: "x1uz70x1",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  section: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  label: {
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    k63SB2: "x1s688f",
    $$css: true
  },
  instructions: {
    khDVqt: "x126k92a",
    kHjlTd: "xj0a0fe",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  description: {
    kMwMTN: "x1ixqp2s",
    kogj98: "x1szienq",
    kHjlTd: "xj0a0fe",
    $$css: true
  }
};

/** Inspect agent configuration without instantiating tools or executing instructions. */
export const Agent = /*#__PURE__*/React.forwardRef(function Agent({
  name,
  model,
  instructions,
  tools = [],
  outputSchema,
  renderSchema,
  children,
  className,
  style,
  ...props
}, ref) {
  const root = rs(["rs-agent", className], styles.root);
  const header = rs(["rs-agent-header"], styles.header);
  const title = rs(["rs-agent-title"], styles.title);
  const content = rs(["rs-agent-content"], styles.content);
  const section = rs(["rs-agent-section"], styles.section);
  const label = rs(["rs-agent-label"], styles.label);
  const instructionsStyle = rs(["rs-agent-instructions"], styles.instructions);
  const description = rs(["rs-agent-description"], styles.description);
  const schema = (value, context) => renderSchema ? renderSchema(value, context) : typeof value === "string" ? /*#__PURE__*/_jsx(CodeBlock, {
    code: value,
    language: context === "output" ? "TypeScript" : "JSON"
  }) : /*#__PURE__*/_jsx(JSONViewer, {
    data: value,
    label: `${context === "input" ? "Input" : "Output"} schema`,
    searchable: false
  });
  return /*#__PURE__*/_jsxs("article", {
    "aria-label": `Agent ${name}`,
    ...props,
    ref: ref,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsxs("header", {
      ...header,
      children: [/*#__PURE__*/_jsx("span", {
        ...title,
        children: name
      }), model && /*#__PURE__*/_jsx(Badge, {
        variant: "muted",
        children: model
      })]
    }), /*#__PURE__*/_jsxs("div", {
      ...content,
      children: [instructions != null && /*#__PURE__*/_jsxs("div", {
        ...section,
        children: [/*#__PURE__*/_jsx("span", {
          ...label,
          children: "Instructions"
        }), /*#__PURE__*/_jsx("div", {
          ...instructionsStyle,
          children: instructions
        })]
      }), tools.length > 0 && /*#__PURE__*/_jsxs("div", {
        ...section,
        children: [/*#__PURE__*/_jsxs("span", {
          ...label,
          children: ["Tools (", tools.length, ")"]
        }), tools.map(tool => /*#__PURE__*/_jsxs(Collapsible, {
          title: tool.name,
          children: [tool.description && /*#__PURE__*/_jsx("p", {
            ...description,
            children: tool.description
          }), tool.inputSchema !== undefined ? schema(tool.inputSchema, "input") : /*#__PURE__*/_jsx("p", {
            ...description,
            children: "No input schema supplied."
          })]
        }, tool.name))]
      }), outputSchema !== undefined && /*#__PURE__*/_jsxs("div", {
        ...section,
        children: [/*#__PURE__*/_jsx("span", {
          ...label,
          children: "Output schema"
        }), schema(outputSchema, "output")]
      }), children]
    })]
  });
});
//# sourceMappingURL=agent.js.map
