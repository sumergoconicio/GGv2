import * as React from "react";
export interface CultureCondition {
    id: string;
    label: string;
    value: React.ReactNode;
}
export interface CultureAction {
    id: string;
    label: string;
    disabled?: boolean;
}
export interface CultureObservation {
    id: string;
    label: string;
    /** An offset-bearing timestamp. Missing or invalid times remain undated and sort last. */
    dateTime: string | null;
    timeLabel?: string;
    status?: string | null;
    notes?: React.ReactNode;
}
export interface CultureLogProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
    cultureId: string;
    sampleId: string;
    observations: readonly CultureObservation[];
    medium?: React.ReactNode;
    status?: string | null;
    conditions?: readonly CultureCondition[];
    actions?: readonly CultureAction[];
    /** Requests a host recording action without changing any supplied observation or status. */
    onAction?: (actionId: string) => void;
    pending?: boolean;
    order?: "oldest" | "newest";
}
/** A chronological notebook of supplied culture observations, without protocol recommendations. */
export declare const CultureLog: React.ForwardRefExoticComponent<CultureLogProps & React.RefAttributes<HTMLDivElement>>;
