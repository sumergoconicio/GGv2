"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Select } from "./select.js";
import { useInputValue } from "../use-input-value.js";
import { useMergedRefs } from "../merge-refs.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
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
  context: {
    k1xSpc: "xrvj5dj",
    kumcoG: "x5m93ek",
    kOIVth: "x8233eu",
    kogj98: "x1ghz6dp",
    $$css: true
  },
  term: {
    kGuDYH: "x4ro2ui",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  detail: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x1jq7itm",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  field: {
    k1xSpc: "xrvj5dj",
    kOIVth: "xpj7pl4",
    kGuDYH: "x4ro2ui",
    $$css: true
  },
  control: {
    k7Eaqz: "xeuugli",
    kzqmXN: "xh8yej3",
    kAzted: "x1wszdd",
    $$css: true
  },
  list: {
    kB88ic: "xe8uvvx",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    $$css: true
  },
  item: {
    k1xSpc: "xrvj5dj",
    kOIVth: "xb6y1gh",
    kmVPX3: "x8hbxov",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  selected: {
    kWkggS: "x1nzd1wa",
    kVAM5u: "x1cn24jd x19k3fcw",
    $$css: true
  },
  title: {
    kogj98: "x1ghz6dp",
    k63SB2: "x1s688f",
    kGuDYH: "x1jq7itm",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  note: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x4ro2ui",
    kMwMTN: "x1ixqp2s",
    kHjlTd: "xj0a0fe",
    ks0D6T: "x1qp14f0",
    $$css: true
  }
};
function canUse(item) {
  return item.available === true && !item.grids?.some(grid => grid.available !== true);
}
function availability(item) {
  return item.available == null ? "Availability unknown" : item.available === false ? "Unavailable" : item.grids?.some(grid => grid.available !== true) ? "Required grids unavailable" : "Available";
}

/** Compares host-supplied operations and keeps unavailable alternatives visible. */
export const DatumTransformPicker = /*#__PURE__*/React.forwardRef(function DatumTransformPicker({
  label,
  sourceReference,
  destinationReference,
  transformations,
  value,
  defaultValue = null,
  onValueChange,
  description,
  selectionLabel = "Transformation",
  noneLabel = "No transformation selected",
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
  const validOptions = transformations.every(item => item.id.length > 0) && new Set(transformations.map(item => item.id)).size === transformations.length;
  const selected = transformations.find(item => item.id === current);
  const invalid = current != null && (!selected || !canUse(selected));
  const describedBy = [ariaDescribedBy, `${id}-selection`, description != null && `${id}-description`, readOnly && `${id}-readonly`].filter(Boolean).join(" ");
  const root = rs(["rs-datum-transform-picker", className], styles.root);
  const legend = rs(["rs-datum-transform-picker-legend"], styles.legend);
  const context = rs(["rs-datum-transform-picker-context"], styles.context);
  const term = rs(["rs-datum-transform-picker-term"], styles.term);
  const detail = rs(["rs-datum-transform-picker-detail"], styles.detail);
  const field = rs(["rs-datum-transform-picker-label"], styles.field);
  const control = rs(["rs-datum-transform-picker-control"], styles.control);
  const list = rs(["rs-datum-transform-picker-list"], styles.list);
  const title = rs(["rs-datum-transform-picker-title"], styles.title);
  const note = rs(["rs-datum-transform-picker-note"], styles.note);
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
    }), readOnly && /*#__PURE__*/_jsx("p", {
      ...note,
      id: `${id}-readonly`,
      children: "Read only"
    }), /*#__PURE__*/_jsxs("dl", {
      ...context,
      children: [/*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("dt", {
          ...term,
          children: "Source reference"
        }), /*#__PURE__*/_jsx("dd", {
          ...detail,
          children: sourceReference ?? "Unknown source reference"
        })]
      }), /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("dt", {
          ...term,
          children: "Destination reference"
        }), /*#__PURE__*/_jsx("dd", {
          ...detail,
          children: destinationReference ?? "Unknown destination reference"
        })]
      })]
    }), !validOptions ? /*#__PURE__*/_jsx("p", {
      ...note,
      children: "Transformation identifiers must be unique and non-empty."
    }) : /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsxs("div", {
        ...field,
        children: [/*#__PURE__*/_jsx("span", {
          id: `${id}-choice-label`,
          children: selectionLabel
        }), /*#__PURE__*/_jsx(Select, {
          ...control,
          fullWidth: true,
          name: name,
          form: form,
          value: invalid ? "" : current ?? "",
          disabled: disabled,
          readOnly: readOnly,
          required: required || invalid,
          "aria-invalid": invalid || undefined,
          "aria-labelledby": `${id}-choice-label`,
          "aria-describedby": describedBy,
          options: [{
            value: "",
            label: invalid ? `Unavailable transformation: ${current}` : noneLabel
          }, ...transformations.map(item => ({
            value: item.id,
            label: `${item.label}${canUse(item) ? "" : ` (${availability(item)})`}`,
            disabled: !canUse(item)
          }))],
          onValueChange: next => {
            if (!readOnly && !disabled) setValue(next || null);
          }
        })]
      }), /*#__PURE__*/_jsx("ul", {
        ...list,
        children: transformations.map(item => {
          const row = rs(["rs-datum-transform-picker-item", current === item.id && "rs-datum-transform-picker-selected"], styles.item, current === item.id && styles.selected);
          return /*#__PURE__*/_createElement("li", {
            ...row,
            key: item.id
          }, /*#__PURE__*/_jsxs("p", {
            ...title,
            children: [item.label, current === item.id ? " · Selected" : ""]
          }), /*#__PURE__*/_jsxs("p", {
            ...note,
            children: [availability(item), !canUse(item) && item.unavailableReason != null ? /*#__PURE__*/_jsxs(_Fragment, {
              children: [": ", item.unavailableReason]
            }) : null]
          }), /*#__PURE__*/_jsxs("dl", {
            ...context,
            children: [/*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("dt", {
                ...term,
                children: "Reported accuracy"
              }), /*#__PURE__*/_jsx("dd", {
                ...detail,
                children: item.accuracy ?? "Not supplied"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("dt", {
                ...term,
                children: "Area of use"
              }), /*#__PURE__*/_jsx("dd", {
                ...detail,
                children: item.area ?? "Not supplied"
              })]
            })]
          }), /*#__PURE__*/_jsxs("p", {
            ...note,
            children: ["Support grids: ", item.grids == null ? "Requirements not supplied" : item.grids.length === 0 ? "None required" : item.grids.map(grid => `${grid.label} (${grid.available === true ? "available" : grid.available === false ? "missing" : "availability unknown"})`).join(", ")]
          }));
        })
      }), transformations.length === 0 && /*#__PURE__*/_jsx("p", {
        ...note,
        children: "No transformations supplied"
      })]
    }), /*#__PURE__*/_jsx("p", {
      ...note,
      id: `${id}-selection`,
      children: current == null ? noneLabel : !selected ? `Unknown transformation: ${current}` : invalid ? `Selected transformation unavailable: ${selected.label}` : `Selected: ${selected.label}`
    }), children]
  });
});
//# sourceMappingURL=datum-transform-picker.js.map
