"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useInputValue } from "../use-input-value.js";
import { useMergedRefs } from "../merge-refs.js";
import { Input } from "./input.js";
import { Button } from "./button.js";
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
    ks0D6T: "x1qp14f0",
    $$css: true
  },
  list: {
    kH6xsr: "x3ct3a4",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    k1xSpc: "xrvj5dj",
    $$css: true
  },
  joint: {
    k1xSpc: "xrvj5dj",
    kumcoG: "x1m1idih x1nk3w99",
    kOIVth: "x19gx3kl",
    k8WAf4: "xgepmj6",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  title: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xkpwil5",
    k63SB2: "xk50ysn",
    $$css: true
  },
  reading: {
    kogj98: "x1xtkyhf",
    kGuDYH: "x1603h9y",
    kcqcaj: "xss6m8b",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  field: {
    k1xSpc: "xrvj5dj",
    kfiyM8: "x10ukxgv",
    kOIVth: "xpj7pl4",
    k7Eaqz: "xeuugli",
    kGuDYH: "xboafo0",
    $$css: true
  },
  input: {
    k7Eaqz: "xtp0tkc",
    kzqmXN: "xh8yej3",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  button: {
    kFhvOy: "x1lqcxt8",
    $$css: true
  }
};
const finite = value => value != null && Number.isFinite(value);
const bounded = joint => finite(joint.minimum) && finite(joint.maximum) && joint.minimum <= joint.maximum;
const errorFor = (joint, value) => !bounded(joint) ? "Joint limits unavailable" : value == null ? "Enter a target" : !finite(value) ? "Target unavailable" : value < joint.minimum || value > joint.maximum ? `Target must be between ${joint.minimum} and ${joint.maximum} ${joint.unit}` : "";

/** Draft joint targets remain separate from host-reported positions and request confirmation. */
export const JointPanel = /*#__PURE__*/React.forwardRef(function JointPanel({
  label,
  joints,
  value,
  defaultValue = {},
  onValueChange,
  onRequestTargets,
  pending = false,
  confirmedLabel,
  timeLabel,
  description,
  readOnly = false,
  disabled,
  name,
  form,
  className,
  style,
  children,
  ...props
}, ref) {
  const [, refresh] = React.useReducer(n => n + 1, 0);
  const [current, setValue, fieldRef] = useInputValue(value, defaultValue, onValueChange, refresh);
  const merged = useMergedRefs(ref, fieldRef);
  const id = React.useId();
  const valid = joints.length <= 64 && joints.every(joint => joint.id.trim() && joint.label.trim() && joint.unit.trim()) && new Set(joints.map(joint => joint.id)).size === joints.length;
  const unlisted = Object.keys(current).filter(key => !joints.some(joint => joint.id === key));
  const ready = valid && joints.length > 0 && unlisted.length === 0 && joints.every(joint => !errorFor(joint, current[joint.id]));
  const locked = disabled || pending;
  const root = rs(["rs-joint-panel", className], styles.root);
  const legend = rs(["rs-joint-panel-legend"], styles.legend);
  const copy = rs(["rs-joint-panel-copy"], styles.copy);
  const list = rs(["rs-joint-panel-list"], styles.list);
  const jointStyle = rs(["rs-joint-panel-joint"], styles.joint);
  const title = rs(["rs-joint-panel-title"], styles.title);
  const reading = rs(["rs-joint-panel-reading"], styles.reading);
  const field = rs(["rs-joint-panel-field"], styles.field);
  const input = rs(["rs-joint-panel-input"], styles.input);
  const button = rs(["rs-joint-panel-button"], styles.button);
  return /*#__PURE__*/_jsxs("fieldset", {
    ...props,
    ref: merged,
    disabled: locked,
    name: name,
    form: form,
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
      children: ["Reported at: ", timeLabel ?? "Time not supplied"]
    }), !valid ? /*#__PURE__*/_jsx("p", {
      ...copy,
      children: "Joint records unavailable: supply unique identifiers, labels, units, and at most 64 joints."
    }) : !joints.length ? /*#__PURE__*/_jsx("p", {
      ...copy,
      children: "No joint records supplied"
    }) : /*#__PURE__*/_jsx("ul", {
      ...list,
      children: joints.map((joint, index) => {
        const target = current[joint.id];
        const error = errorFor(joint, target);
        return /*#__PURE__*/_jsxs("li", {
          ...jointStyle,
          children: [/*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("p", {
              ...title,
              children: joint.label
            }), /*#__PURE__*/_jsxs("p", {
              ...reading,
              children: ["Reported: ", finite(joint.reported) ? `${joint.reported} ${joint.unit}` : joint.reported == null ? "Not supplied" : "Unavailable"]
            }), /*#__PURE__*/_jsx("p", {
              ...copy,
              children: bounded(joint) ? `Limits: ${joint.minimum} to ${joint.maximum} ${joint.unit}` : "Joint limits unavailable"
            })]
          }), /*#__PURE__*/_jsxs("label", {
            ...field,
            children: ["Draft target (", joint.unit, ")", /*#__PURE__*/_jsx(Input, {
              ...input,
              plain: true,
              type: "number",
              step: "any",
              required: true,
              readOnly: readOnly,
              disabled: locked,
              name: name ? `${name}.${joint.id}` : undefined,
              form: form,
              value: finite(target) ? target : "",
              min: bounded(joint) ? joint.minimum : undefined,
              max: bounded(joint) ? joint.maximum : undefined,
              "aria-label": `${joint.label} draft target (${joint.unit})`,
              "aria-invalid": !!error || undefined,
              "aria-describedby": `${id}-${index}-target`,
              ref: node => node?.setCustomValidity(error),
              onChange: event => {
                if (!readOnly && !locked) setValue({
                  ...current,
                  [joint.id]: Number.isFinite(event.currentTarget.valueAsNumber) ? event.currentTarget.valueAsNumber : null
                });
              }
            }), /*#__PURE__*/_jsx("span", {
              ...copy,
              id: `${id}-${index}-target`,
              children: error || "Draft only"
            })]
          })]
        }, joint.id);
      })
    }), unlisted.length > 0 && /*#__PURE__*/_jsxs("p", {
      ...copy,
      children: ["Draft contains unlisted joints: ", unlisted.join(", ")]
    }), onRequestTargets && /*#__PURE__*/_jsx(Button, {
      ...button,
      type: "button",
      disabled: locked || readOnly || !ready,
      onClick: () => {
        if (ready && !locked && !readOnly) onRequestTargets(current);
      },
      children: "Request targets"
    }), confirmedLabel != null && /*#__PURE__*/_jsxs("p", {
      ...copy,
      children: ["Host confirmation: ", confirmedLabel]
    }), /*#__PURE__*/_jsx("p", {
      ...copy,
      role: "status",
      children: pending ? "Target request pending; reported positions unchanged" : readOnly ? "Read only" : "Editing a target does not move a joint. The host handles motion and reports its result."
    }), children]
  });
});
//# sourceMappingURL=joint-panel.js.map
