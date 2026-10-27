"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";

/** One-based aligned column indexes, independent of supplied genomic positions. */
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
  title: {
    kogj98: "x1ghz6dp",
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
  scroll: {
    ks0D6T: "x193iq5w",
    k7Eaqz: "xeuugli",
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
    kzqmXN: "xezivpi",
    kLvRdT: "x1mwwwfo",
    ksoyAI: "xzt5al7",
    $$css: true
  },
  heading: {
    kmVPX3: "x7gbtqy",
    kGuDYH: "xboafo0",
    k63SB2: "xk50ysn",
    k9WMMc: "x1yc453h",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    khDVqt: "xuxw1ft",
    $$css: true
  },
  column: {
    k7Eaqz: "xtp0tkc",
    kmVPX3: "x1717udv",
    k9WMMc: "x2b8uid",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  base: {
    k7Eaqz: "xtp0tkc",
    kmVPX3: "x7gbtqy",
    kB7OPa: "x9f619",
    k9WMMc: "x2b8uid",
    kGuDYH: "x1jchvi3",
    kMv6JI: "x1n2ylgu",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  selected: {
    kWkggS: "xmgn9m6 xf7h6k7",
    kMwMTN: "x19rmm7l x1pljmm8",
    $$css: true
  },
  control: {
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kmVPX3: "x7gbtqy",
    kB7OPa: "x9f619",
    kMzoRj: "xc342km",
    kaIpWk: "x2u8bby",
    kWkggS: "xjbqb8w",
    kMwMTN: "x1heor9g",
    kMv6JI: "xjb2p0i",
    kGuDYH: "xboafo0",
    kcqcaj: "xss6m8b",
    kkrTdU: "x1ypdohk",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x14ytart",
    kInvED: "x2ssjo2",
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    $$css: true
  },
  action: {
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kzqmXN: "x14atkfc",
    $$css: true
  }
};
/** A bounded window of already aligned strings; reference positions and gaps are caller-supplied. */
export const SequenceAlignment = /*#__PURE__*/React.forwardRef(function SequenceAlignment({
  label,
  contig,
  referenceLabel,
  referenceSequence,
  positions,
  reads,
  value,
  defaultValue = null,
  onValueChange,
  readOnly = false,
  className,
  style,
  children,
  ...props
}, ref) {
  const [inner, setInner] = React.useState(defaultValue);
  const current = value === undefined ? inner : value;
  const [focusColumn, setFocusColumn] = React.useState(1);
  const anchor = React.useRef(null);
  const buttons = React.useRef(new Map());
  const id = React.useId();
  const bounded = positions.length <= 120 && reads.length <= 32;
  const valid = bounded && positions.length > 0 && referenceSequence.length === positions.length && /^[A-Za-z.*-]+$/.test(referenceSequence) && positions.every((position, index) => position == null ? /[-.]/.test(referenceSequence[index]) : Number.isSafeInteger(position) && position >= 1 && !/[-.]/.test(referenceSequence[index])) && reads.every(read => read.sequence.length === positions.length && /^[A-Za-z.*-]+$/.test(read.sequence)) && new Set(reads.map(read => read.id)).size === reads.length;
  const validSelection = current != null && Number.isSafeInteger(current.startColumn) && Number.isSafeInteger(current.endColumn) && current.startColumn >= 1 && current.endColumn >= current.startColumn && current.endColumn <= positions.length;
  const select = next => {
    if (value === undefined) setInner(next);
    onValueChange?.(next);
  };
  const choose = column => {
    anchor.current = column;
    select({
      startColumn: column,
      endColumn: column
    });
  };
  const move = (event, column) => {
    const next = event.key === "Home" ? 1 : event.key === "End" ? positions.length : event.key === "ArrowRight" ? Math.min(positions.length, column + 1) : event.key === "ArrowLeft" ? Math.max(1, column - 1) : null;
    if (next == null) return;
    event.preventDefault();
    setFocusColumn(next);
    buttons.current.get(next)?.focus();
    if (event.shiftKey) {
      const start = anchor.current ?? (validSelection ? current.startColumn : column);
      anchor.current = start;
      select({
        startColumn: Math.min(start, next),
        endColumn: Math.max(start, next)
      });
    }
  };
  const root = rs(["rs-sequence-alignment", className], styles.root);
  const title = rs(["rs-sequence-alignment-title"], styles.title);
  const copy = rs(["rs-sequence-alignment-copy"], styles.copy);
  const scroll = rs(["rs-sequence-alignment-scroll"], styles.scroll);
  const table = rs(["rs-sequence-alignment-table"], styles.table);
  const heading = rs(["rs-sequence-alignment-heading"], styles.heading);
  const control = rs(["rs-sequence-alignment-control"], styles.control);
  const actions = rs(["rs-sequence-alignment-actions"], styles.actions);
  const action = rs(["rs-sequence-alignment-action"], styles.action);
  const isSelected = column => validSelection && column >= current.startColumn && column <= current.endColumn;
  return /*#__PURE__*/_jsxs("div", {
    ...props,
    ref: ref,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("p", {
      ...title,
      id: `${id}-label`,
      children: label
    }), /*#__PURE__*/_jsxs("p", {
      ...copy,
      children: [contig, " \xB7 1-based reference positions; aligned columns include gaps"]
    }), !valid ? /*#__PURE__*/_jsx("p", {
      ...copy,
      children: !positions.length ? "No alignment columns supplied" : !bounded ? "Alignment unavailable: supply at most 120 columns and 32 reads" : "Alignment unavailable: sequences, positions or read identifiers are inconsistent"
    }) : /*#__PURE__*/_jsxs(_Fragment, {
      children: [!readOnly && /*#__PURE__*/_jsx("p", {
        ...copy,
        id: `${id}-keys`,
        children: "Arrow keys move between columns. Enter selects a base; Shift with Arrow keys extends a region."
      }), /*#__PURE__*/_jsx("div", {
        ...scroll,
        role: "region",
        "aria-labelledby": `${id}-label`,
        tabIndex: readOnly ? 0 : undefined,
        children: /*#__PURE__*/_jsxs("table", {
          ...table,
          "aria-label": `${label}, reference and reads`,
          "aria-describedby": !readOnly ? `${id}-keys` : undefined,
          children: [/*#__PURE__*/_jsx("thead", {
            children: /*#__PURE__*/_jsxs("tr", {
              children: [/*#__PURE__*/_jsx("th", {
                ...heading,
                scope: "col",
                children: "Reference position"
              }), positions.map((position, index) => {
                const selected = isSelected(index + 1);
                const cell = rs(["rs-sequence-alignment-column", selected && "rs-sequence-alignment-selected"], styles.column, selected && styles.selected);
                return /*#__PURE__*/_jsx("th", {
                  ...cell,
                  scope: "col",
                  children: readOnly ? /*#__PURE__*/_jsx("span", {
                    children: position ?? "Gap"
                  }) : /*#__PURE__*/_jsx("button", {
                    ...control,
                    type: "button",
                    ref: node => {
                      if (node) buttons.current.set(index + 1, node);else buttons.current.delete(index + 1);
                    },
                    tabIndex: index + 1 === Math.min(focusColumn, positions.length) ? 0 : -1,
                    "aria-pressed": selected,
                    "aria-label": `Column ${index + 1}, ${position == null ? "reference gap" : `${contig} position ${position}`}, reference ${referenceSequence[index]}`,
                    onFocus: () => setFocusColumn(index + 1),
                    onKeyDown: event => move(event, index + 1),
                    onClick: () => choose(index + 1),
                    children: position ?? "Gap"
                  })
                }, index);
              })]
            })
          }), /*#__PURE__*/_jsx("tbody", {
            children: [{
              id: "reference",
              label: referenceLabel,
              sequence: referenceSequence
            }, ...reads].map((read, rowIndex) => /*#__PURE__*/_jsxs("tr", {
              children: [/*#__PURE__*/_jsx("th", {
                ...heading,
                scope: "row",
                children: read.label
              }), [...read.sequence].map((base, index) => {
                const selected = isSelected(index + 1);
                const cell = rs(["rs-sequence-alignment-base", selected && "rs-sequence-alignment-selected"], styles.base, selected && styles.selected);
                return /*#__PURE__*/_jsx("td", {
                  ...cell,
                  children: base
                }, index);
              })]
            }, `${rowIndex}-${read.id}`))
          })]
        })
      }), !readOnly && /*#__PURE__*/_jsxs("div", {
        ...actions,
        children: [/*#__PURE__*/_jsx(Button, {
          ...action,
          variant: "ghost",
          onClick: () => {
            anchor.current = 1;
            select({
              startColumn: 1,
              endColumn: positions.length
            });
          },
          children: "Select all columns"
        }), /*#__PURE__*/_jsx(Button, {
          ...action,
          variant: "ghost",
          disabled: current == null,
          onClick: () => {
            anchor.current = null;
            select(null);
          },
          children: "Clear selection"
        })]
      }), /*#__PURE__*/_jsx("p", {
        ...copy,
        role: "status",
        children: validSelection ? `Selected columns ${current.startColumn}–${current.endColumn}; reference positions ${positions.slice(current.startColumn - 1, current.endColumn).map(position => position ?? "gap").join(", ")}` : current == null ? "No columns selected" : "Selected columns unavailable"
      })]
    }), children]
  });
});
//# sourceMappingURL=sequence-alignment.js.map
