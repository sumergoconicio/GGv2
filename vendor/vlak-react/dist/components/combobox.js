"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useMergedRefs } from "../merge-refs.js";
import { useOverlayPosition } from "../use-overlay-position.js";
import { menuStyles } from "./dropdown-menu.js";
import { optionText } from "./select.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    kVAEAm: "x1n2onr6",
    k1xSpc: "x1rg5ohu xa6rfa5",
    k7Eaqz: "x1j0rjk9 x162b59l",
    kzqmXN: "xvolacv",
    $$css: true
  },
  empty: {
    kmVPX3: "x6yrr3s xdoaoy9",
    kGuDYH: "x1dcheo9 xrgdnwz",
    kb6lSQ: "xjat59b",
    kMwMTN: "x1ixqp2s",
    $$css: true
  }
};
const PAGE = 10;

/**
 * Editable combobox: the input holds focus, filters on typed text, and
 * points at the active option with aria-activedescendant.
 */
export const Combobox = /*#__PURE__*/React.forwardRef(function Combobox({
  options,
  value,
  defaultValue,
  onValueChange,
  placeholder = "Search…",
  emptyLabel = "Nothing found.",
  disabled,
  className,
  style,
  id,
  onBlur,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
  ...props
}, ref) {
  const idBase = React.useId();
  const inputId = id ?? `${idBase}-input`;
  const listboxId = `${idBase}-listbox`;
  const optionId = index => `${idBase}-opt-${index}`;
  const rootRef = React.useRef(null);
  const setRootRef = useMergedRefs(rootRef, ref);
  const inputRef = React.useRef(null);
  const activeRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const panelRef = React.useRef(null);
  const placement = useOverlayPosition(open, panelRef, inputRef);
  const [inner, setInner] = React.useState(defaultValue);
  const [searchValue, setSearchValue] = React.useState("");
  const [activeIndex, setActiveIndex] = React.useState(0);
  const isControlled = value !== undefined;
  const current = isControlled ? value : inner;
  const selected = options.find(o => o.value === current);
  const needle = searchValue.trim().toLowerCase();
  const matches = needle ? options.filter(o => optionText(o).toLowerCase().includes(needle)) : options;
  const hasList = open && matches.length > 0;
  const enabled = matches.flatMap((option, index) => option.disabled ? [] : [index]);
  const active = enabled.includes(activeIndex) ? activeIndex : enabled[0] ?? -1;
  React.useEffect(() => {
    if (disabled) setOpen(false);
  }, [disabled]);
  React.useEffect(() => {
    if (!open) return;
    const onPointerDown = e => {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);
  React.useEffect(() => {
    if (hasList) activeRef.current?.scrollIntoView?.({
      block: "nearest"
    });
  }, [hasList, active]);
  const openList = (at = "selected") => {
    setSearchValue("");
    const available = options.flatMap((option, index) => option.disabled ? [] : [index]);
    const selectedIndex = options.findIndex(o => o.value === current && !o.disabled);
    setActiveIndex(at === "last" ? available.at(-1) ?? -1 : selectedIndex >= 0 ? selectedIndex : available[0] ?? -1);
    setOpen(true);
  };
  const pick = option => {
    if (disabled || option.disabled) return;
    if (!isControlled) setInner(option.value);
    onValueChange?.(option.value);
    setSearchValue("");
    setOpen(false);
    inputRef.current?.focus();
  };
  const onKeyDown = e => {
    if (disabled) return;
    const move = offset => {
      if (!enabled.length) {
        setActiveIndex(-1);
        return;
      }
      const next = Math.max(0, Math.min(enabled.length - 1, enabled.indexOf(active) + offset));
      setActiveIndex(enabled[next]);
    };
    if (!open) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        openList();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        openList("last");
      }
      return;
    }
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        move(1);
        return;
      case "ArrowUp":
        e.preventDefault();
        move(-1);
        return;
      case "Home":
        e.preventDefault();
        setActiveIndex(enabled[0] ?? -1);
        return;
      case "End":
        e.preventDefault();
        setActiveIndex(enabled.at(-1) ?? -1);
        return;
      case "PageUp":
        e.preventDefault();
        move(-PAGE);
        return;
      case "PageDown":
        e.preventDefault();
        move(PAGE);
        return;
      case "Enter":
        {
          e.preventDefault();
          const match = matches[active];
          if (match) pick(match);
          return;
        }
      case "Escape":
        e.preventDefault();
        setSearchValue("");
        setOpen(false);
        return;
      case "Tab":
        setOpen(false);
        return;
      default:
        return;
    }
  };
  const root = rs(["rs-combobox", className], styles.root);
  const menu = rs(["rs-menu"], menuStyles.menu, menuStyles.menuCombobox);
  const empty = rs(["rs-combobox-empty"], styles.empty);
  return /*#__PURE__*/_jsxs("div", {
    ref: setRootRef,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    onBlur: e => {
      onBlur?.(e);
      const to = e.relatedTarget;
      if (open && to && !rootRef.current?.contains(to)) setOpen(false);
    },
    ...props,
    children: [/*#__PURE__*/_jsx("input", {
      ref: inputRef,
      id: inputId,
      className: "rs-input rs-input-full",
      type: "text",
      role: "combobox",
      autoComplete: "off",
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledby,
      "aria-expanded": open,
      "aria-controls": hasList ? listboxId : undefined,
      "aria-activedescendant": hasList && active >= 0 ? optionId(active) : undefined,
      "aria-autocomplete": "list",
      disabled: disabled,
      placeholder: placeholder,
      value: open ? searchValue : selected ? optionText(selected) : "",
      onClick: () => {
        if (!open) openList();
      },
      onChange: e => {
        setSearchValue(e.target.value);
        setActiveIndex(0);
        setOpen(true);
      },
      onKeyDown: onKeyDown
    }), open && /*#__PURE__*/_jsxs("div", {
      id: hasList ? listboxId : undefined,
      role: hasList ? "listbox" : undefined,
      "aria-labelledby": hasList ? ariaLabelledby ?? inputId : undefined,
      tabIndex: -1,
      className: menu.className,
      ref: panelRef,
      style: {
        ...menu.style,
        ...placement
      },
      onMouseDown: e => e.preventDefault(),
      children: [matches.length === 0 && /*#__PURE__*/_jsx("div", {
        className: empty.className,
        style: empty.style,
        children: emptyLabel
      }), matches.map((option, index) => {
        const highlighted = index === active && !option.disabled;
        const row = rs(["rs-menu-item", highlighted && "rs-menu-item-active", option.disabled && "rs-menu-item-disabled"], menuStyles.item, highlighted && menuStyles.itemActive, option.disabled && menuStyles.itemDisabled);
        return /*#__PURE__*/_jsx("div", {
          id: optionId(index),
          ref: highlighted ? activeRef : undefined,
          role: "option",
          tabIndex: -1,
          "aria-selected": option.value === current,
          "aria-disabled": option.disabled || undefined,
          className: row.className,
          style: row.style,
          onPointerEnter: () => {
            if (!option.disabled) setActiveIndex(index);
          },
          onClick: () => pick(option),
          children: option.label
        }, option.value);
      })]
    })]
  });
});
//# sourceMappingURL=combobox.js.map
