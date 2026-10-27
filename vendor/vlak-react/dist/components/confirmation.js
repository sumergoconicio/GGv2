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
    kB7OPa: "x9f619",
    k7Eaqz: "xeuugli",
    kmVPX3: "x1uz70x1",
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j xz1l38o",
    kaIpWk: "xkrxur",
    kMwMTN: "x1gney9c",
    kWkggS: "xhpg8l3",
    $$css: true
  },
  title: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x1jq7itm",
    k63SB2: "x1s688f",
    kLWn49: "xfrs9s4",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  context: {
    k7Eaqz: "xeuugli",
    kGuDYH: "x1jq7itm",
    kLWn49: "xfrs9s4",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    $$css: true
  },
  action: {
    kzqmXN: "x14atkfc",
    kAzted: "x1wszdd",
    $$css: true
  },
  status: {
    kogj98: "x1ghz6dp",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x4ro2ui",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  error: {
    kogj98: "x1ghz6dp",
    kMwMTN: "x1gney9c",
    kGuDYH: "x1jq7itm",
    kLWn49: "xfrs9s4",
    kHjlTd: "xj0a0fe",
    $$css: true
  }
};

/** Records a decision about an application-owned action without executing a tool. */
export const Confirmation = /*#__PURE__*/React.forwardRef(function Confirmation({
  title,
  status,
  defaultStatus = "pending",
  onStatusChange,
  onConfirm,
  onReject,
  confirmLabel = "Confirm",
  rejectLabel = "Reject",
  disabled,
  className,
  style,
  children,
  ...props
}, ref) {
  const id = React.useId();
  const [innerStatus, setInnerStatus] = React.useState(defaultStatus);
  const current = status ?? innerStatus;
  const currentRef = React.useRef(current);
  currentRef.current = current;
  const [busy, setBusy] = React.useState(null);
  const [acknowledged, setAcknowledged] = React.useState(false);
  const [error, setError] = React.useState("");
  const [failedDecision, setFailedDecision] = React.useState(null);
  const locked = React.useRef(false);
  const version = React.useRef(0);
  const mounted = React.useRef(true);
  const previousStatus = React.useRef(status);
  React.useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      version.current++;
    };
  }, []);
  React.useEffect(() => {
    if (previousStatus.current === status) return;
    previousStatus.current = status;
    version.current++;
    locked.current = false;
    setBusy(null);
    setAcknowledged(false);
    setError("");
    setFailedDecision(null);
  }, [status]);
  const decide = async decision => {
    if (disabled || locked.current || currentRef.current !== "pending") return;
    locked.current = true;
    const request = ++version.current;
    setBusy(decision);
    setError("");
    setFailedDecision(null);
    try {
      await (decision === "accepted" ? onConfirm() : onReject?.());
    } catch (reason) {
      if (mounted.current && version.current === request) {
        setError(reason instanceof Error && reason.message ? reason.message : "Could not record your decision. Try again.");
        setFailedDecision(decision);
        setBusy(null);
        locked.current = false;
      }
      return;
    }
    if (!mounted.current || version.current !== request || currentRef.current !== "pending") return;
    if (status === undefined) {
      currentRef.current = decision;
      setInnerStatus(decision);
    } else {
      setAcknowledged(true);
    }
    setBusy(null);
    // Controlled owners may need another render or network round trip to acknowledge the decision.
    // Keep this proposal locked until they change status, or remount it for a new proposal.
    locked.current = status !== undefined;
    onStatusChange?.(decision);
  };
  const root = rs(["rs-confirmation", className], styles.root);
  const heading = rs(["rs-confirmation-title"], styles.title);
  const context = rs(["rs-confirmation-context"], styles.context);
  const actions = rs(["rs-confirmation-actions"], styles.actions);
  const action = rs(["rs-confirmation-action"], styles.action);
  const feedback = rs(["rs-confirmation-status"], styles.status);
  const failure = rs(["rs-confirmation-error"], styles.error);
  const unavailable = disabled || busy !== null || acknowledged || current !== "pending";
  const statusText = busy ? "Recording decision…" : current === "accepted" ? "Approval recorded" : current === "rejected" ? "Rejected" : acknowledged ? "Decision recorded; waiting for update" : "Awaiting your decision";
  return /*#__PURE__*/_jsxs("section", {
    "aria-labelledby": `${id}-title`,
    ...props,
    ref: ref,
    "data-status": current,
    "aria-busy": busy !== null || undefined,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("p", {
      id: `${id}-title`,
      className: heading.className,
      style: heading.style,
      children: title
    }), children !== undefined && /*#__PURE__*/_jsx("div", {
      className: context.className,
      style: context.style,
      children: children
    }), /*#__PURE__*/_jsxs("div", {
      className: actions.className,
      style: actions.style,
      children: [/*#__PURE__*/_jsx(Button, {
        className: action.className,
        style: action.style,
        disabled: unavailable,
        "aria-describedby": error ? `${id}-error` : undefined,
        onClick: () => void decide("accepted"),
        children: failedDecision === "accepted" ? "Try again" : confirmLabel
      }), /*#__PURE__*/_jsx(Button, {
        variant: "ghost",
        className: action.className,
        style: action.style,
        disabled: unavailable,
        "aria-describedby": error ? `${id}-error` : undefined,
        onClick: () => void decide("rejected"),
        children: failedDecision === "rejected" ? "Try again" : rejectLabel
      })]
    }), /*#__PURE__*/_jsx("p", {
      role: "status",
      className: feedback.className,
      style: feedback.style,
      children: statusText
    }), error && /*#__PURE__*/_jsx("p", {
      id: `${id}-error`,
      role: "alert",
      className: failure.className,
      style: failure.style,
      children: error
    })]
  });
});
//# sourceMappingURL=confirmation.js.map
