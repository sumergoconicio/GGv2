"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { popoverTargetAttrs } from "../compat.js";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
const GAP = 6;
const EDGE = 8;
const styles = {
  panel: {
    kB7OPa: "x9f619",
    kVAEAm: "xixxii4",
    kpwlN0: "x1anvkwx",
    kogj98: "x1ghz6dp",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kaIpWk: "x1po71e9 x1m34uwc",
    kWkggS: "xhpg8l3",
    kMwMTN: "x1gney9c",
    kGVxlE: "x1cuznne x1qik9ta",
    kmVPX3: "x8hbxov x1scdl73",
    kzqmXN: "x9ndnb8 x1ro9bc8",
    kGuDYH: "x1dcheo9 x1cncyzl",
    kLWn49: "xfrs9s4",
    kb6lSQ: "xjat59b",
    $$css: true
  },
  title: {
    k1xSpc: "x1lliihq",
    kGuDYH: "x1dcheo9 x1cncyzl",
    k63SB2: "x1s688f",
    kb6lSQ: "xjat59b",
    kMwMTN: "x1gney9c",
    k1K539: "x1hpqcdg",
    $$css: true
  },
  body: {
    kMwMTN: "x1ixqp2s",
    kogj98: "x1ghz6dp",
    $$css: true
  }
};

/** CSS Anchor Positioning: the platform places, flips, and follows scroll. */
function supportsAnchor() {
  return typeof CSS !== "undefined" && typeof CSS.supports === "function" && CSS.supports("anchor-name", "none");
}

/**
 * The native Popover API. The panel lives in the top layer; light
 * dismiss comes from the platform. Anchor positioning places it where
 * supported; otherwise it is measured, follows scroll and resize, and
 * flips above the trigger when there is no room below.
 */
export function Popover({
  trigger,
  align = "start",
  className,
  style,
  children,
  onToggle,
  ...props
}) {
  const id = React.useId();
  const anchorName = `--rs-anchor-${id.replace(/[^\w-]/g, "")}`;
  const triggerRef = React.useRef(null);
  const panelRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const [anchored, setAnchored] = React.useState(false);
  const [coords, setCoords] = React.useState(null);
  React.useEffect(() => {
    setAnchored(supportsAnchor());
  }, []);
  const position = React.useCallback(() => {
    const anchor = triggerRef.current;
    const panel = panelRef.current;
    if (!anchor || !panel) return;
    const rect = anchor.getBoundingClientRect();
    const height = panel.offsetHeight;
    const width = panel.offsetWidth;
    const below = rect.bottom + GAP;
    const above = rect.top - GAP - height;
    const fitsBelow = below + height <= window.innerHeight - EDGE;
    setCoords({
      top: fitsBelow || above < EDGE ? below : above,
      left: align === "end" ? Math.max(EDGE, rect.right - width) : Math.min(rect.left, window.innerWidth - width - EDGE)
    });
  }, [align]);
  React.useEffect(() => {
    if (!open || anchored) return;
    position();
    window.addEventListener("scroll", position, true);
    window.addEventListener("resize", position);
    return () => {
      window.removeEventListener("scroll", position, true);
      window.removeEventListener("resize", position);
    };
  }, [open, anchored, position]);
  const placement = anchored ? {
    positionAnchor: anchorName,
    positionArea: align === "end" ? "bottom span-left" : "bottom span-right",
    positionTryFallbacks: "flip-block",
    margin: `${GAP}px 0`
  } : coords ? {
    top: coords.top,
    left: coords.left
  } : {};
  const sx = rs(["rs-popover", className], styles.panel);
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Button, {
      ref: triggerRef,
      type: "button",
      variant: "ghost",
      size: "sm",
      ...popoverTargetAttrs(id),
      style: anchored ? {
        anchorName
      } : undefined,
      children: trigger
    }), /*#__PURE__*/_jsx("div", {
      ref: panelRef,
      id: id,
      popover: "auto",
      ...props,
      className: sx.className,
      style: {
        ...sx.style,
        ...style,
        ...placement
      },
      onToggle: e => {
        onToggle?.(e);
        setOpen(e.nativeEvent.newState === "open");
      },
      children: children
    })]
  });
}
export const PopoverTitle = /*#__PURE__*/React.forwardRef(function PopoverTitle({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-popover-title", className], styles.title);
  return /*#__PURE__*/_jsx("span", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
export const PopoverBody = /*#__PURE__*/React.forwardRef(function PopoverBody({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-popover-body", className], styles.body);
  return /*#__PURE__*/_jsx("p", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
//# sourceMappingURL=popover.js.map
