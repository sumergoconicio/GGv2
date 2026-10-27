"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../../tokens.js";
import { vlak, mq } from "../../tokens.js";
import { rs } from "../../rs.js";
import { hidden } from "../../hidden.stylex.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  chart: {
    kVAEAm: "x1n2onr6",
    kzqmXN: "xh8yej3",
    kaIpWk: "x2u8bby",
    kGVxlE: "x1gnnqk1",
    $$css: true
  },
  field: {
    kHBbk8: "xc8icb0",
    kWkggS: "xhpg8l3",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kaIpWk: "x2u8bby",
    kGVxlE: "x1gnnqk1",
    kmVPX3: "x1uz70x1",
    $$css: true
  },
  canvas: {
    kVAEAm: "x1n2onr6",
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  svg: {
    k1xSpc: "x1lliihq",
    kzqmXN: "xh8yej3",
    kZKoxP: "xt7dq6l",
    kVQacm: "x1rea2x4",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x14tvtkk",
    kInvED: "x7s97pk",
    $$css: true
  },
  plot: {
    k3nNDw: "x1g0ag68",
    $$css: true
  },
  head: {
    k1xSpc: "x78zum5",
    kjj79g: "x1qughib",
    kGNEyG: "x1pha0wt",
    kOIVth: "x8233eu",
    k1K539: "x1ncqgef",
    $$css: true
  },
  title: {
    kGuDYH: "x1dcheo9",
    k63SB2: "x1s688f",
    kb6lSQ: "xjat59b",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  grid: {
    kjVXCG: "xzb9byy",
    kfJifR: "xnpr05h",
    $$css: true
  },
  baseline: {
    kjVXCG: "xzb9byy",
    kfJifR: "xnpr05h",
    $$css: true
  },
  axis: {
    kDwRjp: "x1utz8zh",
    kGuDYH: "x12lo8hy",
    k63SB2: "xk50ysn",
    kb6lSQ: "x12oo3zp",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  line: {
    kDwRjp: "xbh8q5q",
    kjVXCG: "xbu9li4",
    kfJifR: "xnpr05h",
    kU5bRw: "x5lxx2x",
    kJdQPc: "x1bivah8",
    $$css: true
  },
  lineDashed: {
    k5rJSQ: "xlz5em3",
    $$css: true
  },
  lineMuted: {
    kjVXCG: "x3gq0yl",
    $$css: true
  },
  lineDotted: {
    kjVXCG: "x3gq0yl",
    k5rJSQ: "x12uzbb6",
    kfJifR: "xhr4kjn",
    kU5bRw: "x5lxx2x",
    $$css: true
  },
  lineSpot: {
    kjVXCG: "x1re16or",
    $$css: true
  },
  area: {
    kDwRjp: "x1azjd6u",
    kSiTet: "x1kzsush",
    kjVXCG: "xeutv01",
    $$css: true
  },
  areaSpot: {
    kDwRjp: "xpg9esp",
    kSiTet: "x7zo42s",
    kjVXCG: "xeutv01",
    $$css: true
  },
  bar: {
    kDwRjp: "x1azjd6u",
    kaIpWk: "x2u8bby",
    kmkexE: "xreetu0 xrozb4q",
    $$css: true
  },
  barMuted: {
    kDwRjp: "x1y3gg1l",
    $$css: true
  },
  barSpot: {
    kDwRjp: "xpg9esp",
    $$css: true
  },
  cursor: {
    kjVXCG: "xzb9byy",
    kfJifR: "xnpr05h",
    $$css: true
  },
  dot: {
    kDwRjp: "x11lvw2d",
    kjVXCG: "xbu9li4",
    kfJifR: "xnpr05h",
    $$css: true
  },
  mark: {
    kDwRjp: "x1azjd6u",
    kaIpWk: "x2u8bby",
    kmkexE: "xreetu0 xrozb4q",
    $$css: true
  },
  markSpot: {
    kDwRjp: "xpg9esp",
    $$css: true
  },
  ann: {
    kDwRjp: "x1utz8zh",
    kGuDYH: "x12lo8hy",
    k63SB2: "xk50ysn",
    kb6lSQ: "xjat59b",
    $$css: true
  },
  tip: {
    kVAEAm: "x10l6tqk",
    kfzvcC: "x47corl",
    kWkggS: "xhpg8l3",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kaIpWk: "x2u8bby",
    kGVxlE: "x1gnnqk1",
    k8WAf4: "x1bilvtl",
    kg3NbH: "x97vtpp",
    kGuDYH: "xboafo0",
    kb6lSQ: "xjat59b",
    kMwMTN: "x1gney9c",
    khDVqt: "xuxw1ft",
    kY2c9j: "xhupvvu",
    k3aq6I: "xbj2mxh",
    $$css: true
  },
  tipLabel: {
    k1xSpc: "x1lliihq",
    kGuDYH: "x12lo8hy",
    kMwMTN: "x1ixqp2s",
    k1K539: "xjpr12u",
    $$css: true
  },
  tipRow: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kjj79g: "x1qughib",
    kOIVth: "xb6y1gh",
    $$css: true
  },
  tipName: {
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  tipVal: {
    k63SB2: "x1s688f",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  legend: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x1fsutb",
    keoZOQ: "x5y4uik",
    $$css: true
  },
  legendItem: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kOIVth: "x1r2bq03",
    kGuDYH: "xboafo0",
    k63SB2: "xk50ysn",
    kb6lSQ: "xjat59b",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  legendSvg: {
    k1xSpc: "x1lliihq",
    $$css: true
  }
};
export const chartStyles = styles;
export function ticksBetween(min, max, count = 4) {
  if (!Number.isFinite(min) || !Number.isFinite(max)) return [];
  if (min > max) [min, max] = [max, min];
  const span = max - min || 1;
  const step = niceStep(span, count);
  const start = Math.ceil(min / step) * step;
  const values = [];
  for (let t = start; t <= max + step * 1e-6; t += step) values.push(+t.toFixed(8));
  return values.length ? values : [+min.toFixed(2), +max.toFixed(2)];
}
export const LINE_CLASS = ["rs-chart-line", "rs-chart-line rs-chart-line-dashed", "rs-chart-line rs-chart-line-muted", "rs-chart-line rs-chart-line-dotted"];
const LINE_SX = [null, styles.lineDashed, styles.lineMuted, styles.lineDotted];
export const MAX_SERIES = LINE_CLASS.length;

/** Crouwel-adjacent red. Applied only as an inline field variable, never in CSS. */
export const CROUWEL_SPOT = "#E30613";
export function niceMax(raw) {
  if (!Number.isFinite(raw) || raw <= 0) return 1;
  const pow = 10 ** Math.floor(Math.log10(raw));
  for (const f of [1, 2, 2.5, 5, 10]) {
    if (f * pow >= raw) return f * pow;
  }
  return 10 * pow;
}
const formatters = new Map();
function numberFormat(locale, options) {
  const key = `${locale ?? ""}|${JSON.stringify(options)}`;
  let f = formatters.get(key);
  if (!f) {
    f = new Intl.NumberFormat(locale, options);
    formatters.set(key, f);
  }
  return f;
}

/**
 * Locale-aware number: compact from a thousand (1.2K, 3M), else at most one
 * decimal. `locale` undefined means the reader's own.
 */
export function defaultFormat(v, unit, locale) {
  if (!Number.isFinite(v)) return "No data";
  const n = numberFormat(locale, Math.abs(v) >= 1000 ? {
    notation: "compact",
    maximumFractionDigits: 1
  } : {
    maximumFractionDigits: Number.isInteger(v) ? 0 : 1
  }).format(v);
  return unit ? `${n} ${unit}` : n;
}
export function niceStep(span, count = 4) {
  const raw = span / (Number.isFinite(count) ? Math.max(1, Math.min(100, count)) : 4);
  if (raw <= 0) return 1;
  const pow = 10 ** Math.floor(Math.log10(raw));
  for (const f of [1, 2, 2.5, 5, 10]) {
    if (f * pow >= raw) return f * pow;
  }
  return 10 * pow;
}
export function ticksFor(max, count = 4, inverted = false) {
  const step = niceStep(max, count);
  const values = [];
  for (let t = step; t <= max + step * 1e-6; t += step) values.push(+t.toFixed(8));
  return inverted ? values.reverse() : values;
}
export function stackedRows(series) {
  const n = Math.max(0, ...series.map(s => s.values.length));
  return Array.from({
    length: n
  }, (_, i) => {
    let positive = 0;
    let negative = 0;
    return series.map(s => {
      const value = s.values[i];
      if (typeof value !== "number" || !Number.isFinite(value)) return Number.NaN;
      if (value < 0) {
        negative += value;
        return negative;
      }
      positive += value;
      return positive;
    });
  });
}
export function lineMark(seriesIndex, spot) {
  if (spot && seriesIndex === 0) {
    return rs(["rs-chart-line", "rs-chart-line-spot"], styles.line, styles.lineSpot);
  }
  const classes = LINE_CLASS[seriesIndex] ?? LINE_CLASS[0];
  return rs(classes.split(/\s+/), styles.line, LINE_SX[seriesIndex]);
}
export function areaMark(spot) {
  return rs([spot ? "rs-chart-area-spot" : "rs-chart-area"], spot ? styles.areaSpot : styles.area);
}
export function barMark(opts = {}) {
  return rs(["rs-chart-bar", opts.spot && "rs-chart-bar-spot", opts.muted && "rs-chart-bar-muted"], styles.bar, opts.spot && styles.barSpot, opts.muted && styles.barMuted);
}
export function scatterMark(spot) {
  return rs(["rs-chart-mark", spot && "rs-chart-mark-spot"], styles.mark, spot && styles.markSpot);
}
/** The data behind a plot, as a screen-reader table. */
export function SrTable({
  caption,
  labels,
  series
}) {
  const sx = rs(["rs-sr"], hidden.sr);
  return /*#__PURE__*/_jsxs("table", {
    className: sx.className,
    style: sx.style,
    children: [/*#__PURE__*/_jsx("caption", {
      children: caption
    }), /*#__PURE__*/_jsx("thead", {
      children: /*#__PURE__*/_jsxs("tr", {
        children: [/*#__PURE__*/_jsx("th", {
          scope: "col",
          children: "Label"
        }), series.map(s => /*#__PURE__*/_jsx("th", {
          scope: "col",
          children: s.name
        }, s.name))]
      })
    }), /*#__PURE__*/_jsx("tbody", {
      children: labels.map((label, i) => /*#__PURE__*/_jsxs("tr", {
        children: [/*#__PURE__*/_jsx("th", {
          scope: "row",
          children: label
        }), series.map(s => /*#__PURE__*/_jsx("td", {
          children: s.values[i] == null || typeof s.values[i] === "number" && !Number.isFinite(s.values[i]) ? "No data" : s.values[i]
        }, s.name))]
      }, i))
    })]
  });
}
export function LegendSwatch({
  seriesIndex,
  spot
}) {
  const svg = rs(["rs-chart-legend-svg"], styles.legendSvg);
  return /*#__PURE__*/_jsx("svg", {
    width: "18",
    height: "4",
    viewBox: "0 0 18 4",
    "aria-hidden": "true",
    className: svg.className,
    style: svg.style,
    children: /*#__PURE__*/_jsx("path", {
      d: "M0 2h18",
      ...lineMark(seriesIndex, spot)
    })
  });
}
export function ChartHead({
  className,
  style,
  ...props
}) {
  const sx = rs(["rs-chart-head", className], styles.head);
  return /*#__PURE__*/_jsx("div", {
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
}
export function ChartTitle({
  className,
  style,
  ...props
}) {
  const sx = rs(["rs-chart-title", className], styles.title);
  return /*#__PURE__*/_jsx("p", {
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
}
export function ChartLegend({
  className,
  style,
  ...props
}) {
  const sx = rs(["rs-chart-legend", className], styles.legend);
  return /*#__PURE__*/_jsx("div", {
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
}
export function ChartLegendItem({
  className,
  style,
  ...props
}) {
  const sx = rs(["rs-chart-legend-item", className], styles.legendItem);
  return /*#__PURE__*/_jsx("span", {
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
}
export function ChartTip({
  left,
  top,
  label,
  rows
}) {
  const tip = rs(["rs-chart-tip"], styles.tip);
  const tipLabel = rs(["rs-chart-tip-label"], styles.tipLabel);
  return /*#__PURE__*/_jsxs("div", {
    role: "status",
    className: tip.className,
    style: {
      ...tip.style,
      left,
      top
    },
    children: [/*#__PURE__*/_jsx("span", {
      className: tipLabel.className,
      style: tipLabel.style,
      children: label
    }), rows.map((row, i) => {
      const tipRow = rs(["rs-chart-tip-row"], styles.tipRow);
      const tipName = rs(["rs-chart-tip-name"], styles.tipName);
      const tipVal = rs(["rs-chart-tip-val"], styles.tipVal);
      return /*#__PURE__*/_jsxs("div", {
        className: tipRow.className,
        style: tipRow.style,
        children: [row.name ? /*#__PURE__*/_jsx("span", {
          className: tipName.className,
          style: tipName.style,
          children: row.name
        }) : null, /*#__PURE__*/_jsx("span", {
          className: tipVal.className,
          style: tipVal.style,
          children: row.value
        })]
      }, i);
    })]
  });
}
export const ChartField = /*#__PURE__*/React.forwardRef(function ChartField({
  spot,
  className,
  style,
  children,
  ...props
}, ref) {
  const color = spot === true ? CROUWEL_SPOT : typeof spot === "string" ? spot : undefined;
  const sx = rs(["rs-chart", "rs-chart-field", className], styles.chart, styles.field);
  return /*#__PURE__*/_jsx("div", {
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
    children: children
  });
});

/** The canvas wraps a plot: measured for width, and the tooltip's positioning box. */
export const ChartCanvas = /*#__PURE__*/React.forwardRef(function ChartCanvas({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-chart-canvas", className], styles.canvas);
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
export const PLOT = {
  W: 408,
  ML: 36,
  MR: 8,
  MT: 8,
  MB: 22
};

/**
 * Rendered width of the canvas in CSS px, so the plot lays out in real
 * pixels and its type keeps its size. PLOT.W on the server, before the
 * first measure, and where ResizeObserver is missing.
 */
export function useChartWidth(fallback = PLOT.W) {
  const ref = React.useRef(null);
  const [width, setWidth] = React.useState(fallback);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const apply = w => {
      if (w > 0) setWidth(prev => Math.abs(prev - w) < 0.5 ? prev : Math.round(w));
    };
    apply(el.clientWidth);
    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(entries => {
      for (const entry of entries) apply(entry.contentRect.width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, width];
}

/**
 * Keyboard cursor over `count` points: arrows step, Home/End jump, Escape
 * clears. Returns undefined for keys it does not handle.
 */
export function stepCursor(key, current, count) {
  if (count <= 0) return undefined;
  const last = count - 1;
  if (key === "ArrowRight") return current == null ? 0 : Math.min(last, current + 1);
  if (key === "ArrowLeft") return current == null ? last : Math.max(0, current - 1);
  if (key === "Home") return 0;
  if (key === "End") return last;
  if (key === "Escape") return null;
  return undefined;
}
/**
 * The plot's accessible name: an explicit label or labelledby wins, then the
 * visible ChartTitle by id, then a composed description. Never a bare kind.
 */
export function plotName(explicit, titleId, fallback) {
  if (explicit["aria-labelledby"]) return {
    "aria-labelledby": explicit["aria-labelledby"]
  };
  if (explicit["aria-label"]) return {
    "aria-label": explicit["aria-label"]
  };
  if (titleId) return {
    "aria-labelledby": titleId
  };
  return {
    "aria-label": fallback
  };
}

/** "Bar chart of Sheets and Proofs, in units". */
export function describePlot(kind, names, unit) {
  const what = names.filter(Boolean);
  const list = what.length > 1 ? `${what.slice(0, -1).join(", ")} and ${what[what.length - 1]}` : what[0];
  return `${kind}${list ? ` of ${list}` : ""}${unit ? `, in ${unit}` : ""}`;
}

/** Props that make a plot a focusable, keyboard-driven group. */
export function plotProps(name, onKey, onLeave) {
  return {
    role: "group",
    tabIndex: 0,
    "aria-roledescription": "interactive chart",
    ...name,
    onKeyDown: e => {
      if (onKey(e.key)) e.preventDefault();
    },
    onBlur: onLeave
  };
}
//# sourceMappingURL=frame.js.map
