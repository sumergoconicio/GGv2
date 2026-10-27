"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Icon } from "./icon.js";
import { Checkbox } from "./checkbox.js";
import { Input } from "./input.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  scroll: {
    kzqmXN: "xh8yej3",
    kXHlph: "xw2csxc",
    $$css: true
  },
  table: {
    kzqmXN: "xh8yej3 xvolacv",
    kLvRdT: "x1mwwwfo",
    keoZOQ: "xj1urod",
    k1K539: "x1nhhxel",
    keTefX: "x1lziwak x1yygogp",
    k71WvV: "x14z9mp x1y4j53p",
    kGuDYH: "xkpwil5 x1cncyzl",
    $$css: true
  },
  th: {
    k9WMMc: "x1yc453h x7qa804",
    k63SB2: "x1s688f",
    kMwMTN: "x1gney9c",
    kb6lSQ: "xjat59b",
    kLKAdn: "x1pe9zv5 x1uzknqj",
    kwRFfy: "x167vaf5 x1jo1r2d x1k3h4du xjzqxlo",
    kGO01o: "x1v0wz0i xgre4bq",
    kZCmMZ: "x1m83qfk x1pc19lu xbvb93s x100hmz3",
    kt9PQ7: "xlxy82",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    kGuDYH: "x1dcheo9 xrgdnwz",
    $$css: true
  },
  td: {
    kLKAdn: "x1pe9zv5 x1uzknqj",
    kwRFfy: "x167vaf5 x1jo1r2d x1k3h4du xjzqxlo",
    kGO01o: "x1v0wz0i xgre4bq",
    kZCmMZ: "x1m83qfk x1pc19lu xbvb93s x100hmz3",
    kMwMTN: "x1ixqp2s",
    k63SB2: "xk50ysn",
    kb6lSQ: "xjat59b",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    kXLuUW: "x16dsc37",
    kGuDYH: "x1cncyzl",
    k9WMMc: "x7qa804",
    $$css: true
  },
  tdAlt: {
    kWkggS: "x1nzd1wa",
    $$css: true
  },
  selected: {
    kWkggS: "x6583kg",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  sort: {
    kWkggS: "xjbqb8w",
    kMzoRj: "xc342km",
    ksu8eU: "xng3xce",
    kmVPX3: "x1717udv",
    kMv6JI: "xjb2p0i",
    kGuDYH: "x1qlqyl8",
    k63SB2: "x1s688f",
    kb6lSQ: "x4gjf66",
    kMwMTN: "x1heor9g",
    kkrTdU: "x1ypdohk",
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kOIVth: "xx7b8my",
    kAzted: "x1wszdd",
    k7Eaqz: "xtp0tkc",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x14tvtkk",
    kInvED: "x7s97pk",
    $$css: true
  },
  sortIcon: {
    kMwMTN: "x1ixqp2s",
    kSiTet: "x1hc1fzr",
    $$css: true
  },
  sortIconOn: {
    kMwMTN: "x1gney9c",
    $$css: true
  },
  empty: {
    kLKAdn: "x6gltce",
    kGO01o: "x163t5y5",
    kg3NbH: "x1qhpy6z",
    k9WMMc: "x2b8uid",
    kGuDYH: "x1dcheo9",
    kb6lSQ: "xjat59b",
    kMwMTN: "x1ixqp2s",
    $$css: true
  }
};

/** Sortable rows over the plain rs-table. */
export const DataTable = /*#__PURE__*/React.forwardRef(function DataTable({
  columns,
  rows,
  rowKey = (_, i) => i,
  emptyLabel = "Nothing here yet.",
  caption,
  sort: controlledSort,
  defaultSort = null,
  onSortChange,
  selectable = false,
  selectedKeys,
  defaultSelectedKeys = [],
  onSelectionChange,
  filterable = false,
  filter,
  defaultFilter = "",
  onFilterChange,
  filterRow,
  className,
  style,
  ...props
}, ref) {
  const [innerSort, setInnerSort] = React.useState(defaultSort);
  const sort = controlledSort === undefined ? innerSort : controlledSort;
  const [innerKeys, setInnerKeys] = React.useState(defaultSelectedKeys);
  const selected = new Set(selectedKeys ?? innerKeys);
  const [innerFilter, setInnerFilter] = React.useState(defaultFilter);
  const query = filter ?? innerFilter;
  const getRowKey = (row, index) => {
    const key = rowKey(row, index);
    return typeof key === "symbol" ? String(key) : key;
  };
  const records = rows.map((row, index) => ({
    row,
    key: getRowKey(row, index)
  }));
  const filtered = records.filter(({
    row
  }) => !query || (filterRow ? filterRow(row, query) : columns.some(column => String(row[column.key] ?? "").toLocaleLowerCase().includes(query.toLocaleLowerCase()))));
  const column = sort ? columns.find(c => c.key === sort.key && c.sortable) : undefined;
  const sorted = column && sort ? [...filtered].sort((a, b) => {
    const get = column.sortValue ?? (row => row[column.key]);
    const av = get(a.row);
    const bv = get(b.row);
    const cmp = typeof av === "number" && typeof bv === "number" ? av - bv : String(av).localeCompare(String(bv));
    return sort.dir === "asc" ? cmp : -cmp;
  }) : filtered;
  const toggle = key => {
    const next = sort?.key === key ? sort.dir === "asc" ? {
      key,
      dir: "desc"
    } : null : {
      key,
      dir: "asc"
    };
    if (controlledSort === undefined) setInnerSort(next);
    onSortChange?.(next);
  };
  const selectKeys = next => {
    const keys = [...next];
    if (selectedKeys === undefined) setInnerKeys(keys);
    onSelectionChange?.(keys);
  };
  const allSelected = filtered.length > 0 && filtered.every(({
    key
  }) => selected.has(key));
  const someSelected = filtered.some(({
    key
  }) => selected.has(key));
  const scroll = rs(["rs-datatable-scroll"], styles.scroll);
  const table = rs(["rs-table", "rs-datatable-table"], styles.table);
  const th = rs(["rs-datatable-th"], styles.th);
  const empty = rs(["rs-datatable-empty"], styles.empty);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    ...props,
    className: className,
    style: style,
    children: [filterable && /*#__PURE__*/_jsx(Input, {
      type: "search",
      "aria-label": "Filter rows",
      placeholder: "Filter rows",
      value: query,
      onChange: event => {
        if (filter === undefined) setInnerFilter(event.target.value);
        onFilterChange?.(event.target.value);
      }
    }), /*#__PURE__*/_jsx("div", {
      className: scroll.className,
      style: scroll.style,
      children: /*#__PURE__*/_jsxs("table", {
        className: table.className,
        style: table.style,
        children: [caption && /*#__PURE__*/_jsx("caption", {
          children: caption
        }), /*#__PURE__*/_jsx("thead", {
          children: /*#__PURE__*/_jsxs("tr", {
            children: [selectable && /*#__PURE__*/_jsx("th", {
              scope: "col",
              className: th.className,
              style: th.style,
              children: /*#__PURE__*/_jsx(Checkbox, {
                "aria-label": "Select all visible rows",
                checked: allSelected,
                indeterminate: !allSelected && someSelected,
                disabled: !filtered.length,
                onCheckedChange: checked => {
                  const next = new Set(selected);
                  for (const {
                    key
                  } of filtered) {
                    if (checked) next.add(key);else next.delete(key);
                  }
                  selectKeys(next);
                }
              })
            }), columns.map(column => {
              const active = sort?.key === column.key;
              const sortBtn = rs(["rs-datatable-sort"], styles.sort);
              const sortIcon = rs(["rs-datatable-sort-icon", active && "rs-datatable-sort-icon-on"], styles.sortIcon, active && styles.sortIconOn);
              return /*#__PURE__*/_jsx("th", {
                scope: "col",
                className: th.className,
                style: th.style,
                "aria-sort": active ? sort.dir === "asc" ? "ascending" : "descending" : undefined,
                children: column.sortable ? /*#__PURE__*/_jsxs("button", {
                  type: "button",
                  className: sortBtn.className,
                  style: sortBtn.style,
                  "data-active": active,
                  onClick: () => toggle(column.key),
                  children: [column.header, /*#__PURE__*/_jsx(Icon, {
                    name: active ? sort.dir === "desc" ? "arrow-down" : "arrow-up" : "sort",
                    size: 12,
                    className: sortIcon.className,
                    style: sortIcon.style
                  })]
                }) : column.header
              }, column.key);
            })]
          })
        }), /*#__PURE__*/_jsx("tbody", {
          children: sorted.map(({
            row,
            key
          }, index) => /*#__PURE__*/_jsxs("tr", {
            "data-selected": selected.has(key) || undefined,
            children: [selectable && /*#__PURE__*/_jsx("td", {
              className: th.className,
              style: th.style,
              children: /*#__PURE__*/_jsx(Checkbox, {
                "aria-label": `Select row ${index + 1}`,
                checked: selected.has(key),
                onCheckedChange: checked => {
                  const next = new Set(selected);
                  if (checked) next.add(key);else next.delete(key);
                  selectKeys(next);
                }
              })
            }), columns.map(column => {
              const cell = rs(["rs-datatable-td", index % 2 === 1 && "rs-datatable-td-alt", selected.has(key) && "rs-datatable-td-selected"], styles.td, index % 2 === 1 && styles.tdAlt, selected.has(key) && styles.selected);
              return /*#__PURE__*/_jsx("td", {
                className: cell.className,
                style: cell.style,
                children: column.render ? column.render(row) : row[column.key]
              }, column.key);
            })]
          }, key))
        })]
      })
    }), sorted.length === 0 && /*#__PURE__*/_jsx("div", {
      role: "status",
      className: empty.className,
      style: empty.style,
      children: emptyLabel
    })]
  });
  /* forwardRef cannot carry the row type parameter, so the export restates it. */
});
//# sourceMappingURL=data-table.js.map
