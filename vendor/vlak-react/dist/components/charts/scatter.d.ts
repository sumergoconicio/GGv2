import * as React from "react";
import { type ChartAnnotation, type ChartPoint } from "./frame.js";
export type ScatterChartProps = React.HTMLAttributes<HTMLDivElement> & {
    points: ChartPoint[];
    height?: number;
    unit?: string;
    xLabel?: string;
    yLabel?: string;
    xDomain?: [number, number];
    yDomain?: [number, number];
    grid?: boolean;
    ticks?: number;
    annotations?: ChartAnnotation[];
    valueFormat?: (n: number) => string;
    spot?: boolean | string;
    /** BCP 47 tag for number formatting; undefined is the reader's own. */
    locale?: string;
};
export declare const ScatterChart: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    points: ChartPoint[];
    height?: number;
    unit?: string;
    xLabel?: string;
    yLabel?: string;
    xDomain?: [number, number];
    yDomain?: [number, number];
    grid?: boolean;
    ticks?: number;
    annotations?: ChartAnnotation[];
    valueFormat?: (n: number) => string;
    spot?: boolean | string;
    /** BCP 47 tag for number formatting; undefined is the reader's own. */
    locale?: string;
} & React.RefAttributes<HTMLDivElement>>;
