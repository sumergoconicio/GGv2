"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Icon } from "./icon.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  chip: {
    kysU6D: "xjyslct",
    kB7OPa: "x9f619",
    kVAEAm: "x1n2onr6",
    kHBbk8: "xc8icb0",
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kOIVth: "x167g77z",
    k7Eaqz: "x900493",
    kAzted: "x1wxaq2x",
    kmVPX3: "x1ff1495",
    kMzoRj: "xc342km",
    kaIpWk: "xur7f20",
    kWkggS: "xjbqb8w",
    kMwMTN: "x1gney9c",
    kMv6JI: "x168gdka",
    kGuDYH: "xif65rj",
    k63SB2: "xk50ysn",
    kLWn49: "x37zpob",
    kkrTdU: "x1ypdohk x1s07b3s",
    kSiTet: "x1hc1fzr x1t5pwa4",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x14tvtkk",
    kInvED: "x1wfwxd8",
    kgeoSG: "x1cpjm7i",
    kEoFBp: "x1hmns74",
    kxmVGU: "xy5mcqj",
    kFcpXp: "x1avpqbj",
    k5Ohv7: "xz8fyzm",
    kj4x2v: "x1fo1fc9",
    kfXFYZ: "x11k8mu7",
    kPB484: "x10278gt",
    kLkRvE: "x1flp38j xmik893",
    k2g4ti: "x5qtand x1yokzuc",
    $$css: true
  },
  selected: {
    kMwMTN: "x19rmm7l x1pljmm8",
    k63SB2: "x1s688f",
    kLkRvE: "x15r85i x1qvo3ck",
    kfXFYZ: "x18hv1z xm7chbb",
    $$css: true
  },
  icon: {
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kmuXW: "x2lah0s",
    kzqmXN: "xw4jnvo",
    kZKoxP: "x1qx5ct2",
    $$css: true
  }
};
export const AndroidChip = /*#__PURE__*/React.forwardRef(function AndroidChip({
  selected,
  defaultSelected = false,
  onSelectedChange,
  icon,
  onClick,
  className,
  style,
  children,
  type = "button",
  ...props
}, ref) {
  const [inner, setInner] = React.useState(defaultSelected);
  const current = selected ?? inner;
  const sx = rs(["rs-android-chip", current && "rs-android-chip-selected", className], styles.chip, current && styles.selected);
  const glyph = rs(["rs-android-chip-icon"], styles.icon);
  return /*#__PURE__*/_jsxs("button", {
    ref: ref,
    type: type,
    ...props,
    "aria-pressed": current,
    onClick: event => {
      onClick?.(event);
      if (!event.defaultPrevented) {
        if (selected === undefined) setInner(!current);
        onSelectedChange?.(!current);
      }
    },
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    },
    children: [(current || icon != null) && /*#__PURE__*/_jsx("span", {
      ...glyph,
      "aria-hidden": "true",
      children: current ? /*#__PURE__*/_jsx(Icon, {
        name: "check",
        size: 16
      }) : icon
    }), children]
  });
});
//# sourceMappingURL=android-chip.js.map
