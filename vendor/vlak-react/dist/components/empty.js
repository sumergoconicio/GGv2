import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  empty: {
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kjj79g: "xl56j7k",
    kOIVth: "x13z6uf9",
    kAzted: "x1nawqjc",
    kmVPX3: "xomzojh",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kaIpWk: "x2u8bby",
    $$css: true
  },
  title: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x6u19be",
    k63SB2: "x1s688f",
    kb6lSQ: "xjat59b",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  body: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x1roswp1",
    kLWn49: "xfrs9s4",
    kb6lSQ: "xjat59b",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  action: {
    keoZOQ: "x1mjqqkp",
    kzqmXN: "xeq5yr9 xvolacv",
    $$css: true
  }
};

/** A vacant cell. Title, one sentence, optional action. */
export const Empty = /*#__PURE__*/React.forwardRef(function Empty({
  title,
  action,
  className,
  style,
  children,
  ...props
}, ref) {
  const sx = rs(["rs-empty", className], styles.empty);
  const heading = rs(["rs-empty-title"], styles.title);
  const body = rs(["rs-empty-body"], styles.body);
  const act = rs(["rs-empty-action"], styles.action);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    },
    children: [title != null && /*#__PURE__*/_jsx("p", {
      className: heading.className,
      style: heading.style,
      children: title
    }), children != null && /*#__PURE__*/_jsx("p", {
      className: body.className,
      style: body.style,
      children: children
    }), action != null && /*#__PURE__*/_jsx("div", {
      className: act.className,
      style: act.style,
      children: action
    })]
  });
});
//# sourceMappingURL=empty.js.map
