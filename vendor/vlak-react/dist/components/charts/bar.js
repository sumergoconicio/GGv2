"use client";

import * as React from "react";
import { ChartCanvas, ChartField, ChartHead, ChartLegend, ChartLegendItem, ChartTip, ChartTitle, PLOT, SrTable, barMark, chartStyles, defaultFormat, describePlot, niceMax, plotName, plotProps, stackedRows, stepCursor, ticksBetween, useChartWidth } from "./frame.js";
import { rs } from "../../rs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const BarChart = /*#__PURE__*/React.forwardRef(function BarChart({
  data,
  series,
  labels,
  height = 204,
  orientation = "vertical",
  stacked,
  inverted,
  grid = true,
  ticks = 4,
  unit,
  yLabel,
  spot,
  valueFormat,
  locale,
  className,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  ...props
}, ref) {
  const fromData = data ? [{
    name: "Value",
    values: data.map(d => d.value)
  }] : [];
  const shown = (series ?? fromData).slice(0, 4);
  const n = Math.max(0, labels?.length ?? 0, ...shown.map(s => s.values.length));
  const tickLabels = Array.from({
    length: n
  }, (_, i) => labels?.[i] ?? data?.[i]?.label ?? `${i + 1}`);
  const stacks = stacked && shown.length > 1 ? stackedRows(shown) : null;
  const extent = (stacks ? stacks.flat() : shown.flatMap(s => s.values)).filter(v => typeof v === "number" && Number.isFinite(v));
  const min = Math.min(0, ...extent);
  const max = niceMax(Math.max(0, ...extent));
  const format = valueFormat ?? (v => defaultFormat(v, undefined, locale));
  const tip = valueFormat ?? (v => defaultFormat(v, unit, locale));
  const [hover, setHover] = React.useState(null);
  const hoverSample = hover == null ? 0 : shown[0]?.values[hover];
  const hoverValue = typeof hoverSample === "number" && Number.isFinite(hoverSample) ? hoverSample : 0;
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
  const horizontal = orientation === "horizontal";
  const band = (horizontal ? plotH : plotW) / Math.max(1, n);
  const barThick = Math.min(8, Math.max(1, band / (stacked ? 1 : shown.length || 1) - 2));
  const inset = (band - barThick) / 2;
  const yV = v => {
    const t = (v - min) / (max - min);
    return inverted ? MT + t * plotH : MT + plotH - t * plotH;
  };
  const xV = v => ML + (inverted ? 1 - (v - min) / (max - min) : (v - min) / (max - min)) * plotW;
  const tickVals = ticksBetween(min, max, ticks);
  const labelEvery = Math.ceil(n / 8);
  const svg = rs(["rs-chart-svg"], chartStyles.svg);
  const plot = rs(["rs-chart-plot"], chartStyles.plot);
  const gridSx = rs(["rs-chart-grid"], chartStyles.grid);
  const axis = rs(["rs-chart-axis"], chartStyles.axis);
  const baseline = rs(["rs-chart-baseline"], chartStyles.baseline);
  const name = plotName({
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy
  }, yLabel ? titleId : undefined, describePlot("Bar chart", shown.map(s => s.name), unit));
  const a11y = plotProps(name, key => {
    const next = stepCursor(key, hover, extent.length ? n : 0);
    if (next === undefined) return false;
    setHover(next);
    return true;
  }, () => setHover(null));
  const hoverProps = i => ({
    onPointerEnter: () => setHover(i),
    onPointerLeave: () => setHover(null)
  });
  return /*#__PURE__*/_jsxs(ChartField, {
    ref: ref,
    spot: spot,
    className: className,
    ...props,
    children: [!extent.length && /*#__PURE__*/_jsx("p", {
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
          children: [grid && tickVals.map(t => horizontal ? /*#__PURE__*/_jsxs("g", {
            children: [/*#__PURE__*/_jsx("line", {
              className: gridSx.className,
              style: gridSx.style,
              x1: xV(t),
              x2: xV(t),
              y1: MT,
              y2: height - MB
            }), /*#__PURE__*/_jsx("text", {
              className: axis.className,
              style: axis.style,
              x: xV(t),
              y: height - 4,
              textAnchor: "middle",
              children: format(t)
            })]
          }, t) : /*#__PURE__*/_jsxs("g", {
            children: [/*#__PURE__*/_jsx("line", {
              className: gridSx.className,
              style: gridSx.style,
              x1: ML,
              x2: W - MR,
              y1: yV(t),
              y2: yV(t)
            }), /*#__PURE__*/_jsx("text", {
              className: axis.className,
              style: axis.style,
              x: ML - 6,
              y: yV(t) + 3.5,
              textAnchor: "end",
              children: format(t)
            })]
          }, t)), tickLabels.map((label, i) => {
            let positive = 0;
            let negative = 0;
            return shown.map((s, si) => {
              const value = s.values[i];
              if (typeof value !== "number" || !Number.isFinite(value)) return null;
              const before = stacked ? value < 0 ? negative : positive : 0;
              if (value < 0) negative += value;else positive += value;
              const after = before + value;
              const a = horizontal ? xV(before) : yV(before);
              const b = horizontal ? xV(after) : yV(after);
              const offset = stacked ? inset : (band - shown.length * (barThick + 2)) / 2 + si * (barThick + 2);
              const mark = barMark({
                spot: Boolean(spot) && si === 0,
                muted: hover != null && hover !== i
              });
              return /*#__PURE__*/_jsx("rect", {
                ...mark,
                "data-series": s.name,
                opacity: 1 - si * 0.18,
                x: horizontal ? Math.min(a, b) : ML + i * band + offset,
                y: horizontal ? MT + i * band + offset : Math.min(a, b),
                width: horizontal ? Math.abs(b - a) : barThick,
                height: horizontal ? barThick : Math.abs(b - a),
                ...hoverProps(i)
              }, `${i}-${si}`);
            });
          }), /*#__PURE__*/_jsx("line", {
            className: baseline.className,
            style: baseline.style,
            x1: horizontal ? xV(0) : ML,
            x2: horizontal ? xV(0) : W - MR,
            y1: horizontal ? MT : yV(0),
            y2: horizontal ? height - MB : yV(0)
          }), tickLabels.map((label, i) => i % labelEvery === 0 && /*#__PURE__*/_jsx("text", {
            className: axis.className,
            style: axis.style,
            x: horizontal ? ML - 6 : ML + i * band + band / 2,
            y: horizontal ? MT + i * band + band / 2 + 3 : height - 4,
            textAnchor: horizontal ? "end" : "middle",
            children: label
          }, label))]
        })
      }), hover != null && tickLabels[hover] && /*#__PURE__*/_jsx(ChartTip, {
        left: horizontal ? ML + (xV(hoverValue) - ML) / 2 : ML + hover * band + band / 2,
        top: horizontal ? MT + hover * band + inset : yV(hoverValue),
        label: tickLabels[hover],
        rows: shown.map(s => ({
          name: shown.length > 1 ? s.name : undefined,
          value: Number.isFinite(s.values[hover]) && s.values[hover] != null ? tip(s.values[hover]) : "No data"
        }))
      })]
    }), (unit || shown.length > 1) && /*#__PURE__*/_jsxs(ChartLegend, {
      "aria-hidden": "true",
      children: [shown.length > 1 && shown.map((s, i) => /*#__PURE__*/_jsxs(ChartLegendItem, {
        children: [/*#__PURE__*/_jsx("svg", {
          width: "8",
          height: "8",
          "aria-hidden": "true",
          children: /*#__PURE__*/_jsx("rect", {
            width: "8",
            height: "8",
            ...barMark({
              spot: Boolean(spot) && i === 0
            }),
            opacity: 1 - i * 0.18
          })
        }), s.name]
      }, s.name)), unit && /*#__PURE__*/_jsx(ChartLegendItem, {
        children: unit
      })]
    }), /*#__PURE__*/_jsx(SrTable, {
      caption: yLabel ?? describePlot("Chart data", shown.map(s => s.name), unit),
      labels: tickLabels,
      series: shown
    })]
  });
});
//# sourceMappingURL=bar.js.map
