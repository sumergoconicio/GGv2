"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { Icon } from "./icon.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kumcoG: "xv94nhv x1nk3w99",
    kOIVth: "x15iy025",
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  list: {
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kOIVth: "xvh977a",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  hideMobile: {
    k1xSpc: "x1pn8l9l",
    $$css: true
  },
  selected: {
    kWkggS: "x6583kg",
    k63SB2: "x1s688f",
    $$css: true
  },
  button: {
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kGNEyG: "x1cy8zhl",
    kOIVth: "xvh977a",
    kAzted: "x1wszdd",
    kmVPX3: "x79iv2k",
    kMzoRj: "xc342km",
    kaIpWk: "xkrxur",
    kWkggS: "xjbqb8w",
    kMwMTN: "x1gney9c",
    kMv6JI: "xjb2p0i",
    kGuDYH: "x1jchvi3",
    k9WMMc: "x1yc453h",
    kkrTdU: "x1ypdohk",
    kjBf7l: "xqbrbdq",
    kInvED: "x2ssjo2",
    $$css: true
  },
  description: {
    kMwMTN: "x1ixqp2s",
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    k63SB2: "xo1l8bm",
    $$css: true
  },
  detail: {
    k7Eaqz: "xeuugli",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  title: {
    kGuDYH: "x1603h9y",
    kLWn49: "x1u7k74",
    kqGvvJ: "xq6kz29",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  back: {
    k1xSpc: "x1s85apg xa6rfa5",
    k1K539: "xyi6m4r",
    $$css: true
  }
};

/** List/detail selection with a mobile back path and preserved item focus. */
export const MasterDetail = /*#__PURE__*/React.forwardRef(function MasterDetail({
  items,
  label = "Items",
  value,
  defaultValue = null,
  onValueChange,
  emptyLabel = "Select an item to see its details",
  className,
  style,
  ...props
}, ref) {
  const [inner, setInner] = React.useState(defaultValue);
  const current = value === undefined ? inner : value;
  const item = items.find(entry => entry.id === current);
  const heading = React.useRef(null);
  const buttons = React.useRef(new Map());
  const focusTarget = React.useRef(null);
  React.useLayoutEffect(() => {
    if (focusTarget.current === "detail" && item) heading.current?.focus();else if (focusTarget.current && !item) buttons.current.get(focusTarget.current)?.focus();
    focusTarget.current = null;
  }, [item]);
  const choose = id => {
    focusTarget.current = id ? "detail" : item?.id ?? null;
    if (value === undefined) setInner(id);
    onValueChange?.(id);
  };
  const root = rs(["rs-master-detail", className], styles.root);
  const list = rs(["rs-master-detail-list", Boolean(item) && "rs-master-detail-list-hidden"], styles.list, Boolean(item) && styles.hideMobile);
  const detail = rs(["rs-master-detail-panel", !item && "rs-master-detail-panel-hidden"], styles.detail, !item && styles.hideMobile);
  const title = rs(["rs-master-detail-title"], styles.title);
  const description = rs(["rs-master-detail-description"], styles.description);
  const back = rs(["rs-master-detail-back"], styles.back);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsxs("div", {
      ...list,
      role: "group",
      "aria-label": label,
      children: [items.map(entry => {
        const selected = entry.id === current;
        const button = rs(["rs-master-detail-button", selected && "rs-master-detail-selected"], styles.button, selected && styles.selected);
        return /*#__PURE__*/_jsxs("button", {
          type: "button",
          ref: element => {
            if (element) buttons.current.set(entry.id, element);else buttons.current.delete(entry.id);
          },
          ...button,
          "aria-pressed": selected,
          onClick: () => choose(entry.id),
          children: [/*#__PURE__*/_jsx("span", {
            children: entry.label
          }), entry.description && /*#__PURE__*/_jsx("span", {
            ...description,
            children: entry.description
          })]
        }, entry.id);
      }), !items.length && /*#__PURE__*/_jsx("p", {
        children: "No items"
      })]
    }), /*#__PURE__*/_jsx("section", {
      ...detail,
      "aria-label": item ? `${item.label} details` : `${label} details`,
      children: item ? /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx("div", {
          ...back,
          children: /*#__PURE__*/_jsxs(Button, {
            variant: "ghost",
            onClick: () => choose(null),
            children: [/*#__PURE__*/_jsx(Icon, {
              name: "arrow-left"
            }), "Back to ", label.toLocaleLowerCase()]
          })
        }), /*#__PURE__*/_jsx("h2", {
          ref: heading,
          tabIndex: -1,
          ...title,
          children: item.label
        }), item.detail]
      }) : /*#__PURE__*/_jsx("p", {
        children: emptyLabel
      })
    })]
  });
});
//# sourceMappingURL=master-detail.js.map
