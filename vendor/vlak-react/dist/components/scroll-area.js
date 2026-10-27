import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx } from "react/jsx-runtime";
const styles = {
  scroll: {
    kORKVm: "x1odjw0f",
    k5wCbM: "x1rohswg",
    kX1K2I: "xtvtjhs",
    k8WAf4: "xo0yzjp",
    kg3NbH: "xnjsko4",
    kMwMTN: "x1gney9c",
    kOuLrU: "xfk6m8",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x14tvtkk",
    kInvED: "x7s97pk",
    $$css: true
  }
};

/** Hidden scrollbar; feathered top and bottom edges. A named, focusable region. */
export const ScrollArea = /*#__PURE__*/React.forwardRef(function ScrollArea({
  maxHeight = 240,
  style,
  className,
  "aria-label": ariaLabel = "Scrollable content",
  ...props
}, ref) {
  const sx = rs(["rs-scroll", className], styles.scroll);
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    role: "region",
    "aria-label": props["aria-labelledby"] ? undefined : ariaLabel,
    className: sx.className,
    style: {
      maxHeight,
      ...sx.style,
      ...style
    },
    tabIndex: 0,
    ...props
  });
});
//# sourceMappingURL=scroll-area.js.map
