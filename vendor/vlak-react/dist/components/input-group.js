import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Input } from "./input.js";
import { jsx as _jsx } from "react/jsx-runtime";
const styles = {
  group: {
    k1xSpc: "x78zum5",
    kGNEyG: "x1qjc9v5",
    kB7OPa: "x9f619",
    kzqmXN: "xh8yej3",
    kZKoxP: "x1egjz0v",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd x14geis9",
    kaIpWk: "xkrxur x16r9t5",
    kWkggS: "x1eieebl",
    kVQacm: "xb3r6kr",
    kMeerF: "x1k57tk5 x16gxa91",
    k3XXqK: "x1t137rt x14xc8xn",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  addon: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kg3NbH: "xvpgqt4 x507p67",
    k8WAf4: "xt970qd",
    kGuDYH: "x1dcheo9 xzwmqnn",
    k63SB2: "xk50ysn",
    kb6lSQ: "xjat59b",
    kMwMTN: "x1ixqp2s",
    kWkggS: "x1nzd1wa",
    khDVqt: "xuxw1ft",
    kAzted: "xs41724",
    k2ei4v: "x1y6m6vk",
    kVhnKS: "x1t7ytsu",
    kGJrpR: "xvzgzbh",
    $$css: true
  }
};

/** Addon and field share one control boundary. */
export const InputGroup = /*#__PURE__*/React.forwardRef(function InputGroup({
  end,
  className,
  style,
  children,
  ...props
}, ref) {
  const sx = rs(["rs-input-group", end && "rs-input-group-end", className], styles.group);
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    },
    children: React.Children.map(children, child => {
      if (/*#__PURE__*/React.isValidElement(child) && child.type === Input) {
        const next = child.props;
        return /*#__PURE__*/React.cloneElement(child, {
          plain: next.plain ?? true,
          grouped: next.grouped ?? true
        });
      }
      return child;
    })
  });
});
export const InputAddon = /*#__PURE__*/React.forwardRef(function InputAddon({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-input-addon", className], styles.addon);
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
//# sourceMappingURL=input-group.js.map
