import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx } from "react/jsx-runtime";
const styles = {
  sidebar: {
    kB7OPa: "x9f619",
    kzqmXN: "xopm3yk xvolacv",
    kAzted: "x1nawqjc",
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kWkggS: "xhpg8l3",
    kaIpWk: "x2u8bby",
    $$css: true
  },
  head: {
    kB7OPa: "x9f619",
    k8WAf4: "xgepmj6",
    kg3NbH: "x1qhpy6z",
    kGuDYH: "x1dcheo9 xzwmqnn",
    k63SB2: "x1s688f",
    kb6lSQ: "xjat59b",
    kMwMTN: "x1gney9c",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    kAzted: "xs41724",
    k1xSpc: "xerj2k5",
    kGNEyG: "x1wbzo2s",
    $$css: true
  },
  nav: {
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kLKAdn: "x1b58sdr",
    kwRFfy: "xyri2b",
    kGO01o: "x17r0vjz",
    kZCmMZ: "x1c1uobl",
    kzQI83: "x1iyjqo2",
    kmuXW: "xs83m0k",
    kCS8Yb: "x1r8uery",
    $$css: true
  },
  item: {
    kB7OPa: "x9f619",
    kmkexE: "x1487y47 xrozb4q",
    k1xSpc: "x78zum5 xerj2k5",
    kGNEyG: "x6s0dn4 x1wbzo2s",
    kAzted: "x1wszdd xs41724",
    kLKAdn: "x1b58sdr x6v3z81",
    kwRFfy: "xpnwous",
    kGO01o: "xmnamis xyeqjvx xxqorha",
    kZCmMZ: "xjh29tw",
    kGuDYH: "x1dcheo9 xzwmqnn",
    k63SB2: "xk50ysn",
    kb6lSQ: "xjat59b",
    kMwMTN: "x1ixqp2s x3ojhvl xys5w9o xcfh57o x1g3du9e",
    kybGjl: "x1hl2dhg",
    $$css: true
  },
  label: {
    kLKAdn: "x12t3zde",
    kwRFfy: "xpnwous",
    kGO01o: "xes99ow xd25ysi",
    kZCmMZ: "xjh29tw",
    kGuDYH: "xboafo0 x1k6fd34",
    k63SB2: "x1s688f",
    kb6lSQ: "xjat59b",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  foot: {
    kB7OPa: "x9f619",
    kLKAdn: "x1q57ora",
    kwRFfy: "xpnwous",
    kGO01o: "xsaxbkt",
    kZCmMZ: "xjh29tw",
    kEafiO: "x1ro6g4h",
    kPef9Z: "x13fuv20",
    kLZC3w: "x1fq36pv",
    kGuDYH: "xboafo0 xwxtnfu",
    k63SB2: "xk50ysn",
    kb6lSQ: "xjat59b",
    kMwMTN: "x1ixqp2s",
    kAzted: "xs41724",
    k1xSpc: "xerj2k5",
    kGNEyG: "x1wbzo2s",
    $$css: true
  }
};

/** One 204 module rail. Flush items, hairline edge. */
export const Sidebar = /*#__PURE__*/React.forwardRef(function Sidebar({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-sidebar", className], styles.sidebar);
  return /*#__PURE__*/_jsx("aside", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
export const SidebarHead = /*#__PURE__*/React.forwardRef(function SidebarHead({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-sidebar-head", className], styles.head);
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
export const SidebarNav = /*#__PURE__*/React.forwardRef(function SidebarNav({
  className,
  style,
  "aria-label": ariaLabel = "Sidebar",
  ...props
}, ref) {
  const sx = rs(["rs-sidebar-nav", className], styles.nav);
  return /*#__PURE__*/_jsx("nav", {
    ref: ref,
    "aria-label": props["aria-labelledby"] ? undefined : ariaLabel,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
export const SidebarItem = /*#__PURE__*/React.forwardRef(function SidebarItem({
  current,
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-sidebar-item", className], styles.item);
  return /*#__PURE__*/_jsx("a", {
    ref: ref,
    "aria-current": current ? "page" : undefined,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
export const SidebarLabel = /*#__PURE__*/React.forwardRef(function SidebarLabel({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-sidebar-label", className], styles.label);
  return /*#__PURE__*/_jsx("p", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
export const SidebarFoot = /*#__PURE__*/React.forwardRef(function SidebarFoot({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-sidebar-foot", className], styles.foot);
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
//# sourceMappingURL=sidebar.js.map
