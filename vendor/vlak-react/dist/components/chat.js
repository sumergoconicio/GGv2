"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Conversation } from "./conversation.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    kB7OPa: "x9f619",
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kAzted: "x2lwn1j",
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
    kwnvtZ: "x1a02dak",
    kGNEyG: "x6s0dn4",
    kjj79g: "x1qughib",
    kOIVth: "x8233eu",
    kmuXW: "x2lah0s",
    k8WAf4: "xgepmj6",
    kg3NbH: "xzsmjar xookx22",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  heading: {
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kOIVth: "xvh977a",
    k7Eaqz: "xeuugli",
    kUk6DE: "xehxkzz",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  title: {
    kGuDYH: "x1jq7itm",
    k63SB2: "x1s688f",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  description: {
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x4ro2ui",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x6s0dn4",
    kOIVth: "x13z6uf9",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  history: {
    kB7OPa: "x9f619",
    kAzted: "x2lwn1j",
    kUk6DE: "xkz0k9k",
    k8WAf4: "x1yb22fu",
    kg3NbH: "xzsmjar xookx22",
    $$css: true
  },
  composer: {
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kOIVth: "x8233eu",
    k7Eaqz: "xeuugli",
    kmuXW: "x2lah0s",
    k8WAf4: "xgepmj6",
    kg3NbH: "xzsmjar xookx22",
    kEafiO: "x1ro6g4h",
    kPef9Z: "x13fuv20",
    kLZC3w: "x1fq36pv",
    $$css: true
  },
  footer: {
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x4ro2ui",
    kLWn49: "xfrs9s4",
    kHjlTd: "xj0a0fe",
    $$css: true
  }
};

/** A chat frame with a named history and a composer that stays outside its scroll area. */
export const Chat = /*#__PURE__*/React.forwardRef(function Chat({
  title,
  description,
  actions,
  children,
  composer,
  footer,
  conversationLabel = "Conversation",
  historyHeight = "28rem",
  autoScroll = true,
  className,
  style,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  ...props
}, ref) {
  const titleId = React.useId();
  const root = rs(["rs-chat", className], styles.root);
  const header = rs(["rs-chat-header"], styles.header);
  const heading = rs(["rs-chat-heading"], styles.heading);
  const titleStyle = rs(["rs-chat-title"], styles.title);
  const descriptionStyle = rs(["rs-chat-description"], styles.description);
  const actionsStyle = rs(["rs-chat-actions"], styles.actions);
  const history = rs(["rs-chat-history"], styles.history);
  const composerStyle = rs(["rs-chat-composer"], styles.composer);
  const footerStyle = rs(["rs-chat-footer"], styles.footer);
  return /*#__PURE__*/_jsxs("section", {
    ...props,
    ref: ref,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy ?? (ariaLabel == null ? titleId : undefined),
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
      }), actions != null && /*#__PURE__*/_jsx("div", {
        ...actionsStyle,
        children: actions
      })]
    }), /*#__PURE__*/_jsx(Conversation, {
      ...history,
      label: conversationLabel,
      maxHeight: "100%",
      autoScroll: autoScroll,
      style: {
        ...history.style,
        height: historyHeight
      },
      children: children
    }), /*#__PURE__*/_jsxs("div", {
      ...composerStyle,
      children: [composer, footer != null && /*#__PURE__*/_jsx("div", {
        ...footerStyle,
        children: footer
      })]
    })]
  });
});
//# sourceMappingURL=chat.js.map
