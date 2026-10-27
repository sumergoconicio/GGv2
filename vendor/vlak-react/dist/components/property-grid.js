"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Input } from "./input.js";
import { NativeSelect } from "./native-select.js";
import { Switch } from "./switch.js";
import { useInputValue } from "../use-input-value.js";
import { useMergedRefs } from "../merge-refs.js";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    kMwMTN: "x1gney9c",
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  row: {
    k1xSpc: "xrvj5dj",
    kumcoG: "xmknvdj x1nk3w99",
    kGNEyG: "x6s0dn4",
    kOIVth: "x8233eu",
    k8WAf4: "xo0yzjp",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  label: {
    kLWn49: "xfrs9s4",
    kGuDYH: "xkpwil5",
    $$css: true
  },
  control: {
    k1xSpc: "x78zum5",
    kOIVth: "x13z6uf9",
    kGNEyG: "x6s0dn4",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  note: {
    kMwMTN: "x1ixqp2s",
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    kqGvvJ: "xf4nof0",
    $$css: true
  }
};

/** Editable property rows with shared label/value/unit alignment. */
export const PropertyGrid = /*#__PURE__*/React.forwardRef(function PropertyGrid({
  fields,
  value,
  defaultValue = {},
  onValueChange,
  label = "Properties",
  className,
  style,
  ...props
}, ref) {
  const [values, setValues, localRef] = useInputValue(value, defaultValue, onValueChange);
  const mergedRef = useMergedRefs(ref, localRef);
  const id = React.useId();
  const set = (field, next) => setValues({
    ...values,
    [field]: next
  });
  const root = rs(["rs-property-grid", className], styles.root);
  const row = rs(["rs-property-grid-row"], styles.row);
  const lab = rs(["rs-property-grid-label"], styles.label);
  const control = rs(["rs-property-grid-control"], styles.control);
  const note = rs(["rs-property-grid-note"], styles.note);
  return /*#__PURE__*/_jsx("div", {
    ref: mergedRef,
    role: "group",
    "aria-label": label,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: fields.map(field => {
      const fieldId = `${id}-${field.id}`;
      const hint = [field.description ? `${fieldId}-hint` : null, field.unit ? `${fieldId}-unit` : null].filter(Boolean).join(" ") || undefined;
      return /*#__PURE__*/_jsxs("div", {
        ...row,
        children: [/*#__PURE__*/_jsx("label", {
          ...lab,
          htmlFor: fieldId,
          children: field.label
        }), /*#__PURE__*/_jsxs("div", {
          children: [/*#__PURE__*/_jsxs("div", {
            ...control,
            children: [field.type === "switch" ? /*#__PURE__*/_jsxs(_Fragment, {
              children: [/*#__PURE__*/_jsx(Switch, {
                id: fieldId,
                "aria-label": field.label,
                "aria-describedby": hint,
                checked: Boolean(values[field.id]),
                disabled: field.disabled,
                onCheckedChange: next => set(field.id, next)
              }), /*#__PURE__*/_jsx("input", {
                type: "hidden",
                name: field.id,
                value: String(Boolean(values[field.id])),
                disabled: field.disabled
              })]
            }) : field.type === "select" ? /*#__PURE__*/_jsxs(NativeSelect, {
              id: fieldId,
              name: field.id,
              "aria-label": field.label,
              "aria-describedby": hint,
              value: String(values[field.id] ?? ""),
              disabled: field.disabled,
              onChange: event => set(field.id, event.target.value),
              children: [/*#__PURE__*/_jsxs("option", {
                value: "",
                children: ["Select ", field.label.toLocaleLowerCase()]
              }), field.options?.map(option => /*#__PURE__*/_jsx("option", {
                value: option.value,
                children: option.label
              }, option.value))]
            }) : /*#__PURE__*/_jsx(Input, {
              plain: true,
              id: fieldId,
              name: field.id,
              "aria-describedby": hint,
              type: field.type === "number" ? "number" : "text",
              min: field.min,
              max: field.max,
              step: field.step,
              disabled: field.disabled,
              value: String(values[field.id] ?? ""),
              onChange: event => set(field.id, field.type === "number" && event.target.value !== "" && Number.isFinite(event.target.valueAsNumber) ? event.target.valueAsNumber : event.target.value)
            }), field.unit && /*#__PURE__*/_jsx("span", {
              ...note,
              id: `${fieldId}-unit`,
              children: field.unit
            })]
          }), field.description && /*#__PURE__*/_jsx("p", {
            ...note,
            id: `${fieldId}-hint`,
            children: field.description
          })]
        })]
      }, field.id);
    })
  });
});
//# sourceMappingURL=property-grid.js.map
