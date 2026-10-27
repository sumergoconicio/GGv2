"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    kLWn49: "xfrs9s4",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  heading: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x1jchvi3",
    k63SB2: "x1s688f",
    $$css: true
  },
  copy: {
    kogj98: "xbquzhq",
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  filters: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    kqGvvJ: "xq6kz29",
    $$css: true
  },
  button: {
    kmuXW: "x2lah0s",
    $$css: true
  },
  selected: {
    kWkggS: "xmgn9m6 xf7h6k7",
    kMwMTN: "x19rmm7l x1pljmm8",
    $$css: true
  },
  list: {
    kH6xsr: "x3ct3a4",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    kEafiO: "x1ro6g4h",
    kPef9Z: "x13fuv20",
    kLZC3w: "x1fq36pv",
    $$css: true
  },
  item: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    k8WAf4: "xgepmj6",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  head: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kjj79g: "x1qughib",
    kOIVth: "x13z6uf9",
    kGuDYH: "xkpwil5",
    k63SB2: "x1s688f",
    $$css: true
  },
  states: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x1lx4akv",
    kogj98: "x1ghz6dp",
    kGuDYH: "xkpwil5",
    $$css: true
  },
  term: {
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  value: {
    kogj98: "x1ghz6dp",
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    $$css: true
  }
};
const filters = {
  all: "All",
  active: "Active",
  unacknowledged: "Unacknowledged",
  shelved: "Shelved"
};
const actionLabels = {
  acknowledge: "Acknowledge",
  shelve: "Shelve",
  unshelve: "Unshelve"
};

/** An industrial alarm's condition, acknowledgement and shelving are independent records. */
export const AlarmPanel = /*#__PURE__*/React.forwardRef(function AlarmPanel({
  label,
  alarms,
  filter,
  defaultFilter = "all",
  onFilterChange,
  onAction,
  disabled,
  description,
  children,
  className,
  style,
  ...props
}, ref) {
  const [inner, setInner] = React.useState(defaultFilter);
  const current = filter ?? inner;
  const id = React.useId();
  const visible = alarms.filter(alarm => current === "all" || (current === "active" ? alarm.condition === "active" : current === "unacknowledged" ? alarm.acknowledgement === "unacknowledged" : alarm.shelving === "shelved"));
  const root = rs(["rs-alarm-panel", className], styles.root);
  const heading = rs(["rs-alarm-panel-heading"], styles.heading);
  const copy = rs(["rs-alarm-panel-copy"], styles.copy);
  const filterStyle = rs(["rs-alarm-panel-filters"], styles.filters);
  const list = rs(["rs-alarm-panel-list"], styles.list);
  const item = rs(["rs-alarm-panel-item"], styles.item);
  const head = rs(["rs-alarm-panel-head"], styles.head);
  const states = rs(["rs-alarm-panel-states"], styles.states);
  const term = rs(["rs-alarm-panel-term"], styles.term);
  const value = rs(["rs-alarm-panel-value"], styles.value);
  const actions = rs(["rs-alarm-panel-actions"], styles.actions);
  const action = rs(["rs-alarm-panel-button"], styles.button);
  return /*#__PURE__*/_jsxs("div", {
    ...props,
    ref: ref,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("p", {
      ...heading,
      id: id,
      children: label
    }), description != null && /*#__PURE__*/_jsx("p", {
      ...copy,
      children: description
    }), /*#__PURE__*/_jsx("div", {
      ...filterStyle,
      role: "group",
      "aria-label": `${label} filter`,
      children: Object.keys(filters).map(key => {
        const selected = current === key;
        const button = rs(["rs-alarm-panel-button", selected && "rs-alarm-panel-selected"], styles.button, selected && styles.selected);
        return /*#__PURE__*/_jsx(Button, {
          variant: "ghost",
          size: "sm",
          ...button,
          type: "button",
          disabled: disabled,
          "aria-pressed": selected,
          onClick: () => {
            if (filter === undefined) setInner(key);
            onFilterChange?.(key);
          },
          children: filters[key]
        }, key);
      })
    }), /*#__PURE__*/_jsxs("p", {
      ...copy,
      role: "status",
      children: [visible.length, " of ", alarms.length, " alarm records"]
    }), /*#__PURE__*/_jsx("ul", {
      ...list,
      "aria-labelledby": id,
      children: visible.map(alarm => /*#__PURE__*/_jsxs("li", {
        ...item,
        children: [/*#__PURE__*/_jsxs("div", {
          ...head,
          children: [/*#__PURE__*/_jsx("span", {
            children: alarm.label
          }), alarm.priority && /*#__PURE__*/_jsx("span", {
            children: alarm.priority
          })]
        }), alarm.source && /*#__PURE__*/_jsx("p", {
          ...copy,
          children: alarm.source
        }), /*#__PURE__*/_jsxs("dl", {
          ...states,
          children: [/*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("dt", {
              ...term,
              children: "Condition"
            }), /*#__PURE__*/_jsx("dd", {
              ...value,
              children: alarm.condition === "active" ? "Active" : alarm.condition === "cleared" ? "Cleared" : "Unknown"
            })]
          }), /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("dt", {
              ...term,
              children: "Acknowledgement"
            }), /*#__PURE__*/_jsx("dd", {
              ...value,
              children: alarm.acknowledgement === "acknowledged" ? "Acknowledged" : alarm.acknowledgement === "unacknowledged" ? "Unacknowledged" : "Unknown"
            })]
          }), /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("dt", {
              ...term,
              children: "Shelving"
            }), /*#__PURE__*/_jsx("dd", {
              ...value,
              children: alarm.shelving === "shelved" ? "Shelved" : alarm.shelving === "unshelved" ? "Not shelved" : "Unknown"
            })]
          })]
        }), alarm.shelving === "shelved" && /*#__PURE__*/_jsx("p", {
          ...copy,
          children: alarm.shelvedUntilLabel ? `Shelved until ${alarm.shelvedUntilLabel}` : "Shelving expiry unknown"
        }), alarm.timeLabel && /*#__PURE__*/_jsx("time", {
          ...copy,
          dateTime: alarm.dateTime,
          children: alarm.timeLabel
        }), alarm.note != null && /*#__PURE__*/_jsx("div", {
          ...copy,
          children: alarm.note
        }), alarm.pending && /*#__PURE__*/_jsxs("p", {
          ...copy,
          role: "status",
          children: ["Update pending for ", alarm.label]
        }), onAction && !!alarm.actions?.length && /*#__PURE__*/_jsx("div", {
          ...actions,
          "aria-busy": alarm.pending || undefined,
          children: alarm.actions.map(choice => /*#__PURE__*/_jsx(Button, {
            variant: "ghost",
            size: "sm",
            ...action,
            type: "button",
            disabled: disabled || alarm.pending,
            "aria-label": `${actionLabels[choice]}: ${alarm.label}`,
            onClick: () => onAction(alarm.id, choice),
            children: actionLabels[choice]
          }, choice))
        })]
      }, alarm.id))
    }), !visible.length && /*#__PURE__*/_jsx("p", {
      ...copy,
      children: alarms.length ? "No alarm records match this filter" : "No alarm records supplied"
    }), children]
  });
});
//# sourceMappingURL=alarm-panel.js.map
