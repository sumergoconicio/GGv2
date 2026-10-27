import * as stylex from "@stylexjs/stylex";
/**
 * StyleX vars alias Vlak CSS custom properties. Not a second scale.
 * Values live in packages/core/css/tokens.css (generated from src/tokens.ts).
 */
export declare const vlak: stylex.VarGroup<Readonly<{
    paper: string;
    ink: string;
    gray: string;
    accent: string;
    divider: string;
    dividerSubtle: string;
    tableAlt: string;
    gridLine: string;
    controlBorder: string;
    controlFill: string;
    radiusSm: string;
    radius: string;
    radiusChrome: string;
    radiusIn: string;
    pad: string;
    gutter: string;
    module: string;
    gridImage: string;
    gridPos: string;
    hit: string;
    controlH: string;
    controlFs: string;
    controlLabel: string;
    durationSnap: string;
    duration: string;
    durationDeliberate: string;
    durationConfirm: string;
    ease: string;
    transition: string;
    textScale: string;
    hairline: string;
    zRaised: string;
    zSticky: string;
    zFloat: string;
    zOverlay: string;
    zToast: string;
}>, symbol>;
/** Inter stack. Same as body in base.css. Not a token var — @font-face stays CSS. */
export declare const vlakFont = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif";
export declare const vlakMono = "ui-monospace, SFMono-Regular, Menlo, monospace";
/** Compile-time media keys. StyleX only folds defineConsts, not plain strings. */
export declare const mq: {
    phone: string;
    mobileGrid: string;
    at900: string;
    at899: string;
    rail: string;
    wide: string;
    reduce: string;
    touch: string;
    /** Visual hover feedback is only for a pointer that can actually hover. */
    hover: string;
    forcedColors: string;
};
/** Phone recut (≤640). Desktop stays the poster. */
export declare const phone: string;
/** Mobile grid (≤480). */
export declare const mobileGrid: string;
/** Catalog rail. */
export declare const rail: string;
/** Wide catalog. */
export declare const wide: string;
