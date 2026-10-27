"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { useMergedRefs } from "../merge-refs.js";
import { useOverlayPosition } from "../use-overlay-position.js";
import { Calendar } from "./calendar.js";
import { Icon } from "./icon.js";
import { menuStyles } from "./dropdown-menu.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  calMenu: {
    kt4wiu: "x1woyocn",
    kmVPX3: "x79iv2k",
    kWkggS: "xhpg8l3",
    $$css: true
  }
};
const defaultDateFormat = d => d.toLocaleDateString("en", {
  day: "numeric",
  month: "long",
  year: "numeric"
});

/**
 * Hairline trigger that opens a calendar in a non-modal dialog. Focus
 * moves to the selected (or today's) day; Escape, Tab out, and a click
 * outside close it; focus returns to the trigger.
 */
export const DatePicker = /*#__PURE__*/React.forwardRef(function DatePicker({
  value,
  defaultValue,
  onValueChange,
  onChange,
  placeholder = "Pick a date",
  format = defaultDateFormat,
  disabled,
  min,
  max,
  isDateDisabled,
  locale,
  dialogLabel = "Choose a date",
  className,
  style,
  onKeyDown,
  onBlur,
  ...props
}, ref) {
  const idBase = React.useId();
  const dialogId = `${idBase}-dialog`;
  const rootRef = React.useRef(null);
  const setRootRef = useMergedRefs(rootRef, ref);
  const triggerRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const panelRef = React.useRef(null);
  const placement = useOverlayPosition(open, panelRef, triggerRef);
  const [inner, setInner] = React.useState(defaultValue);
  const isControlled = value !== undefined;
  const current = isControlled ? value : inner;
  React.useEffect(() => {
    if (!open) return;
    const onPointerDown = e => {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);
  const close = restoreFocus => {
    setOpen(false);
    if (restoreFocus) triggerRef.current?.focus();
  };
  const choose = d => {
    if (!isControlled) setInner(d);
    onValueChange?.(d);
    onChange?.(d);
    close(true);
  };
  const root = rs(["rs-select", className], menuStyles.select);
  const trigger = rs(["rs-dropdown"], menuStyles.dropdown);
  const menu = rs(["rs-menu", "rs-date-picker-cal-menu"], menuStyles.menu, menuStyles.menuOverlay, menuStyles.menuCal, styles.calMenu);
  return /*#__PURE__*/_jsxs("div", {
    ref: setRootRef,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    onKeyDown: e => {
      onKeyDown?.(e);
      if (e.defaultPrevented) return;
      if (e.key === "Escape" && open) {
        e.preventDefault();
        close(true);
      } else if (e.key === "ArrowDown" && !open && e.target === triggerRef.current) {
        e.preventDefault();
        setOpen(true);
      }
    },
    onBlur: e => {
      onBlur?.(e);
      const to = e.relatedTarget;
      if (open && to && !rootRef.current?.contains(to)) setOpen(false);
    },
    ...props,
    children: [/*#__PURE__*/_jsxs("button", {
      ref: triggerRef,
      type: "button",
      className: trigger.className,
      style: trigger.style,
      "aria-haspopup": "dialog",
      "aria-expanded": open,
      "aria-controls": open ? dialogId : undefined,
      disabled: disabled,
      onClick: () => open ? close(true) : setOpen(true),
      children: [/*#__PURE__*/_jsx("span", {
        children: current ? format(current) : placeholder
      }), /*#__PURE__*/_jsx(Icon, {
        name: "calendar",
        size: 16
      })]
    }), open && /*#__PURE__*/_jsx("div", {
      ref: panelRef,
      id: dialogId,
      role: "dialog",
      "aria-label": dialogLabel,
      className: menu.className,
      style: {
        ...menu.style,
        ...placement
      },
      children: /*#__PURE__*/_jsx(Calendar, {
        autoFocus: placement.visibility === "visible",
        value: current,
        onValueChange: choose,
        min: min,
        max: max,
        isDateDisabled: isDateDisabled,
        locale: locale
      })
    })]
  });
});
//# sourceMappingURL=date-picker.js.map
