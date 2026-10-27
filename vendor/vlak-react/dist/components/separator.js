import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx } from "react/jsx-runtime";
const styles = {
  horizontal: {
    kMzoRj: "xc342km",
    ksu8eU: "xng3xce",
    kEafiO: "x1ro6g4h",
    kPef9Z: "x13fuv20",
    kLZC3w: "x1fq36pv",
    kqGvvJ: "x1svg07m",
    kUOVxO: "xrxpjvj",
    $$css: true
  },
  vertical: {
    k1xSpc: "x1rg5ohu",
    kzqmXN: "x1ava5zj",
    kSGwAc: "xkh2ocl",
    kWkggS: "xb223ua",
    kqGvvJ: "x10im51j",
    kUOVxO: "x1acpp9h",
    $$css: true
  }
};
export const Separator = /*#__PURE__*/React.forwardRef(function Separator({
  orientation = "horizontal",
  className,
  style,
  ...props
}, ref) {
  if (orientation === "vertical") {
    const sx = rs(["rs-sep-v", className], styles.vertical);
    return (/*#__PURE__*/
      // biome-ignore lint/a11y/useFocusableInteractive: a static separator is not a widget; it takes no focus
      _jsx("span", {
        ref: ref
        // biome-ignore lint/a11y/useAriaPropsForRole: a non-focusable separator needs no aria-valuenow
        ,

        role: "separator",
        "aria-orientation": "vertical",
        ...props,
        className: sx.className,
        style: {
          ...sx.style,
          ...style
        }
      })
    );
  }
  const sx = rs(["rs-sep", className], styles.horizontal);
  return /*#__PURE__*/_jsx("hr", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
//# sourceMappingURL=separator.js.map
