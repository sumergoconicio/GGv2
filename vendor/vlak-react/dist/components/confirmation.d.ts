import * as React from "react";
export type ConfirmationStatus = "pending" | "accepted" | "rejected";
type Decision = Exclude<ConfirmationStatus, "pending">;
export interface ConfirmationProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
    /** Names the proposed action and the confirmation region. */
    title: React.ReactNode;
    status?: ConfirmationStatus;
    defaultStatus?: ConfirmationStatus;
    onStatusChange?: (status: Decision) => void;
    /** Records approval. A rejection keeps the proposal pending and allows retry. */
    onConfirm: () => void | Promise<void>;
    onReject?: () => void | Promise<void>;
    confirmLabel?: string;
    rejectLabel?: string;
    disabled?: boolean;
}
/** Records a decision about an application-owned action without executing a tool. */
export declare const Confirmation: React.ForwardRefExoticComponent<ConfirmationProps & React.RefAttributes<HTMLElement>>;
export {};
