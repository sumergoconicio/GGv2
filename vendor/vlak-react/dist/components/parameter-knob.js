"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useInputValue } from "../use-input-value.js";
import { useMergedRefs } from "../merge-refs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xwz0xwf",
    kAPf3g: "x1o2pa38",
    kOIVth: "x13z6uf9",
    k7Eaqz: "x8a598m",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  label: {
    kGuDYH: "x1jq7itm",
    kLWn49: "xfrs9s4",
    k63SB2: "xk50ysn",
    $$css: true
  },
  control: {
    kVAEAm: "x1n2onr6",
    kzqmXN: "xekueh",
    kZKoxP: "x1sh0tsm",
    kaIpWk: "x16rqkct",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd",
    kB7OPa: "x9f619",
    kWkggS: "xhpg8l3",
    kMeerF: "x16gxa91",
    k3XXqK: "x14xc8xn",
    kjBf7l: "xqbrbdq",
    kInvED: "x1ewu8gn",
    $$css: true
  },
  pointer: {
    kVAEAm: "x10l6tqk",
    kpwlN0: "xhrwa1z",
    kfzvcC: "x47corl",
    k5JduY: "x1s928wv",
    kwXMNM: "x1j6awrg",
    kkgrvl: "x13694x8",
    k4zj60: "x1te8sxe",
    kc1e00: "xwylcjs",
    k3foIR: "x1m1drc7",
    ks3ayO: "x1lml0mx x1nf9wp7",
    $$css: true
  },
  input: {
    kVAEAm: "x10l6tqk",
    kpwlN0: "x1jz8bvi",
    kzqmXN: "x9s46ru",
    kZKoxP: "x1c0ccdx",
    kogj98: "x1ghz6dp",
    kSiTet: "xg01cxk",
    kkrTdU: "x7eptgl",
    $$css: true
  },
  value: {
    kGuDYH: "x4ro2ui",
    kMwMTN: "x1ixqp2s",
    kLWn49: "xfrs9s4",
    kcqcaj: "xss6m8b",
    $$css: true
  }
};

/** A rotary display driven by a native horizontal range input. */
export const ParameterKnob = /*#__PURE__*/React.forwardRef(function ParameterKnob({
  label,
  value,
  defaultValue,
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
  unit,
  id,
  disabled,
  readOnly,
  className,
  style,
  onKeyDown,
  onClick,
  ...props
}, ref) {
  const autoId = React.useId();
  const inputId = id ?? autoId;
  const [, refresh] = React.useReducer(n => n + 1, 0);
  const [current, setValue, inputRef] = useInputValue(value, defaultValue ?? min, onValueChange, refresh);
  const mergedRef = useMergedRefs(ref, inputRef);
  const stepCount = (max - min) / step;
  const validRange = Number.isFinite(min) && Number.isFinite(max) && Number.isFinite(max - min) && max > min && Number.isFinite(step) && step > 0 && Number.isFinite(stepCount) && stepCount <= Number.MAX_SAFE_INTEGER;
  const validValue = Number.isFinite(current);
  const usable = validRange && validValue;
  const lastStep = validRange ? Math.floor(stepCount + Number.EPSILON * Math.max(1, stepCount) * 4) : 0;
  const snap = next => {
    const bounded = Math.max(min, Math.min(max, next));
    const index = Math.max(0, Math.min(lastStep, Math.round((bounded - min) / step)));
    return Number((min + index * step).toPrecision(12));
  };
  const snapped = usable ? snap(current) : 0;
  const root = rs(["rs-parameter-knob"], styles.root);
  const caption = rs(["rs-parameter-knob-label"], styles.label);
  const control = rs(["rs-parameter-knob-control"], styles.control);
  const pointer = rs(["rs-parameter-knob-pointer"], styles.pointer);
  const input = rs(["rs-parameter-knob-input", className], styles.input);
  const output = rs(["rs-parameter-knob-value"], styles.value);
  return /*#__PURE__*/_jsxs("div", {
    className: root.className,
    style: root.style,
    children: [/*#__PURE__*/_jsx("label", {
      htmlFor: inputId,
      className: caption.className,
      style: caption.style,
      children: label
    }), /*#__PURE__*/_jsxs("div", {
      className: control.className,
      style: control.style,
      children: [usable && /*#__PURE__*/_jsx("span", {
        "aria-hidden": "true",
        className: pointer.className,
        style: {
          ...pointer.style,
          transform: `rotate(${-135 + (snapped - min) / (max - min) * 270}deg)`
        }
      }), /*#__PURE__*/_jsx("input", {
        ...props,
        ref: mergedRef,
        id: inputId,
        type: "range",
        min: usable ? min : 0,
        max: usable ? max : 1,
        step: usable ? step : 1,
        value: snapped,
        disabled: disabled || !usable,
        readOnly: readOnly,
        "aria-disabled": readOnly || undefined,
        "aria-valuetext": usable ? `${snapped}${unit ? ` ${unit}` : ""}` : "Unavailable",
        className: input.className,
        style: {
          ...input.style,
          ...style
        },
        onClick: event => {
          onClick?.(event);
          if (readOnly) event.preventDefault();
        },
        onKeyDown: event => {
          onKeyDown?.(event);
          if (readOnly && ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown"].includes(event.key)) event.preventDefault();
        },
        onChange: event => {
          if (!readOnly && usable) setValue(snap(Number(event.currentTarget.value)));
        }
      })]
    }), /*#__PURE__*/_jsx("span", {
      className: output.className,
      style: output.style,
      children: !validRange ? "Invalid range" : !validValue ? "Unavailable" : `${snapped}${unit ? ` ${unit}` : ""}`
    })]
  });
});
//# sourceMappingURL=parameter-knob.js.map
