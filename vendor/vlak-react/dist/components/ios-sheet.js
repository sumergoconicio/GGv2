"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useMergedRefs } from "../merge-refs.js";
import { Icon } from "./icon.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const enter = "x14fbj21-B";
const styles = {
  root: {
    kVAEAm: "xixxii4",
    k87sOh: "x80663w",
    krVfgx: "x1ey2m1c",
    kkqhue: "x17y0mx6",
    kB7OPa: "x9f619",
    kzqmXN: "x1g7z4jj",
    ks0D6T: "x1usz39j",
    kskxy: "xs8sm83",
    kqGvvJ: "x10im51j",
    kUOVxO: "xvueqy4",
    kmVPX3: "x1717udv",
    kMzoRj: "xmkeg23",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd xaxtmmi",
    krdFHd: "x1mvgw25",
    kfmiAY: "x1yfjhkk",
    kVL7Gh: "xbiv7yw",
    kT0f0o: "x16uus16",
    kWkggS: "xhpg8l3",
    kMwMTN: "x1gney9c",
    kMv6JI: "x1s07pz0",
    kGuDYH: "x19d36u7",
    kLWn49: "x19v9tvf",
    kORKVm: "x1odjw0f",
    kZeWKH: "xish69e",
    kGyWv1: "xyx7m1n",
    $$css: true
  },
  open: {
    kKVMdj: "x9yyn2a xmmch59",
    k44tkh: "xfbpl4g",
    kyAemX: "xatqbsq",
    $$css: true
  },
  handle: {
    kzqmXN: "x14qfxbe",
    kZKoxP: "x1ycjhwn",
    kaIpWk: "x18zih8k",
    kqGvvJ: "x4gb806",
    kUOVxO: "xvueqy4",
    kWkggS: "x1ipdmc4",
    $$css: true
  },
  header: {
    k1xSpc: "xrvj5dj",
    kumcoG: "xcnywog",
    kGNEyG: "x6s0dn4",
    kOIVth: "x167g77z",
    kAzted: "x1f83pxg",
    kB7OPa: "x9f619",
    k8WAf4: "x1vvogim",
    kg3NbH: "xaope02",
    kt9PQ7: "xso031l",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  title: {
    kogj98: "x1ghz6dp",
    k9WMMc: "x2b8uid",
    kGuDYH: "x19d36u7",
    kLWn49: "x19v9tvf",
    k63SB2: "x1s688f",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  close: {
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kzqmXN: "x187nhsf",
    k7Eaqz: "x1nb6za0",
    kZKoxP: "xn3w4p2",
    kAzted: "x1gg8mnh",
    kmVPX3: "x1717udv",
    kysU6D: "xjyslct",
    kaIpWk: "x13pz1uv",
    kMzoRj: "xmkeg23",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd xaxtmmi",
    kWkggS: "x6583kg x1q26ab9",
    kMwMTN: "x1gney9c",
    kkrTdU: "x1ypdohk",
    kMeerF: "x1k57tk5 x784prv",
    k3XXqK: "xaatb59",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  body: {
    kLKAdn: "x1cnzs8",
    kGO01o: "xhbyna8",
    kg3NbH: "x17qtykl",
    $$css: true
  },
  description: {
    kqGvvJ: "xu8mtj6",
    kUOVxO: "xrxpjvj",
    kGuDYH: "x1jvydc1",
    kLWn49: "x1fc57z9",
    kMwMTN: "x1ixqp2s",
    $$css: true
  }
};

/** A modal bottom sheet. The platform owns the focus trap and top layer. */
export const IOSSheet = /*#__PURE__*/React.forwardRef(function IOSSheet({
  open,
  defaultOpen = false,
  onOpenChange,
  onClose,
  title,
  description,
  closeLabel = "Close sheet",
  dismissable = true,
  lightDismiss = true,
  className,
  style,
  children,
  onCancel,
  onClick,
  ...props
}, forwardedRef) {
  const [inner, setInner] = React.useState(defaultOpen);
  const controlled = open !== undefined;
  const shown = controlled ? open : inner;
  const dialog = React.useRef(null);
  const ref = useMergedRefs(dialog, forwardedRef);
  const origin = React.useRef(null);
  const shownRef = React.useRef(shown);
  const pendingCloses = React.useRef(0);
  shownRef.current = shown;
  const id = React.useId();
  const requestClose = () => {
    if (!controlled) setInner(false);
    onOpenChange?.(false);
    onClose?.();
  };
  const restore = React.useCallback(node => {
    const previous = origin.current;
    origin.current = null;
    if (previous?.isConnected && (document.activeElement === document.body || node.contains(document.activeElement))) previous.focus();
  }, []);
  React.useLayoutEffect(() => {
    shownRef.current = shown;
    const node = dialog.current;
    if (!node) return;
    if (shown && !node.open) {
      origin.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      if (typeof node.showModal === "function") node.showModal();else node.open = true;
      if (!node.contains(document.activeElement)) (node.querySelector("[autofocus],button:not(:disabled),input:not(:disabled),select:not(:disabled),textarea:not(:disabled),[tabindex='0']") ?? node).focus();
    } else if (!shown) {
      if (node.open) {
        if (typeof node.close === "function") {
          pendingCloses.current++;
          node.close();
        } else node.open = false;
      }
      restore(node);
    }
  }, [shown, restore]);
  React.useEffect(() => {
    const node = dialog.current;
    return () => {
      shownRef.current = false;
      if (node) {
        if (node.open && typeof node.close === "function") {
          pendingCloses.current++;
          node.close();
        }
        restore(node);
      }
    };
  }, [restore]);
  const root = rs(["rs-ios-sheet", shown && "rs-ios-sheet-open", className], styles.root, shown && styles.open);
  const handle = rs(["rs-ios-sheet-handle"], styles.handle);
  const header = rs(["rs-ios-sheet-header"], styles.header);
  const heading = rs(["rs-ios-sheet-title"], styles.title);
  const close = rs(["rs-ios-sheet-close"], styles.close);
  const body = rs(["rs-ios-sheet-body"], styles.body);
  const detail = rs(["rs-ios-sheet-description"], styles.description);
  return /*#__PURE__*/_jsxs("dialog", {
    ...props,
    ref: ref,
    "aria-labelledby": props["aria-label"] ? undefined : props["aria-labelledby"] ?? `${id}-title`,
    "aria-describedby": props["aria-describedby"] ?? (description ? `${id}-description` : undefined),
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    onCancel: event => {
      onCancel?.(event);
      if (event.defaultPrevented) return;
      event.preventDefault();
      if (dismissable) requestClose();
    },
    onClose: () => {
      if (pendingCloses.current) pendingCloses.current--;else if (shownRef.current) requestClose();
    },
    onClick: event => {
      onClick?.(event);
      if (event.defaultPrevented || !lightDismiss || !dismissable || event.target !== event.currentTarget) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) requestClose();
    },
    children: [/*#__PURE__*/_jsx("div", {
      ...handle,
      "aria-hidden": "true"
    }), /*#__PURE__*/_jsxs("header", {
      ...header,
      children: [/*#__PURE__*/_jsx("span", {}), /*#__PURE__*/_jsx("h2", {
        ...heading,
        id: `${id}-title`,
        children: title
      }), dismissable ? /*#__PURE__*/_jsx("button", {
        ...close,
        type: "button",
        "aria-label": closeLabel,
        onClick: requestClose,
        children: /*#__PURE__*/_jsx(Icon, {
          name: "close",
          size: 24
        })
      }) : /*#__PURE__*/_jsx("span", {})]
    }), /*#__PURE__*/_jsxs("div", {
      ...body,
      children: [description && /*#__PURE__*/_jsx("p", {
        ...detail,
        id: `${id}-description`,
        children: description
      }), children]
    })]
  });
});
//# sourceMappingURL=ios-sheet.js.map
