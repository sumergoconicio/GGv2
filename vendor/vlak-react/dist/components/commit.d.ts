import * as React from "react";
export interface CommitFile {
    path: string;
    previousPath?: string;
    status: "added" | "modified" | "deleted" | "renamed";
    additions?: number;
    deletions?: number;
}
export interface CommitProps extends Omit<React.HTMLAttributes<HTMLElement>, "onCopy" | "title"> {
    hash: string;
    message: string;
    author?: React.ReactNode;
    avatar?: React.ReactNode;
    /** ISO date or Date; a supplied timeLabel can use the application's locale or relative clock. */
    timestamp?: string | Date;
    timeLabel?: string;
    files?: CommitFile[];
    defaultOpen?: boolean;
    onFileSelect?: (file: CommitFile) => void;
    onCopy?: (hash: string) => void | Promise<void>;
}
/** Supplied commit metadata and changed files with exact hash copy and optional file navigation. */
export declare const Commit: React.ForwardRefExoticComponent<CommitProps & React.RefAttributes<HTMLElement>>;
