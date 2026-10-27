import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Icon } from "./icon.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  pages: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kOIVth: "xx7b8my x1wht0sx",
    kwnvtZ: "xusrac5",
    $$css: true
  },
  page: {
    kmkexE: "x1487y47 xrozb4q",
    kB7OPa: "x9f619",
    kzqmXN: "x1uyfxw7 xla6mwc",
    kZKoxP: "x9ve8r1 x128uv7p",
    k7Eaqz: "x1cf4flf",
    kAzted: "xs41724",
    kaIpWk: "xkrxur x16r9t5",
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kGuDYH: "x1dcheo9 xzwmqnn",
    kMwMTN: "x1ixqp2s x9dgriy xybgkc0",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd x9w6206 xtq1xqk xaxtmmi xoxf62l",
    kmVPX3: "x1717udv",
    kWkggS: "xjbqb8w xlt1z8a x1oallzf x1awx03v",
    kMv6JI: "xjb2p0i",
    kkrTdU: "x1ypdohk x1s07b3s",
    kSiTet: "x1hc1fzr x1lfpgzf x1nyumiu x3dy84y",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x14tvtkk",
    kInvED: "x7s97pk",
    $$css: true
  },
  on: {
    kWkggS: "xmgn9m6 x1qbdut0 xqau7aa xf7h6k7",
    kMwMTN: "x19rmm7l x1pljmm8",
    k63SB2: "x1s688f",
    kVAM5u: "x9r1u3d x1ysm8yu xwlsq7a x19k3fcw",
    kAXs8y: "x1kzknox",
    $$css: true
  },
  gap: {
    kVAM5u: "x9r1u3d x1ysm8yu",
    kWkggS: "xjbqb8w xgshogo",
    kkrTdU: "xt0e3qv",
    $$css: true
  },
  icon: {
    k1xSpc: "x1lliihq",
    kMwMTN: "x1heor9g",
    $$css: true
  }
};
function pageItems(page, count, siblings) {
  const wanted = new Set([1, count]);
  for (let p = page - siblings; p <= page + siblings; p++) {
    if (p >= 1 && p <= count) wanted.add(p);
  }
  const sorted = [...wanted].sort((a, b) => a - b);
  const items = [];
  let prev = 0;
  for (const p of sorted) {
    if (prev && p - prev === 2) items.push(prev + 1);else if (prev && p - prev > 2) items.push("gap");
    items.push(p);
    prev = p;
  }
  return items;
}
export const Pagination = /*#__PURE__*/React.forwardRef(function Pagination({
  page,
  count,
  onPageChange,
  siblings = 1,
  className,
  style,
  ...props
}, ref) {
  const nav = rs(["rs-pages", className], styles.pages);
  const icon = rs(["rs-pages-icon"], styles.icon);
  return /*#__PURE__*/_jsxs("nav", {
    ref: ref,
    "aria-label": "Pagination",
    ...props,
    className: nav.className,
    style: {
      ...nav.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx(PageButton, {
      "aria-label": "Previous page",
      disabled: page <= 1,
      onClick: () => onPageChange?.(page - 1),
      children: /*#__PURE__*/_jsx(Icon, {
        name: "chevron-left",
        size: 12,
        className: icon.className,
        style: icon.style
      })
    }), pageItems(page, count, siblings).map((item, index) => {
      if (item === "gap") {
        const gap = rs(["rs-page", "rs-page-gap"], styles.page, styles.gap);
        return /*#__PURE__*/_jsx("span", {
          className: gap.className,
          style: gap.style,
          "aria-hidden": "true",
          children: "\u2026"
        }, `gap-${index}`);
      }
      return /*#__PURE__*/_jsx(PageButton, {
        current: item === page,
        "aria-current": item === page ? "page" : undefined,
        onClick: () => onPageChange?.(item),
        children: item
      }, item);
    }), /*#__PURE__*/_jsx(PageButton, {
      "aria-label": "Next page",
      disabled: page >= count,
      onClick: () => onPageChange?.(page + 1),
      children: /*#__PURE__*/_jsx(Icon, {
        name: "chevron-right",
        size: 12,
        className: icon.className,
        style: icon.style
      })
    })]
  });
});
function PageButton({
  current,
  className,
  style,
  ...props
}) {
  const sx = rs(["rs-page", current && "rs-page-on", className], styles.page, current && styles.on);
  return /*#__PURE__*/_jsx("button", {
    type: "button",
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
}
//# sourceMappingURL=pagination.js.map
