"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { Select } from "./select.js";
import { useInputValue } from "../use-input-value.js";
import { useMergedRefs } from "../merge-refs.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
  field: {
    k1xSpc: "xrvj5dj",
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
  properties: {
    k1xSpc: "xrvj5dj",
    kumcoG: "xyqyb5s",
    kOIVth: "x1fsutb",
    kogj98: "x1ghz6dp",
    k8WAf4: "x142x9wm",
    kEafiO: "x1ro6g4h",
    kPef9Z: "x13fuv20",
    kLZC3w: "x1fq36pv",
    $$css: true
  },
  term: {
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x4ro2ui",
    $$css: true
  },
  detail: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x1jq7itm",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  table: {
    kzqmXN: "xh8yej3",
    kLvRdT: "x1mwwwfo",
    kPzzVL: "x140o2bo",
    kGuDYH: "x4ro2ui",
    $$css: true
  },
  caption: {
    k9WMMc: "x1yc453h",
    kGuDYH: "x1jq7itm",
    k63SB2: "x1s688f",
    kGO01o: "xmnamis",
    $$css: true
  },
  cell: {
    k9WMMc: "x1yc453h",
    kXLuUW: "x16dsc37",
    k8WAf4: "x13eudtd",
    kwRFfy: "xqfkjy8",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    k63SB2: "xo1l8bm",
    kcqcaj: "xss6m8b",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  note: {
    kogj98: "x1ghz6dp",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x4ro2ui",
    kHjlTd: "xj0a0fe",
    ks0D6T: "x1qp14f0",
    $$css: true
  }
};
function text(value) {
  return value?.trim() ? value : "Not supplied";
}
function measurement(value) {
  return value == null || typeof value === "string" && !value.trim() ? "Not supplied" : typeof value === "number" && !Number.isFinite(value) ? "Unavailable" : value;
}

/** Inspects supplied pad records without inferring connectivity, shape or dimensions. */
export const PadInspector = /*#__PURE__*/React.forwardRef(function PadInspector({
  label,
  pads,
  value,
  defaultValue = null,
  onValueChange,
  boardLabel,
  description,
  selectionLabel = "Pad",
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
  const validRecords = pads.every(pad => pad.id.length > 0 && (!pad.geometry || pad.geometry.every(item => item.id.length > 0) && new Set(pad.geometry.map(item => item.id)).size === pad.geometry.length)) && new Set(pads.map(pad => pad.id)).size === pads.length;
  const selected = pads.find(pad => pad.id === current);
  const unavailable = current != null && (!selected || selected.disabled);
  const describedBy = [ariaDescribedBy, `${id}-selection`, description != null && `${id}-description`, readOnly && `${id}-readonly`].filter(Boolean).join(" ");
  const root = rs(["rs-pad-inspector", className], styles.root);
  const legend = rs(["rs-pad-inspector-legend"], styles.legend);
  const field = rs(["rs-pad-inspector-label"], styles.field);
  const control = rs(["rs-pad-inspector-control"], styles.control);
  const properties = rs(["rs-pad-inspector-properties"], styles.properties);
  const term = rs(["rs-pad-inspector-term"], styles.term);
  const detail = rs(["rs-pad-inspector-detail"], styles.detail);
  const table = rs(["rs-pad-inspector-table"], styles.table);
  const caption = rs(["rs-pad-inspector-caption"], styles.caption);
  const cell = rs(["rs-pad-inspector-cell"], styles.cell);
  const note = rs(["rs-pad-inspector-note"], styles.note);
  const records = selected ? [["Pad identifier", selected.id], ["Footprint reference", text(selected.reference)], ["Pad number", text(selected.number)], ["Net", text(selected.net)], ["Pad type", text(selected.type)], ["Shape", text(selected.shape)], ["Layers", selected.layers == null ? "Not supplied" : selected.layers.length === 0 ? "None recorded" : selected.layers.join(", ")]] : [];
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
    }), boardLabel != null && /*#__PURE__*/_jsx("p", {
      ...note,
      children: boardLabel
    }), description != null && /*#__PURE__*/_jsx("p", {
      ...note,
      id: `${id}-description`,
      children: description
    }), readOnly && /*#__PURE__*/_jsx("p", {
      ...note,
      id: `${id}-readonly`,
      children: "Read only"
    }), !validRecords ? /*#__PURE__*/_jsx("p", {
      ...note,
      children: "Pad and measurement identifiers must be unique and non-empty."
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
          value: unavailable ? "" : current ?? "",
          disabled: disabled,
          readOnly: readOnly,
          required: required || unavailable,
          "aria-invalid": unavailable || undefined,
          "aria-labelledby": `${id}-choice-label`,
          "aria-describedby": describedBy,
          options: [{
            value: "",
            label: unavailable ? `Unavailable pad: ${current}` : "No pad selected"
          }, ...pads.map(pad => ({
            value: pad.id,
            label: `${pad.reference?.trim() ? `${pad.reference} / ` : ""}${pad.number?.trim() ? `Pad ${pad.number} · ` : ""}${pad.id}`,
            disabled: pad.disabled
          }))],
          onValueChange: next => {
            if (!readOnly && !disabled) setValue(next || null);
          }
        })]
      }), selected && /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx("dl", {
          ...properties,
          children: records.map(([key, value]) => /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("dt", {
              ...term,
              children: key
            }), /*#__PURE__*/_jsx("dd", {
              ...detail,
              children: value
            })]
          }, key))
        }), selected.geometry?.length ? /*#__PURE__*/_jsxs("table", {
          ...table,
          children: [/*#__PURE__*/_jsx("caption", {
            ...caption,
            children: "Supplied geometry"
          }), /*#__PURE__*/_jsx("thead", {
            children: /*#__PURE__*/_jsxs("tr", {
              children: [/*#__PURE__*/_jsx("th", {
                ...cell,
                scope: "col",
                children: "Dimension"
              }), /*#__PURE__*/_jsx("th", {
                ...cell,
                scope: "col",
                children: "Value"
              }), /*#__PURE__*/_jsx("th", {
                ...cell,
                scope: "col",
                children: "Unit"
              })]
            })
          }), /*#__PURE__*/_jsx("tbody", {
            children: selected.geometry.map(item => /*#__PURE__*/_jsxs("tr", {
              children: [/*#__PURE__*/_jsx("th", {
                ...cell,
                scope: "row",
                children: item.label
              }), /*#__PURE__*/_jsx("td", {
                ...cell,
                children: measurement(item.value)
              }), /*#__PURE__*/_jsx("td", {
                ...cell,
                children: text(item.unit)
              })]
            }, item.id))
          })]
        }) : /*#__PURE__*/_jsx("p", {
          ...note,
          children: "Geometry not supplied"
        })]
      }), pads.length === 0 && /*#__PURE__*/_jsx("p", {
        ...note,
        children: "No pad records supplied"
      })]
    }), /*#__PURE__*/_jsx("p", {
      ...note,
      id: `${id}-selection`,
      children: unavailable ? `Selected pad unavailable: ${current}` : selected ? `Selected pad: ${selected.id}` : "No pad selected"
    }), children]
  });
});
//# sourceMappingURL=pad-inspector.js.map
