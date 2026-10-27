import * as React from "react";
import * as stylex from "@stylexjs/stylex";
export interface ChartSeries {
    name: string;
    values: Array<number | null>;
}
export interface ChartAnnotation {
    /** Index into the labels (line/bar) or an x value (scatter). */
    at: number;
    label: string;
}
export interface ChartPoint {
    x: number;
    y: number;
    label?: string;
    group?: string;
}
export declare const chartStyles: Readonly<{
    readonly chart: Readonly<{
        readonly position: stylex.StyleXClassNameFor<"position", "relative">;
        readonly width: stylex.StyleXClassNameFor<"width", "100%">;
        readonly borderRadius: stylex.StyleXClassNameFor<"borderRadius", 0>;
        readonly boxShadow: stylex.StyleXClassNameFor<"boxShadow", "none">;
    }>;
    readonly field: Readonly<{
        readonly isolation: stylex.StyleXClassNameFor<"isolation", "isolate">;
        readonly backgroundColor: stylex.StyleXClassNameFor<"backgroundColor", string>;
        readonly borderWidth: stylex.StyleXClassNameFor<"borderWidth", string>;
        readonly borderStyle: stylex.StyleXClassNameFor<"borderStyle", "solid">;
        readonly borderColor: stylex.StyleXClassNameFor<"borderColor", string>;
        readonly borderRadius: stylex.StyleXClassNameFor<"borderRadius", 0>;
        readonly boxShadow: stylex.StyleXClassNameFor<"boxShadow", "none">;
        readonly padding: stylex.StyleXClassNameFor<"padding", "1rem">;
    }>;
    readonly canvas: Readonly<{
        readonly position: stylex.StyleXClassNameFor<"position", "relative">;
        readonly width: stylex.StyleXClassNameFor<"width", "100%">;
        readonly minWidth: stylex.StyleXClassNameFor<"minWidth", 0>;
    }>;
    readonly svg: Readonly<{
        readonly display: stylex.StyleXClassNameFor<"display", "block">;
        readonly width: stylex.StyleXClassNameFor<"width", "100%">;
        readonly height: stylex.StyleXClassNameFor<"height", "auto">;
        readonly overflow: stylex.StyleXClassNameFor<"overflow", "visible">;
        readonly outlineWidth: stylex.StyleXClassNameFor<"outlineWidth", 2 | null>;
        readonly outlineStyle: stylex.StyleXClassNameFor<"outlineStyle", "solid" | null>;
        readonly outlineColor: stylex.StyleXClassNameFor<"outlineColor", string | null>;
        readonly outlineOffset: stylex.StyleXClassNameFor<"outlineOffset", 2 | null>;
    }>;
    readonly plot: Readonly<{
        readonly transformOrigin: stylex.StyleXClassNameFor<"transformOrigin", "center">;
    }>;
    readonly head: Readonly<{
        readonly display: stylex.StyleXClassNameFor<"display", "flex">;
        readonly justifyContent: stylex.StyleXClassNameFor<"justifyContent", "space-between">;
        readonly alignItems: stylex.StyleXClassNameFor<"alignItems", "baseline">;
        readonly gap: stylex.StyleXClassNameFor<"gap", "0.75rem">;
        readonly marginBottom: stylex.StyleXClassNameFor<"marginBottom", "0.625rem">;
    }>;
    readonly title: Readonly<{
        readonly fontSize: stylex.StyleXClassNameFor<"fontSize", "0.8125rem">;
        readonly fontWeight: stylex.StyleXClassNameFor<"fontWeight", 600>;
        readonly letterSpacing: stylex.StyleXClassNameFor<"letterSpacing", "-0.01em">;
        readonly color: stylex.StyleXClassNameFor<"color", string>;
    }>;
    readonly grid: Readonly<{
        readonly stroke: stylex.StyleXClassNameFor<"stroke", string>;
        readonly strokeWidth: stylex.StyleXClassNameFor<"strokeWidth", 1>;
    }>;
    readonly baseline: Readonly<{
        readonly stroke: stylex.StyleXClassNameFor<"stroke", string>;
        readonly strokeWidth: stylex.StyleXClassNameFor<"strokeWidth", 1>;
    }>;
    readonly axis: Readonly<{
        readonly fill: stylex.StyleXClassNameFor<"fill", string>;
        readonly fontSize: stylex.StyleXClassNameFor<"fontSize", "0.6875rem">;
        readonly fontWeight: stylex.StyleXClassNameFor<"fontWeight", 500>;
        readonly letterSpacing: stylex.StyleXClassNameFor<"letterSpacing", 0>;
        readonly fontVariantNumeric: stylex.StyleXClassNameFor<"fontVariantNumeric", "tabular-nums">;
    }>;
    readonly line: Readonly<{
        readonly fill: stylex.StyleXClassNameFor<"fill", "none">;
        readonly stroke: stylex.StyleXClassNameFor<"stroke", string>;
        readonly strokeWidth: stylex.StyleXClassNameFor<"strokeWidth", 1>;
        readonly strokeLinecap: stylex.StyleXClassNameFor<"strokeLinecap", "butt">;
        readonly strokeLinejoin: stylex.StyleXClassNameFor<"strokeLinejoin", "miter">;
    }>;
    readonly lineDashed: Readonly<{
        readonly strokeDasharray: stylex.StyleXClassNameFor<"strokeDasharray", "4 4">;
    }>;
    readonly lineMuted: Readonly<{
        readonly stroke: stylex.StyleXClassNameFor<"stroke", string>;
    }>;
    readonly lineDotted: Readonly<{
        readonly stroke: stylex.StyleXClassNameFor<"stroke", string>;
        readonly strokeDasharray: stylex.StyleXClassNameFor<"strokeDasharray", "0.1 5">;
        readonly strokeWidth: stylex.StyleXClassNameFor<"strokeWidth", 1.5>;
        readonly strokeLinecap: stylex.StyleXClassNameFor<"strokeLinecap", "butt">;
    }>;
    readonly lineSpot: Readonly<{
        readonly stroke: stylex.StyleXClassNameFor<"stroke", "var(--rs-chart-spot)">;
    }>;
    readonly area: Readonly<{
        readonly fill: stylex.StyleXClassNameFor<"fill", string>;
        readonly opacity: stylex.StyleXClassNameFor<"opacity", 0.08>;
        readonly stroke: stylex.StyleXClassNameFor<"stroke", "none">;
    }>;
    readonly areaSpot: Readonly<{
        readonly fill: stylex.StyleXClassNameFor<"fill", "var(--rs-chart-spot)">;
        readonly opacity: stylex.StyleXClassNameFor<"opacity", 0.16>;
        readonly stroke: stylex.StyleXClassNameFor<"stroke", "none">;
    }>;
    readonly bar: Readonly<{
        readonly fill: stylex.StyleXClassNameFor<"fill", string>;
        readonly borderRadius: stylex.StyleXClassNameFor<"borderRadius", 0>;
        readonly transition: stylex.StyleXClassNameFor<"transition", "none" | "fill var(--duration-snap) var(--ease), opacity var(--duration-snap) var(--ease)">;
    }>;
    readonly barMuted: Readonly<{
        readonly fill: stylex.StyleXClassNameFor<"fill", string>;
    }>;
    readonly barSpot: Readonly<{
        readonly fill: stylex.StyleXClassNameFor<"fill", "var(--rs-chart-spot)">;
    }>;
    readonly cursor: Readonly<{
        readonly stroke: stylex.StyleXClassNameFor<"stroke", string>;
        readonly strokeWidth: stylex.StyleXClassNameFor<"strokeWidth", 1>;
    }>;
    readonly dot: Readonly<{
        readonly fill: stylex.StyleXClassNameFor<"fill", string>;
        readonly stroke: stylex.StyleXClassNameFor<"stroke", string>;
        readonly strokeWidth: stylex.StyleXClassNameFor<"strokeWidth", 1>;
    }>;
    readonly mark: Readonly<{
        readonly fill: stylex.StyleXClassNameFor<"fill", string>;
        readonly borderRadius: stylex.StyleXClassNameFor<"borderRadius", 0>;
        readonly transition: stylex.StyleXClassNameFor<"transition", "none" | "fill var(--duration-snap) var(--ease), opacity var(--duration-snap) var(--ease)">;
    }>;
    readonly markSpot: Readonly<{
        readonly fill: stylex.StyleXClassNameFor<"fill", "var(--rs-chart-spot)">;
    }>;
    readonly ann: Readonly<{
        readonly fill: stylex.StyleXClassNameFor<"fill", string>;
        readonly fontSize: stylex.StyleXClassNameFor<"fontSize", "0.6875rem">;
        readonly fontWeight: stylex.StyleXClassNameFor<"fontWeight", 500>;
        readonly letterSpacing: stylex.StyleXClassNameFor<"letterSpacing", "-0.01em">;
    }>;
    readonly tip: Readonly<{
        readonly position: stylex.StyleXClassNameFor<"position", "absolute">;
        readonly pointerEvents: stylex.StyleXClassNameFor<"pointerEvents", "none">;
        readonly backgroundColor: stylex.StyleXClassNameFor<"backgroundColor", string>;
        readonly borderWidth: stylex.StyleXClassNameFor<"borderWidth", string>;
        readonly borderStyle: stylex.StyleXClassNameFor<"borderStyle", "solid">;
        readonly borderColor: stylex.StyleXClassNameFor<"borderColor", string>;
        readonly borderRadius: stylex.StyleXClassNameFor<"borderRadius", 0>;
        readonly boxShadow: stylex.StyleXClassNameFor<"boxShadow", "none">;
        readonly paddingBlock: stylex.StyleXClassNameFor<"paddingBlock", "0.375rem">;
        readonly paddingInline: stylex.StyleXClassNameFor<"paddingInline", "0.5rem">;
        readonly fontSize: stylex.StyleXClassNameFor<"fontSize", "0.75rem">;
        readonly letterSpacing: stylex.StyleXClassNameFor<"letterSpacing", "-0.01em">;
        readonly color: stylex.StyleXClassNameFor<"color", string>;
        readonly whiteSpace: stylex.StyleXClassNameFor<"whiteSpace", "nowrap">;
        readonly zIndex: stylex.StyleXClassNameFor<"zIndex", string>;
        readonly transform: stylex.StyleXClassNameFor<"transform", "translate(-50%, calc(-100% - 8px))">;
    }>;
    readonly tipLabel: Readonly<{
        readonly display: stylex.StyleXClassNameFor<"display", "block">;
        readonly fontSize: stylex.StyleXClassNameFor<"fontSize", "0.6875rem">;
        readonly color: stylex.StyleXClassNameFor<"color", string>;
        readonly marginBottom: stylex.StyleXClassNameFor<"marginBottom", 2>;
    }>;
    readonly tipRow: Readonly<{
        readonly display: stylex.StyleXClassNameFor<"display", "flex">;
        readonly alignItems: stylex.StyleXClassNameFor<"alignItems", "center">;
        readonly justifyContent: stylex.StyleXClassNameFor<"justifyContent", "space-between">;
        readonly gap: stylex.StyleXClassNameFor<"gap", "0.625rem">;
    }>;
    readonly tipName: Readonly<{
        readonly color: stylex.StyleXClassNameFor<"color", string>;
    }>;
    readonly tipVal: Readonly<{
        readonly fontWeight: stylex.StyleXClassNameFor<"fontWeight", 600>;
        readonly fontVariantNumeric: stylex.StyleXClassNameFor<"fontVariantNumeric", "tabular-nums">;
    }>;
    readonly legend: Readonly<{
        readonly display: stylex.StyleXClassNameFor<"display", "flex">;
        readonly flexWrap: stylex.StyleXClassNameFor<"flexWrap", "wrap">;
        readonly gap: stylex.StyleXClassNameFor<"gap", "0.875rem">;
        readonly marginTop: stylex.StyleXClassNameFor<"marginTop", "0.625rem">;
    }>;
    readonly legendItem: Readonly<{
        readonly display: stylex.StyleXClassNameFor<"display", "flex">;
        readonly alignItems: stylex.StyleXClassNameFor<"alignItems", "center">;
        readonly gap: stylex.StyleXClassNameFor<"gap", "0.4375rem">;
        readonly fontSize: stylex.StyleXClassNameFor<"fontSize", "0.75rem">;
        readonly fontWeight: stylex.StyleXClassNameFor<"fontWeight", 500>;
        readonly letterSpacing: stylex.StyleXClassNameFor<"letterSpacing", "-0.01em">;
        readonly color: stylex.StyleXClassNameFor<"color", string>;
    }>;
    readonly legendSvg: Readonly<{
        readonly display: stylex.StyleXClassNameFor<"display", "block">;
    }>;
}>;
export declare function ticksBetween(min: number, max: number, count?: number): number[];
export declare const LINE_CLASS: readonly ["rs-chart-line", "rs-chart-line rs-chart-line-dashed", "rs-chart-line rs-chart-line-muted", "rs-chart-line rs-chart-line-dotted"];
export declare const MAX_SERIES: 4;
/** Crouwel-adjacent red. Applied only as an inline field variable, never in CSS. */
export declare const CROUWEL_SPOT = "#E30613";
export declare function niceMax(raw: number): number;
/**
 * Locale-aware number: compact from a thousand (1.2K, 3M), else at most one
 * decimal. `locale` undefined means the reader's own.
 */
export declare function defaultFormat(v: number, unit?: string, locale?: string): string;
export declare function niceStep(span: number, count?: number): number;
export declare function ticksFor(max: number, count?: number, inverted?: boolean): number[];
export declare function stackedRows(series: ChartSeries[]): number[][];
export declare function lineMark(seriesIndex: number, spot?: boolean): {
    className?: string;
    style?: React.CSSProperties;
};
export declare function areaMark(spot?: boolean): {
    className?: string;
    style?: React.CSSProperties;
};
export declare function barMark(opts?: {
    spot?: boolean;
    muted?: boolean;
}): {
    className?: string;
    style?: React.CSSProperties;
};
export declare function scatterMark(spot?: boolean): {
    className?: string;
    style?: React.CSSProperties;
};
export interface SrSeries {
    name: string;
    values: Array<number | string | null>;
}
/** The data behind a plot, as a screen-reader table. */
export declare function SrTable({ caption, labels, series, }: {
    caption: string;
    labels: string[];
    series: SrSeries[];
}): React.JSX.Element;
export declare function LegendSwatch({ seriesIndex, spot }: {
    seriesIndex: number;
    spot?: boolean;
}): React.JSX.Element;
export declare function ChartHead({ className, style, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
export declare function ChartTitle({ className, style, ...props }: React.HTMLAttributes<HTMLParagraphElement>): React.JSX.Element;
export declare function ChartLegend({ className, style, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
export declare function ChartLegendItem({ className, style, ...props }: React.HTMLAttributes<HTMLSpanElement>): React.JSX.Element;
export declare function ChartTip({ left, top, label, rows, }: {
    left: number | string;
    top: number | string;
    label: string;
    rows: Array<{
        name?: string;
        value: string;
    }>;
}): React.JSX.Element;
export interface ChartFieldProps extends React.HTMLAttributes<HTMLDivElement> {
    /** One Crouwel spot on the field. Chrome stays ink. */
    spot?: boolean | string;
}
export declare const ChartField: React.ForwardRefExoticComponent<ChartFieldProps & React.RefAttributes<HTMLDivElement>>;
/** The canvas wraps a plot: measured for width, and the tooltip's positioning box. */
export declare const ChartCanvas: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export declare const PLOT: {
    readonly W: 408;
    readonly ML: 36;
    readonly MR: 8;
    readonly MT: 8;
    readonly MB: 22;
};
/**
 * Rendered width of the canvas in CSS px, so the plot lays out in real
 * pixels and its type keeps its size. PLOT.W on the server, before the
 * first measure, and where ResizeObserver is missing.
 */
export declare function useChartWidth<T extends HTMLElement>(fallback?: number): [React.RefObject<T | null>, number];
/**
 * Keyboard cursor over `count` points: arrows step, Home/End jump, Escape
 * clears. Returns undefined for keys it does not handle.
 */
export declare function stepCursor(key: string, current: number | null, count: number): number | null | undefined;
export interface PlotNameProps {
    "aria-label"?: string;
    "aria-labelledby"?: string;
}
/**
 * The plot's accessible name: an explicit label or labelledby wins, then the
 * visible ChartTitle by id, then a composed description. Never a bare kind.
 */
export declare function plotName(explicit: PlotNameProps, titleId: string | undefined, fallback: string): PlotNameProps;
/** "Bar chart of Sheets and Proofs, in units". */
export declare function describePlot(kind: string, names: string[], unit?: string): string;
/** Props that make a plot a focusable, keyboard-driven group. */
export declare function plotProps(name: PlotNameProps, onKey: (key: string) => boolean, onLeave: () => void): React.SVGAttributes<SVGSVGElement>;
