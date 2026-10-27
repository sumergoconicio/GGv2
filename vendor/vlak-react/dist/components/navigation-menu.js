import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx } from "react/jsx-runtime";
const styles = {
  nav: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kOIVth: "x1yju4uz x17gopzu",
    kwnvtZ: "xusrac5",
    $$css: true
  },
  link: {
    k7Eaqz: "xtp0tkc",
    k1xSpc: "x3nfvp2 x1p0ob66",
    kGNEyG: "x6s0dn4 x1wbzo2s",
    kAzted: "x1wszdd xs41724",
    kg3NbH: "x62mm0n",
    kGuDYH: "xkpwil5 xzwmqnn",
    k63SB2: "xk50ysn",
    kb6lSQ: "xjat59b",
    kMwMTN: "x1ixqp2s x3ojhvl xys5w9o xcfh57o x1g3du9e",
    kybGjl: "x1hl2dhg",
    kmkexE: "x1487y47 xrozb4q",
    $$css: true
  }
};

/** Links in a row; the current page is ink. */
export const NavigationMenu = /*#__PURE__*/React.forwardRef(function NavigationMenu({
  items,
  className,
  style,
  "aria-label": ariaLabel = "Primary",
  ...props
}, ref) {
  const nav = rs(["rs-nav", className], styles.nav);
  const link = rs(["rs-nav-link"], styles.link);
  return /*#__PURE__*/_jsx("nav", {
    ref: ref,
    "aria-label": props["aria-labelledby"] ? undefined : ariaLabel,
    ...props,
    className: nav.className,
    style: {
      ...nav.style,
      ...style
    },
    children: items.map((item, index) => /*#__PURE__*/_jsx("a", {
      href: item.href,
      "aria-current": item.current ? "page" : undefined,
      className: link.className,
      style: link.style,
      children: item.label
    }, index))
  });
});
//# sourceMappingURL=navigation-menu.js.map
