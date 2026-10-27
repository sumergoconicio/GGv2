"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8fetqu",
    kMwMTN: "x1gney9c",
    k7Eaqz: "xeuugli",
    kzqmXN: "xh8yej3",
    $$css: true
  },
  title: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x1jchvi3",
    k63SB2: "x1s688f",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  progress: {
    kzqmXN: "xh8yej3",
    kZKoxP: "x164u9eo",
    keaTxX: "x12r28v4",
    $$css: true
  },
  detail: {
    kogj98: "x1ghz6dp",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  phases: {
    kogj98: "x1ghz6dp",
    kZCmMZ: "x1is3n31",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  phase: {
    k8WAf4: "x18g2hj5",
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    $$css: true
  }
};
function duration(seconds) {
  const safe = Math.max(0, Math.round(Number.isFinite(seconds) ? seconds : 0));
  return safe < 60 ? `${safe}s` : `${Math.floor(safe / 60)}m ${safe % 60}s`;
}

/** Honest long-running task state, including unknown progress and action failures. */
export const TaskProgress = /*#__PURE__*/React.forwardRef(function TaskProgress({
  label,
  state,
  value,
  phases = [],
  description,
  elapsedSeconds,
  remainingSeconds,
  onCancel,
  onRetry,
  className,
  style,
  ...props
}, ref) {
  const id = React.useId();
  const [busy, setBusy] = React.useState(false);
  const [actionError, setActionError] = React.useState("");
  const request = React.useRef(0);
  React.useEffect(() => {
    request.current++;
    setBusy(false);
    setActionError("");
    return () => {
      request.current++;
    };
  }, [state]);
  const run = async action => {
    if (busy) return;
    const current = ++request.current;
    setBusy(true);
    setActionError("");
    try {
      await action();
    } catch {
      if (current === request.current) setActionError("The action failed. Try again.");
    } finally {
      if (current === request.current) setBusy(false);
    }
  };
  const percentage = value != null && Number.isFinite(value) ? Math.min(100, Math.max(0, value)) : undefined;
  const root = rs(["rs-task-progress", className], styles.root);
  const title = rs(["rs-task-progress-title"], styles.title);
  const progress = rs(["rs-task-progress-bar"], styles.progress);
  const detail = rs(["rs-task-progress-detail"], styles.detail);
  const list = rs(["rs-task-progress-phases"], styles.phases);
  const phase = rs(["rs-task-progress-phase"], styles.phase);
  const actions = rs(["rs-task-progress-actions"], styles.actions);
  const states = {
    pending: "Waiting to start",
    running: "In progress",
    paused: "Paused",
    complete: "Complete",
    error: "Failed",
    cancelled: "Cancelled"
  };
  return /*#__PURE__*/_jsxs("section", {
    ref: ref,
    "aria-labelledby": id,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("h2", {
      id: id,
      ...title,
      children: label
    }), /*#__PURE__*/_jsx("p", {
      role: "status",
      ...detail,
      children: states[state]
    }), /*#__PURE__*/_jsx("progress", {
      ...progress,
      "aria-label": `${label} progress`,
      max: 100,
      value: state === "complete" ? 100 : percentage
    }), description != null && /*#__PURE__*/_jsx("div", {
      ...detail,
      children: description
    }), (elapsedSeconds != null || remainingSeconds != null) && /*#__PURE__*/_jsxs("p", {
      ...detail,
      children: [elapsedSeconds != null ? `${duration(elapsedSeconds)} elapsed` : "", elapsedSeconds != null && remainingSeconds != null ? " · " : "", remainingSeconds != null ? `About ${duration(remainingSeconds)} remaining` : ""]
    }), !!phases.length && /*#__PURE__*/_jsx("ol", {
      ...list,
      children: phases.map(item => /*#__PURE__*/_jsxs("li", {
        ...phase,
        "aria-current": item.state === "active" ? "step" : undefined,
        children: [item.label, " \xB7 ", item.state]
      }, item.id))
    }), /*#__PURE__*/_jsxs("div", {
      ...actions,
      children: [onCancel && ["pending", "running", "paused"].includes(state) && /*#__PURE__*/_jsx(Button, {
        variant: "ghost",
        disabled: busy,
        onClick: () => run(onCancel),
        children: "Cancel task"
      }), onRetry && ["error", "cancelled"].includes(state) && /*#__PURE__*/_jsx(Button, {
        variant: "ghost",
        disabled: busy,
        onClick: () => run(onRetry),
        children: "Retry task"
      })]
    }), actionError && /*#__PURE__*/_jsx("p", {
      role: "alert",
      ...detail,
      children: actionError
    })]
  });
});
//# sourceMappingURL=task-progress.js.map
