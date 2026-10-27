"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  nav: {
    kB7OPa: "x9f619",
    kWkggS: "xhpg8l3",
    kMwMTN: "x1gney9c",
    kMv6JI: "x168gdka",
    $$css: true
  },
  list: {
    k1xSpc: "x78zum5",
    kXwgrk: "x1q0g3np",
    kGNEyG: "x1qjc9v5",
    kjj79g: "x1l1ennw",
    kOIVth: "x1jnr06f",
    kH6xsr: "x3ct3a4",
    kmVPX3: "xcuk4bc",
    kogj98: "x1ghz6dp",
    $$css: true
  },
  rail: {
    kXwgrk: "xdt5ytf",
    kGNEyG: "x1qjc9v5",
    kjj79g: "xlqzeqv",
    kzqmXN: "x29ncy0",
    kmVPX3: "xxpua8",
    kOIVth: "x1v2ro7d",
    $$css: true
  },
  item: {
    k7Eaqz: "xeuugli",
    kzQI83: "x1iyjqo2",
    k1xSpc: "x78zum5",
    kjj79g: "xl56j7k",
    $$css: true
  },
  control: {
    kysU6D: "xjyslct",
    kB7OPa: "x9f619",
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kOIVth: "x1jnr06f",
    kzqmXN: "xh8yej3",
    k7Eaqz: "x900493",
    kAzted: "x8nclml",
    kmVPX3: "xsmg1hj",
    kMzoRj: "xc342km",
    kaIpWk: "xgqmno8",
    kMv6JI: "xjb2p0i",
    kGuDYH: "xfifm61",
    k63SB2: "xk50ysn",
    kLWn49: "xwn7fz2",
    k9WMMc: "x2b8uid",
    kybGjl: "x1hl2dhg",
    kMwMTN: "x1ixqp2s",
    kWkggS: "xjbqb8w xqol87o",
    kkrTdU: "x1ypdohk",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x14tvtkk",
    kInvED: "x2ssjo2",
    $$css: true
  },
  current: {
    kMwMTN: "x1gney9c",
    k63SB2: "x1s688f",
    $$css: true
  },
  disabled: {
    kSiTet: "xyd83as",
    kkrTdU: "x1h6gzvc",
    $$css: true
  },
  indicator: {
    k1xSpc: "x78zum5",
    kjj79g: "xl56j7k",
    kGNEyG: "x6s0dn4",
    kzqmXN: "x15yg21f",
    kZKoxP: "x10w6t97",
    kaIpWk: "xgqmno8",
    kmkexE: "xyc8uzx xrozb4q",
    $$css: true
  },
  activeIndicator: {
    kWkggS: "xmgn9m6 xf7h6k7",
    kMwMTN: "x19rmm7l x1pljmm8",
    $$css: true
  },
  label: {
    kHjlTd: "xj0a0fe",
    kg3NbH: "x5k8d2m",
    $$css: true
  }
};
export const AndroidNavigation = /*#__PURE__*/React.forwardRef(function AndroidNavigation({
  items,
  value,
  defaultValue,
  onValueChange,
  orientation = "horizontal",
  className,
  style,
  onKeyDown,
  ...props
}, ref) {
  const [inner, setInner] = React.useState(defaultValue ?? items.find(item => !item.disabled)?.value);
  const current = value ?? inner;
  const sx = rs(["rs-android-navigation", className], styles.nav);
  const list = rs(["rs-android-navigation-list", orientation === "vertical" && "rs-android-navigation-rail"], styles.list, orientation === "vertical" && styles.rail);
  function handleKeyDown(event) {
    onKeyDown?.(event);
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return;
    const nextKey = orientation === "vertical" ? "ArrowDown" : "ArrowRight";
    const previousKey = orientation === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (![nextKey, previousKey, "Home", "End"].includes(event.key)) return;
    const controls = Array.from(event.currentTarget.querySelectorAll("[data-android-destination]:not([aria-disabled='true'])"));
    const index = controls.indexOf(document.activeElement);
    if (index < 0 || !controls.length) return;
    event.preventDefault();
    const rtl = orientation === "horizontal" && getComputedStyle(event.currentTarget).direction === "rtl";
    const direction = (event.key === nextKey ? 1 : -1) * (rtl ? -1 : 1);
    controls[event.key === "Home" ? 0 : event.key === "End" ? controls.length - 1 : (index + direction + controls.length) % controls.length]?.focus();
  }
  return /*#__PURE__*/_jsx("nav", {
    ref: ref,
    "aria-label": "Main navigation",
    ...props,
    onKeyDown: handleKeyDown,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    },
    children: /*#__PURE__*/_jsx("ul", {
      ...list,
      children: items.map(item => {
        const active = item.value === current;
        const row = rs(["rs-android-navigation-item"], styles.item);
        const control = rs(["rs-android-navigation-control", active && "rs-android-navigation-current", item.disabled && "rs-android-navigation-disabled"], styles.control, active && styles.current, item.disabled && styles.disabled);
        const indicator = rs(["rs-android-navigation-indicator", active && "rs-android-navigation-active-indicator"], styles.indicator, active && styles.activeIndicator);
        const label = rs(["rs-android-navigation-label"], styles.label);
        const content = /*#__PURE__*/_jsxs(_Fragment, {
          children: [/*#__PURE__*/_jsx("span", {
            ...indicator,
            "aria-hidden": "true",
            children: item.icon ?? item.label.slice(0, 1)
          }), /*#__PURE__*/_jsx("span", {
            ...label,
            children: item.label
          })]
        });
        const shared = {
          ...control,
          "data-android-destination": "",
          "aria-current": active ? "page" : undefined,
          "aria-disabled": item.disabled || undefined,
          onClick: () => {
            if (!item.disabled) {
              if (value === undefined) setInner(item.value);
              onValueChange?.(item.value);
            }
          }
        };
        return /*#__PURE__*/_jsx("li", {
          ...row,
          children: item.href ? /*#__PURE__*/_jsx("a", {
            ...shared,
            href: item.disabled ? undefined : item.href,
            target: item.target,
            rel: item.rel,
            tabIndex: item.disabled ? -1 : undefined,
            children: content
          }) : /*#__PURE__*/_jsx("button", {
            ...shared,
            type: "button",
            disabled: item.disabled,
            children: content
          })
        }, item.value);
      })
    })
  });
});
//# sourceMappingURL=android-navigation.js.map
