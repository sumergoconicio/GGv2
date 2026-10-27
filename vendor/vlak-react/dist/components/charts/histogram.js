"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../../tokens.js";
import { vlak } from "../../tokens.js";
import { rs } from "../../rs.js";
import { ChartCanvas, ChartField, ChartHead, ChartLegend, ChartLegendItem, ChartTip, ChartTitle, PLOT, SrTable, chartStyles, defaultFormat, describePlot, niceMax, plotName, plotProps, stepCursor, ticksFor, useChartWidth } from "./frame.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  hist: {
    kDwRjp: "x1y3gg1l",
    kjVXCG: "xeutv01",
    kaIpWk: "x2u8bby",
    $$css: true
  }
};
export const Histogram = /*#__PURE__*/React.forwardRef(function Histogram({
  bins: inputBins,
  height = 204,
  unit,
  yLabel,
  grid = true,
  ticks = 4,
  valueFormat,
  className,
  spot,
  locale,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  ...props
}, ref) {
  const bins = inputBins.filter(bin => Number.isFinite(bin.count) && bin.count >= 0);
  const format = valueFormat ?? (v => defaultFormat(v, undefined, locale));
  const tip = valueFormat ?? (v => defaultFormat(v, unit, locale));
  const [hover, setHover] = React.useState(null);
  const [canvasRef, W] = useChartWidth();
  const titleId = React.useId();
  const {
    ML,
    MR,
    MT,
    MB
  } = PLOT;
  const plotW = W - ML - MR;
  const plotH = height - MT - MB;
  const max = niceMax(Math.max(...bins.map(b => b.count), 1));
  const yTicks = ticksFor(max, ticks);
  const gap = 1;
  const bw = Math.max(0, (plotW - gap * Math.max(0, bins.length - 1)) / Math.max(1, bins.length));
  const active = hover != null ? bins[hover] : null;
  const svg = rs(["rs-chart-svg"], chartStyles.svg);
  const plot = rs(["rs-chart-plot"], chartStyles.plot);
  const gridSx = rs(["rs-chart-grid"], chartStyles.grid);
  const axis = rs(["rs-chart-axis"], chartStyles.axis);
  const baseline = rs(["rs-chart-baseline"], chartStyles.baseline);
  const hist = rs(["rs-chart-hist", Boolean(spot) && "rs-chart-bar-spot"], styles.hist, Boolean(spot) && chartStyles.barSpot);
  const name = plotName({
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy
  }, yLabel ? titleId : undefined, describePlot("Histogram", [`${bins.length} bins`], unit));
  const a11y = plotProps(name, key => {
    const next = stepCursor(key, hover, bins.length);
    if (next === undefined) return false;
    setHover(next);
    return true;
  }, () => setHover(null));
  return /*#__PURE__*/_jsxs(ChartField, {
    ref: ref,
    spot: spot,
    className: className,
    ...props,
    children: [!bins.length && /*#__PURE__*/_jsx("p", {
      role: "status",
      children: "No data to display"
    }), yLabel && /*#__PURE__*/_jsx(ChartHead, {
      children: /*#__PURE__*/_jsx(ChartTitle, {
        id: titleId,
        children: yLabel
      })
    }), /*#__PURE__*/_jsxs(ChartCanvas, {
      ref: canvasRef,
      children: [/*#__PURE__*/_jsx("svg", {
        className: svg.className,
        style: svg.style,
        viewBox: `0 0 ${W} ${height}`,
        ...a11y,
        children: /*#__PURE__*/_jsxs("g", {
          className: plot.className,
          style: plot.style,
          "aria-hidden": "true",
          children: [grid && yTicks.map(t => {
            const y = MT + plotH - t / max * plotH;
            return /*#__PURE__*/_jsxs("g", {
              children: [/*#__PURE__*/_jsx("line", {
                className: gridSx.className,
                style: gridSx.style,
                x1: ML,
                x2: W - MR,
                y1: y,
                y2: y
              }), /*#__PURE__*/_jsx("text", {
                className: axis.className,
                style: axis.style,
                x: ML - 6,
                y: y + 3.5,
                textAnchor: "end",
                children: format(t)
              })]
            }, t);
          }), /*#__PURE__*/_jsx("line", {
            className: baseline.className,
            style: baseline.style,
            x1: ML,
            x2: W - MR,
            y1: MT + plotH,
            y2: MT + plotH
          }), bins.map((b, i) => {
            const h = b.count / max * plotH;
            const x = ML + i * (bw + gap);
            const y = MT + plotH - h;
            return /*#__PURE__*/_jsxs("g", {
              onPointerEnter: () => setHover(i),
              onPointerLeave: () => setHover(null),
              children: [/*#__PURE__*/_jsx("rect", {
                className: hist.className,
                style: hist.style,
                x: x,
                y: y,
                width: bw,
                height: h
              }), /*#__PURE__*/_jsx("text", {
                className: axis.className,
                style: axis.style,
                x: x + bw / 2,
                y: height - 4,
                textAnchor: "middle",
                children: b.label
              })]
            }, b.label);
          })]
        })
      }), active && /*#__PURE__*/_jsx(ChartTip, {
        left: ML + (hover ?? 0) * (bw + gap) + bw / 2,
        top: MT + plotH - active.count / max * plotH,
        label: active.label,
        rows: [{
          value: tip(active.count)
        }]
      })]
    }), unit && /*#__PURE__*/_jsx(ChartLegend, {
      "aria-hidden": "true",
      children: /*#__PURE__*/_jsx(ChartLegendItem, {
        children: unit
      })
    }), /*#__PURE__*/_jsx(SrTable, {
      caption: yLabel ?? "Histogram",
      labels: bins.map(b => b.label),
      series: [{
        name: unit ?? "Count",
        values: bins.map(b => b.count)
      }]
    })]
  });
});
//# sourceMappingURL=histogram.js.map
