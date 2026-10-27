"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx } from "react/jsx-runtime";
const styles = {
  track: {
    k1xSpc: "x3nfvp2",
    kB7OPa: "x9f619",
    kzqmXN: "x1uyfxw7",
    kZKoxP: "x9ve8r1",
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kaIpWk: "xkrxur",
    kMzoRj: "xc342km",
    kVAEAm: "x1n2onr6",
    kmuXW: "x2lah0s",
    kmVPX3: "x1717udv",
    kWkggS: "xjbqb8w",
    kkrTdU: "x1ypdohk",
    kgeoSG: "x1cpjm7i",
    kQmYQc: "xtql2tq",
    kEoFBp: "x1hmns74",
    k96MEf: "xrykbph",
    kSJ0CW: "x1682cnc",
    kOlAkY: "x15pfgql",
    kgzTxl: "x1hl3q4b",
    kPB484: "xulqzoj",
    k5Ohv7: "x197iw8s",
    kj4x2v: "x1fo1fc9",
    kfXFYZ: "x11k8mu7 xs1pefr",
    kLkRvE: "x1p58mzm",
    k2g4ti: "x1ej7alp x1yokzuc",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x14tvtkk",
    kInvED: "x7s97pk",
    $$css: true
  },
  on: {
    kLkRvE: "x15r85i x1qvo3ck",
    kfXFYZ: "x18hv1z xm7chbb",
    kAXs8y: "x1kzknox",
    $$css: true
  },
  thumb: {
    kVAEAm: "x10l6tqk",
    k87sOh: "x1wbzoel",
    kLqNvP: "x1x3e5fe",
    kzqmXN: "x51uzbs",
    kZKoxP: "x1fz7b6p",
    kaIpWk: "x16rqkct",
    kWkggS: "xxnl87f x1p6dmh6",
    kAXs8y: "x1kzknox",
    kmkexE: "x11d4eil xrozb4q",
    $$css: true
  },
  thumbOn: {
    kWkggS: "xhpg8l3 x12t9e9r",
    kLqNvP: "x4ggvov",
    $$css: true
  }
};

/** A button with role="switch". */
export const Switch = /*#__PURE__*/React.forwardRef(function Switch({
  checked,
  defaultChecked,
  onCheckedChange,
  className,
  style,
  onClick,
  ...props
}, ref) {
  const [inner, setInner] = React.useState(defaultChecked ?? false);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : inner;
  const sx = rs(["rs-switch", on && "rs-switch-on", className], styles.track, on && styles.on);
  const knob = rs(["rs-switch-thumb", on && "rs-switch-thumb-on"], styles.thumb, on && styles.thumbOn);
  return /*#__PURE__*/_jsx("button", {
    ref: ref,
    type: "button",
    role: "switch",
    "aria-checked": on,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    },
    onClick: e => {
      if (!isControlled) setInner(!on);
      onCheckedChange?.(!on);
      onClick?.(e);
    },
    ...props,
    children: /*#__PURE__*/_jsx("i", {
      "aria-hidden": "true",
      className: knob.className,
      style: knob.style
    })
  });
});
//# sourceMappingURL=switch.js.map
