import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  crumbs: {
    kGuDYH: "x1dcheo9 xzwmqnn",
    kMwMTN: "x1gney9c",
    kb6lSQ: "xjat59b",
    $$css: true
  },
  list: {
    kB88ic: "xe8uvvx",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    k1xSpc: "x78zum5",
    kGNEyG: "x1pha0wt x1wbzo2s",
    kwnvtZ: "xusrac5",
    kOIVth: "x13z6uf9 x1k7x95o",
    $$css: true
  },
  item: {
    k1xSpc: "x3nfvp2",
    kGNEyG: "x1pha0wt x1wbzo2s",
    kOIVth: "x13z6uf9 x1k7x95o",
    $$css: true
  },
  link: {
    k7Eaqz: "xtp0tkc",
    kmkexE: "x1487y47 xrozb4q",
    kMwMTN: "x1ixqp2s x3ojhvl xys5w9o xcfh57o x1fed0mq x9idoq5",
    k63SB2: "xo1l8bm",
    kybGjl: "x1hl2dhg x10o8aiq",
    kcSHmL: "xda060z",
    kWkggS: "xjbqb8w",
    k1xSpc: "x3nfvp2 x1p0ob66",
    kGNEyG: "x6s0dn4 x1wbzo2s",
    kAzted: "x1wszdd xs41724",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x14tvtkk",
    kInvED: "x7s97pk",
    $$css: true
  },
  sep: {
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  here: {
    kMwMTN: "x1gney9c",
    k63SB2: "xk50ysn",
    k1xSpc: "x1p0ob66",
    kGNEyG: "x1wbzo2s",
    kAzted: "xs41724",
    $$css: true
  }
};

/** A trail: ordered list in a nav, the current page marked. */
export const Breadcrumbs = /*#__PURE__*/React.forwardRef(function Breadcrumbs({
  items,
  className,
  style,
  ...props
}, ref) {
  const nav = rs(["rs-crumbs", className], styles.crumbs);
  const list = rs(["rs-crumbs-list"], styles.list);
  const item = rs(["rs-crumbs-item"], styles.item);
  const link = rs(["rs-crumbs-link"], styles.link);
  const sep = rs(["rs-crumbs-sep"], styles.sep);
  const here = rs(["rs-crumbs-here"], styles.here);
  return /*#__PURE__*/_jsx("nav", {
    ref: ref,
    "aria-label": "Breadcrumb",
    ...props,
    className: nav.className,
    style: {
      ...nav.style,
      ...style
    },
    children: /*#__PURE__*/_jsx("ol", {
      className: list.className,
      style: list.style,
      children: items.map((crumb, index) => {
        const last = index === items.length - 1;
        return /*#__PURE__*/_jsxs("li", {
          className: item.className,
          style: item.style,
          children: [index > 0 && /*#__PURE__*/_jsx("span", {
            className: sep.className,
            style: sep.style,
            "aria-hidden": "true",
            children: "/"
          }), last ? /*#__PURE__*/_jsx("span", {
            className: here.className,
            style: here.style,
            "aria-current": "page",
            children: crumb.label
          }) : crumb.href ? /*#__PURE__*/_jsx("a", {
            className: link.className,
            style: link.style,
            href: crumb.href,
            children: crumb.label
          }) : /*#__PURE__*/_jsx("span", {
            className: link.className,
            style: link.style,
            children: crumb.label
          })]
        }, index);
      })
    })
  });
});
//# sourceMappingURL=breadcrumbs.js.map
