"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useMergedRefs } from "../merge-refs.js";
import { useInputValue } from "../use-input-value.js";
import { Button } from "./button.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    k7Eaqz: "xeuugli",
    kMzoRj: "xc342km",
    kmVPX3: "x1717udv",
    kogj98: "x1ghz6dp",
    $$css: true
  },
  legend: {
    kmVPX3: "x1717udv",
    k1K539: "xhbfen4",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x4ro2ui",
    $$css: true
  },
  choices: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    $$css: true
  },
  choice: {
    kVAEAm: "x1n2onr6",
    k1xSpc: "xwz0xwf",
    kgQiWS: "x1ku5rj1",
    kzqmXN: "x1uyfxw7",
    kZKoxP: "x9ve8r1",
    kmuXW: "x2lah0s",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd",
    kaIpWk: "xkrxur",
    kB7OPa: "x9f619",
    kMwMTN: "x1gney9c",
    kWkggS: "xhpg8l3",
    kGuDYH: "x1jq7itm",
    kcqcaj: "xss6m8b",
    kkrTdU: "x1ypdohk",
    kMeerF: "x16gxa91",
    k3XXqK: "x14xc8xn",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  selected: {
    kWkggS: "xmgn9m6 xf7h6k7",
    kMwMTN: "x19rmm7l x1pljmm8",
    $$css: true
  },
  input: {
    kVAEAm: "x10l6tqk",
    kpwlN0: "x1jz8bvi",
    kzqmXN: "x9s46ru",
    kZKoxP: "x1c0ccdx",
    kSiTet: "xg01cxk",
    kogj98: "x1ghz6dp",
    kkrTdU: "xmper1u",
    $$css: true
  },
  clear: {
    kzqmXN: "x14atkfc",
    kFhvOy: "x1lqcxt8",
    $$css: true
  }
};

/** A discrete score using native radios; zero means no rating. */
export const Rating = /*#__PURE__*/React.forwardRef(function Rating({
  value,
  defaultValue = 0,
  onValueChange,
  max = 5,
  label = "Rating",
  getLabel = (score, total) => `${score} of ${total}`,
  clearable = true,
  clearLabel = "Clear rating",
  required,
  name,
  disabled,
  className,
  style,
  ...props
}, ref) {
  const [current, setValue, fieldRef] = useInputValue(value, defaultValue, onValueChange);
  const mergedRef = useMergedRefs(ref, fieldRef);
  const autoName = React.useId();
  const count = Math.max(1, Math.min(10, Math.floor(max) || 5));
  const root = rs(["rs-rating", className], styles.root);
  const legend = rs(["rs-rating-legend"], styles.legend);
  const choices = rs(["rs-rating-choices"], styles.choices);
  const input = rs(["rs-rating-input"], styles.input);
  const clear = rs(["rs-rating-clear"], styles.clear);
  return /*#__PURE__*/_jsxs("fieldset", {
    ...props,
    ref: mergedRef,
    disabled: disabled,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("legend", {
      className: legend.className,
      style: legend.style,
      children: label
    }), /*#__PURE__*/_jsx("div", {
      className: choices.className,
      style: choices.style,
      children: Array.from({
        length: count
      }, (_, index) => {
        const score = index + 1;
        const selected = current === score;
        const choice = rs(["rs-rating-choice", selected && "rs-rating-selected"], styles.choice, selected && styles.selected);
        return /*#__PURE__*/_jsxs("label", {
          className: choice.className,
          style: choice.style,
          children: [/*#__PURE__*/_jsx("span", {
            "aria-hidden": "true",
            children: score
          }), /*#__PURE__*/_jsx("input", {
            type: "radio",
            name: name ?? autoName,
            value: score,
            checked: selected,
            disabled: disabled,
            required: required,
            "aria-label": getLabel(score, count),
            className: input.className,
            style: input.style,
            onChange: () => setValue(score)
          })]
        }, score);
      })
    }), clearable && /*#__PURE__*/_jsx(Button, {
      variant: "ghost",
      disabled: disabled || current === 0,
      className: clear.className,
      style: clear.style,
      onClick: () => setValue(0),
      children: clearLabel
    })]
  });
});
//# sourceMappingURL=rating.js.map
