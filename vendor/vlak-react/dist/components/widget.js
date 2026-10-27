"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    kB7OPa: "x9f619",
    k7Eaqz: "xeuugli",
    kzqmXN: "xh8yej3",
    ks0D6T: "x193iq5w",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j xz1l38o",
    kaIpWk: "xkrxur",
    kWkggS: "xhpg8l3",
    kMwMTN: "x1gney9c",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  header: {
    k1xSpc: "x78zum5",
    kGNEyG: "x1cy8zhl",
    kOIVth: "x8233eu",
    kmVPX3: "x1uz70x1",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  icon: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kzqmXN: "xwqq7k2",
    kZKoxP: "xmll18r",
    kmuXW: "x2lah0s",
    $$css: true
  },
  heading: {
    k1xSpc: "xrvj5dj",
    kOIVth: "xvh977a",
    kUk6DE: "x12lumcd",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  title: {
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    k63SB2: "x1s688f",
    $$css: true
  },
  provider: {
    kGuDYH: "xboafo0",
    kLWn49: "xfrs9s4",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  label: {
    kGuDYH: "xboafo0",
    kLWn49: "xfrs9s4",
    kMwMTN: "x1ixqp2s",
    keTefX: "xvc5jky",
    $$css: true
  },
  content: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    k7Eaqz: "xeuugli",
    kmVPX3: "x1uz70x1",
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  description: {
    kogj98: "x1ghz6dp",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  state: {
    k1xSpc: "xrvj5dj",
    kAPf3g: "x619ttb",
    kOIVth: "x8233eu",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  message: {
    kogj98: "x1ghz6dp",
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    k7Eaqz: "xeuugli",
    k8WAf4: "xugmnug",
    kg3NbH: "xnxx81d",
    $$css: true
  },
  footer: {
    kogj98: "x1ghz6dp",
    kmVPX3: "x19btat0",
    kEafiO: "x1ro6g4h",
    kPef9Z: "x13fuv20",
    kLZC3w: "x1fq36pv",
    kGuDYH: "xboafo0",
    kLWn49: "xfrs9s4",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  embed: {
    kB7OPa: "x9f619",
    k1xSpc: "x1lliihq",
    kzqmXN: "xh8yej3",
    ks0D6T: "x193iq5w",
    k7Eaqz: "xeuugli",
    kMzoRj: "xc342km",
    $$css: true
  }
};

/** An explicitly sized provider iframe for a Widget. Permissions and provider messaging remain application-owned. */
export const WidgetEmbed = /*#__PURE__*/React.forwardRef(function WidgetEmbed({
  title,
  src,
  height = 320,
  sandbox = "allow-scripts allow-forms",
  referrerPolicy = "no-referrer",
  loading = "lazy",
  className,
  style,
  ...props
}, ref) {
  const embed = rs(["rs-widget-embed", className], styles.embed);
  return /*#__PURE__*/_jsx("iframe", {
    ...props,
    ref: ref,
    title: title,
    src: src,
    height: height,
    sandbox: sandbox,
    referrerPolicy: referrerPolicy,
    loading: loading,
    className: embed.className,
    style: {
      ...embed.style,
      ...style
    }
  });
});

/** A shared surface for application and third-party React content, with explicit data states. */
export const Widget = /*#__PURE__*/React.forwardRef(function Widget({
  title,
  provider,
  icon,
  description,
  status = "ready",
  statusLabel,
  emptyMessage = "No results to show.",
  errorMessage = "This widget could not be loaded.",
  onRetry,
  actions,
  footer,
  children,
  className,
  style,
  "aria-label": label,
  "aria-labelledby": labelledBy,
  ...props
}, ref) {
  const titleId = React.useId();
  const [retrying, setRetrying] = React.useState(false);
  const [retryError, setRetryError] = React.useState("");
  const pending = React.useRef(false);
  const request = React.useRef(0);
  // biome-ignore lint/correctness/useExhaustiveDependencies: A changed data state invalidates previous retry results.
  React.useEffect(() => {
    request.current += 1;
    pending.current = false;
    setRetrying(false);
    setRetryError("");
    return () => {
      request.current += 1;
    };
  }, [status]);
  const retry = async () => {
    if (!onRetry || pending.current) return;
    pending.current = true;
    const id = ++request.current;
    setRetrying(true);
    setRetryError("");
    try {
      await onRetry();
    } catch {
      if (request.current === id) setRetryError("Retry failed. Try again.");
    } finally {
      if (request.current === id) {
        pending.current = false;
        setRetrying(false);
      }
    }
  };
  const root = rs(["rs-widget", className], styles.root);
  const header = rs(["rs-widget-header"], styles.header);
  const iconStyle = rs(["rs-widget-icon"], styles.icon);
  const heading = rs(["rs-widget-heading"], styles.heading);
  const titleStyle = rs(["rs-widget-title"], styles.title);
  const providerStyle = rs(["rs-widget-provider"], styles.provider);
  const labelStyle = rs(["rs-widget-label"], styles.label);
  const content = rs(["rs-widget-content"], styles.content);
  const descriptionStyle = rs(["rs-widget-description"], styles.description);
  const state = rs(["rs-widget-state"], styles.state);
  const message = rs(["rs-widget-message"], styles.message);
  const actionsStyle = rs(["rs-widget-actions"], styles.actions);
  const footerStyle = rs(["rs-widget-footer"], styles.footer);
  return /*#__PURE__*/_jsxs("section", {
    ...props,
    ref: ref,
    "aria-label": label,
    "aria-labelledby": labelledBy ?? (label == null ? titleId : undefined),
    "data-status": status,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsxs("header", {
      ...header,
      children: [icon != null && /*#__PURE__*/_jsx("span", {
        ...iconStyle,
        "aria-hidden": "true",
        children: icon
      }), /*#__PURE__*/_jsxs("div", {
        ...heading,
        children: [/*#__PURE__*/_jsx("span", {
          ...titleStyle,
          id: titleId,
          children: title
        }), provider != null && /*#__PURE__*/_jsx("div", {
          ...providerStyle,
          children: provider
        })]
      }), statusLabel && /*#__PURE__*/_jsx("span", {
        ...labelStyle,
        children: statusLabel
      })]
    }), /*#__PURE__*/_jsxs("div", {
      ...content,
      children: [description != null && /*#__PURE__*/_jsx("div", {
        ...descriptionStyle,
        children: description
      }), status === "ready" ? children : /*#__PURE__*/_jsxs("div", {
        ...state,
        children: [/*#__PURE__*/_jsx("p", {
          ...message,
          role: status === "error" ? "alert" : "status",
          children: retrying ? "Retrying…" : retryError || (status === "loading" ? "Loading…" : status === "empty" ? emptyMessage : errorMessage)
        }), status === "error" && onRetry && /*#__PURE__*/_jsx(Button, {
          type: "button",
          variant: "ghost",
          disabled: retrying,
          onClick: () => {
            void retry();
          },
          children: retrying ? "Retrying…" : "Try again"
        })]
      })]
    }), status === "ready" && actions != null && /*#__PURE__*/_jsx("div", {
      ...actionsStyle,
      children: actions
    }), footer != null && /*#__PURE__*/_jsx("div", {
      ...footerStyle,
      children: footer
    })]
  });
});
//# sourceMappingURL=widget.js.map
