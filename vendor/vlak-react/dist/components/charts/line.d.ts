import * as React from "react";
import { type ChartAnnotation, type ChartSeries } from "./frame.js";
export interface LineChartProps extends React.HTMLAttributes<HTMLDivElement> {
    series: ChartSeries[];
    labels?: string[];
    height?: number;
    /** Fill under the first series. Prefer AreaChart for a dedicated area. */
    area?: boolean;
    stacked?: boolean;
    inverted?: boolean;
    grid?: boolean;
    ticks?: number;
    unit?: string;
    yLabel?: string;
    xLabel?: string;
    annotations?: ChartAnnotation[];
    domain?: [number, number];
    spot?: boolean | string;
    valueFormat?: (value: number) => string;
    /** BCP 47 tag for number formatting; undefined is the reader's own. */
    locale?: string;
}
export declare const LineChart: React.ForwardRefExoticComponent<LineChartProps & React.RefAttributes<HTMLDivElement>>;
