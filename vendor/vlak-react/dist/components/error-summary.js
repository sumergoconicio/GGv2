"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    kB7OPa: "x9f619",
    k7Eaqz: "xeuugli",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd",
    kaIpWk: "xkrxur",
    kmVPX3: "x1uz70x1",
    kWkggS: "xhpg8l3",
    kMwMTN: "x1gney9c",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  title: {
    kGuDYH: "xkpwil5",
    k63SB2: "x1s688f",
    kogj98: "x15l1sx8",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  list: {
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    kB88ic: "xe8uvvx",
    $$css: true
  },
  link: {
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kAzted: "x1wszdd",
    k7Eaqz: "xtp0tkc",
    ks0D6T: "x193iq5w",
    kGuDYH: "xkpwil5",
    k63SB2: "xo1l8bm",
    kMwMTN: "x1gney9c",
    kybGjl: "x1bvjpef",
    kNySMw: "x1ccp0d2",
    kcSHmL: "x1ohr1zr",
    kLWn49: "xfrs9s4",
    kHjlTd: "xj0a0fe",
    kaIpWk: "xkrxur",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  }
};

/** A form-wide summary linking each message to the field that needs attention. */
export const ErrorSummary = /*#__PURE__*/React.forwardRef(function ErrorSummary({
  errors,
  title = "Check the following fields",
  autoFocus = false,
  className,
  style,
  ...props
}, ref) {
  const local = React.useRef(null);
  const titleId = React.useId();
  const hasErrors = errors.length > 0;
  React.useEffect(() => {
    if (autoFocus && hasErrors) local.current?.focus();
  }, [autoFocus, hasErrors]);
  const root = rs(["rs-error-summary", className], styles.root);
  const heading = rs(["rs-error-summary-title"], styles.title);
  const list = rs(["rs-error-summary-list"], styles.list);
  const link = rs(["rs-error-summary-link"], styles.link);
  if (!hasErrors) return null;
  return /*#__PURE__*/_jsxs("div", {
    ref: node => {
      local.current = node;
      if (typeof ref === "function") ref(node);else if (ref) ref.current = node;
    },
    role: "alert",
    "aria-labelledby": titleId,
    tabIndex: -1,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("h2", {
      id: titleId,
      ...heading,
      children: title
    }), /*#__PURE__*/_jsx("ul", {
      role: "list",
      ...list,
      children: errors.map((error, index) => /*#__PURE__*/_jsx("li", {
        children: /*#__PURE__*/_jsx("a", {
          ...link,
          href: `#${encodeURIComponent(error.id)}`,
          onClick: event => {
            const field = document.getElementById(error.id);
            if (field) {
              event.preventDefault();
              field.focus();
              field.scrollIntoView?.({
                block: "nearest"
              });
            }
          },
          children: error.message
        })
      }, `${error.id}:${index}`))
    })]
  });
});
//# sourceMappingURL=error-summary.js.map
