import * as React from "react";
export type LabResultStatus = "final" | "pending" | "unavailable" | "amended";
export interface LabResult {
    id: string;
    name: string;
    value?: number | string | null;
    unit?: string;
    status?: LabResultStatus;
    /** A supplied textual result flag or contextual status. No flag is calculated. */
    statusLabel?: React.ReactNode;
    minimum?: number | null;
    maximum?: number | null;
    rangeLabel?: string;
    dateTime?: string;
    timeLabel?: string;
    note?: React.ReactNode;
}
export interface LabResultsProps extends Omit<React.HTMLAttributes<HTMLUListElement>, "results"> {
    /** Accessible collection name. */
    label: string;
    results: readonly LabResult[];
    emptyLabel?: string;
}
/** Supplied laboratory results with explicit report states and optional reference intervals. */
export declare const LabResults: React.ForwardRefExoticComponent<LabResultsProps & React.RefAttributes<HTMLUListElement>>;
