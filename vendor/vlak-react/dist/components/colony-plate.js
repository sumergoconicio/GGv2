"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useInputValue } from "../use-input-value.js";
import { useMergedRefs } from "../merge-refs.js";
import { Button } from "./button.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    k7Eaqz: "xeuugli",
    kogj98: "x1ghz6dp",
    kMwMTN: "x1gney9c",
    kLWn49: "xfrs9s4",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  title: {
    kGuDYH: "xkpwil5",
    k63SB2: "x1s688f",
    $$css: true
  },
  copy: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    ks0D6T: "x1qp14f0",
    $$css: true
  },
  count: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xngnso2",
    kcqcaj: "xss6m8b",
    kb6lSQ: "x72az59",
    $$css: true
  },
  body: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x7a106z",
    kOIVth: "x127ockj",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  graphic: {
    k1xSpc: "x1lliihq",
    kUk6DE: "x1wnwqyg",
    kzqmXN: "x9ndnb8",
    ks0D6T: "x193iq5w",
    kZKoxP: "xt7dq6l",
    kMwMTN: "x1gney9c x1sy4l04",
    $$css: true
  },
  dish: {
    kDwRjp: "x11lvw2d xqp20c9",
    kjVXCG: "x73je2i",
    kfJifR: "xnpr05h",
    $$css: true
  },
  marker: {
    kDwRjp: "x117rol3",
    kjVXCG: "x73je2i",
    kfJifR: "xnpr05h",
    $$css: true
  },
  chosen: {
    kDwRjp: "x11lvw2d x13ec2fl",
    kjVXCG: "xbu9li4 xz3j28",
    kfJifR: "xqjr0vm",
    $$css: true
  },
  list: {
    kH6xsr: "x3ct3a4",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    kUk6DE: "x3daqg1",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  record: {
    k1xSpc: "xrvj5dj",
    kOIVth: "xvh977a",
    k7Eaqz: "xeuugli",
    kGuDYH: "xboafo0",
    $$css: true
  },
  control: {
    k1xSpc: "x1lliihq",
    kzqmXN: "xh8yej3",
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kB7OPa: "x9f619",
    k9WMMc: "x1yc453h",
    kmVPX3: "x1835gkm",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd",
    kaIpWk: "xkrxur",
    kWkggS: "xhpg8l3",
    kMwMTN: "x1gney9c",
    kMv6JI: "xjb2p0i",
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    kHjlTd: "xj0a0fe",
    kkrTdU: "x1ypdohk",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  selected: {
    kWkggS: "xmgn9m6 xf7h6k7",
    kMwMTN: "x19rmm7l x1pljmm8",
    $$css: true
  },
  static: {
    k8WAf4: "x18g2hj5",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  details: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xboafo0",
    ks0D6T: "x1qp14f0",
    $$css: true
  },
  clear: {
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kzqmXN: "x14atkfc",
    kFhvOy: "x1lqcxt8",
    $$css: true
  }
};
const positioned = marker => marker.x != null && marker.y != null && Number.isFinite(marker.x) && Number.isFinite(marker.y) && Math.hypot(marker.x - 50, marker.y - 50) <= 50;
/** A supplied plate record. Marker positions and source count are never detected or inferred. */
export const ColonyPlate = /*#__PURE__*/React.forwardRef(function ColonyPlate({
  label,
  markers,
  plateId,
  source,
  recordedCount,
  value,
  defaultValue = null,
  onValueChange,
  readOnly = false,
  className,
  style,
  children,
  ...props
}, ref) {
  const [current, setCurrent, figureRef] = useInputValue(value, defaultValue, onValueChange);
  const merged = useMergedRefs(ref, figureRef);
  const id = React.useId();
  const bounded = markers.length <= 256;
  const valid = bounded && markers.every(marker => marker.id.trim()) && new Set(markers.map(marker => marker.id)).size === markers.length;
  const plotted = valid ? markers.filter(positioned) : [];
  const selected = valid ? markers.find(marker => marker.id === current) : undefined;
  const root = rs(["rs-colony-plate", className], styles.root);
  const title = rs(["rs-colony-plate-title"], styles.title);
  const copy = rs(["rs-colony-plate-copy"], styles.copy);
  const count = rs(["rs-colony-plate-count"], styles.count);
  const body = rs(["rs-colony-plate-body"], styles.body);
  const graphic = rs(["rs-colony-plate-graphic"], styles.graphic);
  const dish = rs(["rs-colony-plate-dish"], styles.dish);
  const list = rs(["rs-colony-plate-list"], styles.list);
  const record = rs(["rs-colony-plate-record"], styles.record);
  const staticStyle = rs(["rs-colony-plate-static"], styles.static);
  const details = rs(["rs-colony-plate-details"], styles.details);
  const clear = rs(["rs-colony-plate-clear"], styles.clear);
  return /*#__PURE__*/_jsxs("figure", {
    ...props,
    ref: merged,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("figcaption", {
      ...title,
      children: label
    }), plateId != null && /*#__PURE__*/_jsxs("p", {
      ...copy,
      children: ["Plate: ", plateId.trim() || "Not supplied"]
    }), /*#__PURE__*/_jsxs("p", {
      ...count,
      children: ["Source count: ", recordedCount == null ? "Not supplied" : Number.isSafeInteger(recordedCount) && recordedCount >= 0 ? recordedCount : "Unavailable"]
    }), source != null && /*#__PURE__*/_jsx("div", {
      ...copy,
      children: source
    }), /*#__PURE__*/_jsxs("p", {
      ...copy,
      children: [markers.length, " marker records supplied", valid ? `; ${plotted.length} positioned` : ""]
    }), !valid ? /*#__PURE__*/_jsx("p", {
      ...copy,
      children: bounded ? "Plate markers unavailable: supply unique non-empty record identifiers" : "Plate markers unavailable: supply at most 256 records"
    }) : /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsx("p", {
        ...copy,
        children: "Coordinates are percentages, measured from the upper left. The dish center is 50, 50."
      }), /*#__PURE__*/_jsxs("div", {
        ...body,
        children: [/*#__PURE__*/_jsxs("svg", {
          ...graphic,
          viewBox: "0 0 240 240",
          "aria-hidden": "true",
          focusable: "false",
          children: [/*#__PURE__*/_jsx("circle", {
            ...dish,
            cx: 120,
            cy: 120,
            r: 108
          }), plotted.map(marker => {
            const active = marker.id === current;
            const paint = rs(["rs-colony-plate-marker", active && "rs-colony-plate-chosen"], styles.marker, active && styles.chosen);
            return /*#__PURE__*/_jsx("circle", {
              ...paint,
              cx: 12 + marker.x * 2.16,
              cy: 12 + marker.y * 2.16,
              r: active ? 5 : 3
            }, marker.id);
          })]
        }), markers.length > 0 ? /*#__PURE__*/_jsx("ol", {
          ...list,
          "aria-label": `${label}, supplied marker records`,
          children: markers.map((marker, index) => {
            const active = marker.id === current;
            const control = rs(["rs-colony-plate-control", active && "rs-colony-plate-selected"], styles.control, active && styles.selected);
            const position = positioned(marker) ? `x ${marker.x}%, y ${marker.y}%` : marker.x == null || marker.y == null ? "Position not supplied" : "Position unavailable";
            const markerLabel = marker.label.trim() || "Unlabelled record";
            return /*#__PURE__*/_jsxs("li", {
              ...record,
              children: [readOnly ? /*#__PURE__*/_jsxs("div", {
                ...staticStyle,
                children: [index + 1, ". ", markerLabel, active ? " (selected)" : ""]
              }) : /*#__PURE__*/_jsxs("button", {
                ...control,
                type: "button",
                disabled: marker.disabled,
                "aria-pressed": active,
                "aria-label": `Select ${index + 1}. ${markerLabel}`,
                "aria-describedby": `${id}-${index}-position`,
                onClick: () => setCurrent(marker.id),
                children: [index + 1, ". ", markerLabel]
              }), /*#__PURE__*/_jsx("p", {
                ...copy,
                id: `${id}-${index}-position`,
                children: position
              }), marker.description != null && /*#__PURE__*/_jsx("div", {
                ...details,
                children: marker.description
              })]
            }, marker.id);
          })
        }) : /*#__PURE__*/_jsx("p", {
          ...copy,
          children: "No marker records supplied"
        })]
      }), /*#__PURE__*/_jsx("p", {
        ...copy,
        role: "status",
        children: selected ? `Selected record: ${selected.label.trim() || "Unlabelled record"}` : current == null ? "No record selected" : "Selected record unavailable"
      }), !readOnly && /*#__PURE__*/_jsx(Button, {
        ...clear,
        variant: "ghost",
        disabled: current == null,
        onClick: () => setCurrent(null),
        children: "Clear selection"
      })]
    }), children]
  });
});
//# sourceMappingURL=colony-plate.js.map
