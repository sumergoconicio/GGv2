"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Collapsible } from "./collapsible.js";
import { Refs, RefItem } from "./refs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/** External web addresses and document-relative references; executable URL schemes are omitted. */
export function sourceHref(value) {
  const input = value.trim();
  if (!input || Array.from(input).some(character => character.charCodeAt(0) < 32 || character.charCodeAt(0) === 127)) return undefined;
  try {
    const url = new URL(input, "https://vlak.invalid");
    return url.protocol === "https:" || url.protocol === "http:" ? input : undefined;
  } catch {
    return undefined;
  }
}
const styles = {
  root: {
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  list: {
    kZCmMZ: "xjh29tw",
    $$css: true
  },
  link: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kAzted: "x1wszdd",
    k7Eaqz: "xtp0tkc",
    kMwMTN: "x1ixqp2s xcfh57o",
    kybGjl: "x1bvjpef",
    kcSHmL: "xda060z",
    kHjlTd: "xj0a0fe",
    kPJHz1: "x784prv",
    k7shQP: "x9v5kkp",
    kZs9gx: "x14tvtkk",
    kiEn40: "x7s97pk",
    $$css: true
  },
  description: {
    kogj98: "x12yysl2",
    kGuDYH: "x4ro2ui",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  quote: {
    kogj98: "xbquzhq",
    kmVPX3: "x79iv2k",
    kWkggS: "x1nzd1wa",
    kaIpWk: "xkrxur",
    kMwMTN: "x1gney9c",
    kGuDYH: "x1jq7itm",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  empty: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x1jq7itm",
    kMwMTN: "x1ixqp2s",
    kLWn49: "xfrs9s4",
    $$css: true
  }
};

/** A counted native disclosure of application-supplied source links and optional quotes. */
export const Sources = /*#__PURE__*/React.forwardRef(function Sources({
  sources,
  label = "Sources",
  defaultOpen = false,
  className,
  style,
  ...props
}, ref) {
  const root = rs(["rs-sources", className], styles.root);
  const list = rs(["rs-sources-list"], styles.list);
  const link = rs(["rs-sources-link"], styles.link);
  const description = rs(["rs-sources-description"], styles.description);
  const quote = rs(["rs-sources-quote"], styles.quote);
  const empty = rs(["rs-sources-empty"], styles.empty);
  return /*#__PURE__*/_jsx(Collapsible, {
    ...props,
    ref: ref,
    title: `${label} (${sources.length})`,
    defaultOpen: defaultOpen,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: sources.length ? /*#__PURE__*/_jsx(Refs, {
      ...list,
      children: sources.map(source => /*#__PURE__*/_jsxs(RefItem, {
        children: [sourceHref(source.url) ? /*#__PURE__*/_jsxs("a", {
          ...link,
          href: sourceHref(source.url),
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": `${source.title} (new tab)`,
          children: [source.title, /*#__PURE__*/_jsx("span", {
            "aria-hidden": "true",
            children: " \u2197"
          })]
        }) : /*#__PURE__*/_jsx("span", {
          children: source.title
        }), source.description && /*#__PURE__*/_jsx("p", {
          ...description,
          children: source.description
        }), source.quote && /*#__PURE__*/_jsx("blockquote", {
          ...quote,
          children: source.quote
        })]
      }, source.id))
    }) : /*#__PURE__*/_jsx("p", {
      ...empty,
      children: "No sources supplied."
    })
  });
});
//# sourceMappingURL=sources.js.map
