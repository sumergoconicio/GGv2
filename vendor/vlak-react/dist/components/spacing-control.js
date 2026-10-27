"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Input } from "./input.js";
import { Button } from "./button.js";
import { useInputValue } from "../use-input-value.js";
import { useMergedRefs } from "../merge-refs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const initial = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
const sides = ["top", "right", "bottom", "left"];
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    k7Eaqz: "xeuugli",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    kMzoRj: "xc342km",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  label: {
    k1K539: "x1gr9t9r",
    kmVPX3: "x1717udv",
    kGuDYH: "x1jq7itm",
    k63SB2: "x1s688f",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  fields: {
    k1xSpc: "xrvj5dj",
    kumcoG: "x1nh781e",
    kOIVth: "x13z6uf9",
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
  link: {
    kFhvOy: "x1lqcxt8",
    $$css: true
  },
  linked: {
    kWkggS: "xmgn9m6 xf7h6k7",
    kMwMTN: "x19rmm7l x1pljmm8",
    $$css: true
  },
  note: {
    kogj98: "x1ghz6dp",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x4ro2ui",
    kLWn49: "xfrs9s4",
    $$css: true
  }
};

/** Four native numeric fields; linking applies the next edit to every side. */
export const SpacingControl = /*#__PURE__*/React.forwardRef(function SpacingControl({
  label,
  value,
  defaultValue = initial,
  onValueChange,
  linked,
  defaultLinked = false,
  onLinkedChange,
  unit = "px",
  min,
  max,
  step = 1,
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
  const [isLinked, setLinked, linkRef] = useInputValue(linked, defaultLinked, onLinkedChange, refresh);
  const mergedRef = useMergedRefs(ref, fieldRef);
  const validBounds = (min == null || Number.isFinite(min)) && (max == null || Number.isFinite(max)) && (min == null || max == null || min <= max) && Number.isFinite(step) && step > 0;
  const root = rs(["rs-spacing-control", className], styles.root);
  const heading = rs(["rs-spacing-control-label"], styles.label);
  const fields = rs(["rs-spacing-control-fields"], styles.fields);
  const field = rs(["rs-spacing-control-field"], styles.field);
  const input = rs(["rs-spacing-control-input"], styles.input);
  const link = rs(["rs-spacing-control-link", isLinked && "rs-spacing-control-linked"], styles.link, isLinked && styles.linked);
  const note = rs(["rs-spacing-control-note"], styles.note);
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
      className: fields.className,
      style: fields.style,
      children: sides.map(side => /*#__PURE__*/_jsxs("label", {
        className: field.className,
        style: field.style,
        children: [side.charAt(0).toUpperCase() + side.slice(1), " (", unit, ")", /*#__PURE__*/_jsx(Input, {
          plain: true,
          type: "number",
          form: form,
          name: name ? `${name}.${side}` : undefined,
          min: validBounds ? min : undefined,
          max: validBounds ? max : undefined,
          step: validBounds ? step : undefined,
          disabled: disabled || !validBounds,
          readOnly: readOnly,
          value: current[side] != null && Number.isFinite(current[side]) ? current[side] : "",
          "aria-describedby": `${id}-hint`,
          className: input.className,
          style: input.style,
          onChange: event => {
            const next = event.currentTarget.value === "" ? null : Number(event.currentTarget.value);
            setValue(isLinked ? {
              top: next,
              right: next,
              bottom: next,
              left: next
            } : {
              ...current,
              [side]: next
            });
          }
        })]
      }, side))
    }), /*#__PURE__*/_jsx(Button, {
      variant: "ghost",
      size: "sm",
      type: "button",
      ref: linkRef,
      form: form,
      disabled: disabled || readOnly || !validBounds,
      "aria-pressed": isLinked,
      "aria-describedby": `${id}-hint`,
      className: link.className,
      style: link.style,
      onClick: () => setLinked(!isLinked),
      children: "Link sides"
    }), /*#__PURE__*/_jsx("p", {
      id: `${id}-hint`,
      className: note.className,
      style: note.style,
      children: !validBounds ? "Spacing bounds unavailable" : isLinked ? "The next edit applies to all four sides." : "Each side is edited separately."
    })]
  });
});
//# sourceMappingURL=spacing-control.js.map
