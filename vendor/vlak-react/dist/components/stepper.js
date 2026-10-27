import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  steps: {
    k1xSpc: "x78zum5",
    kGNEyG: "x1cy8zhl",
    kzqmXN: "xh8yej3",
    ks0D6T: "x193iq5w",
    kOIVth: "xxhr3t",
    $$css: true
  },
  step: {
    kVAEAm: "x1n2onr6",
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kGNEyG: "x1cy8zhl",
    kOIVth: "x4484yh x1k7x95o",
    kzQI83: "x1iyjqo2",
    kmuXW: "xs83m0k",
    kCS8Yb: "x1r8uery",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  dot: {
    kB7OPa: "x9f619",
    kzqmXN: "xp8d6y2 xla6mwc",
    kZKoxP: "xam5rvr x128uv7p",
    kaIpWk: "x16rqkct",
    kMzoRj: "xvndefy",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kGuDYH: "x12lo8hy xrgdnwz",
    k63SB2: "x1s688f",
    kMwMTN: "x1ixqp2s",
    k1K539: "x18jvhmb x1jo33qe",
    kWkggS: "xhpg8l3",
    kVAEAm: "x1n2onr6",
    kY2c9j: "x1vjfegm",
    $$css: true
  },
  done: {
    kWkggS: "xmgn9m6",
    kVAM5u: "xli9mpl",
    kMwMTN: "x19rmm7l",
    $$css: true
  },
  active: {
    kVAM5u: "xli9mpl",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  name: {
    kGuDYH: "x1dcheo9 xzwmqnn",
    k63SB2: "x1s688f",
    kb6lSQ: "xjat59b",
    kMwMTN: "x1gney9c",
    kLWn49: "x1u7k74",
    $$css: true
  },
  sub: {
    kGuDYH: "x12lo8hy x8hqeb2",
    k63SB2: "xk50ysn",
    kMwMTN: "x1ixqp2s",
    kb6lSQ: "xjat59b",
    $$css: true
  },
  line: {
    kVAEAm: "x10l6tqk",
    k87sOh: "xp2oh65 x1wawtvs",
    kLqNvP: "x16pa4ro x1gyrr0s",
    kt4wiu: "xtijo5x",
    kZKoxP: "xskddba",
    kWkggS: "xb223ua",
    kogj98: "x1ghz6dp",
    k7Eaqz: "xeuugli",
    kY2c9j: "x1ja2u2z",
    $$css: true
  }
};
export const Stepper = /*#__PURE__*/React.forwardRef(function Stepper({
  steps,
  current,
  className,
  style,
  ...props
}, ref) {
  const root = rs(["rs-steps", className], styles.steps);
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: steps.map((step, index) => {
      const row = rs(["rs-step"], styles.step);
      const dot = rs(["rs-step-dot", index < current && "rs-step-done", index === current && "rs-step-active"], styles.dot, index < current && styles.done, index === current && styles.active);
      const line = rs(["rs-step-line"], styles.line);
      const name = rs(["rs-step-name"], styles.name);
      const sub = rs(["rs-step-sub"], styles.sub);
      return /*#__PURE__*/_jsxs("div", {
        className: row.className,
        style: row.style,
        "aria-current": index === current ? "step" : undefined,
        children: [/*#__PURE__*/_jsx("span", {
          className: dot.className,
          style: dot.style,
          children: index + 1
        }), index < steps.length - 1 && /*#__PURE__*/_jsx("span", {
          className: line.className,
          style: line.style,
          "aria-hidden": "true"
        }), /*#__PURE__*/_jsx("span", {
          className: name.className,
          style: name.style,
          children: step.name
        }), step.sub != null && /*#__PURE__*/_jsx("span", {
          className: sub.className,
          style: sub.style,
          children: step.sub
        })]
      }, index);
    })
  });
});
//# sourceMappingURL=stepper.js.map
