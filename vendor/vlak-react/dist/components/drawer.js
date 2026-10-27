"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { DialogCloseButton, DialogContext, dialogStyles, useDialogPart, useNativeDialog } from "./dialog.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  frame: {
    kB7OPa: "x9f619",
    kVAEAm: "xixxii4",
    k87sOh: "x80663w",
    kt4wiu: "xtijo5x",
    krVfgx: "x1ey2m1c",
    kLqNvP: "x1o0tod",
    kogj98: "x1ghz6dp",
    kzqmXN: "xh8yej3",
    ks0D6T: "x1x1rfll",
    kZKoxP: "xt7dq6l",
    kskxy: "x15vuvwr",
    kMzoRj: "xc342km",
    ksu8eU: "x1y0btm7",
    kEafiO: "x1ro6g4h",
    kVAM5u: "xghov5j",
    krdFHd: "x1q2u622",
    kfmiAY: "x1mq7qa4",
    kT0f0o: "x16uus16",
    kVL7Gh: "xbiv7yw",
    k8WAf4: "x1yb22fu",
    kg3NbH: "x1qhpy6z",
    kWkggS: "xhpg8l3",
    kMwMTN: "x1gney9c",
    kGVxlE: "x1gnnqk1",
    kGyWv1: "xy1a3z",
    $$css: true
  },
  title: {
    k1xSpc: "x1lliihq",
    kGuDYH: "x6u19be xqzwu44",
    k63SB2: "x1s688f",
    kb6lSQ: "xjat59b",
    kMwMTN: "x1gney9c",
    keoZOQ: "xdj266r",
    k71WvV: "x14z9mp",
    k1K539: "x18jvhmb",
    keTefX: "x1lziwak",
    $$css: true
  },
  body: {
    kGuDYH: "x1roswp1 x1cncyzl",
    kLWn49: "xfrs9s4",
    kb6lSQ: "xjat59b",
    kMwMTN: "x1ixqp2s",
    kogj98: "x1ghz6dp",
    $$css: true
  }
};

/**
 * A native <dialog> from the bottom edge. The platform provides the
 * focus trap, Escape, and the backdrop; the title names it.
 */
export const Drawer = /*#__PURE__*/React.forwardRef(function Drawer({
  open,
  onClose,
  dismissable,
  lightDismiss,
  closeLabel,
  className,
  style,
  children,
  ...props
}, forwardedRef) {
  const {
    ref,
    context,
    dialogProps
  } = useNativeDialog({
    open,
    onClose,
    dismissable,
    lightDismiss
  }, props, forwardedRef);
  const sx = rs(["rs-drawer", className], styles.frame);
  const close = rs(["rs-drawer-close"], dialogStyles.close);
  return /*#__PURE__*/_jsx(DialogContext.Provider, {
    value: context,
    children: /*#__PURE__*/_jsxs("dialog", {
      ref: ref,
      ...props,
      ...dialogProps,
      className: sx.className,
      style: {
        ...sx.style,
        ...style
      },
      children: [closeLabel != null && /*#__PURE__*/_jsx(DialogCloseButton, {
        label: closeLabel,
        className: close.className,
        style: close.style,
        onClick: () => onClose?.()
      }), children]
    })
  });
});
export const DrawerTitle = /*#__PURE__*/React.forwardRef(function DrawerTitle({
  as: Tag = "h2",
  className,
  style,
  id,
  ...props
}, ref) {
  const titleId = useDialogPart("title", id);
  const sx = rs(["rs-drawer-title", className], styles.title);
  return /*#__PURE__*/_jsx(Tag, {
    ref: ref,
    ...props,
    id: titleId,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
export const DrawerBody = /*#__PURE__*/React.forwardRef(function DrawerBody({
  className,
  style,
  id,
  ...props
}, ref) {
  const bodyId = useDialogPart("body", id);
  const sx = rs(["rs-drawer-body", className], styles.body);
  return /*#__PURE__*/_jsx("p", {
    ref: ref,
    ...props,
    id: bodyId,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
//# sourceMappingURL=drawer.js.map
