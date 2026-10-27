"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { Select } from "./select.js";
import { Input } from "./input.js";
import { useInputValue } from "../use-input-value.js";
import { useMergedRefs } from "../merge-refs.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
const initial = {
  reference: null,
  coordinates: {}
};
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x1fsutb",
    k7Eaqz: "xeuugli",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    kMzoRj: "xc342km",
    kMwMTN: "x1gney9c",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  legend: {
    kmVPX3: "x1717udv",
    k1K539: "x1gr9t9r",
    kGuDYH: "x1jq7itm",
    k63SB2: "x1s688f",
    $$css: true
  },
  axes: {
    k1xSpc: "xrvj5dj",
    kumcoG: "x1mep8l",
    kOIVth: "x8233eu",
    $$css: true
  },
  field: {
    k1xSpc: "xrvj5dj",
    kfiyM8: "x10ukxgv",
    kOIVth: "xpj7pl4",
    k7Eaqz: "xeuugli",
    kGuDYH: "x4ro2ui",
    $$css: true
  },
  control: {
    k7Eaqz: "xeuugli",
    kzqmXN: "xh8yej3",
    kAzted: "x1wszdd",
    $$css: true
  },
  note: {
    kogj98: "x1ghz6dp",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x4ro2ui",
    ks0D6T: "x1qp14f0",
    kHjlTd: "xj0a0fe",
    $$css: true
  }
};

/** Numeric coordinates and an explicitly assigned reference, without implicit conversion. */
export const CoordinateReferenceField = /*#__PURE__*/React.forwardRef(function CoordinateReferenceField({
  label,
  axes,
  references,
  value,
  defaultValue = initial,
  onValueChange,
  description,
  referenceLabel = "Coordinate reference",
  unknownReferenceLabel = "Unknown reference",
  required,
  readOnly,
  disabled,
  name,
  form,
  className,
  style,
  children,
  "aria-describedby": ariaDescribedBy,
  ...props
}, ref) {
  const id = React.useId();
  const [, refresh] = React.useReducer(n => n + 1, 0);
  const [current, setValue, fieldRef] = useInputValue(value, defaultValue, onValueChange, refresh);
  const mergedRef = useMergedRefs(ref, fieldRef);
  const reference = references.find(option => option.value === current.reference);
  const unknown = current.reference != null && !reference;
  const unavailable = unknown || reference?.disabled === true;
  const validOptions = axes.length >= 2 && axes.length <= 3 && axes.every(axis => axis.id.length > 0) && new Set(axes.map(axis => axis.id)).size === axes.length && references.every(option => option.value.length > 0) && new Set(references.map(option => option.value)).size === references.length;
  const describedBy = [ariaDescribedBy, `${id}-assignment`, description != null && `${id}-description`, readOnly && `${id}-readonly`].filter(Boolean).join(" ");
  const root = rs(["rs-coordinate-reference-field", className], styles.root);
  const legend = rs(["rs-coordinate-reference-field-legend"], styles.legend);
  const fields = rs(["rs-coordinate-reference-field-axes"], styles.axes);
  const field = rs(["rs-coordinate-reference-field-label"], styles.field);
  const control = rs(["rs-coordinate-reference-field-control"], styles.control);
  const note = rs(["rs-coordinate-reference-field-note"], styles.note);
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
      ...legend,
      children: label
    }), description != null && /*#__PURE__*/_jsx("p", {
      ...note,
      id: `${id}-description`,
      children: description
    }), /*#__PURE__*/_jsx("p", {
      ...note,
      id: `${id}-assignment`,
      children: "Assigning a reference keeps the entered coordinates. Conversion is handled by the application."
    }), readOnly && /*#__PURE__*/_jsx("p", {
      ...note,
      id: `${id}-readonly`,
      children: "Read only"
    }), !validOptions ? /*#__PURE__*/_jsx("p", {
      ...note,
      children: "Supply two or three uniquely named axes and unique, non-empty reference identifiers."
    }) : /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsxs("div", {
        ...field,
        children: [/*#__PURE__*/_jsx("span", {
          id: `${id}-reference-label`,
          children: referenceLabel
        }), /*#__PURE__*/_jsx(Select, {
          ...control,
          fullWidth: true,
          name: name ? `${name}.reference` : undefined,
          form: form,
          value: unavailable ? "" : current.reference ?? "",
          disabled: disabled,
          readOnly: readOnly,
          required: required || unavailable,
          "aria-invalid": unavailable || undefined,
          "aria-labelledby": `${id}-reference-label`,
          "aria-describedby": `${describedBy} ${id}-reference`,
          options: [{
            value: "",
            label: unavailable ? `Unavailable reference: ${current.reference}` : unknownReferenceLabel
          }, ...references.map(option => ({
            value: option.value,
            label: option.label,
            disabled: option.disabled
          }))],
          onValueChange: next => {
            if (!readOnly && !disabled) setValue({
              ...current,
              reference: next || null
            });
          }
        })]
      }), /*#__PURE__*/_jsx("p", {
        ...note,
        id: `${id}-reference`,
        children: unavailable ? `Reference unavailable: ${current.reference}` : reference?.description ?? (reference ? reference.value : unknownReferenceLabel)
      }), /*#__PURE__*/_jsx("div", {
        ...fields,
        children: axes.map((axis, index) => {
          const amount = current.coordinates[axis.id];
          const finite = amount != null && Number.isFinite(amount);
          const invalid = amount != null && !finite;
          const hintId = `${id}-axis-${index}`;
          return /*#__PURE__*/_createElement("label", {
            ...field,
            key: axis.id
          }, /*#__PURE__*/_jsxs("span", {
            id: `${hintId}-label`,
            children: [axis.label, axis.unit ? ` (${axis.unit})` : ""]
          }), /*#__PURE__*/_jsx(Input, {
            plain: true,
            ...control,
            type: "number",
            name: name ? `${name}.coordinates.${axis.id}` : undefined,
            form: form,
            value: finite ? amount : "",
            min: axis.min,
            max: axis.max,
            step: "any",
            required: required,
            readOnly: readOnly,
            "aria-invalid": invalid || undefined,
            "aria-labelledby": `${hintId}-label`,
            "aria-describedby": `${describedBy} ${hintId}`,
            ref: node => {
              node?.setCustomValidity(invalid ? "Coordinate unavailable. Enter a finite number." : "");
            },
            onChange: event => {
              if (!readOnly && !disabled) setValue({
                ...current,
                coordinates: {
                  ...current.coordinates,
                  [axis.id]: Number.isFinite(event.currentTarget.valueAsNumber) ? event.currentTarget.valueAsNumber : null
                }
              });
            }
          }), /*#__PURE__*/_jsx("span", {
            ...note,
            id: hintId,
            children: invalid ? "Coordinate unavailable" : amount == null ? "Not supplied" : axis.unit ? `Unit: ${axis.unit}` : "Unit not supplied"
          }));
        })
      })]
    }), children]
  });
});
//# sourceMappingURL=coordinate-reference-field.js.map
