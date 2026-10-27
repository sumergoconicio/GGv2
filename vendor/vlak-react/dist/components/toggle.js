"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx } from "react/jsx-runtime";
const styles = {
  toggle: {
    kB7OPa: "x9f619",
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kOIVth: "xpj7pl4",
    kZKoxP: "x9ve8r1 x128uv7p",
    kAzted: "xs41724",
    k7Eaqz: "xtp0tkc x1cf4flf",
    k8WAf4: "xt970qd",
    kg3NbH: "x1qhpy6z x1aulylm",
    kGuDYH: "x1dcheo9 xzwmqnn",
    k63SB2: "xk50ysn",
    kb6lSQ: "xjat59b",
    kWkggS: "xjbqb8w xlt1z8a x1oallzf x1awx03v",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd x9w6206 xtq1xqk xaxtmmi",
    kaIpWk: "xkrxur x16r9t5",
    kMwMTN: "x1ixqp2s xuodr0d x1gijmpz x9dgriy",
    kkrTdU: "x1ypdohk",
    kMv6JI: "xjb2p0i",
    kmkexE: "x1487y47 xrozb4q",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x14tvtkk",
    kInvED: "x7s97pk",
    $$css: true
  },
  pressed: {
    kWkggS: "xmgn9m6 x1qbdut0 xqau7aa xf7h6k7",
    kVAM5u: "xli9mpl x1lfrg2d xwlsq7a x19k3fcw",
    kMwMTN: "x19rmm7l x1l9nkeu x2ptlbc x1pljmm8",
    kAXs8y: "x1kzknox",
    $$css: true
  },
  subtle: {
    kWkggS: "xjbqb8w xgshogo x1oallzf x1awx03v",
    kVAM5u: "x9r1u3d x1ysm8yu xtq1xqk xaxtmmi",
    kkrTdU: "x1ypdohk x1s07b3s",
    kSiTet: "x1hc1fzr xijokvz x3dy84y",
    $$css: true
  },
  subtlePressed: {
    kWkggS: "x6583kg xlt1z8a xqau7aa xf7h6k7",
    kVAM5u: "x9r1u3d x1ysm8yu xwlsq7a x19k3fcw",
    kMwMTN: "x1gney9c xuodr0d x2ptlbc x1pljmm8",
    k63SB2: "x1s688f",
    $$css: true
  },
  group: {
    k1xSpc: "x3nfvp2 xerj2k5",
    kGNEyG: "x1qjc9v5",
    kB7OPa: "x9f619",
    kAzted: "x5fktsu",
    kzqmXN: "xvolacv",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xli9mpl xaxtmmi",
    kaIpWk: "xkrxur x16r9t5",
    kVQacm: "xb3r6kr",
    $$css: true
  },
  grouped: {
    kZKoxP: "xt7dq6l",
    kAzted: "x1wszdd",
    kzQI83: "xzezc5b",
    kMzoRj: "xc342km",
    kaIpWk: "x2u8bby",
    kogj98: "x1ghz6dp",
    kInvED: "x1bqaal",
    k2ei4v: "x14e42zd xtrgisz",
    kVhnKS: "xstzfhl x1vk4it9",
    kGJrpR: "xv5lvn5 xpbmh43",
    $$css: true
  },
  groupedOn: {
    kVAEAm: "x1n2onr6",
    kY2c9j: "x1vjfegm",
    $$css: true
  },
  groupSubtle: {
    k7Eaqz: "xeuugli",
    ks0D6T: "x193iq5w",
    kmVPX3: "x1717udv",
    kOIVth: "x1ed6fcf",
    kWkggS: "x1nzd1wa x18t4had",
    kVAM5u: "xghov5j xaxtmmi",
    $$css: true
  },
  groupedSubtle: {
    kzQI83: "x1iyjqo2",
    kmuXW: "xs83m0k",
    kCS8Yb: "xdl72j9 x1fiteza",
    k7Eaqz: "xtp0tkc x1cf4flf",
    kg3NbH: "x1ryrjj2 xr8aob",
    kaIpWk: "xkrxur x16r9t5",
    krdFHd: "x1sl6opz",
    kVL7Gh: "xitrvra",
    kfmiAY: "xzmz27n",
    kT0f0o: "x3b5fd6",
    k2ei4v: "x14e42zd xcunynz",
    kVhnKS: "xstzfhl x1h3lhlq",
    kGJrpR: "xv5lvn5 x18ule1m",
    kHjlTd: "xj0a0fe",
    khDVqt: "xeaf4i8",
    $$css: true
  }
};

/** Press switch; state lives in aria-pressed. */
export const Toggle = /*#__PURE__*/React.forwardRef(function Toggle({
  pressed,
  defaultPressed,
  onPressedChange,
  variant = "default",
  className,
  style,
  onClick,
  ...props
}, ref) {
  const [inner, setInner] = React.useState(defaultPressed ?? false);
  const isControlled = pressed !== undefined;
  const on = isControlled ? pressed : inner;
  const subtle = variant === "subtle";
  const sx = rs(["rs-toggle", className, subtle && "rs-toggle-subtle", on && "rs-toggle-pressed", subtle && on && "rs-toggle-subtle-pressed"], styles.toggle, subtle && styles.subtle, on && styles.pressed, subtle && on && styles.subtlePressed);
  return /*#__PURE__*/_jsx("button", {
    ref: ref,
    type: "button",
    "aria-pressed": on,
    onClick: e => {
      if (!isControlled) setInner(!on);
      onPressedChange?.(!on);
      onClick?.(e);
    },
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
/** One pressed at a time. */
export const ToggleGroup = /*#__PURE__*/React.forwardRef(function ToggleGroup({
  options,
  value,
  defaultValue,
  onValueChange,
  variant = "default",
  className,
  style,
  ...props
}, ref) {
  const [inner, setInner] = React.useState(defaultValue);
  const isControlled = value !== undefined;
  const current = isControlled ? value : inner;
  const subtle = variant === "subtle";
  const group = rs(["rs-toggle-group", className, subtle && "rs-toggle-group-subtle"], styles.group, subtle && styles.groupSubtle);
  const nest = {
    ["--rs-out"]: "var(--radius-sm)",
    ["--rs-gap"]: "0px",
    ["--rs-in"]: "max(0px, calc(var(--rs-out) - var(--rs-gap)))"
  };
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    role: "group",
    ...props,
    className: group.className,
    style: {
      ...group.style,
      ...nest,
      ...style
    },
    children: options.map(option => {
      const on = option.value === current;
      const btn = rs(["rs-toggle", "rs-toggle-grouped", subtle && "rs-toggle-subtle", subtle && "rs-toggle-grouped-subtle", on && "rs-toggle-pressed", subtle && on && "rs-toggle-subtle-pressed", on && "rs-toggle-grouped-on"], styles.toggle, styles.grouped, subtle && styles.subtle, subtle && styles.groupedSubtle, on && styles.pressed, subtle && on && styles.subtlePressed, on && styles.groupedOn);
      return /*#__PURE__*/_jsx("button", {
        type: "button",
        "aria-pressed": on,
        className: btn.className,
        style: btn.style,
        onClick: () => {
          if (!isControlled) setInner(option.value);
          onValueChange?.(option.value);
        },
        children: option.label
      }, option.value);
    })
  });
});
//# sourceMappingURL=toggle.js.map
