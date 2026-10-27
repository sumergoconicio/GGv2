"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Icon } from "./icon.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const fadeIn = "x18re5ia-B";
const styles = {
  field: {
    kB7OPa: "x9f619",
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x6s0dn4 x11g0wa5",
    kOIVth: "x13z6uf9",
    kzqmXN: "xh8yej3",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j x14geis9",
    kaIpWk: "xkrxur x16r9t5",
    kWkggS: "x1eieebl",
    k8WAf4: "x1o5vn8x x1j53ye5",
    kZCmMZ: "x1m83qfk xja485i",
    kwRFfy: "x43c3x3 x125pq5o",
    kAzted: "xs41724",
    kmkexE: "xizgog9",
    $$css: true
  },
  input: {
    kB7OPa: "x9f619",
    kzQI83: "x1iyjqo2",
    k7Eaqz: "xeuugli",
    kysU6D: "xjyslct",
    k3lkva: "x1lugfcp",
    kMzoRj: "xc342km",
    kWkggS: "xjbqb8w",
    kMwMTN: "x1aj07ft",
    knGrYV: "x1a7ec33",
    kMv6JI: "xjb2p0i",
    kGuDYH: "xkpwil5 x1cncyzl",
    kb6lSQ: "xjat59b",
    kI3sdo: "x1a2a7pz",
    k8WAf4: "xxbimen x1j53ye5",
    kg3NbH: "xnjsko4 x507p67",
    kAzted: "x1wszdd xs41724",
    k8Qsv1: "x6adxn2",
    $$css: true
  },
  reveal: {
    ks0D6T: "x1m189uc",
    kSiTet: "xg01cxk",
    kVQacm: "xb3r6kr",
    kmkexE: "x1eh0fj5",
    $$css: true
  },
  revealIn: {
    ks0D6T: "x1s8ub08",
    kSiTet: "x1hc1fzr",
    $$css: true
  },
  btn: {
    kZKoxP: "x9ve8r1 x128uv7p",
    kAzted: "xs41724",
    kg3NbH: "xnxx81d xookx22",
    kGuDYH: "x1up2fpq xzwmqnn",
    k7Eaqz: "xtp0tkc",
    kaIpWk: "x2u8bby x5q1yb1",
    khDVqt: "xuxw1ft",
    kMv6JI: "xjb2p0i",
    k63SB2: "x1s688f",
    kb6lSQ: "xjat59b",
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kkrTdU: "x1ypdohk",
    kWkggS: "xmgn9m6",
    kMwMTN: "x19rmm7l",
    kMzoRj: "xc342km",
    $$css: true
  },
  subscribed: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kOIVth: "x13z6uf9",
    kGuDYH: "xkpwil5",
    k63SB2: "x1s688f",
    kb6lSQ: "xjat59b",
    kMwMTN: "x1gney9c",
    kKVMdj: "xqcmdr3",
    k44tkh: "x1athf16",
    kyAemX: "x1nn5e1t",
    $$css: true
  },
  error: {
    kCS8Yb: "x1l7klhg",
    kogj98: "x1ghz6dp",
    kmVPX3: "x7gbtqy",
    kGuDYH: "x1jq7itm",
    kMwMTN: "x1gney9c",
    $$css: true
  }
};

/** One field, one action; asynchronous actions only confirm after they resolve. */
export const InlineForm = /*#__PURE__*/React.forwardRef(function InlineForm({
  placeholder = "Your e-mail",
  buttonLabel = "Subscribe",
  successLabel = "You're on the list",
  pendingLabel = "Submitting…",
  errorLabel = "Could not submit. Please try again.",
  value: controlledValue,
  defaultValue = "",
  onValueChange,
  validate = v => /.+@.+\..+/.test(v),
  onSubmit,
  className,
  style,
  inputProps,
  ...props
}, ref) {
  const [inner, setInner] = React.useState(defaultValue);
  const value = controlledValue ?? inner;
  const [state, setState] = React.useState("idle");
  const submitting = React.useRef(false);
  const errorId = React.useId();
  const valid = validate(value);
  const pending = state === "pending";
  const sx = rs(["rs-inline-field", className], styles.field);
  const input = rs(["rs-inline-input", inputProps?.className], styles.input);
  const reveal = rs(["rs-reveal", valid && "rs-reveal-in"], styles.reveal, valid && styles.revealIn);
  const btn = rs(["rs-btn-primary", "rs-inline-btn", "rs-inline-field-btn"], styles.btn);
  const ok = rs(["rs-subscribed"], styles.subscribed);
  const error = rs(["rs-inline-error"], styles.error);
  return /*#__PURE__*/_jsx("form", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    },
    "aria-busy": pending || undefined,
    onSubmit: async e => {
      e.preventDefault();
      if (!valid || submitting.current) return;
      if (!onSubmit) {
        setState("error");
        return;
      }
      submitting.current = true;
      setState("pending");
      try {
        await onSubmit(value);
        setState("success");
      } catch {
        setState("error");
      } finally {
        submitting.current = false;
      }
    },
    children: state === "success" ? /*#__PURE__*/_jsxs("div", {
      role: "status",
      className: ok.className,
      style: ok.style,
      children: [/*#__PURE__*/_jsx(Icon, {
        name: "check",
        size: 16
      }), successLabel]
    }) : /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsx("input", {
        ...inputProps,
        className: input.className,
        style: {
          ...input.style,
          ...inputProps?.style
        },
        placeholder: placeholder,
        "aria-label": inputProps?.["aria-label"] ?? placeholder,
        "aria-describedby": [inputProps?.["aria-describedby"], state === "error" ? errorId : undefined].filter(Boolean).join(" ") || undefined,
        value: value,
        disabled: pending || inputProps?.disabled,
        onChange: e => {
          inputProps?.onChange?.(e);
          if (e.defaultPrevented) return;
          if (controlledValue === undefined) setInner(e.target.value);
          onValueChange?.(e.target.value);
          if (state === "error") setState("idle");
        }
      }), /*#__PURE__*/_jsx("span", {
        className: reveal.className,
        style: reveal.style,
        children: /*#__PURE__*/_jsx("button", {
          type: "submit",
          className: btn.className,
          style: btn.style,
          disabled: !valid || pending || inputProps?.disabled,
          tabIndex: valid ? 0 : -1,
          children: pending ? pendingLabel : buttonLabel
        })
      }), state === "error" && /*#__PURE__*/_jsx("p", {
        id: errorId,
        role: "alert",
        className: error.className,
        style: error.style,
        children: errorLabel
      })]
    })
  });
});
//# sourceMappingURL=inline-form.js.map
