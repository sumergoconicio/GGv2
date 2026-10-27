import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx } from "react/jsx-runtime";
const styles = {
  table: {
    kzqmXN: "x1k6zs5h xlji9im",
    kLvRdT: "x1mwwwfo",
    keoZOQ: "xj1urod",
    k1K539: "x1nhhxel",
    keTefX: "xq8nivl x1tuu4sf",
    k71WvV: "x14z9mp xjen7bp",
    kGuDYH: "xkpwil5 x1cncyzl",
    $$css: true
  },
  th: {
    k9WMMc: "x1yc453h x7qa804",
    k63SB2: "x1s688f",
    kMwMTN: "x1aj07ft",
    kb6lSQ: "xjat59b",
    kLKAdn: "x1pe9zv5 x1uzknqj",
    kGO01o: "x1v0wz0i xgre4bq",
    kZCmMZ: "x1m83qfk x1aus2wn x1pc19lu",
    kwRFfy: "x167vaf5 xdku13f x1jo1r2d",
    kt9PQ7: "xlxy82",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    kGuDYH: "x1dcheo9 xrgdnwz",
    $$css: true
  },
  td: {
    kLKAdn: "x1pe9zv5 x1uzknqj",
    kGO01o: "x1v0wz0i xgre4bq",
    kZCmMZ: "x1m83qfk x1aus2wn x1pc19lu",
    kwRFfy: "x167vaf5 xdku13f x1jo1r2d",
    kMwMTN: "x1ixqp2s",
    k63SB2: "xk50ysn",
    kb6lSQ: "xjat59b",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    kXLuUW: "x16dsc37",
    k9WMMc: "x1yc453h x7qa804",
    $$css: true
  },
  row: {
    kWkggS: "xjbqb8w xrt66f1",
    $$css: true
  },
  total: {
    k63SB2: "xk50ysn",
    kMwMTN: "x1aj07ft",
    kEafiO: "xamhcws",
    kPef9Z: "x13fuv20",
    kLZC3w: "x1fq36pv",
    kt9PQ7: "xlxy82",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    kWkggS: "xjbqb8w",
    $$css: true
  },
  totalCell: {
    k63SB2: "xk50ysn",
    kMwMTN: "x1aj07ft",
    kEafiO: "xamhcws",
    kt9PQ7: "xlxy82",
    $$css: true
  }
};

/** Open grid, 1px row rules, last column right-aligned. */
export const Table = /*#__PURE__*/React.forwardRef(function Table({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-table", className], styles.table);
  return /*#__PURE__*/_jsx("table", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
export const TableHead = /*#__PURE__*/React.forwardRef(function TableHead({
  className,
  style,
  ...props
}, ref) {
  return /*#__PURE__*/_jsx("thead", {
    ref: ref,
    className: className,
    style: style,
    ...props
  });
});
export const TableBody = /*#__PURE__*/React.forwardRef(function TableBody({
  className,
  style,
  ...props
}, ref) {
  return /*#__PURE__*/_jsx("tbody", {
    ref: ref,
    className: className,
    style: style,
    ...props
  });
});
export const TableRow = /*#__PURE__*/React.forwardRef(function TableRow({
  total,
  className,
  style,
  ...props
}, ref) {
  const sx = rs([total && "rs-total-row", className, "rs-table-row"], styles.row, total && styles.total);
  return /*#__PURE__*/_jsx("tr", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
export const TableTh = /*#__PURE__*/React.forwardRef(function TableTh({
  className,
  style,
  ...props
}, ref) {
  const sx = rs([className, "rs-table-th"], styles.th);
  return /*#__PURE__*/_jsx("th", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
export const TableTd = /*#__PURE__*/React.forwardRef(function TableTd({
  total,
  className,
  style,
  ...props
}, ref) {
  const sx = rs([className, "rs-table-td", total && "rs-table-total-cell"], styles.td, total && styles.totalCell);
  return /*#__PURE__*/_jsx("td", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
//# sourceMappingURL=table.js.map
