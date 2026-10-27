import * as React from "react";
export type ResponseFeedback = "positive" | "negative" | null;
export type ResponseAction = "copy" | "read" | "feedback" | "share";
export interface ResponseActionsProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Plain text used for copying, narration, and the default share action. */
    text: string;
    /** Built-in controls in display and keyboard order. Omit for all four; duplicates are ignored. */
    actions?: readonly ResponseAction[];
    feedback?: ResponseFeedback;
    defaultFeedback?: ResponseFeedback;
    /** A rejected promise preserves the previous selection and allows retry. */
    onFeedback?: (value: ResponseFeedback) => void | Promise<void>;
    /** Overrides native sharing. Without it, unsupported browsers copy the text. */
    onShare?: () => void | Promise<void>;
    /** Reports this response's narration state for an avatar or other presentation. */
    onReadingChange?: (reading: boolean) => void;
}
/** Compact message actions. Speech and sharing run only after a button activation. */
export declare const ResponseActions: React.ForwardRefExoticComponent<ResponseActionsProps & React.RefAttributes<HTMLDivElement>>;
