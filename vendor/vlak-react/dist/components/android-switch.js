"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { setRef } from "../merge-refs.js";
import { jsx as _jsx } from "react/jsx-runtime";
const styles = {
  input: {
    kysU6D: "xjyslct",
    kB7OPa: "x9f619",
    kVAEAm: "x1n2onr6",
    k1xSpc: "x1rg5ohu",
    kXLuUW: "xxymvpz",
    kmuXW: "x2lah0s",
    kzqmXN: "xvni27",
    kZKoxP: "xsdox4t",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    kMzoRj: "xc342km",
    kWkggS: "xjbqb8w",
    kkrTdU: "x1ypdohk x1s07b3s",
    kSiTet: "x1hc1fzr x1t5pwa4",
    kaIpWk: "x1khhgft",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x14tvtkk",
    kInvED: "x1hl8ikr",
    kgeoSG: "x1cpjm7i",
    kEoFBp: "x1hmns74",
    kFcpXp: "x1avpqbj",
    k5Ohv7: "xpmqpgo",
    kj4x2v: "x1fo1fc9",
    kfXFYZ: "x11k8mu7 xs1pefr",
    kPB484: "x1f9r7lp",
    kLkRvE: "x1w17vlo",
    k5JduY: "x1s928wv",
    kwXMNM: "x1j6awrg",
    kc1e00: "x1ymkymd",
    k3foIR: "x1mmhpr2",
    kkgrvl: "xrsbh8w",
    k4zj60: "x1a5uphr",
    kUfP38: "x2coff9",
    ks3ayO: "xrsq5cz xukpeu0",
    kFJxch: "x1hf6q31 x1flza3w",
    $$css: true
  },
  checked: {
    kfXFYZ: "x18hv1z xm7chbb",
    kLkRvE: "x15r85i x1qvo3ck",
    kc1e00: "x1ek332p",
    k3foIR: "x1sz6z6e",
    kkgrvl: "x14cvu1z",
    k4zj60: "x5vykd1",
    ks3ayO: "xzbi3xz x1dzf5wt",
    $$css: true
  }
};
export const AndroidSwitch = /*#__PURE__*/React.forwardRef(function AndroidSwitch({
  checked,
  defaultChecked = false,
  onCheckedChange,
  onChange,
  className,
  style,
  ...props
}, forwardedRef) {
  const [inner, setInner] = React.useState(defaultChecked);
  const input = React.useRef(null);
  const current = checked ?? inner;
  React.useEffect(() => {
    const form = props.form ? input.current?.ownerDocument.getElementById(props.form) : input.current?.form;
    if (!(form instanceof HTMLFormElement) || checked !== undefined) return;
    const reset = event => queueMicrotask(() => {
      if (!event.defaultPrevented) setInner(defaultChecked);
    });
    form.addEventListener("reset", reset);
    return () => form.removeEventListener("reset", reset);
  }, [checked, defaultChecked, props.form]);
  const sx = rs(["rs-android-switch", current && "rs-android-switch-checked", className], styles.input, current && styles.checked);
  return /*#__PURE__*/_jsx("input", {
    ...props,
    ref: node => {
      input.current = node;
      setRef(forwardedRef, node);
    },
    type: "checkbox",
    role: "switch",
    checked: current,
    "aria-checked": current,
    onChange: event => {
      onChange?.(event);
      if (!event.defaultPrevented) {
        if (checked === undefined) setInner(event.target.checked);
        onCheckedChange?.(event.target.checked);
      }
    },
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
//# sourceMappingURL=android-switch.js.map
