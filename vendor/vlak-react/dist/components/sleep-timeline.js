import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const stateLabels = {
  asleep: "Asleep",
  awake: "Awake",
  unknown: "Unknown"
};
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    k7Eaqz: "xeuugli",
    kogj98: "x1ghz6dp",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  caption: {
    k1xSpc: "xrvj5dj",
    kOIVth: "xpj7pl4",
    $$css: true
  },
  label: {
    kGuDYH: "x1jq7itm",
    k63SB2: "x1s688f",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  description: {
    kogj98: "x1ghz6dp",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x1jq7itm",
    kLWn49: "xfrs9s4",
    ks0D6T: "x1qp14f0",
    $$css: true
  },
  chart: {
    k1xSpc: "x78zum5",
    kzqmXN: "xh8yej3",
    kZKoxP: "xettwda",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd",
    kB7OPa: "x9f619",
    kVQacm: "xb3r6kr",
    $$css: true
  },
  segment: {
    kVAEAm: "x1n2onr6",
    kZKoxP: "x5yr21d",
    k7Eaqz: "xeuugli",
    kmuXW: "x2lah0s",
    kB7OPa: "x9f619",
    kVQacm: "xb3r6kr",
    k5JduY: "x1s928wv",
    kwXMNM: "x1j6awrg",
    k3foIR: "x1m1drc7",
    k8Iv0R: "x1xrz1ek",
    kH8aOt: "x1unh1gc",
    kkgrvl: "x14h02p0",
    ks3ayO: "xfbqdoa x1nf9wp7",
    kloYau: "x2q1x1w",
    $$css: true
  },
  asleep: {
    kWkggS: "xmgn9m6 x99u5fr",
    $$css: true
  },
  awake: {
    kWkggS: "xhpg8l3 x18t4had",
    $$css: true
  },
  unknown: {
    kWkggS: "x1nzd1wa x18t4had",
    kKwaWg: "xu82qv9 x1yukxs4",
    kt9PQ7: "x1qhh985 x1vnwp91",
    kfdmCh: "xp9b3b8",
    kL6WhQ: "x15aaqo0",
    $$css: true
  },
  axis: {
    k1xSpc: "x78zum5",
    kjj79g: "x1qughib",
    kOIVth: "x8fetqu",
    kGuDYH: "x4ro2ui",
    kLWn49: "xfrs9s4",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  list: {
    k1xSpc: "xrvj5dj",
    kOIVth: "xxhr3t",
    kH6xsr: "x3ct3a4",
    kmVPX3: "x1717udv",
    kogj98: "x1ghz6dp",
    kEafiO: "x1ro6g4h",
    kPef9Z: "x13fuv20",
    kLZC3w: "x1fq36pv",
    $$css: true
  },
  interval: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x1pha0wt",
    kjj79g: "x1qughib",
    kOIVth: "x4upkte",
    k8WAf4: "x13eudtd",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    kGuDYH: "x1jq7itm",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  period: {
    kMwMTN: "x1ixqp2s",
    kcqcaj: "xss6m8b",
    $$css: true
  }
};
/** Supplied sleep and wake intervals, with gaps exposed as unrecorded time. */
export const SleepTimeline = /*#__PURE__*/React.forwardRef(function SleepTimeline({
  label,
  description,
  intervals,
  start,
  end,
  startLabel,
  endLabel,
  className,
  style,
  ...props
}, ref) {
  const duration = end - start;
  const validWindow = Number.isFinite(start) && Number.isFinite(end) && Number.isFinite(duration) && duration > 0;
  const validIntervals = intervals.every(interval => Number.isFinite(interval.start) && Number.isFinite(interval.end) && interval.end > interval.start && interval.start >= start && interval.end <= end && Object.hasOwn(stateLabels, interval.state));
  const ordered = [...intervals].sort((left, right) => left.start - right.start);
  const overlap = validIntervals && ordered.some((interval, index) => index > 0 && interval.start < ordered[index - 1].end);
  const problem = !validWindow ? "Timeline unavailable: the time window is invalid." : !validIntervals ? "Timeline unavailable: an interval is invalid or outside the time window." : overlap ? "Timeline unavailable: intervals overlap." : null;
  const segments = [];
  if (problem == null) {
    let cursor = start;
    let cursorLabel = startLabel;
    for (const interval of ordered) {
      if (interval.start > cursor) segments.push({
        start: cursor,
        end: interval.start,
        startLabel: cursorLabel,
        endLabel: interval.startLabel,
        state: "unknown",
        gap: true
      });
      segments.push(interval);
      cursor = interval.end;
      cursorLabel = interval.endLabel;
    }
    if (cursor < end) segments.push({
      start: cursor,
      end,
      startLabel: cursorLabel,
      endLabel,
      state: "unknown",
      gap: true
    });
  }
  const root = rs(["rs-sleep-timeline", className], styles.root);
  const caption = rs(["rs-sleep-timeline-caption"], styles.caption);
  const heading = rs(["rs-sleep-timeline-label"], styles.label);
  const copy = rs(["rs-sleep-timeline-description"], styles.description);
  const chart = rs(["rs-sleep-timeline-chart"], styles.chart);
  const axis = rs(["rs-sleep-timeline-axis"], styles.axis);
  const list = rs(["rs-sleep-timeline-list"], styles.list);
  const row = rs(["rs-sleep-timeline-interval"], styles.interval);
  const period = rs(["rs-sleep-timeline-period"], styles.period);
  const records = problem == null ? segments : intervals;
  return /*#__PURE__*/_jsxs("figure", {
    ...props,
    ref: ref,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsxs("figcaption", {
      className: caption.className,
      style: caption.style,
      children: [/*#__PURE__*/_jsx("span", {
        className: heading.className,
        style: heading.style,
        children: label
      }), description != null && /*#__PURE__*/_jsx("span", {
        className: copy.className,
        style: copy.style,
        children: description
      })]
    }), problem != null ? /*#__PURE__*/_jsx("p", {
      className: copy.className,
      style: copy.style,
      children: problem
    }) : /*#__PURE__*/_jsx("div", {
      "aria-hidden": "true",
      className: chart.className,
      style: chart.style,
      children: segments.map((segment, index) => {
        const asleep = segment.state === "asleep";
        const awake = segment.state === "awake";
        const unknown = segment.state === "unknown";
        const paint = rs(["rs-sleep-timeline-segment", asleep && "rs-sleep-timeline-asleep", awake && "rs-sleep-timeline-awake", unknown && "rs-sleep-timeline-unknown"], styles.segment, asleep && styles.asleep, awake && styles.awake, unknown && styles.unknown);
        return /*#__PURE__*/_jsx("span", {
          className: paint.className,
          style: {
            ...paint.style,
            width: `${(segment.end - segment.start) / duration * 100}%`
          }
        }, index);
      })
    }), /*#__PURE__*/_jsxs("div", {
      className: axis.className,
      style: axis.style,
      children: [/*#__PURE__*/_jsx("span", {
        children: startLabel
      }), /*#__PURE__*/_jsx("span", {
        children: endLabel
      })]
    }), intervals.length === 0 && /*#__PURE__*/_jsx("p", {
      className: copy.className,
      style: copy.style,
      children: "No sleep intervals recorded"
    }), records.length > 0 && /*#__PURE__*/_jsx("ul", {
      className: list.className,
      style: list.style,
      children: records.map((interval, index) => /*#__PURE__*/_jsxs("li", {
        className: row.className,
        style: row.style,
        children: [/*#__PURE__*/_jsx("span", {
          children: "gap" in interval && interval.gap ? "Unrecorded" : Object.hasOwn(stateLabels, interval.state) ? stateLabels[interval.state] : "Unknown state"
        }), /*#__PURE__*/_jsxs("span", {
          className: period.className,
          style: period.style,
          children: [interval.startLabel, " to ", interval.endLabel]
        })]
      }, index))
    })]
  });
});
//# sourceMappingURL=sleep-timeline.js.map
