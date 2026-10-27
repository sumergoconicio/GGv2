"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useInputValue } from "../use-input-value.js";
import { useMergedRefs } from "../merge-refs.js";
import { Select } from "./select.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const flags = [{
  key: "populated",
  label: "Populated"
}, {
  key: "includeInBom",
  label: "In bill of materials"
}, {
  key: "includeInPlacement",
  label: "In placement file"
}];
const flagLabel = value => value === true ? "Yes" : value === false ? "No" : "Unspecified";
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
  legend: {
    k1K539: "x1gr9t9r",
    kmVPX3: "x1717udv",
    kGuDYH: "x1jq7itm",
    k63SB2: "x1s688f",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  viewport: {
    k7Eaqz: "xeuugli",
    ks0D6T: "x193iq5w",
    kVQacm: "xysyzu8",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    $$css: true
  },
  table: {
    kzqmXN: "xh8yej3",
    kLvRdT: "x1mwwwfo",
    kGuDYH: "x4ro2ui",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  header: {
    kmVPX3: "x79iv2k",
    k7Eaqz: "x1bnrkr7",
    k9WMMc: "x1yc453h",
    kXLuUW: "x16dsc37",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    k63SB2: "x1s688f",
    $$css: true
  },
  part: {
    k1xSpc: "x1lliihq",
    kGuDYH: "x4ro2ui",
    kMwMTN: "x1ixqp2s",
    k63SB2: "xo1l8bm",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  cell: {
    kmVPX3: "x7gbtqy",
    k7Eaqz: "x12kinc7",
    kXLuUW: "x16dsc37",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  summary: {
    kB7OPa: "x9f619",
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kmVPX3: "x1835gkm",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd",
    kaIpWk: "xkrxur",
    kkrTdU: "x1ypdohk",
    kWkggS: "xhpg8l3",
    kMwMTN: "x1gney9c",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  details: {
    kLzPir: "x1c3097r x1hzrnvt",
    $$css: true
  },
  editor: {
    k1xSpc: "xrvj5dj",
    kOIVth: "xb6y1gh",
    kLKAdn: "x1q57ora",
    $$css: true
  },
  field: {
    k1xSpc: "xrvj5dj",
    kOIVth: "xvh977a",
    kGuDYH: "x4ro2ui",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  select: {
    k7Eaqz: "xeuugli",
    kzqmXN: "xh8yej3",
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

/** Independent fitted, bill-of-materials and placement choices per reference and variant. */
export const AssemblyVariantMatrix = /*#__PURE__*/React.forwardRef(function AssemblyVariantMatrix({
  label,
  references,
  variants,
  value,
  defaultValue = [],
  onValueChange,
  readOnly,
  disabled,
  name,
  form,
  className,
  style,
  ...props
}, ref) {
  const [, refresh] = React.useReducer(n => n + 1, 0);
  const [current, setValue, fieldRef] = useInputValue(value, defaultValue, onValueChange, refresh);
  const mergedRef = useMergedRefs(ref, fieldRef);
  const unknown = current.filter(cell => !references.some(reference => reference.id === cell.referenceId) || !variants.some(variant => variant.id === cell.variantId));
  const root = rs(["rs-assembly-variant-matrix", className], styles.root);
  const legend = rs(["rs-assembly-variant-matrix-legend"], styles.legend);
  const viewport = rs(["rs-assembly-variant-matrix-viewport"], styles.viewport);
  const table = rs(["rs-assembly-variant-matrix-table"], styles.table);
  const header = rs(["rs-assembly-variant-matrix-header"], styles.header);
  const part = rs(["rs-assembly-variant-matrix-part"], styles.part);
  const cellStyle = rs(["rs-assembly-variant-matrix-cell"], styles.cell);
  const details = rs(["rs-assembly-variant-matrix-details"], styles.details);
  const summary = rs(["rs-assembly-variant-matrix-summary"], styles.summary);
  const editor = rs(["rs-assembly-variant-matrix-editor"], styles.editor);
  const field = rs(["rs-assembly-variant-matrix-field"], styles.field);
  const select = rs(["rs-assembly-variant-matrix-select"], styles.select);
  const note = rs(["rs-assembly-variant-matrix-note"], styles.note);
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
      className: legend.className,
      style: legend.style,
      children: label
    }), references.length === 0 || variants.length === 0 ? /*#__PURE__*/_jsx("p", {
      className: note.className,
      style: note.style,
      children: "Supply references and variants to edit assembly choices."
    }) : /*#__PURE__*/_jsx("div", {
      className: viewport.className,
      style: viewport.style,
      children: /*#__PURE__*/_jsxs("table", {
        className: table.className,
        style: table.style,
        children: [/*#__PURE__*/_jsx("thead", {
          children: /*#__PURE__*/_jsxs("tr", {
            children: [/*#__PURE__*/_jsx("th", {
              scope: "col",
              className: header.className,
              style: header.style,
              children: "Reference / variant"
            }), variants.map(variant => /*#__PURE__*/_jsx("th", {
              scope: "col",
              className: header.className,
              style: header.style,
              children: variant.label
            }, variant.id))]
          })
        }), /*#__PURE__*/_jsx("tbody", {
          children: references.map(reference => /*#__PURE__*/_jsxs("tr", {
            children: [/*#__PURE__*/_jsxs("th", {
              scope: "row",
              className: header.className,
              style: header.style,
              children: [reference.label, reference.partLabel && /*#__PURE__*/_jsx("span", {
                className: part.className,
                style: part.style,
                children: reference.partLabel
              })]
            }), variants.map(variant => {
              const matches = current.filter(cell => cell.referenceId === reference.id && cell.variantId === variant.id);
              const cell = matches[0];
              const duplicate = matches.length > 1;
              const context = `${reference.label} in ${variant.label}`;
              return /*#__PURE__*/_jsx("td", {
                className: cellStyle.className,
                style: cellStyle.style,
                children: duplicate ? /*#__PURE__*/_jsxs("p", {
                  className: note.className,
                  style: note.style,
                  children: ["Conflicting records for ", context]
                }) : /*#__PURE__*/_jsxs("details", {
                  className: details.className,
                  style: details.style,
                  children: [/*#__PURE__*/_jsxs("summary", {
                    "aria-label": `Edit ${context}`,
                    className: summary.className,
                    style: summary.style,
                    children: [/*#__PURE__*/_jsxs("span", {
                      children: ["Edit ", context]
                    }), /*#__PURE__*/_jsx("span", {
                      className: part.className,
                      style: part.style,
                      children: cell ? `Populated: ${flagLabel(cell.populated)} · Bill: ${flagLabel(cell.includeInBom)} · Placement: ${flagLabel(cell.includeInPlacement)}` : "Not specified"
                    })]
                  }), /*#__PURE__*/_jsx("div", {
                    className: editor.className,
                    style: editor.style,
                    children: flags.map(flag => /*#__PURE__*/_jsxs("div", {
                      className: field.className,
                      style: field.style,
                      children: [/*#__PURE__*/_jsx("span", {
                        children: flag.label
                      }), /*#__PURE__*/_jsx(Select, {
                        fullWidth: true,
                        options: [{
                          value: "",
                          label: "Unspecified"
                        }, {
                          value: "yes",
                          label: "Yes"
                        }, {
                          value: "no",
                          label: "No"
                        }],
                        "aria-label": `${flag.label}, ${context}`,
                        name: name ? `${name}.${reference.id}.${variant.id}.${flag.key}` : undefined,
                        form: form,
                        value: cell?.[flag.key] === true ? "yes" : cell?.[flag.key] === false ? "no" : "",
                        disabled: disabled,
                        readOnly: readOnly,
                        className: select.className,
                        style: select.style,
                        onValueChange: nextValue => {
                          const next = {
                            referenceId: reference.id,
                            variantId: variant.id,
                            populated: null,
                            includeInBom: null,
                            includeInPlacement: null,
                            ...cell,
                            [flag.key]: nextValue === "" ? null : nextValue === "yes"
                          };
                          setValue(cell ? current.map(record => record === cell ? next : record) : [...current, next]);
                        }
                      })]
                    }, flag.key))
                  })]
                })
              }, variant.id);
            })]
          }, reference.id))
        })]
      })
    }), /*#__PURE__*/_jsxs("p", {
      className: note.className,
      style: note.style,
      children: [readOnly ? "Read only. " : "", "Population, bill of materials, and placement choices are independent."]
    }), unknown.length > 0 && /*#__PURE__*/_jsxs("div", {
      className: note.className,
      style: note.style,
      children: ["Records with unavailable references or variants:", /*#__PURE__*/_jsx("ul", {
        children: unknown.map((cell, index) => /*#__PURE__*/_jsxs("li", {
          children: [cell.referenceId, " in ", cell.variantId]
        }, index))
      })]
    })]
  });
});
//# sourceMappingURL=assembly-variant-matrix.js.map
