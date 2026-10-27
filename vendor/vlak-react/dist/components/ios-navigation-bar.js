"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Icon } from "./icon.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
const styles = {
  root: {
    kB7OPa: "x9f619",
    kMv6JI: "x1s07pz0",
    kMwMTN: "x1gney9c",
    k7Eaqz: "xeuugli",
    kmVPX3: "xe8ttls",
    $$css: true
  },
  vertical: {
    k1xSpc: "x78zum5",
    kGNEyG: "x1cy8zhl",
    kjj79g: "x1qughib",
    kOIVth: "xou54vl",
    kmVPX3: "x1717udv",
    $$css: true
  },
  row: {
    k1xSpc: "xrvj5dj",
    kumcoG: "x1frbbav",
    kOIVth: "x167g77z",
    kGNEyG: "x6s0dn4",
    kAzted: "xt55aet",
    $$css: true
  },
  leading: {
    kFhvOy: "x1lqcxt8",
    $$css: true
  },
  actions: {
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kOIVth: "x195vfkc",
    kmVPX3: "x9ms5i6",
    kaIpWk: "x1scc38k",
    kFhvOy: "x1qab1bc",
    kWkggS: "x6583kg",
    kMzoRj: "xmkeg23",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd xaxtmmi",
    $$css: true
  },
  rail: {
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kGNEyG: "x6s0dn4",
    kOIVth: "x1v2ro7d",
    kmuXW: "x2lah0s",
    $$css: true
  },
  verticalActions: {
    kXwgrk: "xdt5ytf",
    $$css: true
  },
  button: {
    kysU6D: "xjyslct",
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kOIVth: "x17d4w8g",
    kB7OPa: "x9f619",
    k7Eaqz: "x1nb6za0",
    kAzted: "x1gg8mnh",
    k8WAf4: "xp59q4u",
    kg3NbH: "xaope02",
    kMzoRj: "xc342km",
    kaIpWk: "x13pz1uv",
    kWkggS: "xjbqb8w x1q26ab9",
    kMwMTN: "x1gney9c",
    kMv6JI: "x1s07pz0",
    kGuDYH: "x19d36u7",
    kLWn49: "x19v9tvf",
    kkrTdU: "x1ypdohk",
    kMeerF: "x1k57tk5 x784prv",
    k3XXqK: "xaatb59",
    kjBf7l: "xqbrbdq",
    kInvED: "x2ssjo2",
    kmkexE: "x5gkzjs xrozb4q",
    $$css: true
  },
  iconButton: {
    kzqmXN: "x187nhsf",
    kmVPX3: "x1717udv",
    $$css: true
  },
  back: {
    k7Eaqz: "x900493",
    kAzted: "x1wxaq2x",
    kzqmXN: "x1useyqa",
    kaIpWk: "x1khhgft",
    kmVPX3: "x1717udv",
    kWkggS: "x6583kg",
    kMzoRj: "xmkeg23",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd xaxtmmi",
    $$css: true
  },
  disabled: {
    kSiTet: "xyd83as",
    kkrTdU: "x1h6gzvc",
    $$css: true
  },
  title: {
    kogj98: "x1ghz6dp",
    k9WMMc: "x2b8uid",
    kGuDYH: "x19d36u7",
    kLWn49: "x19v9tvf",
    k63SB2: "x1s688f",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  large: {
    kqGvvJ: "xpwl6i8",
    kUOVxO: "xxbjj12",
    kGuDYH: "x1m6oxru",
    kLWn49: "x1bz1tnd",
    kb6lSQ: "xrq0m5f",
    k9WMMc: "x1yc453h",
    k63SB2: "x1xlr1w8",
    $$css: true
  },
  verticalTitle: {
    k9WMMc: "x1yc453h",
    kGuDYH: "xneq65o",
    kLWn49: "x1slxwg",
    k63SB2: "x1xlr1w8",
    kqGvvJ: "x1jp4ehj",
    kUOVxO: "xrxpjvj",
    $$css: true
  }
};

/** Compact and large-title navigation, with an optional trailing Duo action rail. */
export const IOSNavigationBar = /*#__PURE__*/React.forwardRef(function IOSNavigationBar({
  title,
  onBack,
  backLabel = "Back",
  actions = [],
  orientation = "horizontal",
  largeTitle = false,
  className,
  style,
  ...props
}, ref) {
  const vertical = orientation === "vertical";
  const base = React.useId();
  const root = rs(["rs-ios-navigation-bar", vertical && "rs-ios-navigation-bar-vertical", className], styles.root, vertical && styles.vertical);
  const row = rs(["rs-ios-navigation-bar-row"], styles.row);
  const leading = rs(["rs-ios-navigation-bar-leading"], styles.leading);
  const rail = rs(["rs-ios-navigation-bar-rail"], styles.rail);
  const group = rs(["rs-ios-navigation-bar-actions", vertical && "rs-ios-navigation-bar-actions-vertical"], styles.actions, vertical && styles.verticalActions);
  const heading = rs(["rs-ios-navigation-bar-title", largeTitle && "rs-ios-navigation-bar-large-title", vertical && "rs-ios-navigation-bar-vertical-title"], styles.title, largeTitle && styles.large, vertical && styles.verticalTitle);
  const backStyle = rs(["rs-ios-navigation-bar-button", "rs-ios-navigation-bar-back"], styles.button, styles.back);
  const back = onBack && /*#__PURE__*/_jsx("button", {
    ...backStyle,
    type: "button",
    "aria-label": backLabel,
    onClick: onBack,
    children: /*#__PURE__*/_jsx(Icon, {
      name: "chevron-left",
      size: 24
    })
  });
  const actionGroup = actions.length > 0 && /*#__PURE__*/_jsx("div", {
    ...group,
    children: actions.map(({
      id,
      label,
      icon,
      buttonId,
      type = "button",
      className: actionClass,
      style: actionStyle,
      disabled,
      ...buttonProps
    }) => {
      const action = rs(["rs-ios-navigation-bar-button", !!icon && "rs-ios-navigation-bar-icon-button", disabled && "rs-ios-navigation-bar-disabled", actionClass], styles.button, !!icon && styles.iconButton, disabled && styles.disabled);
      return /*#__PURE__*/_createElement("button", {
        ...buttonProps,
        key: id,
        id: buttonId ?? `${base}-${id}`,
        type: type,
        disabled: disabled,
        "aria-label": icon ? label : undefined,
        className: action.className,
        style: {
          ...action.style,
          ...actionStyle
        }
      }, icon ? /*#__PURE__*/_jsx("span", {
        "aria-hidden": "true",
        children: icon
      }) : label);
    })
  });
  return /*#__PURE__*/_jsx("header", {
    ref: ref,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: vertical ? /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsx("h2", {
        ...heading,
        children: title
      }), /*#__PURE__*/_jsxs("div", {
        ...rail,
        children: [back, actionGroup]
      })]
    }) : /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsxs("div", {
        ...row,
        children: [/*#__PURE__*/_jsx("div", {
          ...leading,
          children: back
        }), largeTitle ? /*#__PURE__*/_jsx("span", {}) : /*#__PURE__*/_jsx("h2", {
          ...heading,
          children: title
        }), actionGroup || /*#__PURE__*/_jsx("span", {})]
      }), largeTitle && /*#__PURE__*/_jsx("h2", {
        ...heading,
        children: title
      })]
    })
  });
});
//# sourceMappingURL=ios-navigation-bar.js.map
