"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useInputValue } from "../use-input-value.js";
import { useMergedRefs } from "../merge-refs.js";
import { Button } from "./button.js";
import { Input } from "./input.js";
import { Select } from "./select.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
  list: {
    kGuDYH: "xkpwil5",
    kH6xsr: "x3yw8vx",
    kZCmMZ: "x1is3n31",
    kogj98: "x1ghz6dp",
    $$css: true
  },
  step: {
    k8WAf4: "xgepmj6",
    kZCmMZ: "x1znate",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  head: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kjj79g: "x1qughib",
    kGNEyG: "x1pha0wt",
    kOIVth: "x13z6uf9",
    k1K539: "x1gr9t9r",
    $$css: true
  },
  title: {
    kGuDYH: "xkpwil5",
    k63SB2: "xk50ysn",
    $$css: true
  },
  fields: {
    k1xSpc: "xrvj5dj",
    kumcoG: "x1sipb5g xar340r",
    kOIVth: "x8233eu",
    kogj98: "x1ghz6dp",
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
    k7Eaqz: "xeuugli",
    kAzted: "x1wszdd",
    $$css: true
  },
  value: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xkpwil5",
    kcqcaj: "xss6m8b",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  copy: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    ks0D6T: "x1qp14f0",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    keoZOQ: "xhj8ucd",
    $$css: true
  },
  action: {
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kzqmXN: "x14atkfc",
    $$css: true
  }
};
/** A controlled capture plan editor and recorded-state display, without an acquisition engine. */
export const AcquisitionSequencer = /*#__PURE__*/React.forwardRef(function AcquisitionSequencer({
  label,
  steps,
  channels,
  onStepsChange,
  onAction,
  description,
  readOnly = false,
  name,
  form,
  disabled,
  className,
  style,
  children,
  ...props
}, ref) {
  const [, refresh] = React.useReducer(n => n + 1, 0);
  const [,, fieldRef] = useInputValue(steps, steps, onStepsChange, refresh);
  const merged = useMergedRefs(ref, fieldRef);
  const id = React.useId();
  const valid = steps.length <= 128 && channels.length <= 128 && steps.every(step => step.id.trim()) && channels.every(channel => channel.id.trim()) && new Set(steps.map(step => step.id)).size === steps.length && new Set(channels.map(channel => channel.id)).size === channels.length;
  const update = (stepId, patch) => onStepsChange?.(steps.map(step => step.id === stepId ? {
    ...step,
    ...patch
  } : step));
  const move = (index, delta) => {
    const next = [...steps];
    [next[index], next[index + delta]] = [next[index + delta], next[index]];
    onStepsChange?.(next);
  };
  const root = rs(["rs-acquisition-sequencer", className], styles.root);
  const legend = rs(["rs-acquisition-sequencer-legend"], styles.legend);
  const list = rs(["rs-acquisition-sequencer-list"], styles.list);
  const stepStyle = rs(["rs-acquisition-sequencer-step"], styles.step);
  const head = rs(["rs-acquisition-sequencer-head"], styles.head);
  const title = rs(["rs-acquisition-sequencer-title"], styles.title);
  const fields = rs(["rs-acquisition-sequencer-fields"], styles.fields);
  const field = rs(["rs-acquisition-sequencer-label"], styles.field);
  const control = rs(["rs-acquisition-sequencer-control"], styles.control);
  const valueStyle = rs(["rs-acquisition-sequencer-value"], styles.value);
  const copy = rs(["rs-acquisition-sequencer-copy"], styles.copy);
  const actions = rs(["rs-acquisition-sequencer-actions"], styles.actions);
  const action = rs(["rs-acquisition-sequencer-action"], styles.action);
  return /*#__PURE__*/_jsxs("fieldset", {
    ...props,
    ref: merged,
    disabled: disabled,
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
    }), description != null && /*#__PURE__*/_jsx("div", {
      ...copy,
      children: description
    }), !valid ? /*#__PURE__*/_jsx("p", {
      ...copy,
      children: "Sequence unavailable: supply unique records and at most 128 steps and channels"
    }) : !steps.length ? /*#__PURE__*/_jsx("p", {
      ...copy,
      children: "No capture steps supplied"
    }) : /*#__PURE__*/_jsx("ol", {
      ...list,
      children: steps.map((step, index) => {
        const editing = onStepsChange != null && !readOnly;
        const locked = disabled || step.pending;
        const statusId = `${id}-${index}-status`;
        const labels = {
          exposure: "Exposure",
          time: "Time offset",
          depth: "Depth"
        };
        return /*#__PURE__*/_jsxs("li", {
          ...stepStyle,
          children: [/*#__PURE__*/_jsxs("div", {
            ...head,
            children: [/*#__PURE__*/_jsx("span", {
              ...title,
              children: step.label
            }), /*#__PURE__*/_jsx("span", {
              ...copy,
              id: statusId,
              children: step.status.trim() || "Recorded state unavailable"
            })]
          }), /*#__PURE__*/_jsxs("div", {
            ...fields,
            children: [["exposure", "time", "depth"].map(key => {
              const unit = step[`${key}Unit`];
              const amount = step[key];
              const available = amount != null && Number.isFinite(amount);
              return editing ? /*#__PURE__*/_jsxs("label", {
                ...field,
                children: [labels[key], " (", unit, ")", /*#__PURE__*/_jsx(Input, {
                  ...control,
                  plain: true,
                  type: "number",
                  step: "any",
                  min: key === "depth" ? undefined : 0,
                  disabled: locked,
                  name: name ? `${name}.${step.id}.${key}` : undefined,
                  form: form,
                  value: available ? amount : "",
                  "aria-label": `${labels[key]} (${unit}): step ${index + 1}, ${step.label}`,
                  "aria-describedby": statusId,
                  onChange: event => update(step.id, {
                    [key]: Number.isFinite(event.currentTarget.valueAsNumber) ? event.currentTarget.valueAsNumber : null
                  })
                })]
              }, key) : /*#__PURE__*/_jsxs("div", {
                ...field,
                children: [/*#__PURE__*/_jsx("span", {
                  children: labels[key]
                }), /*#__PURE__*/_jsx("p", {
                  ...valueStyle,
                  children: available ? `${amount} ${unit}` : amount == null ? "Not supplied" : "Unavailable"
                })]
              }, key);
            }), editing ? /*#__PURE__*/_jsxs("div", {
              ...field,
              children: [/*#__PURE__*/_jsx("span", {
                children: "Channel"
              }), /*#__PURE__*/_jsx(Select, {
                fullWidth: true,
                disabled: locked,
                name: name ? `${name}.${step.id}.channel` : undefined,
                form: form,
                value: channels.some(channel => channel.id === step.channel) ? step.channel : "",
                "aria-label": `Channel: step ${index + 1}, ${step.label}`,
                "aria-describedby": statusId,
                options: [{
                  value: "",
                  label: "Choose channel"
                }, ...channels.map(channel => ({
                  value: channel.id,
                  label: channel.label,
                  disabled: channel.disabled
                }))],
                onValueChange: channel => update(step.id, {
                  channel: channel || null
                })
              })]
            }) : /*#__PURE__*/_jsxs("div", {
              ...field,
              children: [/*#__PURE__*/_jsx("span", {
                children: "Channel"
              }), /*#__PURE__*/_jsx("p", {
                ...valueStyle,
                children: channels.find(channel => channel.id === step.channel)?.label ?? step.channel ?? "Not supplied"
              })]
            })]
          }), step.confirmedLabel != null && /*#__PURE__*/_jsx("p", {
            ...copy,
            children: step.confirmedLabel
          }), /*#__PURE__*/_jsx("span", {
            ...copy,
            role: "status",
            children: step.pending ? "Request pending; recorded state unchanged" : null
          }), /*#__PURE__*/_jsxs("div", {
            ...actions,
            children: [editing && /*#__PURE__*/_jsxs(_Fragment, {
              children: [/*#__PURE__*/_jsx(Button, {
                ...action,
                variant: "ghost",
                disabled: locked || index === 0 || steps[index - 1]?.pending,
                "aria-label": `Move step ${index + 1}, ${step.label}, up`,
                onClick: () => move(index, -1),
                children: "Move up"
              }), /*#__PURE__*/_jsx(Button, {
                ...action,
                variant: "ghost",
                disabled: locked || index === steps.length - 1 || steps[index + 1]?.pending,
                "aria-label": `Move step ${index + 1}, ${step.label}, down`,
                onClick: () => move(index, 1),
                children: "Move down"
              })]
            }), onAction && !readOnly && step.actions?.map(choice => /*#__PURE__*/_jsx(Button, {
              ...action,
              variant: "ghost",
              disabled: locked || choice.disabled,
              "aria-label": `${choice.label}: step ${index + 1}, ${step.label}`,
              "aria-describedby": statusId,
              onClick: () => onAction(step.id, choice.id),
              children: choice.label
            }, choice.id))]
          })]
        }, step.id);
      })
    }), children]
  });
});
//# sourceMappingURL=acquisition-sequencer.js.map
