"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  label: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x1jq7itm",
    k63SB2: "x1s688f",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  list: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    kH6xsr: "x3ct3a4",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    $$css: true
  },
  row: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kmVPX3: "x7gbtqy",
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "xpj7pl4",
    $$css: true
  },
  action: {
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kzqmXN: "x14atkfc",
    ks0D6T: "x193iq5w",
    $$css: true
  },
  button: {
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kg3NbH: "xvpgqt4",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd",
    kaIpWk: "xkrxur",
    kWkggS: "xhpg8l3",
    kMwMTN: "x1gney9c",
    kMv6JI: "xjb2p0i",
    kGuDYH: "x4ro2ui",
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
  note: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x4ro2ui",
    kMwMTN: "x1ixqp2s",
    kLWn49: "xfrs9s4",
    $$css: true
  }
};

/** A controlled layer order with explicit selection, visibility, lock and move actions. */
export const LayerStack = /*#__PURE__*/React.forwardRef(function LayerStack({
  label,
  layers,
  selectedId,
  onSelect,
  onLayersChange,
  disabled,
  className,
  style,
  ...props
}, ref) {
  const root = rs(["rs-layer-stack", className], styles.root);
  const heading = rs(["rs-layer-stack-label"], styles.label);
  const list = rs(["rs-layer-stack-list"], styles.list);
  const row = rs(["rs-layer-stack-row"], styles.row);
  const actions = rs(["rs-layer-stack-actions"], styles.actions);
  const note = rs(["rs-layer-stack-note"], styles.note);
  const action = rs(["rs-layer-stack-action"], styles.action);
  const update = (id, patch) => onLayersChange?.(layers.map(layer => layer.id === id ? {
    ...layer,
    ...patch
  } : layer));
  const move = (index, delta) => {
    const next = [...layers];
    const target = index + delta;
    if (target < 0 || target >= next.length) return;
    [next[index], next[target]] = [next[target], next[index]];
    onLayersChange?.(next);
  };
  return /*#__PURE__*/_jsxs("div", {
    ...props,
    ref: ref,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("p", {
      className: heading.className,
      style: heading.style,
      children: label
    }), layers.length === 0 && /*#__PURE__*/_jsx("p", {
      className: note.className,
      style: note.style,
      children: "No layers"
    }), /*#__PURE__*/_jsx("ol", {
      className: list.className,
      style: list.style,
      children: layers.map((layer, index) => {
        const selected = layer.id === selectedId;
        const select = rs(["rs-layer-stack-button", selected && "rs-layer-stack-selected"], styles.button, selected && styles.selected);
        return /*#__PURE__*/_jsxs("li", {
          className: row.className,
          style: row.style,
          children: [onSelect ? /*#__PURE__*/_jsx("button", {
            type: "button",
            disabled: disabled,
            "aria-pressed": selected,
            className: select.className,
            style: select.style,
            onClick: () => onSelect(layer.id),
            children: layer.label
          }) : /*#__PURE__*/_jsxs("span", {
            children: [layer.label, selected ? " · Selected" : ""]
          }), /*#__PURE__*/_jsxs("span", {
            className: note.className,
            style: note.style,
            children: [layer.visible ? "Visible" : "Hidden", " \xB7 ", layer.locked ? "Locked" : "Unlocked"]
          }), onLayersChange && /*#__PURE__*/_jsxs("div", {
            className: actions.className,
            style: actions.style,
            children: [/*#__PURE__*/_jsx(Button, {
              variant: "ghost",
              size: "sm",
              disabled: disabled,
              "aria-label": `${layer.label} visibility`,
              "aria-pressed": layer.visible,
              ...action,
              onClick: () => update(layer.id, {
                visible: !layer.visible
              }),
              children: "Visibility"
            }), /*#__PURE__*/_jsx(Button, {
              variant: "ghost",
              size: "sm",
              disabled: disabled,
              "aria-label": `${layer.label} lock`,
              "aria-pressed": layer.locked,
              ...action,
              onClick: () => update(layer.id, {
                locked: !layer.locked
              }),
              children: "Lock"
            }), /*#__PURE__*/_jsx(Button, {
              variant: "ghost",
              size: "sm",
              disabled: disabled || layer.locked || index === 0,
              "aria-label": `Move ${layer.label} up`,
              ...action,
              onClick: () => move(index, -1),
              children: "\u2191"
            }), /*#__PURE__*/_jsx(Button, {
              variant: "ghost",
              size: "sm",
              disabled: disabled || layer.locked || index === layers.length - 1,
              "aria-label": `Move ${layer.label} down`,
              ...action,
              onClick: () => move(index, 1),
              children: "\u2193"
            })]
          })]
        }, layer.id);
      })
    })]
  });
});
//# sourceMappingURL=layer-stack.js.map
