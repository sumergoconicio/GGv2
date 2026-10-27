"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useMergedRefs } from "../merge-refs.js";
import { useOverlayPosition } from "../use-overlay-position.js";
import { MenuPanel, menuStyles } from "./dropdown-menu.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  bar: {
    kB7OPa: "x9f619",
    k1xSpc: "x3nfvp2",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x6s0dn4",
    kOIVth: "x195vfkc",
    k7Eaqz: "xeuugli",
    ks0D6T: "x193iq5w",
    kzqmXN: "xvolacv",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kaIpWk: "xkrxur x16r9t5",
    kmVPX3: "x1i3ajwb",
    $$css: true
  },
  wrap: {
    kVAEAm: "x1n2onr6",
    k1xSpc: "x78zum5",
    kUk6DE: "xkz0k9k",
    k7Eaqz: "xeuugli",
    ks0D6T: "x193iq5w",
    $$css: true
  },
  trigger: {
    kB7OPa: "x9f619",
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    ks0D6T: "x193iq5w",
    kmVPX3: "xu8om6g",
    kMzoRj: "xc342km",
    kaIpWk: "xkrxur",
    kMv6JI: "xjb2p0i",
    kGuDYH: "x1jq7itm",
    kLWn49: "x132q4wb",
    kMwMTN: "x1gney9c",
    kWkggS: "xjbqb8w xlt1z8a x1oallzf",
    kHjlTd: "xj0a0fe",
    kkrTdU: "x1ypdohk",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "xqbrbdq",
    kInvED: "x2ssjo2",
    $$css: true
  },
  open: {
    kWkggS: "x6583kg xlt1z8a xqau7aa xf7h6k7",
    kMwMTN: "x1gney9c x1pljmm8",
    $$css: true
  },
  panel: {
    k7Eaqz: "xuu4ctt",
    kzqmXN: "xezivpi",
    ks0D6T: "x1usz39j",
    $$css: true
  }
};

/**
 * Dropdown menus in a hairline strip. The triggers are menuitems with one
 * roving tab stop; ArrowLeft/ArrowRight move between them and an open
 * menu follows.
 */
export const Menubar = /*#__PURE__*/React.forwardRef(function Menubar({
  menus,
  className,
  style,
  onKeyDown,
  ...props
}, ref) {
  const idBase = React.useId();
  const rootRef = React.useRef(null);
  const setRootRef = useMergedRefs(rootRef, ref);
  const triggerRefs = React.useRef([]);
  const [focusIndex, setFocusIndex] = React.useState(0);
  const [openIndex, setOpenIndex] = React.useState(null);
  const panelRef = React.useRef(null);
  // Changing the open menu must also reposition the newly mounted panel.
  const openTrigger = React.useMemo(() => ({
    current: openIndex === null ? null : triggerRefs.current[openIndex] ?? null
  }), [openIndex]);
  const placement = useOverlayPosition(openIndex !== null, panelRef, openTrigger);
  const [initial, setInitial] = React.useState("first");
  const count = menus.length;
  React.useEffect(() => {
    if (openIndex === null) return;
    const onPointerDown = e => {
      if (!rootRef.current?.contains(e.target)) setOpenIndex(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [openIndex]);
  const focusTrigger = index => {
    setFocusIndex(index);
    triggerRefs.current[index]?.focus();
  };
  const openMenu = (index, at = "first") => {
    setFocusIndex(index);
    setInitial(at);
    setOpenIndex(index);
  };
  const closeMenu = reason => {
    setOpenIndex(null);
    if (reason !== "outside") triggerRefs.current[focusIndex]?.focus();
  };
  const moveTo = index => {
    const next = (index + count) % count;
    if (openIndex !== null) openMenu(next);else focusTrigger(next);
  };
  const onBarKeyDown = e => {
    onKeyDown?.(e);
    if (e.defaultPrevented || count === 0) return;
    const index = triggerRefs.current.indexOf(e.target);
    if (index < 0) return;
    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        moveTo(index + 1);
        return;
      case "ArrowLeft":
        e.preventDefault();
        moveTo(index - 1);
        return;
      case "Home":
        e.preventDefault();
        moveTo(0);
        return;
      case "End":
        e.preventDefault();
        moveTo(count - 1);
        return;
      case "ArrowDown":
      case "Enter":
      case " ":
        e.preventDefault();
        openMenu(index, "first");
        return;
      case "ArrowUp":
        e.preventDefault();
        openMenu(index, "last");
        return;
      case "Escape":
        if (openIndex !== null) {
          e.preventDefault();
          closeMenu("escape");
        }
        return;
      default:
        return;
    }
  };
  const bar = rs(["rs-menubar", className], styles.bar);
  const wrap = rs(["rs-menubar-wrap"], styles.wrap);
  const menu = rs(["rs-menu"], menuStyles.menu, menuStyles.menuOverlay);
  const panel = rs(["rs-menubar-panel"], styles.panel);
  return /*#__PURE__*/_jsx("div", {
    ref: setRootRef,
    role: "menubar",
    ...props,
    className: bar.className,
    style: {
      ...bar.style,
      ...style
    },
    onKeyDown: onBarKeyDown,
    children: menus.map((entry, index) => {
      const triggerId = `${idBase}-trigger-${index}`;
      const menuId = `${idBase}-menu-${index}`;
      const isOpen = openIndex === index;
      const trigger = rs(["rs-menubar-trigger", isOpen && "rs-menubar-trigger-open"], styles.trigger, isOpen && styles.open);
      return /*#__PURE__*/_jsxs("div", {
        className: wrap.className,
        style: wrap.style,
        children: [/*#__PURE__*/_jsx("button", {
          ref: el => {
            triggerRefs.current[index] = el;
          },
          id: triggerId,
          type: "button",
          role: "menuitem",
          className: trigger.className,
          style: trigger.style,
          tabIndex: focusIndex === index ? 0 : -1,
          "aria-haspopup": "menu",
          "aria-expanded": isOpen,
          "aria-controls": isOpen ? menuId : undefined,
          onFocus: () => setFocusIndex(index),
          onClick: () => isOpen ? closeMenu("select") : openMenu(index),
          onPointerEnter: () => {
            if (openIndex !== null && openIndex !== index) openMenu(index);
          },
          children: entry.label
        }), isOpen && /*#__PURE__*/_jsx(MenuPanel, {
          id: menuId,
          items: entry.items,
          labelledBy: triggerId,
          initial: initial,
          className: `${menu.className} ${panel.className}`,
          panelRef: panelRef,
          style: {
            ...menu.style,
            ...panel.style,
            ...placement
          },
          onClose: closeMenu,
          onHorizontal: dir => moveTo(index + dir)
        })]
      }, index);
    })
  });
});
//# sourceMappingURL=menubar.js.map
