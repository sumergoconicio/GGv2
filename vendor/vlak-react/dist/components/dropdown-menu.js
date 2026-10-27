"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useMergedRefs } from "../merge-refs.js";
import { useOverlayPosition } from "../use-overlay-position.js";
import { Icon } from "./icon.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const menuStyles = {
  select: {
    kVAEAm: "x1n2onr6",
    k1xSpc: "x1rg5ohu xa6rfa5",
    k7Eaqz: "x1n83r6o x162b59l",
    kzqmXN: "xvolacv",
    $$css: true
  },
  dropdown: {
    kB7OPa: "x9f619",
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kjj79g: "x1qughib",
    kOIVth: "x8233eu",
    k8WAf4: "x3a08hx x93xex7",
    kg3NbH: "x1ryrjj2 x507p67",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd",
    kaIpWk: "xkrxur x16r9t5",
    kGuDYH: "xkpwil5 xzwmqnn",
    kMwMTN: "x1gney9c",
    kb6lSQ: "xjat59b",
    kkrTdU: "x1ypdohk",
    kMv6JI: "xjb2p0i",
    kWkggS: "xjbqb8w",
    kzqmXN: "xh8yej3",
    kAzted: "x1wszdd xs41724",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x14tvtkk",
    kInvED: "x7s97pk",
    $$css: true
  },
  menu: {
    kB7OPa: "x9f619",
    kmVPX3: "x78pyy4",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kaIpWk: "xkrxur x16r9t5",
    keoZOQ: "x5j7nwy x24ezfa",
    kVQacm: "xb3r6kr",
    kWkggS: "xhpg8l3",
    kGVxlE: "x1cuznne x1qik9ta",
    $$css: true
  },
  menuOverlay: {
    kVAEAm: "x10l6tqk",
    k87sOh: "xdsb8wn",
    kLqNvP: "x1o0tod",
    kt4wiu: "xtijo5x",
    kY2c9j: "xhupvvu",
    $$css: true
  },
  menuFixed: {
    kVAEAm: "xixxii4",
    kY2c9j: "xhupvvu",
    keoZOQ: "xdj266r",
    k7Eaqz: "xuu4ctt",
    $$css: true
  },
  menuCal: {
    kt4wiu: "x1woyocn",
    kmVPX3: "x79iv2k",
    $$css: true
  },
  menuCombobox: {
    kVAEAm: "x10l6tqk",
    k87sOh: "xdsb8wn",
    kLqNvP: "x1o0tod",
    kt4wiu: "xtijo5x",
    kY2c9j: "xhupvvu",
    kskxy: "x54lwg9",
    kORKVm: "x1odjw0f",
    $$css: true
  },
  item: {
    kB7OPa: "x9f619",
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kOIVth: "x13z6uf9",
    k8WAf4: "x3a08hx x93xex7",
    kg3NbH: "x1ryrjj2 x507p67",
    kGuDYH: "xkpwil5 xzwmqnn",
    kMwMTN: "x1gney9c xi95fv7 x1sy4l04 xg8h1re",
    kb6lSQ: "xjat59b",
    kMzoRj: "xc342km",
    kaIpWk: "xkrxur",
    kzqmXN: "xh8yej3",
    k9WMMc: "x1yc453h",
    kkrTdU: "x1ypdohk",
    kWkggS: "xjbqb8w xggpjlz x18t4had x1u80c4y",
    kMv6JI: "xjb2p0i",
    kAzted: "x1wszdd xs41724",
    kMeerF: "x1k57tk5 x1sn8m x1bugjqu",
    k3XXqK: "x1t137rt x1nhjkzg x1wzr1wi",
    kjBf7l: "xklvzg7",
    kInvED: "x2ssjo2",
    kAXs8y: "x1kzknox",
    $$css: true
  },
  itemIndicator: {
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kUk6DE: "x1nslcl8",
    kzqmXN: "xcdlrvm",
    kZKoxP: "x1l36t39",
    $$css: true
  },
  itemLabel: {
    kUk6DE: "x12lumcd",
    k7Eaqz: "xeuugli",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  itemActive: {
    kWkggS: "xow1vt1 xggpjlz xf7h6k7",
    kMwMTN: "x1gney9c xi95fv7 x1pljmm8",
    $$css: true
  },
  itemDisabled: {
    kMwMTN: "x1ixqp2s",
    kkrTdU: "xt0e3qv",
    $$css: true
  },
  sep: {
    kMzoRj: "xc342km",
    kEafiO: "x1ro6g4h",
    kPef9Z: "x13fuv20",
    kLZC3w: "x1fq36pv",
    kqGvvJ: "x8atrpe",
    kUOVxO: "x1wboj75",
    $$css: true
  }
};

/** Text a menu item answers to for type-ahead. */
export function menuItemText(item) {
  if (item.searchText) return item.searchText;
  return typeof item.label === "string" ? item.label : "";
}

/**
 * Next index whose text starts with `query`, searching forward from `from`
 * and wrapping. A repeated single letter cycles through its matches.
 */
export function typeAheadIndex(texts, from, query) {
  const q = query.toLowerCase();
  const repeated = q.length > 1 && q.split("").every(c => c === q[0]);
  const needle = repeated ? q[0] : q;
  const start = repeated || q.length === 1 ? from + 1 : from;
  for (let k = 0; k < texts.length; k++) {
    const i = (start + k + texts.length) % texts.length;
    if (texts[i].toLowerCase().startsWith(needle)) return i;
  }
  return -1;
}

/** Why a menu closed; decides whether focus goes back to the trigger. */

/**
 * The open `role="menu"` list: roving tabindex, arrows wrap, Home/End,
 * type-ahead, Escape and Tab close. Focus lands on the first item on mount.
 */
export function MenuPanel({
  id,
  items,
  className,
  style,
  labelledBy,
  initial = "first",
  onClose,
  onHorizontal,
  panelRef,
  onBack
}) {
  const actionable = items.filter(item => !item.separator);
  const enabled = actionable.map((item, index) => item.disabled ? -1 : index).filter(i => i >= 0);
  const [active, setActive] = React.useState(() => initial === "last" ? enabled[enabled.length - 1] ?? 0 : enabled[0] ?? 0);
  const itemRefs = React.useRef([]);
  const [submenu, setSubmenu] = React.useState(null);
  const subAnchor = React.useRef(null);
  subAnchor.current = submenu === null ? null : itemRefs.current[submenu] ?? null;
  const typed = React.useRef({
    buffer: "",
    at: 0
  });
  const typedTimer = React.useRef(undefined);
  React.useEffect(() => {
    // A positioned popover mounts hidden while its bounds are measured.
    // Browsers cannot focus its items until the visible commit has landed.
    if (style?.visibility !== "hidden") itemRefs.current[active]?.focus();
  }, [active, style?.visibility]);
  React.useEffect(() => () => clearTimeout(typedTimer.current), []);
  const choose = item => {
    if (item.disabled) return;
    if (item.items?.length) {
      setSubmenu(actionable.indexOf(item));
      return;
    }
    onClose("select");
    if (item.checked !== undefined) item.onCheckedChange?.(!item.checked);
    item.onSelect?.();
  };
  const step = dir => {
    if (enabled.length === 0) return;
    setSubmenu(null);
    const pos = enabled.indexOf(active);
    setActive(enabled[(pos + dir + enabled.length) % enabled.length]);
  };
  const onKeyDown = e => {
    if (e.target.closest('[role="menu"]') !== e.currentTarget) return;
    const rtl = getComputedStyle(e.currentTarget).direction === "rtl";
    const forward = rtl ? "ArrowLeft" : "ArrowRight";
    const backward = rtl ? "ArrowRight" : "ArrowLeft";
    if (e.key === forward && actionable[active]?.items?.length) {
      e.preventDefault();
      setSubmenu(active);
      return;
    }
    if (e.key === backward && onBack) {
      e.preventDefault();
      onBack();
      return;
    }
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        step(1);
        return;
      case "ArrowUp":
        e.preventDefault();
        step(-1);
        return;
      case "Home":
        e.preventDefault();
        setSubmenu(null);
        if (enabled.length) setActive(enabled[0]);
        return;
      case "End":
        e.preventDefault();
        setSubmenu(null);
        if (enabled.length) setActive(enabled[enabled.length - 1]);
        return;
      case "ArrowLeft":
      case "ArrowRight":
        if (onHorizontal) {
          e.preventDefault();
          onHorizontal(e.key === "ArrowLeft" ? -1 : 1);
        }
        return;
      case "Escape":
        e.preventDefault();
        if (onBack) onBack();else onClose("escape");
        return;
      case "Tab":
        onClose("tab");
        return;
      case "Enter":
      case " ":
        {
          e.preventDefault();
          const item = actionable[active];
          if (item) choose(item);
          return;
        }
      default:
        break;
    }
    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      const now = Date.now();
      const buffer = now - typed.current.at < 500 ? typed.current.buffer + e.key : e.key;
      typed.current = {
        buffer,
        at: now
      };
      clearTimeout(typedTimer.current);
      typedTimer.current = setTimeout(() => {
        typed.current = {
          buffer: "",
          at: 0
        };
      }, 500);
      const texts = actionable.map(item => item.disabled ? "" : menuItemText(item));
      const next = typeAheadIndex(texts, active, buffer);
      if (next >= 0) {
        setSubmenu(null);
        setActive(next);
      }
    }
  };
  let actionIndex = -1;
  const indicator = rs(["rs-menu-item-indicator"], menuStyles.itemIndicator);
  const label = rs(["rs-menu-item-label"], menuStyles.itemLabel);
  return /*#__PURE__*/_jsxs("div", {
    ref: panelRef,
    id: id,
    role: "menu",
    "aria-labelledby": labelledBy,
    className: className,
    style: style,
    onKeyDown: onKeyDown,
    children: [items.map((item, index) => {
      if (item.separator) {
        const sep = rs(["rs-menu-sep"], menuStyles.sep);
        return /*#__PURE__*/_jsx("hr", {
          className: sep.className,
          style: sep.style
        }, `sep-${index}`);
      }
      actionIndex++;
      const current = actionIndex;
      const row = rs(["rs-menu-item", current === active && "rs-menu-item-active", item.disabled && "rs-menu-item-disabled"], menuStyles.item, current === active && menuStyles.itemActive, item.disabled && menuStyles.itemDisabled);
      return /*#__PURE__*/_jsxs("button", {
        id: `${id}-item-${current}`,
        ref: el => {
          itemRefs.current[current] = el;
        },
        type: "button",
        role: item.checked !== undefined ? "menuitemcheckbox" : "menuitem",
        "aria-checked": item.checked,
        "aria-haspopup": item.items?.length ? "menu" : undefined,
        "aria-expanded": item.items?.length ? submenu === current : undefined,
        "aria-controls": item.items?.length && submenu === current ? `${id}-sub-${current}` : undefined,
        tabIndex: current === active ? 0 : -1,
        "aria-disabled": item.disabled || undefined,
        className: row.className,
        style: row.style,
        onPointerEnter: () => {
          if (!item.disabled && current !== active) {
            setSubmenu(null);
            setActive(current);
          }
        },
        onFocus: () => {
          if (!item.disabled) setActive(current);
        },
        onClick: () => choose(item),
        children: [item.checked !== undefined && /*#__PURE__*/_jsx("span", {
          ...indicator,
          "aria-hidden": "true",
          children: item.checked ? /*#__PURE__*/_jsx(Icon, {
            name: "check",
            size: 16
          }) : null
        }), /*#__PURE__*/_jsx("span", {
          ...label,
          children: item.label
        }), item.items?.length ? /*#__PURE__*/_jsx("span", {
          ...indicator,
          "aria-hidden": "true",
          children: /*#__PURE__*/_jsx(Icon, {
            name: "chevron-right",
            size: 16
          })
        }) : null]
      }, index);
    }), submenu !== null && submenu === active && actionable[submenu]?.items?.length ? /*#__PURE__*/_jsx(NestedMenu, {
      id: `${id}-sub-${submenu}`,
      items: actionable[submenu].items,
      labelledBy: `${id}-item-${submenu}`,
      anchor: subAnchor,
      onClose: onClose,
      onBack: () => {
        setSubmenu(null);
        itemRefs.current[active]?.focus();
      }
    }) : null]
  });
}
function NestedMenu({
  anchor,
  ...props
}) {
  const panel = React.useRef(null);
  const position = useOverlayPosition(true, panel, anchor, undefined, "inline-end");
  const menu = rs(["rs-menu", "rs-menu-nested"], menuStyles.menu, menuStyles.menuFixed);
  return /*#__PURE__*/_jsx(MenuPanel, {
    ...props,
    panelRef: panel,
    className: menu.className,
    style: {
      ...menu.style,
      ...position
    }
  });
}

/** Action menu with menu semantics and keyboard navigation. */
export const DropdownMenu = /*#__PURE__*/React.forwardRef(function DropdownMenu({
  label,
  items,
  side = "auto",
  className,
  style,
  ...props
}, ref) {
  const idBase = React.useId();
  const triggerId = `${idBase}-trigger`;
  const menuId = `${idBase}-menu`;
  const rootRef = React.useRef(null);
  const setRootRef = useMergedRefs(rootRef, ref);
  const triggerRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const [initial, setInitial] = React.useState("first");
  const panelRef = React.useRef(null);
  const placement = useOverlayPosition(open, panelRef, triggerRef, undefined, "bottom", {
    side
  });
  React.useEffect(() => {
    if (!open) return;
    const onPointerDown = e => {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);
  const openMenu = at => {
    setInitial(at);
    setOpen(true);
  };
  const close = reason => {
    setOpen(false);
    if (reason !== "outside") triggerRef.current?.focus();
  };
  const onTriggerKeyDown = e => {
    if (!open) {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openMenu("first");
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        openMenu("last");
      }
      return;
    }
    if (e.key === "Escape") {
      e.preventDefault();
      close("escape");
    }
  };
  const root = rs(["rs-select", className], menuStyles.select);
  const trigger = rs(["rs-dropdown"], menuStyles.dropdown);
  const menu = rs(["rs-menu"], menuStyles.menu, menuStyles.menuOverlay);
  return /*#__PURE__*/_jsxs("div", {
    ref: setRootRef,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    ...props,
    children: [/*#__PURE__*/_jsxs("button", {
      ref: triggerRef,
      id: triggerId,
      type: "button",
      className: trigger.className,
      style: trigger.style,
      "aria-haspopup": "menu",
      "aria-expanded": open,
      "aria-controls": open ? menuId : undefined,
      onClick: () => open ? close("select") : openMenu("first"),
      onKeyDown: onTriggerKeyDown,
      children: [/*#__PURE__*/_jsx("span", {
        children: label
      }), /*#__PURE__*/_jsx(Icon, {
        name: "chevron-right",
        rotate: 90
      })]
    }), open && /*#__PURE__*/_jsx(MenuPanel, {
      panelRef: panelRef,
      id: menuId,
      items: items,
      labelledBy: triggerId,
      initial: initial,
      className: menu.className,
      style: {
        ...menu.style,
        ...placement
      },
      onClose: close
    })]
  });
});
//# sourceMappingURL=dropdown-menu.js.map
