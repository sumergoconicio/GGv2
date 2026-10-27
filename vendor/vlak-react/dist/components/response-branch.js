"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  content: {
    k7Eaqz: "xeuugli",
    $$css: true
  },
  controls: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kOIVth: "xvh977a",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  action: {
    kzqmXN: "x187nhsf",
    k7Eaqz: "x1nb6za0",
    ks0D6T: "x1k2d6hx",
    kZKoxP: "xn3w4p2",
    kmVPX3: "x1717udv",
    kmuXW: "x2lah0s",
    $$css: true
  },
  icon: {
    kzqmXN: "x1kky2od",
    kZKoxP: "xlup9mm",
    k1xSpc: "x1lliihq",
    $$css: true
  },
  position: {
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x1dcheo9",
    kcqcaj: "xss6m8b",
    k7Eaqz: "x13n9wmd",
    k9WMMc: "x2b8uid",
    $$css: true
  },
  empty: {
    kMwMTN: "x1ixqp2s",
    kGuDYH: "xkpwil5",
    kogj98: "x1ghz6dp",
    $$css: true
  }
};

/** Navigates application-owned response alternatives without changing conversation history. */
export const ResponseBranch = /*#__PURE__*/React.forwardRef(function ResponseBranch({
  branches,
  value,
  defaultValue,
  onValueChange,
  label = "Response alternatives",
  className,
  style,
  ...props
}, ref) {
  const [internalValue, setInternalValue] = React.useState(() => defaultValue ?? branches[0]?.id);
  const selectedId = value === undefined ? internalValue : value;
  const index = Math.max(0, branches.findIndex(branch => branch.id === selectedId));
  const current = branches[index];
  const contentId = React.useId();
  const choose = nextIndex => {
    const next = branches[nextIndex];
    if (!next || next.id === current?.id) return;
    if (value === undefined) setInternalValue(next.id);
    onValueChange?.(next.id);
  };
  const root = rs(["rs-response-branch", className], styles.root);
  const content = rs(["rs-response-branch-content"], styles.content);
  const controls = rs(["rs-response-branch-controls"], styles.controls);
  const action = rs(["rs-response-branch-action"], styles.action);
  const icon = rs(["rs-response-branch-icon"], styles.icon);
  const position = rs(["rs-response-branch-position"], styles.position);
  const empty = rs(["rs-response-branch-empty"], styles.empty);
  return /*#__PURE__*/_jsxs("div", {
    ...props,
    ref: ref,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("div", {
      ...content,
      id: contentId,
      children: current ? /*#__PURE__*/_jsx(React.Fragment, {
        children: current.content
      }, current.id) : /*#__PURE__*/_jsx("p", {
        ...empty,
        children: "No responses yet."
      })
    }), branches.length > 1 && /*#__PURE__*/_jsxs("div", {
      ...controls,
      role: "group",
      "aria-label": label,
      children: [/*#__PURE__*/_jsx(Button, {
        ...action,
        variant: "subtle",
        disabled: index === 0,
        "aria-label": "Previous response",
        "aria-controls": contentId,
        title: "Previous response",
        onClick: () => choose(index - 1),
        children: /*#__PURE__*/_jsx("svg", {
          ...icon,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5",
          "aria-hidden": "true",
          children: /*#__PURE__*/_jsx("path", {
            d: "m14 6-6 6 6 6"
          })
        })
      }), /*#__PURE__*/_jsxs("span", {
        ...position,
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        "aria-label": current?.label ? `${current.label}, ${index + 1} of ${branches.length}` : undefined,
        children: [index + 1, " / ", branches.length]
      }), /*#__PURE__*/_jsx(Button, {
        ...action,
        variant: "subtle",
        disabled: index === branches.length - 1,
        "aria-label": "Next response",
        "aria-controls": contentId,
        title: "Next response",
        onClick: () => choose(index + 1),
        children: /*#__PURE__*/_jsx("svg", {
          ...icon,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5",
          "aria-hidden": "true",
          children: /*#__PURE__*/_jsx("path", {
            d: "m10 6 6 6-6 6"
          })
        })
      })]
    })]
  });
});
//# sourceMappingURL=response-branch.js.map
