"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useFieldControl } from "./field.js";
import { Icon } from "./icon.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  control: {
    kVAEAm: "x1n2onr6",
    kzqmXN: "xh8yej3",
    $$css: true
  },
  icon: {
    kVAEAm: "x10l6tqk",
    kt4wiu: "x2zvsah",
    k87sOh: "xwa60dl",
    keoZOQ: "x1bov10x",
    kMwMTN: "x1gney9c",
    kfzvcC: "x47corl",
    $$css: true
  },
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
  select: {
    kysU6D: "xjyslct",
    k3lkva: "x1lugfcp",
    kB7OPa: "x9f619",
    kZKoxP: "x1egjz0v",
    kAzted: "xs41724",
    kMv6JI: "xjb2p0i",
    kGuDYH: "xkpwil5 x1cncyzl",
    k63SB2: "xk50ysn",
    kb6lSQ: "xjat59b",
    kLWn49: "x1difugr",
    kMwMTN: "x1aj07ft",
    knGrYV: "x1a7ec33",
    kWkggS: "x1eieebl",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd x53md5s",
    kaIpWk: "xkrxur x16r9t5",
    k8WAf4: "xt970qd",
    kZCmMZ: "xd1uisr x1wc43q6",
    kwRFfy: "xctxq56 xdixexj",
    kMeerF: "x1k57tk5 x784prv",
    k3XXqK: "x1t137rt x9v5kkp",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    kzqmXN: "xh8yej3",
    $$css: true
  },
  invalid: {
    kVAM5u: "xli9mpl",
    $$css: true
  }
};

/** The platform list. Vlak chrome. */
export const NativeSelect = /*#__PURE__*/React.forwardRef(function NativeSelect({
  label,
  className,
  style,
  id,
  children,
  ...props
}, ref) {
  const autoId = React.useId();
  const selectId = id ?? autoId;
  const field = useFieldControl(props);
  const invalid = field.invalid;
  const sx = rs(["rs-native-select", invalid && "rs-native-select-invalid", className], styles.select, invalid && styles.invalid);
  const wrap = rs(["rs-native-select-control"], styles.control);
  const icon = rs(["rs-native-select-icon"], styles.icon);
  const control = /*#__PURE__*/_jsxs("div", {
    className: wrap.className,
    style: wrap.style,
    children: [/*#__PURE__*/_jsx("select", {
      ref: ref,
      id: selectId,
      ...props,
      "aria-describedby": field["aria-describedby"],
      "aria-invalid": field["aria-invalid"],
      className: sx.className,
      style: {
        ...sx.style,
        ...style
      },
      children: children
    }), /*#__PURE__*/_jsx(Icon, {
      name: "chevron-right",
      rotate: 90,
      className: icon.className,
      style: icon.style
    })]
  });
  if (label == null) return control;
  const stack = rs(["rs-field", "rs-native-select-field"], styles.field);
  const lab = rs(["rs-field-label", "rs-native-select-label"], styles.label);
  return /*#__PURE__*/_jsxs("div", {
    className: stack.className,
    style: stack.style,
    children: [/*#__PURE__*/_jsx("label", {
      className: lab.className,
      style: lab.style,
      htmlFor: selectId,
      children: label
    }), control]
  });
});
//# sourceMappingURL=native-select.js.map
