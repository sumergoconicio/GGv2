"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
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
  area: {
    kB7OPa: "x9f619",
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
    kLWn49: "xfrs9s4",
    k8WAf4: "x18g2hj5 x93xex7",
    kg3NbH: "xvpgqt4 x507p67",
    kMeerF: "x1k57tk5 x784prv",
    k3XXqK: "x1t137rt x9v5kkp",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    kMv6JI: "xjb2p0i",
    kAzted: "x1xkfc13 x1gplzjs",
    kHenm0: "x288g5",
    kzqmXN: "xh8yej3",
    kEn3bw: "xnxeanp",
    kTvcWW: "x1tzf74q",
    kPNmE7: "x1frusz9",
    kEKVq3: "x1o8irxk",
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
  }
};
export const Textarea = /*#__PURE__*/React.forwardRef(function Textarea({
  label,
  feedback,
  className,
  style,
  id,
  ...props
}, ref) {
  const autoId = React.useId();
  const areaId = id ?? autoId;
  const field = useFieldControl(props);
  const invalid = field.invalid;
  const stack = rs(["rs-field", "rs-textarea-field"], styles.field);
  const lab = rs(["rs-field-label", "rs-textarea-label"], styles.label);
  const sx = rs(["rs-textarea", invalid && "rs-textarea-invalid", className], styles.area, invalid && styles.invalid);
  const fb = rs(["rs-feedback", "rs-textarea-feedback"], styles.feedback);
  return /*#__PURE__*/_jsxs("div", {
    className: stack.className,
    style: stack.style,
    children: [label != null && /*#__PURE__*/_jsx("label", {
      className: lab.className,
      style: lab.style,
      htmlFor: areaId,
      children: label
    }), /*#__PURE__*/_jsx("textarea", {
      ref: ref,
      id: areaId,
      ...props,
      "aria-describedby": field["aria-describedby"],
      "aria-invalid": field["aria-invalid"],
      className: sx.className,
      style: {
        ...sx.style,
        ...style
      }
    }), feedback != null && /*#__PURE__*/_jsx("span", {
      className: fb.className,
      style: fb.style,
      children: feedback
    })]
  });
});
//# sourceMappingURL=textarea.js.map
