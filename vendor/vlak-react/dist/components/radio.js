"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { hidden } from "../hidden.stylex.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const RadioGroupContext = /*#__PURE__*/React.createContext(null);
export const RadioGroup = /*#__PURE__*/React.forwardRef(function RadioGroup({
  name,
  value,
  defaultValue,
  onValueChange,
  children,
  ...props
}, ref) {
  const autoName = React.useId();
  const [inner, setInner] = React.useState(defaultValue);
  const isControlled = value !== undefined;
  const current = isControlled ? value : inner;
  const setValue = next => {
    if (!isControlled) setInner(next);
    onValueChange?.(next);
  };
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    role: "radiogroup",
    ...props,
    children: /*#__PURE__*/_jsx(RadioGroupContext.Provider, {
      value: {
        name: name ?? autoName,
        value: current,
        setValue
      },
      children: children
    })
  });
});
const styles = {
  radio: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kOIVth: "x1rmggvu xsyf0et",
    kGuDYH: "xkpwil5 x1kikilt",
    kMwMTN: "x1gney9c",
    kb6lSQ: "xjat59b",
    kAzted: "x1wszdd xs41724",
    k7Eaqz: "xtp0tkc",
    $$css: true
  },
  dot: {
    kzqmXN: "xcdlrvm x1xsp3st",
    kZKoxP: "x1l36t39 x1mes0ma",
    kaIpWk: "x16rqkct",
    kMzoRj: "xvndefy",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd xz1l38o",
    kVAEAm: "x1n2onr6",
    kmuXW: "x2lah0s",
    kB7OPa: "x9f619",
    $$css: true
  },
  on: {
    kVAM5u: "xli9mpl x19k3fcw",
    $$css: true
  },
  fill: {
    kVAEAm: "x10l6tqk",
    kpwlN0: "x1t8v7c6 x1b1llfc",
    kaIpWk: "x16rqkct",
    kWkggS: "xmgn9m6 xf7h6k7",
    kAXs8y: "x1kzknox",
    $$css: true
  }
};

/** A real native radio inside a RadioGroup; the ink dot mirrors its state. */
export const Radio = /*#__PURE__*/React.forwardRef(function Radio({
  value,
  label,
  className,
  style,
  onChange,
  ...props
}, ref) {
  const group = React.useContext(RadioGroupContext);
  const on = group ? group.value === value : undefined;
  const row = rs(["rs-radio", className], styles.radio);
  const sr = rs(["rs-sr"], hidden.sr);
  const mark = rs(["rs-radio-dot", on && "rs-radio-on"], styles.dot, on && styles.on);
  const fill = rs(["rs-radio-fill"], styles.fill);
  return /*#__PURE__*/_jsxs("label", {
    className: row.className,
    style: {
      ...row.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("input", {
      ref: ref,
      type: "radio",
      className: sr.className,
      style: sr.style,
      name: group?.name,
      value: value,
      checked: on,
      onChange: e => {
        group?.setValue(value);
        onChange?.(e);
      },
      ...props
    }), /*#__PURE__*/_jsx("span", {
      className: mark.className,
      style: mark.style,
      "aria-hidden": "true",
      children: on ? /*#__PURE__*/_jsx("span", {
        className: fill.className,
        style: fill.style
      }) : null
    }), label]
  });
});
//# sourceMappingURL=radio.js.map
