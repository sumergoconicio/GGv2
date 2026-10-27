import * as React from "react";
export type HabitStatus = "complete" | "missed" | "skipped" | "unrecorded";
export interface HabitDay {
    /** Application-owned calendar date, used as a key and passed back unchanged. */
    date: string;
    /** Explicit accessible date label; no date or timezone is inferred. */
    label: string;
    status: HabitStatus;
    disabled?: boolean;
}
export interface HabitTrackerProps extends React.HTMLAttributes<HTMLDivElement> {
    label: React.ReactNode;
    description?: React.ReactNode;
    /** A supplied week or another dated range, rendered in the given order. */
    days: HabitDay[];
    /** A completion action requests complete, or unrecorded when clearing completion. */
    onDayChange?: (date: string, status: HabitStatus) => void;
    disabled?: boolean;
    readOnly?: boolean;
}
/** Dated completion records with caller-owned state and no inferred streak. */
export declare const HabitTracker: React.ForwardRefExoticComponent<HabitTrackerProps & React.RefAttributes<HTMLDivElement>>;
