"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { Icon } from "./icon.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  action: {
    kzqmXN: "x14atkfc",
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kg3NbH: "x1ryrjj2",
    $$css: true
  },
  value: {
    k7Eaqz: "xqhi6e2",
    k9WMMc: "x2b8uid",
    kGuDYH: "x1dcheo9",
    kcqcaj: "xss6m8b",
    $$css: true
  }
};

/** Zoom, fit, and reset actions for a canvas. The canvas owns pan and rendering. */
export const CanvasControls = /*#__PURE__*/React.forwardRef(function CanvasControls({
  zoom,
  defaultZoom = 1,
  onZoomChange,
  minZoom = 0.25,
  maxZoom = 4,
  step = 0.25,
  onFit,
  onReset,
  disabled = false,
  label = "Canvas controls",
  className,
  style,
  ...props
}, ref) {
  const lower = Number.isFinite(minZoom) && minZoom > 0 ? minZoom : 0.25;
  const upper = Number.isFinite(maxZoom) ? Math.max(lower, maxZoom) : 4;
  const increment = Number.isFinite(step) && step > 0 ? step : 0.25;
  const bounded = n => Math.max(lower, Math.min(upper, Number.isFinite(n) ? n : 1));
  const [inner, setInner] = React.useState(defaultZoom);
  const current = bounded(zoom ?? inner);
  const change = next => {
    const result = Number(bounded(next).toFixed(4));
    if (zoom === undefined) setInner(result);
    onZoomChange?.(result);
  };
  const root = rs(["rs-canvas-controls", className], styles.root);
  const action = rs(["rs-canvas-action"], styles.action);
  const reading = rs(["rs-canvas-zoom"], styles.value);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    role: "group",
    "aria-label": label,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx(Button, {
      ...action,
      variant: "ghost",
      "aria-label": "Zoom out",
      disabled: disabled || current <= lower,
      onClick: () => change(current - increment),
      children: /*#__PURE__*/_jsx(Icon, {
        name: "minus"
      })
    }), /*#__PURE__*/_jsxs("output", {
      ...reading,
      "aria-label": "Zoom level",
      children: [Math.round(current * 100), "%"]
    }), /*#__PURE__*/_jsx(Button, {
      ...action,
      variant: "ghost",
      "aria-label": "Zoom in",
      disabled: disabled || current >= upper,
      onClick: () => change(current + increment),
      children: /*#__PURE__*/_jsx(Icon, {
        name: "plus"
      })
    }), onFit && /*#__PURE__*/_jsxs(Button, {
      ...action,
      variant: "ghost",
      disabled: disabled,
      onClick: onFit,
      children: [/*#__PURE__*/_jsx(Icon, {
        name: "expand"
      }), "Fit"]
    }), /*#__PURE__*/_jsxs(Button, {
      ...action,
      variant: "ghost",
      disabled: disabled,
      onClick: () => {
        change(1);
        onReset?.();
      },
      children: [/*#__PURE__*/_jsx(Icon, {
        name: "refresh"
      }), "Reset"]
    })]
  });
});
//# sourceMappingURL=canvas-controls.js.map
