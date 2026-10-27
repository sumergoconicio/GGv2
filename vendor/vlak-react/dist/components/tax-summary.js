import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    kLWn49: "xfrs9s4",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  header: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kjj79g: "x1qughib",
    kOIVth: "x1tmakyn",
    k1K539: "xyi6m4r",
    kGuDYH: "xkpwil5",
    $$css: true
  },
  status: {
    k63SB2: "x1s688f",
    $$css: true
  },
  reference: {
    kMwMTN: "x1ixqp2s",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  table: {
    kzqmXN: "xh8yej3",
    kLvRdT: "x1mwwwfo",
    kPzzVL: "x140o2bo",
    kGuDYH: "xkpwil5",
    $$css: true
  },
  caption: {
    k9WMMc: "x1yc453h",
    kGO01o: "x2yie3v",
    kGuDYH: "x1c3i2sq",
    k63SB2: "x1s688f",
    $$css: true
  },
  period: {
    k1xSpc: "x1lliihq",
    kGuDYH: "xkpwil5",
    k63SB2: "xo1l8bm",
    kMwMTN: "x1ixqp2s",
    keoZOQ: "x1tbvfm1",
    $$css: true
  },
  column: {
    k9WMMc: "x1yc453h",
    k8WAf4: "xo0yzjp",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    kGuDYH: "xboafo0",
    k63SB2: "xk50ysn",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  rowLabel: {
    k9WMMc: "x1yc453h",
    k63SB2: "xo1l8bm",
    kXLuUW: "x16dsc37",
    k8WAf4: "xgepmj6",
    kwRFfy: "x167vaf5",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  amount: {
    k9WMMc: "xp4054r",
    kXLuUW: "x16dsc37",
    k8WAf4: "xgepmj6",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    kcqcaj: "xss6m8b",
    kzqmXN: "x1d419hs",
    $$css: true
  },
  detail: {
    k1xSpc: "x1lliihq",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "xboafo0",
    keoZOQ: "x1tbvfm1",
    $$css: true
  },
  total: {
    kWkggS: "x1nzd1wa",
    k63SB2: "x1s688f",
    $$css: true
  },
  footer: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    keoZOQ: "xj1urod",
    kGuDYH: "xkpwil5",
    $$css: true
  },
  note: {
    kogj98: "x1ghz6dp",
    kMwMTN: "x1ixqp2s",
    ks0D6T: "x1qp14f0",
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    keoZOQ: "xj1urod",
    $$css: true
  }
};

/** A supplied assessment with distinct line items and authoritative totals. */
export const TaxSummary = /*#__PURE__*/React.forwardRef(function TaxSummary({
  label,
  periodLabel,
  reference,
  status,
  items,
  totals,
  dueLabel,
  note,
  itemsEmptyLabel = "Assessment lines not supplied",
  totalsEmptyLabel = "Totals not supplied",
  children,
  className,
  style,
  ...props
}, ref) {
  const root = rs(["rs-tax-summary", className], styles.root);
  const header = rs(["rs-tax-summary-header"], styles.header);
  const statusStyle = rs(["rs-tax-summary-status"], styles.status);
  const referenceStyle = rs(["rs-tax-summary-reference"], styles.reference);
  const table = rs(["rs-tax-summary-table"], styles.table);
  const caption = rs(["rs-tax-summary-caption"], styles.caption);
  const period = rs(["rs-tax-summary-period"], styles.period);
  const column = rs(["rs-tax-summary-column"], styles.column);
  const amountColumn = rs(["rs-tax-summary-column", "rs-tax-summary-amount"], styles.column, styles.amount);
  const rowLabel = rs(["rs-tax-summary-row-label"], styles.rowLabel);
  const amount = rs(["rs-tax-summary-amount"], styles.amount);
  const detail = rs(["rs-tax-summary-detail"], styles.detail);
  const total = rs(["rs-tax-summary-total"], styles.total);
  const footer = rs(["rs-tax-summary-footer"], styles.footer);
  const noteStyle = rs(["rs-tax-summary-note"], styles.note);
  const actions = rs(["rs-tax-summary-actions"], styles.actions);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    role: "group",
    "aria-label": label,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsxs("div", {
      ...header,
      children: [/*#__PURE__*/_jsx("span", {
        ...statusStyle,
        children: status ?? "Status not supplied"
      }), /*#__PURE__*/_jsx("span", {
        ...referenceStyle,
        children: reference ?? "Assessment reference not supplied"
      })]
    }), /*#__PURE__*/_jsxs("table", {
      ...table,
      children: [/*#__PURE__*/_jsxs("caption", {
        ...caption,
        children: [label, /*#__PURE__*/_jsx("span", {
          ...period,
          children: periodLabel ?? "Assessment period not supplied"
        })]
      }), /*#__PURE__*/_jsx("thead", {
        children: /*#__PURE__*/_jsxs("tr", {
          children: [/*#__PURE__*/_jsx("th", {
            scope: "col",
            ...column,
            children: "Item"
          }), /*#__PURE__*/_jsx("th", {
            scope: "col",
            ...amountColumn,
            children: "Amount"
          })]
        })
      }), /*#__PURE__*/_jsx("tbody", {
        children: items.length > 0 ? items.map(item => /*#__PURE__*/_jsxs("tr", {
          children: [/*#__PURE__*/_jsxs("th", {
            scope: "row",
            ...rowLabel,
            children: [item.label, item.detail != null && /*#__PURE__*/_jsx("span", {
              ...detail,
              children: item.detail
            })]
          }), /*#__PURE__*/_jsx("td", {
            ...amount,
            children: item.amount ?? "Amount not supplied"
          })]
        }, item.id)) : /*#__PURE__*/_jsx("tr", {
          children: /*#__PURE__*/_jsx("td", {
            colSpan: 2,
            ...rowLabel,
            children: itemsEmptyLabel
          })
        })
      }), /*#__PURE__*/_jsx("tfoot", {
        children: totals.length > 0 ? totals.map(item => /*#__PURE__*/_jsxs("tr", {
          ...total,
          children: [/*#__PURE__*/_jsx("th", {
            scope: "row",
            ...rowLabel,
            children: item.label
          }), /*#__PURE__*/_jsx("td", {
            ...amount,
            children: item.amount ?? "Amount not supplied"
          })]
        }, item.id)) : /*#__PURE__*/_jsx("tr", {
          children: /*#__PURE__*/_jsx("td", {
            colSpan: 2,
            ...rowLabel,
            children: totalsEmptyLabel
          })
        })
      })]
    }), /*#__PURE__*/_jsxs("div", {
      ...footer,
      children: [/*#__PURE__*/_jsx("span", {
        children: dueLabel ?? "Payment timing not supplied"
      }), note != null && /*#__PURE__*/_jsx("p", {
        ...noteStyle,
        children: note
      })]
    }), children != null && /*#__PURE__*/_jsx("div", {
      ...actions,
      children: children
    })]
  });
});
//# sourceMappingURL=tax-summary.js.map
