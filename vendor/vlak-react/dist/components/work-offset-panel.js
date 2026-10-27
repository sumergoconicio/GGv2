"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { Select } from "./select.js";
import { Input } from "./input.js";
import { Button } from "./button.js";
import { useInputValue } from "../use-input-value.js";
import { useMergedRefs } from "../merge-refs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    kMzoRj: "xc342km",
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    kMwMTN: "x1gney9c",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  legend: {
    kmVPX3: "x1717udv",
    k1K539: "x1gr9t9r",
    kGuDYH: "x1jchvi3",
    k63SB2: "x1s688f",
    $$css: true
  },
  copy: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  field: {
    k1xSpc: "xrvj5dj",
    kOIVth: "xpj7pl4",
    k7Eaqz: "xeuugli",
    kGuDYH: "xkpwil5",
    $$css: true
  },
  control: {
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  viewport: {
    kXHlph: "xw2csxc",
    k7Eaqz: "xeuugli",
    ks0D6T: "x193iq5w",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  table: {
    kzqmXN: "xh8yej3",
    k7Eaqz: "x14z5t7n",
    kLvRdT: "x1mwwwfo",
    kGuDYH: "xkpwil5",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  caption: {
    k9WMMc: "x1yc453h",
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    kGO01o: "xmnamis",
    $$css: true
  },
  cell: {
    kmVPX3: "x1tj7q2n",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    k9WMMc: "xp4054r",
    k63SB2: "xo1l8bm",
    kXLuUW: "xxymvpz",
    $$css: true
  },
  axis: {
    k9WMMc: "x1yc453h",
    k63SB2: "xk50ysn",
    $$css: true
  },
  offset: {
    k7Eaqz: "x1bnrkr7",
    kzqmXN: "x19h4ct",
    $$css: true
  },
  button: {
    kFhvOy: "x1lqcxt8",
    $$css: true
  }
};
const formatPosition = value => value == null ? "Unknown" : Number.isFinite(value) ? String(value) : "Unavailable";

/** Edit a proposed offset while retaining independently supplied machine and work positions. */
export const WorkOffsetPanel = /*#__PURE__*/React.forwardRef(function WorkOffsetPanel({
  label,
  axes,
  systems,
  activeSystemId,
  value,
  defaultValue = {
    systemId: null,
    offsets: {}
  },
  onValueChange,
  onApply,
  offsetState = "unknown",
  pending = false,
  readOnly = false,
  disabled,
  description,
  name,
  form,
  className,
  style,
  children,
  ...props
}, ref) {
  const [, refresh] = React.useReducer(revision => revision + 1, 0);
  const [current, setValue, fieldRef] = useInputValue(value, defaultValue, onValueChange, refresh);
  const mergedRef = useMergedRefs(ref, fieldRef);
  const id = React.useId();
  const system = systems.find(item => item.id === current.systemId);
  const active = systems.find(item => item.id === activeSystemId);
  const listedAxes = new Set(axes.map(axis => axis.id));
  const hasUnlistedOffset = Object.keys(current.offsets).some(axis => !listedAxes.has(axis));
  const canApply = !hasUnlistedOffset && !!system && !system.disabled && axes.length > 0 && axes.every(axis => current.offsets[axis.id] != null && Number.isFinite(current.offsets[axis.id]));
  const root = rs(["rs-work-offset-panel", className], styles.root);
  const legend = rs(["rs-work-offset-panel-legend"], styles.legend);
  const copy = rs(["rs-work-offset-panel-copy"], styles.copy);
  const field = rs(["rs-work-offset-panel-field"], styles.field);
  const control = rs(["rs-work-offset-panel-control"], styles.control);
  const viewport = rs(["rs-work-offset-panel-viewport"], styles.viewport);
  const table = rs(["rs-work-offset-panel-table"], styles.table);
  const caption = rs(["rs-work-offset-panel-caption"], styles.caption);
  const cell = rs(["rs-work-offset-panel-cell"], styles.cell);
  const axisCell = rs(["rs-work-offset-panel-cell", "rs-work-offset-panel-axis"], styles.cell, styles.axis);
  const offset = rs(["rs-work-offset-panel-cell", "rs-work-offset-panel-offset"], styles.cell, styles.offset);
  const button = rs(["rs-work-offset-panel-button"], styles.button);
  return /*#__PURE__*/_jsxs("fieldset", {
    ...props,
    ref: mergedRef,
    name: name,
    form: form,
    disabled: disabled || pending,
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
      children: description
    }), /*#__PURE__*/_jsxs("p", {
      ...copy,
      children: ["Active system: ", active?.label ?? (activeSystemId == null ? "Unknown" : `${activeSystemId} (not listed)`), " \xB7 Offsets ", offsetState]
    }), /*#__PURE__*/_jsxs("div", {
      ...field,
      children: [/*#__PURE__*/_jsx("span", {
        id: `${id}-system-label`,
        children: "Draft coordinate system"
      }), /*#__PURE__*/_jsx(Select, {
        fullWidth: true,
        "aria-labelledby": `${id}-system-label`,
        name: name ? `${name}.system` : undefined,
        form: form,
        value: system ? current.systemId : "",
        disabled: disabled || pending,
        readOnly: readOnly,
        onValueChange: next => setValue({
          ...current,
          systemId: next || null
        }),
        options: [{
          value: "",
          label: "Choose a system"
        }, ...systems.map(item => ({
          value: item.id,
          label: item.label,
          disabled: item.disabled
        }))]
      })]
    }), current.systemId != null && !system && /*#__PURE__*/_jsxs("p", {
      ...copy,
      children: ["Draft system unavailable: ", current.systemId]
    }), /*#__PURE__*/_jsx("div", {
      ...viewport,
      role: "region",
      "aria-labelledby": `${id}-axes`,
      tabIndex: 0,
      children: /*#__PURE__*/_jsxs("table", {
        ...table,
        children: [/*#__PURE__*/_jsxs("caption", {
          ...caption,
          id: `${id}-axes`,
          children: [label, ", axis positions and draft offsets"]
        }), /*#__PURE__*/_jsx("thead", {
          children: /*#__PURE__*/_jsxs("tr", {
            children: [/*#__PURE__*/_jsx("th", {
              ...axisCell,
              scope: "col",
              children: "Axis"
            }), /*#__PURE__*/_jsx("th", {
              ...cell,
              scope: "col",
              children: "Machine"
            }), /*#__PURE__*/_jsx("th", {
              ...cell,
              scope: "col",
              children: "Work"
            }), /*#__PURE__*/_jsx("th", {
              ...offset,
              scope: "col",
              children: "Draft offset"
            })]
          })
        }), /*#__PURE__*/_jsx("tbody", {
          children: axes.map(axis => {
            const amount = current.offsets[axis.id];
            const valid = amount != null && Number.isFinite(amount);
            return /*#__PURE__*/_jsxs("tr", {
              children: [/*#__PURE__*/_jsxs("th", {
                ...axisCell,
                scope: "row",
                children: [axis.label, /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("span", {
                  ...copy,
                  children: axis.unit
                })]
              }), /*#__PURE__*/_jsx("td", {
                ...cell,
                children: formatPosition(axis.machine)
              }), /*#__PURE__*/_jsx("td", {
                ...cell,
                children: formatPosition(axis.work)
              }), /*#__PURE__*/_jsxs("td", {
                ...offset,
                children: [/*#__PURE__*/_jsx(Input, {
                  plain: true,
                  ...control,
                  type: "number",
                  step: "any",
                  "aria-label": `${axis.label} offset (${axis.unit})`,
                  "aria-invalid": amount != null && !valid || undefined,
                  name: name ? `${name}.${axis.id}` : undefined,
                  form: form,
                  readOnly: readOnly,
                  disabled: disabled || pending,
                  value: valid ? amount : "",
                  onChange: event => {
                    if (!readOnly) setValue({
                      ...current,
                      offsets: {
                        ...current.offsets,
                        [axis.id]: Number.isFinite(event.currentTarget.valueAsNumber) ? event.currentTarget.valueAsNumber : null
                      }
                    });
                  }
                }), amount != null && !valid && /*#__PURE__*/_jsx("p", {
                  ...copy,
                  children: "Offset unavailable"
                })]
              })]
            }, axis.id);
          })
        })]
      })
    }), !axes.length && /*#__PURE__*/_jsx("p", {
      ...copy,
      children: "No axis positions supplied"
    }), hasUnlistedOffset && /*#__PURE__*/_jsx("p", {
      ...copy,
      children: "Draft contains offsets for unlisted axes"
    }), onApply && /*#__PURE__*/_jsx(Button, {
      ...button,
      type: "button",
      disabled: disabled || pending || readOnly || !canApply,
      onClick: () => onApply(current),
      children: "Apply offsets"
    }), /*#__PURE__*/_jsx("p", {
      ...copy,
      role: "status",
      children: pending ? "Offset update pending" : readOnly ? "Read only" : "Draft edits leave the reported positions unchanged until the host confirms an update."
    }), children]
  });
});
//# sourceMappingURL=work-offset-panel.js.map
