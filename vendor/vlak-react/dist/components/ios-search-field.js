"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useMergedRefs } from "../merge-refs.js";
import { Icon } from "./icon.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kOIVth: "x167g77z",
    kB7OPa: "x9f619",
    k7Eaqz: "xeuugli",
    kAzted: "x1wxaq2x",
    kzqmXN: "xh8yej3",
    kZCmMZ: "xf7dkkf",
    kwRFfy: "x14vy60q",
    kaIpWk: "x1khhgft",
    kMzoRj: "xmkeg23",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd xaxtmmi",
    kWkggS: "x6583kg",
    kMwMTN: "x1ixqp2s",
    kMeerF: "x1k57tk5 x16gxa91",
    k3XXqK: "xaatb59",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  disabled: {
    kSiTet: "xyd83as",
    $$css: true
  },
  symbol: {
    k1xSpc: "x3nfvp2",
    kmuXW: "x2lah0s",
    kfzvcC: "x47corl",
    $$css: true
  },
  input: {
    kysU6D: "xjyslct",
    kMv6JI: "x1s07pz0",
    kGuDYH: "x19d36u7",
    kLWn49: "x19v9tvf",
    kMwMTN: "x1gney9c",
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kAzted: "x1gg8mnh",
    kzQI83: "x1iyjqo2",
    kMzoRj: "xc342km",
    kWkggS: "xjbqb8w",
    k8WAf4: "xp59q4u",
    kg3NbH: "xnjsko4",
    kogj98: "x1ghz6dp",
    kMeerF: "x1k57tk5",
    k8Qsv1: "x1romblr",
    kH8XJS: "x7xwk5j",
    kONv6d: "x1ad04t7",
    $$css: true
  },
  clear: {
    kysU6D: "xjyslct",
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kmuXW: "x2lah0s",
    k7Eaqz: "x1nb6za0",
    kAzted: "x1gg8mnh",
    kaIpWk: "x13pz1uv",
    kMzoRj: "xc342km",
    kmVPX3: "x1717udv",
    kWkggS: "xjbqb8w x1q26ab9",
    kMwMTN: "x1ixqp2s",
    kkrTdU: "x1ypdohk",
    kMeerF: "x1k57tk5 x784prv",
    k3XXqK: "xaatb59",
    kjBf7l: "xqbrbdq",
    kInvED: "x1v57pqu",
    kmkexE: "x5gkzjs xrozb4q",
    $$css: true
  }
};

/** A 48px search capsule with a native input and an explicit clear target. */
export const IOSSearchField = /*#__PURE__*/React.forwardRef(function IOSSearchField({
  value,
  defaultValue = "",
  onValueChange,
  onChange,
  clearLabel = "Clear search",
  disabled,
  readOnly,
  className,
  style,
  ...props
}, forwardedRef) {
  const [inner, setInner] = React.useState(defaultValue);
  const input = React.useRef(null);
  const ref = useMergedRefs(input, forwardedRef);
  const controlled = value !== undefined;
  const current = controlled ? value : inner;
  const clearValue = () => {
    const node = input.current;
    if (!node) return;
    // Keep native onChange handlers and form libraries on the same path as typing.
    Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set?.call(node, "");
    node.dispatchEvent(new Event("input", {
      bubbles: true
    }));
    node.focus();
  };
  React.useEffect(() => {
    const form = props.form ? document.getElementById(props.form) : input.current?.form;
    let mounted = true;
    const reset = event => queueMicrotask(() => {
      if (mounted && !controlled && !event.defaultPrevented) {
        if (input.current) input.current.value = defaultValue;
        setInner(defaultValue);
      }
    });
    form?.addEventListener("reset", reset);
    return () => {
      mounted = false;
      form?.removeEventListener("reset", reset);
    };
  }, [controlled, defaultValue, props.form]);
  const root = rs(["rs-ios-search-field", disabled && "rs-ios-search-field-disabled", className], styles.root, disabled && styles.disabled);
  const symbol = rs(["rs-ios-search-field-symbol"], styles.symbol);
  const field = rs(["rs-ios-search-field-input"], styles.input);
  const clear = rs(["rs-ios-search-field-clear"], styles.clear);
  return /*#__PURE__*/_jsxs("div", {
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("span", {
      ...symbol,
      "aria-hidden": "true",
      children: /*#__PURE__*/_jsx(Icon, {
        name: "search",
        size: 24
      })
    }), /*#__PURE__*/_jsx("input", {
      ...props,
      ...field,
      ref: ref,
      type: "search",
      value: current,
      disabled: disabled,
      readOnly: readOnly,
      onChange: event => {
        onChange?.(event);
        if (event.defaultPrevented) return;
        if (!controlled) setInner(event.currentTarget.value);
        onValueChange?.(event.currentTarget.value);
      }
    }), current && !disabled && !readOnly && /*#__PURE__*/_jsx("button", {
      ...clear,
      type: "button",
      "aria-label": clearLabel,
      onClick: clearValue,
      children: /*#__PURE__*/_jsx(Icon, {
        name: "close",
        size: 16
      })
    })]
  });
});
//# sourceMappingURL=ios-search-field.js.map
