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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
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
    k1K539: "xhbfen4",
    k63SB2: "xk50ysn",
    kGuDYH: "xkpwil5",
    $$css: true
  },
  row: {
    k1xSpc: "xrvj5dj",
    kumcoG: "x19i92ox",
    kOIVth: "x8233eu",
    $$css: true
  },
  field: {
    k1xSpc: "xrvj5dj",
    kOIVth: "xpj7pl4",
    k7Eaqz: "xeuugli",
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  control: {
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  description: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    ks0D6T: "x1qp14f0",
    $$css: true
  }
};

/** A native numeric input and unit selector. Selection never converts the amount. */
export const QuantityField = /*#__PURE__*/React.forwardRef(function QuantityField({
  label,
  units,
  value,
  defaultValue = {
    amount: null,
    unit: null
  },
  onValueChange,
  description,
  name,
  unitName = name ? `${name}.unit` : undefined,
  form,
  amountLabel = "Amount",
  unitLabel = "Unit",
  unitPlaceholder = "Choose unit",
  min,
  max,
  step = "any",
  required,
  readOnly = false,
  disabled,
  className,
  style,
  "aria-describedby": ariaDescribedBy,
  children,
  ...props
}, ref) {
  const [, refresh] = React.useReducer(revision => revision + 1, 0);
  const [current, setValue, fieldRef] = useInputValue(value, defaultValue, onValueChange, refresh);
  const mergedRef = useMergedRefs(ref, fieldRef);
  const id = React.useId();
  const describedBy = [ariaDescribedBy, description != null && `${id}-description`, readOnly && `${id}-readonly`].filter(Boolean).join(" ") || undefined;
  const validAmount = current.amount != null && Number.isFinite(current.amount);
  const validUnit = current.unit != null && units.some(unit => unit.value === current.unit);
  const root = rs(["rs-quantity-field", className], styles.root);
  const legend = rs(["rs-quantity-field-legend"], styles.legend);
  const row = rs(["rs-quantity-field-row"], styles.row);
  const field = rs(["rs-quantity-field-label"], styles.field);
  const control = rs(["rs-quantity-field-control"], styles.control);
  const copy = rs(["rs-quantity-field-description"], styles.description);
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
      ...copy,
      id: `${id}-description`,
      children: description
    }), readOnly && /*#__PURE__*/_jsx("p", {
      ...copy,
      id: `${id}-readonly`,
      children: "Read only"
    }), /*#__PURE__*/_jsxs("div", {
      ...row,
      children: [/*#__PURE__*/_jsxs("label", {
        ...field,
        children: [/*#__PURE__*/_jsx("span", {
          children: amountLabel
        }), /*#__PURE__*/_jsx(Input, {
          plain: true,
          ...control,
          type: "number",
          name: name,
          form: form,
          value: validAmount ? current.amount : "",
          min: min,
          max: max,
          step: step,
          required: required,
          readOnly: readOnly,
          disabled: disabled,
          "aria-describedby": describedBy,
          onChange: event => {
            if (!readOnly) setValue({
              amount: Number.isFinite(event.currentTarget.valueAsNumber) ? event.currentTarget.valueAsNumber : null,
              unit: current.unit
            });
          }
        })]
      }), /*#__PURE__*/_jsxs("div", {
        ...field,
        children: [/*#__PURE__*/_jsx("span", {
          id: `${id}-unit-label`,
          children: unitLabel
        }), /*#__PURE__*/_jsx(Select, {
          fullWidth: true,
          "aria-labelledby": `${id}-unit-label`,
          name: unitName,
          form: form,
          value: validUnit ? current.unit : "",
          required: required,
          disabled: disabled,
          readOnly: readOnly,
          "aria-describedby": describedBy,
          onValueChange: next => setValue({
            amount: current.amount,
            unit: next || null
          }),
          options: [{
            value: "",
            label: unitPlaceholder
          }, ...units]
        })]
      })]
    }), current.amount != null && !validAmount && /*#__PURE__*/_jsx("p", {
      ...copy,
      children: "Amount unavailable"
    }), current.unit != null && !validUnit && /*#__PURE__*/_jsx("p", {
      ...copy,
      children: "Unit unavailable"
    }), children]
  });
});
//# sourceMappingURL=quantity-field.js.map
