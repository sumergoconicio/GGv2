"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    k7Eaqz: "xeuugli",
    kogj98: "x1ghz6dp",
    kMwMTN: "x1gney9c",
    kLWn49: "xfrs9s4",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  label: {
    kGuDYH: "xkpwil5",
    k63SB2: "x1s688f",
    $$css: true
  },
  description: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    ks0D6T: "x1qp14f0",
    $$css: true
  },
  scroll: {
    kXHlph: "xw2csxc",
    ks0D6T: "x193iq5w",
    k7Eaqz: "xeuugli",
    kvh3hx: "x7p5m3t",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  svg: {
    k1xSpc: "x1lliihq",
    kzqmXN: "xh8yej3",
    k7Eaqz: "x7f79of",
    kZKoxP: "xt7dq6l",
    ksoyAI: "xzt5al7",
    kMwMTN: "x1gney9c x1sy4l04",
    $$css: true
  },
  axis: {
    kDwRjp: "xbh8q5q",
    kjVXCG: "x73je2i",
    kfJifR: "xnpr05h",
    $$css: true
  },
  grid: {
    kDwRjp: "xbh8q5q",
    kjVXCG: "xzb9byy",
    kfJifR: "xnpr05h",
    $$css: true
  },
  trace: {
    kDwRjp: "xbh8q5q",
    kjVXCG: "x73je2i",
    kfJifR: "xhr4kjn",
    kJdQPc: "x1f6yumg",
    $$css: true
  },
  point: {
    kDwRjp: "x117rol3",
    kjVXCG: "x73je2i",
    kfJifR: "xnpr05h",
    $$css: true
  },
  annotation: {
    kDwRjp: "x117rol3",
    kGuDYH: "xwsyq91",
    kMv6JI: "xjb2p0i",
    $$css: true
  },
  ticks: {
    kDwRjp: "x117rol3",
    kGuDYH: "xwsyq91",
    kcqcaj: "xss6m8b",
    kMv6JI: "xjb2p0i",
    $$css: true
  },
  xLabel: {
    kogj98: "x1ghz6dp",
    k9WMMc: "x2b8uid",
    kGuDYH: "xboafo0",
    $$css: true
  },
  peaks: {
    kogj98: "x1ghz6dp",
    kZCmMZ: "x1is3n31",
    kGuDYH: "xboafo0",
    $$css: true
  },
  summary: {
    kAzted: "x1wszdd",
    k7Eaqz: "xtp0tkc",
    k1xSpc: "xtcx8v3",
    kfiyM8: "xc26acl",
    kkrTdU: "x1ypdohk",
    kGuDYH: "xkpwil5",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  table: {
    kzqmXN: "xh8yej3",
    kLvRdT: "x1mwwwfo",
    kGuDYH: "xboafo0",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  cell: {
    kmVPX3: "x7gbtqy",
    k9WMMc: "x1yc453h",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    k63SB2: "xo1l8bm",
    $$css: true
  },
  controls: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x6s0dn4",
    kOIVth: "x13z6uf9",
    k8WAf4: "x18g2hj5",
    kGuDYH: "xboafo0",
    $$css: true
  },
  button: {
    kmuXW: "x2lah0s",
    $$css: true
  }
};
function domainFor(values, supplied) {
  if (supplied) return supplied;
  let minimum = values[0] ?? 0;
  let maximum = minimum;
  for (const value of values) {
    minimum = Math.min(minimum, value);
    maximum = Math.max(maximum, value);
  }
  if (minimum !== maximum) return [minimum, maximum];
  const pad = Math.abs(minimum) * 0.05 || 1;
  const lower = minimum - pad;
  const upper = maximum + pad;
  return [Number.isFinite(lower) ? lower : minimum, Number.isFinite(upper) ? upper : maximum];
}
function fraction(value, domain) {
  const scale = Math.max(Math.abs(domain[0]), Math.abs(domain[1]), 1);
  return (value / scale - domain[0] / scale) / (domain[1] / scale - domain[0] / scale);
}
const finitePoint = point => Number.isFinite(point.x) && Number.isFinite(point.y);

/** A supplied spectrum and peak annotations, with a paginated complete data table. */
export const SpectrumPlot = /*#__PURE__*/React.forwardRef(function SpectrumPlot({
  label,
  points,
  xLabel,
  yLabel,
  xUnit,
  yUnit,
  xDomain,
  yDomain,
  peaks = [],
  description,
  className,
  style,
  children,
  ...props
}, ref) {
  const [page, setPage] = React.useState(0);
  const bounded = points.length <= 4096 && peaks.length <= 128;
  const finite = bounded && points.every(finitePoint) && peaks.every(finitePoint);
  const horizontal = domainFor(finite ? points.map(point => point.x) : [], xDomain);
  const vertical = domainFor(finite ? points.map(point => point.y) : [], yDomain);
  const validDomain = [horizontal, vertical].every(domain => Number.isFinite(domain[0]) && Number.isFinite(domain[1]) && domain[1] > domain[0]);
  const inside = point => point.x >= horizontal[0] && point.x <= horizontal[1] && point.y >= vertical[0] && point.y <= vertical[1];
  const problem = !bounded ? "Spectrum unavailable: supply at most 4096 points and 128 annotations" : !points.length ? "No spectrum points supplied" : !finite ? "Spectrum unavailable: a point or annotation is non-finite" : !validDomain ? "Spectrum unavailable: axis bounds must be finite and increasing" : !points.every(inside) || !peaks.every(inside) ? "Spectrum unavailable: data or annotations fall outside the axis bounds" : null;
  const x = value => 128 + fraction(value, horizontal) * 484;
  const y = value => 216 - fraction(value, vertical) * 184;
  const axisName = (name, unit) => unit ? `${name} (${unit})` : name;
  const xTitle = axisName(xLabel, xUnit);
  const yTitle = axisName(yLabel, yUnit);
  const tickFractions = Math.max(horizontal[0].toPrecision(4).length, horizontal[1].toPrecision(4).length) > 7 ? [0, 0.5, 1] : [0, 0.25, 0.5, 0.75, 1];
  const pageCount = Math.ceil(points.length / 50);
  const currentPage = Math.min(page, Math.max(0, pageCount - 1));
  const visible = bounded ? points.slice(currentPage * 50, (currentPage + 1) * 50) : [];
  const root = rs(["rs-spectrum-plot", className], styles.root);
  const heading = rs(["rs-spectrum-plot-label"], styles.label);
  const copy = rs(["rs-spectrum-plot-description"], styles.description);
  const scroll = rs(["rs-spectrum-plot-scroll"], styles.scroll);
  const svg = rs(["rs-spectrum-plot-svg"], styles.svg);
  const axis = rs(["rs-spectrum-plot-axis"], styles.axis);
  const grid = rs(["rs-spectrum-plot-grid"], styles.grid);
  const trace = rs(["rs-spectrum-plot-trace"], styles.trace);
  const pointStyle = rs(["rs-spectrum-plot-point"], styles.point);
  const annotation = rs(["rs-spectrum-plot-annotation"], styles.annotation);
  const ticks = rs(["rs-spectrum-plot-ticks"], styles.ticks);
  const xLabelStyle = rs(["rs-spectrum-plot-x-label"], styles.xLabel);
  const peakList = rs(["rs-spectrum-plot-peaks"], styles.peaks);
  const summary = rs(["rs-spectrum-plot-summary"], styles.summary);
  const table = rs(["rs-spectrum-plot-table"], styles.table);
  const cell = rs(["rs-spectrum-plot-cell"], styles.cell);
  const controls = rs(["rs-spectrum-plot-controls"], styles.controls);
  const button = rs(["rs-spectrum-plot-button"], styles.button);
  return /*#__PURE__*/_jsxs("figure", {
    ...props,
    ref: ref,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("figcaption", {
      ...heading,
      children: label
    }), description != null && /*#__PURE__*/_jsx("div", {
      ...copy,
      children: description
    }), problem ? /*#__PURE__*/_jsx("p", {
      ...copy,
      children: problem
    }) : /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsx("p", {
        ...copy,
        children: yTitle
      }), /*#__PURE__*/_jsx("div", {
        ...scroll,
        role: "region",
        "aria-label": `${label} plot`,
        tabIndex: 0,
        children: /*#__PURE__*/_jsxs("svg", {
          ...svg,
          viewBox: "0 0 640 272",
          "aria-hidden": "true",
          focusable: "false",
          children: [/*#__PURE__*/_jsx("path", {
            ...axis,
            d: "M128 32V216H612"
          }), tickFractions.map((ratio, index) => {
            const xv = horizontal[0] * (1 - ratio) + horizontal[1] * ratio;
            const yv = vertical[0] * (1 - ratio) + vertical[1] * ratio;
            return /*#__PURE__*/_jsxs("g", {
              children: [/*#__PURE__*/_jsx("path", {
                ...grid,
                d: `M128 ${216 - ratio * 184}H612`
              }), /*#__PURE__*/_jsx("text", {
                ...ticks,
                x: 128 + ratio * 484,
                y: 244,
                textAnchor: ratio === 0 ? "start" : ratio === 1 ? "end" : "middle",
                children: xv.toPrecision(4)
              }), /*#__PURE__*/_jsx("text", {
                ...ticks,
                x: 118,
                y: 223 - ratio * 184,
                textAnchor: "end",
                children: yv.toPrecision(4)
              })]
            }, index);
          }), points.length === 1 ? /*#__PURE__*/_jsx("circle", {
            ...pointStyle,
            cx: x(points[0].x),
            cy: y(points[0].y),
            r: 3
          }) : /*#__PURE__*/_jsx("polyline", {
            ...trace,
            points: points.map(point => `${x(point.x)},${y(point.y)}`).join(" ")
          }), peaks.map((peak, index) => /*#__PURE__*/_jsxs("g", {
            children: [/*#__PURE__*/_jsx("circle", {
              ...pointStyle,
              cx: x(peak.x),
              cy: y(peak.y),
              r: 3
            }), /*#__PURE__*/_jsx("text", {
              ...annotation,
              x: x(peak.x),
              y: y(peak.y) - 8,
              textAnchor: "middle",
              children: index + 1
            })]
          }, peak.id))]
        })
      }), /*#__PURE__*/_jsx("p", {
        ...xLabelStyle,
        children: xTitle
      })]
    }), bounded && peaks.length > 0 && /*#__PURE__*/_jsx("ol", {
      ...peakList,
      "aria-label": "Supplied peak annotations",
      children: peaks.map(peak => /*#__PURE__*/_jsxs("li", {
        children: [peak.label, ": ", xTitle, " ", Number.isFinite(peak.x) ? peak.x : "Unavailable", "; ", yTitle, " ", Number.isFinite(peak.y) ? peak.y : "Unavailable"]
      }, peak.id))
    }), bounded && points.length > 0 && /*#__PURE__*/_jsxs("details", {
      children: [/*#__PURE__*/_jsxs("summary", {
        ...summary,
        children: ["Data table, ", points.length, " points"]
      }), /*#__PURE__*/_jsxs("div", {
        ...controls,
        children: [/*#__PURE__*/_jsx(Button, {
          variant: "ghost",
          size: "sm",
          ...button,
          type: "button",
          disabled: currentPage === 0,
          onClick: () => setPage(currentPage - 1),
          children: "Previous rows"
        }), /*#__PURE__*/_jsxs("span", {
          role: "status",
          children: ["Rows ", currentPage * 50 + 1, "\u2013", Math.min(points.length, (currentPage + 1) * 50), " of ", points.length]
        }), /*#__PURE__*/_jsx(Button, {
          variant: "ghost",
          size: "sm",
          ...button,
          type: "button",
          disabled: currentPage + 1 >= pageCount,
          onClick: () => setPage(currentPage + 1),
          children: "Next rows"
        })]
      }), /*#__PURE__*/_jsx("div", {
        ...scroll,
        children: /*#__PURE__*/_jsxs("table", {
          ...table,
          children: [/*#__PURE__*/_jsxs("caption", {
            children: [label, ", supplied data"]
          }), /*#__PURE__*/_jsx("thead", {
            children: /*#__PURE__*/_jsxs("tr", {
              children: [/*#__PURE__*/_jsx("th", {
                ...cell,
                scope: "col",
                children: "Point"
              }), /*#__PURE__*/_jsx("th", {
                ...cell,
                scope: "col",
                children: xTitle
              }), /*#__PURE__*/_jsx("th", {
                ...cell,
                scope: "col",
                children: yTitle
              })]
            })
          }), /*#__PURE__*/_jsx("tbody", {
            children: visible.map((point, index) => /*#__PURE__*/_jsxs("tr", {
              children: [/*#__PURE__*/_jsx("th", {
                ...cell,
                scope: "row",
                children: currentPage * 50 + index + 1
              }), /*#__PURE__*/_jsx("td", {
                ...cell,
                children: Number.isFinite(point.x) ? point.x : "Unavailable"
              }), /*#__PURE__*/_jsx("td", {
                ...cell,
                children: Number.isFinite(point.y) ? point.y : "Unavailable"
              })]
            }, currentPage * 50 + index))
          })]
        })
      })]
    }), children]
  });
});
//# sourceMappingURL=spectrum-plot.js.map
