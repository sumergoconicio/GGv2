"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useMergedRefs } from "../merge-refs.js";
import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "x3nfvp2",
    kGNEyG: "x1qjc9v5",
    kB7OPa: "x9f619",
    kOIVth: "x195vfkc",
    kmVPX3: "x9ms5i6",
    kAzted: "x7ywyr2",
    ks0D6T: "x193iq5w",
    kXHlph: "xw2csxc",
    kMv6JI: "x1s07pz0",
    kaIpWk: "xaszc3p",
    kWkggS: "x6583kg",
    kMzoRj: "xmkeg23",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd xaxtmmi",
    $$css: true
  },
  item: {
    kysU6D: "xjyslct",
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kUk6DE: "xc8qplx",
    k7Eaqz: "x1nb6za0",
    kAzted: "x1gg8mnh",
    kB7OPa: "x9f619",
    k8WAf4: "xp59q4u",
    kg3NbH: "x1hr3lfm",
    kMzoRj: "xc342km",
    kaIpWk: "x13pz1uv",
    kWkggS: "xjbqb8w x1q26ab9",
    kMwMTN: "x1gney9c",
    kMv6JI: "xjb2p0i",
    kGuDYH: "x1jvydc1",
    kLWn49: "x1fc57z9",
    k63SB2: "xk50ysn",
    kkrTdU: "x1ypdohk",
    kMeerF: "x1k57tk5 x784prv",
    k3XXqK: "xaatb59",
    kjBf7l: "xqbrbdq",
    kInvED: "x2ssjo2",
    kmkexE: "x14z0dze xrozb4q",
    $$css: true
  },
  selected: {
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
  }
};

/** A mutually exclusive choice with one Tab stop and arrow-key selection. */
export const IOSSegmentedControl = /*#__PURE__*/React.forwardRef(function IOSSegmentedControl({
  items,
  value,
  defaultValue,
  onValueChange,
  name,
  form,
  disabled,
  label = "View",
  className,
  style,
  onKeyDown,
  ...props
}, forwardedRef) {
  const initial = defaultValue ?? items.find(item => !item.disabled)?.id;
  const [inner, setInner] = React.useState(initial);
  const rootRef = React.useRef(null);
  const ref = useMergedRefs(rootRef, forwardedRef);
  const controlled = value !== undefined;
  const current = controlled ? value : inner;
  const selected = items.find(item => item.id === current && !item.disabled)?.id ?? items.find(item => !item.disabled)?.id;
  React.useEffect(() => {
    const owner = form ? document.getElementById(form) : rootRef.current?.closest("form");
    let mounted = true;
    const reset = event => queueMicrotask(() => {
      if (mounted && !controlled && !event.defaultPrevented) setInner(initial);
    });
    owner?.addEventListener("reset", reset);
    return () => {
      mounted = false;
      owner?.removeEventListener("reset", reset);
    };
  }, [controlled, initial, form]);
  const root = rs(["rs-ios-segmented-control", className], styles.root);
  const change = next => {
    if (!controlled) setInner(next);
    if (next !== selected) onValueChange?.(next);
  };
  return /*#__PURE__*/_jsxs("div", {
    ...props,
    ref: ref,
    role: "radiogroup",
    "aria-label": label,
    "aria-disabled": disabled || undefined,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    onKeyDown: event => {
      onKeyDown?.(event);
      if (event.defaultPrevented || disabled || event.altKey || event.ctrlKey || event.metaKey) return;
      const buttons = [...event.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)')];
      const index = buttons.indexOf(event.target);
      if (index < 0) return;
      const rtl = getComputedStyle(event.currentTarget).direction === "rtl";
      const delta = event.key === "ArrowDown" || event.key === (rtl ? "ArrowLeft" : "ArrowRight") ? 1 : event.key === "ArrowUp" || event.key === (rtl ? "ArrowRight" : "ArrowLeft") ? -1 : 0;
      const target = event.key === "Home" ? 0 : event.key === "End" ? buttons.length - 1 : delta ? (index + delta + buttons.length) % buttons.length : -1;
      if (target < 0) return;
      event.preventDefault();
      const button = buttons[target];
      button.focus();
      change(button.dataset.value);
    },
    children: [items.map(item => {
      const active = item.id === selected;
      const off = disabled || item.disabled;
      const segment = rs(["rs-ios-segmented-control-item", active && "rs-ios-segmented-control-selected", off && "rs-ios-segmented-control-disabled"], styles.item, active && styles.selected, off && styles.disabled);
      return /*#__PURE__*/_createElement("button", {
        ...segment,
        key: item.id,
        type: "button",
        role: "radio",
        "aria-checked": active,
        "data-value": item.id,
        disabled: off,
        tabIndex: active && !off ? 0 : -1,
        onClick: () => change(item.id)
      }, item.label);
    }), name && /*#__PURE__*/_jsx("input", {
      type: "hidden",
      name: name,
      form: form,
      value: selected ?? "",
      disabled: disabled || !selected
    })]
  });
});
//# sourceMappingURL=ios-segmented-control.js.map
