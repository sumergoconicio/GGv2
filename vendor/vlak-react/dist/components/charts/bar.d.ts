import * as React from "react";
import { type ChartSeries } from "./frame.js";
export type BarOrientation = "vertical" | "horizontal";
export interface BarChartProps extends React.HTMLAttributes<HTMLDivElement> {
    data?: Array<{
        label: string;
        value: number;
    }>;
    series?: ChartSeries[];
    labels?: string[];
    height?: number;
    orientation?: BarOrientation;
    stacked?: boolean;
    inverted?: boolean;
    grid?: boolean;
    ticks?: number;
    unit?: string;
    yLabel?: string;
    spot?: boolean | string;
    valueFormat?: (value: number) => string;
    /** BCP 47 tag for number formatting; undefined is the reader's own. */
    locale?: string;
}
export declare const BarChart: React.ForwardRefExoticComponent<BarChartProps & React.RefAttributes<HTMLDivElement>>;
