"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { Input } from "./input.js";
import { useInputValue } from "../use-input-value.js";
import { useMergedRefs } from "../merge-refs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const initial = {
  hex: "#808080",
  alpha: 1
};
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    k7Eaqz: "xeuugli",
    kMzoRj: "xc342km",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  label: {
    k1K539: "x1gr9t9r",
    kmVPX3: "x1717udv",
    kGuDYH: "x1jq7itm",
    kLWn49: "xfrs9s4",
    k63SB2: "x1s688f",
    $$css: true
  },
  preview: {
    kVAEAm: "x1n2onr6",
    kAzted: "xd4eqea",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd",
    kWkggS: "xhpg8l3",
    kKwaWg: "xi6hn0x",
    kgSjnq: "x16alh3",
    $$css: true
  },
  swatch: {
    kVAEAm: "x10l6tqk",
    kpwlN0: "x10a8y8t",
    kAXs8y: "x1kzknox",
    $$css: true
  },
  fields: {
    k1xSpc: "xrvj5dj",
    kumcoG: "x14t0x27",
    kOIVth: "x8233eu",
    $$css: true
  },
  field: {
    k1xSpc: "xrvj5dj",
    kOIVth: "xpj7pl4",
    kGuDYH: "x4ro2ui",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  input: {
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  note: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x4ro2ui",
    kMwMTN: "x1ixqp2s",
    kLWn49: "xfrs9s4",
    $$css: true
  }
};

/** A data swatch and editable six-digit hex and alpha, on a monochrome shell. */
export const ColorInspector = /*#__PURE__*/React.forwardRef(function ColorInspector({
  label,
  value,
  defaultValue = initial,
  onValueChange,
  readOnly,
  name,
  form,
  disabled,
  className,
  style,
  ...props
}, ref) {
  const id = React.useId();
  const [, refresh] = React.useReducer(n => n + 1, 0);
  const [current, setValue, fieldRef] = useInputValue(value, defaultValue, onValueChange, refresh);
  const mergedRef = useMergedRefs(ref, fieldRef);
  const validHex = /^#[\da-f]{6}$/i.test(current.hex);
  const validAlpha = current.alpha != null && Number.isFinite(current.alpha) && current.alpha >= 0 && current.alpha <= 1;
  const root = rs(["rs-color-inspector", className], styles.root);
  const heading = rs(["rs-color-inspector-label"], styles.label);
  const preview = rs(["rs-color-inspector-preview"], styles.preview);
  const swatch = rs(["rs-color-inspector-swatch"], styles.swatch);
  const fields = rs(["rs-color-inspector-fields"], styles.fields);
  const field = rs(["rs-color-inspector-field"], styles.field);
  const input = rs(["rs-color-inspector-input"], styles.input);
  const note = rs(["rs-color-inspector-note"], styles.note);
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
    }), /*#__PURE__*/_jsx("div", {
      "aria-hidden": "true",
      className: preview.className,
      style: preview.style,
      children: validHex && validAlpha && /*#__PURE__*/_jsx("span", {
        className: swatch.className,
        style: {
          ...swatch.style,
          backgroundColor: current.hex,
          opacity: current.alpha
        }
      })
    }), /*#__PURE__*/_jsxs("div", {
      className: fields.className,
      style: fields.style,
      children: [/*#__PURE__*/_jsxs("label", {
        className: field.className,
        style: field.style,
        children: ["Hex", /*#__PURE__*/_jsx(Input, {
          plain: true,
          type: "text",
          name: name ? `${name}.hex` : undefined,
          form: form,
          value: current.hex,
          pattern: "#[0-9a-fA-F]{6}",
          required: true,
          readOnly: readOnly,
          spellCheck: false,
          "aria-invalid": !validHex || undefined,
          "aria-describedby": `${id}-hint`,
          className: input.className,
          style: input.style,
          onChange: event => setValue({
            ...current,
            hex: event.currentTarget.value
          })
        })]
      }), /*#__PURE__*/_jsxs("label", {
        className: field.className,
        style: field.style,
        children: ["Alpha", /*#__PURE__*/_jsx(Input, {
          plain: true,
          type: "number",
          name: name ? `${name}.alpha` : undefined,
          form: form,
          min: 0,
          max: 1,
          step: "any",
          required: true,
          readOnly: readOnly,
          value: current.alpha != null && Number.isFinite(current.alpha) ? current.alpha : "",
          "aria-invalid": !validAlpha || undefined,
          "aria-describedby": `${id}-hint`,
          className: input.className,
          style: input.style,
          onChange: event => setValue({
            ...current,
            alpha: event.currentTarget.value === "" ? null : Number(event.currentTarget.value)
          })
        })]
      })]
    }), /*#__PURE__*/_jsx("p", {
      id: `${id}-hint`,
      className: note.className,
      style: note.style,
      children: !validHex ? "Enter a six-digit hex color beginning with #." : !validAlpha ? "Enter alpha from 0 to 1." : `${current.hex}, alpha ${current.alpha}`
    })]
  });
});
//# sourceMappingURL=color-inspector.js.map
