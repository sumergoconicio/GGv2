"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { formatMediaTime } from "./media-scrubber.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  viewport: {
    kORKVm: "x1odjw0f",
    k7Eaqz: "xeuugli",
    kZeWKH: "xish69e",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j xz1l38o",
    kaIpWk: "xkrxur",
    kPJHz1: "x784prv",
    k7shQP: "x9v5kkp",
    kZs9gx: "x14tvtkk",
    kiEn40: "x7s97pk",
    $$css: true
  },
  list: {
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    kH6xsr: "x3ct3a4",
    $$css: true
  },
  segment: {
    k1xSpc: "xrvj5dj",
    kumcoG: "xowgmcl",
    kGNEyG: "x7a106z",
    kOIVth: "x8233eu",
    kzqmXN: "xh8yej3",
    kAzted: "x1wszdd",
    kB7OPa: "x9f619",
    kmVPX3: "x79iv2k",
    kMzoRj: "xc342km",
    kaIpWk: "x2u8bby",
    kWkggS: "xjbqb8w",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x1jq7itm",
    kLWn49: "xfrs9s4",
    kMv6JI: "xjb2p0i",
    k9WMMc: "x1yc453h",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  interactive: {
    kkrTdU: "x1ypdohk",
    kMwMTN: "x1ixqp2s xcfh57o",
    kPJHz1: "x784prv",
    k7shQP: "x9v5kkp",
    kZs9gx: "x14tvtkk",
    kiEn40: "x1bqaal",
    $$css: true
  },
  active: {
    kWkggS: "x6583kg xf7h6k7",
    kMwMTN: "x1gney9c x1pljmm8",
    k63SB2: "xk50ysn",
    $$css: true
  },
  time: {
    kGuDYH: "x4ro2ui",
    kcqcaj: "xss6m8b",
    kLKAdn: "xrhwvvd",
    $$css: true
  },
  speaker: {
    k1xSpc: "x1lliihq",
    kGuDYH: "x4ro2ui",
    k1K539: "x1hpqcdg",
    $$css: true
  },
  empty: {
    kogj98: "x1ghz6dp",
    kmVPX3: "x79iv2k",
    kGuDYH: "x1jq7itm",
    kMwMTN: "x1ixqp2s",
    $$css: true
  }
};

/** Supplied timed text. Playback remains application-owned; only activation requests a seek. */
export const Transcription = /*#__PURE__*/React.forwardRef(function Transcription({
  segments,
  currentTime = 0,
  onSeek,
  label = "Transcript",
  autoScroll = false,
  maxHeight = "24rem",
  className,
  style,
  ...props
}, ref) {
  const viewport = React.useRef(null);
  const activeRef = React.useRef(null);
  const [following, setFollowing] = React.useState(autoScroll);
  const rendered = segments.filter(segment => segment.text.trim() && Number.isFinite(segment.startSecond) && Number.isFinite(segment.endSecond) && segment.startSecond >= 0 && segment.endSecond >= segment.startSecond);
  const active = rendered.find(segment => currentTime >= segment.startSecond && currentTime < segment.endSecond)?.id;
  const reveal = React.useCallback(() => {
    const parent = viewport.current;
    const item = activeRef.current;
    if (!parent || !item) return;
    const parentBox = parent.getBoundingClientRect();
    const itemBox = item.getBoundingClientRect();
    if (itemBox.top < parentBox.top) parent.scrollTop += itemBox.top - parentBox.top;else if (itemBox.bottom > parentBox.bottom) parent.scrollTop += itemBox.bottom - parentBox.bottom;
  }, []);
  React.useEffect(() => setFollowing(autoScroll), [autoScroll]);
  React.useEffect(() => {
    if (autoScroll && following && active) reveal();
  }, [active, autoScroll, following, reveal]);
  const root = rs(["rs-transcription", className], styles.root);
  const frame = rs(["rs-transcription-viewport"], styles.viewport);
  const list = rs(["rs-transcription-list"], styles.list);
  const time = rs(["rs-transcription-time"], styles.time);
  const speaker = rs(["rs-transcription-speaker"], styles.speaker);
  const empty = rs(["rs-transcription-empty"], styles.empty);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("div", {
      ...frame,
      ref: viewport,
      role: "group",
      "aria-label": label,
      tabIndex: 0,
      style: {
        ...frame.style,
        maxHeight
      },
      onWheel: () => setFollowing(false),
      onTouchMove: () => setFollowing(false),
      onPointerDown: () => setFollowing(false),
      onKeyDown: event => {
        if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(event.key)) setFollowing(false);
      },
      children: rendered.length ? /*#__PURE__*/_jsx("ol", {
        ...list,
        children: rendered.map(segment => {
          const selected = segment.id === active;
          const item = rs(["rs-transcription-segment", Boolean(onSeek) && "rs-transcription-interactive", selected && "rs-transcription-active"], styles.segment, Boolean(onSeek) && styles.interactive, selected && styles.active);
          const content = /*#__PURE__*/_jsxs(_Fragment, {
            children: [/*#__PURE__*/_jsx("span", {
              ...time,
              children: formatMediaTime(segment.startSecond)
            }), /*#__PURE__*/_jsxs("span", {
              children: [segment.speaker && /*#__PURE__*/_jsx("span", {
                ...speaker,
                children: segment.speaker
              }), segment.text]
            })]
          });
          return /*#__PURE__*/_jsx("li", {
            ref: selected ? activeRef : undefined,
            children: onSeek ? /*#__PURE__*/_jsx("button", {
              ...item,
              type: "button",
              "aria-current": selected ? "true" : undefined,
              "aria-label": `Seek to ${formatMediaTime(segment.startSecond)}${segment.speaker ? `, ${segment.speaker}` : ""}: ${segment.text}`,
              onClick: () => onSeek(segment.startSecond),
              children: content
            }) : /*#__PURE__*/_jsx("div", {
              ...item,
              "aria-current": selected ? "true" : undefined,
              children: content
            })
          }, segment.id);
        })
      }) : /*#__PURE__*/_jsx("p", {
        ...empty,
        children: "No transcript available."
      })
    }), autoScroll && !following && /*#__PURE__*/_jsx(Button, {
      variant: "subtle",
      size: "sm",
      onClick: () => {
        setFollowing(true);
        reveal();
      },
      children: "Follow transcript"
    })]
  });
});
//# sourceMappingURL=transcription.js.map
