import * as React from "react";
import { filledCutouts, filledMarks, iconGroups, iconLabel, iconNames, resolveIcon, type IconName, type IconRotate } from "./icon-marks.js";
export { filledCutouts, filledMarks, iconGroups, iconLabel, iconNames, resolveIcon };
export type { IconName, IconRotate };
export type { DrawnName, IconAlias, IconGroup } from "./icon-marks.js";
/**
 * Vlak chrome marks, optically drawn on a 16×16 module centered at 8,8.
 * Line weight is tuned for each displayed size; rounded terminals keep small
 * strokes clear without sharp spurs. Filled figures share the same silhouettes
 * and use transparent detail cuts of at least one CSS pixel at the small size.
 * Arrow shafts and symmetric heads meet in one compound painted path.
 */
export declare const ICON_STROKE = 1.25;
export declare const ICON_STROKES: {
    readonly 12: 1;
    readonly 16: 1.25;
    readonly 24: 1.5;
};
export declare const ICON_VIEWBOX = 16;
export declare const iconInk: {
    readonly fill: "none";
    readonly stroke: "currentColor";
    readonly strokeWidth: 1.25;
    readonly strokeLinecap: "round";
    readonly strokeLinejoin: "round";
    readonly vectorEffect: "non-scaling-stroke";
};
export declare const iconFill: {
    readonly fill: "currentColor";
    readonly stroke: "none";
};
export type IconSize = 12 | 16 | 24;
export type IconVariant = "line" | "filled";
export interface IconProps extends Omit<React.SVGAttributes<SVGSVGElement>, "children" | "rotate"> {
    name: IconName;
    size?: IconSize;
    /** Optically weighted line, or filled silhouette of the same figure. */
    variant?: IconVariant;
    /** Same mark, spun around 8,8. Accordion down is chevron-right at 90. */
    rotate?: IconRotate;
}
/** One mark. Size is the drawn square; the viewBox is always 16. */
export declare const Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
/** Inline mark row. One family, current color. */
export declare const Icons: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
/** Full family at 12, 16, and 24, line | filled, grouped. Optical center 8,8. */
export declare const IconCatalog: React.ForwardRefExoticComponent<{
    className?: string;
} & React.RefAttributes<HTMLDivElement>>;
