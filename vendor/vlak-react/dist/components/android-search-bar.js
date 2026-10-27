"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { setRef } from "../merge-refs.js";
import { Icon } from "./icon.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  bar: {
    kzqmXN: "xh8yej3",
    ks0D6T: "x193iq5w",
    kB7OPa: "x9f619",
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kOIVth: "x167g77z",
    kAzted: "xbktkl8",
    k7Eaqz: "xeuugli",
    kg3NbH: "xaope02",
    kMzoRj: "xmkeg23",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd",
    kaIpWk: "x1jvnzes",
    kWkggS: "x6583kg",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  icon: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kmuXW: "x2lah0s",
    kzqmXN: "xvy4d1p",
    kZKoxP: "xxk0z11",
    kUOVxO: "xjgtzcg",
    $$css: true
  },
  input: {
    kysU6D: "xjyslct",
    kB7OPa: "x9f619",
    kUk6DE: "x845mor",
    kzqmXN: "xnalus7",
    k7Eaqz: "x1nb6za0",
    kAzted: "x1wxaq2x",
    kmVPX3: "x1ib1h6n",
    kogj98: "x1ghz6dp",
    kMzoRj: "xc342km",
    kaIpWk: "x12oqio5",
    kWkggS: "xjbqb8w",
    kMwMTN: "x1gney9c",
    kMv6JI: "x168gdka",
    kGuDYH: "x1j61zf2",
    kLWn49: "x1evy7pa",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x14tvtkk",
    kInvED: "x1wfwxd8",
    k8Qsv1: "x1romblr",
    kH8XJS: "x7xwk5j",
    kONv6d: "x1ad04t7",
    $$css: true
  },
  clear: {
    kysU6D: "xjyslct",
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kmuXW: "x2lah0s",
    kzqmXN: "x187nhsf",
    kZKoxP: "xn3w4p2",
    k71WvV: "x1ws5yxj",
    kmVPX3: "x1717udv",
    kMzoRj: "xc342km",
    kaIpWk: "x16rqkct",
    kWkggS: "xjbqb8w xqol87o",
    kMwMTN: "x1gney9c",
    kkrTdU: "x1ypdohk",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x14tvtkk",
    kInvED: "x1wfwxd8",
    $$css: true
  },
  disabled: {
    kSiTet: "xyd83as",
    $$css: true
  }
};
export const AndroidSearchBar = /*#__PURE__*/React.forwardRef(function AndroidSearchBar({
  value,
  defaultValue = "",
  onValueChange,
  onChange,
  onKeyDown,
  disabled,
  readOnly,
  clearLabel = "Clear search",
  className,
  style,
  containerClassName,
  containerStyle,
  ...props
}, forwardedRef) {
  const [inner, setInner] = React.useState(defaultValue);
  const input = React.useRef(null);
  const current = value ?? inner;
  const update = next => {
    if (value === undefined) setInner(next);
    onValueChange?.(next);
  };
  const clearValue = () => {
    const node = input.current;
    if (!node) return;
    // Use the input's native event path so onChange and form libraries also see clears.
    Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set?.call(node, "");
    node.dispatchEvent(new Event("input", {
      bubbles: true
    }));
  };
  React.useEffect(() => {
    const form = props.form ? input.current?.ownerDocument.getElementById(props.form) : input.current?.form;
    if (!(form instanceof HTMLFormElement) || value !== undefined) return;
    const reset = event => queueMicrotask(() => {
      if (!event.defaultPrevented) setInner(defaultValue);
    });
    form.addEventListener("reset", reset);
    return () => form.removeEventListener("reset", reset);
  }, [value, defaultValue, props.form]);
  const bar = rs(["rs-android-search-bar", disabled && "rs-android-search-bar-disabled", containerClassName], styles.bar, disabled && styles.disabled);
  const sx = rs(["rs-android-search-input", className], styles.input);
  const icon = rs(["rs-android-search-icon"], styles.icon);
  const clear = rs(["rs-android-search-clear"], styles.clear);
  return /*#__PURE__*/_jsxs("div", {
    className: bar.className,
    style: {
      ...bar.style,
      ...containerStyle
    },
    children: [/*#__PURE__*/_jsx("span", {
      ...icon,
      "aria-hidden": "true",
      children: /*#__PURE__*/_jsx(Icon, {
        name: "search",
        size: 24
      })
    }), /*#__PURE__*/_jsx("input", {
      ...props,
      ref: node => {
        input.current = node;
        setRef(forwardedRef, node);
      },
      type: "search",
      disabled: disabled,
      readOnly: readOnly,
      value: current,
      onChange: event => {
        onChange?.(event);
        if (!event.defaultPrevented) update(event.target.value);
      },
      onKeyDown: event => {
        onKeyDown?.(event);
        if (!event.defaultPrevented && event.key === "Escape" && current && !readOnly) {
          event.preventDefault();
          event.stopPropagation();
          clearValue();
        }
      },
      className: sx.className,
      style: {
        ...sx.style,
        ...style
      }
    }), current && !disabled && !readOnly ? /*#__PURE__*/_jsx("button", {
      type: "button",
      ...clear,
      "aria-label": clearLabel,
      onClick: () => {
        clearValue();
        input.current?.focus();
      },
      children: /*#__PURE__*/_jsx(Icon, {
        name: "close",
        size: 24
      })
    }) : null]
  });
});
//# sourceMappingURL=android-search-bar.js.map
