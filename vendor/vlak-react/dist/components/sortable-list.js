"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { Icon } from "./icon.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const styles = {
  root: {
    kH6xsr: "x3ct3a4",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    kzqmXN: "xh8yej3",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  item: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kwnvtZ: "x1a02dak",
    kjj79g: "x1qughib",
    kOIVth: "x8233eu",
    k8WAf4: "xo0yzjp",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  content: {
    kUk6DE: "x3daqg1",
    k7Eaqz: "xeuugli",
    kHjlTd: "xj0a0fe",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kOIVth: "xvh977a",
    $$css: true
  },
  status: {
    kVAEAm: "x10l6tqk",
    kzqmXN: "x1i1rx1s",
    kZKoxP: "xjm9jq1",
    kVQacm: "xb3r6kr",
    kz4h6p: "x1hyvwdk",
    khDVqt: "xuxw1ft",
    $$css: true
  }
};

/** Reordering through drag, named move buttons, or Alt and the arrow keys. */
export const SortableList = /*#__PURE__*/React.forwardRef(function SortableList({
  value,
  defaultValue = [],
  onValueChange,
  label = "Reorder items",
  className,
  style,
  ...props
}, ref) {
  const [inner, setInner] = React.useState(defaultValue);
  const items = value ?? inner;
  const [announcement, setAnnouncement] = React.useState("");
  const dragging = React.useRef(null);
  const handles = React.useRef(new Map());
  const pending = React.useRef(null);
  React.useLayoutEffect(() => {
    const request = pending.current;
    if (!request || request.order.length !== items.length || !request.order.every((id, index) => items[index]?.id === id)) return;
    pending.current = null;
    const index = items.findIndex(item => item.id === request.id);
    const item = items[index];
    if (item) {
      setAnnouncement(`${item.label}, position ${index + 1} of ${items.length}`);
      handles.current.get(item.id)?.focus();
    }
  }, [items]);
  const move = (id, destination) => {
    const source = items.findIndex(item => item.id === id);
    const item = items[source];
    if (!item || item.disabled || destination < 0 || destination >= items.length || destination === source) return;
    const next = [...items];
    next.splice(source, 1);
    next.splice(destination, 0, item);
    pending.current = {
      id,
      order: next.map(entry => entry.id)
    };
    if (value === undefined) setInner(next);
    onValueChange?.(next);
  };
  const root = rs(["rs-sortable-list", className], styles.root);
  const row = rs(["rs-sortable-list-item"], styles.item);
  const content = rs(["rs-sortable-list-content"], styles.content);
  const actions = rs(["rs-sortable-list-actions"], styles.actions);
  const status = rs(["rs-sortable-list-status"], styles.status);
  const helpId = React.useId();
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx("span", {
      ...status,
      id: helpId,
      children: "Use move buttons, or focus an item handle and press Alt with Arrow up or Arrow down."
    }), /*#__PURE__*/_jsx("ol", {
      ref: ref,
      "aria-label": label,
      ...props,
      className: root.className,
      style: {
        ...root.style,
        ...style
      },
      children: items.map((item, index) => /*#__PURE__*/_jsxs("li", {
        ...row,
        onDragOver: event => {
          if (dragging.current) event.preventDefault();
        },
        onDrop: event => {
          event.preventDefault();
          if (dragging.current) move(dragging.current, index);
          dragging.current = null;
        },
        children: [/*#__PURE__*/_jsx(Button, {
          ref: element => {
            if (element) handles.current.set(item.id, element);else handles.current.delete(item.id);
          },
          variant: "ghost",
          style: {
            width: "auto",
            paddingInline: "0.75rem"
          },
          draggable: !item.disabled,
          disabled: item.disabled,
          "aria-label": `Move ${item.label}`,
          "aria-describedby": helpId,
          onDragStart: event => {
            dragging.current = item.id;
            event.dataTransfer.effectAllowed = "move";
            event.dataTransfer.setData("text/plain", item.id);
          },
          onDragEnd: () => {
            dragging.current = null;
          },
          onKeyDown: event => {
            if (event.altKey && ["ArrowUp", "ArrowDown"].includes(event.key)) {
              event.preventDefault();
              move(item.id, index + (event.key === "ArrowUp" ? -1 : 1));
            }
          },
          children: /*#__PURE__*/_jsx(Icon, {
            name: "grip"
          })
        }), /*#__PURE__*/_jsx("div", {
          ...content,
          children: item.content ?? item.label
        }), /*#__PURE__*/_jsxs("div", {
          ...actions,
          children: [/*#__PURE__*/_jsx(Button, {
            variant: "ghost",
            style: {
              width: "auto",
              paddingInline: "0.75rem"
            },
            disabled: item.disabled || index === 0,
            "aria-label": `Move ${item.label} up`,
            onClick: () => move(item.id, index - 1),
            children: /*#__PURE__*/_jsx(Icon, {
              name: "arrow-up"
            })
          }), /*#__PURE__*/_jsx(Button, {
            variant: "ghost",
            style: {
              width: "auto",
              paddingInline: "0.75rem"
            },
            disabled: item.disabled || index === items.length - 1,
            "aria-label": `Move ${item.label} down`,
            onClick: () => move(item.id, index + 1),
            children: /*#__PURE__*/_jsx(Icon, {
              name: "arrow-down"
            })
          })]
        })]
      }, item.id))
    }), /*#__PURE__*/_jsx("span", {
      ...status,
      role: "status",
      children: announcement
    })]
  });
});
//# sourceMappingURL=sortable-list.js.map
