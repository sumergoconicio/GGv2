"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { Slider } from "./slider.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k7Eaqz: "xeuugli",
    kzqmXN: "xh8yej3",
    kMwMTN: "x1gney9c",
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kOIVth: "x13z6uf9",
    $$css: true
  },
  stage: {
    kVAEAm: "x1n2onr6",
    kAzted: "x1wszdd",
    kZKoxP: "x1sh0tsm",
    kaIpWk: "xkrxur",
    krA4I7: "x16gxa91",
    kXImzq: "x14xc8xn",
    kpj6Ty: "xjgatwd",
    kfQpEX: "x1fanpfn",
    $$css: true
  },
  plot: {
    k1xSpc: "x1lliihq",
    kzqmXN: "xh8yej3",
    kZKoxP: "x5yr21d",
    kVQacm: "x1rea2x4",
    $$css: true
  },
  bar: {
    kDwRjp: "x1utz8zh",
    $$css: true
  },
  played: {
    kDwRjp: "x1azjd6u",
    $$css: true
  },
  input: {
    kVAEAm: "x10l6tqk",
    kpwlN0: "x10a8y8t",
    kzqmXN: "xh8yej3",
    kZKoxP: "x5yr21d",
    kogj98: "x1ghz6dp",
    kSiTet: "xg01cxk",
    kkrTdU: "x1ypdohk",
    $$css: true
  },
  region: {
    kVAEAm: "x10l6tqk",
    k87sOh: "x13vifvy",
    krVfgx: "x1ey2m1c",
    kWkggS: "x6583kg",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd",
    kfzvcC: "x47corl",
    $$css: true
  },
  regionControls: {
    k1xSpc: "xrvj5dj",
    kumcoG: "xnby9oq",
    kOIVth: "x8fetqu",
    $$css: true
  },
  label: {
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    kLWn49: "xfrs9s4",
    $$css: true
  }
};

/** A waveform from supplied amplitude data, optionally scrubbed through a native range. */
export const Waveform = /*#__PURE__*/React.forwardRef(function Waveform({
  samples,
  label,
  value,
  defaultValue = 0,
  onValueChange,
  disabled = false,
  region,
  defaultRegion = {
    start: 0,
    end: 1
  },
  onRegionChange,
  className,
  style,
  ...props
}, ref) {
  const [inner, setInner] = React.useState(defaultValue);
  const position = Math.max(0, Math.min(1, Number.isFinite(value ?? inner) ? value ?? inner : 0));
  const [innerRegion, setInnerRegion] = React.useState(defaultRegion);
  const rawRegion = region ?? innerRegion;
  const start = Math.max(0, Math.min(1, Number.isFinite(rawRegion.start) ? rawRegion.start : 0));
  const end = Math.max(start, Math.min(1, Number.isFinite(rawRegion.end) ? rawRegion.end : 1));
  const changeRegion = next => {
    if (region === undefined) setInnerRegion(next);
    onRegionChange?.(next);
  };
  // Bound the SVG cost while retaining peak energy when input comes from a long recording.
  const peaks = React.useMemo(() => {
    const stride = Math.max(1, Math.ceil(samples.length / 240));
    return Array.from({
      length: Math.ceil(samples.length / stride)
    }, (_, index) => {
      let peak = 0;
      for (let at = index * stride; at < Math.min(samples.length, (index + 1) * stride); at++) peak = Math.max(peak, Number.isFinite(samples[at]) ? Math.abs(samples[at]) : 0);
      return Math.min(1, peak);
    });
  }, [samples]);
  const root = rs(["rs-waveform", className], styles.root);
  const stage = rs(["rs-waveform-stage"], styles.stage);
  const plot = rs(["rs-waveform-plot"], styles.plot);
  const input = rs(["rs-waveform-input"], styles.input);
  const regionStyle = rs(["rs-waveform-region"], styles.region);
  const regionControls = rs(["rs-waveform-region-controls"], styles.regionControls);
  const regionLabel = rs(["rs-waveform-label"], styles.label);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsxs("div", {
      ...stage,
      children: [(region || onRegionChange) && /*#__PURE__*/_jsx("span", {
        ...regionStyle,
        "aria-hidden": "true",
        style: {
          ...regionStyle.style,
          insetInlineStart: `${start * 100}%`,
          width: `${(end - start) * 100}%`
        }
      }), /*#__PURE__*/_jsx("svg", {
        ...plot,
        viewBox: `0 0 ${Math.max(4, peaks.length * 4)} 48`,
        preserveAspectRatio: "none",
        role: onValueChange ? undefined : "img",
        "aria-label": onValueChange ? undefined : label,
        "aria-hidden": onValueChange ? true : undefined,
        children: peaks.map((peak, index) => {
          const bar = rs(["rs-waveform-bar", index / Math.max(1, peaks.length) < position && "rs-waveform-played"], styles.bar, index / Math.max(1, peaks.length) < position && styles.played);
          const height = Math.max(1, peak * 44);
          return /*#__PURE__*/_jsx("rect", {
            ...bar,
            x: index * 4,
            y: (48 - height) / 2,
            width: 2,
            height: height
          }, index);
        })
      }), onValueChange && /*#__PURE__*/_jsx("input", {
        ...input,
        type: "range",
        min: 0,
        max: 1,
        step: 0.001,
        value: position,
        disabled: disabled || peaks.length === 0,
        "aria-label": label,
        "aria-valuetext": `${Math.round(position * 100)} percent`,
        onChange: event => {
          const next = Number(event.target.value);
          if (value === undefined) setInner(next);
          onValueChange(next);
        }
      })]
    }), onRegionChange && /*#__PURE__*/_jsxs("div", {
      ...regionControls,
      children: [/*#__PURE__*/_jsxs("label", {
        ...regionLabel,
        children: ["Selection start \xB7 ", Math.round(start * 100), "%", /*#__PURE__*/_jsx(Slider, {
          min: 0,
          max: end || 0.001,
          step: 0.001,
          value: start,
          disabled: disabled || peaks.length === 0,
          "aria-label": "Selection start",
          "aria-valuetext": `${Math.round(start * 100)} percent`,
          onValueChange: next => changeRegion({
            start: Math.min(next, end),
            end
          })
        })]
      }), /*#__PURE__*/_jsxs("label", {
        ...regionLabel,
        children: ["Selection end \xB7 ", Math.round(end * 100), "%", /*#__PURE__*/_jsx(Slider, {
          min: start,
          max: 1,
          step: 0.001,
          value: end,
          disabled: disabled || peaks.length === 0,
          "aria-label": "Selection end",
          "aria-valuetext": `${Math.round(end * 100)} percent`,
          onValueChange: next => changeRegion({
            start,
            end: Math.max(start, next)
          })
        })]
      })]
    })]
  });
});
//# sourceMappingURL=waveform.js.map
