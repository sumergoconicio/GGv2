"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
const styles = {
  root: {
    k1xSpc: "x3nfvp2",
    kB7OPa: "x9f619",
    kGNEyG: "x1qjc9v5",
    kOIVth: "x195vfkc",
    kmVPX3: "x1ruevkc",
    ks0D6T: "x193iq5w",
    kAzted: "x1f83pxg",
    kXHlph: "xw2csxc",
    kaIpWk: "x10mehc3",
    kMzoRj: "xmkeg23",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd xaxtmmi",
    kWkggS: "x6583kg",
    kMwMTN: "x1gney9c",
    kMv6JI: "x1s07pz0",
    $$css: true
  },
  vertical: {
    kXwgrk: "xdt5ytf",
    kzqmXN: "xeepkih",
    k7Eaqz: "x1l6er0i",
    kskxy: "xmz0i5r",
    kORKVm: "x1odjw0f",
    kXHlph: "x6ikm8r",
    kAzted: "x2lwn1j",
    $$css: true
  },
  tab: {
    kysU6D: "xjyslct",
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kUk6DE: "xf1gv0v",
    kOIVth: "x195vfkc",
    k7Eaqz: "x900493",
    kAzted: "x1wxaq2x",
    kB7OPa: "x9f619",
    k8WAf4: "x12ulsxz",
    kg3NbH: "xaope02",
    kaIpWk: "x1khhgft",
    kMzoRj: "xc342km",
    kWkggS: "xjbqb8w x1q26ab9",
    kMwMTN: "x1gney9c",
    kMv6JI: "xjb2p0i",
    kGuDYH: "x1j6dyjg",
    kLWn49: "x1xxsxie",
    k63SB2: "xk50ysn",
    kkrTdU: "x1ypdohk",
    kMeerF: "x1k57tk5 x784prv",
    k3XXqK: "xaatb59",
    kjBf7l: "xqbrbdq",
    kInvED: "x2ssjo2",
    kmkexE: "xvbmxz7 xrozb4q",
    $$css: true
  },
  active: {
    kMwMTN: "x1gney9c x1pljmm8",
    kWkggS: "xhpg8l3 xf7h6k7",
    k63SB2: "x1s688f",
    kAXs8y: "x1kzknox",
    $$css: true
  },
  disabled: {
    kSiTet: "xyd83as",
    kkrTdU: "x1h6gzvc",
    $$css: true
  },
  symbol: {
    k1xSpc: "x3nfvp2",
    kzqmXN: "xvy4d1p",
    kZKoxP: "xxk0z11",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    $$css: true
  },
  verticalTab: {
    kmVPX3: "x1717udv",
    kUk6DE: "x1me1zc0",
    $$css: true
  },
  verticalLabel: {
    kVAEAm: "x10l6tqk",
    kzqmXN: "x1i1rx1s",
    kZKoxP: "xjm9jq1",
    kVQacm: "xb3r6kr",
    kz4h6p: "x1hyvwdk",
    khDVqt: "xuxw1ft",
    $$css: true
  }
};

/** Automatically activated peer tabs. Supply panelId for the associated content. */
export const IOSTabBar = /*#__PURE__*/React.forwardRef(function IOSTabBar({
  items,
  value,
  defaultValue,
  onValueChange,
  orientation = "horizontal",
  label = "App navigation",
  className,
  style,
  onKeyDown,
  ...props
}, ref) {
  const [inner, setInner] = React.useState(defaultValue ?? items.find(item => !item.disabled)?.id);
  const base = React.useId();
  const controlled = value !== undefined;
  const current = controlled ? value : inner;
  const selected = items.find(item => item.id === current && !item.disabled)?.id ?? items.find(item => !item.disabled)?.id;
  const vertical = orientation === "vertical";
  const root = rs(["rs-ios-tab-bar", vertical && "rs-ios-tab-bar-vertical", className], styles.root, vertical && styles.vertical);
  const symbol = rs(["rs-ios-tab-bar-symbol"], styles.symbol);
  const hidden = rs(["rs-ios-tab-bar-vertical-label"], styles.verticalLabel);
  const change = next => {
    if (!controlled) setInner(next);
    if (next !== selected) onValueChange?.(next);
  };
  return /*#__PURE__*/_jsx("div", {
    ...props,
    ref: ref,
    role: "tablist",
    "aria-label": label,
    "aria-orientation": orientation,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    onKeyDown: event => {
      onKeyDown?.(event);
      if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return;
      const tabs = [...event.currentTarget.querySelectorAll('[role="tab"]:not(:disabled)')];
      const index = tabs.indexOf(event.target);
      if (index < 0) return;
      const rtl = getComputedStyle(event.currentTarget).direction === "rtl";
      const previous = vertical ? "ArrowUp" : rtl ? "ArrowRight" : "ArrowLeft";
      const next = vertical ? "ArrowDown" : rtl ? "ArrowLeft" : "ArrowRight";
      const target = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : event.key === next ? (index + 1) % tabs.length : event.key === previous ? (index - 1 + tabs.length) % tabs.length : -1;
      if (target < 0) return;
      event.preventDefault();
      const tab = tabs[target];
      tab.focus();
      change(tab.dataset.value);
    },
    children: items.map(({
      id,
      label: itemLabel,
      icon,
      panelId,
      buttonId,
      disabled,
      className: itemClass,
      style: itemStyle,
      onClick,
      ...buttonProps
    }) => {
      const active = id === selected;
      const tab = rs(["rs-ios-tab-bar-tab", active && "rs-ios-tab-bar-active", vertical && "rs-ios-tab-bar-tab-vertical", disabled && "rs-ios-tab-bar-disabled", itemClass], styles.tab, active && styles.active, vertical && styles.verticalTab, disabled && styles.disabled);
      return /*#__PURE__*/_createElement("button", {
        ...buttonProps,
        key: id,
        id: buttonId ?? `${base}-${id}`,
        type: "button",
        role: "tab",
        "data-value": id,
        disabled: disabled,
        "aria-selected": active,
        "aria-controls": panelId,
        tabIndex: active ? 0 : -1,
        className: tab.className,
        style: {
          ...tab.style,
          ...itemStyle
        },
        onClick: event => {
          onClick?.(event);
          if (!event.defaultPrevented) change(id);
        }
      }, icon && /*#__PURE__*/_jsx("span", {
        ...symbol,
        "aria-hidden": "true",
        children: icon
      }), /*#__PURE__*/_jsx("span", {
        ...(vertical && icon ? hidden : {}),
        children: itemLabel
      }));
    })
  });
});
//# sourceMappingURL=ios-tab-bar.js.map
