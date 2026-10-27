import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    kH6xsr: "x3ct3a4",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    kMwMTN: "x1gney9c",
    kzqmXN: "xh8yej3",
    $$css: true
  },
  event: {
    k1xSpc: "xrvj5dj",
    kumcoG: "x1gkv2y9 x1nk3w99",
    kOIVth: "x13z6uf9",
    k8WAf4: "xgepmj6",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  time: {
    kMwMTN: "x1ixqp2s",
    kGuDYH: "xkpwil5",
    kcqcaj: "xss6m8b",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  title: {
    kogj98: "x1ghz6dp",
    k63SB2: "x1s688f",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  body: {
    kqGvvJ: "xahocic",
    kLWn49: "xfrs9s4",
    ks0D6T: "x1qp14f0",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  summary: {
    kAzted: "x1wszdd",
    k1xSpc: "xtcx8v3",
    kfiyM8: "xc26acl",
    kkrTdU: "x1ypdohk",
    kaIpWk: "xkrxur",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  }
};

/** Chronological events in caller-supplied order, with optional native disclosures. */
export const ActivityTimeline = /*#__PURE__*/React.forwardRef(function ActivityTimeline({
  events,
  emptyLabel = "No activity yet",
  locale = "en",
  timeZone = "UTC",
  className,
  style,
  ...props
}, ref) {
  const root = rs(["rs-activity-timeline", className], styles.root);
  const row = rs(["rs-activity-timeline-event"], styles.event);
  const time = rs(["rs-activity-timeline-time"], styles.time);
  const title = rs(["rs-activity-timeline-title"], styles.title);
  const body = rs(["rs-activity-timeline-body"], styles.body);
  const summary = rs(["rs-activity-timeline-summary"], styles.summary);
  return /*#__PURE__*/_jsxs("ol", {
    ref: ref,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [!events.length && /*#__PURE__*/_jsx("li", {
      ...row,
      children: emptyLabel
    }), events.map(event => {
      const date = new Date(event.dateTime);
      return /*#__PURE__*/_jsxs("li", {
        ...row,
        children: [/*#__PURE__*/_jsx("time", {
          ...time,
          dateTime: event.dateTime,
          children: event.timeLabel ?? (Number.isNaN(date.valueOf()) ? event.dateTime : new Intl.DateTimeFormat(locale, {
            dateStyle: "medium",
            timeStyle: "short",
            timeZone
          }).format(date))
        }), /*#__PURE__*/_jsxs("div", {
          children: [/*#__PURE__*/_jsx("p", {
            ...title,
            children: event.title
          }), event.actor != null && /*#__PURE__*/_jsx("p", {
            ...time,
            children: event.actor
          }), event.description != null && /*#__PURE__*/_jsx("div", {
            ...body,
            children: event.description
          }), event.details != null && /*#__PURE__*/_jsxs("details", {
            children: [/*#__PURE__*/_jsx("summary", {
              ...summary,
              children: "Details"
            }), /*#__PURE__*/_jsx("div", {
              ...body,
              children: event.details
            })]
          })]
        })]
      }, event.id);
    })]
  });
});
//# sourceMappingURL=activity-timeline.js.map
