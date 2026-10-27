import * as React from "react";
export interface ExperimentCondition {
    id: string;
    label: React.ReactNode;
    value: React.ReactNode;
}
export interface ExperimentAction {
    id: string;
    label: string;
    disabled?: boolean;
}
export interface ExperimentStep {
    id: string;
    label: string;
    status: string;
    details?: React.ReactNode;
    actions?: readonly ExperimentAction[];
    pending?: boolean;
}
export interface ExperimentRunProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
    runId?: string;
    protocol?: React.ReactNode;
    status: string;
    conditions?: readonly ExperimentCondition[];
    steps: readonly ExperimentStep[];
    /** Requests an explicit action. State remains supplied by the application. */
    onAction?: (stepId: string, actionId: string) => void;
}
/** Supplied run metadata and protocol steps, with application-owned transitions. */
export declare const ExperimentRun: React.ForwardRefExoticComponent<ExperimentRunProps & React.RefAttributes<HTMLDivElement>>;
