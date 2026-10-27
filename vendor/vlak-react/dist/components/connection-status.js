"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { Icon } from "./icon.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x6s0dn4",
    kOIVth: "x8233eu",
    kMwMTN: "x1gney9c",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  status: {
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kOIVth: "x13z6uf9",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  detail: {
    kMwMTN: "x1ixqp2s",
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    kogj98: "x1ghz6dp",
    $$css: true
  }
};

/** Application-supplied connection state. A successful retry does not assume reconnection. */
export const ConnectionStatus = /*#__PURE__*/React.forwardRef(function ConnectionStatus({
  state,
  label,
  description,
  onRetry,
  className,
  style,
  ...props
}, ref) {
  const [busy, setBusy] = React.useState(false);
  const [error, setError] = React.useState("");
  const generation = React.useRef(0);
  React.useEffect(() => {
    generation.current++;
    setBusy(false);
    setError("");
    return () => {
      generation.current++;
    };
  }, [state]);
  const retry = async () => {
    if (!onRetry || busy) return;
    const id = ++generation.current;
    setBusy(true);
    setError("");
    try {
      await onRetry();
    } catch {
      if (id === generation.current) setError("Could not reconnect. Try again.");
    } finally {
      if (id === generation.current) setBusy(false);
    }
  };
  const root = rs(["rs-connection-status", className], styles.root);
  const status = rs(["rs-connection-status-label"], styles.status);
  const detail = rs(["rs-connection-status-detail"], styles.detail);
  const names = {
    connecting: "Connecting",
    connected: "Connected",
    offline: "Offline",
    reconnecting: "Reconnecting"
  };
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsxs("span", {
      ...status,
      role: "status",
      children: [/*#__PURE__*/_jsx(Icon, {
        name: state === "offline" ? "wifi-off" : "wifi",
        size: 16
      }), label ?? names[state]]
    }), description != null && /*#__PURE__*/_jsx("span", {
      ...detail,
      children: description
    }), onRetry && state === "offline" && /*#__PURE__*/_jsx(Button, {
      variant: "ghost",
      disabled: busy,
      onClick: retry,
      children: busy ? "Retrying" : "Retry connection"
    }), error && /*#__PURE__*/_jsx("p", {
      ...detail,
      role: "alert",
      children: error
    })]
  });
});
//# sourceMappingURL=connection-status.js.map
