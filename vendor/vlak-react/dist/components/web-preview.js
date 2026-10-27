"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { Icon } from "./icon.js";
import { Input } from "./input.js";
import { Collapsible } from "./collapsible.js";
import { WidgetEmbed } from "./widget.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
export function isPreviewUrl(value) {
  if (value === "about:blank") return true;
  if ([...value].some(character => character.charCodeAt(0) <= 32 || character.charCodeAt(0) === 127) || value.startsWith("//") || value.includes("\\")) return false;
  if (value.startsWith("/")) return true;
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) && !url.username && !url.password;
  } catch {
    return false;
  }
}
const styles = {
  root: {
    k7Eaqz: "xeuugli",
    kzqmXN: "xh8yej3",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j xz1l38o",
    kaIpWk: "xkrxur",
    kMwMTN: "x1gney9c",
    kWkggS: "xhpg8l3",
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  navigation: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x6s0dn4",
    kOIVth: "xvh977a",
    kmVPX3: "x7gbtqy",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  address: {
    k7Eaqz: "xzhy1st",
    kUk6DE: "x12lumcd",
    $$css: true
  },
  body: {
    k7Eaqz: "xeuugli",
    kVQacm: "xysyzu8",
    $$css: true
  },
  status: {
    kmVPX3: "xrqs5gp",
    kogj98: "x1ghz6dp",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "xboafo0",
    $$css: true
  },
  console: {
    kmVPX3: "xpixsg9",
    kEafiO: "x1ro6g4h",
    kPef9Z: "x13fuv20",
    kLZC3w: "x1fq36pv",
    $$css: true
  },
  logs: {
    kB88ic: "xe8uvvx",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    kskxy: "x17l2srq",
    kVQacm: "xysyzu8",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  log: {
    k1xSpc: "xrvj5dj",
    kOIVth: "xvh977a",
    k8WAf4: "x18g2hj5",
    kEafiO: "x1ro6g4h",
    kPef9Z: "x13fuv20",
    kLZC3w: "x1fq36pv",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  level: {
    kGuDYH: "xboafo0",
    k63SB2: "x1s688f",
    $$css: true
  },
  message: {
    khDVqt: "x126k92a",
    kHjlTd: "xj0a0fe",
    kMv6JI: "x1mb2qyg",
    kogj98: "x1ghz6dp",
    $$css: true
  }
};

/** URL navigation and a sandboxed iframe with host-supplied console messages. */
export const WebPreview = /*#__PURE__*/React.forwardRef(function WebPreview({
  title = "Web preview",
  url,
  defaultUrl = "about:blank",
  onUrlChange,
  onBack,
  onForward,
  canGoBack = false,
  canGoForward = false,
  onReload,
  logs = [],
  maxLogEntries = 200,
  frameProps,
  className,
  style,
  children,
  ...props
}, ref) {
  const [innerUrl, setInnerUrl] = React.useState(defaultUrl);
  const current = url ?? innerUrl;
  const [draft, setDraft] = React.useState(current);
  const [status, setStatus] = React.useState("Loading preview…");
  const [validation, setValidation] = React.useState("");
  const [reload, setReload] = React.useState(0);
  const valid = isPreviewUrl(current);
  React.useEffect(() => {
    setDraft(current);
    setValidation("");
    setStatus("Loading preview…");
  }, [current]);
  const navigate = event => {
    event.preventDefault();
    const candidate = draft.trim();
    if (!isPreviewUrl(candidate)) {
      setValidation("Enter an http or https URL, a local path starting with /, or about:blank.");
      return;
    }
    setValidation("");
    if (url === undefined) setInnerUrl(candidate);
    onUrlChange?.(candidate);
    setStatus(candidate === current ? "Preview address is unchanged." : url === undefined ? "Loading preview…" : "Navigation requested.");
  };
  const root = rs(["rs-web-preview", className], styles.root);
  const navigation = rs(["rs-web-preview-navigation"], styles.navigation);
  const address = rs(["rs-web-preview-address"], styles.address);
  const body = rs(["rs-web-preview-body"], styles.body);
  const statusStyle = rs(["rs-web-preview-status"], styles.status);
  const consoleStyle = rs(["rs-web-preview-console"], styles.console);
  const list = rs(["rs-web-preview-logs"], styles.logs);
  const logStyle = rs(["rs-web-preview-log"], styles.log);
  const level = rs(["rs-web-preview-level"], styles.level);
  const message = rs(["rs-web-preview-message"], styles.message);
  const logLimit = Number.isFinite(maxLogEntries) ? Math.min(2000, Math.max(1, Math.floor(maxLogEntries))) : 200;
  return /*#__PURE__*/_jsxs("section", {
    "aria-label": title,
    ...props,
    ref: ref,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("form", {
      onSubmit: navigate,
      children: /*#__PURE__*/_jsxs("div", {
        ...navigation,
        role: "group",
        "aria-label": `${title} navigation`,
        children: [onBack && /*#__PURE__*/_jsx(Button, {
          type: "button",
          variant: "subtle",
          size: "icon",
          "aria-label": "Back",
          title: "Back",
          disabled: !canGoBack,
          onClick: onBack,
          children: /*#__PURE__*/_jsx(Icon, {
            name: "chevron-left"
          })
        }), onForward && /*#__PURE__*/_jsx(Button, {
          type: "button",
          variant: "subtle",
          size: "icon",
          "aria-label": "Forward",
          title: "Forward",
          disabled: !canGoForward,
          onClick: onForward,
          children: /*#__PURE__*/_jsx(Icon, {
            name: "chevron-right"
          })
        }), /*#__PURE__*/_jsx(Button, {
          type: "button",
          variant: "subtle",
          "aria-label": "Reload preview",
          disabled: !valid,
          onClick: () => {
            setReload(value => value + 1);
            setStatus("Loading preview…");
            onReload?.();
          },
          children: "Reload"
        }), /*#__PURE__*/_jsx("div", {
          ...address,
          children: /*#__PURE__*/_jsx(Input, {
            plain: true,
            "aria-label": "Preview URL",
            inputMode: "url",
            value: draft,
            readOnly: url !== undefined && !onUrlChange,
            onChange: event => setDraft(event.currentTarget.value),
            "aria-invalid": !!validation
          })
        }), /*#__PURE__*/_jsx(Button, {
          type: "submit",
          variant: "subtle",
          disabled: url !== undefined && !onUrlChange,
          children: "Go"
        })]
      })
    }), /*#__PURE__*/_jsx("p", {
      ...statusStyle,
      role: validation || !valid ? "alert" : "status",
      children: validation || (!valid ? "This preview address is not supported." : status)
    }), /*#__PURE__*/_jsx("div", {
      ...body,
      children: valid && /*#__PURE__*/_createElement(WidgetEmbed, {
        ...frameProps,
        key: `${current}:${reload}`,
        src: current,
        title: title,
        onLoad: event => {
          setStatus("Preview loaded.");
          frameProps?.onLoad?.(event);
        },
        onError: event => {
          setStatus("Preview could not load. Try reloading.");
          frameProps?.onError?.(event);
        }
      })
    }), /*#__PURE__*/_jsxs(Collapsible, {
      ...consoleStyle,
      title: `Console (${logs.length})`,
      children: [/*#__PURE__*/_jsx("ul", {
        ...list,
        tabIndex: 0,
        "aria-label": "Preview console messages",
        children: logs.slice(-logLimit).map((log, index) => {
          const date = log.timestamp == null ? undefined : new Date(log.timestamp);
          const iso = date && Number.isFinite(date.getTime()) ? date.toISOString() : undefined;
          return /*#__PURE__*/_jsxs("li", {
            ...logStyle,
            children: [/*#__PURE__*/_jsxs("span", {
              ...level,
              children: [log.level, iso && /*#__PURE__*/_jsxs(_Fragment, {
                children: [" \xB7 ", /*#__PURE__*/_jsxs("time", {
                  dateTime: iso,
                  children: [iso.slice(11, 19), " UTC"]
                })]
              })]
            }), /*#__PURE__*/_jsx("pre", {
              ...message,
              children: log.message
            })]
          }, log.id ?? index);
        })
      }), logs.length === 0 && /*#__PURE__*/_jsx("p", {
        ...message,
        children: "No console output supplied."
      }), logs.length > logLimit && /*#__PURE__*/_jsxs("p", {
        ...message,
        children: ["Showing the latest ", logLimit, " messages."]
      })]
    }), children]
  });
});
//# sourceMappingURL=web-preview.js.map
