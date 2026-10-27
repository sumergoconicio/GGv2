import * as React from "react";
export interface FileUploadRejection {
    file: File;
    reason: string;
}
export interface FileUploadContext {
    signal: AbortSignal;
    onProgress: (percentage: number) => void;
}
export interface FileUploadProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> {
    value?: File[];
    defaultValue?: File[];
    onValueChange?: (files: File[]) => void;
    accept?: string;
    multiple?: boolean;
    maxFiles?: number;
    maxSize?: number;
    disabled?: boolean;
    name?: string;
    label?: string;
    description?: React.ReactNode;
    onReject?: (rejections: FileUploadRejection[]) => void;
    /** Optional transport supplied by the app. Omit to collect files without uploading. */
    onUpload?: (file: File, context: FileUploadContext) => Promise<void>;
}
/** Validated file selection, with an optional cancellable upload transport. */
export declare const FileUpload: React.ForwardRefExoticComponent<FileUploadProps & React.RefAttributes<HTMLInputElement>>;
