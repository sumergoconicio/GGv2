"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    kogj98: "x1ghz6dp",
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kMwMTN: "x1gney9c",
    kWkggS: "xhpg8l3",
    $$css: true
  },
  header: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x6s0dn4",
    kjj79g: "x1qughib",
    kOIVth: "x13z6uf9",
    kmVPX3: "x79iv2k",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  pre: {
    kogj98: "x1ghz6dp",
    kXHlph: "xw2csxc",
    kmVPX3: "x1uz70x1",
    kMv6JI: "x1mb2qyg",
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    kKi2Bq: "xeq4nuv",
    kjBf7l: "xqbrbdq",
    kInvED: "x2ssjo2",
    $$css: true
  },
  wrap: {
    khDVqt: "x126k92a",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  line: {
    k1xSpc: "x1lliihq",
    kAzted: "x1d7w4ry",
    $$css: true
  },
  number: {
    k1xSpc: "x1rg5ohu",
    kfSwDN: "x87ps6o",
    kMwMTN: "x1ixqp2s",
    k7Eaqz: "x1lzn4hl",
    k71WvV: "xd7xmks",
    k9WMMc: "xp4054r",
    $$css: true
  },
  status: {
    kGuDYH: "xkpwil5",
    kMwMTN: "x1ixqp2s",
    $$css: true
  }
};

/** Plain source with optional numbering and honest asynchronous copy feedback. */
export const CodeBlock = /*#__PURE__*/React.forwardRef(function CodeBlock({
  code,
  language = "Text",
  lineNumbers = false,
  wrap = false,
  copyable = true,
  onCopyCode,
  className,
  style,
  ...props
}, ref) {
  const [copyState, setCopyState] = React.useState("idle");
  const request = React.useRef(0);
  React.useEffect(() => {
    request.current++;
    setCopyState("idle");
    return () => {
      request.current++;
    };
  }, [code]);
  const copy = async () => {
    const id = ++request.current;
    setCopyState("pending");
    try {
      if (onCopyCode) await onCopyCode(code);else await navigator.clipboard.writeText(code);
      if (id === request.current) setCopyState("done");
    } catch {
      if (id === request.current) setCopyState("error");
    }
  };
  const root = rs(["rs-code-block", className], styles.root);
  const header = rs(["rs-code-block-header"], styles.header);
  const pre = rs(["rs-code-block-pre", wrap && "rs-code-block-wrap"], styles.pre, wrap && styles.wrap);
  const line = rs(["rs-code-block-line"], styles.line);
  const number = rs(["rs-code-block-number"], styles.number);
  const status = rs(["rs-code-block-status"], styles.status);
  const lines = code.split("\n");
  return /*#__PURE__*/_jsxs("figure", {
    ref: ref,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsxs("figcaption", {
      ...header,
      children: [/*#__PURE__*/_jsx("span", {
        children: language
      }), copyable && /*#__PURE__*/_jsx(Button, {
        variant: "ghost",
        disabled: copyState === "pending",
        onClick: copy,
        children: copyState === "done" ? "Copied" : copyState === "pending" ? "Copying" : "Copy code"
      }), /*#__PURE__*/_jsx("span", {
        ...status,
        role: "status",
        children: copyState === "error" ? "Could not copy. Select and copy the code." : copyState === "done" ? "Code copied" : ""
      })]
    }), /*#__PURE__*/_jsx("pre", {
      ...pre,
      tabIndex: 0,
      "aria-label": `${language} source`,
      children: /*#__PURE__*/_jsx("code", {
        children: lineNumbers ? lines.map((text, index) => /*#__PURE__*/_jsxs("span", {
          ...line,
          children: [/*#__PURE__*/_jsx("span", {
            ...number,
            "aria-hidden": "true",
            children: index + 1
          }), text, index < lines.length - 1 ? "\n" : ""]
        }, `${index}:${text}`)) : code
      })
    })]
  });
});
//# sourceMappingURL=code-block.js.map
