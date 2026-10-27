"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { inertAttrs } from "../compat.js";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  bar: {
    kVAEAm: "xixxii4",
    k87sOh: "x13vifvy",
    kLqNvP: "x1o0tod",
    kt4wiu: "xtijo5x",
    kY2c9j: "xbshbgh",
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kZKoxP: "x1q7yecz x1ibqicw",
    kGuDYH: "x1dcheo9 xhivn8v",
    k63SB2: "xk50ysn",
    kb6lSQ: "xjat59b",
    kLWn49: "xwn7fz2",
    kWkggS: "xjbqb8w",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16stqrj",
    kmkexE: "x1487y47",
    $$css: true
  },
  scrolled: {
    kWkggS: "xhpg8l3",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  inner: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kOIVth: "x15iy025 xaw9q77",
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kLKAdn: "xexx8yu",
    kGO01o: "x18d9i69",
    kwRFfy: "x521ovy x13okxth xm00gys",
    kZCmMZ: "x1kn8n4f x100udnc x1szjg9j x157vnwh",
    keTefX: "x1n536oz",
    $$css: true
  },
  crumbs: {
    kB88ic: "xe8uvvx",
    kmVPX3: "x1717udv",
    kogj98: "x1ghz6dp",
    k7Eaqz: "xeuugli",
    kVQacm: "xb3r6kr",
    khDVqt: "xuxw1ft",
    kSiTet: "xg01cxk",
    k33iCy: "xlshs6z",
    kfzvcC: "x47corl",
    kmkexE: "xgf4er xrozb4q",
    kGuDYH: "x1dcheo9 xzwmqnn",
    kMwMTN: "x1gney9c",
    kb6lSQ: "xjat59b",
    k1xSpc: "x78zum5",
    kGNEyG: "x1pha0wt x1wbzo2s",
    kwnvtZ: "xusrac5",
    kOIVth: "x13z6uf9 x1k7x95o",
    $$css: true
  },
  crumbsOn: {
    kSiTet: "x1hc1fzr",
    k33iCy: "xnpuxes",
    kfzvcC: "x67bb7w",
    kmkexE: "xjfc8iu xrozb4q",
    $$css: true
  },
  item: {
    k1xSpc: "x3nfvp2",
    kGNEyG: "x1pha0wt x1wbzo2s",
    kOIVth: "x13z6uf9 x1k7x95o",
    $$css: true
  },
  root: {
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kAzted: "x1wszdd",
    k7Eaqz: "xtp0tkc",
    kmuXW: "x2lah0s",
    kMwMTN: "x1gney9c x9bg43w x4ws1ls",
    kybGjl: "x1hl2dhg",
    kmkexE: "xok90rr",
    kzqmXN: "x4sca53",
    k63SB2: "xk50ysn x1a3mjyj",
    $$css: true
  },
  rootFull: {
    k1xSpc: "x1pn8l9l",
    $$css: true
  },
  rootShort: {
    k1xSpc: "x1s85apg x1ko5e6g",
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
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x14tvtkk",
    kInvED: "x7s97pk",
    k1xSpc: "x3nfvp2 x1p0ob66",
    kGNEyG: "x6s0dn4 x1wbzo2s",
    kAzted: "x1wszdd xs41724",
    $$css: true
  },
  sep: {
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  here: {
    kMwMTN: "x1gney9c",
    k63SB2: "xk50ysn",
    kVQacm: "xb3r6kr",
    kg5iWk: "xlyipyv",
    k1xSpc: "x1p0ob66",
    kGNEyG: "x1wbzo2s",
    kAzted: "xs41724",
    $$css: true
  }
};

/**
 * The fixed top bar of the house chrome. Transparent at rest; once the
 * page cover scrolls away it gains the paper background and its bottom
 * hairline, and the breadcrumbs fade in. While hidden the trail is
 * inert and invisible, so nothing focuses into an unseen link.
 */
export const CrumbBar = /*#__PURE__*/React.forwardRef(function CrumbBar({
  trail,
  threshold = 110,
  root,
  rootShort,
  className,
  style,
  ...props
}, ref) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  const bar = rs(["rs-crumb-bar", scrolled && "rs-crumb-bar-scrolled", className], styles.bar, scrolled && styles.scrolled);
  const inner = rs(["rs-crumb-bar-inner"], styles.inner);
  const crumbs = rs(["rs-crumbs", "rs-crumb-crumbs", scrolled && "rs-crumb-crumbs-on"], styles.crumbs, scrolled && styles.crumbsOn);
  const item = rs(["rs-crumb-item"], styles.item);
  const rootSx = rs(["rs-crumb-root"], styles.root);
  const rootFull = rs(["rs-crumb-root-full"], styles.rootFull);
  const rootShortSx = rs(["rs-crumb-root-short"], styles.rootShort);
  const link = rs(["rs-crumbs-link", "rs-crumb-link"], styles.link);
  const sep = rs(["rs-crumbs-sep", "rs-crumb-sep"], styles.sep);
  const here = rs(["rs-crumbs-here", "rs-crumb-here"], styles.here);
  const rootLabel = rootShort ? /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx("span", {
      className: rootFull.className,
      style: rootFull.style,
      children: root?.label
    }), /*#__PURE__*/_jsx("span", {
      className: rootShortSx.className,
      style: rootShortSx.style,
      children: rootShort
    })]
  }) : root?.label;
  return /*#__PURE__*/_jsx("nav", {
    ref: ref,
    "aria-label": "Breadcrumb",
    ...props,
    className: bar.className,
    style: {
      ...bar.style,
      ...style
    },
    children: /*#__PURE__*/_jsxs("div", {
      className: inner.className,
      style: inner.style,
      children: [root && (root.href ? /*#__PURE__*/_jsx("a", {
        className: rootSx.className,
        style: rootSx.style,
        href: root.href,
        children: rootLabel
      }) : /*#__PURE__*/_jsx("span", {
        className: rootSx.className,
        style: rootSx.style,
        children: rootLabel
      })), /*#__PURE__*/_jsx("ol", {
        className: crumbs.className,
        style: crumbs.style,
        ...inertAttrs(!scrolled),
        children: trail.map((crumb, index) => {
          const last = index === trail.length - 1;
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
      })]
    })
  });
});
//# sourceMappingURL=crumb-bar.js.map
