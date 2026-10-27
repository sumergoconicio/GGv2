"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useOverlayPosition } from "../use-overlay-position.js";
import { Button } from "./button.js";
import { Icon } from "./icon.js";
import { sourceHref } from "./sources.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xt0psk2",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  trigger: {
    k1xSpc: "x3nfvp2",
    kXLuUW: "xxymvpz",
    kg3NbH: "x97vtpp",
    kcqcaj: "xss6m8b",
    kGuDYH: "x4ro2ui",
    $$css: true
  },
  panel: {
    kVAEAm: "xixxii4",
    kY2c9j: "xhupvvu",
    kpwlN0: "x1anvkwx",
    kogj98: "x1ghz6dp",
    kzqmXN: "x1nqqiwj",
    ks0D6T: "x1usz39j",
    kB7OPa: "x9f619",
    kmVPX3: "x79iv2k",
    k1xSpc: "xrvj5dj",
    kJBjZk: "x3xbxsf",
    kOIVth: "x8233eu",
    kWkggS: "xhpg8l3",
    kMwMTN: "x1gney9c",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j xz1l38o",
    kaIpWk: "xkrxur",
    kMv6JI: "xjb2p0i",
    kGuDYH: "x1jq7itm",
    kLWn49: "xfrs9s4",
    kPJHz1: "x784prv",
    k7shQP: "x9v5kkp",
    kZs9gx: "x14tvtkk",
    kiEn40: "x7s97pk",
    $$css: true
  },
  header: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kjj79g: "x1qughib",
    kOIVth: "x13z6uf9",
    $$css: true
  },
  navigation: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kOIVth: "xxhr3t",
    $$css: true
  },
  count: {
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x4ro2ui",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  title: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x1jq7itm",
    k63SB2: "x1s688f",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  link: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kAzted: "x1wszdd",
    k7Eaqz: "xtp0tkc",
    kMwMTN: "x1ixqp2s xcfh57o",
    kHjlTd: "xj0a0fe",
    kGuDYH: "x4ro2ui",
    kcSHmL: "xda060z",
    kPJHz1: "x784prv",
    k7shQP: "x9v5kkp",
    kZs9gx: "x14tvtkk",
    kiEn40: "x7s97pk",
    $$css: true
  },
  description: {
    kogj98: "x1ghz6dp",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x1jq7itm",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  quote: {
    kogj98: "x1ghz6dp",
    kmVPX3: "x79iv2k",
    kWkggS: "x1nzd1wa",
    kaIpWk: "xkrxur",
    kMwMTN: "x1gney9c",
    kGuDYH: "x1jq7itm",
    kLWn49: "xfrs9s4",
    $$css: true
  }
};

/** A keyboard-reachable source preview with count, quotes and navigation through multiple citations. */
export const InlineCitation = /*#__PURE__*/React.forwardRef(function InlineCitation({
  sources,
  label,
  open,
  defaultOpen = false,
  onOpenChange,
  index,
  defaultIndex = 0,
  onIndexChange,
  className,
  style,
  children,
  ...props
}, ref) {
  const [innerOpen, setInnerOpen] = React.useState(defaultOpen);
  const [innerIndex, setInnerIndex] = React.useState(defaultIndex);
  const [mounted, setMounted] = React.useState(false);
  const expanded = (open ?? innerOpen) && sources.length > 0;
  const active = Math.max(0, Math.min(sources.length - 1, Number.isFinite(index ?? innerIndex) ? index ?? innerIndex : 0));
  const source = sources[active];
  const triggerRef = React.useRef(null);
  const panelRef = React.useRef(null);
  const id = React.useId();
  const callbacks = React.useRef({
    onOpenChange,
    onIndexChange
  });
  callbacks.current = {
    onOpenChange,
    onIndexChange
  };
  const changeOpen = React.useCallback((next, restore = false) => {
    if (open === undefined) setInnerOpen(next);
    callbacks.current.onOpenChange?.(next);
    if (restore) triggerRef.current?.focus();
  }, [open]);
  const changeIndex = next => {
    const bounded = Math.max(0, Math.min(sources.length - 1, next));
    if (bounded === active) return;
    if (index === undefined) setInnerIndex(bounded);
    callbacks.current.onIndexChange?.(bounded);
  };
  React.useEffect(() => setMounted(true), []);
  const position = useOverlayPosition(mounted && expanded, panelRef, triggerRef, undefined, "bottom", {
    matchAnchorWidth: false
  });
  React.useEffect(() => {
    // The positioning layout effect first measures a hidden panel. Browsers cannot focus it
    // until that effect's visible placement has been committed to the DOM.
    if (mounted && expanded && position.visibility === "visible") panelRef.current?.focus({
      preventScroll: true
    });
  }, [expanded, mounted, position.visibility]);
  React.useEffect(() => {
    if (!mounted || !expanded) return;
    const outside = event => {
      const target = event.target;
      if (!panelRef.current?.contains(target) && !triggerRef.current?.contains(target)) changeOpen(false);
    };
    const escapeKey = event => {
      if (event.key === "Escape") {
        event.preventDefault();
        changeOpen(false, true);
      }
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escapeKey);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escapeKey);
    };
  }, [expanded, mounted, changeOpen]);
  const root = rs(["rs-inline-citation", className], styles.root);
  const trigger = rs(["rs-inline-citation-trigger"], styles.trigger);
  const panel = rs(["rs-inline-citation-panel"], styles.panel);
  const header = rs(["rs-inline-citation-header"], styles.header);
  const navigation = rs(["rs-inline-citation-navigation"], styles.navigation);
  const count = rs(["rs-inline-citation-count"], styles.count);
  const title = rs(["rs-inline-citation-title"], styles.title);
  const link = rs(["rs-inline-citation-link"], styles.link);
  const description = rs(["rs-inline-citation-description"], styles.description);
  const quote = rs(["rs-inline-citation-quote"], styles.quote);
  return /*#__PURE__*/_jsxs("span", {
    ref: ref,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [children, /*#__PURE__*/_jsx(Button, {
      ...trigger,
      ref: triggerRef,
      variant: "subtle",
      size: "sm",
      "aria-label": label ?? `View ${sources.length} ${sources.length === 1 ? "source" : "sources"}`,
      "aria-haspopup": "dialog",
      "aria-expanded": expanded,
      "aria-controls": expanded ? id : undefined,
      disabled: !sources.length,
      onClick: () => changeOpen(!expanded),
      children: label ?? `[${sources.length}]`
    }), mounted && expanded && source && /*#__PURE__*/createPortal(/*#__PURE__*/_jsxs("div", {
      ...panel,
      ref: panelRef,
      id: id,
      role: "dialog",
      "aria-label": "Citation sources",
      tabIndex: -1,
      style: {
        ...panel.style,
        ...position
      },
      onKeyDown: event => {
        if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
          event.preventDefault();
          const rtl = getComputedStyle(event.currentTarget).direction === "rtl";
          changeIndex(event.key === "Home" ? 0 : event.key === "End" ? sources.length - 1 : active + (event.key === "ArrowRight" !== rtl ? 1 : -1));
        }
        if (event.key === "Tab") {
          const focusable = Array.from(event.currentTarget.querySelectorAll('button:not([disabled]), a[href], [tabindex="0"]'));
          const first = focusable[0];
          const last = focusable.at(-1);
          if (event.shiftKey && (document.activeElement === first || document.activeElement === event.currentTarget)) {
            event.preventDefault();
            changeOpen(false, true);
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            const candidates = Array.from(document.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex="0"]')).filter(element => !panelRef.current?.contains(element));
            const next = candidates[candidates.indexOf(triggerRef.current) + 1];
            changeOpen(false);
            (next ?? triggerRef.current)?.focus();
          }
        }
      },
      children: [/*#__PURE__*/_jsxs("div", {
        ...header,
        children: [/*#__PURE__*/_jsxs("span", {
          ...count,
          role: "status",
          children: ["Source ", active + 1, " of ", sources.length]
        }), /*#__PURE__*/_jsxs("div", {
          ...navigation,
          children: [/*#__PURE__*/_jsx(Button, {
            variant: "subtle",
            size: "icon",
            "aria-label": "Previous source",
            "aria-disabled": active <= 0,
            onClick: () => changeIndex(active - 1),
            children: /*#__PURE__*/_jsx(Icon, {
              name: "chevron-left"
            })
          }), /*#__PURE__*/_jsx(Button, {
            variant: "subtle",
            size: "icon",
            "aria-label": "Next source",
            "aria-disabled": active >= sources.length - 1,
            onClick: () => changeIndex(active + 1),
            children: /*#__PURE__*/_jsx(Icon, {
              name: "chevron-right"
            })
          }), /*#__PURE__*/_jsx(Button, {
            variant: "subtle",
            size: "icon",
            "aria-label": "Close sources",
            onClick: () => changeOpen(false, true),
            children: /*#__PURE__*/_jsx(Icon, {
              name: "close"
            })
          })]
        })]
      }), /*#__PURE__*/_jsx("h3", {
        ...title,
        children: source.title
      }), sourceHref(source.url) && /*#__PURE__*/_jsxs("a", {
        ...link,
        href: sourceHref(source.url),
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `${source.title} (new tab)`,
        children: [source.url, /*#__PURE__*/_jsx("span", {
          "aria-hidden": "true",
          children: " \u2197"
        })]
      }), source.description && /*#__PURE__*/_jsx("p", {
        ...description,
        children: source.description
      }), source.quote && /*#__PURE__*/_jsx("blockquote", {
        ...quote,
        children: source.quote
      })]
    }), document.body)]
  });
});
//# sourceMappingURL=inline-citation.js.map
