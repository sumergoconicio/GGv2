import * as React from "react";
export interface AttachmentData {
    id: string;
    name: string;
    mediaType?: string;
    size?: number;
    url?: string;
    status?: "ready" | "uploading" | "error";
    progress?: number;
    error?: string;
}
export type AttachmentVariant = "grid" | "inline" | "list";
export interface AttachmentsProps extends React.HTMLAttributes<HTMLUListElement> {
    label?: string;
    variant?: AttachmentVariant;
}
export interface AttachmentProps extends React.HTMLAttributes<HTMLLIElement> {
    data: AttachmentData;
    /** Overrides the layout inherited from Attachments. */
    variant?: AttachmentVariant;
    disabled?: boolean;
    onRemove?: () => void;
    onRetry?: () => void;
    /** Trusted application content replaces the automatic media preview. */
    preview?: React.ReactNode;
}
/** A responsive list of application-owned files and media. */
export declare const Attachments: React.ForwardRefExoticComponent<AttachmentsProps & React.RefAttributes<HTMLUListElement>>;
/** File metadata and native media previews, with explicit application actions. */
export declare const Attachment: React.ForwardRefExoticComponent<AttachmentProps & React.RefAttributes<HTMLLIElement>>;
/** Creates local preview URLs and revokes them when files leave the list or the owner unmounts. */
export declare function useFileAttachments(files: readonly File[]): AttachmentData[];
