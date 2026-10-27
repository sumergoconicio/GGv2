import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../../tokens.js";
import { vlak } from "../../tokens.js";
import { rs } from "../../rs.js";
import { ChartField, ChartLegend, ChartLegendItem, ChartTitle, SrTable, chartStyles, defaultFormat } from "./frame.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  donut: {
    k1xSpc: "x1lliihq",
    $$css: true
  },
  track: {
    kDwRjp: "xbh8q5q",
    kjVXCG: "xzb9byy",
    kfJifR: "xnpr05h",
    $$css: true
  },
  value: {
    kDwRjp: "xbh8q5q",
    kjVXCG: "x1re16or",
    kfJifR: "xnpr05h",
    kU5bRw: "x5lxx2x",
    $$css: true
  },
  label: {
    kDwRjp: "x1azjd6u",
    kGuDYH: "x1603h9y",
    k63SB2: "xk50ysn",
    kb6lSQ: "x1b4dsll",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  caption: {
    kDwRjp: "x1utz8zh",
    kGuDYH: "x12lo8hy",
    k63SB2: "xk50ysn",
    kb6lSQ: "x1dgsrnt",
    $$css: true
  },
  share: {
    k1xSpc: "x78zum5",
    kZKoxP: "x164u9eo",
    kzqmXN: "xh8yej3",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kaIpWk: "x2u8bby",
    kGVxlE: "x1gnnqk1",
    $$css: true
  },
  seg: {
    kZKoxP: "x5yr21d",
    kaIpWk: "x2u8bby",
    kWkggS: "xmgn9m6 xdtlio5 x1einta",
    kmkexE: "xreetu0",
    $$css: true
  },
  segSpot: {
    kWkggS: "x1g2k83w",
    $$css: true
  }
};
export const Donut = /*#__PURE__*/React.forwardRef(function Donut({
  value,
  max = 100,
  size = 184,
  label,
  unit,
  valueFormat,
  className,
  spot,
  locale,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  ...props
}, ref) {
  const valid = Number.isFinite(value) && Number.isFinite(max) && max > 0 && value >= 0;
  const format = valueFormat ?? (v => `${Math.round(v / max * 100)}%`);
  const pct = valid ? Math.max(0, Math.min(1, value / max)) : 0;
  const caption = typeof label === "string" ? label : undefined;
  const ids = React.useId();
  const valueId = `${ids}-value`;
  const captionId = `${ids}-caption`;
  const titleId = `${ids}-title`;
  const c = size / 2;
  const r = size * 0.375;
  const circumference = 2 * Math.PI * r;
  const shown = valid ? `${format(value)}${unit ? ` ${unit}` : ""}` : "No data";
  const svg = rs(["rs-chart-plot", "rs-chart-donut"], chartStyles.svg, chartStyles.plot, styles.donut);
  const track = rs(["rs-chart-donut-track"], styles.track);
  const valueSx = rs(["rs-chart-donut-value"], styles.value);
  const labelSx = rs(["rs-chart-donut-label"], styles.label);
  const captionSx = rs(["rs-chart-donut-caption"], styles.caption);
  const name = ariaLabelledBy ? {
    "aria-labelledby": ariaLabelledBy
  } : ariaLabel ? {
    "aria-label": ariaLabel
  } : {
    "aria-labelledby": [caption ? captionId : label ? titleId : null, valueId].filter(Boolean).join(" ")
  };
  return /*#__PURE__*/_jsxs(ChartField, {
    ref: ref,
    spot: spot,
    className: className ? `rs-chart-donut-wrap ${className}` : "rs-chart-donut-wrap",
    ...props,
    children: [/*#__PURE__*/_jsxs("svg", {
      className: svg.className,
      style: svg.style,
      width: size,
      height: size,
      viewBox: `0 0 ${size} ${size}`,
      role: "img",
      ...name,
      children: [/*#__PURE__*/_jsx("circle", {
        className: track.className,
        style: track.style,
        cx: c,
        cy: c,
        r: r
      }), /*#__PURE__*/_jsx("circle", {
        className: valueSx.className,
        style: valueSx.style,
        cx: c,
        cy: c,
        r: r,
        strokeDasharray: `${pct * circumference} ${circumference}`,
        transform: `rotate(-90 ${c} ${c})`
      }), /*#__PURE__*/_jsx("text", {
        id: valueId,
        className: labelSx.className,
        style: labelSx.style,
        x: c,
        y: caption ? c - 3 : c + 7,
        textAnchor: "middle",
        children: shown
      }), caption && /*#__PURE__*/_jsx("text", {
        id: captionId,
        className: captionSx.className,
        style: captionSx.style,
        x: c,
        y: c + 16,
        textAnchor: "middle",
        children: caption
      })]
    }), label && !caption ? /*#__PURE__*/_jsx(ChartTitle, {
      id: titleId,
      children: label
    }) : null, /*#__PURE__*/_jsx(SrTable, {
      caption: caption ?? "Donut",
      labels: [caption ?? "Value"],
      series: [{
        name: unit ?? "Value",
        values: [defaultFormat(value, undefined, locale)]
      }, {
        name: "Of",
        values: [defaultFormat(max, undefined, locale)]
      }, {
        name: "Share",
        values: [valid ? `${Math.round(pct * 100)}%` : "No data"]
      }]
    })]
  });
});
export const Share = /*#__PURE__*/React.forwardRef(function Share({
  slices: inputSlices,
  unit,
  valueFormat,
  className,
  spot,
  locale,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  ...props
}, ref) {
  const slices = inputSlices.filter(slice => Number.isFinite(slice.value) && slice.value >= 0);
  const format = valueFormat ?? (v => defaultFormat(v, unit, locale));
  const total = slices.reduce((s, x) => s + x.value, 0) || 1;
  const percent = v => `${defaultFormat(v / total * 100, undefined, locale)}%`;
  const share = rs(["rs-chart-share"], styles.share);
  const name = ariaLabelledBy ? {
    "aria-labelledby": ariaLabelledBy
  } : {
    "aria-label": ariaLabel ?? `Share: ${slices.map(s => `${s.label} ${percent(s.value)}`).join(", ")}`
  };
  return /*#__PURE__*/_jsxs(ChartField, {
    ref: ref,
    spot: spot,
    className: className,
    ...props,
    children: [!slices.some(slice => slice.value > 0) && /*#__PURE__*/_jsx("p", {
      role: "status",
      children: "No data to display"
    }), /*#__PURE__*/_jsx("div", {
      className: share.className,
      style: share.style,
      role: "img",
      ...name,
      children: slices.map((s, i) => {
        const seg = rs(["rs-chart-share-seg", i === 0 && "rs-chart-share-seg-spot"], styles.seg, i === 0 && styles.segSpot);
        return /*#__PURE__*/_jsx("div", {
          className: seg.className,
          style: {
            ...seg.style,
            flex: `${s.value} 1 0`
          },
          title: `${s.label} ${format(s.value)}`
        }, s.label);
      })
    }), /*#__PURE__*/_jsx(ChartLegend, {
      "aria-hidden": "true",
      children: slices.map(s => /*#__PURE__*/_jsxs(ChartLegendItem, {
        children: [s.label, " ", percent(s.value)]
      }, s.label))
    }), /*#__PURE__*/_jsx(SrTable, {
      caption: "Share",
      labels: slices.map(s => s.label),
      series: [{
        name: unit ?? "Value",
        values: slices.map(s => format(s.value))
      }, {
        name: "Share",
        values: slices.map(s => percent(s.value))
      }]
    })]
  });
});
//# sourceMappingURL=donut.js.map
