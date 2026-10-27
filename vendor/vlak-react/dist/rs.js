import * as stylex from "@stylexjs/stylex";
import { cx } from "./cx.js";

/** Exactly what stylex.props accepts: compiled leaves, falsy, nested arrays, or a leaf with inline styles. */

/**
 * The one seam every component styles through: semantic rs-* class names
 * (the CSS-first contract, and what packages/core generates CSS for) merged
 * with the compiled StyleX leaves that paint the React tree.
 */
export function rs(classNames, ...styles) {
  const sx = stylex.props(...styles);
  return {
    className: cx(...classNames, sx.className),
    style: sx.style
  };
}
//# sourceMappingURL=rs.js.map
