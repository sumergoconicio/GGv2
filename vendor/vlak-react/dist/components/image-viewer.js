"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { Icon } from "./icon.js";
import { CanvasControls } from "./canvas-controls.js";
import { Dialog, DialogTitle } from "./dialog.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kOIVth: "x8fetqu",
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  canvas: {
    kVQacm: "xysyzu8",
    kZKoxP: "x4spiye",
    kWkggS: "x6583kg",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kPJHz1: "x784prv",
    k7shQP: "x9v5kkp",
    kZs9gx: "x14tvtkk",
    kiEn40: "x7s97pk",
    $$css: true
  },
  plane: {
    k1xSpc: "xrvj5dj",
    kgQiWS: "x1ku5rj1",
    kzqmXN: "xezivpi",
    kZKoxP: "xdmi676",
    k7Eaqz: "xgqtt45",
    kAzted: "x1us19tq",
    $$css: true
  },
  image: {
    k1xSpc: "x1lliihq",
    ks0D6T: "x1x1rfll",
    kskxy: "x7ab17h",
    kVIFPx: "x19kjcj4",
    $$css: true
  },
  controls: {
    k1xSpc: "x78zum5",
    kjj79g: "x1qughib",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x6s0dn4",
    kOIVth: "x8233eu",
    $$css: true
  },
  navigation: {
    k1xSpc: "x78zum5",
    kOIVth: "x13z6uf9",
    kGNEyG: "x6s0dn4",
    $$css: true
  },
  action: {
    kzqmXN: "x14atkfc",
    k7Eaqz: "xtp0tkc",
    kg3NbH: "x1ryrjj2",
    $$css: true
  },
  caption: {
    kogj98: "x1ghz6dp",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  modal: {
    kzqmXN: "x1nwh8uq",
    ks0D6T: "x193lwwl",
    $$css: true
  }
};

/** Inspect a labelled image collection inline or in a native lightbox. */
export const ImageViewer = /*#__PURE__*/React.forwardRef(function ImageViewer({
  images,
  value,
  defaultValue = 0,
  onValueChange,
  label = "Image viewer",
  className,
  style,
  ...props
}, ref) {
  const [inner, setInner] = React.useState(defaultValue);
  const requested = value ?? inner;
  const index = Math.max(0, Math.min(images.length - 1, Number.isFinite(requested) ? Math.floor(requested) : 0));
  const selected = images[index];
  const [zoom, setZoom] = React.useState(1);
  const [expanded, setExpanded] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const [intrinsic, setIntrinsic] = React.useState({
    src: "",
    width: 0,
    height: 0
  });
  const [viewports, setViewports] = React.useState([{
    width: 0,
    height: 352
  }, {
    width: 0,
    height: 352
  }]);
  const canvasRef = React.useRef(null);
  const modalCanvasRef = React.useRef(null);
  React.useEffect(() => {
    setZoom(1);
    setFailed(false);
  }, [selected?.src]);
  React.useLayoutEffect(() => {
    const measure = () => setViewports(previous => {
      const next = [canvasRef.current, modalCanvasRef.current].map((element, i) => element?.clientWidth ? {
        width: element.clientWidth,
        height: element.clientHeight
      } : previous[i]);
      return next.every((size, i) => size.width === previous[i].width && size.height === previous[i].height) ? previous : next;
    });
    measure();
    const observer = typeof ResizeObserver === "undefined" ? undefined : new ResizeObserver(measure);
    if (canvasRef.current) observer?.observe(canvasRef.current);
    if (modalCanvasRef.current) observer?.observe(modalCanvasRef.current);
    window.addEventListener("resize", measure);
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [expanded]);
  const choose = next => {
    if (next < 0 || next >= images.length) return;
    if (value === undefined) setInner(next);
    onValueChange?.(next);
  };
  const root = rs(["rs-image-viewer", className], styles.root);
  const canvas = rs(["rs-image-viewer-canvas"], styles.canvas);
  const plane = rs(["rs-image-viewer-plane"], styles.plane);
  const image = rs(["rs-image-viewer-image"], styles.image);
  const controls = rs(["rs-image-viewer-controls"], styles.controls);
  const navigation = rs(["rs-image-viewer-navigation"], styles.navigation);
  const action = rs(["rs-image-viewer-action"], styles.action);
  const caption = rs(["rs-image-viewer-caption"], styles.caption);
  const modal = rs(["rs-image-viewer-modal"], styles.modal);
  const frame = inModal => {
    const viewport = viewports[inModal ? 1 : 0];
    const known = intrinsic.src === selected?.src && intrinsic.width > 0 && intrinsic.height > 0;
    const fit = known ? Math.min(1, (viewport.width || intrinsic.width) / intrinsic.width, viewport.height / intrinsic.height) : 1;
    return /*#__PURE__*/_jsx("div", {
      ...canvas,
      ref: inModal ? modalCanvasRef : canvasRef,
      tabIndex: 0,
      role: "group",
      "aria-label": `${label} canvas. Use arrow keys to change images.`,
      onKeyDown: event => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          choose(index - 1);
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          choose(index + 1);
        }
      },
      children: /*#__PURE__*/_jsx("div", {
        ...plane,
        children: selected && !failed ? /*#__PURE__*/_jsx("img", {
          ...image,
          src: selected.src,
          alt: selected.alt,
          draggable: false,
          style: {
            ...image.style,
            width: known ? intrinsic.width * fit * zoom : "auto",
            height: known ? intrinsic.height * fit * zoom : viewport.height
          },
          onLoad: event => {
            const img = event.currentTarget;
            setIntrinsic({
              src: selected.src,
              width: img.naturalWidth,
              height: img.naturalHeight
            });
          },
          onError: () => setFailed(true)
        }) : /*#__PURE__*/_jsx("p", {
          ...caption,
          role: "status",
          children: selected ? "The image could not load." : "No images to show."
        })
      })
    });
  };
  const toolbar = /*#__PURE__*/_jsxs("div", {
    ...controls,
    children: [/*#__PURE__*/_jsx(CanvasControls, {
      zoom: zoom,
      onZoomChange: setZoom,
      minZoom: 0.5,
      maxZoom: 4,
      disabled: !selected || failed,
      onFit: () => setZoom(1),
      onReset: () => {
        canvasRef.current?.scrollTo({
          left: 0,
          top: 0
        });
        modalCanvasRef.current?.scrollTo({
          left: 0,
          top: 0
        });
      }
    }), /*#__PURE__*/_jsxs("div", {
      ...navigation,
      role: "group",
      "aria-label": "Image navigation",
      children: [/*#__PURE__*/_jsx(Button, {
        ...action,
        variant: "ghost",
        "aria-label": "Previous image",
        disabled: index <= 0,
        onClick: () => choose(index - 1),
        children: /*#__PURE__*/_jsx(Icon, {
          name: "chevron-left"
        })
      }), /*#__PURE__*/_jsxs("span", {
        ...caption,
        "aria-live": "polite",
        children: [images.length ? index + 1 : 0, " / ", images.length]
      }), /*#__PURE__*/_jsx(Button, {
        ...action,
        variant: "ghost",
        "aria-label": "Next image",
        disabled: index >= images.length - 1,
        onClick: () => choose(index + 1),
        children: /*#__PURE__*/_jsx(Icon, {
          name: "chevron-right"
        })
      })]
    })]
  });
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    role: "region",
    "aria-label": label,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [frame(false), toolbar, /*#__PURE__*/_jsxs("div", {
      ...controls,
      children: [/*#__PURE__*/_jsx("p", {
        ...caption,
        children: selected?.caption ?? selected?.alt
      }), /*#__PURE__*/_jsxs(Button, {
        ...action,
        variant: "ghost",
        disabled: !selected,
        onClick: () => setExpanded(true),
        children: [/*#__PURE__*/_jsx(Icon, {
          name: "expand"
        }), "Open lightbox"]
      })]
    }), /*#__PURE__*/_jsxs(Dialog, {
      ...modal,
      open: expanded,
      onClose: () => setExpanded(false),
      closeLabel: "Close image viewer",
      children: [/*#__PURE__*/_jsx(DialogTitle, {
        children: selected?.caption ?? label
      }), frame(true), toolbar]
    })]
  });
});
//# sourceMappingURL=image-viewer.js.map
