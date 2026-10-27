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
    kGNEyG: "x6s0dn4",
    kOIVth: "x13z6uf9",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1rwdzkk",
    k7Eaqz: "xeuugli",
    ks0D6T: "x193iq5w",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j xz1l38o",
    kaIpWk: "xkrxur",
    kMwMTN: "x1gney9c",
    kWkggS: "xhpg8l3",
    $$css: true
  },
  prefix: {
    kMwMTN: "x1ixqp2s",
    kmuXW: "x2lah0s",
    kMv6JI: "x1mb2qyg",
    $$css: true
  },
  code: {
    kUk6DE: "x12lumcd",
    k7Eaqz: "xeuugli",
    kXHlph: "xw2csxc",
    khDVqt: "x1sdyfia",
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    kMv6JI: "x1mb2qyg",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  copy: {
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kwnvtZ: "x1a02dak",
    kOIVth: "xvh977a",
    kmuXW: "x2lah0s",
    $$css: true
  },
  status: {
    kGuDYH: "xboafo0",
    kLWn49: "xfrs9s4",
    kMwMTN: "x1ixqp2s",
    ks0D6T: "x1j1zfo6",
    $$css: true
  }
};

/** Exact-value clipboard action shared by compact developer views. */
export const SnippetCopy = /*#__PURE__*/React.forwardRef(function SnippetCopy({
  value,
  label = "Copy snippet",
  onCopy,
  className,
  style,
  ...props
}, ref) {
  const [state, setState] = React.useState("idle");
  const request = React.useRef(0);
  const pending = React.useRef(false);
  // biome-ignore lint/correctness/useExhaustiveDependencies: A changed value invalidates the pending clipboard result.
  React.useEffect(() => {
    request.current++;
    pending.current = false;
    setState("idle");
    return () => {
      request.current++;
    };
  }, [value]);
  const copy = async () => {
    if (pending.current) return;
    pending.current = true;
    const id = ++request.current;
    setState("pending");
    try {
      if (onCopy) await onCopy(value);else await navigator.clipboard.writeText(value);
      if (id === request.current) setState("done");
    } catch {
      if (id === request.current) setState("error");
    } finally {
      if (id === request.current) pending.current = false;
    }
  };
  const root = rs(["rs-snippet-copy", className], styles.copy);
  const status = rs(["rs-snippet-status"], styles.status);
  return /*#__PURE__*/_jsxs("span", {
    ...props,
    ref: ref,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx(Button, {
      type: "button",
      variant: "subtle",
      size: "icon",
      "aria-label": label,
      title: label,
      disabled: state === "pending",
      onClick: () => {
        void copy();
      },
      children: /*#__PURE__*/_jsx(Icon, {
        name: state === "done" ? "check" : "copy"
      })
    }), /*#__PURE__*/_jsx("span", {
      ...status,
      role: "status",
      "aria-live": "polite",
      children: state === "error" ? "Could not copy. Try again." : state === "done" ? "Copied" : state === "pending" ? "Copying…" : ""
    })]
  });
});

/** A compact, selectable command or code line; the decorative prefix is not copied. */
export const Snippet = /*#__PURE__*/React.forwardRef(function Snippet({
  code,
  prefix,
  label = "Code snippet",
  copyLabel,
  copyable = true,
  onCopy,
  className,
  style,
  ...props
}, ref) {
  const root = rs(["rs-snippet", className], styles.root);
  const prefixStyle = rs(["rs-snippet-prefix"], styles.prefix);
  const codeStyle = rs(["rs-snippet-code"], styles.code);
  return /*#__PURE__*/_jsxs("figure", {
    "aria-label": label,
    ...props,
    ref: ref,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [prefix != null && /*#__PURE__*/_jsx("span", {
      ...prefixStyle,
      "aria-hidden": "true",
      children: prefix
    }), /*#__PURE__*/_jsx("code", {
      ...codeStyle,
      tabIndex: 0,
      children: code
    }), copyable && /*#__PURE__*/_jsx(SnippetCopy, {
      value: code,
      label: copyLabel,
      onCopy: onCopy
    })]
  });
});
//# sourceMappingURL=snippet.js.map
