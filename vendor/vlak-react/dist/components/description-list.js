import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    kogj98: "x1ghz6dp",
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  row: {
    k1xSpc: "xrvj5dj",
    kumcoG: "x1fchezg x1nk3w99",
    kOIVth: "x13z6uf9",
    k8WAf4: "xgepmj6",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  label: {
    kogj98: "x1ghz6dp",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  value: {
    kogj98: "x1ghz6dp",
    k7Eaqz: "xeuugli",
    kHjlTd: "xj0a0fe",
    kLWn49: "xfrs9s4",
    kcqcaj: "xss6m8b",
    $$css: true
  }
};

/** Aligned, semantic labels and values without an extra card. */
export const DescriptionList = /*#__PURE__*/React.forwardRef(function DescriptionList({
  items,
  className,
  style,
  ...props
}, ref) {
  const root = rs(["rs-description-list", className], styles.root);
  const row = rs(["rs-description-list-row"], styles.row);
  const label = rs(["rs-description-list-label"], styles.label);
  const value = rs(["rs-description-list-value"], styles.value);
  return /*#__PURE__*/_jsx("dl", {
    ref: ref,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: items.map(item => /*#__PURE__*/_jsxs("div", {
      ...row,
      children: [/*#__PURE__*/_jsx("dt", {
        ...label,
        children: item.label
      }), /*#__PURE__*/_jsx("dd", {
        ...value,
        children: item.value
      })]
    }, item.id))
  });
});
//# sourceMappingURL=description-list.js.map
