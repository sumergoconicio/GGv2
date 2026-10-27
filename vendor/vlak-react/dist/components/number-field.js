"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { useMergedRefs } from "../merge-refs.js";
import { useInputValue } from "../use-input-value.js";
import { Button } from "./button.js";
import { Input } from "./input.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  label: {
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x4ro2ui",
    $$css: true
  },
  row: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kOIVth: "x13z6uf9",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  input: {
    k7Eaqz: "xeuugli",
    kUk6DE: "xuttws3",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  unit: {
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x1jq7itm",
    $$css: true
  },
  controls: {
    k1xSpc: "x78zum5",
    kOIVth: "x13z6uf9",
    kmuXW: "x2lah0s",
    $$css: true
  },
  stacked: {
    kXwgrk: "xdt5ytf",
    $$css: true
  },
  action: {
    kzqmXN: "x1uyfxw7",
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kg3NbH: "xnjsko4",
    kUk6DE: "x3psx0u",
    $$css: true
  }
};

/** Numeric input with native validation and bounded increment/decrement actions. */
export const NumberField = /*#__PURE__*/React.forwardRef(function NumberField({
  value,
  defaultValue = null,
  onValueChange,
  min,
  max,
  step = 1,
  label,
  unit,
  incrementLabel = "Increase value",
  decrementLabel = "Decrease value",
  controlsPlacement = "inline",
  id,
  disabled,
  readOnly,
  className,
  style,
  ...props
}, ref) {
  const generated = React.useId();
  const inputId = id ?? generated;
  const [current, setValue, inputRef] = useInputValue(value, defaultValue, onValueChange);
  const mergedRef = useMergedRefs(ref, inputRef);
  const move = direction => {
    const native = inputRef.current;
    if (native) {
      const previous = native.value;
      try {
        // Native stepping snaps off-grid values and handles an initially empty field.
        // Restore before emitting so a controlled caller can reject the change.
        native.stepUp(direction);
        const next = native.valueAsNumber;
        native.value = previous;
        if (Number.isFinite(next)) {
          setValue(next);
          return;
        }
      } catch {
        native.value = previous;
      }
    }
    const stride = Number.isFinite(step) && step > 0 ? step : 1;
    const next = Number(((current ?? min ?? 0) + direction * stride).toFixed(10));
    setValue(Math.min(max ?? Number.POSITIVE_INFINITY, Math.max(min ?? Number.NEGATIVE_INFINITY, next)));
  };
  const root = rs(["rs-number-field", className], styles.root);
  const lab = rs(["rs-number-field-label"], styles.label);
  const row = rs(["rs-number-field-row"], styles.row);
  const input = rs(["rs-number-field-input"], styles.input);
  const suffix = rs(["rs-number-field-unit"], styles.unit);
  const action = rs(["rs-number-field-action"], styles.action);
  const stacked = controlsPlacement === "stacked";
  const controls = rs(["rs-number-field-controls", stacked && "rs-number-field-controls-stacked"], styles.controls, stacked && styles.stacked);
  const decrement = /*#__PURE__*/_jsx(Button, {
    variant: "ghost",
    className: action.className,
    style: action.style,
    disabled: disabled || readOnly || min != null && current != null && current <= min,
    "aria-label": decrementLabel,
    "aria-controls": inputId,
    onClick: () => move(-1),
    children: "\u2212"
  }, "decrease");
  const increment = /*#__PURE__*/_jsx(Button, {
    variant: "ghost",
    className: action.className,
    style: action.style,
    disabled: disabled || readOnly || max != null && current != null && current >= max,
    "aria-label": incrementLabel,
    "aria-controls": inputId,
    onClick: () => move(1),
    children: "+"
  }, "increase");
  return /*#__PURE__*/_jsxs("div", {
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [label != null && /*#__PURE__*/_jsx("label", {
      htmlFor: inputId,
      className: lab.className,
      style: lab.style,
      children: label
    }), /*#__PURE__*/_jsxs("div", {
      className: row.className,
      style: row.style,
      children: [/*#__PURE__*/_jsx(Input, {
        ...props,
        ref: mergedRef,
        id: inputId,
        plain: true,
        type: "number",
        inputMode: "decimal",
        value: current ?? "",
        min: min,
        max: max,
        step: step,
        disabled: disabled,
        readOnly: readOnly,
        className: input.className,
        style: input.style,
        "aria-describedby": [props["aria-describedby"], unit ? `${inputId}-unit` : null].filter(Boolean).join(" ") || undefined,
        onChange: event => setValue(Number.isFinite(event.currentTarget.valueAsNumber) ? event.currentTarget.valueAsNumber : null)
      }), unit && /*#__PURE__*/_jsx("span", {
        id: `${inputId}-unit`,
        className: suffix.className,
        style: suffix.style,
        children: unit
      }), /*#__PURE__*/_jsx("div", {
        className: controls.className,
        style: controls.style,
        children: stacked ? [increment, decrement] : [decrement, increment]
      })]
    })]
  });
});
//# sourceMappingURL=number-field.js.map
