import * as React from "react";
export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Width over height, e.g. 16 / 9. */
    ratio?: number;
}
export declare const AspectRatio: React.ForwardRefExoticComponent<AspectRatioProps & React.RefAttributes<HTMLDivElement>>;
