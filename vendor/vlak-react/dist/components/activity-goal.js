import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  label: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x1jq7itm",
    k63SB2: "x1s688f",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  description: {
    kogj98: "x1ghz6dp",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x1jq7itm",
    kLWn49: "xfrs9s4",
    ks0D6T: "x1qp14f0",
    $$css: true
  },
  value: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x1q74xe4",
    k63SB2: "xk50ysn",
    kLWn49: "x1u7k74",
    kcqcaj: "xss6m8b",
    kb6lSQ: "x1w69ole",
    $$css: true
  },
  target: {
    kGuDYH: "x1jq7itm",
    k63SB2: "xo1l8bm",
    kMwMTN: "x1ixqp2s",
    kb6lSQ: "x1i21sxh",
    $$css: true
  },
  progress: {
    k1xSpc: "x1lliihq",
    kzqmXN: "xh8yej3",
    kZKoxP: "xvle69y",
    keaTxX: "x12r28v4 xc0lr7m",
    kaIpWk: "x2u8bby",
    $$css: true
  }
};

/** Progress toward a supplied activity goal, without recommended targets or scores. */
export const ActivityGoal = /*#__PURE__*/React.forwardRef(function ActivityGoal({
  label,
  description,
  current,
  target,
  unit,
  className,
  style,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
  ...props
}, ref) {
  const id = React.useId();
  const validCurrent = current != null && Number.isFinite(current) && current >= 0;
  const validTarget = target != null && Number.isFinite(target) && target > 0;
  const valueText = validCurrent && validTarget ? `${current} of ${target} ${unit}` : undefined;
  const root = rs(["rs-activity-goal", className], styles.root);
  const heading = rs(["rs-activity-goal-label"], styles.label);
  const copy = rs(["rs-activity-goal-description"], styles.description);
  const amount = rs(["rs-activity-goal-value"], styles.value);
  const goal = rs(["rs-activity-goal-target"], styles.target);
  const progress = rs(["rs-activity-goal-progress"], styles.progress);
  return /*#__PURE__*/_jsxs("div", {
    ...props,
    ref: ref,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("p", {
      id: `${id}-label`,
      className: heading.className,
      style: heading.style,
      children: label
    }), description != null && /*#__PURE__*/_jsx("p", {
      id: `${id}-description`,
      className: copy.className,
      style: copy.style,
      children: description
    }), validCurrent ? /*#__PURE__*/_jsxs("p", {
      className: amount.className,
      style: amount.style,
      children: [current, " ", /*#__PURE__*/_jsx("span", {
        className: goal.className,
        style: goal.style,
        children: validTarget ? `of ${target} ${unit}` : unit
      })]
    }) : /*#__PURE__*/_jsx("p", {
      className: copy.className,
      style: copy.style,
      children: current == null ? "No activity recorded" : "Activity unavailable"
    }), !validTarget && /*#__PURE__*/_jsx("p", {
      className: copy.className,
      style: copy.style,
      children: target == null ? "No goal set" : "Goal unavailable"
    }), validCurrent && validTarget && /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsx("progress", {
        value: Math.min(current, target),
        max: target,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy ?? (ariaLabel == null ? `${id}-label` : undefined),
        "aria-describedby": [ariaDescribedBy, description != null && `${id}-description`].filter(Boolean).join(" ") || undefined,
        "aria-valuetext": valueText,
        className: progress.className,
        style: progress.style,
        children: valueText
      }), current >= target && /*#__PURE__*/_jsx("p", {
        className: copy.className,
        style: copy.style,
        children: current > target ? "Goal exceeded" : "Goal reached"
      })]
    })]
  });
});
//# sourceMappingURL=activity-goal.js.map
