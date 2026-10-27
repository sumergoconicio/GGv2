"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useFieldControl } from "./field.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  otp: {
    k1xSpc: "x78zum5",
    kOIVth: "x13z6uf9",
    kzqmXN: "xvolacv",
    $$css: true
  },
  cell: {
    kB7OPa: "x9f619",
    kzqmXN: "x1uyfxw7 x16afccg",
    kzQI83: "xzezc5b",
    k7Eaqz: "xtp0tkc x1cf4flf",
    kZKoxP: "x1pizb70 x128uv7p",
    kAzted: "xs41724",
    k9WMMc: "x2b8uid",
    kGuDYH: "x1c3i2sq",
    k63SB2: "x1s688f",
    kcqcaj: "xss6m8b",
    kysU6D: "xjyslct",
    k3lkva: "x1lugfcp",
    kMwMTN: "x1aj07ft",
    knGrYV: "x1a7ec33",
    kWkggS: "x1eieebl",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd x53md5s",
    kaIpWk: "xkrxur x16r9t5",
    kMeerF: "x1k57tk5 x784prv",
    k3XXqK: "x1t137rt x9v5kkp",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    kMv6JI: "xjb2p0i",
    kmVPX3: "x1717udv",
    kEn3bw: "xnxeanp",
    kTvcWW: "x1tzf74q",
    kPNmE7: "x1frusz9",
    kEKVq3: "x1o8irxk",
    $$css: true
  },
  invalid: {
    kVAM5u: "xli9mpl",
    $$css: true
  }
};

/** One cell per character. Auto-advance, backspace, paste. */
export const InputOTP = /*#__PURE__*/React.forwardRef(function InputOTP({
  length: requestedLength = 6,
  value,
  defaultValue = "",
  onValueChange,
  name,
  disabled = false,
  readOnly = false,
  onChange,
  onComplete,
  className,
  style,
  "aria-label": ariaLabel = "One-time code",
  ...props
}, ref) {
  const length = Number.isFinite(requestedLength) ? Math.max(1, Math.min(12, Math.floor(requestedLength))) : 6;
  const normalize = code => Array.from({
    length
  }, (_, i) => code.replace(/\D/g, "")[i] ?? "");
  const [inner, setChars] = React.useState(() => normalize(defaultValue));
  const chars = value === undefined ? Array.from({
    length
  }, (_, i) => inner[i] ?? "") : normalize(value);
  const lastComplete = React.useRef(undefined);
  const refs = React.useRef([]);
  const field = useFieldControl(props);
  const invalid = field.invalid;
  const commit = next => {
    if (disabled || readOnly) return;
    if (value === undefined) setChars(next);
    const code = next.join("");
    onValueChange?.(code);
    onChange?.(code);
    if (code.length === length && lastComplete.current !== code) onComplete?.(code);
    lastComplete.current = code.length === length ? code : undefined;
  };
  const setAt = (index, value) => {
    const next = [...chars];
    next[index] = value;
    commit(next);
  };
  const paste = (index, text) => {
    const clean = text.replace(/\D/g, "").slice(0, length - index);
    if (!clean) return;
    const next = [...chars];
    for (let i = 0; i < clean.length; i++) next[index + i] = clean[i];
    commit(next);
    refs.current[Math.min(index + clean.length, length - 1)]?.focus();
  };
  const sx = rs(["rs-otp", className], styles.otp);
  const cell = rs(["rs-otp-cell", invalid && "rs-otp-cell-invalid"], styles.cell, invalid && styles.invalid);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    },
    role: "group",
    "aria-label": ariaLabel,
    ...props,
    "aria-describedby": field["aria-describedby"],
    children: [name && /*#__PURE__*/_jsx("input", {
      type: "hidden",
      name: name,
      value: chars.join(""),
      disabled: disabled
    }), chars.map((char, index) => /*#__PURE__*/_jsx("input", {
      ref: el => {
        refs.current[index] = el;
      },
      inputMode: "numeric",
      disabled: disabled,
      readOnly: readOnly,
      autoComplete: index === 0 ? "one-time-code" : "off",
      maxLength: 1,
      value: char,
      "aria-label": `Digit ${index + 1}`,
      "aria-invalid": field["aria-invalid"],
      className: cell.className,
      style: cell.style,
      onFocus: e => e.currentTarget.select(),
      onChange: e => {
        const value = e.target.value.replace(/\D/g, "");
        if (value.length > 1) {
          paste(index, value);
          return;
        }
        setAt(index, value);
        if (value) refs.current[index + 1]?.focus();
      },
      onKeyDown: e => {
        if (readOnly || disabled) return;
        if (e.key === "Backspace" && !chars[index] && index > 0) {
          e.preventDefault();
          refs.current[index - 1]?.focus();
          setAt(index - 1, "");
        }
        if (e.key === "ArrowLeft") refs.current[index - 1]?.focus();
        if (e.key === "ArrowRight") refs.current[index + 1]?.focus();
      },
      onPaste: e => {
        e.preventDefault();
        paste(index, e.clipboardData.getData("text"));
      }
    }, index))]
  });
});
//# sourceMappingURL=input-otp.js.map
