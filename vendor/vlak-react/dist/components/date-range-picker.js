"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useMergedRefs } from "../merge-refs.js";
import { useInputValue } from "../use-input-value.js";
import { useFieldControl } from "./field.js";
import { Input } from "./input.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k7Eaqz: "xeuugli",
    kMzoRj: "xc342km",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    $$css: true
  },
  legend: {
    kGuDYH: "x4ro2ui",
    kMwMTN: "x1ixqp2s",
    k1K539: "x1gr9t9r",
    kmVPX3: "x1717udv",
    $$css: true
  },
  fields: {
    k1xSpc: "xrvj5dj",
    kumcoG: "xcjjqqt xsgaswp",
    kOIVth: "x8233eu",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  input: {
    k7Eaqz: "xeuugli",
    ks0D6T: "x193iq5w",
    kB7OPa: "x9f619",
    kQNsl9: "x14xwphu",
    $$css: true
  }
};

/** Two native date editors share bounds; changing the start beyond the end clears the end. */
export const DateRangePicker = /*#__PURE__*/React.forwardRef(function DateRangePicker({
  value,
  defaultValue = {
    start: "",
    end: ""
  },
  onValueChange,
  label = "Date range",
  startLabel = "Start date",
  endLabel = "End date",
  min,
  max,
  required,
  name,
  disabled,
  className,
  style,
  ...props
}, ref) {
  const [current, setValue, fieldRef] = useInputValue(value, defaultValue, onValueChange);
  const mergedRef = useMergedRefs(ref, fieldRef);
  const field = useFieldControl(props);
  const lower = current.start && (!min || current.start > min) ? current.start : min;
  const invalid = Boolean(current.start && current.end && current.end < current.start);
  const root = rs(["rs-date-range-picker", className], styles.root);
  const legend = rs(["rs-date-range-picker-legend"], styles.legend);
  const fields = rs(["rs-date-range-picker-fields"], styles.fields);
  const input = rs(["rs-date-range-picker-input"], styles.input);
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
    "aria-invalid": invalid || field["aria-invalid"] || undefined,
    children: [/*#__PURE__*/_jsx("legend", {
      className: legend.className,
      style: legend.style,
      children: label
    }), /*#__PURE__*/_jsxs("div", {
      className: fields.className,
      style: fields.style,
      children: [/*#__PURE__*/_jsx(Input, {
        label: startLabel,
        type: "date",
        name: name ? `${name}[start]` : undefined,
        value: current.start,
        min: min,
        max: max,
        required: required,
        disabled: disabled,
        className: input.className,
        style: input.style,
        onChange: event => {
          const start = event.currentTarget.value;
          setValue({
            start,
            end: start && current.end && current.end < start ? "" : current.end
          });
        }
      }), /*#__PURE__*/_jsx(Input, {
        label: endLabel,
        type: "date",
        name: name ? `${name}[end]` : undefined,
        value: current.end,
        min: lower,
        max: max,
        required: required,
        disabled: disabled,
        className: input.className,
        style: input.style,
        "aria-invalid": invalid || undefined,
        onChange: event => setValue({
          ...current,
          end: event.currentTarget.value
        })
      })]
    })]
  });
});
//# sourceMappingURL=date-range-picker.js.map
