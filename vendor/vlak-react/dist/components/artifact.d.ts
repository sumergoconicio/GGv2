import * as React from "react";
export interface ArtifactProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
    title: React.ReactNode;
    description?: React.ReactNode;
    actions?: React.ReactNode;
    footer?: React.ReactNode;
    /** Requests closing; the application owns visibility and focus restoration. */
    onClose?: () => void;
    closeLabel?: string;
    /** Optional height cap for long generated content. */
    maxHeight?: React.CSSProperties["maxHeight"];
}
/** Generated content with header actions, a close request and an optional scroll region. */
export declare const Artifact: React.ForwardRefExoticComponent<ArtifactProps & React.RefAttributes<HTMLElement>>;
