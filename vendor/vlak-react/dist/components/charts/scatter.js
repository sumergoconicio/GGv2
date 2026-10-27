"use client";

import * as React from "react";
import { ChartCanvas, ChartField, ChartHead, ChartLegend, ChartLegendItem, ChartTip, ChartTitle, LegendSwatch, PLOT, SrTable, chartStyles, defaultFormat, describePlot, plotName, plotProps, scatterMark, stepCursor, ticksBetween, useChartWidth } from "./frame.js";
import { rs } from "../../rs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function extent(values, pad = 0.08) {
  if (!values.length) return [0, 1];
  const lo = Math.min(...values);
  const hi = Math.max(...values);
  const span = hi - lo || 1;
  return [lo - span * pad, hi + span * pad];
}
export const ScatterChart = /*#__PURE__*/React.forwardRef(function ScatterChart({
  points: inputPoints,
  height = 204,
  unit,
  xLabel,
  yLabel,
  xDomain,
  yDomain,
  grid = true,
  ticks = 4,
  annotations = [],
  valueFormat,
  className,
  spot,
  locale,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  ...props
}, ref) {
  const points = inputPoints.filter(point => Number.isFinite(point.x) && Number.isFinite(point.y));
  const format = valueFormat ?? (v => defaultFormat(v, undefined, locale));
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
  const xs = points.map(p => p.x);
  const ys = points.map(p => p.y);
  const safeDomain = (domain, fallback) => domain?.every(Number.isFinite) && domain[0] !== domain[1] ? [Math.min(...domain), Math.max(...domain)] : fallback;
  const [xMin, xMax] = safeDomain(xDomain, extent(xs));
  const [yMin, yMax] = safeDomain(yDomain, extent(ys));
  const yTicks = ticksBetween(yMin, yMax, ticks);
  const xTicks = ticksBetween(xMin, xMax, ticks);
  const toX = x => ML + (x - xMin) / (xMax - xMin || 1) * plotW;
  const toY = y => MT + plotH - (y - yMin) / (yMax - yMin || 1) * plotH;
  const groups = [...new Set(points.map(p => p.group).filter(Boolean))];
  const active = hover != null ? points[hover] : null;
  const svg = rs(["rs-chart-svg"], chartStyles.svg);
  const plot = rs(["rs-chart-plot"], chartStyles.plot);
  const gridSx = rs(["rs-chart-grid"], chartStyles.grid);
  const axis = rs(["rs-chart-axis"], chartStyles.axis);
  const baseline = rs(["rs-chart-baseline"], chartStyles.baseline);
  const cursor = rs(["rs-chart-cursor"], chartStyles.cursor);
  const ann = rs(["rs-chart-ann"], chartStyles.ann);
  const mark = scatterMark(Boolean(spot));
  const name = plotName({
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy
  }, yLabel ? titleId : undefined, describePlot("Scatter chart", [xLabel ?? `${points.length} points`, ...(yLabel ? [yLabel] : [])], unit));
  const a11y = plotProps(name, key => {
    const next = stepCursor(key, hover, points.length);
    if (next === undefined) return false;
    setHover(next);
    return true;
  }, () => setHover(null));
  return /*#__PURE__*/_jsxs(ChartField, {
    ref: ref,
    spot: spot,
    className: className,
    ...props,
    children: [!points.length && /*#__PURE__*/_jsx("p", {
      role: "status",
      children: "No data to display"
    }), (yLabel || xLabel) && /*#__PURE__*/_jsxs(ChartHead, {
      children: [yLabel ? /*#__PURE__*/_jsx(ChartTitle, {
        id: titleId,
        children: yLabel
      }) : /*#__PURE__*/_jsx("span", {}), xLabel ? /*#__PURE__*/_jsx(ChartTitle, {
        children: xLabel
      }) : null]
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
          children: [grid && yTicks.map(t => /*#__PURE__*/_jsxs("g", {
            children: [/*#__PURE__*/_jsx("line", {
              className: gridSx.className,
              style: gridSx.style,
              x1: ML,
              x2: W - MR,
              y1: toY(t),
              y2: toY(t)
            }), /*#__PURE__*/_jsx("text", {
              className: axis.className,
              style: axis.style,
              x: ML - 6,
              y: toY(t) + 3.5,
              textAnchor: "end",
              children: format(t)
            })]
          }, `yg-${t}`)), grid && xTicks.map(t => /*#__PURE__*/_jsx("line", {
            className: gridSx.className,
            style: gridSx.style,
            x1: toX(t),
            x2: toX(t),
            y1: MT,
            y2: MT + plotH
          }, `xg-${t}`)), /*#__PURE__*/_jsx("line", {
            className: baseline.className,
            style: baseline.style,
            x1: ML,
            x2: ML,
            y1: MT,
            y2: MT + plotH
          }), /*#__PURE__*/_jsx("line", {
            className: baseline.className,
            style: baseline.style,
            x1: ML,
            x2: W - MR,
            y1: MT + plotH,
            y2: MT + plotH
          }), xTicks.map(t => /*#__PURE__*/_jsx("text", {
            className: axis.className,
            style: axis.style,
            x: toX(t),
            y: height - 4,
            textAnchor: "middle",
            children: format(t)
          }, `xl-${t}`)), annotations.map(a => /*#__PURE__*/_jsxs("g", {
            children: [/*#__PURE__*/_jsx("line", {
              className: cursor.className,
              style: cursor.style,
              x1: toX(a.at),
              x2: toX(a.at),
              y1: MT,
              y2: MT + plotH
            }), /*#__PURE__*/_jsx("text", {
              className: ann.className,
              style: ann.style,
              x: toX(a.at) + 4,
              y: MT + 10,
              children: a.label
            })]
          }, `${a.at}-${a.label}`)), points.map((p, i) => /*#__PURE__*/_jsx("circle", {
            className: mark.className,
            style: mark.style,
            cx: toX(p.x),
            cy: toY(p.y),
            r: hover === i ? 3.5 : 2.25,
            onPointerEnter: () => setHover(i),
            onPointerLeave: () => setHover(null)
          }, i))]
        })
      }), active && /*#__PURE__*/_jsx(ChartTip, {
        left: toX(active.x),
        top: toY(active.y),
        label: active.label ?? `${format(active.x)} · ${format(active.y)}`,
        rows: [{
          name: active.group,
          value: format(active.y)
        }]
      })]
    }), (groups.length > 0 || unit) && /*#__PURE__*/_jsxs(ChartLegend, {
      "aria-hidden": "true",
      children: [groups.map(g => /*#__PURE__*/_jsxs(ChartLegendItem, {
        children: [/*#__PURE__*/_jsx(LegendSwatch, {
          seriesIndex: 0,
          spot: Boolean(spot)
        }), g]
      }, g)), unit ? /*#__PURE__*/_jsx(ChartLegendItem, {
        children: unit
      }) : null]
    }), /*#__PURE__*/_jsx(SrTable, {
      caption: yLabel ?? "Scatter data",
      labels: points.map(p => p.label ?? `${p.x}`),
      series: [{
        name: xLabel ?? "x",
        values: points.map(p => p.x)
      }, {
        name: yLabel ?? "y",
        values: points.map(p => p.y)
      }, ...(groups.length ? [{
        name: "Group",
        values: points.map(p => p.group ?? "")
      }] : [])]
    })]
  });
});
//# sourceMappingURL=scatter.js.map
