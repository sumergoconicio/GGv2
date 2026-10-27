import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx } from "react/jsx-runtime";
const styles = {
  cite: {
    kGuDYH: "x1ve87vm",
    k63SB2: "x1s688f",
    kb6lSQ: "x12oo3zp",
    kLWn49: "x14ju556",
    kXLuUW: "x1v0h343",
    khDVqt: "xuxw1ft",
    $$css: true
  },
  citeA: {
    kMwMTN: "x1ixqp2s x1ljsg05",
    kybGjl: "x1hl2dhg",
    kmkexE: "x1487y47 xrozb4q",
    $$css: true
  },
  refs: {
    kB88ic: "xe8uvvx",
    kt6KFK: "xuvdhmn",
    keoZOQ: "x1tbvfm1",
    k1K539: "xhbfen4",
    keTefX: "x1lziwak",
    k71WvV: "x14z9mp",
    kmVPX3: "x1717udv",
    $$css: true
  },
  item: {
    kAmcRD: "x1pi3tbf",
    kVAEAm: "x1n2onr6",
    kLKAdn: "x1pe9zv5",
    kGO01o: "x1v0wz0i",
    kGuDYH: "x1dcheo9",
    k63SB2: "xk50ysn",
    kLWn49: "xfrs9s4",
    kMwMTN: "x1ixqp2s",
    kb6lSQ: "xjat59b",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts x1bta2m4",
    k4rD7h: "x1v8tlld",
    kmjqbQ: "x1dln2f2",
    kgeoSG: "x142f4i2",
    kEoFBp: "x1hmns74",
    kSJ0CW: "x4fp4ol",
    k96MEf: "x111xrip",
    kOlAkY: "xhfpmrc",
    kKZZS1: "x1wnbjh8",
    kHh9I5: "xhr1m4f",
    k7yrt4: "xil0lrb",
    kxBb7d: "x15xd52w",
    $$css: true
  },
  authors: {
    kMwMTN: "x1aj07ft",
    k63SB2: "xk50ysn",
    $$css: true
  },
  doi: {
    kMv6JI: "x1mb2qyg",
    kGuDYH: "x12lo8hy",
    kMwMTN: "x1ixqp2s x1d6p4sn",
    kybGjl: "x1hl2dhg",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts xeu334z",
    kmkexE: "x1487y47 xrozb4q",
    kTgw9: "x1yn0g08",
    $$css: true
  },
  box: {
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kaIpWk: "x1po71e9",
    kmVPX3: "xomzojh x1y9ln37",
    keoZOQ: "x1mjqqkp",
    $$css: true
  },
  boxLabel: {
    kGuDYH: "xboafo0",
    k63SB2: "x1s688f",
    kMwMTN: "x1ixqp2s",
    kb6lSQ: "xjat59b",
    k1K539: "xhbfen4",
    $$css: true
  },
  boxText: {
    kGuDYH: "x1dcheo9",
    k63SB2: "xk50ysn",
    kMwMTN: "x1ixqp2s",
    kLWn49: "xfrs9s4",
    kfSwDN: "xvrbanz",
    $$css: true
  }
};

/** Inline superscript citation. */
export const Cite = /*#__PURE__*/React.forwardRef(function Cite({
  className,
  style,
  children,
  ...props
}, ref) {
  const sx = rs(["rs-cite", className], styles.cite);
  return /*#__PURE__*/_jsx("sup", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    },
    children: children
  });
});
export const CiteLink = /*#__PURE__*/React.forwardRef(function CiteLink({
  className,
  style,
  ...props
}, ref) {
  const sx = rs([className, "rs-cite-cite-a"], styles.citeA);
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

/** Numbered 1px list. Numerals hang in the gutter. */
export const Refs = /*#__PURE__*/React.forwardRef(function Refs({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-refs", className], styles.refs);
  return /*#__PURE__*/_jsx("ol", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
export const RefItem = /*#__PURE__*/React.forwardRef(function RefItem({
  className,
  style,
  ...props
}, ref) {
  const sx = rs([className, "rs-cite-item"], styles.item);
  return /*#__PURE__*/_jsx("li", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
export const RefAuthors = /*#__PURE__*/React.forwardRef(function RefAuthors({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-ref-authors", className], styles.authors);
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
export const RefDoi = /*#__PURE__*/React.forwardRef(function RefDoi({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-ref-doi", className], styles.doi);
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
export const CiteBox = /*#__PURE__*/React.forwardRef(function CiteBox({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-cite-box", className], styles.box);
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
export const CiteBoxLabel = /*#__PURE__*/React.forwardRef(function CiteBoxLabel({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-cite-box-label", className], styles.boxLabel);
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
export const CiteBoxText = /*#__PURE__*/React.forwardRef(function CiteBoxText({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-cite-box-text", className], styles.boxText);
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
//# sourceMappingURL=refs.js.map
