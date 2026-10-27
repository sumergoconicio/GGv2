"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { useMergedRefs } from "../merge-refs.js";
import { useInputValue } from "../use-input-value.js";
import { useFieldControl } from "./field.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    k7Eaqz: "xeuugli",
    kMzoRj: "xc342km",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  legend: {
    kGuDYH: "x4ro2ui",
    kMwMTN: "x1ixqp2s",
    k1K539: "xhbfen4",
    kmVPX3: "x1717udv",
    $$css: true
  },
  row: {
    k1xSpc: "xrvj5dj",
    kumcoG: "x1tk0n3",
    kOIVth: "x8233eu",
    kGNEyG: "x6s0dn4",
    $$css: true
  },
  label: {
    kGuDYH: "x1jq7itm",
    $$css: true
  },
  input: {
    kzqmXN: "xh8yej3",
    k7Eaqz: "xtp0tkc",
    kZKoxP: "x9ve8r1",
    kogj98: "x1ghz6dp",
    keaTxX: "x12r28v4",
    kkrTdU: "x1ypdohk",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  output: {
    kGuDYH: "x1jq7itm",
    kcqcaj: "xss6m8b",
    k9WMMc: "xp4054r",
    $$css: true
  }
};
export const RangeSlider = /*#__PURE__*/React.forwardRef(function RangeSlider({
  value,
  defaultValue,
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
  label = "Range",
  lowerLabel = "From",
  upperLabel = "To",
  name,
  disabled,
  formatValue = String,
  className,
  style,
  ...props
}, ref) {
  const [current, setValue, fieldRef] = useInputValue(value, defaultValue ?? [min, max], onValueChange);
  const mergedRef = useMergedRefs(ref, fieldRef);
  const id = React.useId();
  const field = useFieldControl(props);
  const high = Math.max(min, max);
  const lower = Math.min(high, Math.max(min, current[0]));
  const upper = Math.min(high, Math.max(lower, current[1]));
  const root = rs(["rs-range-slider", className], styles.root);
  const legend = rs(["rs-range-slider-legend"], styles.legend);
  const row = rs(["rs-range-slider-row"], styles.row);
  const lab = rs(["rs-range-slider-label"], styles.label);
  const input = rs(["rs-range-slider-input"], styles.input);
  const output = rs(["rs-range-slider-output"], styles.output);
  return /*#__PURE__*/_jsxs("fieldset", {
    ...props,
    ref: mergedRef,
    disabled: disabled,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    "aria-describedby": field["aria-describedby"],
    "aria-invalid": field["aria-invalid"],
    children: [/*#__PURE__*/_jsx("legend", {
      className: legend.className,
      style: legend.style,
      children: label
    }), /*#__PURE__*/_jsxs("div", {
      className: row.className,
      style: row.style,
      children: [/*#__PURE__*/_jsx("label", {
        htmlFor: `${id}-lower`,
        className: lab.className,
        style: lab.style,
        children: lowerLabel
      }), /*#__PURE__*/_jsx("input", {
        id: `${id}-lower`,
        type: "range",
        name: name ? `${name}[0]` : undefined,
        min: min,
        max: upper,
        step: step,
        value: lower,
        "aria-valuetext": formatValue(lower),
        className: input.className,
        style: input.style,
        onChange: event => setValue([Math.min(upper, event.currentTarget.valueAsNumber), upper])
      }), /*#__PURE__*/_jsx("output", {
        htmlFor: `${id}-lower`,
        className: output.className,
        style: output.style,
        children: formatValue(lower)
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: row.className,
      style: row.style,
      children: [/*#__PURE__*/_jsx("label", {
        htmlFor: `${id}-upper`,
        className: lab.className,
        style: lab.style,
        children: upperLabel
      }), /*#__PURE__*/_jsx("input", {
        id: `${id}-upper`,
        type: "range",
        name: name ? `${name}[1]` : undefined,
        min: lower,
        max: high,
        step: step,
        value: upper,
        "aria-valuetext": formatValue(upper),
        className: input.className,
        style: input.style,
        onChange: event => setValue([lower, Math.max(lower, event.currentTarget.valueAsNumber)])
      }), /*#__PURE__*/_jsx("output", {
        htmlFor: `${id}-upper`,
        className: output.className,
        style: output.style,
        children: formatValue(upper)
      })]
    })]
  });
});
//# sourceMappingURL=range-slider.js.map
