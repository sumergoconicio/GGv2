import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  label: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x1jq7itm",
    k63SB2: "x1s688f",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  channel: {
    k1xSpc: "xrvj5dj",
    kOIVth: "xpj7pl4",
    $$css: true
  },
  text: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kjj79g: "x1qughib",
    kOIVth: "x4upkte",
    kGuDYH: "x4ro2ui",
    kLWn49: "xfrs9s4",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  meter: {
    k1xSpc: "x1lliihq",
    kzqmXN: "xh8yej3",
    kZKoxP: "xvle69y",
    kysU6D: "xjyslct",
    kWkggS: "xhpg8l3",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd",
    kB7OPa: "x9f619",
    k8AOI4: "x1luu400",
    kVwv94: "xa02y91",
    ksamF7: "xeh5pub",
    k6xfU8: "xoaypa",
    kMfgd5: "x153dfbf",
    kq0KRG: "x1es6smb x13tqkqt",
    kSkrG2: "xgcmp63",
    kPv7jM: "xdof938 xyh038",
    kjpBQv: "x9r1s8v",
    $$css: true
  },
  note: {
    kMwMTN: "x1ixqp2s",
    kogj98: "x1ghz6dp",
    kGuDYH: "x4ro2ui",
    kLWn49: "xfrs9s4",
    $$css: true
  }
};
function decibels(value) {
  return value === Number.NEGATIVE_INFINITY ? "−∞ dB" : value != null && Number.isFinite(value) ? `${value} dB` : "Unavailable";
}

/** Supplied channel levels and peaks; no audio analysis or peak holding. */
export const AudioMeter = /*#__PURE__*/React.forwardRef(function AudioMeter({
  label,
  channels,
  min = -60,
  max = 0,
  className,
  style,
  ...props
}, ref) {
  const id = React.useId();
  const validRange = Number.isFinite(min) && Number.isFinite(max) && Number.isFinite(max - min) && max > min;
  const root = rs(["rs-audio-meter", className], styles.root);
  const heading = rs(["rs-audio-meter-label"], styles.label);
  const channelStyle = rs(["rs-audio-meter-channel"], styles.channel);
  const text = rs(["rs-audio-meter-text"], styles.text);
  const meter = rs(["rs-audio-meter-bar"], styles.meter);
  const note = rs(["rs-audio-meter-note"], styles.note);
  return /*#__PURE__*/_jsxs("div", {
    ...props,
    ref: ref,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("p", {
      id: `${id}-label`,
      className: heading.className,
      style: heading.style,
      children: label
    }), !validRange && /*#__PURE__*/_jsx("p", {
      className: note.className,
      style: note.style,
      children: "Meter range unavailable"
    }), channels.length === 0 && /*#__PURE__*/_jsx("p", {
      className: note.className,
      style: note.style,
      children: "No channels supplied"
    }), channels.map((channel, index) => {
      const validLevel = channel.level != null && (Number.isFinite(channel.level) || channel.level === Number.NEGATIVE_INFINITY);
      return /*#__PURE__*/_jsxs("div", {
        className: channelStyle.className,
        style: channelStyle.style,
        children: [/*#__PURE__*/_jsxs("div", {
          className: text.className,
          style: text.style,
          children: [/*#__PURE__*/_jsx("span", {
            id: `${id}-${index}`,
            children: channel.label
          }), /*#__PURE__*/_jsx("span", {
            children: decibels(channel.level)
          })]
        }), validRange && validLevel && /*#__PURE__*/_jsx("meter", {
          min: min,
          max: max,
          value: Math.min(max, Math.max(min, channel.level)),
          "aria-labelledby": `${id}-label ${id}-${index}`,
          "aria-valuetext": decibels(channel.level),
          className: meter.className,
          style: meter.style,
          children: decibels(channel.level)
        }), channel.peak !== undefined && /*#__PURE__*/_jsxs("p", {
          className: note.className,
          style: note.style,
          children: ["Peak: ", decibels(channel.peak)]
        })]
      }, channel.id);
    })]
  });
});
//# sourceMappingURL=audio-meter.js.map
