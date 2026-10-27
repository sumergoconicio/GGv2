"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { hidden } from "../hidden.stylex.js";
import { Icon } from "./icon.js";
import { useMergedRefs } from "../merge-refs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  choice: {
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
  check: {
    kzqmXN: "xcdlrvm x1xsp3st",
    kZKoxP: "x1l36t39 x1mes0ma",
    kaIpWk: "x18zih8k x1xuer1q",
    kMzoRj: "xvndefy",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd xz1l38o",
    kmuXW: "x2lah0s",
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kMwMTN: "x19rmm7l",
    kB7OPa: "x9f619",
    $$css: true
  },
  on: {
    kWkggS: "xmgn9m6 xf7h6k7",
    kVAM5u: "xli9mpl x19k3fcw",
    kMwMTN: "x19rmm7l x1pljmm8",
    kAXs8y: "x1kzknox",
    $$css: true
  }
};

/** A real native checkbox; the visible 16px box mirrors its state. */
export const Checkbox = /*#__PURE__*/React.forwardRef(function Checkbox({
  label,
  className,
  style,
  checked,
  defaultChecked,
  indeterminate = false,
  onCheckedChange,
  onChange,
  ...props
}, ref) {
  const [inner, setInner] = React.useState(defaultChecked ?? false);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : inner;
  const inputRef = React.useRef(null);
  const mergedRef = useMergedRefs(ref, inputRef);
  React.useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = indeterminate;
  }, [indeterminate]);
  const row = rs(["rs-choice", className], styles.choice);
  const sr = rs(["rs-sr"], hidden.sr);
  const filled = on || indeterminate;
  const box = rs(["rs-check", filled && "rs-check-on"], styles.check, filled && styles.on);
  return /*#__PURE__*/_jsxs("label", {
    className: row.className,
    style: {
      ...row.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("input", {
      ref: mergedRef,
      type: "checkbox",
      className: sr.className,
      style: sr.style,
      checked: on,
      onChange: e => {
        onChange?.(e);
        if (e.defaultPrevented) return;
        if (!isControlled) setInner(e.target.checked);
        onCheckedChange?.(e.target.checked);
      },
      ...props
    }), /*#__PURE__*/_jsx("span", {
      className: box.className,
      style: box.style,
      "aria-hidden": "true",
      children: filled && /*#__PURE__*/_jsx(Icon, {
        name: indeterminate ? "minus" : "check",
        size: 12
      })
    }), label]
  });
});
//# sourceMappingURL=checkbox.js.map
