"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { useOverlayPosition } from "../use-overlay-position.js";
import { MenuPanel, menuStyles } from "./dropdown-menu.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  trigger: {
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x14tvtkk",
    kInvED: "x7s97pk",
    $$css: true
  },
  pin: {
    kVAEAm: "xixxii4",
    kY2c9j: "xhupvvu",
    kWkggS: "xhpg8l3",
    $$css: true
  }
};
/**
 * Menu at the pointer on right-click, or anchored to the trigger on
 * Shift+F10 / the ContextMenu key. The wrapper is tabbable (pass
 * `tabIndex={-1}` when the child is focusable itself); focus returns to
 * whatever had it when the menu closes.
 */
export const ContextMenu = /*#__PURE__*/React.forwardRef(function ContextMenu({
  items,
  className,
  style,
  children,
  onContextMenu,
  onKeyDown,
  ...props
}, ref) {
  const idBase = React.useId();
  const menuId = `${idBase}-menu`;
  const [at, setAt] = React.useState(null);
  const menuRef = React.useRef(null);
  const restoreTo = React.useRef(null);
  const placement = useOverlayPosition(at !== null, menuRef, restoreTo, at);
  React.useEffect(() => {
    if (!at) return;
    const onPointerDown = e => {
      if (!menuRef.current?.contains(e.target)) setAt(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [at]);
  const openAt = (x, y) => {
    restoreTo.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setAt({
      x,
      y
    });
  };
  const openFromRect = el => {
    const r = el.getBoundingClientRect();
    openAt(r.left, r.bottom);
  };
  const close = reason => {
    setAt(null);
    if (reason !== "outside") restoreTo.current?.focus();
  };
  const trigger = rs(["rs-context-menu-trigger", className], styles.trigger);
  const menu = rs(["rs-menu", "rs-context-menu-pin"], menuStyles.menu, menuStyles.menuFixed, styles.pin);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    tabIndex: 0,
    "aria-keyshortcuts": "Shift+F10",
    className: trigger.className,
    style: {
      ...trigger.style,
      ...style
    },
    onContextMenu: e => {
      onContextMenu?.(e);
      if (e.defaultPrevented) return;
      e.preventDefault();
      /* A keyboard-synthesised contextmenu event carries no pointer position. */
      if (e.clientX === 0 && e.clientY === 0) openFromRect(e.currentTarget);else openAt(e.clientX, e.clientY);
    },
    onKeyDown: e => {
      onKeyDown?.(e);
      if (e.defaultPrevented || at) return;
      if (e.key === "F10" && e.shiftKey || e.key === "ContextMenu") {
        e.preventDefault();
        openFromRect(e.currentTarget);
      }
    },
    ...props,
    children: [children, at && /*#__PURE__*/_jsx(MenuPanel, {
      panelRef: menuRef,
      id: menuId,
      items: items,
      className: menu.className,
      style: {
        ...menu.style,
        ...placement
      },
      onClose: close
    })]
  });
});
//# sourceMappingURL=context-menu.js.map
