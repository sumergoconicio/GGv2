"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const styles = {
  list: {
    kB7OPa: "x9f619",
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kOIVth: "x195vfkc",
    kmVPX3: "x1717udv",
    kogj98: "x1ghz6dp",
    kH6xsr: "x3ct3a4",
    kMv6JI: "x168gdka",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  row: {
    kB7OPa: "x9f619",
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kOIVth: "x167g77z",
    kAzted: "xbktkl8",
    k7Eaqz: "xeuugli",
    kWkggS: "x6583kg",
    kaIpWk: "x12oqio5 x1qu3giw xfws1yl x75fzwh",
    $$css: true
  },
  body: {
    kB7OPa: "x9f619",
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kOIVth: "xou54vl",
    kUk6DE: "x845mor",
    k7Eaqz: "xeuugli",
    kAzted: "xbktkl8",
    kmVPX3: "xs0fqhl",
    kMzoRj: "xc342km",
    kaIpWk: "x1pjcqnp",
    kWkggS: "xjbqb8w",
    kMwMTN: "x1heor9g",
    kMv6JI: "xjb2p0i",
    kGuDYH: "x1j61zf2",
    kLWn49: "x1evy7pa",
    k9WMMc: "x1yc453h",
    $$css: true
  },
  action: {
    kysU6D: "xjyslct",
    kkrTdU: "x1ypdohk x1s07b3s",
    kWkggS: "xjbqb8w xqol87o",
    kSiTet: "x1hc1fzr x1t5pwa4",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x14tvtkk",
    kInvED: "x2ssjo2",
    $$css: true
  },
  twoLine: {
    kAzted: "x1qafhyn",
    $$css: true
  },
  threeLine: {
    kAzted: "xefclja",
    $$css: true
  },
  leading: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kmuXW: "x2lah0s",
    k7Eaqz: "xnei2rj",
    kAzted: "xjwf9q1",
    $$css: true
  },
  copy: {
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    k7Eaqz: "xeuugli",
    kOIVth: "x195vfkc",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  headline: {
    kGuDYH: "x1j61zf2",
    k63SB2: "xk50ysn",
    kLWn49: "x1evy7pa",
    $$css: true
  },
  secondary: {
    kGuDYH: "xif65rj",
    k63SB2: "xo1l8bm",
    kLWn49: "x37zpob",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  trailing: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kOIVth: "x167g77z",
    kmuXW: "x2lah0s",
    kwRFfy: "xv54qhq",
    kGuDYH: "xif65rj",
    kMwMTN: "x1gney9c",
    $$css: true
  }
};
export const AndroidList = /*#__PURE__*/React.forwardRef(function AndroidList({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-android-list", className], styles.list);
  return /*#__PURE__*/_jsx("ul", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
export const AndroidListRow = /*#__PURE__*/React.forwardRef(function AndroidListRow({
  headline,
  supportingText,
  overline,
  leading,
  trailing,
  onAction,
  disabled,
  actionProps,
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-android-list-row", className], styles.row);
  const body = rs(["rs-android-list-body", !!onAction && "rs-android-list-action", supportingText != null && "rs-android-list-two-line", overline != null && "rs-android-list-three-line"], styles.body, !!onAction && styles.action, supportingText != null && styles.twoLine, overline != null && styles.threeLine);
  const lead = rs(["rs-android-list-leading"], styles.leading);
  const copy = rs(["rs-android-list-copy"], styles.copy);
  const title = rs(["rs-android-list-headline"], styles.headline);
  const secondary = rs(["rs-android-list-secondary"], styles.secondary);
  const trail = rs(["rs-android-list-trailing"], styles.trailing);
  const content = /*#__PURE__*/_jsxs(_Fragment, {
    children: [leading != null && /*#__PURE__*/_jsx("span", {
      ...lead,
      "aria-hidden": "true",
      children: leading
    }), /*#__PURE__*/_jsxs("span", {
      ...copy,
      children: [overline != null && /*#__PURE__*/_jsx("span", {
        ...secondary,
        children: overline
      }), /*#__PURE__*/_jsx("span", {
        ...title,
        children: headline
      }), supportingText != null && /*#__PURE__*/_jsx("span", {
        ...secondary,
        children: supportingText
      })]
    })]
  });
  return /*#__PURE__*/_jsxs("li", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    },
    children: [onAction ? /*#__PURE__*/_jsx("button", {
      type: "button",
      ...actionProps,
      ...body,
      disabled: disabled,
      onClick: onAction,
      children: content
    }) : /*#__PURE__*/_jsx("div", {
      ...body,
      children: content
    }), trailing != null && /*#__PURE__*/_jsx("span", {
      ...trail,
      children: trailing
    })]
  });
});
//# sourceMappingURL=android-list.js.map
