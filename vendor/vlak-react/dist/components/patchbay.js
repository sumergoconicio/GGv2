"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useInputValue } from "../use-input-value.js";
import { useMergedRefs } from "../merge-refs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    k7Eaqz: "xeuugli",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    kMzoRj: "xc342km",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  legend: {
    k1K539: "x1gr9t9r",
    kmVPX3: "x1717udv",
    kGuDYH: "x1jq7itm",
    k63SB2: "x1s688f",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  viewport: {
    k7Eaqz: "xeuugli",
    ks0D6T: "x193iq5w",
    kVQacm: "xysyzu8",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    $$css: true
  },
  table: {
    kzqmXN: "xh8yej3",
    kLvRdT: "x1mwwwfo",
    kGuDYH: "x4ro2ui",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  header: {
    k9WMMc: "x1yc453h",
    kXLuUW: "x16dsc37",
    k7Eaqz: "x1bnrkr7",
    kmVPX3: "x1835gkm",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    k63SB2: "xk50ysn",
    $$css: true
  },
  detail: {
    k1xSpc: "x1lliihq",
    k63SB2: "xo1l8bm",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x4ro2ui",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  cell: {
    k9WMMc: "x2b8uid",
    kXLuUW: "x16dsc37",
    kmVPX3: "x7gbtqy",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  control: {
    kVAEAm: "x1n2onr6",
    k1xSpc: "xwz0xwf",
    kgQiWS: "x1ku5rj1",
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kB7OPa: "x9f619",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd",
    kaIpWk: "xkrxur",
    kWkggS: "xhpg8l3",
    kMwMTN: "x1gney9c",
    kkrTdU: "x1ypdohk",
    kMeerF: "x16gxa91",
    k3XXqK: "x14xc8xn",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  connected: {
    kWkggS: "xmgn9m6 xf7h6k7",
    kMwMTN: "x19rmm7l x1pljmm8",
    $$css: true
  },
  blocked: {
    kkrTdU: "xt0e3qv",
    ksu8eU: "xbsl7fq",
    $$css: true
  },
  input: {
    kVAEAm: "x10l6tqk",
    kpwlN0: "x1jz8bvi",
    kzqmXN: "x9s46ru",
    kZKoxP: "x1c0ccdx",
    kogj98: "x1ghz6dp",
    kSiTet: "xg01cxk",
    kkrTdU: "xmper1u",
    $$css: true
  },
  note: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x4ro2ui",
    kMwMTN: "x1ixqp2s",
    kLWn49: "xfrs9s4",
    ks0D6T: "x1qp14f0",
    $$css: true
  }
};

/** A connection matrix for supplied ports; the caller owns the routing engine. */
export const Patchbay = /*#__PURE__*/React.forwardRef(function Patchbay({
  label,
  sources,
  destinations,
  value,
  defaultValue = [],
  onValueChange,
  getBlockReason,
  readOnly,
  disabled,
  name,
  form,
  className,
  style,
  ...props
}, ref) {
  const id = React.useId();
  const [, refresh] = React.useReducer(n => n + 1, 0);
  const [current, setValue, fieldRef] = useInputValue(value, defaultValue, onValueChange, refresh);
  const mergedRef = useMergedRefs(ref, fieldRef);
  const [focusIndex, setFocusIndex] = React.useState(0);
  const controls = React.useRef(new Map());
  const cells = sources.flatMap(source => destinations.map(destination => {
    const connected = current.some(connection => connection.sourceId === source.id && connection.destinationId === destination.id);
    const reason = !source.signalType.trim() || !destination.signalType.trim() ? "Signal type unavailable." : source.signalType !== destination.signalType ? `Signal types differ: ${source.signalType} to ${destination.signalType}.` : getBlockReason?.(source, destination) ?? null;
    return {
      source,
      destination,
      connected,
      reason,
      blocked: Boolean(disabled || readOnly || reason && !connected)
    };
  }));
  const tabIndex = cells[focusIndex] && !cells[focusIndex].blocked ? focusIndex : cells.findIndex(cell => !cell.blocked);
  const unknown = current.filter(connection => !sources.some(source => source.id === connection.sourceId) || !destinations.some(destination => destination.id === connection.destinationId));
  const moveFocus = (event, index) => {
    const columns = destinations.length;
    const key = event.key;
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(key)) return;
    event.preventDefault();
    const rowStart = Math.floor(index / columns) * columns;
    let target = key === "Home" ? event.ctrlKey ? 0 : rowStart : key === "End" ? event.ctrlKey ? cells.length - 1 : rowStart + columns - 1 : index + (key === "ArrowUp" ? -columns : key === "ArrowDown" ? columns : key === "ArrowLeft" ? -1 : 1);
    const direction = key === "ArrowLeft" || key === "ArrowUp" || key === "End" ? -1 : 1;
    const stride = key === "ArrowUp" || key === "ArrowDown" ? columns : 1;
    while (target >= 0 && target < cells.length) {
      if ((key === "ArrowLeft" || key === "ArrowRight" || (key === "Home" || key === "End") && !event.ctrlKey) && Math.floor(target / columns) !== Math.floor(index / columns)) break;
      if (!cells[target].blocked) {
        controls.current.get(target)?.focus();
        break;
      }
      target += direction * stride;
    }
  };
  const root = rs(["rs-patchbay", className], styles.root);
  const legend = rs(["rs-patchbay-legend"], styles.legend);
  const viewport = rs(["rs-patchbay-viewport"], styles.viewport);
  const table = rs(["rs-patchbay-table"], styles.table);
  const header = rs(["rs-patchbay-header"], styles.header);
  const detail = rs(["rs-patchbay-detail"], styles.detail);
  const cellStyle = rs(["rs-patchbay-cell"], styles.cell);
  const input = rs(["rs-patchbay-input"], styles.input);
  const note = rs(["rs-patchbay-note"], styles.note);
  return /*#__PURE__*/_jsxs("fieldset", {
    ...props,
    ref: mergedRef,
    name: name,
    form: form,
    disabled: disabled,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("legend", {
      className: legend.className,
      style: legend.style,
      children: label
    }), sources.length === 0 || destinations.length === 0 ? /*#__PURE__*/_jsx("p", {
      className: note.className,
      style: note.style,
      children: "Supply source and destination ports to edit connections."
    }) : /*#__PURE__*/_jsx("div", {
      className: viewport.className,
      style: viewport.style,
      children: /*#__PURE__*/_jsxs("table", {
        className: table.className,
        style: table.style,
        children: [/*#__PURE__*/_jsx("thead", {
          children: /*#__PURE__*/_jsxs("tr", {
            children: [/*#__PURE__*/_jsx("th", {
              scope: "col",
              className: header.className,
              style: header.style,
              children: "Source / destination"
            }), destinations.map(port => /*#__PURE__*/_jsxs("th", {
              scope: "col",
              className: header.className,
              style: header.style,
              children: [port.label, /*#__PURE__*/_jsx("span", {
                className: detail.className,
                style: detail.style,
                children: [port.group, port.signalType].filter(Boolean).join(" · ")
              })]
            }, port.id))]
          })
        }), /*#__PURE__*/_jsx("tbody", {
          children: sources.map((source, row) => /*#__PURE__*/_jsxs("tr", {
            children: [/*#__PURE__*/_jsxs("th", {
              scope: "row",
              className: header.className,
              style: header.style,
              children: [source.label, /*#__PURE__*/_jsx("span", {
                className: detail.className,
                style: detail.style,
                children: [source.group, source.signalType].filter(Boolean).join(" · ")
              })]
            }), destinations.map((destination, column) => {
              const index = row * destinations.length + column;
              const cell = cells[index];
              const control = rs(["rs-patchbay-control", cell.connected && "rs-patchbay-connected", cell.blocked && "rs-patchbay-blocked"], styles.control, cell.connected && styles.connected, cell.blocked && styles.blocked);
              return /*#__PURE__*/_jsxs("td", {
                className: cellStyle.className,
                style: cellStyle.style,
                children: [/*#__PURE__*/_jsxs("label", {
                  className: control.className,
                  style: control.style,
                  children: [/*#__PURE__*/_jsx("span", {
                    "aria-hidden": "true",
                    children: cell.connected ? "✓" : cell.reason ? "×" : "+"
                  }), /*#__PURE__*/_jsx("input", {
                    ref: node => {
                      if (node) controls.current.set(index, node);else controls.current.delete(index);
                    },
                    type: "checkbox",
                    name: name,
                    form: form,
                    value: JSON.stringify([source.id, destination.id]),
                    checked: cell.connected,
                    disabled: cell.blocked,
                    tabIndex: index === tabIndex ? 0 : -1,
                    "aria-label": `${source.label} to ${destination.label}`,
                    "aria-describedby": cell.reason ? `${id}-reason-${index}` : undefined,
                    className: input.className,
                    style: input.style,
                    onFocus: () => setFocusIndex(index),
                    onKeyDown: event => moveFocus(event, index),
                    onChange: () => setValue(cell.connected ? current.filter(connection => connection.sourceId !== source.id || connection.destinationId !== destination.id) : [...current, {
                      sourceId: source.id,
                      destinationId: destination.id
                    }])
                  })]
                }), cell.reason && /*#__PURE__*/_jsxs("span", {
                  id: `${id}-reason-${index}`,
                  className: detail.className,
                  style: detail.style,
                  children: [cell.reason, cell.connected ? " Existing connection can be removed." : ""]
                })]
              }, destination.id);
            })]
          }, source.id))
        })]
      })
    }), readOnly && /*#__PURE__*/_jsx("p", {
      className: note.className,
      style: note.style,
      children: "Read only"
    }), unknown.length > 0 && /*#__PURE__*/_jsxs("div", {
      className: note.className,
      style: note.style,
      children: ["Connections with unavailable ports:", /*#__PURE__*/_jsx("ul", {
        children: unknown.map((connection, index) => /*#__PURE__*/_jsxs("li", {
          children: [connection.sourceId, " to ", connection.destinationId]
        }, index))
      })]
    }), name && current.filter(connection => readOnly || unknown.includes(connection)).map((connection, index) => /*#__PURE__*/_jsx("input", {
      type: "hidden",
      name: name,
      form: form,
      value: JSON.stringify([connection.sourceId, connection.destinationId])
    }, index))]
  });
});
//# sourceMappingURL=patchbay.js.map
