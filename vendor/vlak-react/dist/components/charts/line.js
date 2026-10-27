"use client";

import * as React from "react";
import { ChartCanvas, ChartField, ChartHead, ChartLegend, ChartLegendItem, ChartTip, ChartTitle, LegendSwatch, MAX_SERIES, PLOT, SrTable, areaMark, chartStyles, defaultFormat, describePlot, lineMark, niceMax, plotName, plotProps, stackedRows, stepCursor, ticksBetween, useChartWidth } from "./frame.js";
import { rs } from "../../rs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const LineChart = /*#__PURE__*/React.forwardRef(function LineChart({
  series,
  labels,
  height = 204,
  area,
  stacked,
  inverted,
  grid = true,
  ticks = 4,
  unit,
  yLabel,
  xLabel,
  annotations,
  domain,
  spot,
  valueFormat,
  locale,
  className,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  ...props
}, ref) {
  const shown = series.slice(0, MAX_SERIES);
  const n = Math.max(0, ...shown.map(s => s.values.length));
  const stacks = stacked ? stackedRows(shown) : null;
  const extent = (stacks ? stacks.flat() : shown.flatMap(s => s.values)).filter(v => typeof v === "number" && Number.isFinite(v));
  const validDomain = domain?.every(Number.isFinite) && domain[0] !== domain[1] ? domain : undefined;
  const min = validDomain ? Math.min(...validDomain) : Math.min(0, ...extent);
  const max = validDomain ? Math.max(...validDomain) : niceMax(Math.max(0, ...extent));
  const span = max - min || 1;
  const format = valueFormat ?? (v => defaultFormat(v, undefined, locale));
  const tip = valueFormat ?? (v => defaultFormat(v, unit, locale));
  const [hover, setHover] = React.useState(null);
  const overlayRef = React.useRef(null);
  const [canvasRef, W] = useChartWidth();
  const titleId = React.useId();
  const clipId = React.useId();
  const {
    ML,
    MR,
    MT,
    MB
  } = PLOT;
  const plotW = W - ML - MR;
  const plotH = height - MT - MB;
  const x = i => ML + (n <= 1 ? 0 : i / (n - 1) * plotW);
  const y = v => {
    const t = (v - min) / span;
    return inverted ? MT + t * plotH : MT + plotH - t * plotH;
  };
  const segments = values => {
    const groups = [];
    let current = [];
    values.forEach((v, i) => {
      if (typeof v === "number" && Number.isFinite(v)) current.push({
        v,
        i
      });else if (current.length) {
        groups.push(current);
        current = [];
      }
    });
    if (current.length) groups.push(current);
    return groups;
  };
  const path = (values, fill = false) => segments(values).map(group => group.map(({
    v,
    i
  }, j) => `${j ? "L" : "M"}${x(i)} ${y(v)}`).join(" ") + (fill ? ` L${x(group[group.length - 1].i)} ${y(Math.max(min, Math.min(max, 0)))} L${x(group[0].i)} ${y(Math.max(min, Math.min(max, 0)))} Z` : "")).join(" ");
  const tickVals = ticksBetween(min, max, ticks);
  const tickLabels = Array.from({
    length: n
  }, (_, i) => labels?.[i] ?? `${i + 1}`);
  const locate = clientX => {
    const rect = overlayRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0 || !extent.length) return null;
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    return Math.round(ratio * (n - 1));
  };
  const svg = rs(["rs-chart-svg"], chartStyles.svg);
  const plot = rs(["rs-chart-plot"], chartStyles.plot);
  const gridSx = rs(["rs-chart-grid"], chartStyles.grid);
  const axis = rs(["rs-chart-axis"], chartStyles.axis);
  const baseline = rs(["rs-chart-baseline"], chartStyles.baseline);
  const cursor = rs(["rs-chart-cursor"], chartStyles.cursor);
  const ann = rs(["rs-chart-ann"], chartStyles.ann);
  const dot = rs(["rs-chart-dot"], chartStyles.dot);
  const name = plotName({
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy
  }, yLabel ? titleId : undefined, describePlot(area ? "Area chart" : "Line chart", shown.map(s => s.name), unit));
  const a11y = plotProps(name, key => {
    const next = stepCursor(key, hover, extent.length ? n : 0);
    if (next === undefined) return false;
    setHover(next);
    return true;
  }, () => setHover(null));
  return /*#__PURE__*/_jsxs(ChartField, {
    ref: ref,
    spot: spot,
    className: className,
    ...props,
    children: [!extent.length && /*#__PURE__*/_jsx("p", {
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
      children: [/*#__PURE__*/_jsxs("svg", {
        className: svg.className,
        style: svg.style,
        viewBox: `0 0 ${W} ${height}`,
        ...a11y,
        children: [/*#__PURE__*/_jsx("defs", {
          children: /*#__PURE__*/_jsx("clipPath", {
            id: clipId,
            children: /*#__PURE__*/_jsx("rect", {
              x: ML,
              y: MT,
              width: plotW,
              height: plotH
            })
          })
        }), /*#__PURE__*/_jsxs("g", {
          className: plot.className,
          style: plot.style,
          "aria-hidden": "true",
          children: [grid && tickVals.map(t => /*#__PURE__*/_jsxs("g", {
            children: [/*#__PURE__*/_jsx("line", {
              className: gridSx.className,
              style: gridSx.style,
              x1: ML,
              x2: W - MR,
              y1: y(t),
              y2: y(t)
            }), /*#__PURE__*/_jsx("text", {
              className: axis.className,
              style: axis.style,
              x: ML - 6,
              y: y(t) + 3.5,
              textAnchor: "end",
              children: format(t)
            })]
          }, t)), /*#__PURE__*/_jsx("line", {
            className: baseline.className,
            style: baseline.style,
            x1: ML,
            x2: W - MR,
            y1: y(min),
            y2: y(min)
          }), area && shown[0] && !stacked && /*#__PURE__*/_jsx("path", {
            ...areaMark(Boolean(spot)),
            clipPath: `url(#${clipId})`,
            d: path(shown[0].values, true)
          }), stacked && stacks ? shown.map((s, si) => {
            const top = stacks.map(row => row[si] ?? 0);
            return /*#__PURE__*/_jsx("path", {
              ...lineMark(si, Boolean(spot)),
              clipPath: `url(#${clipId})`,
              d: path(top)
            }, s.name);
          }) : shown.map((s, si) => /*#__PURE__*/_jsx("path", {
            ...lineMark(si, Boolean(spot)),
            clipPath: `url(#${clipId})`,
            d: path(s.values)
          }, s.name)), annotations?.map(a => /*#__PURE__*/_jsxs("g", {
            children: [/*#__PURE__*/_jsx("line", {
              className: cursor.className,
              style: cursor.style,
              x1: x(a.at),
              x2: x(a.at),
              y1: MT,
              y2: y(min)
            }), /*#__PURE__*/_jsx("text", {
              className: ann.className,
              style: ann.style,
              x: x(a.at) + 4,
              y: MT + 10,
              children: a.label
            })]
          }, `${a.at}-${a.label}`)), hover != null && hover < n && extent.length > 0 && /*#__PURE__*/_jsxs("g", {
            children: [/*#__PURE__*/_jsx("line", {
              className: cursor.className,
              style: cursor.style,
              x1: x(hover),
              x2: x(hover),
              y1: MT,
              y2: y(min)
            }), shown.map((s, si) => typeof s.values[hover] === "number" && Number.isFinite(s.values[hover]) ? /*#__PURE__*/_jsx("circle", {
              className: dot.className,
              style: dot.style,
              cx: x(hover),
              cy: y(stacked && stacks ? stacks[hover]?.[si] ?? 0 : s.values[hover] ?? 0),
              r: 3,
              clipPath: `url(#${clipId})`
            }, si) : null)]
          }), /*#__PURE__*/_jsx("text", {
            className: axis.className,
            style: axis.style,
            x: ML,
            y: height - 4,
            textAnchor: "start",
            children: tickLabels[0]
          }), /*#__PURE__*/_jsx("text", {
            className: axis.className,
            style: axis.style,
            x: W - MR,
            y: height - 4,
            textAnchor: "end",
            children: tickLabels[n - 1]
          }), /*#__PURE__*/_jsx("rect", {
            ref: overlayRef,
            x: ML,
            y: 0,
            width: plotW,
            height: height,
            fill: "transparent",
            onPointerMove: e => setHover(locate(e.clientX)),
            onPointerLeave: () => setHover(null)
          })]
        })]
      }), hover != null && hover < n && extent.length > 0 && /*#__PURE__*/_jsx(ChartTip, {
        left: x(hover),
        top: MT,
        label: tickLabels[hover] ?? "",
        rows: shown.map(s => ({
          name: s.name,
          value: s.values[hover] != null && Number.isFinite(s.values[hover]) ? tip(s.values[hover]) : "No data"
        }))
      })]
    }), (shown.length > 1 || unit) && /*#__PURE__*/_jsxs(ChartLegend, {
      children: [shown.map((s, si) => /*#__PURE__*/_jsxs(ChartLegendItem, {
        children: [/*#__PURE__*/_jsx(LegendSwatch, {
          seriesIndex: si,
          spot: Boolean(spot)
        }), s.name]
      }, s.name)), unit ? /*#__PURE__*/_jsx(ChartLegendItem, {
        children: unit
      }) : null]
    }), /*#__PURE__*/_jsx(SrTable, {
      caption: yLabel ?? describePlot("Chart data", shown.map(s => s.name), unit),
      labels: tickLabels,
      series: shown
    })]
  });
});
//# sourceMappingURL=line.js.map
