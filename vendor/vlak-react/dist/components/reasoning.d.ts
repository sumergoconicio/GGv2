import * as React from "react";
export type ReasoningStatus = "streaming" | "complete";
export interface ReasoningProps extends Omit<React.DetailsHTMLAttributes<HTMLDetailsElement>, "title"> {
    title?: React.ReactNode;
    /** Describes application-supplied progress, without generating a thinking trace. */
    status?: ReasoningStatus;
    statusLabel?: string;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    /** An inline disclosure for message activity, or a framed panel. */
    variant?: "panel" | "inline";
    /** Optional elapsed time supplied by the application, in milliseconds. */
    durationMs?: number;
    /** Measure this component's streaming interval. Off by default. */
    measureDuration?: boolean;
    /** Open when a new streaming interval begins. Manual disclosure remains the default. */
    autoExpand?: boolean;
    /** Close once after completion unless the reader manually changed the disclosure. */
    autoCollapseDelay?: number | false;
}
/** A native disclosure for a work summary supplied by the application. */
export declare const Reasoning: React.ForwardRefExoticComponent<ReasoningProps & React.RefAttributes<HTMLDetailsElement>>;
