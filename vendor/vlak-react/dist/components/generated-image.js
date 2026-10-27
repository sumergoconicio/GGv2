import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import { rs } from "../rs.js";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { jsx as _jsx } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "x1lliihq",
    ks0D6T: "x193iq5w",
    kZKoxP: "xt7dq6l",
    kaIpWk: "xkrxur",
    $$css: true
  }
};
/** Displays supplied image bytes; image generation remains application-owned. */
export const GeneratedImage = /*#__PURE__*/React.forwardRef(function GeneratedImage({
  image,
  alt,
  className,
  style,
  ...props
}, ref) {
  const root = rs(["rs-generated-image", className], styles.root);
  const source = /^image\/(?:png|jpeg|jpg|gif|webp|avif|svg\+xml)$/.test(image.mediaType) ? `data:${image.mediaType};base64,${image.base64}` : undefined;
  return /*#__PURE__*/_jsx("img", {
    ref: ref,
    loading: "lazy",
    ...props,
    src: source,
    alt: alt,
    className: root.className,
    style: {
      ...root.style,
      ...style
    }
  });
});
//# sourceMappingURL=generated-image.js.map
