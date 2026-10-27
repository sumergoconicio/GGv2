import * as React from "react";
import { type LineChartProps } from "./line.js";
export type SmallMultiple = {
    title: string;
    series: LineChartProps["series"];
    labels: string[];
};
export interface SmallMultiplesProps extends React.HTMLAttributes<HTMLDivElement> {
    panels: SmallMultiple[];
    height?: number;
    unit?: string;
    grid?: boolean;
    ticks?: number;
    spot?: boolean | string;
    /** Compare panels on one scale by default. Disable only for independent trends. */
    sharedDomain?: boolean;
    /** BCP 47 tag for number formatting; undefined is the reader's own. */
    locale?: string;
}
export declare const SmallMultiples: React.ForwardRefExoticComponent<SmallMultiplesProps & React.RefAttributes<HTMLDivElement>>;
