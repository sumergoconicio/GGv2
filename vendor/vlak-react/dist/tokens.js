import * as stylex from "@stylexjs/stylex";

/**
 * StyleX vars alias Vlak CSS custom properties. Not a second scale.
 * Values live in packages/core/css/tokens.css (generated from src/tokens.ts).
 */
export const vlak = {
  paper: "var(--x1w4bhvv)",
  ink: "var(--x1hl4rkb)",
  gray: "var(--x1aco25)",
  accent: "var(--x1yi4q9h)",
  divider: "var(--xfu96el)",
  dividerSubtle: "var(--xa87knl)",
  tableAlt: "var(--x1452hyv)",
  gridLine: "var(--xj9qh2a)",
  controlBorder: "var(--x87inzw)",
  controlFill: "var(--xcjjfqz)",
  radiusSm: "var(--x1xs8936)",
  radius: "var(--x11s5ldv)",
  radiusChrome: "var(--x18t93hg)",
  radiusIn: "var(--x42s6oq)",
  pad: "var(--x1ar17do)",
  gutter: "var(--x4ks1az)",
  module: "var(--x1xd25pf)",
  gridImage: "var(--xsdx2je)",
  gridPos: "var(--x1lkxpsj)",
  hit: "var(--x1twy3cw)",
  controlH: "var(--x1kw3jcs)",
  controlFs: "var(--x1cu09xm)",
  controlLabel: "var(--x1a2dn51)",
  durationSnap: "var(--x1i24op3)",
  duration: "var(--x139i3mk)",
  durationDeliberate: "var(--x19buahz)",
  durationConfirm: "var(--xh3i7m8)",
  ease: "var(--x1cfnp2k)",
  transition: "var(--x61f8ft)",
  textScale: "var(--x14op2pc)",
  hairline: "var(--x8mchfo)",
  zRaised: "var(--x1w1j8ao)",
  zSticky: "var(--x7fi5p5)",
  zFloat: "var(--x1wlpo2r)",
  zOverlay: "var(--x3kozho)",
  zToast: "var(--x13dxqhw)",
  __varGroupHash__: "xjusd5g"
};

/** Inter stack. Same as body in base.css. Not a token var — @font-face stays CSS. */
export const vlakFont = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif";
export const vlakMono = "ui-monospace, SFMono-Regular, Menlo, monospace";

/** Compile-time media keys. StyleX only folds defineConsts, not plain strings. */
export const mq = {
  phone: "@media (max-width: 640px)",
  mobileGrid: "@media (max-width: 480px)",
  at900: "@media (min-width: 900px)",
  at899: "@media (max-width: 899px)",
  rail: "@media (min-width: 1024px)",
  wide: "@media (min-width: 1440px)",
  reduce: "@media (prefers-reduced-motion: reduce)",
  touch: "@media (hover: none)",
  hover: "@media (hover: hover) and (pointer: fine)",
  forcedColors: "@media (forced-colors: active)"
};

/** Phone recut (≤640). Desktop stays the poster. */
export const phone = mq.phone;

/** Mobile grid (≤480). */
export const mobileGrid = mq.mobileGrid;

/** Catalog rail. */
export const rail = mq.rail;

/** Wide catalog. */
export const wide = mq.wide;
//# sourceMappingURL=tokens.js.map
