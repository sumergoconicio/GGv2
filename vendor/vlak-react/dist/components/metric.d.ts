import * as React from "react";
export interface MetricProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
    label: React.ReactNode;
    value: number | string;
    unit?: React.ReactNode;
    description?: React.ReactNode;
    comparison?: React.ReactNode;
    /** Optional trend visualization, for example an existing Sparkline. */
    trend?: React.ReactNode;
    locale?: string;
    formatOptions?: Intl.NumberFormatOptions;
}
/** A numeric reading with stable baseline, tabular figures, and an explicit unit. */
export declare const Metric: React.ForwardRefExoticComponent<MetricProps & React.RefAttributes<HTMLDivElement>>;
