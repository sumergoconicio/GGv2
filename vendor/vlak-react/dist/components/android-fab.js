"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  fab: {
    kysU6D: "xjyslct",
    kB7OPa: "x9f619",
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kOIVth: "x1v2ro7d",
    k7Eaqz: "x1jn76jz",
    kAzted: "xbktkl8",
    kmVPX3: "x6w2896",
    kMzoRj: "xmkeg23",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xli9mpl xaxtmmi",
    kaIpWk: "xgqmno8",
    kWkggS: "xmgn9m6 x1s2iubg x1awx03v",
    kMwMTN: "x19rmm7l x9dgriy",
    kMv6JI: "x168gdka",
    kGuDYH: "x1j61zf2",
    k63SB2: "xk50ysn",
    kLWn49: "x1evy7pa",
    kkrTdU: "x1ypdohk x1s07b3s",
    kSiTet: "x1hc1fzr x1t5pwa4",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x14tvtkk",
    kInvED: "x1ewu8gn",
    kmkexE: "xyc8uzx xrozb4q",
    $$css: true
  },
  extended: {
    kg3NbH: "x17qtykl",
    $$css: true
  },
  icon: {
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kmuXW: "x2lah0s",
    kzqmXN: "xvy4d1p",
    kZKoxP: "xxk0z11",
    $$css: true
  }
};
export const AndroidFab = /*#__PURE__*/React.forwardRef(function AndroidFab({
  icon,
  children,
  className,
  style,
  type = "button",
  ...props
}, ref) {
  const sx = rs(["rs-android-fab", children != null && "rs-android-fab-extended", className], styles.fab, children != null && styles.extended);
  const glyph = rs(["rs-android-fab-icon"], styles.icon);
  return /*#__PURE__*/_jsxs("button", {
    ref: ref,
    type: type,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("span", {
      ...glyph,
      "aria-hidden": "true",
      children: icon
    }), children]
  });
});
//# sourceMappingURL=android-fab.js.map
