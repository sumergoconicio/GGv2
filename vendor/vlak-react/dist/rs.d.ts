import type { CSSProperties } from "react";
import type { CompiledStyles, InlineStyles } from "@stylexjs/stylex";
type Nested<T> = T | ReadonlyArray<Nested<T>>;
/** Exactly what stylex.props accepts: compiled leaves, falsy, nested arrays, or a leaf with inline styles. */
export type Leaves = ReadonlyArray<Nested<null | undefined | CompiledStyles | boolean | Readonly<[CompiledStyles, InlineStyles]>>>;
type StyleXProps = {
    className?: string;
    style?: CSSProperties;
};
/**
 * The one seam every component styles through: semantic rs-* class names
 * (the CSS-first contract, and what packages/core generates CSS for) merged
 * with the compiled StyleX leaves that paint the React tree.
 */
export declare function rs(classNames: Array<string | false | null | undefined>, ...styles: Leaves): StyleXProps;
export {};
