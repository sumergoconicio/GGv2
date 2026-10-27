import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx } from "react/jsx-runtime";
const styles = {
  hairline: {
    kGuDYH: "xkpwil5",
    kMwMTN: "x1qq9wsj",
    kybGjl: "x1hl2dhg",
    k63SB2: "xk50ysn",
    kb6lSQ: "xjat59b",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts xeu334z x10u6j7e",
    kmkexE: "x1487y47 xrozb4q",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x956shc",
    kInvED: "x7s97pk",
    $$css: true
  },
  underline: {
    kMwMTN: "x1aj07ft",
    kybGjl: "x1hl2dhg",
    kt9PQ7: "x1qhh985",
    kfdmCh: "x1sy0etr",
    kKwaWg: "xeoqfv3 x1i1w7li x180frz1",
    kgSjnq: "x1h6wxp0",
    k1YJky: "xiiz1g4",
    kz484i: "xiy17q3",
    kmkexE: "x1487y47 xrozb4q",
    $$css: true
  }
};

/** Text link with a hairline underline. In-copy variant is inset 1px. */
export const Link = /*#__PURE__*/React.forwardRef(function Link({
  underline = false,
  className,
  style,
  ...props
}, ref) {
  const sx = rs([underline ? "rs-link-underline" : "rs-link", className], underline ? styles.underline : styles.hairline);
  return /*#__PURE__*/_jsx("a", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
//# sourceMappingURL=link.js.map
