import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx } from "react/jsx-runtime";
const styles = {
  base: {
    kB7OPa: "x9f619",
    k7Eaqz: "xtp0tkc",
    kMv6JI: "xjb2p0i",
    kb6lSQ: "xjat59b",
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kOIVth: "x13z6uf9",
    kkrTdU: "x1ypdohk x1s07b3s",
    kZKoxP: "x1egjz0v x10t41jd",
    kAzted: "xs41724",
    kzqmXN: "xvolacv",
    kGuDYH: "x1jq7itm",
    kg3NbH: "x1nu5hly x1aulylm",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kaIpWk: "xkrxur x16r9t5",
    kmkexE: "x1487y47 xrozb4q",
    kSiTet: "x1hc1fzr x19a71wq x1lfpgzf x1nyumiu x13j4sna x3dy84y",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x14tvtkk",
    kInvED: "x7s97pk",
    $$css: true
  },
  primary: {
    k63SB2: "x1s688f",
    kWkggS: "xmgn9m6 x1awx03v",
    kMwMTN: "x19rmm7l x9dgriy xybgkc0",
    kVAM5u: "x9r1u3d xaxtmmi xoxf62l",
    $$css: true
  },
  ghost: {
    kmkexE: "x1487y47 xrozb4q",
    k63SB2: "xk50ysn",
    kWkggS: "xjbqb8w x199wolp x1oqui1x x1awx03v",
    kMwMTN: "x1gney9c x9dgriy xybgkc0",
    kVAM5u: "xghov5j xh8kw0g xekpwcr xaxtmmi x1t3trc3 xoxf62l",
    $$css: true
  },
  subtle: {
    kAzted: "x1wszdd",
    k63SB2: "xk50ysn",
    kMzoRj: "xc342km x1hox12d",
    kVAM5u: "x9r1u3d xaxtmmi xoxf62l x12e312k",
    kWkggS: "xjbqb8w x1awx03v",
    kMwMTN: "x1ixqp2s xv49c7u x9dgriy xybgkc0 x112oizo",
    kkrTdU: "x1ypdohk x1s07b3s x1ku64ua",
    kSiTet: "x1hc1fzr x197ioz8 x1lfpgzf x15e45b x1nyumiu x13j4sna x3dy84y xes3daz",
    $$css: true
  },
  sm: {
    kZKoxP: "x9ve8r1 x10t41jd",
    kAzted: "xs41724",
    kg3NbH: "x13s4r1c xookx22",
    kGuDYH: "x1dcheo9 xzwmqnn",
    k7Eaqz: "xfkfdo9 x162b59l",
    $$css: true
  },
  icon: {
    kZKoxP: "x9ve8r1 x128uv7p",
    kAzted: "x1wszdd xs41724",
    kskxy: "xg8w327",
    kzqmXN: "x1uyfxw7 xla6mwc",
    k7Eaqz: "xtp0tkc x1cf4flf",
    ks0D6T: "x15xxtrl",
    kCS8Yb: "ximofyd",
    kzQI83: "x1c4vz4f xds6olg",
    kmuXW: "x2lah0s",
    kg3NbH: "xnjsko4 x1faydb4",
    k8WAf4: "xt970qd",
    $$css: true
  },
  grouped: {
    kZKoxP: "xt7dq6l",
    kAzted: "x1wszdd",
    kzqmXN: null,
    kMzoRj: "xc342km",
    kaIpWk: "x2u8bby",
    kogj98: "x1ghz6dp",
    kzQI83: "xzezc5b",
    k7Eaqz: "xeuugli x162b59l",
    kInvED: "x1bqaal",
    $$css: true
  },
  groupedGhost: {
    kmkexE: "x1487y47 xrozb4q",
    kWkggS: "xhpg8l3 x199wolp xkabh30 x1awx03v",
    $$css: true
  },
  groupedSubtle: {
    kWkggS: "xhpg8l3 xfyskud x1awx03v x10goz0y",
    kMwMTN: "x1ixqp2s xu014kb x9dgriy x1op3djh xybgkc0 x112oizo",
    k63SB2: "xk50ysn xnqxtj5",
    $$css: true
  }
};
export const Button = /*#__PURE__*/React.forwardRef(function Button({
  variant = "primary",
  size = "default",
  grouped = false,
  type = "button",
  className,
  style,
  ...props
}, ref) {
  const sx = variant === "subtle" ? rs(["rs-btn-subtle", size === "sm" && "rs-btn-sm", className, grouped && "rs-btn-grouped", grouped && "rs-btn-grouped-subtle", size === "icon" && "rs-btn-icon"], styles.base, styles.subtle, size === "sm" && styles.sm, grouped && styles.grouped, grouped && styles.groupedSubtle, size === "icon" && styles.icon) : rs([variant === "ghost" ? "rs-btn-ghost" : "rs-btn-primary", size === "sm" && "rs-btn-sm", className, grouped && "rs-btn-grouped", grouped && variant === "ghost" && "rs-btn-grouped-ghost", size === "icon" && "rs-btn-icon"], styles.base, variant === "ghost" ? styles.ghost : styles.primary, size === "sm" && styles.sm, grouped && styles.grouped, grouped && variant === "ghost" && styles.groupedGhost, size === "icon" && styles.icon);
  return /*#__PURE__*/_jsx("button", {
    ref: ref,
    type: type,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
//# sourceMappingURL=button.js.map
