import * as React from "react";
export interface EvidenceChecklistAction {
    id: string;
    label: string;
    disabled?: boolean;
}
export interface EvidenceChecklistItem {
    id: string;
    label: string;
    /** A supplied required/optional/unknown requirement label. */
    requirement?: React.ReactNode;
    /** Record status supplied by the application, never inferred from a filename. */
    status: React.ReactNode;
    description?: React.ReactNode;
    fileName?: React.ReactNode;
    receivedLabel?: React.ReactNode;
    actions?: readonly EvidenceChecklistAction[];
    pending?: boolean;
    pendingLabel?: React.ReactNode;
    disabled?: boolean;
}
export interface EvidenceChecklistProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onAction"> {
    label: string;
    items: readonly EvidenceChecklistItem[];
    /** Application-supplied coverage summary; the component does not count approvals. */
    summary?: React.ReactNode;
    emptyLabel?: React.ReactNode;
    /** Requests an action only; uploads, removals, and resulting statuses belong to the caller. */
    onAction?: (itemId: string, actionId: string) => void;
}
/** Evidence requirements, file records, and verification status with controlled action requests. */
export declare const EvidenceChecklist: React.ForwardRefExoticComponent<EvidenceChecklistProps & React.RefAttributes<HTMLDivElement>>;
