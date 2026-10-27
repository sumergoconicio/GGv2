import * as React from "react";
export type SleepState = "asleep" | "awake" | "unknown";
export interface SleepInterval {
    id: string;
    /** Numeric offsets in minutes on the same caller-owned timeline. */
    start: number;
    end: number;
    /** Explicit display labels, including dates or timezone when needed. */
    startLabel: string;
    endLabel: string;
    state: SleepState;
}
export interface SleepTimelineProps extends React.HTMLAttributes<HTMLElement> {
    label: React.ReactNode;
    description?: React.ReactNode;
    intervals: SleepInterval[];
    /** Visible window in minutes. All intervals must fit within it. */
    start: number;
    end: number;
    startLabel: string;
    endLabel: string;
}
/** Supplied sleep and wake intervals, with gaps exposed as unrecorded time. */
export declare const SleepTimeline: React.ForwardRefExoticComponent<SleepTimelineProps & React.RefAttributes<HTMLElement>>;
