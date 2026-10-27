"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useMergedRefs } from "../merge-refs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    kVAEAm: "x1n2onr6",
    k1xSpc: "x1lliihq",
    k7Eaqz: "x1nb6za0",
    kzqmXN: "xh8yej3",
    kZKoxP: "xn3w4p2",
    kaIpWk: "x13pz1uv",
    kMeerF: "x1k57tk5 x16gxa91",
    k3XXqK: "xaatb59",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  disabled: {
    kSiTet: "xyd83as",
    $$css: true
  },
  track: {
    kVAEAm: "x10l6tqk",
    k87sOh: "xjqd8mg",
    kkqhue: "x1031igc",
    kZKoxP: "xols6we",
    kaIpWk: "x18zih8k",
    kWkggS: "x6583kg x18t4had",
    kGVxlE: "x1s65914",
    kfzvcC: "x47corl",
    $$css: true
  },
  fill: {
    kVAEAm: "x10l6tqk",
    kLqNvP: "x1o0tod",
    k87sOh: "x13vifvy",
    kZKoxP: "x5yr21d",
    kaIpWk: "x18zih8k",
    kWkggS: "xmgn9m6 xf7h6k7",
    kAXs8y: "x1kzknox",
    $$css: true
  },
  thumb: {
    kVAEAm: "x10l6tqk",
    k87sOh: "x122giso",
    keTefX: "x4m0w28",
    kzqmXN: "xgd8bvy",
    kZKoxP: "xxk0z11",
    kaIpWk: "x4pepcl",
    kB7OPa: "x9f619",
    kMzoRj: "xmkeg23",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd xaxtmmi",
    kWkggS: "xhpg8l3 x18t4had",
    $$css: true
  },
  input: {
    kVAEAm: "x10l6tqk",
    kpwlN0: "x10a8y8t",
    kzqmXN: "xh8yej3",
    kZKoxP: "x5yr21d",
    kogj98: "x1ghz6dp",
    kSiTet: "xg01cxk",
    kkrTdU: "x1ypdohk x1s07b3s",
    $$css: true
  }
};
function normalize(value, min, max, step) {
  const upper = Math.max(min, max);
  const bounded = Math.max(min, Math.min(upper, Number.isFinite(value) ? value : min));
  if (step === "any") return bounded;
  const interval = Number.isFinite(step) && step > 0 ? step : 1;
  const steps = Math.min(Math.floor((upper - min) / interval + 1e-10), Math.round((bounded - min) / interval));
  return Number((min + Math.max(0, steps) * interval).toPrecision(12));
}

/** Native range keyboard and form behavior beneath the iOS pill thumb. */
export const IOSSlider = /*#__PURE__*/React.forwardRef(function IOSSlider({
  value,
  defaultValue = 50,
  min = 0,
  max = 100,
  step = 1,
  onValueChange,
  onChange,
  disabled,
  className,
  style,
  ...props
}, forwardedRef) {
  const [inner, setInner] = React.useState(defaultValue);
  const input = React.useRef(null);
  const ref = useMergedRefs(input, forwardedRef);
  const controlled = value !== undefined;
  const raw = controlled ? value : inner;
  const current = normalize(raw, min, max, step);
  const progress = max > min ? (current - min) / (max - min) * 100 : 0;
  React.useEffect(() => {
    const form = props.form ? document.getElementById(props.form) : input.current?.form;
    let mounted = true;
    const reset = event => queueMicrotask(() => {
      if (mounted && !controlled && !event.defaultPrevented) {
        if (input.current) input.current.value = String(normalize(defaultValue, min, max, step));
        setInner(defaultValue);
      }
    });
    form?.addEventListener("reset", reset);
    return () => {
      mounted = false;
      form?.removeEventListener("reset", reset);
    };
  }, [controlled, defaultValue, props.form, min, max, step]);
  const root = rs(["rs-ios-slider", disabled && "rs-ios-slider-disabled", className], styles.root, disabled && styles.disabled);
  const track = rs(["rs-ios-slider-track"], styles.track);
  const fill = rs(["rs-ios-slider-fill"], styles.fill);
  const thumb = rs(["rs-ios-slider-thumb"], styles.thumb);
  const field = rs(["rs-ios-slider-input"], styles.input);
  return /*#__PURE__*/_jsxs("div", {
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsxs("span", {
      ...track,
      "aria-hidden": "true",
      children: [/*#__PURE__*/_jsx("span", {
        className: fill.className,
        style: {
          ...fill.style,
          width: `${progress}%`
        }
      }), /*#__PURE__*/_jsx("span", {
        className: thumb.className,
        style: {
          ...thumb.style,
          insetInlineStart: `${progress}%`
        }
      })]
    }), /*#__PURE__*/_jsx("input", {
      ...props,
      ...field,
      ref: ref,
      type: "range",
      min: min,
      max: max,
      step: step,
      value: current,
      disabled: disabled,
      onChange: event => {
        onChange?.(event);
        if (event.defaultPrevented) return;
        const next = event.currentTarget.valueAsNumber;
        if (!controlled) setInner(next);
        onValueChange?.(next);
      }
    })]
  });
});
//# sourceMappingURL=ios-slider.js.map
