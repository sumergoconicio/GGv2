"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
/** Line LCS with bounded memory. Large changes use a truthful coarse replacement. */
export function diffLines(before, after) {
  const a = before === "" ? [] : before.split("\n");
  const b = after === "" ? [] : after.split("\n");
  const result = [];
  let start = 0;
  while (start < a.length && start < b.length && a[start] === b[start]) {
    result.push({
      kind: "same",
      text: a[start],
      before: start + 1,
      after: start + 1
    });
    start++;
  }
  let endA = a.length;
  let endB = b.length;
  while (endA > start && endB > start && a[endA - 1] === b[endB - 1]) {
    endA--;
    endB--;
  }
  const n = endA - start;
  const m = endB - start;
  if ((n + 1) * (m + 1) > 1_000_000) {
    for (let i = start; i < endA; i++) result.push({
      kind: "removed",
      text: a[i],
      before: i + 1
    });
    for (let j = start; j < endB; j++) result.push({
      kind: "added",
      text: b[j],
      after: j + 1
    });
  } else {
    const lcs = new Uint32Array((n + 1) * (m + 1));
    const at = (i, j) => i * (m + 1) + j;
    for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) lcs[at(i, j)] = a[start + i] === b[start + j] ? 1 + lcs[at(i + 1, j + 1)] : Math.max(lcs[at(i + 1, j)], lcs[at(i, j + 1)]);
    let i = 0;
    let j = 0;
    while (i < n || j < m) {
      if (i < n && j < m && a[start + i] === b[start + j]) {
        result.push({
          kind: "same",
          text: a[start + i],
          before: start + i + 1,
          after: start + j + 1
        });
        i++;
        j++;
      } else if (i < n && (j === m || lcs[at(i + 1, j)] >= lcs[at(i, j + 1)])) {
        result.push({
          kind: "removed",
          text: a[start + i],
          before: start + i + 1
        });
        i++;
      } else {
        result.push({
          kind: "added",
          text: b[start + j],
          after: start + j + 1
        });
        j++;
      }
    }
  }
  for (let i = endA, j = endB; i < a.length; i++, j++) result.push({
    kind: "same",
    text: a[i],
    before: i + 1,
    after: j + 1
  });
  return result;
}
const styles = {
  root: {
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  header: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x6s0dn4",
    kjj79g: "x1qughib",
    kOIVth: "x13z6uf9",
    k1K539: "xyi6m4r",
    $$css: true
  },
  tools: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    $$css: true
  },
  scroll: {
    kXHlph: "xw2csxc",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  table: {
    kzqmXN: "xh8yej3",
    kLvRdT: "x1mwwwfo",
    kMv6JI: "x1mb2qyg",
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    k9WMMc: "x1yc453h",
    $$css: true
  },
  cell: {
    k8WAf4: "x1o5vn8x",
    kg3NbH: "x1ryrjj2",
    khDVqt: "x126k92a",
    kHjlTd: "xj0a0fe",
    kXLuUW: "x16dsc37",
    k9WMMc: "x1yc453h",
    $$css: true
  },
  change: {
    kWkggS: "x6583kg",
    k63SB2: "xk50ysn",
    $$css: true
  },
  number: {
    kMwMTN: "x1ixqp2s",
    kzqmXN: "xge2hy",
    kg3NbH: "x97vtpp",
    kXLuUW: "x16dsc37",
    kcqcaj: "xss6m8b",
    k9WMMc: "xp4054r",
    $$css: true
  }
};

/** Monochrome before/after comparison with explicit change labels, never color alone. */
export const DiffViewer = /*#__PURE__*/React.forwardRef(function DiffViewer({
  before,
  after,
  label = "Changes",
  view,
  defaultView = "unified",
  onViewChange,
  pageSize = 200,
  className,
  style,
  ...props
}, ref) {
  const [inner, setInner] = React.useState(defaultView);
  const current = view ?? inner;
  const lines = React.useMemo(() => diffLines(before, after), [before, after]);
  const limit = Math.max(1, Math.min(1000, Number.isFinite(pageSize) ? Math.floor(pageSize) : 200));
  const [pagination, setPagination] = React.useState({
    lines,
    page: 0
  });
  const lastPage = Math.max(0, Math.ceil(lines.length / limit) - 1);
  const page = pagination.lines === lines ? Math.min(pagination.page, lastPage) : 0;
  const start = page * limit;
  const visible = lines.slice(start, start + limit);
  const added = lines.filter(line => line.kind === "added").length;
  const removed = lines.filter(line => line.kind === "removed").length;
  const root = rs(["rs-diff-viewer", className], styles.root);
  const header = rs(["rs-diff-viewer-header"], styles.header);
  const tools = rs(["rs-diff-viewer-tools"], styles.tools);
  const scroll = rs(["rs-diff-viewer-scroll"], styles.scroll);
  const table = rs(["rs-diff-viewer-table"], styles.table);
  const cell = rs(["rs-diff-viewer-cell"], styles.cell);
  const number = rs(["rs-diff-viewer-number"], styles.number);
  const change = rs(["rs-diff-viewer-change"], styles.change);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsxs("div", {
      ...header,
      children: [/*#__PURE__*/_jsxs("span", {
        children: [added, " added, ", removed, " removed"]
      }), /*#__PURE__*/_jsx("div", {
        ...tools,
        role: "group",
        "aria-label": "Diff layout",
        children: ["unified", "split"].map(mode => /*#__PURE__*/_jsx(Button, {
          variant: current === mode ? "primary" : "ghost",
          "aria-pressed": current === mode,
          onClick: () => {
            if (view === undefined) setInner(mode);
            onViewChange?.(mode);
          },
          children: mode === "unified" ? "Unified" : "Split"
        }, mode))
      })]
    }), /*#__PURE__*/_jsx("div", {
      ...scroll,
      tabIndex: 0,
      role: "region",
      "aria-label": label,
      children: /*#__PURE__*/_jsxs("table", {
        ...table,
        children: [/*#__PURE__*/_jsx("caption", {
          children: label
        }), /*#__PURE__*/_jsx("thead", {
          children: /*#__PURE__*/_jsxs("tr", {
            children: [/*#__PURE__*/_jsx("th", {
              ...cell,
              scope: "col",
              children: "Change"
            }), /*#__PURE__*/_jsx("th", {
              ...cell,
              scope: "col",
              children: "Before"
            }), /*#__PURE__*/_jsx("th", {
              ...cell,
              scope: "col",
              children: "After"
            }), current === "unified" && /*#__PURE__*/_jsx("th", {
              ...cell,
              scope: "col",
              children: "Content"
            })]
          })
        }), /*#__PURE__*/_jsxs("tbody", {
          children: [visible.map((line, index) => /*#__PURE__*/_jsxs("tr", {
            ...(line.kind !== "same" ? change : {}),
            children: [/*#__PURE__*/_jsx("th", {
              ...cell,
              scope: "row",
              children: line.kind === "same" ? "Unchanged" : line.kind === "added" ? "Added" : "Removed"
            }), current === "unified" ? /*#__PURE__*/_jsxs(_Fragment, {
              children: [/*#__PURE__*/_jsx("td", {
                ...number,
                children: line.before ?? ""
              }), /*#__PURE__*/_jsx("td", {
                ...number,
                children: line.after ?? ""
              }), /*#__PURE__*/_jsx("td", {
                ...cell,
                children: line.text || " "
              })]
            }) : /*#__PURE__*/_jsxs(_Fragment, {
              children: [/*#__PURE__*/_jsx("td", {
                ...cell,
                children: line.kind !== "added" ? line.text || " " : ""
              }), /*#__PURE__*/_jsx("td", {
                ...cell,
                children: line.kind !== "removed" ? line.text || " " : ""
              })]
            })]
          }, `${start + index}:${line.kind}`)), !lines.length && /*#__PURE__*/_jsx("tr", {
            children: /*#__PURE__*/_jsx("td", {
              ...cell,
              colSpan: current === "unified" ? 4 : 3,
              children: "No content to compare"
            })
          })]
        })]
      })
    }), lines.length > limit && /*#__PURE__*/_jsxs("nav", {
      ...header,
      "aria-label": "Diff pages",
      children: [/*#__PURE__*/_jsxs("p", {
        role: "status",
        children: ["Lines ", start + 1, "\u2013", Math.min(start + limit, lines.length), " of ", lines.length]
      }), /*#__PURE__*/_jsxs("div", {
        ...tools,
        children: [/*#__PURE__*/_jsx(Button, {
          variant: "ghost",
          disabled: page === 0,
          onClick: () => setPagination({
            lines,
            page: page - 1
          }),
          children: "Previous lines"
        }), /*#__PURE__*/_jsx(Button, {
          variant: "ghost",
          disabled: page === lastPage,
          onClick: () => setPagination({
            lines,
            page: page + 1
          }),
          children: "Next lines"
        })]
      })]
    })]
  });
});
//# sourceMappingURL=diff-viewer.js.map
