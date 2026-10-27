"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
const styles = {
  root: {
    kMwMTN: "x1gney9c",
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  header: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x8233eu",
    kGNEyG: "x6s0dn4",
    kjj79g: "x1qughib",
    $$css: true
  },
  title: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x1jchvi3",
    k63SB2: "x1s688f",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  list: {
    kH6xsr: "x3ct3a4",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    $$css: true
  },
  item: {
    kmVPX3: "x1uz70x1",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  unread: {
    kWkggS: "x6583kg",
    $$css: true
  },
  detail: {
    kqGvvJ: "xahocic",
    kMwMTN: "x1gney9c",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    keoZOQ: "xhj8ucd",
    $$css: true
  }
};

/** Persistent notifications with controlled read/unread and dismissal state. */
export const NotificationCenter = /*#__PURE__*/React.forwardRef(function NotificationCenter({
  value,
  defaultValue = [],
  onValueChange,
  label = "Notifications",
  emptyLabel = "You're up to date",
  className,
  style,
  ...props
}, ref) {
  const [inner, setInner] = React.useState(defaultValue);
  const items = value ?? inner;
  const [status, setStatus] = React.useState("");
  const pending = React.useRef(null);
  React.useLayoutEffect(() => {
    const request = pending.current;
    if (!request || request.items.length !== items.length || !request.items.every((item, index) => items[index]?.id === item.id && Boolean(items[index]?.read) === Boolean(item.read))) return;
    pending.current = null;
    setStatus(request.announcement);
    request.onCommit?.();
  }, [items]);
  const id = React.useId();
  const change = (next, announcement, onCommit) => {
    pending.current = {
      items: next,
      announcement,
      onCommit
    };
    setStatus("");
    if (value === undefined) setInner(next);
    onValueChange?.(next);
  };
  const root = rs(["rs-notification-center", className], styles.root);
  const header = rs(["rs-notification-center-header"], styles.header);
  const title = rs(["rs-notification-center-title"], styles.title);
  const list = rs(["rs-notification-center-list"], styles.list);
  const detail = rs(["rs-notification-center-detail"], styles.detail);
  const actions = rs(["rs-notification-center-actions"], styles.actions);
  const unread = items.filter(item => !item.read).length;
  return /*#__PURE__*/_jsxs("section", {
    ref: ref,
    tabIndex: -1,
    "aria-labelledby": id,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsxs("div", {
      ...header,
      children: [/*#__PURE__*/_jsxs("h2", {
        id: id,
        ...title,
        children: [label, " ", /*#__PURE__*/_jsxs("span", {
          children: ["(", unread, " unread)"]
        })]
      }), /*#__PURE__*/_jsx(Button, {
        variant: "ghost",
        disabled: !unread,
        onClick: () => change(items.map(item => ({
          ...item,
          read: true
        })), "All notifications marked as read"),
        children: "Mark all as read"
      })]
    }), /*#__PURE__*/_jsx("p", {
      role: "status",
      ...detail,
      children: status
    }), !items.length && /*#__PURE__*/_jsx("p", {
      children: emptyLabel
    }), /*#__PURE__*/_jsx("ul", {
      ...list,
      children: items.map(item => {
        const unseen = !item.read;
        const row = rs(["rs-notification-center-item", unseen && "rs-notification-center-unread"], styles.item, unseen && styles.unread);
        return /*#__PURE__*/_jsxs("li", {
          ...row,
          children: [/*#__PURE__*/_jsx("h3", {
            ...title,
            children: item.title
          }), item.dateTime && /*#__PURE__*/_jsx("time", {
            ...detail,
            dateTime: item.dateTime,
            children: item.timeLabel ?? item.dateTime
          }), item.description != null && /*#__PURE__*/_jsx("div", {
            ...detail,
            children: item.description
          }), /*#__PURE__*/_jsxs("div", {
            ...actions,
            children: [/*#__PURE__*/_jsx(Button, {
              variant: "ghost",
              "aria-label": `Mark ${item.title} as ${item.read ? "unread" : "read"}`,
              onClick: () => change(items.map(entry => entry.id === item.id ? {
                ...entry,
                read: !entry.read
              } : entry), `${item.title} marked as ${item.read ? "unread" : "read"}`),
              children: item.read ? "Mark unread" : "Mark read"
            }), item.action && /*#__PURE__*/_jsx(Button, {
              variant: "ghost",
              onClick: item.action.onAction,
              children: item.action.label
            }), /*#__PURE__*/_jsx(Button, {
              variant: "ghost",
              "aria-label": `Dismiss ${item.title}`,
              onClick: event => {
                const section = event.currentTarget.closest("section");
                const nextButton = event.currentTarget.closest("li")?.nextElementSibling?.querySelector("button") ?? event.currentTarget.closest("li")?.previousElementSibling?.querySelector("button");
                change(items.filter(entry => entry.id !== item.id), `${item.title} dismissed`, () => (nextButton ?? section)?.focus());
              },
              children: "Dismiss"
            })]
          })]
        }, item.id);
      })
    })]
  });
});
//# sourceMappingURL=notification-center.js.map
