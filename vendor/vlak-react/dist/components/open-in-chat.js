"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Collapsible } from "./collapsible.js";
import { sourceHref } from "./sources.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const names = {
  chatgpt: "ChatGPT",
  claude: "Claude",
  cursor: "Cursor",
  scira: "Scira",
  t3: "T3 Chat",
  v0: "v0",
  github: "GitHub"
};

/** Builds provider handoff links without contacting providers or submitting a conversation. */
export function openInChatHref(provider, prompt, githubUrl) {
  switch (provider) {
    case "chatgpt":
      return `https://chatgpt.com/?${new URLSearchParams({
        hints: "search",
        prompt
      })}`;
    case "claude":
      return `https://claude.ai/new?${new URLSearchParams({
        q: prompt
      })}`;
    case "cursor":
      return `https://cursor.com/link/prompt?${new URLSearchParams({
        text: prompt
      })}`;
    case "scira":
      return `https://scira.ai/?${new URLSearchParams({
        q: prompt
      })}`;
    case "t3":
      return `https://t3.chat/new?${new URLSearchParams({
        q: prompt
      })}`;
    case "v0":
      return `https://v0.app/?${new URLSearchParams({
        q: prompt
      })}`;
    case "github":
      return githubUrl ? sourceHref(githubUrl) : undefined;
  }
}
const styles = {
  root: {
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  list: {
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    kH6xsr: "x3ct3a4",
    k1xSpc: "xrvj5dj",
    kOIVth: "xxhr3t",
    $$css: true
  },
  link: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kjj79g: "x1qughib",
    kOIVth: "x8fetqu",
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kMwMTN: "x1ixqp2s xcfh57o",
    kGuDYH: "x1jq7itm",
    kLWn49: "xfrs9s4",
    kybGjl: "x1hl2dhg",
    kg3NbH: "x97vtpp",
    kaIpWk: "xkrxur",
    kPJHz1: "x784prv",
    k7shQP: "x9v5kkp",
    kZs9gx: "x14tvtkk",
    kiEn40: "x1bqaal",
    $$css: true
  },
  note: {
    kogj98: "xbquzhq",
    kGuDYH: "x4ro2ui",
    kLWn49: "xfrs9s4",
    kMwMTN: "x1ixqp2s",
    $$css: true
  }
};

/** Explicit provider links for a supplied prompt. Nothing leaves the page until a link is activated. */
export const OpenInChat = /*#__PURE__*/React.forwardRef(function OpenInChat({
  prompt,
  providers = ["chatgpt", "claude", "cursor", "scira", "t3", "v0"],
  githubUrl,
  label = "Open in chat",
  defaultOpen = false,
  className,
  style,
  ...props
}, ref) {
  const root = rs(["rs-open-in-chat", className], styles.root);
  const list = rs(["rs-open-in-chat-list"], styles.list);
  const link = rs(["rs-open-in-chat-link"], styles.link);
  const note = rs(["rs-open-in-chat-note"], styles.note);
  const links = Array.from(new Set(providers)).flatMap(provider => {
    const href = openInChatHref(provider, prompt, githubUrl);
    return href ? [{
      provider,
      href
    }] : [];
  });
  return /*#__PURE__*/_jsxs(Collapsible, {
    ...props,
    ref: ref,
    title: label,
    defaultOpen: defaultOpen,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("ul", {
      ...list,
      children: links.map(({
        provider,
        href
      }) => /*#__PURE__*/_jsx("li", {
        children: /*#__PURE__*/_jsxs("a", {
          ...link,
          href: href,
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": `Open in ${names[provider]} (new tab)`,
          children: [/*#__PURE__*/_jsx("span", {
            children: names[provider]
          }), /*#__PURE__*/_jsx("span", {
            "aria-hidden": "true",
            children: "\u2197"
          })]
        })
      }, provider))
    }), /*#__PURE__*/_jsx("p", {
      ...note,
      children: links.length ? "Choose a provider to open the supplied prompt in a new tab." : "No provider links available."
    })]
  });
});
//# sourceMappingURL=open-in-chat.js.map
