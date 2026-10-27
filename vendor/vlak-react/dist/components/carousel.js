"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Icon } from "./icon.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const fade = "linear-gradient(to right, transparent 0, black 28px, black calc(100% - 36px), transparent 100%)";
const styles = {
  carousel: {
    kVAEAm: "x1n2onr6",
    kzqmXN: "xh8yej3",
    ks0D6T: "x193iq5w",
    $$css: true
  },
  track: {
    k1xSpc: "x78zum5",
    kOIVth: "x1rg3fk9",
    kXHlph: "xw2csxc",
    kc424l: "xhfbhpw",
    khEr5k: "xkcv6ua xbait9c",
    k5wCbM: "x1rohswg",
    kOuLrU: "xfk6m8",
    kX1K2I: "x1n16j6a",
    kLKAdn: "x1nn3v0j",
    kGO01o: "x1120s5i",
    kg3NbH: "xnjsko4",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x14tvtkk",
    kInvED: "x7s97pk",
    $$css: true
  },
  nav: {
    k1xSpc: "x78zum5",
    kOIVth: "xx7b8my x1wht0sx",
    keoZOQ: "x5y4uik x7qoook",
    $$css: true
  },
  page: {
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
    kMwMTN: "x1ixqp2s x9dgriy",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd xaxtmmi",
    kmVPX3: "x1717udv",
    kWkggS: "xjbqb8w",
    kMv6JI: "xjb2p0i",
    kkrTdU: "x1ypdohk",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x14tvtkk",
    kInvED: "x7s97pk",
    $$css: true
  },
  icon: {
    k1xSpc: "x1lliihq",
    kMwMTN: "x1heor9g",
    $$css: true
  },
  slide: {
    kmuXW: "x2lah0s",
    k5xd4v: "x1bhewko",
    kaIpWk: "xkrxur x16r9t5",
    $$css: true
  }
};
const SlideContext = /*#__PURE__*/React.createContext(null);

/** One slide: a named group, "n of N" unless you name it yourself. */
export const CarouselSlide = /*#__PURE__*/React.forwardRef(function CarouselSlide({
  className,
  style,
  "aria-label": ariaLabel,
  ...props
}, ref) {
  const slot = React.useContext(SlideContext);
  const sx = rs(["rs-carousel-slide", className], styles.slide);
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    role: "group",
    "aria-roledescription": "slide",
    "aria-label": ariaLabel ?? (slot ? `${slot.index + 1} of ${slot.count}` : undefined),
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});

/** Native scroll snap; the buttons nudge. The track is the named, focusable carousel region. */
export const Carousel = /*#__PURE__*/React.forwardRef(function Carousel({
  className,
  style,
  children,
  "aria-label": ariaLabel = "Carousel",
  ...props
}, ref) {
  const trackRef = React.useRef(null);
  const nudge = dir => {
    const track = trackRef.current;
    if (track) track.scrollBy({
      left: dir * track.clientWidth * 0.8
    });
  };
  const root = rs(["rs-carousel", className], styles.carousel);
  const track = rs(["rs-carousel-track"], styles.track);
  const nav = rs(["rs-carousel-nav"], styles.nav);
  const page = rs(["rs-page", "rs-carousel-page"], styles.page);
  const icon = rs(["rs-carousel-icon"], styles.icon);
  const slides = React.Children.toArray(children);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("div", {
      ref: trackRef,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": ariaLabel,
      className: track.className,
      style: track.style,
      tabIndex: 0,
      children: slides.map((child, index) => /*#__PURE__*/_jsx(SlideContext.Provider, {
        value: {
          index,
          count: slides.length
        },
        children: child
      }, /*#__PURE__*/React.isValidElement(child) && child.key != null ? child.key : index))
    }), /*#__PURE__*/_jsxs("div", {
      className: nav.className,
      style: nav.style,
      children: [/*#__PURE__*/_jsx("button", {
        type: "button",
        className: page.className,
        style: page.style,
        "aria-label": "Previous",
        onClick: () => nudge(-1),
        children: /*#__PURE__*/_jsx(Icon, {
          name: "chevron-left",
          size: 12,
          className: icon.className,
          style: icon.style
        })
      }), /*#__PURE__*/_jsx("button", {
        type: "button",
        className: page.className,
        style: page.style,
        "aria-label": "Next",
        onClick: () => nudge(1),
        children: /*#__PURE__*/_jsx(Icon, {
          name: "chevron-right",
          size: 12,
          className: icon.className,
          style: icon.style
        })
      })]
    })]
  });
});
//# sourceMappingURL=carousel.js.map
