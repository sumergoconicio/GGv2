import * as React from "react";
export type HistogramBin = {
    label: string;
    count: number;
};
export interface HistogramProps extends React.HTMLAttributes<HTMLDivElement> {
    bins: HistogramBin[];
    height?: number;
    unit?: string;
    yLabel?: string;
    grid?: boolean;
    ticks?: number;
    valueFormat?: (n: number) => string;
    spot?: boolean | string;
    /** BCP 47 tag for number formatting; undefined is the reader's own. */
    locale?: string;
}
export declare const Histogram: React.ForwardRefExoticComponent<HistogramProps & React.RefAttributes<HTMLDivElement>>;
