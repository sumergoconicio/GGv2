"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
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
    kMzoRj: "xc342km",
    kmVPX3: "x1717udv",
    kogj98: "x1ghz6dp",
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
  fields: {
    k1xSpc: "xrvj5dj",
    kumcoG: "x185a7wo x1nk3w99",
    kOIVth: "x8233eu",
    $$css: true
  },
  field: {
    k1xSpc: "xrvj5dj",
    kOIVth: "xpj7pl4",
    k7Eaqz: "xeuugli",
    kGuDYH: "xboafo0",
    $$css: true
  },
  control: {
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kcqcaj: "xss6m8b",
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
const emptyRegion = {
  contig: null,
  start: null,
  end: null
};
/** A region in one-based inclusive coordinates. No assembly or half-open conversion is performed. */
export const GenomicRegionField = /*#__PURE__*/React.forwardRef(function GenomicRegionField({
  label,
  reference,
  contigs,
  value,
  defaultValue = emptyRegion,
  onValueChange,
  required = false,
  readOnly = false,
  description,
  name,
  form,
  disabled,
  className,
  style,
  children,
  "aria-describedby": ariaDescribedBy,
  ...props
}, ref) {
  const [, refresh] = React.useReducer(n => n + 1, 0);
  const [current, setValue, fieldRef] = useInputValue(value, defaultValue, onValueChange, refresh);
  const merged = useMergedRefs(ref, fieldRef);
  const startRef = React.useRef(null);
  const id = React.useId();
  const validCatalog = reference.trim().length > 0 && contigs.length <= 2048 && contigs.every(contig => contig.id.trim() && Number.isSafeInteger(contig.length) && contig.length >= 1) && new Set(contigs.map(contig => contig.id)).size === contigs.length;
  const contig = validCatalog ? contigs.find(item => item.id === current.contig) : undefined;
  const empty = current.contig == null && current.start == null && current.end == null;
  const error = !validCatalog ? "Reference or contig bounds unavailable" : empty && !required ? "" : !contig ? "Choose a supplied contig" : current.start == null || current.end == null ? "Enter both start and end positions" : !Number.isSafeInteger(current.start) || !Number.isSafeInteger(current.end) ? "Positions must be whole safe integers" : current.start < 1 || current.end < 1 ? "Positions begin at 1" : current.end < current.start ? "End must be at or after start" : current.end > contig.length ? `End must be at most ${contig.length}` : "";
  React.useEffect(() => {
    startRef.current?.setCustomValidity(error);
  }, [error]);
  const describedBy = [ariaDescribedBy, `${id}-convention`, `${id}-feedback`, description != null && `${id}-description`].filter(Boolean).join(" ");
  const fieldName = field => name ? `${name}.${field}` : undefined;
  const root = rs(["rs-genomic-region-field", className], styles.root);
  const legend = rs(["rs-genomic-region-field-legend"], styles.legend);
  const fields = rs(["rs-genomic-region-field-fields"], styles.fields);
  const field = rs(["rs-genomic-region-field-label"], styles.field);
  const control = rs(["rs-genomic-region-field-control"], styles.control);
  const copy = rs(["rs-genomic-region-field-copy"], styles.copy);
  return /*#__PURE__*/_jsxs("fieldset", {
    ...props,
    ref: merged,
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
    }), /*#__PURE__*/_jsxs("p", {
      ...copy,
      children: ["Reference: ", reference || "Not supplied"]
    }), /*#__PURE__*/_jsx("p", {
      ...copy,
      id: `${id}-convention`,
      children: "1-based, inclusive. Both start and end are included."
    }), description != null && /*#__PURE__*/_jsx("div", {
      ...copy,
      id: `${id}-description`,
      children: description
    }), /*#__PURE__*/_jsx("input", {
      type: "hidden",
      name: fieldName("reference"),
      form: form,
      value: reference
    }), /*#__PURE__*/_jsx("input", {
      type: "hidden",
      name: fieldName("coordinates"),
      form: form,
      value: "1-based-inclusive"
    }), /*#__PURE__*/_jsxs("div", {
      ...fields,
      children: [/*#__PURE__*/_jsxs("div", {
        ...field,
        children: [/*#__PURE__*/_jsx("span", {
          id: `${id}-contig-label`,
          children: "Contig"
        }), /*#__PURE__*/_jsx(Select, {
          fullWidth: true,
          "aria-labelledby": `${id}-contig-label`,
          name: fieldName("contig"),
          form: form,
          value: contig?.id ?? "",
          required: required,
          disabled: disabled || !validCatalog,
          readOnly: readOnly,
          "aria-describedby": describedBy,
          "aria-invalid": !!error || undefined,
          onValueChange: next => setValue({
            ...current,
            contig: next || null
          }),
          options: [{
            value: "",
            label: "Choose contig"
          }, ...(validCatalog ? contigs.map(item => ({
            value: item.id,
            label: item.label ?? item.id
          })) : [])]
        })]
      }), /*#__PURE__*/_jsxs("label", {
        ...field,
        children: ["Start", /*#__PURE__*/_jsx(Input, {
          plain: true,
          ...control,
          ref: startRef,
          type: "number",
          step: 1,
          min: 1,
          max: contig?.length,
          required: required,
          readOnly: readOnly,
          disabled: disabled,
          name: fieldName("start"),
          form: form,
          value: current.start != null && Number.isFinite(current.start) ? current.start : "",
          "aria-describedby": describedBy,
          "aria-invalid": !!error || undefined,
          onChange: event => {
            if (!readOnly) setValue({
              ...current,
              start: Number.isFinite(event.currentTarget.valueAsNumber) ? event.currentTarget.valueAsNumber : null
            });
          }
        })]
      }), /*#__PURE__*/_jsxs("label", {
        ...field,
        children: ["End", /*#__PURE__*/_jsx(Input, {
          plain: true,
          ...control,
          type: "number",
          step: 1,
          min: 1,
          max: contig?.length,
          required: required,
          readOnly: readOnly,
          disabled: disabled,
          name: fieldName("end"),
          form: form,
          value: current.end != null && Number.isFinite(current.end) ? current.end : "",
          "aria-describedby": describedBy,
          "aria-invalid": !!error || undefined,
          onChange: event => {
            if (!readOnly) setValue({
              ...current,
              end: Number.isFinite(event.currentTarget.valueAsNumber) ? event.currentTarget.valueAsNumber : null
            });
          }
        })]
      })]
    }), /*#__PURE__*/_jsx("p", {
      ...copy,
      id: `${id}-feedback`,
      children: error || (empty ? "No region entered" : `${current.end - current.start + 1} positions, including both endpoints`)
    }), children]
  });
});
//# sourceMappingURL=genomic-region-field.js.map
