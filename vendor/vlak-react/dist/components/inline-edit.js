"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { useMergedRefs } from "../merge-refs.js";
import { useInputValue } from "../use-input-value.js";
import { Button } from "./button.js";
import { Input } from "./input.js";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  row: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  label: {
    kGuDYH: "x4ro2ui",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  value: {
    k7Eaqz: "xeuugli",
    kUk6DE: "x3daqg1",
    kGuDYH: "x1jq7itm",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  input: {
    k7Eaqz: "xeuugli",
    kUk6DE: "x3daqg1",
    $$css: true
  },
  action: {
    kzqmXN: "x14atkfc",
    $$css: true
  },
  error: {
    kogj98: "x1ghz6dp",
    kMwMTN: "x1gney9c",
    kGuDYH: "x4ro2ui",
    $$css: true
  }
};
export const InlineEdit = /*#__PURE__*/React.forwardRef(function InlineEdit({
  value,
  defaultValue = "",
  onValueChange,
  label = "Value",
  name,
  disabled,
  placeholder = "Not set",
  validate,
  onSave,
  editLabel = "Edit",
  saveLabel = "Save",
  cancelLabel = "Cancel",
  className,
  style,
  ...props
}, ref) {
  const [current, setValue, rootRef] = useInputValue(value, defaultValue, onValueChange, () => {
    saveVersion.current++;
    setEditing(false);
    setError("");
    setPending(false);
  });
  const mergedRef = useMergedRefs(ref, rootRef);
  const [editing, setEditing] = React.useState(false);
  const [draft, setDraft] = React.useState("");
  const [pending, setPending] = React.useState(false);
  const [error, setError] = React.useState("");
  const inputRef = React.useRef(null);
  const triggerRef = React.useRef(null);
  const wasEditing = React.useRef(false);
  const mounted = React.useRef(true);
  const saveVersion = React.useRef(0);
  const id = React.useId();
  React.useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  React.useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
      inputRef.current?.select();
    } else if (wasEditing.current) triggerRef.current?.focus();
    wasEditing.current = editing;
  }, [editing]);
  const cancel = () => {
    if (!pending) {
      setEditing(false);
      setError("");
    }
  };
  const save = async () => {
    if (pending || disabled) return;
    const validation = validate?.(draft);
    if (validation) {
      setError(validation);
      inputRef.current?.focus();
      return;
    }
    const version = ++saveVersion.current;
    setPending(true);
    setError("");
    try {
      await onSave?.(draft);
      if (mounted.current && version === saveVersion.current) {
        setValue(draft);
        setEditing(false);
      }
    } catch (reason) {
      if (mounted.current && version === saveVersion.current) setError(reason instanceof Error ? reason.message : "Could not save. Try again.");
    } finally {
      if (mounted.current && version === saveVersion.current) setPending(false);
    }
  };
  const root = rs(["rs-inline-edit", className], styles.root);
  const row = rs(["rs-inline-edit-row"], styles.row);
  const lab = rs(["rs-inline-edit-label"], styles.label);
  const text = rs(["rs-inline-edit-value"], styles.value);
  const input = rs(["rs-inline-edit-input"], styles.input);
  const action = rs(["rs-inline-edit-action"], styles.action);
  const feedback = rs(["rs-inline-edit-error"], styles.error);
  return /*#__PURE__*/_jsxs("div", {
    ...props,
    ref: mergedRef,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    "aria-busy": pending || undefined,
    children: [/*#__PURE__*/_jsx("span", {
      id: `${id}-label`,
      className: lab.className,
      style: lab.style,
      children: label
    }), /*#__PURE__*/_jsx("div", {
      className: row.className,
      style: row.style,
      children: editing ? /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx(Input, {
          ref: inputRef,
          plain: true,
          value: draft,
          "aria-labelledby": `${id}-label`,
          "aria-describedby": error ? `${id}-error` : undefined,
          "aria-invalid": Boolean(error),
          disabled: disabled || pending,
          className: input.className,
          style: input.style,
          onChange: event => {
            setDraft(event.currentTarget.value);
            setError("");
          },
          onKeyDown: event => {
            if (event.nativeEvent.isComposing) return;
            if (event.key === "Enter") {
              event.preventDefault();
              void save();
            }
            if (event.key === "Escape") {
              event.preventDefault();
              cancel();
            }
          }
        }), /*#__PURE__*/_jsx(Button, {
          disabled: disabled || pending,
          className: action.className,
          style: action.style,
          onClick: () => void save(),
          children: pending ? "Saving…" : saveLabel
        }), /*#__PURE__*/_jsx(Button, {
          variant: "ghost",
          disabled: pending,
          className: action.className,
          style: action.style,
          onClick: cancel,
          children: cancelLabel
        })]
      }) : /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx("span", {
          className: text.className,
          style: text.style,
          children: current || placeholder
        }), /*#__PURE__*/_jsx(Button, {
          ref: triggerRef,
          variant: "ghost",
          disabled: disabled,
          className: action.className,
          style: action.style,
          "aria-label": `${editLabel} ${label}`,
          onClick: () => {
            setDraft(current);
            setEditing(true);
            setError("");
          },
          children: editLabel
        })]
      })
    }), error && /*#__PURE__*/_jsx("p", {
      id: `${id}-error`,
      role: "alert",
      className: feedback.className,
      style: feedback.style,
      children: error
    }), name && /*#__PURE__*/_jsx("input", {
      type: "hidden",
      name: name,
      value: current,
      disabled: disabled
    })]
  });
});
//# sourceMappingURL=inline-edit.js.map
