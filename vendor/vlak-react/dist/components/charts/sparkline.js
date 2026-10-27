import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import { rs } from "../../rs.js";
import { CROUWEL_SPOT, SrTable, chartStyles, defaultFormat, lineMark } from "./frame.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  spark: {
    k1xSpc: "x1rg5ohu",
    kXLuUW: "xxymvpz",
    $$css: true
  },
  svg: {
    k1xSpc: "x1lliihq",
    kVQacm: "x1rea2x4",
    $$css: true
  }
};
export const Sparkline = /*#__PURE__*/React.forwardRef(function Sparkline({
  values,
  width = 120,
  height = 28,
  className,
  spot,
  style,
  label,
  unit,
  locale,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  ...props
}, ref) {
  const finite = values.filter(v => typeof v === "number" && Number.isFinite(v));
  const max = finite.length ? Math.max(...finite) : 1;
  const min = finite.length ? Math.min(...finite) : 0;
  const span = max - min || 1;
  const x = i => i / Math.max(values.length - 1, 1) * (width - 4) + 2;
  const y = v => 2 + (1 - (v - min) / span) * (height - 4);
  let penDown = false;
  const d = values.map((v, i) => {
    if (typeof v !== "number" || !Number.isFinite(v)) {
      penDown = false;
      return "";
    }
    const command = `${penDown ? "L" : "M"}${x(i)} ${y(v)}`;
    penDown = true;
    return command;
  }).join(" ");
  const last = values[values.length - 1];
  const color = spot === true ? CROUWEL_SPOT : typeof spot === "string" ? spot : undefined;
  const sx = rs(["rs-spark", className], styles.spark);
  const svg = rs(["rs-chart-svg"], styles.svg);
  const line = lineMark(0, Boolean(spot));
  const dot = rs(["rs-chart-dot"], chartStyles.dot);
  const name = ariaLabelledBy ? {
    "aria-labelledby": ariaLabelledBy
  } : {
    "aria-label": ariaLabel ?? (finite.length ? `${label ? `${label}: ` : ""}trend of ${finite.length} values ending at ${last != null ? defaultFormat(last, unit, locale) : "No data"}` : `${label ? `${label}: ` : ""}No data to display`)
  };
  return /*#__PURE__*/_jsxs("span", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style,
      ...(color ? {
        ["--rs-chart-spot"]: color
      } : null)
    },
    children: [/*#__PURE__*/_jsxs("svg", {
      className: svg.className,
      style: svg.style,
      width: width,
      height: height,
      viewBox: `0 0 ${width} ${height}`,
      role: "img",
      ...name,
      children: [finite.length > 0 && /*#__PURE__*/_jsx("path", {
        className: line.className,
        style: line.style,
        d: d
      }), last != null && Number.isFinite(last) && /*#__PURE__*/_jsx("circle", {
        className: dot.className,
        style: dot.style,
        cx: x(values.length - 1),
        cy: y(last),
        r: 2
      })]
    }), /*#__PURE__*/_jsx(SrTable, {
      caption: label ?? "Trend",
      labels: values.map((_, i) => `${i + 1}`),
      series: [{
        name: unit ?? label ?? "Value",
        values
      }]
    })]
  });
});
//# sourceMappingURL=sparkline.js.map
