import * as React from "react";
export type ToolCallState = "queued" | "running" | "complete" | "error";
export interface ToolCallProps extends Omit<React.DetailsHTMLAttributes<HTMLDetailsElement>, "title"> {
    /** Name of the application-owned tool operation. */
    title: React.ReactNode;
    state?: ToolCallState;
    /** More precise supplied progress, for example approval or input preparation. */
    statusLabel?: string;
    /** Strings and numbers are rendered as plain preformatted text. Format objects before passing them. */
    input?: React.ReactNode;
    output?: React.ReactNode;
    error?: string;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
}
/** Displays supplied tool activity. The application owns execution and its state. */
export declare const ToolCall: React.ForwardRefExoticComponent<ToolCallProps & React.RefAttributes<HTMLDetailsElement>>;
/** Provider-neutral shape for the AI SDK static and dynamic tool lifecycle. */
export interface ToolPartPresentationInput {
    type: string;
    toolName?: string;
    state: "input-streaming" | "input-available" | "approval-requested" | "approval-responded" | "output-available" | "output-error" | "output-denied";
    approval?: {
        id: string;
        approved?: boolean;
        isAutomatic?: boolean;
    };
    input?: unknown;
    output?: unknown;
    errorText?: string;
}
export interface ToolPartPresentation {
    title: string;
    state: ToolCallState;
    statusLabel: string;
    approvalStatus?: "pending" | "accepted" | "rejected";
    approvalId?: string;
    input?: unknown;
    output?: unknown;
    error?: string;
}
/** Maps supplied tool lifecycle without inferring that ready arguments have started execution. */
export declare function getToolCallPresentation(part: ToolPartPresentationInput): ToolPartPresentation;
