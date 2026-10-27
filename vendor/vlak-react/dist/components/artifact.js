"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { Icon } from "./icon.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    k7Eaqz: "xeuugli",
    kzqmXN: "xh8yej3",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j xz1l38o",
    kaIpWk: "xkrxur",
    kMwMTN: "x1gney9c",
    kWkggS: "xhpg8l3",
    $$css: true
  },
  header: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kwnvtZ: "x1a02dak",
    kOIVth: "x8233eu",
    kmVPX3: "x19btat0",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  heading: {
    k1xSpc: "xrvj5dj",
    kOIVth: "xvh977a",
    k7Eaqz: "xeuugli",
    kUk6DE: "x12lumcd",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  title: {
    kGuDYH: "xkpwil5",
    k63SB2: "x1s688f",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  description: {
    kGuDYH: "xboafo0",
    kLWn49: "xfrs9s4",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x6s0dn4",
    kOIVth: "xvh977a",
    $$css: true
  },
  content: {
    k7Eaqz: "xeuugli",
    kVQacm: "xysyzu8",
    kmVPX3: "x1uz70x1",
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    kjBf7l: "xqbrbdq",
    kInvED: "x2ssjo2",
    $$css: true
  },
  footer: {
    kmVPX3: "x19btat0",
    kEafiO: "x1ro6g4h",
    kPef9Z: "x13fuv20",
    kLZC3w: "x1fq36pv",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "xboafo0",
    kLWn49: "xfrs9s4",
    $$css: true
  }
};

/** Generated content with header actions, a close request and an optional scroll region. */
export const Artifact = /*#__PURE__*/React.forwardRef(function Artifact({
  title,
  description,
  actions,
  footer,
  onClose,
  closeLabel = "Close artifact",
  maxHeight,
  children,
  className,
  style,
  "aria-label": label,
  "aria-labelledby": labelledBy,
  ...props
}, ref) {
  const titleId = React.useId();
  const root = rs(["rs-artifact", className], styles.root);
  const header = rs(["rs-artifact-header"], styles.header);
  const heading = rs(["rs-artifact-heading"], styles.heading);
  const titleStyle = rs(["rs-artifact-title"], styles.title);
  const descriptionStyle = rs(["rs-artifact-description"], styles.description);
  const actionStyle = rs(["rs-artifact-actions"], styles.actions);
  const content = rs(["rs-artifact-content"], styles.content);
  const footerStyle = rs(["rs-artifact-footer"], styles.footer);
  return /*#__PURE__*/_jsxs("section", {
    ...props,
    ref: ref,
    "aria-label": label,
    "aria-labelledby": labelledBy ?? (label == null ? titleId : undefined),
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsxs("header", {
      ...header,
      children: [/*#__PURE__*/_jsxs("div", {
        ...heading,
        children: [/*#__PURE__*/_jsx("span", {
          ...titleStyle,
          id: titleId,
          children: title
        }), description != null && /*#__PURE__*/_jsx("div", {
          ...descriptionStyle,
          children: description
        })]
      }), (actions != null || onClose) && /*#__PURE__*/_jsxs("div", {
        ...actionStyle,
        children: [actions, onClose && /*#__PURE__*/_jsx(Button, {
          type: "button",
          variant: "subtle",
          size: "icon",
          "aria-label": closeLabel,
          title: closeLabel,
          onClick: onClose,
          children: /*#__PURE__*/_jsx(Icon, {
            name: "close"
          })
        })]
      })]
    }), /*#__PURE__*/_jsx("div", {
      className: content.className,
      style: {
        ...content.style,
        maxHeight
      },
      tabIndex: maxHeight != null ? 0 : undefined,
      children: children
    }), footer != null && /*#__PURE__*/_jsx("footer", {
      ...footerStyle,
      children: footer
    })]
  });
});
//# sourceMappingURL=artifact.js.map
