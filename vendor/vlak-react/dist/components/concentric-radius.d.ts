import * as React from "react";
/** The exact inner circle shares its outer circle's center. No iterative fitting is needed. */
export declare function innerRadius(outerRadius: number, padding: number, _options?: {
    lr?: number;
    epochs?: number;
}): number;
export declare function concentricInner(outer: number, padding: number): number;
export declare function concentricOuter(inner: number, padding: number): number;
export interface NestProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Outer radius in px. Nested nests inherit the parent inner radius. */
    radius?: number;
    /** Padding in px. Inset for Steve’s innerRadius. */
    pad?: number;
}
export declare const Nest: React.ForwardRefExoticComponent<NestProps & React.RefAttributes<HTMLDivElement>>;
export declare const NestInner: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
