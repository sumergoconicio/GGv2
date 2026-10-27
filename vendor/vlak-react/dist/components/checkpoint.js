"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import { rs } from "../rs.js";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { Button } from "./button.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x6s0dn4",
    kOIVth: "x8233eu",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x1dcheo9",
    $$css: true
  },
  line: {
    kZKoxP: "xjm9jq1",
    kWkggS: "xb223ua",
    kUk6DE: "x107yfqw",
    $$css: true
  },
  error: {
    kCS8Yb: "x1l7klhg",
    kMwMTN: "x1gney9c",
    kogj98: "x1ghz6dp",
    $$css: true
  }
};
/** A restore marker. The application owns saved history and the async restore operation. */
export const Checkpoint = /*#__PURE__*/React.forwardRef(function Checkpoint({
  label,
  onRestore,
  restoreLabel = "Restore checkpoint",
  disabled,
  onError,
  className,
  style,
  children,
  ...props
}, ref) {
  const [pending, setPending] = React.useState(false);
  const [error, setError] = React.useState(false);
  const generation = React.useRef(0);
  const busy = React.useRef(false);
  React.useEffect(() => () => {
    generation.current++;
  }, []);
  const restore = async () => {
    if (!onRestore || busy.current || disabled) return;
    busy.current = true;
    const token = generation.current;
    setPending(true);
    setError(false);
    try {
      await onRestore();
    } catch (cause) {
      if (token === generation.current) {
        setError(true);
        onError?.(cause);
      }
    } finally {
      if (token === generation.current) {
        busy.current = false;
        setPending(false);
      }
    }
  };
  const root = rs(["rs-checkpoint", className], styles.root);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("span", {
      ...rs(["rs-checkpoint-line"], styles.line),
      "aria-hidden": "true"
    }), /*#__PURE__*/_jsx("span", {
      children: label
    }), onRestore && /*#__PURE__*/_jsx(Button, {
      variant: "subtle",
      disabled: disabled || pending,
      onClick: () => {
        void restore();
      },
      "aria-busy": pending,
      children: pending ? "Restoring…" : restoreLabel
    }), children, /*#__PURE__*/_jsx("span", {
      ...rs(["rs-checkpoint-line"], styles.line),
      "aria-hidden": "true"
    }), error && /*#__PURE__*/_jsx("p", {
      ...rs(["rs-checkpoint-error"], styles.error),
      role: "alert",
      children: "The checkpoint could not be restored. Try again."
    })]
  });
});
//# sourceMappingURL=checkpoint.js.map
