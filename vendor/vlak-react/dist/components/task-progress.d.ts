import * as React from "react";
export type TaskState = "pending" | "running" | "paused" | "complete" | "error" | "cancelled";
export interface TaskPhase {
    id: string;
    label: string;
    state: "pending" | "active" | "complete" | "error";
}
export interface TaskProgressProps extends React.HTMLAttributes<HTMLElement> {
    label: string;
    state: TaskState;
    /** Percentage, omit while the amount of work is unknown. */
    value?: number;
    phases?: TaskPhase[];
    description?: React.ReactNode;
    elapsedSeconds?: number;
    remainingSeconds?: number;
    onCancel?: () => void | Promise<void>;
    onRetry?: () => void | Promise<void>;
}
/** Honest long-running task state, including unknown progress and action failures. */
export declare const TaskProgress: React.ForwardRefExoticComponent<TaskProgressProps & React.RefAttributes<HTMLElement>>;
