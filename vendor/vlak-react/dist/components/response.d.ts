import * as React from "react";
export type ResponseStatus = "streaming" | "complete" | "error" | "stopped";
export interface ResponseState {
    from: "user" | "assistant";
    author: React.ReactNode;
    status: ResponseStatus;
    statusLabel: string;
    errorMessage?: string;
}
export interface ResponseParts {
    /** The complete identity and status row. Use this or its individual parts. */
    header: React.ReactNode;
    avatar: React.ReactNode;
    author: React.ReactNode;
    status: React.ReactNode;
    content: React.ReactNode;
    error: React.ReactNode;
    actions: React.ReactNode;
}
/** Reads speaker and response status from a custom descendant without threading props. */
export declare function useResponse(): ResponseState;
export interface ResponseProps extends React.HTMLAttributes<HTMLElement> {
    /** The speaker's identity, separate from the native ARIA role. */
    from?: "user" | "assistant";
    author?: React.ReactNode;
    /** An application-owned avatar beside the author. */
    avatar?: React.ReactNode;
    status?: ResponseStatus;
    /** A short status phrase. Keep token-by-token updates in children. */
    statusLabel?: string;
    errorMessage?: string;
    /** Explicit text to copy. Omit to hide the copy action. */
    copyText?: string;
    copyLabel?: string;
    copiedLabel?: string;
    copyErrorLabel?: string;
    /** Application-owned actions, such as retry or feedback buttons. */
    actions?: React.ReactNode;
    /** Rearranges the same content and controls. Render each part once; keep the status announcement. */
    renderLayout?: (parts: ResponseParts, state: ResponseState) => React.ReactNode;
    /** Rendered content. Supply your own markdown renderer here when needed. */
    children?: React.ReactNode;
}
/** One message with application-rendered content and a separate status announcement. */
export declare const Response: React.ForwardRefExoticComponent<ResponseProps & React.RefAttributes<HTMLElement>>;
