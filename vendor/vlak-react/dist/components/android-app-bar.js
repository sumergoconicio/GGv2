"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  bar: {
    kB7OPa: "x9f619",
    k1xSpc: "xrvj5dj",
    kumcoG: "xx9t13c",
    kGNEyG: "x6s0dn4",
    k1C7PZ: "xfex06f",
    kAzted: "x8nclml",
    kg3NbH: "x1hr3lfm",
    k8WAf4: "x1vvogim",
    kWkggS: "xhpg8l3",
    kMwMTN: "x1gney9c",
    kMv6JI: "x168gdka",
    $$css: true
  },
  medium: {
    kAzted: "x6lgdlw",
    kGNEyG: "x7a106z",
    khm7nJ: "x3pnbk8",
    $$css: true
  },
  title: {
    kbNqZ1: "x1ms6mhf",
    k7Eaqz: "xeuugli",
    kogj98: "x1ghz6dp",
    kGuDYH: "x1i1m3gp",
    k63SB2: "xk50ysn",
    kLWn49: "xwn7fz2",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  leadingTitle: {
    kBCFzs: "x1oibge4",
    $$css: true
  },
  mediumTitle: {
    kBCFzs: "x1osaytk",
    kbNqZ1: "x7sv70a",
    kGuDYH: "xneq65o",
    kGO01o: "xwib8y2",
    $$css: true
  },
  navigation: {
    kBCFzs: "xgkxs2y",
    kbNqZ1: "x1ms6mhf",
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kAzted: "x1wxaq2x",
    $$css: true
  },
  actions: {
    kBCFzs: "x1k3v4rp",
    kbNqZ1: "x1ms6mhf",
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kwnvtZ: "x1a02dak",
    kjj79g: "x7v6yn8",
    kOIVth: "x1jnr06f",
    $$css: true
  },
  action: {
    kysU6D: "xjyslct",
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kmuXW: "x2lah0s",
    kzqmXN: "x1useyqa",
    kZKoxP: "xsdox4t",
    kmVPX3: "xc7ga6q",
    kMzoRj: "xc342km",
    kaIpWk: "x16rqkct",
    kMwMTN: "x1gney9c",
    kWkggS: "xjbqb8w xqol87o",
    kkrTdU: "x1ypdohk x1s07b3s",
    kSiTet: "x1hc1fzr x1t5pwa4",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x14tvtkk",
    kInvED: "x1hl8ikr",
    $$css: true
  }
};
export const AndroidAppBar = /*#__PURE__*/React.forwardRef(function AndroidAppBar({
  title,
  navigation,
  actions,
  variant = "small",
  className,
  style,
  children,
  ...props
}, ref) {
  const medium = variant === "medium";
  const sx = rs(["rs-android-app-bar", medium && "rs-android-app-bar-medium", className], styles.bar, medium && styles.medium);
  const nav = rs(["rs-android-app-bar-navigation"], styles.navigation);
  const heading = rs(["rs-android-app-bar-title", !navigation && !medium && "rs-android-app-bar-leading-title", medium && "rs-android-app-bar-medium-title"], styles.title, !navigation && !medium && styles.leadingTitle, medium && styles.mediumTitle);
  const action = rs(["rs-android-app-bar-actions"], styles.actions);
  return /*#__PURE__*/_jsxs("header", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("div", {
      ...nav,
      children: navigation
    }), /*#__PURE__*/_jsx("h2", {
      ...heading,
      children: title
    }), /*#__PURE__*/_jsx("div", {
      ...action,
      children: actions
    }), children]
  });
});
export const AndroidAppBarAction = /*#__PURE__*/React.forwardRef(function AndroidAppBarAction({
  className,
  style,
  type = "button",
  ...props
}, ref) {
  const sx = rs(["rs-android-app-bar-action", className], styles.action);
  return /*#__PURE__*/_jsx("button", {
    ref: ref,
    type: type,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
//# sourceMappingURL=android-app-bar.js.map
