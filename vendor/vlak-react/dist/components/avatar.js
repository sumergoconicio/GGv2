"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx } from "react/jsx-runtime";
const AvatarRowContext = /*#__PURE__*/React.createContext(false);
const styles = {
  avatar: {
    kzqmXN: "xs5h3dt",
    kZKoxP: "xettwda",
    kaIpWk: "x16rqkct",
    kWkggS: "xow1vt1",
    kMwMTN: "x1gney9c",
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kGuDYH: "xboafo0",
    k63SB2: "x1s688f",
    kb6lSQ: "xjat59b",
    kVQacm: "xb3r6kr",
    kmuXW: "x2lah0s",
    kfSwDN: "x87ps6o",
    $$css: true
  },
  sm: {
    kzqmXN: "xp8d6y2",
    kZKoxP: "xam5rvr",
    kGuDYH: "x2ohwh0",
    $$css: true
  },
  lg: {
    kzqmXN: "x188tqju",
    kZKoxP: "x1pizb70",
    kGuDYH: "x1jchvi3",
    $$css: true
  },
  image: {
    kzqmXN: "xh8yej3",
    kZKoxP: "x5yr21d",
    kVIFPx: "xl1xv1r",
    $$css: true
  },
  row: {
    k1xSpc: "x78zum5",
    $$css: true
  },
  inRow: {
    kMzoRj: "xdh2fpr",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xu8cz7h",
    keTefX: "x1utgmv1 x1pwwqoy",
    $$css: true
  }
};
export const Avatar = /*#__PURE__*/React.forwardRef(function Avatar({
  src,
  alt,
  name,
  initials,
  size = "md",
  className,
  style,
  ...props
}, ref) {
  const [failedSrc, setFailedSrc] = React.useState();
  const inRow = React.useContext(AvatarRowContext);
  const showImage = src && src !== failedSrc;
  const altText = alt ?? name ?? initials ?? "";
  const sx = rs(["rs-avatar", size === "sm" && "rs-avatar-sm", size === "lg" && "rs-avatar-lg", className, inRow && "rs-avatar-in-row"], styles.avatar, size === "sm" && styles.sm, size === "lg" && styles.lg, inRow && styles.inRow);
  const img = rs(["rs-avatar-image"], styles.image);
  /* Initials stand in for a name only when one is given; otherwise they read as plain text. */
  const named = !showImage && name ? {
    role: "img",
    "aria-label": name
  } : null;
  return /*#__PURE__*/_jsx("span", {
    ref: ref,
    ...named,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    },
    children: showImage ? /*#__PURE__*/_jsx("img", {
      className: img.className,
      style: img.style,
      src: src,
      alt: altText,
      onError: () => setFailedSrc(src)
    }) : initials
  });
});

/** Overlapping row with paper seams. */
export const AvatarRow = /*#__PURE__*/React.forwardRef(function AvatarRow({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-avatar-row", className], styles.row);
  return /*#__PURE__*/_jsx(AvatarRowContext.Provider, {
    value: true,
    children: /*#__PURE__*/_jsx("div", {
      ref: ref,
      ...props,
      className: sx.className,
      style: {
        ...sx.style,
        ...style
      }
    })
  });
});
//# sourceMappingURL=avatar.js.map
