import * as React from "react";
export type HealthMetricStatus = "available" | "pending" | "unavailable" | "stale";
export interface HealthMetricProps extends React.HTMLAttributes<HTMLDivElement> {
    label: React.ReactNode;
    /** A supplied reading. Zero is a reading; empty strings and non-finite numbers are missing. */
    value?: number | string | null;
    unit?: string;
    /** Supplied by the application. Freshness is never inferred from the timestamp. */
    status?: HealthMetricStatus;
    statusLabel?: React.ReactNode;
    dateTime?: string;
    /** Human-readable time, including the relevant timezone. Falls back to dateTime. */
    timeLabel?: string;
    source?: React.ReactNode;
    description?: React.ReactNode;
}
/** A sourced reading with explicit data availability, without clinical interpretation. */
export declare const HealthMetric: React.ForwardRefExoticComponent<HealthMetricProps & React.RefAttributes<HTMLDivElement>>;
