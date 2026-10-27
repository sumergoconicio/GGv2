"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8fetqu",
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    kLWn49: "xfrs9s4",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  head: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kjj79g: "x1qughib",
    kGNEyG: "x1pha0wt",
    kOIVth: "x1tmakyn",
    $$css: true
  },
  title: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x1jchvi3",
    k63SB2: "x1s688f",
    $$css: true
  },
  context: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  conditions: {
    k1xSpc: "xrvj5dj",
    kumcoG: "x1mep8l x1nk3w99",
    kOIVth: "x8fetqu",
    kogj98: "x1ghz6dp",
    k8WAf4: "xgepmj6",
    kLoX6v: "x1pck0ws",
    kDUl1X: "xykt701",
    k5QoK5: "xg5kxjx",
    $$css: true
  },
  value: {
    kogj98: "x1ghz6dp",
    keoZOQ: "x1tbvfm1",
    kGuDYH: "xkpwil5",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  list: {
    kH6xsr: "x3yw8vx",
    kZCmMZ: "x1is3n31",
    kogj98: "x1ghz6dp",
    $$css: true
  },
  step: {
    k8WAf4: "xo0yzjp",
    kZCmMZ: "x1znate",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    kGuDYH: "xkpwil5",
    $$css: true
  },
  details: {
    kqGvvJ: "xahocic",
    kGuDYH: "xkpwil5",
    ks0D6T: "x1qp14f0",
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    keoZOQ: "x1mjqqkp",
    $$css: true
  },
  action: {
    kmuXW: "x2lah0s",
    $$css: true
  }
};

/** Supplied run metadata and protocol steps, with application-owned transitions. */
export const ExperimentRun = /*#__PURE__*/React.forwardRef(function ExperimentRun({
  label,
  runId,
  protocol,
  status,
  conditions = [],
  steps,
  onAction,
  className,
  style,
  children,
  ...props
}, ref) {
  const id = React.useId();
  const root = rs(["rs-experiment-run", className], styles.root);
  const head = rs(["rs-experiment-run-head"], styles.head);
  const title = rs(["rs-experiment-run-title"], styles.title);
  const context = rs(["rs-experiment-run-context"], styles.context);
  const conditionsStyle = rs(["rs-experiment-run-conditions"], styles.conditions);
  const valueStyle = rs(["rs-experiment-run-value"], styles.value);
  const list = rs(["rs-experiment-run-list"], styles.list);
  const stepStyle = rs(["rs-experiment-run-step"], styles.step);
  const details = rs(["rs-experiment-run-details"], styles.details);
  const actions = rs(["rs-experiment-run-actions"], styles.actions);
  const actionStyle = rs(["rs-experiment-run-action"], styles.action);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    role: "group",
    "aria-label": label,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsxs("div", {
      ...head,
      children: [/*#__PURE__*/_jsx("p", {
        ...title,
        children: label
      }), /*#__PURE__*/_jsx("span", {
        ...context,
        children: status.trim() || "Run status not supplied"
      })]
    }), runId != null && /*#__PURE__*/_jsxs("p", {
      ...context,
      children: ["Run ", runId]
    }), protocol != null && /*#__PURE__*/_jsx("div", {
      ...context,
      children: protocol
    }), conditions.length > 0 && /*#__PURE__*/_jsx("dl", {
      ...conditionsStyle,
      children: conditions.map(condition => /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("dt", {
          ...context,
          children: condition.label
        }), /*#__PURE__*/_jsx("dd", {
          ...valueStyle,
          children: condition.value == null || condition.value === "" ? "Not supplied" : condition.value
        })]
      }, condition.id))
    }), steps.length === 0 ? /*#__PURE__*/_jsx("p", {
      ...context,
      children: "No steps supplied"
    }) : /*#__PURE__*/_jsx("ol", {
      ...list,
      children: steps.map((step, index) => /*#__PURE__*/_jsxs("li", {
        ...stepStyle,
        "aria-busy": step.pending || undefined,
        children: [/*#__PURE__*/_jsxs("div", {
          ...head,
          children: [/*#__PURE__*/_jsx("span", {
            children: step.label
          }), /*#__PURE__*/_jsx("span", {
            ...context,
            id: `${id}-${index}-status`,
            children: step.status.trim() || "Step status not supplied"
          })]
        }), step.details != null && /*#__PURE__*/_jsx("div", {
          ...details,
          children: step.details
        }), /*#__PURE__*/_jsx("span", {
          ...context,
          role: "status",
          children: step.pending ? "Update pending" : null
        }), onAction && !!step.actions?.length && /*#__PURE__*/_jsx("div", {
          ...actions,
          children: step.actions.map(action => /*#__PURE__*/_jsx(Button, {
            variant: "ghost",
            size: "sm",
            ...actionStyle,
            type: "button",
            disabled: step.pending || action.disabled,
            "aria-label": `${action.label}: step ${index + 1}, ${step.label}`,
            "aria-describedby": `${id}-${index}-status`,
            onClick: () => onAction(step.id, action.id),
            children: action.label
          }, action.id))
        })]
      }, step.id))
    }), children]
  });
});
//# sourceMappingURL=experiment-run.js.map
