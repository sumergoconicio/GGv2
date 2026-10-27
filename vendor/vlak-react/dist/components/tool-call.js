"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    kB7OPa: "x9f619",
    k7Eaqz: "xeuugli",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j xz1l38o",
    kaIpWk: "xkrxur",
    kMwMTN: "x1gney9c",
    kWkggS: "xhpg8l3",
    $$css: true
  },
  summary: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kOIVth: "x8233eu",
    kB7OPa: "x9f619",
    kAzted: "x1wszdd",
    kmVPX3: "x19btat0",
    kaIpWk: "x1pjcqnp",
    kkrTdU: "x1ypdohk",
    kB88ic: "xe8uvvx",
    kGqHtl: "x1i5lizr",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x14tvtkk",
    kInvED: "x1bqaal",
    $$css: true
  },
  title: {
    kUk6DE: "x12lumcd",
    k7Eaqz: "xeuugli",
    kGuDYH: "x1jq7itm",
    k63SB2: "x1s688f",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  state: {
    kmuXW: "x2lah0s",
    kGuDYH: "x4ro2ui",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  indicator: {
    k1xSpc: "x1lliihq",
    kmuXW: "x2lah0s",
    kzqmXN: "xcdlrvm",
    kZKoxP: "x1l36t39",
    $$css: true
  },
  body: {
    k7Eaqz: "xeuugli",
    kmVPX3: "x1uz70x1",
    kEafiO: "x1ro6g4h",
    kPef9Z: "x13fuv20",
    kLZC3w: "x1fq36pv",
    k1xSpc: "xrvj5dj",
    kOIVth: "x8fetqu",
    $$css: true
  },
  section: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  label: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x4ro2ui",
    k63SB2: "x1s688f",
    $$css: true
  },
  value: {
    k7Eaqz: "xeuugli",
    kGuDYH: "x1jq7itm",
    kLWn49: "xfrs9s4",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  code: {
    kogj98: "x1ghz6dp",
    kmVPX3: "x79iv2k",
    k7Eaqz: "xeuugli",
    khDVqt: "x126k92a",
    kHjlTd: "xj0a0fe",
    kMv6JI: "x1mb2qyg",
    kGuDYH: "x1dcheo9",
    kLWn49: "xfrs9s4",
    kWkggS: "x1nzd1wa",
    $$css: true
  },
  error: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x1jq7itm",
    kLWn49: "xfrs9s4",
    kHjlTd: "xj0a0fe",
    $$css: true
  }
};
const stateLabels = {
  queued: "Queued",
  running: "Running",
  complete: "Complete",
  error: "Error"
};

/** Displays supplied tool activity. The application owns execution and its state. */
export const ToolCall = /*#__PURE__*/React.forwardRef(function ToolCall({
  title,
  state = "queued",
  statusLabel,
  input,
  output,
  error,
  open,
  defaultOpen = false,
  onOpenChange,
  onToggle,
  className,
  style,
  children,
  ...props
}, ref) {
  const [innerOpen, setInnerOpen] = React.useState(defaultOpen);
  const isOpen = open ?? innerOpen;
  const root = rs(["rs-tool-call", className], styles.root);
  const summary = rs(["rs-tool-call-summary"], styles.summary);
  const heading = rs(["rs-tool-call-title"], styles.title);
  const status = rs(["rs-tool-call-state"], styles.state);
  const indicator = rs(["rs-tool-call-indicator"], styles.indicator);
  const body = rs(["rs-tool-call-body"], styles.body);
  const section = rs(["rs-tool-call-section"], styles.section);
  const label = rs(["rs-tool-call-label"], styles.label);
  const value = rs(["rs-tool-call-value"], styles.value);
  const code = rs(["rs-tool-call-code"], styles.code);
  const failure = rs(["rs-tool-call-error"], styles.error);
  const renderValue = content => typeof content === "string" || typeof content === "number" ? /*#__PURE__*/_jsx("pre", {
    className: code.className,
    style: code.style,
    children: content
  }) : /*#__PURE__*/_jsx("div", {
    className: value.className,
    style: value.style,
    children: content
  });
  return /*#__PURE__*/_jsxs("details", {
    ...props,
    ref: ref,
    open: isOpen,
    "data-state": state,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    onToggle: event => {
      const next = event.currentTarget.open;
      if (next !== isOpen) {
        if (open === undefined) setInnerOpen(next);else event.currentTarget.open = isOpen;
        onOpenChange?.(next);
      }
      onToggle?.(event);
    },
    children: [/*#__PURE__*/_jsxs("summary", {
      className: summary.className,
      style: summary.style,
      onClick: event => {
        if (open !== undefined) {
          event.preventDefault();
          onOpenChange?.(!open);
        }
      },
      children: [/*#__PURE__*/_jsx("span", {
        className: heading.className,
        style: heading.style,
        children: title
      }), /*#__PURE__*/_jsx("span", {
        role: "status",
        className: status.className,
        style: status.style,
        children: statusLabel ?? stateLabels[state]
      }), /*#__PURE__*/_jsx("svg", {
        ...indicator,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        focusable: "false",
        children: /*#__PURE__*/_jsx("path", {
          d: isOpen ? "m6 9 6 6 6-6" : "m9 6 6 6-6 6"
        })
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: body.className,
      style: body.style,
      children: [input !== undefined && input !== null && /*#__PURE__*/_jsxs("div", {
        className: section.className,
        style: section.style,
        children: [/*#__PURE__*/_jsx("p", {
          className: label.className,
          style: label.style,
          children: "Input"
        }), renderValue(input)]
      }), output !== undefined && output !== null && /*#__PURE__*/_jsxs("div", {
        className: section.className,
        style: section.style,
        children: [/*#__PURE__*/_jsx("p", {
          className: label.className,
          style: label.style,
          children: "Output"
        }), renderValue(output)]
      }), error !== undefined && /*#__PURE__*/_jsx("p", {
        role: "alert",
        className: failure.className,
        style: failure.style,
        children: error
      }), children]
    })]
  });
});

/** Provider-neutral shape for the AI SDK static and dynamic tool lifecycle. */

/** Maps supplied tool lifecycle without inferring that ready arguments have started execution. */
export function getToolCallPresentation(part) {
  const title = part.type === "dynamic-tool" ? part.toolName || "Tool" : part.type.startsWith("tool-") ? part.type.slice(5) : part.toolName || part.type;
  const base = {
    title,
    input: part.input,
    output: part.output,
    approvalId: part.approval?.id
  };
  switch (part.state) {
    case "input-streaming":
      return {
        ...base,
        state: "queued",
        statusLabel: "Preparing input"
      };
    case "input-available":
      return {
        ...base,
        state: "queued",
        statusLabel: "Ready"
      };
    case "approval-requested":
      return {
        ...base,
        state: "queued",
        statusLabel: part.approval?.isAutomatic ? "Checking approval policy" : "Approval requested",
        approvalStatus: part.approval?.isAutomatic ? undefined : "pending"
      };
    case "approval-responded":
      return {
        ...base,
        state: "queued",
        statusLabel: part.approval?.approved === true ? "Approved, awaiting execution" : part.approval?.approved === false ? "Denied" : "Approval decision unavailable",
        approvalStatus: part.approval?.approved === true ? "accepted" : part.approval?.approved === false ? "rejected" : undefined
      };
    case "output-available":
      return {
        ...base,
        state: "complete",
        statusLabel: "Complete"
      };
    case "output-error":
      return {
        ...base,
        state: "error",
        statusLabel: "Error",
        error: part.errorText || "The tool could not complete."
      };
    case "output-denied":
      return {
        ...base,
        state: "complete",
        statusLabel: "Denied",
        approvalStatus: "rejected"
      };
  }
}
//# sourceMappingURL=tool-call.js.map
