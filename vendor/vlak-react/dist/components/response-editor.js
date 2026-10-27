"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import { rs } from "../rs.js";
import { Textarea } from "./textarea.js";
import { Button } from "./button.js";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kOIVth: "x13z6uf9",
    kwnvtZ: "x1a02dak",
    $$css: true
  },
  error: {
    kogj98: "x1ghz6dp",
    kMwMTN: "x1gney9c",
    kGuDYH: "x1dcheo9",
    $$css: true
  }
};
/** Multiline message editing with async save, cancellation, and failed-draft retention. */
export const ResponseEditor = /*#__PURE__*/React.forwardRef(function ResponseEditor({
  text,
  onSave,
  onCancel,
  label = "Edit message",
  saveLabel = "Save message",
  disabled,
  onError,
  className,
  style,
  onKeyDown,
  ...props
}, ref) {
  const [draft, setDraft] = React.useState(text);
  const [pending, setPending] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const version = React.useRef(0);
  const busy = React.useRef(false);
  React.useEffect(() => {
    version.current++;
    setDraft(text);
    setFailed(false);
    setPending(false);
    busy.current = false;
    return () => {
      version.current++;
    };
  }, [text]);
  const cancel = () => {
    version.current++;
    busy.current = false;
    setPending(false);
    onCancel();
  };
  const root = rs(["rs-response-editor", className], styles.root);
  return /*#__PURE__*/_jsxs("form", {
    ref: ref,
    "aria-label": label,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    onKeyDown: event => {
      onKeyDown?.(event);
      if (!event.defaultPrevented && !event.nativeEvent.isComposing && event.key === "Escape") {
        event.preventDefault();
        cancel();
      }
    },
    onSubmit: async event => {
      event.preventDefault();
      if (busy.current || disabled || !draft.trim()) return;
      busy.current = true;
      setPending(true);
      setFailed(false);
      const token = version.current;
      try {
        await onSave(draft);
      } catch (error) {
        if (token === version.current) {
          setFailed(true);
          onError?.(error);
        }
      } finally {
        if (token === version.current) {
          busy.current = false;
          setPending(false);
        }
      }
    },
    children: [/*#__PURE__*/_jsx(Textarea, {
      label: label,
      rows: 3,
      value: draft,
      onChange: event => setDraft(event.target.value),
      disabled: disabled,
      readOnly: pending
    }), /*#__PURE__*/_jsxs("div", {
      ...rs(["rs-response-editor-actions"], styles.actions),
      children: [/*#__PURE__*/_jsx(Button, {
        type: "submit",
        variant: "subtle",
        disabled: disabled || !draft.trim(),
        "aria-disabled": pending || undefined,
        "aria-busy": pending,
        children: pending ? "Saving…" : saveLabel
      }), /*#__PURE__*/_jsx(Button, {
        variant: "subtle",
        onClick: cancel,
        children: "Cancel"
      })]
    }), failed && /*#__PURE__*/_jsx("p", {
      ...rs(["rs-response-editor-error"], styles.error),
      role: "alert",
      children: "The message could not be saved. Your draft is still here."
    })]
  });
});
//# sourceMappingURL=response-editor.js.map
