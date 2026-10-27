import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { Icon } from "./icon.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  alert: {
    k1xSpc: "x78zum5",
    kOIVth: "xb6y1gh",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kaIpWk: "x1po71e9",
    k8WAf4: "xo0yzjp",
    kg3NbH: "x13s4r1c",
    kGNEyG: "x1cy8zhl",
    $$css: true
  },
  solid: {
    kWkggS: "xmgn9m6",
    kVAM5u: "xli9mpl",
    $$css: true
  },
  icon: {
    kmuXW: "x2lah0s",
    keoZOQ: "xvijh9v",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  iconSolid: {
    kMwMTN: "x19rmm7l",
    $$css: true
  },
  title: {
    k1xSpc: "x1lliihq",
    kGuDYH: "x1roswp1",
    k63SB2: "x1s688f",
    kb6lSQ: "xjat59b",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  titleSolid: {
    kMwMTN: "x19rmm7l",
    $$css: true
  },
  body: {
    kGuDYH: "x1dcheo9",
    kLWn49: "xfrs9s4",
    kb6lSQ: "xjat59b",
    kMwMTN: "x1ixqp2s",
    keoZOQ: "xr9ek0c",
    k1K539: "xat24cr",
    kUOVxO: "xrxpjvj",
    $$css: true
  },
  bodySolid: {
    kMwMTN: "x19rmm7l",
    $$css: true
  }
};
export const Alert = /*#__PURE__*/React.forwardRef(function Alert({
  title,
  variant = "outline",
  icon,
  live,
  className,
  style,
  children,
  ...props
}, ref) {
  const sx = rs(["rs-alert", variant === "solid" && "rs-alert-solid", className], styles.alert, variant === "solid" && styles.solid);
  const mark = rs(["rs-alert-icon", variant === "solid" && "rs-alert-icon-solid"], styles.icon, variant === "solid" && styles.iconSolid);
  const heading = rs(["rs-alert-title", variant === "solid" && "rs-alert-title-solid"], styles.title, variant === "solid" && styles.titleSolid);
  const body = rs(["rs-alert-body", variant === "solid" && "rs-alert-body-solid"], styles.body, variant === "solid" && styles.bodySolid);
  const role = live === "assertive" ? "alert" : live === "polite" ? "status" : "note";
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    role: role,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    },
    children: [icon ?? /*#__PURE__*/_jsx(Icon, {
      name: "info",
      size: 16,
      className: mark.className,
      style: mark.style
    }), /*#__PURE__*/_jsxs("div", {
      children: [title != null && /*#__PURE__*/_jsx("span", {
        className: heading.className,
        style: heading.style,
        children: title
      }), children != null && /*#__PURE__*/_jsx("p", {
        className: body.className,
        style: body.style,
        children: children
      })]
    })]
  });
});
//# sourceMappingURL=alert.js.map
