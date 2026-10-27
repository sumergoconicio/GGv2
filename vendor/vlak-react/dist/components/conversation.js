"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kOIVth: "x8233eu",
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  viewport: {
    kORKVm: "x1odjw0f",
    kXHlph: "x6ikm8r",
    kZeWKH: "xish69e",
    kAzted: "x2lwn1j",
    k7Eaqz: "xeuugli",
    kB7OPa: "x9f619",
    kmVPX3: "x78pyy4",
    khEr5k: "xlrxu3r",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x14tvtkk",
    kInvED: "x1bqaal",
    $$css: true
  },
  content: {
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kOIVth: "x15iy025",
    k7Eaqz: "xeuugli",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  footer: {
    k1xSpc: "x78zum5",
    kjj79g: "xl56j7k",
    $$css: true
  }
};

/** A message history that follows new content without taking the reader away from earlier messages. */
export const Conversation = /*#__PURE__*/React.forwardRef(function Conversation({
  label = "Conversation",
  maxHeight = "28rem",
  autoScroll = true,
  latestLabel = "Jump to latest",
  className,
  style,
  children,
  ...props
}, ref) {
  const viewportRef = React.useRef(null);
  const contentRef = React.useRef(null);
  const following = React.useRef(true);
  const [atEnd, setAtEnd] = React.useState(true);
  const viewportId = React.useId();
  const measure = React.useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const end = viewport.scrollHeight - viewport.clientHeight - viewport.scrollTop <= 24;
    following.current = end;
    setAtEnd(end);
  }, []);
  const jump = React.useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    viewport.scrollTop = viewport.scrollHeight;
    following.current = true;
    setAtEnd(true);
  }, []);
  const follow = React.useCallback(() => {
    if (autoScroll && following.current) jump();else measure();
  }, [autoScroll, jump, measure]);

  // Content can grow without a new message (streaming, images, or rendered code).
  React.useEffect(() => {
    follow();
    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(follow);
    if (contentRef.current) observer.observe(contentRef.current);
    if (viewportRef.current) observer.observe(viewportRef.current);
    return () => observer.disconnect();
  }, [follow]);
  React.useEffect(() => {
    follow();
  }, [children, follow]);
  const root = rs(["rs-conversation", className], styles.root);
  const viewport = rs(["rs-conversation-viewport"], styles.viewport);
  const content = rs(["rs-conversation-content"], styles.content);
  const footer = rs(["rs-conversation-footer"], styles.footer);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("div", {
      ...viewport,
      ref: viewportRef,
      id: viewportId,
      role: "log",
      "aria-label": label,
      "aria-live": "off",
      tabIndex: 0,
      style: {
        ...viewport.style,
        maxHeight
      },
      onScroll: measure,
      children: /*#__PURE__*/_jsx("div", {
        ...content,
        ref: contentRef,
        children: children
      })
    }), !atEnd && /*#__PURE__*/_jsx("div", {
      ...footer,
      children: /*#__PURE__*/_jsx(Button, {
        variant: "ghost",
        "aria-controls": viewportId,
        onClick: () => {
          jump();
          viewportRef.current?.focus({
            preventScroll: true
          });
        },
        children: latestLabel
      })
    })]
  });
});
//# sourceMappingURL=conversation.js.map
