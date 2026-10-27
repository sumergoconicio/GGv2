"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const ResponseContext = /*#__PURE__*/React.createContext(null);

/** Reads speaker and response status from a custom descendant without threading props. */
export function useResponse() {
  const context = React.useContext(ResponseContext);
  if (!context) throw new Error("useResponse must be used inside Response.");
  return context;
}
const statusLabels = {
  streaming: "Responding",
  complete: "Complete",
  error: "Response failed",
  stopped: "Stopped"
};
const styles = {
  root: {
    kB7OPa: "x9f619",
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kOIVth: "x1fsutb",
    k7Eaqz: "xeuugli",
    kzqmXN: "xh8yej3",
    ks0D6T: "x1qp14f0",
    kSGwAc: "xqcrz7y",
    keTefX: "x1lziwak",
    k71WvV: "x11t971q",
    k8WAf4: "x6qoaat",
    kg3NbH: "xnjsko4",
    kMwMTN: "x1gney9c",
    kGuDYH: "x6u19be",
    kLWn49: "xfrs9s4",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  user: {
    kzqmXN: "xeq5yr9",
    ks0D6T: "xbnhqcs",
    kSGwAc: "xpvyfi4",
    keTefX: "xvc5jky",
    k71WvV: "x14z9mp",
    kWkggS: "x1nzd1wa",
    kaIpWk: "xkrxur",
    k8WAf4: "xgepmj6",
    kg3NbH: "xnxx81d",
    $$css: true
  },
  header: {
    k1xSpc: "x78zum5",
    kGNEyG: "x1pha0wt",
    kjj79g: "x1qughib",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    $$css: true
  },
  author: {
    k63SB2: "x1s688f",
    kGuDYH: "x1roswp1",
    $$css: true
  },
  identity: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kOIVth: "x13z6uf9",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  avatar: {
    k1xSpc: "x3nfvp2",
    kmuXW: "x2lah0s",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    $$css: true
  },
  status: {
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x1dcheo9",
    $$css: true
  },
  content: {
    k7Eaqz: "xeuugli",
    kHjlTd: "xj0a0fe",
    khDVqt: "x126k92a",
    $$css: true
  },
  error: {
    kogj98: "x1ghz6dp",
    kMwMTN: "x1gney9c",
    kGuDYH: "xkpwil5",
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    $$css: true
  },
  copy: {
    kB7OPa: "x9f619",
    kAzted: "x1wszdd",
    k7Eaqz: "xtp0tkc",
    k8WAf4: "x18g2hj5",
    kg3NbH: "x1ryrjj2",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd xaxtmmi",
    kaIpWk: "xkrxur",
    kWkggS: "xjbqb8w xuke8d3 x1awx03v",
    kMwMTN: "x1gney9c x9dgriy",
    kMv6JI: "xjb2p0i",
    kGuDYH: "x1dcheo9",
    k63SB2: "xk50ysn",
    kLWn49: "xfrs9s4",
    kkrTdU: "x1ypdohk xjb0foi",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x14tvtkk",
    kInvED: "x7s97pk",
    $$css: true
  },
  copyStatus: {
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x1dcheo9",
    $$css: true
  }
};

/** One message with application-rendered content and a separate status announcement. */
export const Response = /*#__PURE__*/React.forwardRef(function Response({
  from = "assistant",
  author,
  avatar,
  status = "complete",
  statusLabel,
  errorMessage,
  copyText,
  copyLabel = "Copy response",
  copiedLabel = "Copied",
  copyErrorLabel = "Could not copy. Try again.",
  actions,
  renderLayout,
  children,
  className,
  style,
  "aria-labelledby": labelledBy,
  "aria-label": label,
  ...props
}, ref) {
  const authorId = React.useId();
  const [copyState, setCopyState] = React.useState("idle");
  const copyRequest = React.useRef(0);
  const copyPending = React.useRef(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: New copy text invalidates pending writes and their feedback.
  React.useEffect(() => {
    copyRequest.current += 1;
    copyPending.current = false;
    setCopyState("idle");
    return () => {
      copyRequest.current += 1;
    };
  }, [copyText]);
  async function copy() {
    if (copyText === undefined || copyPending.current) return;
    const request = ++copyRequest.current;
    copyPending.current = true;
    setCopyState("pending");
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(copyText);
      if (request === copyRequest.current) setCopyState("copied");
    } catch {
      if (request === copyRequest.current) setCopyState("error");
    } finally {
      if (request === copyRequest.current) copyPending.current = false;
    }
  }
  const root = rs(["rs-response", from === "user" && "rs-response-user", className], styles.root, from === "user" && styles.user);
  const header = rs(["rs-response-header"], styles.header);
  const authorStyle = rs(["rs-response-author"], styles.author);
  const identity = rs(["rs-response-identity"], styles.identity);
  const avatarStyle = rs(["rs-response-avatar"], styles.avatar);
  const statusStyle = rs(["rs-response-status"], styles.status);
  const content = rs(["rs-response-content"], styles.content);
  const error = rs(["rs-response-error"], styles.error);
  const actionsStyle = rs(["rs-response-actions"], styles.actions);
  const copyStyle = rs(["rs-response-copy"], styles.copy);
  const copyStatus = rs(["rs-response-copy-status"], styles.copyStatus);
  const showActions = copyText !== undefined || actions != null;
  const state = {
    from,
    author: author ?? (from === "user" ? "You" : "Assistant"),
    status,
    statusLabel: statusLabel ?? statusLabels[status],
    errorMessage
  };
  const authorPart = /*#__PURE__*/_jsx("span", {
    id: authorId,
    ...authorStyle,
    children: state.author
  });
  const avatarPart = avatar != null ? /*#__PURE__*/_jsx("span", {
    ...avatarStyle,
    children: avatar
  }) : null;
  const statusPart = /*#__PURE__*/_jsx("span", {
    ...statusStyle,
    role: "status",
    "aria-live": "polite",
    "aria-atomic": "true",
    children: state.statusLabel
  });
  const parts = {
    avatar: avatarPart,
    author: authorPart,
    status: statusPart,
    header: /*#__PURE__*/_jsxs("div", {
      ...header,
      children: [avatarPart ? /*#__PURE__*/_jsxs("div", {
        ...identity,
        children: [avatarPart, authorPart]
      }) : authorPart, statusPart]
    }),
    content: /*#__PURE__*/_jsx("div", {
      ...content,
      children: children
    }),
    error: status === "error" && errorMessage ? /*#__PURE__*/_jsx("p", {
      ...error,
      children: errorMessage
    }) : null,
    actions: showActions ? /*#__PURE__*/_jsxs("div", {
      ...actionsStyle,
      children: [copyText !== undefined && /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx("button", {
          type: "button",
          ...copyStyle,
          disabled: copyState === "pending",
          onClick: copy,
          children: copyLabel
        }), /*#__PURE__*/_jsx("span", {
          ...copyStatus,
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: copyState === "copied" ? copiedLabel : copyState === "error" ? copyErrorLabel : ""
        })]
      }), actions]
    }) : null
  };
  const accessibleLabel = label ?? (renderLayout && !labelledBy ? typeof state.author === "string" ? state.author : from === "user" ? "You" : "Assistant" : undefined);
  return /*#__PURE__*/_jsx(ResponseContext.Provider, {
    value: state,
    children: /*#__PURE__*/_jsx("article", {
      ref: ref,
      ...props,
      "aria-label": accessibleLabel,
      "aria-labelledby": labelledBy ?? (accessibleLabel ? undefined : authorId),
      "data-from": from,
      "data-status": status,
      className: root.className,
      style: {
        ...root.style,
        ...style
      },
      children: renderLayout ? renderLayout(parts, state) : /*#__PURE__*/_jsxs(_Fragment, {
        children: [parts.header, parts.content, parts.error, parts.actions]
      })
    })
  });
});
//# sourceMappingURL=response.js.map
