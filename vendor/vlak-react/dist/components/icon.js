import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { filledCutouts, filledMarks, iconGroups, iconLabel, iconNames, marks, resolveIcon, smallFilledCutouts, smallFilledMarks } from "./icon-marks.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const at480 = "@media (max-width: 480px)";
export { filledCutouts, filledMarks, iconGroups, iconLabel, iconNames, resolveIcon };
/**
 * Vlak chrome marks, optically drawn on a 16×16 module centered at 8,8.
 * Line weight is tuned for each displayed size; rounded terminals keep small
 * strokes clear without sharp spurs. Filled figures share the same silhouettes
 * and use transparent detail cuts of at least one CSS pixel at the small size.
 * Arrow shafts and symmetric heads meet in one compound painted path.
 */
export const ICON_STROKE = 1.25;
export const ICON_STROKES = {
  12: 1,
  16: ICON_STROKE,
  24: 1.5
};
export const ICON_VIEWBOX = 16;
export const iconInk = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: ICON_STROKE,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  vectorEffect: "non-scaling-stroke"
};
export const iconFill = {
  fill: "currentColor",
  stroke: "none"
};
const maskPositiveFill = {
  fill: "white",
  stroke: "none"
};
const maskPositiveStroke = {
  fill: "none",
  stroke: "white",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  vectorEffect: "none"
};
const maskCutoutFill = {
  fill: "black",
  stroke: "none"
};
const maskCutoutStroke = {
  fill: "none",
  stroke: "black",
  strokeWidth: 1.25,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  vectorEffect: "none"
};
const styles = {
  icon: {
    k1xSpc: "x1lliihq",
    kmuXW: "x2lah0s",
    kVQacm: "x1rea2x4",
    kMwMTN: "x1heor9g",
    $$css: true
  },
  row: {
    k1xSpc: "x78zum5",
    kOIVth: "x9sv3eg",
    kGNEyG: "x6s0dn4",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  catalog: {
    kzqmXN: "xh8yej3",
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kOIVth: "xj3jsk1",
    k9WMMc: "x1yc453h",
    kSGwAc: "xkh2ocl",
    $$css: true
  },
  group: {
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kOIVth: "x8233eu",
    $$css: true
  },
  groupTitle: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xboafo0",
    k63SB2: "x1s688f",
    kb6lSQ: "x12oo3zp",
    kMwMTN: "x1ixqp2s",
    kP9fke: "x6mezaz",
    $$css: true
  },
  grid: {
    k1xSpc: "xrvj5dj",
    kumcoG: "xv0i7er xzyw3uk",
    k1C7PZ: "x3ubbel",
    khm7nJ: "x10g6wfw",
    kjj79g: "xlqzeqv",
    kzqmXN: "xh8yej3",
    $$css: true
  },
  cell: {
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kGNEyG: "x1cy8zhl",
    kOIVth: "x13z6uf9",
    kzqmXN: "xhpatk0 xi07z52",
    $$css: true
  },
  pair: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kOIVth: "x8fetqu",
    kAzted: "x1rqwxy8",
    $$css: true
  },
  kin: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kOIVth: "x13z6uf9",
    kAzted: "x1rqwxy8",
    $$css: true
  },
  label: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x12lo8hy",
    kLWn49: "xwn7fz2",
    kMwMTN: "x1ixqp2s",
    kP9fke: "x6mezaz",
    $$css: true
  }
};
function isClosed(el) {
  if (el.t === "rect" || el.t === "circle") return true;
  if (el.t === "path") return /z\s*$/i.test(el.d.trim());
  return false;
}
function inkFor(el, variant, size) {
  return el.t === "circle" && el.solid || variant === "filled" && isClosed(el) ? iconFill : {
    ...iconInk,
    strokeWidth: ICON_STROKES[size]
  };
}
function renderEl(el, key, variant, size) {
  const ink = inkFor(el, variant, size);
  switch (el.t) {
    case "path":
      return /*#__PURE__*/_jsx("path", {
        d: el.d,
        ...ink
      }, key);
    case "rect":
      return /*#__PURE__*/_jsx("rect", {
        x: el.x,
        y: el.y,
        width: el.w,
        height: el.h,
        ...ink
      }, key);
    case "circle":
      return /*#__PURE__*/_jsx("circle", {
        cx: el.cx,
        cy: el.cy,
        r: el.r,
        ...ink
      }, key);
    case "line":
      return /*#__PURE__*/_jsx("line", {
        x1: el.x1,
        y1: el.y1,
        x2: el.x2,
        y2: el.y2,
        ...ink
      }, key);
  }
}
function renderMaskEl(el, key, cutout, size) {
  const ink = cutout ? isClosed(el) ? maskCutoutFill : {
    ...maskCutoutStroke,
    strokeWidth: Math.max(1.25, 16 / size)
  } : isClosed(el) ? maskPositiveFill : {
    ...maskPositiveStroke,
    strokeWidth: el.strokeWidth ?? maskPositiveStroke.strokeWidth
  };
  switch (el.t) {
    case "path":
      return /*#__PURE__*/_jsx("path", {
        d: el.d,
        ...ink
      }, key);
    case "rect":
      return /*#__PURE__*/_jsx("rect", {
        x: el.x,
        y: el.y,
        width: el.w,
        height: el.h,
        ...ink
      }, key);
    case "circle":
      return /*#__PURE__*/_jsx("circle", {
        cx: el.cx,
        cy: el.cy,
        r: el.r,
        ...ink
      }, key);
    case "line":
      return /*#__PURE__*/_jsx("line", {
        x1: el.x1,
        y1: el.y1,
        x2: el.x2,
        y2: el.y2,
        ...ink
      }, key);
  }
}
/** One mark. Size is the drawn square; the viewBox is always 16. */
export const Icon = /*#__PURE__*/React.forwardRef(function Icon({
  name,
  size = 16,
  variant = "line",
  rotate,
  className,
  style,
  ...props
}, ref) {
  const resolved = resolveIcon(name);
  const turn = rotate ?? resolved.rotate;
  const figure = variant === "filled" ? (size === 12 ? smallFilledMarks[resolved.mark] : undefined) ?? filledMarks[resolved.mark] ?? marks[resolved.mark] : marks[resolved.mark];
  const maskId = `rs-icon-${React.useId().replace(/:/g, "")}`;
  const cutouts = new Set((size === 12 ? smallFilledCutouts[resolved.mark] : undefined) ?? filledCutouts[resolved.mark] ?? []);
  const sx = rs(["rs-icon", variant === "filled" && "rs-icon-filled", className], styles.icon);
  return /*#__PURE__*/_jsx("svg", {
    ref: ref,
    viewBox: "0 0 16 16",
    width: size,
    height: size,
    "aria-hidden": "true",
    ...iconInk,
    strokeWidth: ICON_STROKES[size],
    ...props,
    className: sx.className
    /* rem, so the mark scales with the text-size setting; the attributes keep the px ratio for SVG. */,
    style: {
      ...sx.style,
      width: `${size / 16}rem`,
      height: `${size / 16}rem`,
      ...style
    },
    children: variant === "filled" ? /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsxs("mask", {
        id: maskId,
        maskUnits: "userSpaceOnUse",
        x: "0",
        y: "0",
        width: "16",
        height: "16",
        children: [/*#__PURE__*/_jsx("rect", {
          width: "16",
          height: "16",
          fill: "black",
          stroke: "none"
        }), /*#__PURE__*/_jsx("g", {
          transform: turn ? `rotate(${turn} 8 8)` : undefined,
          children: figure.map((el, i) => renderMaskEl(el, i, cutouts.has(i), size))
        })]
      }), /*#__PURE__*/_jsx("rect", {
        width: "16",
        height: "16",
        fill: "currentColor",
        stroke: "none",
        mask: `url(#${maskId})`
      })]
    }) : turn ? /*#__PURE__*/_jsx("g", {
      transform: `rotate(${turn} 8 8)`,
      children: figure.map((el, i) => renderEl(el, i, variant, size))
    }) : figure.map((el, i) => renderEl(el, i, variant, size))
  });
});

/** Inline mark row. One family, current color. */
export const Icons = /*#__PURE__*/React.forwardRef(function Icons({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-icons", className], styles.row);
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});

/** Full family at 12, 16, and 24, line | filled, grouped. Optical center 8,8. */
export const IconCatalog = /*#__PURE__*/React.forwardRef(function IconCatalog({
  className
}, ref) {
  const catalog = rs(["rs-icon-catalog", className], styles.catalog);
  const group = rs(["rs-icon-group"], styles.group);
  const groupTitle = rs(["rs-icon-group-title"], styles.groupTitle);
  const grid = rs(["rs-icon-grid"], styles.grid);
  const cell = rs(["rs-icon-cell"], styles.cell);
  const pair = rs(["rs-icon-pair"], styles.pair);
  const kin = rs(["rs-icon-kin"], styles.kin);
  const label = rs(["rs-icon-label"], styles.label);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    className: catalog.className,
    style: catalog.style,
    children: [/*#__PURE__*/_jsx("p", {
      className: label.className,
      style: label.style,
      children: "Line on the left, filled on the right. Each shown at 12, 16, and 24px."
    }), iconGroups.map(g => /*#__PURE__*/_jsxs("section", {
      id: g.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      className: group.className,
      style: group.style,
      children: [/*#__PURE__*/_jsx("h3", {
        className: groupTitle.className,
        style: groupTitle.style,
        children: g.title
      }), /*#__PURE__*/_jsx("p", {
        className: label.className,
        style: label.style,
        children: "Line 12 \xB7 16 \xB7 24 / Filled 12 \xB7 16 \xB7 24"
      }), /*#__PURE__*/_jsx("div", {
        className: grid.className,
        style: grid.style,
        children: g.names.map(mark => /*#__PURE__*/_jsxs("div", {
          className: cell.className,
          style: cell.style,
          children: [/*#__PURE__*/_jsxs("div", {
            className: pair.className,
            style: pair.style,
            children: [/*#__PURE__*/_jsxs("div", {
              className: kin.className,
              style: kin.style,
              "data-variant": "line",
              children: [/*#__PURE__*/_jsx(Icon, {
                name: mark,
                size: 12
              }), /*#__PURE__*/_jsx(Icon, {
                name: mark,
                size: 16
              }), /*#__PURE__*/_jsx(Icon, {
                name: mark,
                size: 24
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: kin.className,
              style: kin.style,
              "data-variant": "filled",
              children: [/*#__PURE__*/_jsx(Icon, {
                name: mark,
                size: 12,
                variant: "filled"
              }), /*#__PURE__*/_jsx(Icon, {
                name: mark,
                size: 16,
                variant: "filled"
              }), /*#__PURE__*/_jsx(Icon, {
                name: mark,
                size: 24,
                variant: "filled"
              })]
            })]
          }), /*#__PURE__*/_jsx("span", {
            className: label.className,
            style: label.style,
            children: iconLabel(mark)
          })]
        }, `${g.title}-${mark}`))
      })]
    }, g.title))]
  });
});
//# sourceMappingURL=icon.js.map
