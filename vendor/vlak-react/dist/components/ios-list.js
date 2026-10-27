"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Icon } from "./icon.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const styles = {
  root: {
    kMv6JI: "x1s07pz0",
    kGuDYH: "x19d36u7",
    kLWn49: "x19v9tvf",
    kMwMTN: "x1gney9c",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  title: {
    kqGvvJ: "xc4jdw5",
    kUOVxO: "x1nmg3sf",
    kGuDYH: "x1jvydc1",
    kLWn49: "x1fc57z9",
    k63SB2: "xo1l8bm",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  group: {
    kaIpWk: "x13pz1uv",
    kWkggS: "xhpg8l3",
    kMzoRj: "xmkeg23",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j xaxtmmi",
    kVQacm: "xb3r6kr",
    $$css: true
  },
  footer: {
    kqGvvJ: "x4gb806",
    kUOVxO: "x1nmg3sf",
    kGuDYH: "x4z9k3i",
    kLWn49: "xd4r4e8",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  row: {
    kysU6D: "xjyslct",
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kB7OPa: "x9f619",
    kOIVth: "x1v2ro7d",
    kzqmXN: "xh8yej3",
    k7Eaqz: "x1nb6za0",
    kAzted: "x1wiwyrm",
    kMzoRj: "xc342km",
    ksu8eU: "x1y0btm7",
    kt9PQ7: "xso031l",
    kVAM5u: "xghov5j",
    kWkggS: "xjbqb8w",
    kMwMTN: "x1gney9c",
    k8WAf4: "x1vvogim",
    kg3NbH: "x1hr3lfm",
    k9WMMc: "x1yc453h",
    kMv6JI: "xjb2p0i",
    kGuDYH: "x1qlqyl8",
    kLWn49: "x15bjb6t",
    kx8K5S: "x1t1lzn6",
    $$css: true
  },
  action: {
    kkrTdU: "x1ypdohk",
    kWkggS: "xjbqb8w x1v651oo",
    kMeerF: "x1k57tk5 x784prv",
    k3XXqK: "xaatb59",
    kjBf7l: "xqbrbdq",
    kInvED: "x1v57pqu",
    kmkexE: "x5gkzjs xrozb4q",
    $$css: true
  },
  disabled: {
    kSiTet: "xyd83as",
    kkrTdU: "x1h6gzvc",
    $$css: true
  },
  leading: {
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kmuXW: "x2lah0s",
    kzqmXN: "xgd8bvy",
    kAzted: "xe0p6wg",
    $$css: true
  },
  copy: {
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kOIVth: "x195vfkc",
    kzQI83: "x1iyjqo2",
    k7Eaqz: "xeuugli",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  description: {
    kGuDYH: "x1jvydc1",
    kLWn49: "x1fc57z9",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  trailing: {
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kOIVth: "x167g77z",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x1jvydc1",
    kLWn49: "x1fc57z9",
    kmuXW: "x2lah0s",
    $$css: true
  }
};

/** An inset group of rows; controls remain separate focus targets. */
export const IOSList = /*#__PURE__*/React.forwardRef(function IOSList({
  title,
  footer,
  className,
  style,
  children,
  ...props
}, ref) {
  const id = React.useId();
  const root = rs(["rs-ios-list", className], styles.root);
  const heading = rs(["rs-ios-list-title"], styles.title);
  const group = rs(["rs-ios-list-group"], styles.group);
  const note = rs(["rs-ios-list-footer"], styles.footer);
  return /*#__PURE__*/_jsxs("section", {
    ref: ref,
    "aria-labelledby": title ? id : undefined,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [title && /*#__PURE__*/_jsx("h3", {
      ...heading,
      id: id,
      children: title
    }), /*#__PURE__*/_jsx("div", {
      ...group,
      children: children
    }), footer && /*#__PURE__*/_jsx("p", {
      ...note,
      children: footer
    })]
  });
});

/** Supply onClick for a native button, or omit it to hold a switch or other input. */
export const IOSListRow = /*#__PURE__*/React.forwardRef(function IOSListRow({
  label,
  description,
  leading,
  trailing,
  disclosure = false,
  onClick,
  disabled,
  className,
  style,
  ...props
}, ref) {
  const root = rs(["rs-ios-list-row", !!onClick && "rs-ios-list-row-action", disabled && "rs-ios-list-row-disabled", className], styles.row, !!onClick && styles.action, disabled && styles.disabled);
  const mark = rs(["rs-ios-list-row-leading"], styles.leading);
  const copy = rs(["rs-ios-list-row-copy"], styles.copy);
  const detail = rs(["rs-ios-list-row-description"], styles.description);
  const end = rs(["rs-ios-list-row-trailing"], styles.trailing);
  const content = /*#__PURE__*/_jsxs(_Fragment, {
    children: [leading && /*#__PURE__*/_jsx("span", {
      ...mark,
      "aria-hidden": "true",
      children: leading
    }), /*#__PURE__*/_jsxs("span", {
      ...copy,
      children: [/*#__PURE__*/_jsx("span", {
        children: label
      }), description && /*#__PURE__*/_jsx("span", {
        ...detail,
        children: description
      })]
    }), (trailing || disclosure) && /*#__PURE__*/_jsxs("span", {
      ...end,
      children: [trailing, disclosure && /*#__PURE__*/_jsx(Icon, {
        name: "chevron-right",
        size: 16
      })]
    })]
  });
  return onClick ? /*#__PURE__*/_jsx("button", {
    ...props,
    ref: ref,
    type: "button",
    disabled: disabled,
    onClick: onClick,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: content
  }) : /*#__PURE__*/_jsx("div", {
    ...props,
    ref: ref,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: content
  });
});
//# sourceMappingURL=ios-list.js.map
