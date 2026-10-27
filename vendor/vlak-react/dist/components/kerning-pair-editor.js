"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useInputValue } from "../use-input-value.js";
import { useMergedRefs } from "../merge-refs.js";
import { Select } from "./select.js";
import { Input } from "./input.js";
import { Button } from "./button.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
    kmVPX3: "x1717udv",
    k1K539: "x1gr9t9r",
    kGuDYH: "x1jq7itm",
    k63SB2: "x1s688f",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  toolbar: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "xpqajaz",
    kOIVth: "x13z6uf9",
    $$css: true
  },
  field: {
    k1xSpc: "xrvj5dj",
    kzQI83: "x1iyjqo2",
    k7Eaqz: "xzhy1st",
    kOIVth: "xpj7pl4",
    kGuDYH: "x4ro2ui",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  input: {
    k7Eaqz: "xtp0tkc",
    kzqmXN: "xh8yej3",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  button: {
    kAzted: "x1wszdd",
    $$css: true
  },
  previews: {
    k1xSpc: "xrvj5dj",
    kumcoG: "x12x9af",
    kOIVth: "x8233eu",
    $$css: true
  },
  preview: {
    k1xSpc: "xrvj5dj",
    kOIVth: "xpj7pl4",
    kfiyM8: "x10ukxgv",
    k7Eaqz: "xeuugli",
    kogj98: "x1ghz6dp",
    kmVPX3: "x8hbxov",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    $$css: true
  },
  glyphs: {
    k1xSpc: "x78zum5",
    kGNEyG: "x1pha0wt",
    k7Eaqz: "xeuugli",
    kVQacm: "xysyzu8",
    khDVqt: "xuxw1ft",
    kGuDYH: "x5f6h7s",
    kLWn49: "xfrs9s4",
    krGR0G: "xlri8gb",
    kXP6Bh: "xdb2kus",
    kMwMTN: "x1gney9c x1sy4l04",
    $$css: true
  },
  glyph: {
    kmuXW: "x2lah0s",
    $$css: true
  },
  note: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x4ro2ui",
    kLWn49: "xfrs9s4",
    kMwMTN: "x1ixqp2s",
    $$css: true
  }
};

/** Explicit pair offsets with browser font previews, without font-file editing or shaping. */
export const KerningPairEditor = /*#__PURE__*/React.forwardRef(function KerningPairEditor({
  label,
  pairs,
  fontFamily,
  unitsPerEm,
  baselineOffsets = {},
  value,
  defaultValue = {},
  onValueChange,
  activePairId,
  defaultActivePairId,
  onActivePairChange,
  min = -unitsPerEm,
  max = unitsPerEm,
  readOnly,
  disabled,
  name,
  form,
  className,
  style,
  ...props
}, ref) {
  const id = React.useId();
  const [undo, setUndo] = React.useState(null);
  const [, refresh] = React.useReducer(n => n + 1, 0);
  const reset = () => {
    setUndo(null);
    refresh();
  };
  const [current, setValue, fieldRef] = useInputValue(value, defaultValue, onValueChange, reset);
  const [active, setActive, selectionRef] = useInputValue(activePairId, defaultActivePairId ?? pairs[0]?.id ?? null, onActivePairChange, refresh);
  const mergedRef = useMergedRefs(ref, fieldRef, selectionRef);
  const index = pairs.findIndex(pair => pair.id === active);
  const pair = pairs[index];
  const offset = pair ? current[pair.id] : undefined;
  const baseline = pair ? baselineOffsets[pair.id] : undefined;
  const validUnits = Number.isFinite(unitsPerEm) && unitsPerEm > 0 && fontFamily.trim() !== "";
  const validBounds = Number.isFinite(min) && Number.isFinite(max) && min <= max;
  const validOffset = offset != null && Number.isFinite(offset);
  const validBaseline = baseline != null && Number.isFinite(baseline);
  const offsetInBounds = validOffset && offset >= min && offset <= max;
  const edit = next => {
    if (!pair || readOnly || disabled) return;
    setUndo({
      id: pair.id,
      value: current[pair.id],
      after: next
    });
    setValue({
      ...current,
      [pair.id]: next
    });
  };
  const restore = () => {
    if (!undo) return;
    const next = {
      ...current
    };
    if (undo.value === undefined) delete next[undo.id];else next[undo.id] = undo.value;
    setValue(next);
    setUndo(null);
  };
  const root = rs(["rs-kerning-pair-editor", className], styles.root);
  const legend = rs(["rs-kerning-pair-editor-legend"], styles.legend);
  const toolbar = rs(["rs-kerning-pair-editor-toolbar"], styles.toolbar);
  const field = rs(["rs-kerning-pair-editor-field"], styles.field);
  const input = rs(["rs-kerning-pair-editor-input"], styles.input);
  const button = rs(["rs-kerning-pair-editor-button"], styles.button);
  const previews = rs(["rs-kerning-pair-editor-previews"], styles.previews);
  const preview = rs(["rs-kerning-pair-editor-preview"], styles.preview);
  const glyphs = rs(["rs-kerning-pair-editor-glyphs"], styles.glyphs);
  const glyph = rs(["rs-kerning-pair-editor-glyph"], styles.glyph);
  const note = rs(["rs-kerning-pair-editor-note"], styles.note);
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
    }), pairs.length === 0 ? /*#__PURE__*/_jsx("p", {
      className: note.className,
      style: note.style,
      children: "No glyph pairs supplied"
    }) : /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsxs("div", {
        className: toolbar.className,
        style: toolbar.style,
        children: [/*#__PURE__*/_jsxs("div", {
          className: field.className,
          style: field.style,
          children: [/*#__PURE__*/_jsx("span", {
            id: `${id}-pair`,
            children: "Pair"
          }), /*#__PURE__*/_jsx(Select, {
            fullWidth: true,
            "aria-labelledby": `${id}-pair`,
            value: pair?.id ?? "",
            disabled: disabled,
            options: [{
              value: "",
              label: "Choose a pair"
            }, ...pairs.map(item => ({
              value: item.id,
              label: item.label ?? `${item.left} / ${item.right}`
            }))],
            onValueChange: next => setActive(next || null)
          })]
        }), /*#__PURE__*/_jsx(Button, {
          variant: "ghost",
          type: "button",
          disabled: disabled || index <= 0,
          className: button.className,
          style: button.style,
          onClick: () => setActive(pairs[index - 1].id),
          children: "Previous pair"
        }), /*#__PURE__*/_jsx(Button, {
          variant: "ghost",
          type: "button",
          disabled: disabled || index >= pairs.length - 1,
          className: button.className,
          style: button.style,
          onClick: () => setActive(pairs[index + 1].id),
          children: "Next pair"
        })]
      }), !validUnits && /*#__PURE__*/_jsx("p", {
        className: note.className,
        style: note.style,
        children: "Supply a font family and positive units per em to preview spacing."
      }), !validBounds && /*#__PURE__*/_jsx("p", {
        className: note.className,
        style: note.style,
        children: "Offset bounds unavailable"
      }), pair ? /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsxs("p", {
          className: note.className,
          style: note.style,
          children: [fontFamily || "Font unavailable", validUnits ? ` · ${unitsPerEm} units per em` : ""]
        }), /*#__PURE__*/_jsx("div", {
          className: previews.className,
          style: previews.style,
          children: [{
            title: "Baseline",
            value: baseline,
            valid: validBaseline
          }, {
            title: "Edited",
            value: offset,
            valid: validOffset
          }].map(item => /*#__PURE__*/_jsxs("figure", {
            className: preview.className,
            style: preview.style,
            children: [/*#__PURE__*/_jsxs("figcaption", {
              className: note.className,
              style: note.style,
              children: [item.title, ": ", item.valid ? `${item.value} units` : item.value == null ? "not supplied" : "unavailable"]
            }), validUnits && item.valid && Number.isFinite(item.value / unitsPerEm) && /*#__PURE__*/_jsxs("div", {
              role: "img",
              "aria-label": `${pair.left} followed by ${pair.right}, ${item.title.toLowerCase()} offset ${item.value} units`,
              className: glyphs.className,
              style: {
                ...glyphs.style,
                fontFamily
              },
              children: [/*#__PURE__*/_jsx("span", {
                "aria-hidden": "true",
                className: glyph.className,
                style: glyph.style,
                children: pair.left
              }), /*#__PURE__*/_jsx("span", {
                "aria-hidden": "true",
                className: glyph.className,
                style: {
                  ...glyph.style,
                  marginInlineStart: `${item.value / unitsPerEm}em`
                },
                children: pair.right
              })]
            })]
          }, item.title))
        }), /*#__PURE__*/_jsxs("label", {
          className: field.className,
          style: field.style,
          children: ["Offset (font units)", /*#__PURE__*/_jsx(Input, {
            plain: true,
            type: "number",
            form: form,
            name: name ? `${name}.${pair.id}` : undefined,
            value: validOffset ? offset : "",
            min: validBounds ? min : undefined,
            max: validBounds ? max : undefined,
            step: "any",
            readOnly: readOnly,
            disabled: disabled || !validBounds || !validUnits,
            "aria-invalid": validOffset && !offsetInBounds || undefined,
            "aria-describedby": `${id}-keys`,
            className: input.className,
            style: input.style,
            onChange: event => edit(event.currentTarget.value === "" ? null : Number(event.currentTarget.value)),
            onKeyDown: event => {
              if (readOnly || !validBounds || !validUnits || !["ArrowLeft", "ArrowRight"].includes(event.key)) return;
              event.preventDefault();
              const delta = (event.key === "ArrowLeft" ? -1 : 1) * (event.shiftKey ? 10 : 1);
              edit(Math.max(min, Math.min(max, (validOffset ? offset : 0) + delta)));
            }
          })]
        }), /*#__PURE__*/_jsxs("p", {
          id: `${id}-keys`,
          className: note.className,
          style: note.style,
          children: [validOffset && !offsetInBounds ? `Offset is outside the supplied ${min} to ${max} bounds. ` : "", "Left and right arrows adjust one unit. Hold Shift for ten units."]
        }), /*#__PURE__*/_jsxs("div", {
          className: toolbar.className,
          style: toolbar.style,
          children: [/*#__PURE__*/_jsx(Button, {
            variant: "ghost",
            type: "button",
            disabled: disabled || readOnly || !validBaseline || !validBounds || baseline < min || baseline > max || baseline === offset,
            className: button.className,
            style: button.style,
            onClick: () => edit(baseline),
            children: "Reset to baseline"
          }), /*#__PURE__*/_jsx(Button, {
            variant: "ghost",
            type: "button",
            disabled: disabled || readOnly || undo == null || !pairs.some(item => item.id === undo.id) || current[undo.id] !== undo.after,
            className: button.className,
            style: button.style,
            onClick: restore,
            children: "Undo last edit"
          })]
        })]
      }) : /*#__PURE__*/_jsx("p", {
        className: note.className,
        style: note.style,
        children: "Choose a pair to edit its offset."
      })]
    }), name && pairs.filter(item => item.id !== pair?.id).map(item => current[item.id] != null && Number.isFinite(current[item.id]) ? /*#__PURE__*/_jsx("input", {
      type: "hidden",
      form: form,
      name: `${name}.${item.id}`,
      value: current[item.id]
    }, item.id) : null)]
  });
});
//# sourceMappingURL=kerning-pair-editor.js.map
