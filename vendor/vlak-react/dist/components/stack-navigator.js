"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { useInputValue } from "../use-input-value.js";
import { useMergedRefs } from "../merge-refs.js";
import { Button } from "./button.js";
import { Select } from "./select.js";

/** Zero-based supplied position indexes. null means no selected position. */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8fetqu",
    k7Eaqz: "xeuugli",
    kmVPX3: "x1717udv",
    kogj98: "x1ghz6dp",
    kMzoRj: "xc342km",
    kMwMTN: "x1gney9c",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  legend: {
    kmVPX3: "x1717udv",
    k1K539: "x1gr9t9r",
    kGuDYH: "xkpwil5",
    k63SB2: "x1s688f",
    $$css: true
  },
  axis: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  label: {
    kGuDYH: "xboafo0",
    k63SB2: "xk50ysn",
    $$css: true
  },
  row: {
    k1xSpc: "xrvj5dj",
    kumcoG: "xx9t13c",
    kOIVth: "x13z6uf9",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  step: {
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kzqmXN: "x1uyfxw7",
    kg3NbH: "xnjsko4",
    $$css: true
  },
  copy: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    kHjlTd: "xj0a0fe",
    ks0D6T: "x1qp14f0",
    $$css: true
  }
};
const physicalValue = (position, unit) => {
  const valid = typeof position.value === "number" ? Number.isFinite(position.value) : typeof position.value === "string" && position.value.trim().length > 0;
  return valid ? `${position.value}${unit ? ` ${unit}` : ""}` : "Physical value unavailable";
};
/** Navigates supplied stack coordinates without calculating stage positions or calling an instrument. */
export const StackNavigator = /*#__PURE__*/React.forwardRef(function StackNavigator({
  label,
  axes,
  value,
  defaultValue = {},
  onValueChange,
  description,
  readOnly = false,
  name,
  form,
  disabled,
  className,
  style,
  children,
  ...props
}, ref) {
  const [, refresh] = React.useReducer(n => n + 1, 0);
  const [current, setValue, fieldRef] = useInputValue(value, defaultValue, onValueChange, refresh);
  const merged = useMergedRefs(ref, fieldRef);
  const id = React.useId();
  const valid = axes.length <= 8 && axes.reduce((total, axis) => total + axis.positions.length, 0) <= 8192 && axes.every(axis => axis.id.trim()) && new Set(axes.map(axis => axis.id)).size === axes.length;
  const root = rs(["rs-stack-navigator", className], styles.root);
  const legend = rs(["rs-stack-navigator-legend"], styles.legend);
  const axisStyle = rs(["rs-stack-navigator-axis"], styles.axis);
  const labelStyle = rs(["rs-stack-navigator-label"], styles.label);
  const row = rs(["rs-stack-navigator-row"], styles.row);
  const step = rs(["rs-stack-navigator-step"], styles.step);
  const copy = rs(["rs-stack-navigator-copy"], styles.copy);
  return /*#__PURE__*/_jsxs("fieldset", {
    ...props,
    ref: merged,
    name: name,
    form: form,
    disabled: disabled,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("legend", {
      ...legend,
      children: label
    }), description != null && /*#__PURE__*/_jsx("div", {
      ...copy,
      children: description
    }), !valid ? /*#__PURE__*/_jsx("p", {
      ...copy,
      children: "Stack unavailable: supply unique axes, at most 8 axes and 8192 positions"
    }) : axes.length === 0 ? /*#__PURE__*/_jsx("p", {
      ...copy,
      children: "No stack axes supplied"
    }) : axes.map((axis, axisIndex) => {
      const index = current[axis.id];
      const selected = index != null && Number.isSafeInteger(index) && index >= 0 && index < axis.positions.length;
      let previous = -1;
      if (selected) for (let candidate = 0; candidate < index; candidate++) if (!axis.positions[candidate]?.disabled) previous = candidate;
      const next = axis.positions.findIndex((position, candidate) => (!selected || candidate > index) && !position.disabled);
      const inputName = name ? `${name}.${axis.id}` : undefined;
      return /*#__PURE__*/_jsxs("div", {
        ...axisStyle,
        children: [/*#__PURE__*/_jsx("span", {
          ...labelStyle,
          id: `${id}-${axisIndex}-label`,
          children: axis.label
        }), /*#__PURE__*/_jsxs("div", {
          ...row,
          children: [/*#__PURE__*/_jsx(Button, {
            ...step,
            variant: "ghost",
            disabled: disabled || readOnly || previous < 0,
            "aria-label": `Previous ${axis.label} position`,
            onClick: () => setValue({
              ...current,
              [axis.id]: previous
            }),
            children: "\u2212"
          }), /*#__PURE__*/_jsx(Select, {
            fullWidth: true,
            name: inputName,
            form: form,
            disabled: disabled || !axis.positions.length,
            readOnly: readOnly,
            value: selected ? String(index) : "",
            "aria-labelledby": `${id}-${axisIndex}-label`,
            "aria-describedby": `${id}-${axisIndex}-value`,
            options: [{
              value: "",
              label: "Choose position"
            }, ...axis.positions.map((position, candidate) => ({
              value: String(candidate),
              label: `${candidate + 1} / ${axis.positions.length} · ${physicalValue(position, axis.unit)}${position.label ? ` · ${position.label}` : ""}`,
              disabled: position.disabled
            }))],
            onValueChange: nextValue => setValue({
              ...current,
              [axis.id]: nextValue === "" ? null : Number(nextValue)
            })
          }), /*#__PURE__*/_jsx(Button, {
            ...step,
            variant: "ghost",
            disabled: disabled || readOnly || next < 0,
            "aria-label": `Next ${axis.label} position`,
            onClick: () => setValue({
              ...current,
              [axis.id]: next
            }),
            children: "+"
          })]
        }), /*#__PURE__*/_jsx("p", {
          ...copy,
          id: `${id}-${axisIndex}-value`,
          children: selected ? `Position ${index + 1} of ${axis.positions.length}; ${physicalValue(axis.positions[index], axis.unit)}` : !axis.positions.length ? "No positions supplied" : index == null ? "No position selected" : "Selected position unavailable"
        })]
      }, axis.id);
    }), children]
  });
});
//# sourceMappingURL=stack-navigator.js.map
