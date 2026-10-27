"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    k7Eaqz: "xeuugli",
    ks0D6T: "x193iq5w",
    kMwMTN: "x1gney9c",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  label: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xkpwil5",
    k63SB2: "x1s688f",
    $$css: true
  },
  description: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    kHjlTd: "xj0a0fe",
    ks0D6T: "x1qp14f0",
    $$css: true
  },
  scroll: {
    ks0D6T: "x193iq5w",
    kXHlph: "xw2csxc",
    kvh3hx: "x7p5m3t",
    kmVPX3: "x78pyy4",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  table: {
    kLvRdT: "x1vathgz",
    kheTzg: "x2aqbxb",
    kzqmXN: "xezivpi",
    $$css: true
  },
  heading: {
    k7Eaqz: "xtp0tkc",
    kZKoxP: "x9ve8r1",
    kmVPX3: "x78pyy4",
    kB7OPa: "x9f619",
    kGuDYH: "xboafo0",
    k63SB2: "xk50ysn",
    k9WMMc: "x2b8uid",
    $$css: true
  },
  cell: {
    kmVPX3: "x1717udv",
    k7Eaqz: "xtp0tkc",
    $$css: true
  },
  well: {
    kAzted: "x1wszdd",
    k7Eaqz: "xtp0tkc",
    kzqmXN: "xh8yej3",
    kB7OPa: "x9f619",
    k1xSpc: "xrvj5dj",
    kfiyM8: "xc26acl",
    kOIVth: "x1enigpx",
    kmVPX3: "x7gbtqy",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd",
    kaIpWk: "xkrxur",
    kWkggS: "xhpg8l3",
    kMwMTN: "x1gney9c",
    kMv6JI: "xjb2p0i",
    kGuDYH: "xboafo0",
    kLWn49: "xfrs9s4",
    kkrTdU: "x1ypdohk",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  selected: {
    kWkggS: "xmgn9m6 xf7h6k7",
    kMwMTN: "x19rmm7l x1pljmm8",
    $$css: true
  },
  unavailable: {
    kSiTet: "xwq05k6 x1nyumiu",
    kkrTdU: "xt0e3qv",
    $$css: true
  },
  static: {
    kkrTdU: "xt0e3qv",
    $$css: true
  },
  coordinate: {
    k63SB2: "x1s688f",
    kcqcaj: "xss6m8b",
    $$css: true
  }
};
const positionKey = position => JSON.stringify([position.row, position.column]);

/** A plate of up to 1536 wells, with roving keyboard focus and explicit unrecorded cells. */
export const WellPlate = /*#__PURE__*/React.forwardRef(function WellPlate({
  label,
  rows,
  columns,
  wells,
  value,
  defaultValue = null,
  onValueChange,
  description,
  disabled = false,
  readOnly = false,
  className,
  style,
  children,
  ...props
}, ref) {
  const [inner, setInner] = React.useState(defaultValue);
  const current = value === undefined ? inner : value;
  const [focused, setFocused] = React.useState(null);
  const controls = React.useRef(new Map());
  const id = React.useId();
  const bounded = rows.length > 0 && columns.length > 0 && rows.length <= 1536 && columns.length <= 1536 && rows.length * columns.length <= 1536 && wells.length <= 1536;
  const validLayout = bounded && rows.every(row => row.trim()) && columns.every(column => column.trim()) && new Set(rows).size === rows.length && new Set(columns).size === columns.length;
  const records = new Map();
  let validRecords = true;
  if (validLayout) for (const well of wells) {
    const key = positionKey(well);
    if (!rows.includes(well.row) || !columns.includes(well.column) || records.has(key)) {
      validRecords = false;
      break;
    }
    records.set(key, well);
  }
  const valid = validLayout && validRecords;
  const positions = valid ? rows.flatMap(row => columns.map(column => ({
    row,
    column
  }))) : [];
  const enabled = positions.filter(position => !disabled && !records.get(positionKey(position))?.disabled);
  const activeKey = enabled.some(position => positionKey(position) === focused) ? focused : enabled.find(position => current && positionKey(position) === positionKey(current)) ? positionKey(current) : enabled[0] ? positionKey(enabled[0]) : null;
  const choose = position => {
    if (value === undefined) setInner(position);
    onValueChange?.(position);
  };
  const navigate = (event, rowIndex, columnIndex) => {
    const rtl = getComputedStyle(event.currentTarget).direction === "rtl";
    let candidates = [];
    if (event.key === "Home" || event.key === "End") {
      candidates = event.ctrlKey ? positions : positions.slice(rowIndex * columns.length, (rowIndex + 1) * columns.length);
      if (event.key === "End") candidates = [...candidates].reverse();
    } else {
      const rowDelta = event.key === "ArrowDown" ? 1 : event.key === "ArrowUp" ? -1 : 0;
      const columnDelta = event.key === "ArrowRight" ? rtl ? -1 : 1 : event.key === "ArrowLeft" ? rtl ? 1 : -1 : 0;
      if (!rowDelta && !columnDelta) return;
      for (let row = rowIndex + rowDelta, column = columnIndex + columnDelta; row >= 0 && row < rows.length && column >= 0 && column < columns.length; row += rowDelta, column += columnDelta) candidates.push({
        row: rows[row],
        column: columns[column]
      });
    }
    event.preventDefault();
    const target = candidates.find(position => !disabled && !records.get(positionKey(position))?.disabled);
    if (target) {
      const key = positionKey(target);
      setFocused(key);
      controls.current.get(key)?.focus();
    }
  };
  const root = rs(["rs-well-plate", className], styles.root);
  const heading = rs(["rs-well-plate-label"], styles.label);
  const copy = rs(["rs-well-plate-description"], styles.description);
  const scroll = rs(["rs-well-plate-scroll"], styles.scroll);
  const table = rs(["rs-well-plate-table"], styles.table);
  const header = rs(["rs-well-plate-heading"], styles.heading);
  const cell = rs(["rs-well-plate-cell"], styles.cell);
  const coordinate = rs(["rs-well-plate-coordinate"], styles.coordinate);
  return /*#__PURE__*/_jsxs("div", {
    ...props,
    ref: ref,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("p", {
      ...heading,
      id: `${id}-label`,
      children: label
    }), description != null && /*#__PURE__*/_jsx("div", {
      ...copy,
      children: description
    }), !valid ? /*#__PURE__*/_jsx("p", {
      ...copy,
      children: !rows.length || !columns.length ? "No plate layout supplied" : !bounded ? "Plate unavailable: supply at most 1536 wells" : "Plate unavailable: row, column or well records are invalid"
    }) : /*#__PURE__*/_jsxs(_Fragment, {
      children: [!readOnly && /*#__PURE__*/_jsx("p", {
        ...copy,
        id: `${id}-keys`,
        children: "Arrow keys move between wells. Enter or Space selects a well."
      }), /*#__PURE__*/_jsx("div", {
        ...scroll,
        role: "region",
        "aria-labelledby": `${id}-label`,
        tabIndex: readOnly || !enabled.length ? 0 : undefined,
        children: /*#__PURE__*/_jsxs("table", {
          ...table,
          role: readOnly ? undefined : "grid",
          "aria-labelledby": `${id}-label`,
          "aria-describedby": readOnly ? undefined : `${id}-keys`,
          children: [/*#__PURE__*/_jsx("thead", {
            children: /*#__PURE__*/_jsxs("tr", {
              children: [/*#__PURE__*/_jsx("th", {
                ...header,
                scope: "col",
                children: "Well"
              }), columns.map(column => /*#__PURE__*/_jsx("th", {
                ...header,
                scope: "col",
                children: column
              }, column))]
            })
          }), /*#__PURE__*/_jsx("tbody", {
            children: rows.map((row, rowIndex) => /*#__PURE__*/_jsxs("tr", {
              children: [/*#__PURE__*/_jsx("th", {
                ...header,
                scope: "row",
                children: row
              }), columns.map((column, columnIndex) => {
                const position = {
                  row,
                  column
                };
                const key = positionKey(position);
                const record = records.get(key);
                const selected = current != null && positionKey(current) === key;
                const unavailable = disabled || record?.disabled;
                const paint = rs(["rs-well-plate-well", selected && "rs-well-plate-selected", unavailable && "rs-well-plate-unavailable", readOnly && "rs-well-plate-static"], styles.well, selected && styles.selected, unavailable && styles.unavailable, readOnly && styles.static);
                const status = record?.status.trim() || "Unrecorded";
                const contents = /*#__PURE__*/_jsxs(_Fragment, {
                  children: [/*#__PURE__*/_jsx("span", {
                    ...coordinate,
                    children: record?.label ?? `${row}${column}`
                  }), /*#__PURE__*/_jsx("span", {
                    children: status
                  })]
                });
                if (readOnly) return /*#__PURE__*/_jsx("td", {
                  ...cell,
                  children: /*#__PURE__*/_jsxs("div", {
                    ...paint,
                    children: [contents, selected && /*#__PURE__*/_jsx("span", {
                      children: "Selected"
                    })]
                  })
                }, column);
                // Native cells inherit gridcell semantics from the table's grid role;
                // the contained button owns the roving focus target.
                return /*#__PURE__*/_jsx("td", {
                  ...cell,
                  "aria-selected": selected,
                  children: /*#__PURE__*/_jsx("button", {
                    ...paint,
                    type: "button",
                    ref: node => {
                      if (node) controls.current.set(key, node);else controls.current.delete(key);
                    },
                    disabled: unavailable,
                    tabIndex: key === activeKey ? 0 : -1,
                    "aria-label": `Well ${row}, ${column}${record?.label ? `, ${record.label}` : ""}: ${status}`,
                    onFocus: () => setFocused(key),
                    onKeyDown: event => navigate(event, rowIndex, columnIndex),
                    onClick: () => choose(position),
                    children: contents
                  })
                }, column);
              })]
            }, row))
          })]
        })
      })]
    }), children]
  });
});
//# sourceMappingURL=well-plate.js.map
