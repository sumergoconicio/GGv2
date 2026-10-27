import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const at560 = "@media (min-width: 560px)";
const at940 = "@media (min-width: 940px)";
const at1280 = "@media (min-width: 1280px)";
const at1448 = "@media (min-width: 1448px)";
const styles = {
  flow: {
    k1xSpc: "xrvj5dj",
    kumcoG: "x1y6fwsi xy5q25r xc3o68e xav0att x137ulhv",
    kzqmXN: "x27mh1d",
    kOIVth: "x1rg3fk9",
    $$css: true
  },
  step: {
    kVAEAm: "x1n2onr6",
    kMzoRj: "x1kz39yt",
    ksu8eU: "xbsl7fq",
    kVAM5u: "xghov5j xi3331r",
    kaIpWk: "xkrxur",
    kLKAdn: "xfxficq",
    kwRFfy: "x66fxnm",
    kGO01o: "x2yie3v",
    kZCmMZ: "x10mud68",
    kWkggS: "x1eieebl",
    kmkexE: "x1487y47 xrozb4q",
    k5JduY: "x1s928wv",
    kwXMNM: "x1j6awrg",
    k3foIR: "xutx6zy",
    kH8aOt: "x9rrb9s",
    kkgrvl: "x1bucv7p",
    k4zj60: "x1te8sxe",
    kNctxI: "x141s6t4",
    kakxe6: "x1uzd5vc",
    kB1Fuz: "xrsui27",
    kypkao: "xxu3cyy",
    $$css: true
  },
  num: {
    kVAEAm: "x1n2onr6",
    kY2c9j: "x1vjfegm",
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kzqmXN: "xq3tarq",
    kZKoxP: "xwl81jg",
    kaIpWk: "x16rqkct",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kWkggS: "x1eieebl",
    kGuDYH: "x1dcheo9",
    k63SB2: "x1s688f",
    kcqcaj: "xss6m8b",
    kMwMTN: "x1aj07ft",
    k1K539: "x1360bob",
    $$css: true
  },
  title: {
    k1xSpc: "x1rg5ohu",
    kGuDYH: "x18ihxl1",
    k63SB2: "x1s688f",
    kb6lSQ: "xjat59b",
    kMwMTN: "x1aj07ft",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "xpvcztv",
    kL6WhQ: "x16mxmts",
    kGO01o: "x1j85h84",
    keoZOQ: "xdj266r",
    k1K539: "xhbfen4",
    keTefX: "x1lziwak",
    k71WvV: "x14z9mp",
    $$css: true
  },
  body: {
    kGuDYH: "x1up2fpq",
    kLWn49: "xfrs9s4",
    kMwMTN: "x1ixqp2s",
    kb6lSQ: "x1ixy4ik",
    kogj98: "x1ghz6dp",
    $$css: true
  },
  subs: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "xx7b8my",
    keoZOQ: "x14n26ow",
    $$css: true
  },
  sub: {
    kGuDYH: "x12lo8hy",
    kLWn49: "xo5v014",
    k8WAf4: "x5utbj",
    kg3NbH: "x8srd2o",
    kMzoRj: "x1kz39yt",
    ksu8eU: "xbsl7fq",
    kVAM5u: "xghov5j",
    kaIpWk: "xkrxur",
    kMwMTN: "x1ixqp2s",
    kb6lSQ: "x1ixy4ik",
    $$css: true
  },
  subAdd: {
    kzqmXN: "xsk17dz",
    kLKAdn: "x1lw326t",
    kGO01o: "x19mesta",
    kZCmMZ: "x1c1uobl",
    kwRFfy: "xyri2b",
    k9WMMc: "x2b8uid",
    kSiTet: "x1ks1olk",
    $$css: true
  },
  add: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kOIVth: "x13z6uf9",
    keoZOQ: "xvxpopf",
    kMzoRj: "x1kz39yt",
    ksu8eU: "xbsl7fq",
    kVAM5u: "xghov5j xi3331r",
    kaIpWk: "xkrxur",
    kLKAdn: "x1q57ora",
    kGO01o: "xsaxbkt",
    kZCmMZ: "x10mud68",
    kwRFfy: "x16p959o",
    kGuDYH: "x1dcheo9",
    k63SB2: "x1s688f",
    kb6lSQ: "xjat59b",
    kMwMTN: "x1ixqp2s x1d6p4sn",
    kWkggS: "xjbqb8w",
    kzqmXN: "xhpatk0",
    ks0D6T: "x193iq5w",
    kmkexE: "x1487y47 xrozb4q",
    kMv6JI: "xjb2p0i",
    kkrTdU: "x1ypdohk",
    $$css: true
  },
  plus: {
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kzqmXN: "xsk17dz",
    kZKoxP: "xaylbqo",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1r7ld26",
    kaIpWk: "x16rqkct",
    kGuDYH: "x1dcheo9",
    kLWn49: "xo5v014",
    $$css: true
  }
};

/** Dashed 1px pipeline. */
export const Flow = /*#__PURE__*/React.forwardRef(function Flow({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-flow", className], styles.flow);
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
export const FlowStep = /*#__PURE__*/React.forwardRef(function FlowStep({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-flow-step", className], styles.step);
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
export const FlowNum = /*#__PURE__*/React.forwardRef(function FlowNum({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-flow-num", className], styles.num);
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
export const FlowTitle = /*#__PURE__*/React.forwardRef(function FlowTitle({
  className,
  style,
  ...props
}, ref) {
  const sx = rs([className, "rs-flow-title"], styles.title);
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
export const FlowBody = /*#__PURE__*/React.forwardRef(function FlowBody({
  className,
  style,
  ...props
}, ref) {
  const sx = rs([className, "rs-flow-body"], styles.body);
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
export const FlowSubs = /*#__PURE__*/React.forwardRef(function FlowSubs({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-flow-subs", className], styles.subs);
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
export const FlowSub = /*#__PURE__*/React.forwardRef(function FlowSub({
  className,
  style,
  ...props
}, ref) {
  const sx = rs([className, "rs-flow-sub"], styles.sub);
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
export const FlowSubAdd = /*#__PURE__*/React.forwardRef(function FlowSubAdd({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-flow-sub-add", className], styles.sub, styles.subAdd);
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
export const FlowAdd = /*#__PURE__*/React.forwardRef(function FlowAdd({
  className,
  style,
  children,
  ...props
}, ref) {
  const sx = rs(["rs-flow-add", className], styles.add);
  const plus = rs(["rs-flow-plus"], styles.plus);
  return /*#__PURE__*/_jsxs("button", {
    ref: ref,
    type: "button",
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("span", {
      className: plus.className,
      style: plus.style,
      children: "+"
    }), children]
  });
});
export const FlowPlus = /*#__PURE__*/React.forwardRef(function FlowPlus({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-flow-plus", className], styles.plus);
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
//# sourceMappingURL=flow.js.map
