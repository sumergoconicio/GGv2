"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { cx } from "../cx.js";
import { useFieldControl } from "./field.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  field: {
    kzqmXN: "xh8yej3",
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kOIVth: "x13z6uf9",
    $$css: true
  },
  label: {
    kGuDYH: "xboafo0 x1k6fd34",
    k63SB2: "x1s688f",
    kMwMTN: "x1ixqp2s",
    kb6lSQ: "xjat59b",
    kLWn49: "x1d3mw78",
    $$css: true
  },
  input: {
    kB7OPa: "x9f619",
    kZKoxP: "x1egjz0v",
    kAzted: "xs41724",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd x53md5s",
    kaIpWk: "xkrxur x16r9t5",
    kysU6D: "xjyslct",
    k3lkva: "x1lugfcp",
    kWkggS: "x1eieebl",
    kMwMTN: "x1aj07ft",
    knGrYV: "x1a7ec33",
    kGuDYH: "xkpwil5 x1cncyzl",
    kLWn49: "x1difugr",
    kg3NbH: "x1ryrjj2 x507p67",
    k8WAf4: "xt970qd",
    kMeerF: "x1k57tk5 x784prv",
    k3XXqK: "x1t137rt x9v5kkp",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    kMv6JI: "xjb2p0i",
    kEn3bw: "xnxeanp",
    kTvcWW: "x1tzf74q",
    kPNmE7: "x1frusz9",
    kEKVq3: "x1o8irxk",
    $$css: true
  },
  grouped: {
    kMzoRj: "xc342km",
    kaIpWk: "x2u8bby",
    kZKoxP: "x5yr21d",
    kAzted: "xs41724",
    kzQI83: "x1iyjqo2",
    k7Eaqz: "xeuugli",
    kWkggS: "x1eieebl",
    kMwMTN: "x1aj07ft",
    kMeerF: "x1k57tk5 x1x65lqo",
    k3XXqK: "x1t137rt xi5y0ii",
    $$css: true
  },
  full: {
    kzqmXN: "xh8yej3",
    $$css: true
  },
  ok: {
    kVAM5u: "xli9mpl",
    $$css: true
  },
  invalid: {
    kVAM5u: "xli9mpl",
    $$css: true
  },
  feedback: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kOIVth: "x13z6uf9",
    kGuDYH: "xboafo0 xwxtnfu",
    k63SB2: "xk50ysn",
    kMwMTN: "x1ixqp2s",
    kb6lSQ: "xjat59b",
    kLWn49: "x1d3mw78",
    kogj98: "x1ghz6dp",
    kAzted: "x1aewpuf",
    $$css: true
  },
  feedbackOk: {
    kMwMTN: "x1gney9c",
    $$css: true
  },
  feedbackError: {
    kMwMTN: "x1gney9c",
    $$css: true
  }
};
export const Input = /*#__PURE__*/React.forwardRef(function Input({
  label,
  ok,
  feedback,
  hint,
  error,
  plain,
  grouped,
  className,
  style,
  id,
  ...props
}, ref) {
  const autoId = React.useId();
  const inputId = id ?? autoId;
  const stacked = !plain && !grouped;
  const hintId = stacked && hint != null ? `${inputId}-hint` : undefined;
  const errorId = stacked && error != null ? `${inputId}-error` : undefined;
  const field = useFieldControl(props);
  const invalid = field.invalid || error != null;
  const describedBy = cx(field["aria-describedby"], hintId, errorId) || undefined;
  const sx = rs(["rs-input", !grouped && "rs-input-full", ok && "rs-input-ok", invalid && "rs-input-invalid", className, grouped && "rs-input-grouped"], styles.input, !grouped && styles.full, ok && styles.ok, invalid && styles.invalid, grouped && styles.grouped);
  const control = /*#__PURE__*/_jsx("input", {
    ref: ref,
    id: inputId,
    ...props,
    "aria-describedby": describedBy,
    "aria-invalid": invalid ? true : field["aria-invalid"],
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
  if (!stacked) return control;
  const stack = rs(["rs-field", "rs-input-field"], styles.field);
  const lab = rs(["rs-field-label", "rs-input-label"], styles.label);
  const fb = rs(["rs-feedback", ok && "rs-feedback-ok"], styles.feedback, ok && styles.feedbackOk);
  const hintLine = rs(["rs-feedback"], styles.feedback);
  const errorLine = rs(["rs-feedback", "rs-feedback-error"], styles.feedback, styles.feedbackError);
  return /*#__PURE__*/_jsxs("div", {
    className: stack.className,
    style: stack.style,
    children: [label != null && /*#__PURE__*/_jsx("label", {
      className: lab.className,
      style: lab.style,
      htmlFor: inputId,
      children: label
    }), control, feedback != null && /*#__PURE__*/_jsx("span", {
      className: fb.className,
      style: fb.style,
      children: feedback
    }), hint != null && /*#__PURE__*/_jsx("span", {
      id: hintId,
      className: hintLine.className,
      style: hintLine.style,
      children: hint
    }), error != null && /*#__PURE__*/_jsx("span", {
      id: errorId,
      role: "alert",
      className: errorLine.className,
      style: errorLine.style,
      children: error
    })]
  });
});
//# sourceMappingURL=input.js.map
