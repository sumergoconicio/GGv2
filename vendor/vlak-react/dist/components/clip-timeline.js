"use client";

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
    ks0D6T: "x193iq5w",
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
  note: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x4ro2ui",
    kMwMTN: "x1ixqp2s",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  seek: {
    k1xSpc: "xrvj5dj",
    kOIVth: "xvh977a",
    kGuDYH: "x4ro2ui",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  range: {
    kogj98: "x1ghz6dp",
    kAzted: "x1wszdd",
    k7Eaqz: "xtp0tkc",
    kzqmXN: "xh8yej3",
    keaTxX: "x12r28v4",
    $$css: true
  },
  viewport: {
    ks0D6T: "x193iq5w",
    k7Eaqz: "xeuugli",
    kXHlph: "xw2csxc",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  track: {
    k7Eaqz: "x7f79of",
    kmVPX3: "x79iv2k",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    $$css: true
  },
  clips: {
    k1xSpc: "xrvj5dj",
    kOIVth: "xpj7pl4",
    $$css: true
  },
  lane: {
    k7Eaqz: "xeuugli",
    kZKoxP: "x9ve8r1",
    kVAEAm: "x1n2onr6",
    kWkggS: "x1nzd1wa",
    $$css: true
  },
  clip: {
    kVAEAm: "x10l6tqk",
    k87sOh: "x13vifvy",
    krVfgx: "x1ey2m1c",
    k7Eaqz: "xeuugli",
    kB7OPa: "x9f619",
    kWkggS: "xhpg8l3",
    kMzoRj: "xc342km",
    kGVxlE: "x1s65914",
    kMwMTN: "x1gney9c",
    kVQacm: "xb3r6kr",
    khDVqt: "xuxw1ft",
    kg5iWk: "xlyipyv",
    kmVPX3: "x1717udv",
    $$css: true
  },
  selected: {
    kWkggS: "xmgn9m6 xf7h6k7",
    kMwMTN: "x19rmm7l x1pljmm8",
    $$css: true
  },
  rows: {
    k1xSpc: "xrvj5dj",
    kOIVth: "xvh977a",
    kH6xsr: "x3ct3a4",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    $$css: true
  },
  button: {
    k9WMMc: "x1yc453h",
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kmVPX3: "x2nx7ib",
    kzqmXN: "xh8yej3",
    kWkggS: "xhpg8l3",
    kMwMTN: "x1gney9c",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd",
    kaIpWk: "xkrxur",
    kGuDYH: "x1jq7itm",
    kMv6JI: "xjb2p0i",
    kLWn49: "xfrs9s4",
    kkrTdU: "x1ypdohk",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  }
};

/** Supplied clip positions, with separate reachable selection and seek controls. */
export const ClipTimeline = /*#__PURE__*/React.forwardRef(function ClipTimeline({
  label,
  tracks,
  clips,
  duration,
  unit,
  position,
  selectedClipId,
  onSeek,
  onSelectClip,
  disabled,
  className,
  style,
  ...props
}, ref) {
  const labelId = React.useId();
  const validDuration = Number.isFinite(duration) && duration > 0 && (unit !== "frames" || Number.isInteger(duration));
  const clipEnd = clip => {
    const end = clip.start + clip.duration;
    const tolerance = Number.EPSILON * Math.max(Math.abs(clip.start), Math.abs(clip.duration), Math.abs(duration)) * 4;
    return unit === "seconds" && end > duration && end - duration <= tolerance ? duration : end;
  };
  const validClip = clip => validDuration && Number.isFinite(clip.start) && Number.isFinite(clip.duration) && clip.start >= 0 && clip.duration > 0 && clipEnd(clip) <= duration && (unit !== "frames" || Number.isInteger(clip.start) && Number.isInteger(clip.duration));
  const validPosition = position != null && Number.isFinite(position) && position >= 0 && position <= duration && (unit !== "frames" || Number.isInteger(position));
  const root = rs(["rs-clip-timeline", className], styles.root);
  const heading = rs(["rs-clip-timeline-label"], styles.label);
  const note = rs(["rs-clip-timeline-note"], styles.note);
  const seek = rs(["rs-clip-timeline-seek"], styles.seek);
  const range = rs(["rs-clip-timeline-range"], styles.range);
  const viewport = rs(["rs-clip-timeline-viewport"], styles.viewport);
  const trackStyle = rs(["rs-clip-timeline-track"], styles.track);
  const lanes = rs(["rs-clip-timeline-clips"], styles.clips);
  const lane = rs(["rs-clip-timeline-lane"], styles.lane);
  const rows = rs(["rs-clip-timeline-rows"], styles.rows);
  return /*#__PURE__*/_jsxs("div", {
    ...props,
    ref: ref,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("p", {
      id: labelId,
      className: heading.className,
      style: heading.style,
      children: label
    }), !validDuration ? /*#__PURE__*/_jsx("p", {
      className: note.className,
      style: note.style,
      children: "Timeline duration unavailable"
    }) : /*#__PURE__*/_jsxs("p", {
      className: note.className,
      style: note.style,
      children: ["0 to ", duration, " ", unit]
    }), onSeek && validDuration && /*#__PURE__*/_jsxs("label", {
      className: seek.className,
      style: seek.style,
      children: [/*#__PURE__*/_jsx("span", {
        children: validPosition ? `Position: ${position} ${unit}` : "Choose a position"
      }), /*#__PURE__*/_jsx("input", {
        type: "range",
        "aria-label": `Seek in ${unit}`,
        min: 0,
        max: duration,
        step: unit === "frames" ? 1 : 0.01,
        value: validPosition ? position : 0,
        disabled: disabled,
        className: range.className,
        style: range.style,
        onChange: event => onSeek(Number(event.currentTarget.value))
      })]
    }), tracks.length === 0 && /*#__PURE__*/_jsx("p", {
      className: note.className,
      style: note.style,
      children: "No tracks supplied"
    }), tracks.length > 0 && /*#__PURE__*/_jsx("div", {
      role: "region",
      "aria-labelledby": labelId,
      tabIndex: 0,
      className: viewport.className,
      style: viewport.style,
      children: tracks.map(track => /*#__PURE__*/_jsxs("div", {
        className: trackStyle.className,
        style: trackStyle.style,
        children: [/*#__PURE__*/_jsx("span", {
          className: note.className,
          style: note.style,
          children: track.label
        }), /*#__PURE__*/_jsx("div", {
          "aria-hidden": "true",
          className: lanes.className,
          style: lanes.style,
          children: clips.filter(clip => clip.trackId === track.id && validClip(clip)).map(clip => {
            const selected = clip.id === selectedClipId;
            const paint = rs(["rs-clip-timeline-clip", selected && "rs-clip-timeline-selected"], styles.clip, selected && styles.selected);
            return /*#__PURE__*/_jsx("div", {
              className: lane.className,
              style: lane.style,
              children: /*#__PURE__*/_jsx("span", {
                className: paint.className,
                style: {
                  ...paint.style,
                  insetInlineStart: `${clip.start / duration * 100}%`,
                  width: `${clip.duration / duration * 100}%`
                },
                children: clip.label
              })
            }, clip.id);
          })
        }), clips.every(clip => clip.trackId !== track.id) && /*#__PURE__*/_jsx("span", {
          className: note.className,
          style: note.style,
          children: "No clips"
        })]
      }, track.id))
    }), clips.length === 0 && /*#__PURE__*/_jsx("p", {
      className: note.className,
      style: note.style,
      children: "No clips supplied"
    }), /*#__PURE__*/_jsx("ul", {
      className: rows.className,
      style: rows.style,
      children: clips.map(clip => {
        const selected = clip.id === selectedClipId;
        const button = rs(["rs-clip-timeline-button", selected && "rs-clip-timeline-selected"], styles.button, selected && styles.selected);
        const track = tracks.find(item => item.id === clip.trackId);
        const text = `${clip.label} · ${track?.label ?? "Unknown track"} · ${validClip(clip) ? `${clip.start}–${clipEnd(clip)} ${unit}` : "Invalid interval"}`;
        return /*#__PURE__*/_jsx("li", {
          children: onSelectClip ? /*#__PURE__*/_jsx("button", {
            type: "button",
            disabled: disabled,
            "aria-pressed": selected,
            className: button.className,
            style: button.style,
            onClick: () => onSelectClip(clip.id),
            children: text
          }) : /*#__PURE__*/_jsx("span", {
            className: note.className,
            style: note.style,
            children: text
          })
        }, clip.id);
      })
    })]
  });
});
//# sourceMappingURL=clip-timeline.js.map
