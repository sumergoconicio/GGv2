"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
const theme = {
  name: "vlak-monochrome",
  type: "light",
  colors: {
    "editor.foreground": "#111111",
    "editor.background": "#ffffff"
  },
  tokenColors: [{
    scope: ["comment", "punctuation.definition.comment"],
    settings: {
      foreground: "#555555",
      fontStyle: "italic"
    }
  }, {
    scope: ["keyword", "storage", "entity.name.tag"],
    settings: {
      foreground: "#111111",
      fontStyle: "bold"
    }
  }]
};
let highlighter;
const cache = new Map();
const MAX_CACHE_ENTRIES = 24;
const MAX_SOURCE_LENGTH = 100_000;
async function highlight(code, language) {
  if (code.length > MAX_SOURCE_LENGTH) return null;
  const key = JSON.stringify([language, code]);
  const found = cache.get(key);
  if (found) {
    cache.delete(key);
    cache.set(key, found);
    return found;
  }
  const shiki = await import("shiki");
  if (!Object.hasOwn(shiki.bundledLanguages, language)) return null;
  if (!highlighter) highlighter = shiki.createHighlighter({
    langs: [],
    themes: [theme]
  }).catch(error => {
    highlighter = undefined;
    throw error;
  });
  const renderer = await highlighter;
  const grammar = shiki.bundledLanguages[language];
  if (!renderer.getLoadedLanguages().includes(language)) await renderer.loadLanguage(grammar);
  const tokens = renderer.codeToTokens(code, {
    lang: language,
    theme: "vlak-monochrome"
  }).tokens;
  // Never allow a highlighter result to change the supplied source.
  if (tokens.map(line => line.map(token => token.content).join("")).join("\n") !== code.replace(/\r\n/g, "\n")) return null;
  cache.set(key, tokens);
  while (cache.size > MAX_CACHE_ENTRIES) cache.delete(cache.keys().next().value);
  return tokens;
}
const styles = {
  root: {
    kogj98: "xbkgn1r",
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kVQacm: "xb3r6kr",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kaIpWk: "xkrxur",
    kMwMTN: "x1gney9c",
    kWkggS: "xhpg8l3",
    $$css: true
  },
  header: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x6s0dn4",
    kOIVth: "x13z6uf9",
    kmVPX3: "x1hluc2t",
    kAzted: "x1gg8mnh",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  language: {
    kUk6DE: "x12lumcd",
    kMv6JI: "x1mb2qyg",
    kGuDYH: "x1dcheo9",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kOIVth: "x1enigpx",
    $$css: true
  },
  action: {
    kzqmXN: "x187nhsf",
    k7Eaqz: "x1nb6za0",
    ks0D6T: "x1k2d6hx",
    kZKoxP: "xn3w4p2",
    kmVPX3: "x1717udv",
    kmuXW: "x2lah0s",
    $$css: true
  },
  icon: {
    kzqmXN: "x1kky2od",
    kZKoxP: "xlup9mm",
    k1xSpc: "x1lliihq",
    $$css: true
  },
  pre: {
    kogj98: "x1ghz6dp",
    kVQacm: "xysyzu8",
    kmVPX3: "x1uz70x1",
    kMv6JI: "x1mb2qyg",
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    kKi2Bq: "xeq4nuv",
    khDVqt: "x1sdyfia",
    kMeerF: "x1k57tk5 x784prv",
    k3XXqK: "xaatb59",
    kjBf7l: "xqbrbdq",
    kInvED: "x2ssjo2",
    $$css: true
  },
  line: {
    k1xSpc: "x1lliihq",
    kAzted: "x1d7w4ry",
    $$css: true
  },
  number: {
    k1xSpc: "x1rg5ohu",
    k7Eaqz: "x1lzn4hl",
    k71WvV: "xd7xmks",
    k9WMMc: "xp4054r",
    kfSwDN: "x87ps6o",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  token: {
    kMwMTN: "x1gney9c",
    $$css: true
  },
  muted: {
    kMwMTN: "x1ixqp2s x1sy4l04",
    $$css: true
  },
  bold: {
    k63SB2: "x1s688f",
    $$css: true
  },
  italic: {
    kKX8nH: "x1k4tb9n",
    $$css: true
  },
  status: {
    kogj98: "x1ghz6dp",
    kmVPX3: "xz6y9s0",
    kGuDYH: "x1dcheo9",
    kMwMTN: "x1ixqp2s",
    $$css: true
  }
};

/** Optional Shiki renderer with lazy grammars, monochrome tokens, and exact-source copy. */
export const HighlightedCode = /*#__PURE__*/React.forwardRef(function HighlightedCode({
  code,
  language = "text",
  streaming = false,
  lineNumbers = false,
  maxHeight = 400,
  copyable = true,
  downloadable = true,
  filename = "code.txt",
  onCopyCode,
  className,
  style,
  ...props
}, ref) {
  const normalizedLanguage = language.trim().toLowerCase() || "text";
  const [highlighted, setHighlighted] = React.useState(null);
  const [copyState, setCopyState] = React.useState("idle");
  const version = React.useRef(0);
  React.useEffect(() => {
    let cancelled = false;
    if (!streaming) void highlight(code, normalizedLanguage).then(tokens => {
      if (!cancelled && tokens) setHighlighted({
        code,
        language: normalizedLanguage,
        tokens
      });
    }).catch(() => {/* Plain source remains available if a grammar cannot load. */});
    return () => {
      cancelled = true;
    };
  }, [code, normalizedLanguage, streaming]);
  // biome-ignore lint/correctness/useExhaustiveDependencies: A new source invalidates pending clipboard feedback.
  React.useEffect(() => {
    version.current++;
    setCopyState("idle");
    return () => {
      version.current++;
    };
  }, [code]);
  const copy = async () => {
    if (copyState === "pending") return;
    const request = ++version.current;
    setCopyState("pending");
    try {
      if (onCopyCode) await onCopyCode(code);else await navigator.clipboard.writeText(code);
      if (request === version.current) setCopyState("done");
    } catch {
      if (request === version.current) setCopyState("error");
    }
  };
  const download = () => {
    const url = URL.createObjectURL(new Blob([code], {
      type: "text/plain;charset=utf-8"
    }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
  };
  const root = rs(["rs-highlighted-code", className], styles.root);
  const header = rs(["rs-highlighted-code-header"], styles.header);
  const languageStyle = rs(["rs-highlighted-code-language"], styles.language);
  const actions = rs(["rs-highlighted-code-actions"], styles.actions);
  const action = rs(["rs-highlighted-code-action"], styles.action);
  const icon = rs(["rs-highlighted-code-icon"], styles.icon);
  const pre = rs(["rs-highlighted-code-pre"], styles.pre);
  const lineStyle = rs(["rs-highlighted-code-line"], styles.line);
  const number = rs(["rs-highlighted-code-number"], styles.number);
  const status = rs(["rs-highlighted-code-status"], styles.status);
  const tokens = !streaming && highlighted?.code === code && highlighted.language === normalizedLanguage ? highlighted.tokens : null;
  const lines = tokens ?? code.split("\n").map(content => [{
    content,
    fontStyle: 0,
    color: "#111111"
  }]);
  return /*#__PURE__*/_jsxs("figure", {
    ...props,
    ref: ref,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    "data-highlighted": Boolean(tokens),
    children: [/*#__PURE__*/_jsxs("figcaption", {
      ...header,
      children: [/*#__PURE__*/_jsx("span", {
        ...languageStyle,
        children: normalizedLanguage
      }), /*#__PURE__*/_jsxs("span", {
        ...actions,
        children: [copyable && /*#__PURE__*/_jsx(Button, {
          ...action,
          variant: "subtle",
          "aria-label": "Copy code",
          title: "Copy code",
          disabled: copyState === "pending",
          onClick: () => void copy(),
          children: /*#__PURE__*/_jsxs("svg", {
            ...icon,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            "aria-hidden": "true",
            children: [/*#__PURE__*/_jsx("rect", {
              x: "8",
              y: "8",
              width: "12",
              height: "12",
              rx: "2"
            }), /*#__PURE__*/_jsx("path", {
              d: "M16 8V4H4v12h4"
            })]
          })
        }), downloadable && /*#__PURE__*/_jsx(Button, {
          ...action,
          variant: "subtle",
          "aria-label": "Download code",
          title: "Download code",
          onClick: download,
          children: /*#__PURE__*/_jsx("svg", {
            ...icon,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            "aria-hidden": "true",
            children: /*#__PURE__*/_jsx("path", {
              d: "M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"
            })
          })
        })]
      })]
    }), /*#__PURE__*/_jsx("pre", {
      ...pre,
      style: {
        ...pre.style,
        maxHeight: Number.isFinite(maxHeight) ? Math.max(44, maxHeight) : 400
      },
      tabIndex: 0,
      role: "group",
      "aria-label": `${normalizedLanguage} source`,
      dir: "ltr",
      children: /*#__PURE__*/_jsx("code", {
        children: lines.map((line, index) => /*#__PURE__*/_createElement("span", {
          ...lineStyle,
          key: index
        }, lineNumbers && /*#__PURE__*/_jsx("span", {
          ...number,
          "aria-hidden": "true",
          children: index + 1
        }), line.map((token, tokenIndex) => {
          const fontStyle = token.fontStyle ?? 0;
          const muted = token.color?.toLowerCase() === "#555555";
          const sx = rs(["rs-highlighted-code-token", muted && "rs-highlighted-code-muted", Boolean(fontStyle & 2) && "rs-highlighted-code-bold", Boolean(fontStyle & 1) && "rs-highlighted-code-italic"], styles.token, muted && styles.muted, Boolean(fontStyle & 2) && styles.bold, Boolean(fontStyle & 1) && styles.italic);
          return /*#__PURE__*/_createElement("span", {
            ...sx,
            key: tokenIndex
          }, token.content);
        }), index < lines.length - 1 ? "\n" : ""))
      })
    }), /*#__PURE__*/_jsx("p", {
      ...status,
      role: "status",
      children: copyState === "done" ? "Code copied" : copyState === "error" ? "Could not copy. Select and copy the source." : ""
    })]
  });
});
//# sourceMappingURL=highlighted-code.js.map
