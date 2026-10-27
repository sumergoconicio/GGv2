"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { Input } from "./input.js";
import { useInputValue } from "../use-input-value.js";
import { useMergedRefs } from "../merge-refs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "xpj7pl4",
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  label: {
    kGuDYH: "x1jq7itm",
    k63SB2: "xk50ysn",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  input: {
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  hint: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x4ro2ui",
    kMwMTN: "x1ixqp2s",
    kLWn49: "xfrs9s4",
    $$css: true
  }
};

/** Editable hours, minutes, seconds and frames for integer non-drop timecode. */
export const TimecodeField = /*#__PURE__*/React.forwardRef(function TimecodeField({
  label,
  frameRate,
  value,
  defaultValue = "",
  onValueChange,
  id,
  className,
  style,
  "aria-describedby": ariaDescribedBy,
  "aria-invalid": ariaInvalid,
  ...props
}, ref) {
  const autoId = React.useId();
  const inputId = id ?? autoId;
  const [, refresh] = React.useReducer(n => n + 1, 0);
  const [current, setValue, inputRef] = useInputValue(value, defaultValue, onValueChange, refresh);
  const mergedRef = useMergedRefs(ref, inputRef);
  const validRate = Number.isInteger(frameRate) && frameRate >= 1 && frameRate <= 99;
  const validText = current === "" || /^\d{2}:[0-5]\d:[0-5]\d:\d{2}$/.test(current) && Number(current.slice(-2)) < frameRate;
  const error = !validRate ? "Use an integer non-drop frame rate from 1 to 99." : !validText ? `Use hours:minutes:seconds:frames, with frames from 00 to ${String(frameRate - 1).padStart(2, "0")}.` : "";
  React.useEffect(() => {
    inputRef.current?.setCustomValidity(error);
  }, [error, inputRef]);
  const root = rs(["rs-timecode-field"], styles.root);
  const caption = rs(["rs-timecode-field-label"], styles.label);
  const input = rs(["rs-timecode-field-input", className], styles.input);
  const hint = rs(["rs-timecode-field-hint"], styles.hint);
  return /*#__PURE__*/_jsxs("div", {
    className: root.className,
    style: root.style,
    children: [/*#__PURE__*/_jsx("label", {
      htmlFor: inputId,
      className: caption.className,
      style: caption.style,
      children: label
    }), /*#__PURE__*/_jsx(Input, {
      plain: true,
      ...props,
      ref: mergedRef,
      id: inputId,
      type: "text",
      value: current,
      pattern: "[0-9]{2}:[0-5][0-9]:[0-5][0-9]:[0-9]{2}",
      placeholder: props.placeholder ?? "00:00:00:00",
      spellCheck: false,
      "aria-invalid": error ? true : ariaInvalid,
      "aria-describedby": [ariaDescribedBy, `${inputId}-hint`].filter(Boolean).join(" "),
      className: input.className,
      style: {
        ...input.style,
        ...style
      },
      onChange: event => setValue(event.currentTarget.value)
    }), /*#__PURE__*/_jsx("p", {
      id: `${inputId}-hint`,
      className: hint.className,
      style: hint.style,
      children: error || `${frameRate} fps, non-drop. Hours:minutes:seconds:frames.`
    })]
  });
});
//# sourceMappingURL=timecode-field.js.map
