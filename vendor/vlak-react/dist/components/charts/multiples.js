import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../../tokens.js";
import { vlak } from "../../tokens.js";
import { rs } from "../../rs.js";
import { LineChart } from "./line.js";
import { niceMax } from "./frame.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  multi: {
    k1xSpc: "xrvj5dj",
    kumcoG: "xlcajzv",
    kOIVth: "x15iy025",
    $$css: true
  },
  item: {
    kogj98: "x1ghz6dp",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  cap: {
    keoZOQ: "xdj266r",
    k71WvV: "x14z9mp",
    k1K539: "xhbfen4",
    keTefX: "x1lziwak",
    kGuDYH: "xboafo0",
    k63SB2: "x1s688f",
    kb6lSQ: "xjat59b",
    kMwMTN: "x1gney9c",
    $$css: true
  }
};
export const SmallMultiples = /*#__PURE__*/React.forwardRef(function SmallMultiples({
  panels,
  height = 136,
  unit,
  grid = true,
  ticks = 3,
  className,
  spot,
  sharedDomain = true,
  locale,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-chart-multi", className], styles.multi);
  const item = rs(["rs-chart-multi-item"], styles.item);
  const values = panels.flatMap(panel => panel.series.flatMap(series => series.values)).filter(value => typeof value === "number" && Number.isFinite(value));
  const domain = sharedDomain ? [Math.min(0, ...values), niceMax(Math.max(0, ...values))] : undefined;
  const idBase = React.useId();
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    },
    children: panels.map((p, i) => {
      const capId = `${idBase}-cap-${i}`;
      return /*#__PURE__*/_jsxs("figure", {
        className: item.className,
        style: item.style,
        children: [/*#__PURE__*/_jsx("figcaption", {
          id: capId,
          ...rs(["rs-chart-multi-cap"], styles.cap),
          children: p.title
        }), /*#__PURE__*/_jsx(LineChart, {
          series: p.series,
          labels: p.labels,
          height: height,
          unit: unit,
          grid: grid,
          ticks: ticks,
          spot: spot,
          locale: locale,
          domain: domain,
          "aria-labelledby": capId
        })]
      }, p.title);
    })
  });
});
//# sourceMappingURL=multiples.js.map
