"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { cx } from "../cx.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  tip: {
    kVAEAm: "x1n2onr6",
    k1xSpc: "x3nfvp2",
    $$css: true
  },
  bubble: {
    kVAEAm: "x10l6tqk",
    krVfgx: "xwmwtye",
    kLqNvP: "xbudbmw",
    k3aq6I: "xuuh30",
    kB7OPa: "x9f619",
    kzqmXN: "xezivpi",
    ks0D6T: "xlkbywk",
    kWkggS: "xmgn9m6",
    kMwMTN: "x19rmm7l",
    kGuDYH: "xlm2rwv x8hqeb2",
    k63SB2: "xk50ysn",
    kb6lSQ: "xjat59b",
    kLWn49: "xwn7fz2",
    k8WAf4: "x1qrv0by xnjd27k",
    kg3NbH: "x1miazu x62mm0n",
    kaIpWk: "xkrxur x16r9t5",
    kY2c9j: "xhupvvu",
    kSiTet: "xg01cxk x9p0nlo x8w4yw4 xjqejgv",
    k33iCy: "xlshs6z x5etla1 x3fep86 x1v7z9pf",
    kfzvcC: "x47corl xx3ek3k x1mhnzaf",
    kmkexE: "x1487y47 xrozb4q",
    kgeoSG: "x1cpjm7i",
    kEoFBp: "x1hmns74",
    k96MEf: "xe7t7c2",
    kSJ0CW: "x1682cnc",
    koaPKo: "xtyp5od",
    kgzTxl: "x1xv4kxf",
    $$css: true
  }
};

/**
 * Whether a React element reaches the tab order on its own. `null`
 * when it cannot be told (a component), so callers leave it alone.
 */
export function isFocusableElement(el) {
  const props = el.props;
  if (props.tabIndex != null) return true;
  if (typeof el.type !== "string") return null;
  switch (el.type) {
    case "a":
    case "area":
      return props.href != null;
    case "button":
    case "input":
    case "select":
    case "textarea":
    case "summary":
      return !props.disabled;
    case "iframe":
      return true;
    default:
      return props.contentEditable === true || props.contentEditable === "true";
  }
}

/**
 * Clones a trigger element with the description reference; a plain
 * element that is not focusable also gets tabIndex so keyboards
 * reach it. Components are trusted to forward the attribute.
 */
export function describeTrigger(el, id) {
  const props = el.props;
  const extra = {
    "aria-describedby": cx(props["aria-describedby"], id)
  };
  if (isFocusableElement(el) === false) extra.tabIndex = 0;
  return /*#__PURE__*/React.cloneElement(el, extra);
}
export const Tooltip = /*#__PURE__*/React.forwardRef(function Tooltip({
  tip,
  className,
  style,
  children,
  onKeyDown,
  onPointerLeave,
  onBlur,
  ...props
}, ref) {
  const id = React.useId();
  const [dismissed, setDismissed] = React.useState(false);
  const sx = rs(["rs-tip", className], styles.tip, {
    "x-default-marker": "x-default-marker",
    $$css: true
  });
  const bubble = rs(["rs-tip-bubble"], styles.bubble);
  // A text child makes the wrapper the trigger; an element child is described directly.
  const triggerIsRoot = ! /*#__PURE__*/React.isValidElement(children);
  return /*#__PURE__*/_jsxs("span", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    },
    "data-tip": tip,
    tabIndex: triggerIsRoot ? 0 : undefined,
    "aria-describedby": triggerIsRoot ? id : undefined,
    onKeyDown: e => {
      onKeyDown?.(e);
      if (e.key === "Escape") setDismissed(true);
    },
    onPointerLeave: e => {
      onPointerLeave?.(e);
      setDismissed(false);
    },
    onBlur: e => {
      onBlur?.(e);
      if (!e.currentTarget.contains(e.relatedTarget)) setDismissed(false);
    },
    children: [triggerIsRoot ? children : describeTrigger(children, id), /*#__PURE__*/_jsx("span", {
      role: "tooltip",
      id: id,
      hidden: dismissed,
      className: bubble.className,
      style: bubble.style,
      children: tip
    })]
  });
});
//# sourceMappingURL=tooltip.js.map
