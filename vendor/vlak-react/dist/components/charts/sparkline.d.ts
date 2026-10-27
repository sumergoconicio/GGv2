import * as React from "react";
export interface SparklineProps extends React.HTMLAttributes<HTMLSpanElement> {
    values: Array<number | null>;
    width?: number;
    height?: number;
    spot?: boolean | string;
    /** What the trend is of; leads the accessible name and the table. */
    label?: string;
    unit?: string;
    /** BCP 47 tag for number formatting; undefined is the reader's own. */
    locale?: string;
}
export declare const Sparkline: React.ForwardRefExoticComponent<SparklineProps & React.RefAttributes<HTMLSpanElement>>;
