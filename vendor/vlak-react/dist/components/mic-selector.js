"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { Combobox } from "./combobox.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/** Enumerates inputs without opening a microphone; requestAccess is an explicit user action. */
export function useAudioDevices() {
  const [devices, setDevices] = React.useState([]);
  const [status, setStatus] = React.useState("loading");
  const [error, setError] = React.useState(null);
  const mounted = React.useRef(false);
  const version = React.useRef(0);
  const requesting = React.useRef(false);
  const load = React.useCallback(async permission => {
    if (!mounted.current || requesting.current) return;
    const media = navigator.mediaDevices;
    if (!media?.enumerateDevices || permission && !media.getUserMedia) {
      setStatus("unavailable");
      setError("Microphone selection is unavailable in this browser.");
      return;
    }
    const request = ++version.current;
    requesting.current = permission;
    setStatus("loading");
    setError(null);
    let stream;
    try {
      if (permission) stream = await media.getUserMedia({
        audio: true
      });
      if (!mounted.current || request !== version.current) return;
      const next = (await media.enumerateDevices()).filter(device => device.kind === "audioinput");
      if (mounted.current && request === version.current) {
        setDevices(next);
        setStatus("ready");
      }
    } catch (reason) {
      if (!mounted.current || request !== version.current) return;
      const denied = typeof reason === "object" && reason !== null && "name" in reason && reason.name === "NotAllowedError";
      setStatus(denied ? "denied" : "error");
      setError(denied ? "Microphone permission was denied. Allow access in your browser and try again." : "Microphones could not be loaded. Try again.");
    } finally {
      stream?.getTracks().forEach(track => {
        track.stop();
      });
      if (request === version.current) requesting.current = false;
    }
  }, []);
  React.useEffect(() => {
    mounted.current = true;
    const refresh = () => {
      void load(false);
    };
    refresh();
    navigator.mediaDevices?.addEventListener?.("devicechange", refresh);
    return () => {
      mounted.current = false;
      version.current++;
      requesting.current = false;
      navigator.mediaDevices?.removeEventListener?.("devicechange", refresh);
    };
  }, [load]);
  return {
    devices,
    status,
    error,
    refresh: React.useCallback(() => load(false), [load]),
    requestAccess: React.useCallback(() => load(true), [load])
  };
}
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    k7Eaqz: "xeuugli",
    kzqmXN: "xh8yej3",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  label: {
    kGuDYH: "x1jq7itm",
    k63SB2: "xk50ysn",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    $$css: true
  },
  message: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x4ro2ui",
    kMwMTN: "x1ixqp2s",
    kLWn49: "xfrs9s4",
    $$css: true
  }
};

/** Searchable microphone choice. The application owns capture and the selected device's use. */
export const MicSelector = /*#__PURE__*/React.forwardRef(function MicSelector({
  value,
  defaultValue = "",
  onValueChange,
  label = "Microphone",
  disabled = false,
  className,
  style,
  ...props
}, ref) {
  const {
    devices,
    status,
    error,
    requestAccess,
    refresh
  } = useAudioDevices();
  const [inner, setInner] = React.useState(defaultValue);
  const selected = value ?? inner;
  const id = React.useId();
  const missing = Boolean(selected && status === "ready" && !devices.some(device => device.deviceId === selected));
  const options = devices.filter(device => device.deviceId).map((device, index) => ({
    value: device.deviceId,
    label: device.label || `Microphone ${index + 1}`
  }));
  if (missing) options.unshift({
    value: selected,
    label: "Selected microphone unavailable"
  });
  const root = rs(["rs-mic-selector", className], styles.root);
  const heading = rs(["rs-mic-selector-label"], styles.label);
  const actions = rs(["rs-mic-selector-actions"], styles.actions);
  const message = rs(["rs-mic-selector-message"], styles.message);
  const needsPermission = !devices.length || devices.some(device => !device.label);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("span", {
      ...heading,
      id: `${id}-label`,
      children: label
    }), /*#__PURE__*/_jsx(Combobox, {
      options: options,
      value: selected,
      onValueChange: next => {
        if (value === undefined) setInner(next);
        onValueChange?.(next);
      },
      "aria-labelledby": `${id}-label`,
      "aria-describedby": `${id}-status`,
      placeholder: "Select microphone\u2026",
      emptyLabel: "No microphones found",
      disabled: disabled || status === "loading" || status === "unavailable"
    }), /*#__PURE__*/_jsxs("div", {
      ...actions,
      children: [needsPermission && status !== "unavailable" && /*#__PURE__*/_jsx(Button, {
        variant: "subtle",
        size: "sm",
        disabled: disabled || status === "loading",
        onClick: () => {
          void requestAccess();
        },
        children: "Allow microphone access"
      }), /*#__PURE__*/_jsx(Button, {
        variant: "subtle",
        size: "sm",
        disabled: disabled || status === "loading" || status === "unavailable",
        onClick: () => {
          void refresh();
        },
        children: "Refresh microphones"
      })]
    }), /*#__PURE__*/_jsx("p", {
      ...message,
      id: `${id}-status`,
      role: "status",
      children: error ?? (status === "loading" ? "Loading microphones…" : missing ? "The selected microphone is disconnected. Choose another input." : devices.length === 0 ? "No microphones available. Allow access to discover inputs." : "Selecting an input does not start recording.")
    })]
  });
});
//# sourceMappingURL=mic-selector.js.map
