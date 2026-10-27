import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx } from "react/jsx-runtime";
const styles = {
  card: {
    kMzoRj: "xc342km",
    ksu8eU: "xng3xce",
    kaIpWk: "x2u8bby",
    kmVPX3: "x1717udv",
    ks0D6T: "x6c8nl2",
    kWkggS: "xjbqb8w",
    kGVxlE: "x1gnnqk1",
    $$css: true
  },
  inner: {
    kB7OPa: "x9f619",
    kMzoRj: "xc342km",
    kaIpWk: "x2u8bby",
    kAzted: "x2lwn1j",
    kmVPX3: "x1717udv",
    kWkggS: "xjbqb8w",
    $$css: true
  },
  label: {
    kGuDYH: "xboafo0",
    k63SB2: "x1s688f",
    kMwMTN: "x1gney9c",
    kb6lSQ: "xjat59b",
    k1xSpc: "x1lliihq",
    k1K539: "x18jvhmb",
    $$css: true
  },
  title: {
    kGuDYH: "x1lkfr7t",
    k63SB2: "x1s688f",
    kMwMTN: "x1gney9c",
    kb6lSQ: "x72az59",
    keoZOQ: "xdj266r",
    k1K539: "xhbfen4",
    $$css: true
  },
  body: {
    kGuDYH: "xkpwil5",
    kMwMTN: "x1ixqp2s",
    k63SB2: "xk50ysn",
    kb6lSQ: "xjat59b",
    kLWn49: "xfrs9s4",
    kogj98: "x1ghz6dp",
    $$css: true
  }
};
export const Card = /*#__PURE__*/React.forwardRef(function Card({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-card", className], styles.card);
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
export const CardInner = /*#__PURE__*/React.forwardRef(function CardInner({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-card-in", className], styles.inner);
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
export const CardLabel = /*#__PURE__*/React.forwardRef(function CardLabel({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-card-label", className], styles.label);
  return /*#__PURE__*/_jsx("span", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
export const CardTitle = /*#__PURE__*/React.forwardRef(function CardTitle({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-card-title", className], styles.title);
  return /*#__PURE__*/_jsx("h3", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
export const CardBody = /*#__PURE__*/React.forwardRef(function CardBody({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-card-body", className], styles.body);
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
//# sourceMappingURL=card.js.map
