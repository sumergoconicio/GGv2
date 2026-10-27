"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useInputValue } from "../use-input-value.js";
import { useMergedRefs } from "../merge-refs.js";
import { Button } from "./button.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const initial = {
  gain: 0,
  pan: 0,
  muted: false,
  solo: false
};
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    k7Eaqz: "xeuugli",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kmVPX3: "x1uz70x1",
    kogj98: "x1ghz6dp",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  label: {
    kg3NbH: "xllzysa",
    kGuDYH: "x1jq7itm",
    kLWn49: "xfrs9s4",
    k63SB2: "x1s688f",
    $$css: true
  },
  field: {
    k1xSpc: "xrvj5dj",
    kOIVth: "xvh977a",
    kGuDYH: "x4ro2ui",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  text: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kjj79g: "x1qughib",
    kOIVth: "x13z6uf9",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  range: {
    k1xSpc: "x1lliihq",
    kogj98: "x1ghz6dp",
    kzqmXN: "xh8yej3",
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    keaTxX: "x12r28v4",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    $$css: true
  },
  button: {
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kzqmXN: "x14atkfc",
    ks0D6T: "x193iq5w",
    $$css: true
  },
  pressed: {
    kWkggS: "xmgn9m6 xf7h6k7",
    kMwMTN: "x19rmm7l x1pljmm8",
    $$css: true
  }
};

/** Gain, pan, mute and solo state for an application-owned audio channel. */
export const ChannelStrip = /*#__PURE__*/React.forwardRef(function ChannelStrip({
  label,
  value,
  defaultValue = initial,
  onValueChange,
  gainMin = -60,
  gainMax = 12,
  readOnly,
  name,
  form,
  disabled,
  className,
  style,
  ...props
}, ref) {
  const [, refresh] = React.useReducer(n => n + 1, 0);
  const [current, setValue, fieldRef] = useInputValue(value, defaultValue, onValueChange, refresh);
  const mergedRef = useMergedRefs(ref, fieldRef);
  const root = rs(["rs-channel-strip", className], styles.root);
  const heading = rs(["rs-channel-strip-label"], styles.label);
  const field = rs(["rs-channel-strip-field"], styles.field);
  const text = rs(["rs-channel-strip-text"], styles.text);
  const range = rs(["rs-channel-strip-range"], styles.range);
  const actions = rs(["rs-channel-strip-actions"], styles.actions);
  const gainBoundsValid = Number.isFinite(gainMin) && Number.isFinite(gainMax) && Number.isFinite(gainMax - gainMin) && gainMax > gainMin;
  const gainValid = gainBoundsValid && Number.isFinite(current.gain) && current.gain >= gainMin && current.gain <= gainMax;
  const panValid = Number.isFinite(current.pan) && current.pan >= -100 && current.pan <= 100;
  const gainText = !gainBoundsValid ? "Range unavailable" : !Number.isFinite(current.gain) ? "Unavailable" : `${current.gain} dB${gainValid ? "" : " · Outside range"}`;
  const panText = !Number.isFinite(current.pan) ? "Unavailable" : `${current.pan === 0 ? "Center" : `${Math.abs(current.pan)}% ${current.pan < 0 ? "left" : "right"}`}${panValid ? "" : " · Outside range"}`;
  return /*#__PURE__*/_jsxs("fieldset", {
    ...props,
    ref: mergedRef,
    name: name,
    form: form,
    disabled: disabled,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("legend", {
      className: heading.className,
      style: heading.style,
      children: label
    }), /*#__PURE__*/_jsxs("label", {
      className: field.className,
      style: field.style,
      children: [/*#__PURE__*/_jsxs("span", {
        className: text.className,
        style: text.style,
        children: [/*#__PURE__*/_jsx("span", {
          children: "Gain"
        }), /*#__PURE__*/_jsx("span", {
          children: gainText
        })]
      }), /*#__PURE__*/_jsx("input", {
        type: "range",
        "aria-label": "Gain",
        form: form,
        name: name ? `${name}.gain` : undefined,
        min: gainValid ? gainMin : 0,
        max: gainValid ? gainMax : 1,
        step: "any",
        value: gainValid ? current.gain : 0,
        disabled: disabled || readOnly || !gainValid,
        "aria-invalid": !gainValid || undefined,
        "aria-valuetext": gainText,
        className: range.className,
        style: range.style,
        onChange: event => setValue({
          ...current,
          gain: Number(event.currentTarget.value)
        })
      })]
    }), /*#__PURE__*/_jsxs("label", {
      className: field.className,
      style: field.style,
      children: [/*#__PURE__*/_jsxs("span", {
        className: text.className,
        style: text.style,
        children: [/*#__PURE__*/_jsx("span", {
          children: "Pan"
        }), /*#__PURE__*/_jsx("span", {
          children: panText
        })]
      }), /*#__PURE__*/_jsx("input", {
        type: "range",
        "aria-label": "Pan",
        form: form,
        name: name ? `${name}.pan` : undefined,
        min: -100,
        max: 100,
        step: "any",
        value: panValid ? current.pan : 0,
        disabled: disabled || readOnly || !panValid,
        "aria-invalid": !panValid || undefined,
        "aria-valuetext": panText,
        className: range.className,
        style: range.style,
        onChange: event => setValue({
          ...current,
          pan: Number(event.currentTarget.value)
        })
      })]
    }), /*#__PURE__*/_jsx("div", {
      className: actions.className,
      style: actions.style,
      children: [['muted', 'Mute'], ['solo', 'Solo']].map(([key, title]) => {
        const button = rs(["rs-channel-strip-button", current[key] && "rs-channel-strip-pressed"], styles.button, current[key] && styles.pressed);
        return /*#__PURE__*/_jsx(Button, {
          variant: current[key] ? "primary" : "ghost",
          size: "sm",
          disabled: disabled || readOnly,
          "aria-pressed": current[key],
          ...button,
          onClick: () => setValue({
            ...current,
            [key]: !current[key]
          }),
          children: title
        }, key);
      })
    }), name && /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsx("input", {
        type: "hidden",
        name: `${name}.muted`,
        form: form,
        value: String(current.muted)
      }), /*#__PURE__*/_jsx("input", {
        type: "hidden",
        name: `${name}.solo`,
        form: form,
        value: String(current.solo)
      })]
    }), readOnly && name && /*#__PURE__*/_jsxs(_Fragment, {
      children: [gainValid && /*#__PURE__*/_jsx("input", {
        type: "hidden",
        name: `${name}.gain`,
        form: form,
        value: current.gain
      }), panValid && /*#__PURE__*/_jsx("input", {
        type: "hidden",
        name: `${name}.pan`,
        form: form,
        value: current.pan
      })]
    })]
  });
});
//# sourceMappingURL=channel-strip.js.map
