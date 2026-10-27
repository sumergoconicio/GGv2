"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { Slider } from "./slider.js";
import { NativeSelect } from "./native-select.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/** Elapsed media time, including hours when needed. Invalid duration is displayed as zero. */
export function formatMediaTime(seconds) {
  const total = Number.isFinite(seconds) ? Math.max(0, Math.floor(seconds)) : 0;
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor(total / 60) % 60;
  const rest = String(total % 60).padStart(2, "0");
  return hours ? `${hours}:${String(minutes).padStart(2, "0")}:${rest}` : `${minutes}:${rest}`;
}
const styles = {
  root: {
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    k7Eaqz: "xeuugli",
    kzqmXN: "xh8yej3",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  times: {
    k1xSpc: "x78zum5",
    kjj79g: "x1qughib",
    kOIVth: "x8fetqu",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "xboafo0",
    kcqcaj: "xss6m8b",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  track: {
    kVAEAm: "x1n2onr6",
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    $$css: true
  },
  rail: {
    kVAEAm: "x10l6tqk",
    k87sOh: "xhtqkq",
    kLqNvP: "x1o0tod",
    kZKoxP: "x36qwtl",
    kzqmXN: "xh8yej3",
    kWkggS: "xb223ua",
    kfzvcC: "x47corl",
    $$css: true
  },
  buffered: {
    kVAEAm: "x10l6tqk",
    k87sOh: "xhtqkq",
    kLqNvP: "x1o0tod",
    kZKoxP: "x36qwtl",
    kWkggS: "xxnl87f",
    kfzvcC: "x47corl",
    $$css: true
  },
  slider: {
    kWkggS: "xjbqb8w",
    $$css: true
  },
  preview: {
    kVAEAm: "x10l6tqk",
    krVfgx: "x10w3d4m",
    kLqNvP: "x1o0tod",
    ks0D6T: "x1ok5v8c",
    kmVPX3: "x7gbtqy",
    kWkggS: "xhpg8l3",
    kMwMTN: "x1gney9c",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kaIpWk: "xkrxur",
    kfzvcC: "x47corl",
    kY2c9j: "x1vjfegm",
    $$css: true
  },
  chapters: {
    keoZOQ: "xhj8ucd",
    $$css: true
  }
};

/** A native range in seconds with elapsed and total time. The input remains a 44px target. */
export const MediaScrubber = /*#__PURE__*/React.forwardRef(function MediaScrubber({
  value,
  defaultValue = 0,
  duration,
  label = "Playback position",
  showTime = true,
  step = 1,
  onValueChange,
  buffered = 0,
  chapters = [],
  preview,
  className,
  style,
  disabled,
  onFocus,
  onBlur,
  onPointerMove,
  onPointerLeave,
  ...props
}, ref) {
  const [inner, setInner] = React.useState(defaultValue);
  const end = Number.isFinite(duration) ? Math.max(0, duration) : 0;
  const raw = value ?? inner;
  const current = Math.min(end, Math.max(0, Number.isFinite(raw) ? raw : 0));
  const [previewTime, setPreviewTime] = React.useState(null);
  const change = next => {
    const bounded = Math.min(end, Math.max(0, next));
    if (value === undefined) setInner(bounded);
    onValueChange?.(bounded);
    if (previewTime !== null) setPreviewTime(bounded);
  };
  const validChapters = chapters.filter(chapter => Number.isFinite(chapter.time) && chapter.time >= 0 && chapter.time <= end).slice().sort((a, b) => a.time - b.time);
  let chapterIndex = -1;
  validChapters.forEach((chapter, index) => {
    if (chapter.time <= current) chapterIndex = index;
  });
  const root = rs(["rs-media-scrubber", className], styles.root);
  const times = rs(["rs-media-scrubber-times"], styles.times);
  const track = rs(["rs-media-scrubber-track"], styles.track);
  const rail = rs(["rs-media-scrubber-rail"], styles.rail);
  const buffer = rs(["rs-media-scrubber-buffered"], styles.buffered);
  const slider = rs(["rs-media-scrubber-slider"], styles.slider);
  const previewStyle = rs(["rs-media-scrubber-preview"], styles.preview);
  const chapterStyle = rs(["rs-media-scrubber-chapters"], styles.chapters);
  return /*#__PURE__*/_jsxs("div", {
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsxs("div", {
      ...track,
      children: [/*#__PURE__*/_jsx("span", {
        ...rail,
        "aria-hidden": "true"
      }), /*#__PURE__*/_jsx("span", {
        ...buffer,
        "aria-hidden": "true",
        style: {
          ...buffer.style,
          width: `${end ? Math.max(0, Math.min(100, (Number.isFinite(buffered) ? buffered : 0) / end * 100)) : 0}%`
        }
      }), /*#__PURE__*/_jsx(Slider, {
        ref: ref,
        ...props,
        ...slider,
        min: 0,
        max: end || 1,
        step: step,
        value: current,
        disabled: disabled || end === 0,
        "aria-label": props["aria-label"] ?? label,
        "aria-valuetext": `${formatMediaTime(current)} of ${formatMediaTime(end)}`,
        onValueChange: change,
        onFocus: event => {
          onFocus?.(event);
          setPreviewTime(current);
        },
        onBlur: event => {
          onBlur?.(event);
          setPreviewTime(null);
        },
        onPointerMove: event => {
          onPointerMove?.(event);
          const box = event.currentTarget.getBoundingClientRect();
          if (preview && box.width > 0) setPreviewTime(Math.min(end, Math.max(0, (event.clientX - box.left) / box.width * end)));
        },
        onPointerLeave: event => {
          onPointerLeave?.(event);
          setPreviewTime(null);
        }
      }), preview && previewTime !== null && /*#__PURE__*/_jsx("div", {
        ...previewStyle,
        "aria-hidden": "true",
        children: preview(previewTime)
      })]
    }), showTime && /*#__PURE__*/_jsxs("div", {
      ...times,
      "aria-hidden": "true",
      children: [/*#__PURE__*/_jsx("span", {
        children: formatMediaTime(current)
      }), /*#__PURE__*/_jsx("span", {
        children: formatMediaTime(end)
      })]
    }), validChapters.length > 0 && /*#__PURE__*/_jsx("div", {
      ...chapterStyle,
      children: /*#__PURE__*/_jsxs(NativeSelect, {
        "aria-label": "Chapter",
        value: String(chapterIndex),
        disabled: disabled || end === 0,
        onChange: event => {
          const chapter = validChapters[Number(event.target.value)];
          if (chapter) change(chapter.time);
        },
        children: [/*#__PURE__*/_jsx("option", {
          value: "-1",
          disabled: true,
          children: "Select a chapter"
        }), validChapters.map((chapter, index) => /*#__PURE__*/_jsxs("option", {
          value: String(index),
          children: [chapter.label, " \xB7 ", formatMediaTime(chapter.time)]
        }, `${chapter.time}-${chapter.label}`))]
      })
    })]
  });
});
//# sourceMappingURL=media-scrubber.js.map
