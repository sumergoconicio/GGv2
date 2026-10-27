"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Badge } from "./badge.js";
import { Button } from "./button.js";
import { Collapsible } from "./collapsible.js";
import { SnippetCopy } from "./snippet.js";
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
    kmVPX3: "x19btat0",
    $$css: true
  },
  heading: {
    k1xSpc: "xrvj5dj",
    kOIVth: "xvh977a",
    k7Eaqz: "xeuugli",
    kUk6DE: "x12lumcd",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  message: {
    k63SB2: "x1s688f",
    $$css: true
  },
  metadata: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x6s0dn4",
    kOIVth: "x13z6uf9",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "xboafo0",
    $$css: true
  },
  content: {
    kmVPX3: "x19s2kg",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  list: {
    kB88ic: "xe8uvvx",
    kmVPX3: "x1717udv",
    kogj98: "x1ghz6dp",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  file: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x6s0dn4",
    kOIVth: "x13z6uf9",
    k7Eaqz: "xeuugli",
    k8WAf4: "x18g2hj5",
    kEafiO: "x1ro6g4h",
    kPef9Z: "x13fuv20",
    kLZC3w: "x1fq36pv",
    $$css: true
  },
  path: {
    k7Eaqz: "xeuugli",
    kUk6DE: "x12lumcd",
    kHjlTd: "xj0a0fe",
    kMv6JI: "x1mb2qyg",
    k9WMMc: "x1yc453h",
    $$css: true
  },
  count: {
    kMwMTN: "x1ixqp2s",
    kGuDYH: "xboafo0",
    kcqcaj: "xss6m8b",
    $$css: true
  }
};

/** Supplied commit metadata and changed files with exact hash copy and optional file navigation. */
export const Commit = /*#__PURE__*/React.forwardRef(function Commit({
  hash,
  message,
  author,
  avatar,
  timestamp,
  timeLabel,
  files = [],
  defaultOpen = false,
  onFileSelect,
  onCopy,
  children,
  className,
  style,
  ...props
}, ref) {
  const parsed = timestamp == null ? undefined : new Date(timestamp);
  const iso = parsed && Number.isFinite(parsed.getTime()) ? parsed.toISOString() : undefined;
  const root = rs(["rs-commit", className], styles.root);
  const header = rs(["rs-commit-header"], styles.header);
  const heading = rs(["rs-commit-heading"], styles.heading);
  const messageStyle = rs(["rs-commit-message"], styles.message);
  const metadata = rs(["rs-commit-metadata"], styles.metadata);
  const content = rs(["rs-commit-content"], styles.content);
  const list = rs(["rs-commit-list"], styles.list);
  const fileStyle = rs(["rs-commit-file"], styles.file);
  const path = rs(["rs-commit-path"], styles.path);
  const count = rs(["rs-commit-count"], styles.count);
  return /*#__PURE__*/_jsxs("article", {
    "aria-label": `Commit ${hash.slice(0, 7)}`,
    ...props,
    ref: ref,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsxs("header", {
      ...header,
      children: [avatar, /*#__PURE__*/_jsxs("div", {
        ...heading,
        children: [/*#__PURE__*/_jsx("span", {
          ...messageStyle,
          children: message
        }), /*#__PURE__*/_jsxs("div", {
          ...metadata,
          children: [/*#__PURE__*/_jsx("code", {
            children: hash.slice(0, 7)
          }), author, iso && /*#__PURE__*/_jsx("time", {
            dateTime: iso,
            children: timeLabel ?? iso.replace("T", " ").slice(0, 16) + " UTC"
          })]
        })]
      }), /*#__PURE__*/_jsx(SnippetCopy, {
        value: hash,
        label: "Copy commit hash",
        onCopy: onCopy
      })]
    }), /*#__PURE__*/_jsxs("div", {
      ...content,
      children: [/*#__PURE__*/_jsxs(Collapsible, {
        title: `${files.length} changed ${files.length === 1 ? "file" : "files"}`,
        defaultOpen: defaultOpen,
        children: [/*#__PURE__*/_jsx("ul", {
          ...list,
          children: files.map(file => /*#__PURE__*/_jsxs("li", {
            ...fileStyle,
            children: [/*#__PURE__*/_jsx(Badge, {
              variant: "muted",
              children: file.status
            }), onFileSelect ? /*#__PURE__*/_jsx(Button, {
              ...path,
              type: "button",
              variant: "subtle",
              onClick: () => onFileSelect(file),
              children: file.path
            }) : /*#__PURE__*/_jsx("code", {
              ...path,
              children: file.path
            }), file.previousPath && /*#__PURE__*/_jsxs("span", {
              ...count,
              children: ["from ", file.previousPath]
            }), file.additions != null && /*#__PURE__*/_jsxs("span", {
              ...count,
              children: [file.additions, " additions"]
            }), file.deletions != null && /*#__PURE__*/_jsxs("span", {
              ...count,
              children: [file.deletions, " deletions"]
            })]
          }, file.path))
        }), files.length === 0 && /*#__PURE__*/_jsx("p", {
          ...count,
          children: "No file changes supplied."
        })]
      }), children]
    })]
  });
});
//# sourceMappingURL=commit.js.map
