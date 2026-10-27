"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { Icon } from "./icon.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x6s0dn4",
    kOIVth: "x13z6uf9",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  vertical: {
    kXwgrk: "xdt5ytf",
    kGNEyG: "x1qjc9v5",
    $$css: true
  },
  pressed: {
    k63SB2: "x1s688f",
    $$css: true
  }
};

/** Named action collection with one Tab stop and roving keyboard focus. */
export const Toolbar = /*#__PURE__*/React.forwardRef(function Toolbar({
  label,
  actions,
  orientation = "horizontal",
  className,
  style,
  onKeyDown,
  ...props
}, ref) {
  const [focused, setFocused] = React.useState();
  const enabled = actions.filter(action => !action.disabled);
  const current = enabled.some(action => action.id === focused) ? focused : enabled[0]?.id;
  const buttons = React.useRef(new Map());
  const vertical = orientation === "vertical";
  const root = rs(["rs-toolbar", className, vertical && "rs-toolbar-vertical"], styles.root, vertical && styles.vertical);
  const pressed = rs(["rs-toolbar-pressed"], styles.pressed);
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    role: "toolbar",
    "aria-label": label,
    "aria-orientation": orientation,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    onKeyDown: event => {
      onKeyDown?.(event);
      if (event.defaultPrevented || !enabled.length) return;
      const index = enabled.findIndex(action => action.id === current);
      const rtl = getComputedStyle(event.currentTarget).direction === "rtl";
      const nextKey = vertical ? "ArrowDown" : rtl ? "ArrowLeft" : "ArrowRight";
      const previousKey = vertical ? "ArrowUp" : rtl ? "ArrowRight" : "ArrowLeft";
      const next = event.key === "Home" ? 0 : event.key === "End" ? enabled.length - 1 : event.key === nextKey ? (index + 1) % enabled.length : event.key === previousKey ? (index - 1 + enabled.length) % enabled.length : -1;
      if (next < 0) return;
      event.preventDefault();
      const action = enabled[next];
      if (action) {
        setFocused(action.id);
        buttons.current.get(action.id)?.focus();
      }
    },
    children: actions.map(action => /*#__PURE__*/_jsxs(Button, {
      ref: element => {
        if (element) buttons.current.set(action.id, element);else buttons.current.delete(action.id);
      },
      variant: action.pressed ? "primary" : "ghost",
      style: {
        width: "auto",
        ...(action.pressed ? pressed.style : {})
      },
      className: action.pressed ? pressed.className : undefined,
      disabled: action.disabled,
      tabIndex: action.id === current ? 0 : -1,
      "aria-pressed": action.pressed,
      onFocus: () => setFocused(action.id),
      onClick: action.onAction,
      children: [action.icon && /*#__PURE__*/_jsx(Icon, {
        name: action.icon
      }), action.label]
    }, action.id))
  });
});
//# sourceMappingURL=toolbar.js.map
