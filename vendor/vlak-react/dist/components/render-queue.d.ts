import * as React from "react";
export type RenderJobStatus = "queued" | "rendering" | "complete" | "failed" | "canceled";
export interface RenderJob {
    id: string;
    label: string;
    status: RenderJobStatus; /** Completion percentage from 0 to 100. */
    progress?: number | null;
    detail?: React.ReactNode;
}
export interface RenderQueueProps extends React.HTMLAttributes<HTMLDivElement> {
    label: React.ReactNode;
    jobs: RenderJob[];
    onCancel?: (id: string) => void;
    onRetry?: (id: string) => void;
    disabled?: boolean;
}
/** Host-owned render jobs and available cancel or retry actions. */
export declare const RenderQueue: React.ForwardRefExoticComponent<RenderQueueProps & React.RefAttributes<HTMLDivElement>>;
