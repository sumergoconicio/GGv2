"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
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
  list: {
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
    kjj79g: "x1qughib",
    kGNEyG: "x1pha0wt",
    kwnvtZ: "x1a02dak",
    kOIVth: "x1orf39u",
    $$css: true
  },
  title: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xkpwil5",
    k63SB2: "xk50ysn",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  copy: {
    kogj98: "xr8kyf",
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    kHjlTd: "xj0a0fe",
    ks0D6T: "x1qp14f0",
    $$css: true
  },
  status: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
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
  button: {
    kAzted: "x1wszdd",
    $$css: true
  }
};

/** A supplied mission order, recorded step states, and explicit host request actions. */
export const RobotMissionQueue = /*#__PURE__*/React.forwardRef(function RobotMissionQueue({
  label,
  steps,
  onOrderChange,
  onAction,
  readOnly = false,
  description,
  disabled,
  name,
  form,
  className,
  style,
  children,
  ...props
}, ref) {
  const id = React.useId();
  const valid = steps.length <= 256 && steps.every(step => step.id.trim() && step.label.trim() && (!step.actions || step.actions.every(action => action.id.trim() && action.label.trim()) && new Set(step.actions.map(action => action.id)).size === step.actions.length)) && new Set(steps.map(step => step.id)).size === steps.length;
  const move = (index, delta) => {
    const ids = steps.map(step => step.id);
    [ids[index], ids[index + delta]] = [ids[index + delta], ids[index]];
    onOrderChange?.(ids);
  };
  const root = rs(["rs-robot-mission-queue", className], styles.root);
  const legend = rs(["rs-robot-mission-queue-legend"], styles.legend);
  const list = rs(["rs-robot-mission-queue-list"], styles.list);
  const stepStyle = rs(["rs-robot-mission-queue-step"], styles.step);
  const head = rs(["rs-robot-mission-queue-head"], styles.head);
  const title = rs(["rs-robot-mission-queue-title"], styles.title);
  const copy = rs(["rs-robot-mission-queue-copy"], styles.copy);
  const status = rs(["rs-robot-mission-queue-status"], styles.status);
  const actions = rs(["rs-robot-mission-queue-actions"], styles.actions);
  const button = rs(["rs-robot-mission-queue-button"], styles.button);
  return /*#__PURE__*/_jsxs("fieldset", {
    ...props,
    ref: ref,
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
    }), description != null && /*#__PURE__*/_jsx("p", {
      ...copy,
      children: description
    }), !valid ? /*#__PURE__*/_jsx("p", {
      ...copy,
      children: "Mission records unavailable: supply unique labelled steps and actions, with at most 256 steps."
    }) : !steps.length ? /*#__PURE__*/_jsx("p", {
      ...copy,
      children: "No mission steps supplied"
    }) : /*#__PURE__*/_jsx("ol", {
      ...list,
      children: steps.map((step, index) => {
        const context = `step ${index + 1}, ${step.label}`;
        const locked = disabled || readOnly || step.pending;
        return /*#__PURE__*/_jsxs("li", {
          ...stepStyle,
          children: [/*#__PURE__*/_jsxs("div", {
            ...head,
            children: [/*#__PURE__*/_jsx("p", {
              ...title,
              children: step.label
            }), /*#__PURE__*/_jsxs("p", {
              ...status,
              id: `${id}-${index}-status`,
              children: ["Recorded: ", step.status.trim() || "Not supplied"]
            })]
          }), step.detail != null && /*#__PURE__*/_jsx("p", {
            ...copy,
            children: step.detail
          }), step.confirmedLabel != null && /*#__PURE__*/_jsxs("p", {
            ...copy,
            children: ["Host confirmation: ", step.confirmedLabel]
          }), step.pending && /*#__PURE__*/_jsx("p", {
            ...copy,
            role: "status",
            children: "Request pending; recorded status unchanged"
          }), !!(onOrderChange || onAction && step.actions?.length) && /*#__PURE__*/_jsxs("div", {
            ...actions,
            children: [onOrderChange && /*#__PURE__*/_jsxs(_Fragment, {
              children: [/*#__PURE__*/_jsx(Button, {
                ...button,
                variant: "ghost",
                type: "button",
                disabled: locked || index === 0 || steps[index - 1]?.pending,
                "aria-label": `Move ${context} up`,
                onClick: () => move(index, -1),
                children: "Move up"
              }), /*#__PURE__*/_jsx(Button, {
                ...button,
                variant: "ghost",
                type: "button",
                disabled: locked || index === steps.length - 1 || steps[index + 1]?.pending,
                "aria-label": `Move ${context} down`,
                onClick: () => move(index, 1),
                children: "Move down"
              })]
            }), onAction && step.actions?.map((action, actionIndex) => /*#__PURE__*/_jsxs(React.Fragment, {
              children: [/*#__PURE__*/_jsx(Button, {
                ...button,
                variant: "ghost",
                type: "button",
                disabled: locked || action.disabled,
                "aria-label": `${action.label}: ${context}`,
                "aria-describedby": [`${id}-${index}-status`, action.description && `${id}-${index}-${actionIndex}-description`].filter(Boolean).join(" "),
                onClick: () => onAction(step.id, action.id),
                children: action.label
              }), action.description && /*#__PURE__*/_jsx("span", {
                ...copy,
                id: `${id}-${index}-${actionIndex}-description`,
                children: action.description
              })]
            }, action.id))]
          }), name && /*#__PURE__*/_jsx("input", {
            type: "hidden",
            name: name,
            form: form,
            value: step.id
          })]
        }, step.id);
      })
    }), /*#__PURE__*/_jsx("p", {
      ...copy,
      children: "Reordering and actions request host changes. Reported mission state remains supplied by the host."
    }), children]
  });
});
//# sourceMappingURL=robot-mission-queue.js.map
