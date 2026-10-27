"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { DialogContext, useDialogPart, useNativeDialog } from "./dialog.js";
import { Icon } from "./icon.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const enter = "x1iqd3ia-B";
const styles = {
  open: {
    kKVMdj: "xl8ig04 xmmch59",
    k44tkh: "xb8lv0f",
    kyAemX: "xvjiv3b",
    $$css: true
  },
  sheet: {
    kB7OPa: "x9f619",
    kVAEAm: "xixxii4",
    kkqhue: "x17y0mx6",
    k87sOh: "x80663w",
    krVfgx: "x1ey2m1c",
    kzqmXN: "xoww62b",
    ks0D6T: "x193iq5w",
    kskxy: "x1ismmbu",
    kogj98: "x19bbpc0",
    kmVPX3: "xrnx0ab",
    kORKVm: "x1odjw0f",
    kZeWKH: "xish69e",
    kMzoRj: "xmkeg23",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kt9PQ7: "x1qhh985",
    kaIpWk: "xhhw1o9",
    kWkggS: "xhpg8l3",
    kMwMTN: "x1gney9c",
    kMv6JI: "x168gdka",
    kGVxlE: "x1gnnqk1",
    kGyWv1: "xmhtj4z",
    $$css: true
  },
  handle: {
    kVAEAm: "x10l6tqk",
    k87sOh: "x1tk7jg1",
    kLqNvP: "x1n06abs",
    kzqmXN: "x1td3qas",
    kZKoxP: "xqu0tyb",
    kaIpWk: "x1cum3z5",
    kWkggS: "xxnl87f x99u5fr",
    $$css: true
  },
  close: {
    kysU6D: "xjyslct",
    kyUFMd: "x1h0q493",
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kzqmXN: "x1useyqa",
    kZKoxP: "xsdox4t",
    kogj98: "x1xlv9cm",
    kmVPX3: "xc7ga6q",
    kMzoRj: "xc342km",
    kaIpWk: "x16rqkct",
    kMwMTN: "x1gney9c",
    kWkggS: "xjbqb8w xqol87o",
    kkrTdU: "x1ypdohk",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x14tvtkk",
    kInvED: "x1wfwxd8",
    $$css: true
  },
  title: {
    kogj98: "x14772uy",
    kGuDYH: "x1pvqxga",
    k63SB2: "xk50ysn",
    kLWn49: "xwn7fz2",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  body: {
    kogj98: "xswdx4l",
    kGuDYH: "x1j61zf2",
    kLWn49: "x1evy7pa",
    kMwMTN: "x1ixqp2s",
    kHjlTd: "xj0a0fe",
    $$css: true
  }
};
export const AndroidSheet = /*#__PURE__*/React.forwardRef(function AndroidSheet({
  open,
  defaultOpen = false,
  onOpenChange,
  onClose,
  dismissable = true,
  lightDismiss = true,
  closeLabel = "Close",
  className,
  style,
  children,
  ...props
}, forwardedRef) {
  const [inner, setInner] = React.useState(defaultOpen);
  const current = open ?? inner;
  const close = () => {
    if (open === undefined) setInner(false);
    onOpenChange?.(false);
    onClose?.();
  };
  const {
    ref,
    context,
    dialogProps
  } = useNativeDialog({
    open: current,
    onClose: close,
    dismissable,
    lightDismiss
  }, props, forwardedRef);
  const sx = rs(["rs-android-sheet", current && "rs-android-sheet-open", className], styles.sheet, current && styles.open);
  const handle = rs(["rs-android-sheet-handle"], styles.handle);
  const closeSx = rs(["rs-android-sheet-close"], styles.close);
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
      children: [/*#__PURE__*/_jsx("span", {
        ...handle,
        "aria-hidden": "true"
      }), dismissable && /*#__PURE__*/_jsx("button", {
        type: "button",
        ...closeSx,
        "aria-label": closeLabel,
        onClick: close,
        children: /*#__PURE__*/_jsx(Icon, {
          name: "close",
          size: 24
        })
      }), children]
    })
  });
});
export const AndroidSheetTitle = /*#__PURE__*/React.forwardRef(function AndroidSheetTitle({
  id,
  className,
  style,
  ...props
}, ref) {
  const titleId = useDialogPart("title", id);
  const sx = rs(["rs-android-sheet-title", className], styles.title);
  return /*#__PURE__*/_jsx("h2", {
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
export const AndroidSheetBody = /*#__PURE__*/React.forwardRef(function AndroidSheetBody({
  id,
  className,
  style,
  ...props
}, ref) {
  const bodyId = useDialogPart("body", id);
  const sx = rs(["rs-android-sheet-body", className], styles.body);
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
//# sourceMappingURL=android-sheet.js.map
