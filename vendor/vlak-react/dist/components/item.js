import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  item: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kjj79g: "x1qughib",
    kOIVth: "x8fetqu",
    kAzted: "xe8gcm xs41724",
    k8WAf4: "x13eudtd x1nf832a",
    kg3NbH: "xnjsko4",
    kt9PQ7: "xcv4u0r x1t1lzn6",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    kaIpWk: "x2u8bby",
    $$css: true
  },
  title: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xkpwil5 xzwmqnn",
    k63SB2: "x1s688f",
    kb6lSQ: "xjat59b",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  desc: {
    keoZOQ: "xr9ek0c",
    k1K539: "xat24cr",
    kUOVxO: "xrxpjvj",
    kGuDYH: "x1up2fpq xwxtnfu",
    k63SB2: "xk50ysn",
    kb6lSQ: "xjat59b",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  meta: {
    kGuDYH: "xboafo0 xwxtnfu",
    k63SB2: "xk50ysn",
    kb6lSQ: "xjat59b",
    kMwMTN: "x1ixqp2s",
    kmuXW: "x2lah0s",
    $$css: true
  }
};

/** A flush row. Title occupies the cell; meta trails. */
export const Item = /*#__PURE__*/React.forwardRef(function Item({
  title,
  description,
  meta,
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-item", className], styles.item);
  const heading = rs(["rs-item-title"], styles.title);
  const note = rs(["rs-item-desc"], styles.desc);
  const trail = rs(["rs-item-meta"], styles.meta);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    },
    children: [/*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx("p", {
        className: heading.className,
        style: heading.style,
        children: title
      }), description != null && /*#__PURE__*/_jsx("p", {
        className: note.className,
        style: note.style,
        children: description
      })]
    }), meta != null && /*#__PURE__*/_jsx("span", {
      className: trail.className,
      style: trail.style,
      children: meta
    })]
  });
});
//# sourceMappingURL=item.js.map
