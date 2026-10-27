"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { Input } from "./input.js";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
function shorten(value, limit) {
  return value.length > limit ? `${value.slice(0, limit)}… [truncated]` : value;
}
function describe(value, maxStringLength) {
  if (typeof value === "string") return JSON.stringify(shorten(value, maxStringLength));
  if (value === null) return "null";
  if (typeof value === "object") return Array.isArray(value) ? `Array (${value.length})` : "Object";
  if (typeof value === "function") return "[Function]";
  return String(value);
}
function inspect(value, name, path, depth, maxDepth, maxEntries, maxStringLength, parents, budget) {
  budget.remaining--;
  const node = {
    name,
    path,
    value: describe(value, maxStringLength)
  };
  if (value === null || typeof value !== "object") return node;
  if (parents.has(value)) return {
    ...node,
    value: "[Circular]"
  };
  if (depth >= maxDepth) return {
    ...node,
    value: `${node.value}, depth limit reached`
  };
  const next = new Set(parents).add(value);
  node.children = [];
  const add = key => {
    const childName = shorten(key, Math.min(256, maxStringLength));
    const childPath = shorten(`${path}[${JSON.stringify(childName)}]`, 4096);
    // Inspect descriptors, never invoke accessors as a side effect of displaying data.
    const descriptor = Object.getOwnPropertyDescriptor(value, key);
    if (descriptor && !Object.hasOwn(descriptor, "value")) {
      budget.remaining--;
      node.children.push({
        name: childName,
        path: childPath,
        value: descriptor.get ? "[Getter]" : "[Setter]"
      });
    } else node.children.push(inspect(descriptor?.value, childName, childPath, depth + 1, maxDepth, maxEntries, maxStringLength, next, budget));
  };
  try {
    if (Array.isArray(value)) {
      for (let index = 0; index < Math.min(value.length, maxEntries) && budget.remaining > 0; index++) add(String(index));
      node.omitted = value.length - node.children.length;
    } else {
      // Stop enumerating once the visible budget is filled. Object.entries would
      // read every property value, including getters, before applying that limit.
      for (const key in value) {
        if (!Object.hasOwn(value, key)) continue;
        if (node.children.length >= maxEntries || budget.remaining <= 0) {
          node.omitted = "more";
          break;
        }
        add(key);
      }
    }
  } catch {
    node.value = `${node.value}, remaining properties could not be inspected`;
  }
  return node;
}
function matches(node, query) {
  return `${node.path} ${node.value}`.toLocaleLowerCase().includes(query) || Boolean(node.children?.some(child => matches(child, query)));
}
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8fetqu",
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  tools: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    $$css: true
  },
  body: {
    kmVPX3: "x1uz70x1",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    k7Eaqz: "xeuugli",
    kHjlTd: "xj0a0fe",
    kMv6JI: "x1mb2qyg",
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  summary: {
    kAzted: "x1wszdd",
    kfiyM8: "xc26acl",
    kkrTdU: "x1ypdohk",
    kaIpWk: "xkrxur",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  children: {
    kZCmMZ: "x8945me",
    $$css: true
  },
  value: {
    kAzted: "x1in32aq",
    kfiyM8: "xc26acl",
    kogj98: "x1ghz6dp",
    $$css: true
  },
  note: {
    kMwMTN: "x1ixqp2s",
    kMv6JI: "xjb2p0i",
    $$css: true
  }
};
function JsonNode({
  node,
  query,
  expand
}) {
  const [open, setOpen] = React.useState(expand);
  const summary = rs(["rs-json-viewer-summary"], styles.summary);
  const children = rs(["rs-json-viewer-children"], styles.children);
  const value = rs(["rs-json-viewer-value"], styles.value);
  const note = rs(["rs-json-viewer-note"], styles.note);
  if (query && !matches(node, query)) return null;
  if (!node.children) return /*#__PURE__*/_jsxs("p", {
    ...value,
    title: node.path,
    children: [/*#__PURE__*/_jsxs("span", {
      children: [node.name, ": "]
    }), /*#__PURE__*/_jsx("span", {
      children: node.value
    })]
  });
  return /*#__PURE__*/_jsxs("details", {
    open: query ? true : open,
    onToggle: event => setOpen(event.currentTarget.open),
    children: [/*#__PURE__*/_jsxs("summary", {
      ...summary,
      title: node.path,
      children: [node.name, ": ", /*#__PURE__*/_jsx("span", {
        ...note,
        children: node.value
      })]
    }), /*#__PURE__*/_jsxs("div", {
      ...children,
      children: [node.children.map((child, index) => /*#__PURE__*/_jsx(JsonNode, {
        node: child,
        query: query,
        expand: expand
      }, `${index}:${child.path}`)), node.omitted ? /*#__PURE__*/_jsx("p", {
        ...note,
        children: node.omitted === "more" ? "Additional entries not displayed" : `${node.omitted} additional entries not displayed`
      }) : null]
    })]
  });
}

/** Bounded JSON inspection using native disclosures and path/value search. */
export const JSONViewer = /*#__PURE__*/React.forwardRef(function JSONViewer({
  data,
  label = "Structured data",
  searchable = true,
  maxDepth = 8,
  maxEntries = 100,
  maxNodes = 1000,
  maxStringLength = 2000,
  className,
  style,
  ...props
}, ref) {
  const [query, setQuery] = React.useState("");
  const [expansion, setExpansion] = React.useState({
    open: true,
    revision: 0
  });
  const tree = React.useMemo(() => inspect(data, "$", "$", 0, Math.max(1, Math.min(20, Number.isFinite(maxDepth) ? Math.floor(maxDepth) : 8)), Math.max(1, Math.min(1000, Number.isFinite(maxEntries) ? Math.floor(maxEntries) : 100)), Math.max(100, Math.min(10000, Number.isFinite(maxStringLength) ? Math.floor(maxStringLength) : 2000)), new Set(), {
    remaining: Math.max(1, Math.min(10000, Number.isFinite(maxNodes) ? Math.floor(maxNodes) : 1000))
  }), [data, maxDepth, maxEntries, maxNodes, maxStringLength]);
  const normalized = query.trim().toLocaleLowerCase();
  const root = rs(["rs-json-viewer", className], styles.root);
  const tools = rs(["rs-json-viewer-tools"], styles.tools);
  const body = rs(["rs-json-viewer-body"], styles.body);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    role: "region",
    "aria-label": label,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [searchable && /*#__PURE__*/_jsx(Input, {
      label: "Search paths and values",
      type: "search",
      value: query,
      onChange: event => setQuery(event.target.value)
    }), /*#__PURE__*/_jsxs("div", {
      ...tools,
      children: [/*#__PURE__*/_jsx(Button, {
        variant: "ghost",
        onClick: () => setExpansion(previous => ({
          open: true,
          revision: previous.revision + 1
        })),
        children: "Expand all"
      }), /*#__PURE__*/_jsx(Button, {
        variant: "ghost",
        disabled: Boolean(normalized),
        onClick: () => setExpansion(previous => ({
          open: false,
          revision: previous.revision + 1
        })),
        children: "Collapse all"
      })]
    }), /*#__PURE__*/_jsx("div", {
      ...body,
      children: normalized && !matches(tree, normalized) ? /*#__PURE__*/_jsx("p", {
        role: "status",
        children: "No matching paths or values"
      }) : /*#__PURE__*/_jsx(JsonNode, {
        node: tree,
        query: normalized,
        expand: expansion.open
      }, expansion.revision)
    })]
  });
});
//# sourceMappingURL=json-viewer.js.map
