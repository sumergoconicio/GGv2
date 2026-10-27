"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { SnippetCopy } from "./snippet.js";
import { appendTerminalOutput, createTerminalParser } from "./terminal-parser.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const blink = "x15vzr4w-B";
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
    kOIVth: "x13z6uf9",
    kmVPX3: "xu8om6g",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  title: {
    k63SB2: "x1s688f",
    kUk6DE: "x12lumcd",
    $$css: true
  },
  status: {
    kMwMTN: "x1ixqp2s",
    kGuDYH: "xboafo0",
    kogj98: "x1ghz6dp",
    $$css: true
  },
  content: {
    kmVPX3: "x1uz70x1",
    kVQacm: "xysyzu8",
    kjBf7l: "xqbrbdq",
    kInvED: "x2ssjo2",
    $$css: true
  },
  pre: {
    kogj98: "x1ghz6dp",
    khDVqt: "x126k92a",
    kHjlTd: "xj0a0fe",
    kMv6JI: "x1mb2qyg",
    $$css: true
  },
  run: {
    kMwMTN: "x1heor9g",
    "--terminal-foreground": "x116x214",
    "--terminal-background": "x19m4k2d",
    $$css: true
  },
  bold: {
    k63SB2: "x1xlr1w8",
    $$css: true
  },
  dim: {
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  italic: {
    kKX8nH: "x1k4tb9n",
    $$css: true
  },
  underline: {
    kMnn75: "xujl8zx",
    $$css: true
  },
  strike: {
    kMnn75: "x5lhwog",
    $$css: true
  },
  underlineStrike: {
    kMnn75: "x9s6jxr",
    $$css: true
  },
  inverse: {
    kMwMTN: "x19rmm7l x1pljmm8",
    kWkggS: "xmgn9m6 xf7h6k7",
    $$css: true
  },
  colors: {
    kMwMTN: "x1ukisvl x1sy4l04",
    kWkggS: "x1vz3u1i x18t4had",
    $$css: true
  },
  cursor: {
    k1xSpc: "x1rg5ohu",
    kzqmXN: "x1jjc1wv",
    kZKoxP: "xlzyvqe",
    kWkggS: "xmgn9m6",
    kXLuUW: "x1uuroth",
    keTefX: "x1j9pc4w",
    kKVMdj: "xebsxc1 xmmch59",
    k44tkh: "xemfg65",
    kILWW9: "xpz12be",
    ko0y90: "xa4qsjk",
    $$css: true
  },
  footer: {
    kmVPX3: "xpixsg9",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "xboafo0",
    $$css: true
  }
};

/** Streaming console output with incremental ANSI attributes; not a shell or terminal emulator. */
export const Terminal = /*#__PURE__*/React.forwardRef(function Terminal({
  output,
  title = "Terminal",
  streaming = false,
  autoScroll = true,
  ansiColors = false,
  onClear,
  onCopy,
  maxHeight = "24rem",
  maxCharacters = 100000,
  className,
  style,
  children,
  ...props
}, ref) {
  const cache = React.useRef({
    source: "",
    parsed: createTerminalParser()
  });
  const contentRef = React.useRef(null);
  const following = React.useRef(true);
  const [atEnd, setAtEnd] = React.useState(true);
  const budget = Number.isFinite(maxCharacters) ? Math.min(2000000, Math.max(100, Math.floor(maxCharacters))) : 100000;
  const source = output.slice(-budget);
  const parsed = React.useMemo(() => {
    const previous = cache.current;
    const append = source.startsWith(previous.source);
    const next = appendTerminalOutput(append ? previous.parsed : createTerminalParser(), append ? source.slice(previous.source.length) : source);
    cache.current = {
      source,
      parsed: next
    };
    return next;
  }, [source]);
  // biome-ignore lint/correctness/useExhaustiveDependencies: New output requests follow-scroll only while the reader is at the end.
  React.useEffect(() => {
    if (autoScroll && following.current && contentRef.current) contentRef.current.scrollTop = contentRef.current.scrollHeight;
  }, [output, autoScroll]);
  const root = rs(["rs-terminal", className], styles.root);
  const header = rs(["rs-terminal-header"], styles.header);
  const titleStyle = rs(["rs-terminal-title"], styles.title);
  const status = rs(["rs-terminal-status"], styles.status);
  const content = rs(["rs-terminal-content"], styles.content);
  const pre = rs(["rs-terminal-pre"], styles.pre);
  const cursor = rs(["rs-terminal-cursor"], styles.cursor);
  const footer = rs(["rs-terminal-footer"], styles.footer);
  return /*#__PURE__*/_jsxs("section", {
    "aria-label": typeof title === "string" ? title : "Terminal output",
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
        ...titleStyle,
        children: title
      }), /*#__PURE__*/_jsx("span", {
        ...status,
        role: "status",
        children: streaming ? "Streaming" : "Output complete"
      }), /*#__PURE__*/_jsx(SnippetCopy, {
        value: output,
        label: "Copy terminal output",
        onCopy: onCopy
      }), onClear && /*#__PURE__*/_jsx(Button, {
        type: "button",
        variant: "subtle",
        onClick: onClear,
        children: "Clear"
      }), !atEnd && autoScroll && /*#__PURE__*/_jsx(Button, {
        type: "button",
        variant: "subtle",
        onClick: () => {
          following.current = true;
          setAtEnd(true);
          if (contentRef.current) contentRef.current.scrollTop = contentRef.current.scrollHeight;
        },
        children: "Latest output"
      })]
    }), /*#__PURE__*/_jsx("div", {
      ref: contentRef,
      className: content.className,
      style: {
        ...content.style,
        maxHeight
      },
      tabIndex: 0,
      role: "group",
      "aria-label": "Terminal output",
      onScroll: event => {
        const node = event.currentTarget;
        following.current = node.scrollHeight - node.scrollTop - node.clientHeight < 24;
        setAtEnd(following.current);
      },
      children: /*#__PURE__*/_jsxs("pre", {
        ...pre,
        children: [parsed.runs.map((run, index) => {
          const sx = rs(["rs-terminal-run", run.bold && "rs-terminal-bold", run.dim && "rs-terminal-dim", run.italic && "rs-terminal-italic", run.underline && "rs-terminal-underline", run.strike && "rs-terminal-strike", run.underline && run.strike && "rs-terminal-underline-strike", run.inverse && "rs-terminal-inverse", ansiColors && "rs-terminal-colors"], styles.run, run.bold && styles.bold, run.dim && styles.dim, run.italic && styles.italic, run.underline && styles.underline, run.strike && styles.strike, run.underline && run.strike && styles.underlineStrike, run.inverse && styles.inverse, ansiColors && styles.colors);
          const dynamic = ansiColors ? {
            "--terminal-foreground": run.inverse ? run.background ?? "var(--bg)" : run.foreground,
            "--terminal-background": run.inverse ? run.foreground ?? "var(--text)" : run.background
          } : undefined;
          return /*#__PURE__*/_jsx("span", {
            className: sx.className,
            style: {
              ...sx.style,
              ...dynamic
            },
            children: run.text
          }, index);
        }), streaming && /*#__PURE__*/_jsx("span", {
          ...cursor,
          "aria-hidden": "true"
        })]
      })
    }), output.length > budget && /*#__PURE__*/_jsx("div", {
      ...footer,
      children: "Earlier output omitted. Copy includes the complete source."
    }), children]
  });
});
//# sourceMappingURL=terminal.js.map
