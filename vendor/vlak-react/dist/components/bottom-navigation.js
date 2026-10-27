import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { Icon } from "./icon.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    kWkggS: "xhpg8l3",
    kMwMTN: "x1gney9c",
    kEafiO: "x1ro6g4h",
    kPef9Z: "x13fuv20",
    kLZC3w: "x1fq36pv",
    kGO01o: "x1a148e8",
    $$css: true
  },
  list: {
    kH6xsr: "x3ct3a4",
    k1xSpc: "xrvj5dj",
    kprqdN: "x1mt1orb",
    klIVar: "x1rnidkh",
    kOIVth: "xvh977a",
    kmVPX3: "x7gbtqy",
    kogj98: "x1ghz6dp",
    $$css: true
  },
  link: {
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kOIVth: "xvh977a",
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kB7OPa: "x9f619",
    kmVPX3: "x7gbtqy",
    kMwMTN: "x1ixqp2s",
    kybGjl: "x1hl2dhg",
    kGuDYH: "xkpwil5",
    kaIpWk: "xkrxur",
    k9WMMc: "x2b8uid",
    kHjlTd: "xj0a0fe",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  current: {
    kMwMTN: "x1gney9c",
    k63SB2: "x1s688f",
    kWkggS: "x6583kg",
    $$css: true
  }
};

/** Mobile destinations with safe-area padding and native links. Keep to five items. */
export const BottomNavigation = /*#__PURE__*/React.forwardRef(function BottomNavigation({
  items,
  current,
  label = "Primary navigation",
  className,
  style,
  ...props
}, ref) {
  const root = rs(["rs-bottom-navigation", className], styles.root);
  const list = rs(["rs-bottom-navigation-list"], styles.list);
  return /*#__PURE__*/_jsx("nav", {
    ref: ref,
    "aria-label": label,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: /*#__PURE__*/_jsx("ul", {
      ...list,
      children: items.map(item => {
        const active = current === item.id;
        const link = rs(["rs-bottom-navigation-link", active && "rs-bottom-navigation-current"], styles.link, active && styles.current);
        return /*#__PURE__*/_jsx("li", {
          children: /*#__PURE__*/_jsxs("a", {
            ...link,
            href: item.href,
            "aria-current": active ? "page" : undefined,
            children: [item.icon && /*#__PURE__*/_jsx(Icon, {
              name: item.icon
            }), /*#__PURE__*/_jsxs("span", {
              children: [item.label, item.count != null ? ` (${item.count})` : ""]
            })]
          })
        }, item.id);
      })
    })
  });
});
//# sourceMappingURL=bottom-navigation.js.map
