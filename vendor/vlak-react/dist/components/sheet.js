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
    k87sOh: "x13vifvy",
    kt4wiu: "xtijo5x",
    krVfgx: "x1ey2m1c",
    kLqNvP: "xhi6v0a",
    kogj98: "x1ghz6dp",
    kZKoxP: "xtdtrs8",
    kskxy: "x7ab17h",
    kzqmXN: "xqr5nr8 xvolacv",
    ks0D6T: "x1jrhgas xcji143",
    kMzoRj: "xc342km",
    ksu8eU: "x1y0btm7",
    k2ei4v: "x1y6m6vk",
    kVAM5u: "xghov5j",
    krdFHd: "x1q2u622",
    kfmiAY: "x1ga7v0g",
    kT0f0o: "x16uus16",
    kVL7Gh: "x3ebiub",
    k8WAf4: "x1yb22fu",
    kg3NbH: "x1qhpy6z",
    kWkggS: "xhpg8l3",
    kMwMTN: "x1gney9c",
    kGVxlE: "x1gnnqk1",
    kGyWv1: "xy1a3z",
    $$css: true
  },
  left: {
    kt4wiu: "x1woyocn",
    kLqNvP: "x1o0tod",
    k2ei4v: "x14e42zd",
    ke9TFa: "x2s8g7x",
    krdFHd: "x15mokao",
    kfmiAY: "x1mq7qa4",
    kT0f0o: "x1ox6k40",
    kVL7Gh: "xbiv7yw",
    kGVxlE: "x1gnnqk1",
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
 * A native <dialog> at the screen edge. The platform provides the
 * focus trap, Escape, and the backdrop; the title names it.
 */
export const Sheet = /*#__PURE__*/React.forwardRef(function Sheet({
  open,
  onClose,
  dismissable,
  lightDismiss,
  closeLabel,
  side = "right",
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
  const sx = rs(["rs-sheet", side === "left" && "rs-sheet-left", className], styles.frame, side === "left" && styles.left);
  const close = rs(["rs-sheet-close"], dialogStyles.close);
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
export const SheetTitle = /*#__PURE__*/React.forwardRef(function SheetTitle({
  as: Tag = "h2",
  className,
  style,
  id,
  ...props
}, ref) {
  const titleId = useDialogPart("title", id);
  const sx = rs(["rs-sheet-title", className], styles.title);
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
export const SheetBody = /*#__PURE__*/React.forwardRef(function SheetBody({
  className,
  style,
  id,
  ...props
}, ref) {
  const bodyId = useDialogPart("body", id);
  const sx = rs(["rs-sheet-body", className], styles.body);
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
//# sourceMappingURL=sheet.js.map
