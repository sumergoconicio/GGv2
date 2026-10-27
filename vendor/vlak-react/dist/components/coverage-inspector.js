"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Select } from "./select.js";
import { useInputValue } from "../use-input-value.js";
import { useMergedRefs } from "../merge-refs.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    k7Eaqz: "xeuugli",
    kogj98: "x1ghz6dp",
    kMwMTN: "x1gney9c",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  title: {
    kGuDYH: "xkpwil5",
    k63SB2: "x1s688f",
    $$css: true
  },
  copy: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    kHjlTd: "xj0a0fe",
    ks0D6T: "x1qp14f0",
    $$css: true
  },
  plot: {
    k1xSpc: "x1lliihq",
    kzqmXN: "xh8yej3",
    kZKoxP: "xt7dq6l",
    ksoyAI: "xzt5al7",
    kMwMTN: "x1gney9c x1sy4l04",
    $$css: true
  },
  stem: {
    kjVXCG: "x73je2i",
    kfJifR: "xvlca1e",
    kDwRjp: "xbh8q5q",
    $$css: true
  },
  point: {
    kjVXCG: "x73je2i",
    kfJifR: "xnpr05h",
    kDwRjp: "x117rol3",
    $$css: true
  },
  missing: {
    kjVXCG: "x73je2i",
    kfJifR: "xnpr05h",
    kDwRjp: "x11lvw2d xqp20c9",
    $$css: true
  },
  axis: {
    k1xSpc: "x78zum5",
    kjj79g: "x1qughib",
    kOIVth: "x8fetqu",
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    ksoyAI: "xzt5al7",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  field: {
    k1xSpc: "xrvj5dj",
    kOIVth: "xpj7pl4",
    kGuDYH: "xboafo0",
    $$css: true
  },
  select: {
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  counts: {
    k1xSpc: "xrvj5dj",
    kumcoG: "x1nh781e",
    kOIVth: "x8233eu",
    kogj98: "x1ghz6dp",
    kGuDYH: "xboafo0",
    $$css: true
  },
  value: {
    kogj98: "x1ghz6dp",
    keoZOQ: "x1tbvfm1",
    kGuDYH: "x1jchvi3",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  summary: {
    k1xSpc: "xtcx8v3",
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kfiyM8: "xc26acl",
    kGuDYH: "xkpwil5",
    kkrTdU: "x1ypdohk",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  table: {
    kLvRdT: "x1mwwwfo",
    kzqmXN: "xh8yej3",
    kGuDYH: "xboafo0",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  cell: {
    kmVPX3: "x7gbtqy",
    k9WMMc: "x1yc453h",
    k63SB2: "xo1l8bm",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  }
};
const isCount = value => value != null && Number.isSafeInteger(value) && value >= 0;
const countLabel = value => value == null ? "Not supplied" : isCount(value) ? String(value) : "Unavailable";
/** Supplied coverage and counts, with missing depth distinct from recorded zero and no variant calls. */
export const CoverageInspector = /*#__PURE__*/React.forwardRef(function CoverageInspector({
  label,
  contig,
  reference,
  loci,
  value,
  defaultValue,
  onValueChange,
  className,
  style,
  children,
  ...props
}, ref) {
  const [, refresh] = React.useReducer(n => n + 1, 0);
  const id = React.useId();
  const [selected, setSelected, figureRef] = useInputValue(value, defaultValue === undefined ? loci[0]?.position ?? null : defaultValue, onValueChange, refresh);
  const merged = useMergedRefs(ref, figureRef);
  const valid = loci.length <= 512 && loci.every(locus => Number.isSafeInteger(locus.position) && locus.position >= 1) && new Set(loci.map(locus => locus.position)).size === loci.length;
  const record = valid ? loci.find(locus => locus.position === selected) : undefined;
  const start = valid && loci.length ? Math.min(...loci.map(locus => locus.position)) : 0;
  const end = valid && loci.length ? Math.max(...loci.map(locus => locus.position)) : 0;
  const maximum = valid ? Math.max(1, ...loci.map(locus => isCount(locus.depth) ? locus.depth : 0)) : 1;
  const baseCounts = record?.bases ? Object.entries(record.bases) : [];
  const root = rs(["rs-coverage-inspector", className], styles.root);
  const title = rs(["rs-coverage-inspector-title"], styles.title);
  const copy = rs(["rs-coverage-inspector-copy"], styles.copy);
  const plot = rs(["rs-coverage-inspector-plot"], styles.plot);
  const stem = rs(["rs-coverage-inspector-stem"], styles.stem);
  const point = rs(["rs-coverage-inspector-point"], styles.point);
  const missing = rs(["rs-coverage-inspector-missing"], styles.missing);
  const axis = rs(["rs-coverage-inspector-axis"], styles.axis);
  const field = rs(["rs-coverage-inspector-label"], styles.field);
  const select = rs(["rs-coverage-inspector-select"], styles.select);
  const counts = rs(["rs-coverage-inspector-counts"], styles.counts);
  const valueStyle = rs(["rs-coverage-inspector-value"], styles.value);
  const summary = rs(["rs-coverage-inspector-summary"], styles.summary);
  const table = rs(["rs-coverage-inspector-table"], styles.table);
  const cell = rs(["rs-coverage-inspector-cell"], styles.cell);
  return /*#__PURE__*/_jsxs("figure", {
    ...props,
    ref: merged,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("figcaption", {
      ...title,
      children: label
    }), /*#__PURE__*/_jsxs("p", {
      ...copy,
      children: [reference ? `${reference} · ` : "", contig, " \xB7 1-based positions"]
    }), !valid ? /*#__PURE__*/_jsx("p", {
      ...copy,
      children: "Coverage unavailable: supply at most 512 unique positive integer positions"
    }) : !loci.length ? /*#__PURE__*/_jsx("p", {
      ...copy,
      children: "No coverage records supplied"
    }) : /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsx("p", {
        ...copy,
        children: "Supplied depth. Open markers indicate missing or unavailable depth; filled markers include recorded zero."
      }), /*#__PURE__*/_jsx("svg", {
        ...plot,
        viewBox: "0 0 600 112",
        "aria-hidden": "true",
        focusable: "false",
        children: loci.map(locus => {
          const x = start === end ? 300 : 8 + (locus.position - start) / (end - start) * 584;
          const y = 102 - (isCount(locus.depth) ? locus.depth / maximum : 0) * 94;
          return /*#__PURE__*/_jsx("g", {
            children: isCount(locus.depth) ? /*#__PURE__*/_jsxs(_Fragment, {
              children: [/*#__PURE__*/_jsx("path", {
                ...stem,
                d: `M${x} 102V${y}`
              }), /*#__PURE__*/_jsx("circle", {
                ...point,
                cx: x,
                cy: y,
                r: 2
              })]
            }) : /*#__PURE__*/_jsx("circle", {
              ...missing,
              cx: x,
              cy: 102,
              r: 3
            })
          }, locus.position);
        })
      }), /*#__PURE__*/_jsxs("div", {
        ...axis,
        children: [/*#__PURE__*/_jsx("span", {
          children: start
        }), /*#__PURE__*/_jsx("span", {
          children: end
        })]
      }), /*#__PURE__*/_jsxs("div", {
        ...field,
        children: [/*#__PURE__*/_jsx("span", {
          id: `${id}-position-label`,
          children: "Inspect position"
        }), /*#__PURE__*/_jsx(Select, {
          ...select,
          fullWidth: true,
          "aria-labelledby": `${id}-position-label`,
          value: record ? String(record.position) : "",
          onValueChange: next => setSelected(next ? Number(next) : null),
          options: [{
            value: "",
            label: "Choose position"
          }, ...loci.map(locus => ({
            value: String(locus.position),
            label: `${locus.position} · Depth ${countLabel(locus.depth)}`
          }))]
        })]
      }), record ? /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx("dl", {
          ...counts,
          children: [["Depth", record.depth], ["Forward strand", record.forward], ["Reverse strand", record.reverse]].map(([name, value]) => /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("dt", {
              children: name
            }), /*#__PURE__*/_jsx("dd", {
              ...valueStyle,
              children: countLabel(value)
            })]
          }, String(name)))
        }), baseCounts.length > 16 ? /*#__PURE__*/_jsx("p", {
          ...copy,
          children: "Base counts unavailable: supply at most 16 symbols per locus"
        }) : baseCounts.length ? /*#__PURE__*/_jsx("dl", {
          ...counts,
          "aria-label": "Supplied base counts",
          children: baseCounts.map(([base, count]) => /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("dt", {
              children: base
            }), /*#__PURE__*/_jsx("dd", {
              ...valueStyle,
              children: countLabel(count)
            })]
          }, base))
        }) : /*#__PURE__*/_jsx("p", {
          ...copy,
          children: "Base counts not supplied"
        })]
      }) : /*#__PURE__*/_jsx("p", {
        ...copy,
        children: selected == null ? "No position selected" : "Selected position unavailable"
      }), /*#__PURE__*/_jsxs("details", {
        children: [/*#__PURE__*/_jsxs("summary", {
          ...summary,
          children: ["Depth table, ", loci.length, " positions"]
        }), /*#__PURE__*/_jsxs("table", {
          ...table,
          children: [/*#__PURE__*/_jsxs("caption", {
            children: [contig, ", supplied coverage"]
          }), /*#__PURE__*/_jsx("thead", {
            children: /*#__PURE__*/_jsxs("tr", {
              children: [/*#__PURE__*/_jsx("th", {
                ...cell,
                scope: "col",
                children: "Position"
              }), /*#__PURE__*/_jsx("th", {
                ...cell,
                scope: "col",
                children: "Depth"
              })]
            })
          }), /*#__PURE__*/_jsx("tbody", {
            children: loci.map(locus => /*#__PURE__*/_jsxs("tr", {
              children: [/*#__PURE__*/_jsx("th", {
                ...cell,
                scope: "row",
                children: locus.position
              }), /*#__PURE__*/_jsx("td", {
                ...cell,
                children: countLabel(locus.depth)
              })]
            }, locus.position))
          })]
        })]
      })]
    }), children]
  });
});
//# sourceMappingURL=coverage-inspector.js.map
