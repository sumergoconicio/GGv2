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
    kOIVth: "x8fetqu",
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    kLWn49: "xfrs9s4",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  head: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kjj79g: "x1qughib",
    kGNEyG: "x1pha0wt",
    kOIVth: "x1tmakyn",
    $$css: true
  },
  title: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xkpwil5",
    k63SB2: "x1s688f",
    $$css: true
  },
  copy: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    ks0D6T: "x1qp14f0",
    $$css: true
  },
  metadata: {
    k1xSpc: "xrvj5dj",
    kumcoG: "xyqyb5s x1nk3w99",
    kOIVth: "xpyfehb",
    k8WAf4: "xgepmj6",
    kogj98: "x1ghz6dp",
    kLoX6v: "x1pck0ws",
    kDUl1X: "xykt701",
    k5QoK5: "xg5kxjx",
    $$css: true
  },
  value: {
    kogj98: "x12yysl2",
    kGuDYH: "xkpwil5",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  list: {
    kH6xsr: "x3ct3a4",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    $$css: true
  },
  observation: {
    k1xSpc: "xrvj5dj",
    kumcoG: "xed3ryv x1nk3w99",
    kOIVth: "x1tmakyn",
    k8WAf4: "x142x9wm",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  time: {
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  content: {
    k1xSpc: "xrvj5dj",
    kOIVth: "xpj7pl4",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  observationLabel: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xkpwil5",
    k63SB2: "xk50ysn",
    $$css: true
  },
  notes: {
    kGuDYH: "xkpwil5",
    ks0D6T: "x1qp14f0",
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    $$css: true
  },
  action: {
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kzqmXN: "x14atkfc",
    $$css: true
  }
};
function timestamp(value) {
  if (value == null) return null;
  const parts = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2})(?:\.\d+)?)?(Z|[+-]\d{2}:\d{2})$/.exec(value);
  if (!parts) return null;
  const [, yearText, monthText, dayText, hourText, minuteText, secondText] = parts;
  const year = Number(yearText),
    month = Number(monthText),
    day = Number(dayText);
  const lastDay = month === 2 ? year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 29 : 28 : [4, 6, 9, 11].includes(month) ? 30 : 31;
  if (month < 1 || month > 12 || day < 1 || day > lastDay || Number(hourText) > 23 || Number(minuteText) > 59 || Number(secondText ?? 0) > 59) return null;
  const result = Date.parse(value);
  return Number.isFinite(result) ? result : null;
}
const supplied = value => value == null || typeof value === "string" && !value.trim() ? "Not supplied" : typeof value === "number" && !Number.isFinite(value) ? "Unavailable" : value;
/** A chronological notebook of supplied culture observations, without protocol recommendations. */
export const CultureLog = /*#__PURE__*/React.forwardRef(function CultureLog({
  label,
  cultureId,
  sampleId,
  observations,
  medium,
  status,
  conditions = [],
  actions = [],
  onAction,
  pending = false,
  order = "oldest",
  className,
  style,
  children,
  ...props
}, ref) {
  const id = React.useId();
  const valid = observations.length <= 256 && conditions.length <= 32 && actions.length <= 16 && [observations, conditions, actions].every(records => records.every(record => record.id.trim()) && new Set(records.map(record => record.id)).size === records.length);
  const sorted = valid ? observations.map((observation, index) => ({
    observation,
    index,
    time: timestamp(observation.dateTime)
  })).sort((a, b) => a.time == null ? b.time == null ? a.index - b.index : 1 : b.time == null ? -1 : (order === "newest" ? b.time - a.time : a.time - b.time) || a.index - b.index) : [];
  const root = rs(["rs-culture-log", className], styles.root);
  const head = rs(["rs-culture-log-head"], styles.head);
  const title = rs(["rs-culture-log-title"], styles.title);
  const copy = rs(["rs-culture-log-copy"], styles.copy);
  const metadata = rs(["rs-culture-log-metadata"], styles.metadata);
  const valueStyle = rs(["rs-culture-log-value"], styles.value);
  const list = rs(["rs-culture-log-list"], styles.list);
  const observationStyle = rs(["rs-culture-log-observation"], styles.observation);
  const timeStyle = rs(["rs-culture-log-time"], styles.time);
  const content = rs(["rs-culture-log-content"], styles.content);
  const observationLabel = rs(["rs-culture-log-observation-label"], styles.observationLabel);
  const notes = rs(["rs-culture-log-notes"], styles.notes);
  const actionsStyle = rs(["rs-culture-log-actions"], styles.actions);
  const actionStyle = rs(["rs-culture-log-action"], styles.action);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    role: "group",
    "aria-labelledby": `${id}-label`,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsxs("div", {
      ...head,
      children: [/*#__PURE__*/_jsx("p", {
        ...title,
        id: `${id}-label`,
        children: label
      }), /*#__PURE__*/_jsx("span", {
        ...copy,
        id: `${id}-status`,
        children: status?.trim() || "Status not supplied"
      })]
    }), /*#__PURE__*/_jsxs("dl", {
      ...metadata,
      children: [/*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("dt", {
          ...copy,
          children: "Culture"
        }), /*#__PURE__*/_jsx("dd", {
          ...valueStyle,
          children: supplied(cultureId)
        })]
      }), /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("dt", {
          ...copy,
          children: "Sample"
        }), /*#__PURE__*/_jsx("dd", {
          ...valueStyle,
          children: supplied(sampleId)
        })]
      }), /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("dt", {
          ...copy,
          children: "Medium"
        }), /*#__PURE__*/_jsx("dd", {
          ...valueStyle,
          children: supplied(medium)
        })]
      }), valid && conditions.map(condition => /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("dt", {
          ...copy,
          children: condition.label.trim() || "Condition"
        }), /*#__PURE__*/_jsx("dd", {
          ...valueStyle,
          children: supplied(condition.value)
        })]
      }, condition.id))]
    }), !valid ? /*#__PURE__*/_jsx("p", {
      ...copy,
      children: "Culture records unavailable: supply unique identifiers, at most 256 observations, 32 conditions and 16 actions"
    }) : /*#__PURE__*/_jsxs(_Fragment, {
      children: [sorted.length === 0 ? /*#__PURE__*/_jsx("p", {
        ...copy,
        children: "No observations supplied"
      }) : /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsxs("p", {
          ...copy,
          children: [order === "oldest" ? "Oldest" : "Newest", " dated observation first; undated records follow"]
        }), /*#__PURE__*/_jsx("ol", {
          ...list,
          "aria-label": `${label}, observations`,
          children: sorted.map(({
            observation,
            time
          }) => /*#__PURE__*/_jsxs("li", {
            ...observationStyle,
            children: [/*#__PURE__*/_jsx("time", {
              ...timeStyle,
              dateTime: time == null ? undefined : observation.dateTime,
              children: time == null ? observation.dateTime == null ? "Time not supplied" : "Timestamp unavailable" : observation.timeLabel?.trim() || observation.dateTime
            }), /*#__PURE__*/_jsxs("div", {
              ...content,
              children: [/*#__PURE__*/_jsxs("div", {
                ...head,
                children: [/*#__PURE__*/_jsx("p", {
                  ...observationLabel,
                  children: observation.label.trim() || "Observation label not supplied"
                }), /*#__PURE__*/_jsx("span", {
                  ...copy,
                  children: observation.status?.trim() || "Observation status not supplied"
                })]
              }), observation.notes != null && /*#__PURE__*/_jsx("div", {
                ...notes,
                children: observation.notes
              })]
            })]
          }, observation.id))
        })]
      }), /*#__PURE__*/_jsx("p", {
        ...copy,
        role: "status",
        children: pending ? "Record update pending; supplied status is unchanged" : null
      }), onAction && actions.length > 0 && /*#__PURE__*/_jsx("div", {
        ...actionsStyle,
        children: actions.map(action => /*#__PURE__*/_jsx(Button, {
          ...actionStyle,
          variant: "ghost",
          disabled: pending || action.disabled,
          "aria-label": `${action.label}: ${cultureId.trim() || label}`,
          "aria-describedby": `${id}-status`,
          onClick: () => onAction(action.id),
          children: action.label
        }, action.id))
      })]
    }), children]
  });
});
//# sourceMappingURL=culture-log.js.map
