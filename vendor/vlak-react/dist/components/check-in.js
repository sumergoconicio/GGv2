"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useMergedRefs } from "../merge-refs.js";
import { useInputValue } from "../use-input-value.js";
import { Button } from "./button.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    k7Eaqz: "xeuugli",
    kMzoRj: "xc342km",
    kmVPX3: "x1717udv",
    kogj98: "x1ghz6dp",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  legend: {
    kmVPX3: "x1717udv",
    k1K539: "x1gr9t9r",
    kGuDYH: "x1jq7itm",
    k63SB2: "x1s688f",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  description: {
    kogj98: "x1ghz6dp",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x1jq7itm",
    kLWn49: "xfrs9s4",
    ks0D6T: "x1qp14f0",
    $$css: true
  },
  choices: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    $$css: true
  },
  choice: {
    kVAEAm: "x1n2onr6",
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kg3NbH: "x13s4r1c",
    k8WAf4: "x18g2hj5",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd",
    kaIpWk: "xkrxur",
    kB7OPa: "x9f619",
    kWkggS: "xhpg8l3",
    kMwMTN: "x1gney9c",
    kGuDYH: "x1jq7itm",
    kLWn49: "xfrs9s4",
    kkrTdU: "x1ypdohk",
    kMeerF: "x16gxa91",
    k3XXqK: "x14xc8xn",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  selected: {
    kWkggS: "xmgn9m6 xf7h6k7",
    kMwMTN: "x19rmm7l x1pljmm8",
    $$css: true
  },
  unavailable: {
    kkrTdU: "xt0e3qv",
    kSiTet: "xwq05k6 x1nyumiu",
    $$css: true
  },
  input: {
    kVAEAm: "x10l6tqk",
    kpwlN0: "x1jz8bvi",
    kzqmXN: "x9s46ru",
    kZKoxP: "x1c0ccdx",
    kSiTet: "xg01cxk",
    kogj98: "x1ghz6dp",
    kkrTdU: "xmper1u",
    $$css: true
  },
  clear: {
    kFhvOy: "x1lqcxt8",
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kzqmXN: "x14atkfc",
    ks0D6T: "x193iq5w",
    $$css: true
  }
};

/** A named text choice without an inferred clinical score. */
export const CheckIn = /*#__PURE__*/React.forwardRef(function CheckIn({
  label,
  description,
  options,
  value,
  defaultValue = null,
  onValueChange,
  required,
  readOnly = false,
  clearable = true,
  clearLabel = "Clear answer",
  name,
  form,
  disabled,
  className,
  style,
  "aria-describedby": ariaDescribedBy,
  ...props
}, ref) {
  const [, refreshAfterReset] = React.useReducer(revision => revision + 1, 0);
  const [current, setValue, fieldRef] = useInputValue(value, defaultValue, onValueChange, refreshAfterReset);
  const mergedRef = useMergedRefs(ref, fieldRef);
  const id = React.useId();
  const descriptionId = `${id}-description`;
  const readonlyId = `${id}-readonly`;
  const describedBy = [ariaDescribedBy, description != null && descriptionId, readOnly && readonlyId].filter(Boolean).join(" ") || undefined;
  const root = rs(["rs-check-in", className], styles.root);
  const legend = rs(["rs-check-in-legend"], styles.legend);
  const copy = rs(["rs-check-in-description"], styles.description);
  const choices = rs(["rs-check-in-choices"], styles.choices);
  const input = rs(["rs-check-in-input"], styles.input);
  const clear = rs(["rs-check-in-clear"], styles.clear);
  return /*#__PURE__*/_jsxs("fieldset", {
    ...props,
    ref: mergedRef,
    name: name,
    form: form,
    disabled: disabled,
    "aria-describedby": describedBy,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("legend", {
      className: legend.className,
      style: legend.style,
      children: label
    }), description != null && /*#__PURE__*/_jsx("p", {
      id: descriptionId,
      className: copy.className,
      style: copy.style,
      children: description
    }), readOnly && /*#__PURE__*/_jsx("p", {
      id: readonlyId,
      className: copy.className,
      style: copy.style,
      children: "Read only"
    }), options.length === 0 && /*#__PURE__*/_jsx("p", {
      className: copy.className,
      style: copy.style,
      children: "No answers available"
    }), /*#__PURE__*/_jsx("div", {
      className: choices.className,
      style: choices.style,
      children: options.map(option => {
        const selected = current === option.value;
        const unavailable = disabled || option.disabled || readOnly;
        const choice = rs(["rs-check-in-choice", selected && "rs-check-in-selected", unavailable && "rs-check-in-unavailable"], styles.choice, selected && styles.selected, unavailable && styles.unavailable);
        return /*#__PURE__*/_jsxs("label", {
          className: choice.className,
          style: choice.style,
          children: [/*#__PURE__*/_jsx("span", {
            children: option.label
          }), /*#__PURE__*/_jsx("input", {
            type: "radio",
            name: name ?? id,
            form: form,
            value: option.value,
            checked: selected,
            required: required,
            disabled: disabled || option.disabled,
            readOnly: readOnly,
            "aria-disabled": readOnly || undefined,
            "aria-describedby": describedBy,
            className: input.className,
            style: input.style,
            onClick: event => {
              if (readOnly) event.preventDefault();
            },
            onKeyDown: event => {
              if (readOnly && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " "].includes(event.key)) event.preventDefault();
            },
            onChange: () => {
              if (!readOnly) setValue(option.value);
            }
          })]
        }, option.value);
      })
    }), clearable && /*#__PURE__*/_jsx(Button, {
      variant: "ghost",
      size: "sm",
      disabled: disabled || readOnly || current == null,
      ...clear,
      onClick: () => setValue(null),
      children: clearLabel
    })]
  });
});
//# sourceMappingURL=check-in.js.map
