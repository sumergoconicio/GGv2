"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useFieldControl } from "./field.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  slider: {
    kVAEAm: "x1n2onr6",
    kZKoxP: "x36qwtl x1cqndvr",
    kWkggS: "xb223ua",
    kaIpWk: "x1nj7uno x1nw13bm",
    kqGvvJ: "x1iilh4p xv3zqas",
    kUOVxO: "xrxpjvj",
    $$css: true
  },
  fill: {
    kVAEAm: "x10l6tqk",
    kLqNvP: "x1o0tod",
    k87sOh: "x13vifvy",
    krVfgx: "x1ey2m1c",
    kWkggS: "xmgn9m6",
    kaIpWk: "x1nj7uno x1nw13bm",
    kfzvcC: "x47corl",
    $$css: true
  },
  thumb: {
    kVAEAm: "x10l6tqk",
    k87sOh: "xwa60dl",
    k3aq6I: "x11lhmoz",
    kzqmXN: "x1xvt488 x1xsp3st",
    kZKoxP: "xf08kfj x1mes0ma",
    kaIpWk: "x16rqkct xif9oh9",
    kWkggS: "xhpg8l3",
    kMzoRj: "xvndefy",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xli9mpl",
    kB7OPa: "x9f619",
    kfzvcC: "x47corl",
    $$css: true
  },
  thumbFocused: {
    kMeerF: "x1de99jn",
    k3XXqK: "xaatb59",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  range: {
    kVAEAm: "x10l6tqk",
    kLqNvP: "x1o0tod",
    kt4wiu: "xtijo5x",
    k87sOh: "x1pkcpdg x1gmzp7j",
    krVfgx: "x2fsajt x1rjm3wi",
    kzqmXN: "xh8yej3",
    kZKoxP: "xt7dq6l",
    kSiTet: "xg01cxk",
    kkrTdU: "x1ypdohk",
    kogj98: "x1ghz6dp",
    $$css: true
  }
};
function isFocusVisible(el) {
  try {
    return el.matches(":focus-visible");
  } catch {
    return true;
  }
}

/** A native range input drives the ink track. */
export const Slider = /*#__PURE__*/React.forwardRef(function Slider({
  value,
  defaultValue = 50,
  min = 0,
  max = 100,
  step = 1,
  onValueChange,
  className,
  style,
  onFocus,
  onBlur,
  ...props
}, ref) {
  const [inner, setInner] = React.useState(defaultValue);
  const [focused, setFocused] = React.useState(false);
  const isControlled = value !== undefined;
  const current = isControlled ? value : inner;
  const pct = max === min ? 0 : (current - min) / (max - min) * 100;
  const field = useFieldControl(props);
  const sx = rs(["rs-slider", className], styles.slider);
  const fill = rs(["rs-slider-fill"], styles.fill);
  const thumb = rs(["rs-slider-thumb", focused && "rs-slider-thumb-focused"], styles.thumb, focused && styles.thumbFocused);
  const range = rs(["rs-slider-range"], styles.range);
  return /*#__PURE__*/_jsxs("div", {
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("span", {
      className: fill.className,
      style: {
        ...fill.style,
        width: `${pct}%`
      }
    }), /*#__PURE__*/_jsx("input", {
      ref: ref,
      type: "range",
      min: min,
      max: max,
      step: step,
      value: current,
      className: range.className,
      style: range.style,
      onChange: e => {
        const next = Number(e.target.value);
        if (!isControlled) setInner(next);
        onValueChange?.(next);
      },
      ...props,
      "aria-describedby": field["aria-describedby"],
      "aria-invalid": field["aria-invalid"],
      onFocus: e => {
        onFocus?.(e);
        setFocused(isFocusVisible(e.currentTarget));
      },
      onBlur: e => {
        onBlur?.(e);
        setFocused(false);
      }
    }), /*#__PURE__*/_jsx("span", {
      className: thumb.className,
      style: {
        ...thumb.style,
        left: `${pct}%`
      }
    })]
  });
});
//# sourceMappingURL=slider.js.map
