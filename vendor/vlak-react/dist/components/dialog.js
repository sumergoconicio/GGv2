"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { cx } from "../cx.js";
import { setRef } from "../merge-refs.js";
import { Icon } from "./icon.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const dialogStyles = {
  frame: {
    kB7OPa: "x9f619",
    ks0D6T: "x9h9p8b xvonjk5",
    kzqmXN: "x8w59u6",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kaIpWk: "xkrxur",
    kmVPX3: "xomzojh xf08kjy",
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
    k1K539: "x18jvhmb xs2gq9z",
    keTefX: "x1lziwak",
    $$css: true
  },
  body: {
    kGuDYH: "x1roswp1 x1cncyzl",
    kMwMTN: "x1ixqp2s",
    kb6lSQ: "xjat59b",
    kLWn49: "xfrs9s4",
    keoZOQ: "xdj266r",
    k71WvV: "x14z9mp",
    k1K539: "xyi6m4r x1pgcebu",
    keTefX: "x1lziwak",
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kjj79g: "x13a6bvl",
    kXwgrk: "x1q0g3np x9u9o7l",
    kGNEyG: "xuk3077 x11g0wa5",
    kOIVth: "x13z6uf9 x1irejul",
    $$css: true
  },
  close: {
    kmkexE: "x1487y47 xrozb4q",
    kyUFMd: "x1h0q493",
    kB7OPa: "x9f619",
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kzqmXN: "x1uyfxw7 xla6mwc",
    kZKoxP: "x9ve8r1 x128uv7p",
    keoZOQ: "x1bov10x x4fjzt7",
    k71WvV: "x1dpfygs x1j1ef6",
    keTefX: "x1m73txa",
    kmVPX3: "x1717udv",
    kMzoRj: "xc342km",
    kaIpWk: "xkrxur",
    kWkggS: "xjbqb8w xqol87o",
    kMwMTN: "x1gney9c",
    kkrTdU: "x1ypdohk",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x14tvtkk",
    kInvED: "x7s97pk",
    $$css: true
  }
};

/* ── Shared native <dialog> behaviour: naming context, close requests, focus ── */

export const DialogContext = /*#__PURE__*/React.createContext(null);

/**
 * Title and body parts call this: it hands back the id the dialog
 * points aria-labelledby / aria-describedby at, and registers the
 * part so the attribute only exists while the part is rendered.
 */
export function useDialogPart(part, explicitId) {
  const ctx = React.useContext(DialogContext);
  const id = explicitId ?? (part === "title" ? ctx?.titleId : ctx?.bodyId);
  React.useEffect(() => {
    if (!ctx || !id) return;
    return ctx.register(part, id);
  }, [ctx, part, id]);
  return id;
}
const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
/**
 * Drives a native <dialog> from an `open` prop. Escape and light dismiss
 * become an `onClose` call; the parent's `open` stays the source of
 * truth. Returns the ref, the attributes for the element, and the
 * context value the title/body parts register into.
 */
export function useNativeDialog({
  open,
  onClose,
  dismissable = true,
  lightDismiss = false
}, props, forwardedRef) {
  const ref = React.useRef(null);
  const openRef = React.useRef(open);
  const restoreTo = React.useRef(null);
  const [parts, setParts] = React.useState({});
  const base = React.useId();
  const setDialogRef = React.useCallback(node => {
    ref.current = node;
    setRef(forwardedRef, node);
  }, [forwardedRef]);
  const register = React.useCallback((part, id) => {
    setParts(current => current[part] === id ? current : {
      ...current,
      [part]: id
    });
    return () => {
      setParts(current => current[part] === id ? {
        ...current,
        [part]: undefined
      } : current);
    };
  }, []);
  const context = React.useMemo(() => ({
    titleId: `${base}-title`,
    bodyId: `${base}-body`,
    register
  }), [base, register]);
  const restoreFocus = React.useCallback(dialog => {
    const previous = restoreTo.current;
    restoreTo.current = null;
    const active = document.activeElement;
    if (previous instanceof HTMLElement && previous.isConnected && (active === document.body || dialog.contains(active))) {
      previous.focus();
    }
  }, []);
  React.useEffect(() => {
    openRef.current = open;
    const dialog = ref.current;
    if (!dialog) return;
    if (open) {
      if (dialog.open) return;
      restoreTo.current = document.activeElement;
      if (typeof dialog.showModal === "function") dialog.showModal();else dialog.open = true;
      if (!dialog.contains(document.activeElement)) {
        const target = dialog.querySelector("[autofocus]") ?? dialog.querySelector(FOCUSABLE) ?? dialog;
        target.focus();
      }
      return;
    }
    if (dialog.open) dialog.close();
    restoreFocus(dialog);
  }, [open, restoreFocus]);
  React.useEffect(() => {
    // Capture the node now: React clears the forwarded ref before unmount cleanup.
    const dialog = ref.current;
    return () => {
      openRef.current = false;
      if (!dialog) return;
      if (dialog.open) {
        if (typeof dialog.close === "function") dialog.close();else dialog.open = false;
      }
      restoreFocus(dialog);
    };
  }, [restoreFocus]);
  const closedBy = !dismissable ? "none" : lightDismiss ? "any" : "closerequest";
  const onCancel = e => {
    props.onCancel?.(e);
    if (e.defaultPrevented) return;
    // The platform never closes on its own: the parent flips `open`.
    e.preventDefault();
    if (dismissable) onClose?.();
  };
  const onNativeClose = () => {
    // Closed by the platform (a forced close request, a method="dialog"
    // form) while the parent still says open: tell it.
    // A close event is queued by the browser. A newer open (including Strict
    // Mode's effect replay) must not be dismissed by the previous close event.
    if (openRef.current && !ref.current?.open) onClose?.();
  };
  const labelledBy = props["aria-labelledby"] ?? (props["aria-label"] ? undefined : parts.title);
  const describedBy = cx(props["aria-describedby"], parts.body) || undefined;
  return {
    ref: setDialogRef,
    context,
    dialogProps: {
      onCancel,
      onClose: onNativeClose,
      "aria-labelledby": labelledBy,
      "aria-describedby": describedBy,
      ...{
        closedby: closedBy
      }
    }
  };
}
/**
 * Corner close: a labelled button with the close mark. The caller
 * paints it with its own class over dialogStyles.close.
 */
export function DialogCloseButton({
  label,
  ...props
}) {
  return /*#__PURE__*/_jsx("button", {
    type: "button",
    "aria-label": label,
    ...props,
    children: /*#__PURE__*/_jsx(Icon, {
      name: "close"
    })
  });
}

/**
 * A native <dialog>. Focus trapping, Escape, and the backdrop come
 * from the platform; the title names it and the body describes it.
 */
export const Dialog = /*#__PURE__*/React.forwardRef(function Dialog({
  open,
  onClose,
  dismissable,
  lightDismiss,
  closeLabel,
  className,
  style,
  children,
  extraStyles,
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
  const sx = rs(["rs-dialog", className], dialogStyles.frame, ...(extraStyles ?? []));
  const close = rs(["rs-dialog-close"], dialogStyles.close);
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
export const DialogTitle = /*#__PURE__*/React.forwardRef(function DialogTitle({
  as: Tag = "h2",
  className,
  style,
  id,
  ...props
}, ref) {
  const titleId = useDialogPart("title", id);
  const sx = rs(["rs-dialog-title", className], dialogStyles.title);
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
export const DialogBody = /*#__PURE__*/React.forwardRef(function DialogBody({
  className,
  style,
  id,
  ...props
}, ref) {
  const bodyId = useDialogPart("body", id);
  const sx = rs(["rs-dialog-body", className], dialogStyles.body);
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
export const DialogActions = /*#__PURE__*/React.forwardRef(function DialogActions({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-dialog-actions", className], dialogStyles.actions);
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
//# sourceMappingURL=dialog.js.map
