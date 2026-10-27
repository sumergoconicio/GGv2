import * as React from "react";
export interface DiffLine {
    kind: "same" | "removed" | "added";
    text: string;
    before?: number;
    after?: number;
}
/** Line LCS with bounded memory. Large changes use a truthful coarse replacement. */
export declare function diffLines(before: string, after: string): DiffLine[];
export interface DiffViewerProps extends React.HTMLAttributes<HTMLDivElement> {
    before: string;
    after: string;
    label?: string;
    view?: "unified" | "split";
    defaultView?: "unified" | "split";
    onViewChange?: (view: "unified" | "split") => void;
    /** Maximum rendered rows per page, clamped to 1–1000. */
    pageSize?: number;
}
/** Monochrome before/after comparison with explicit change labels, never color alone. */
export declare const DiffViewer: React.ForwardRefExoticComponent<DiffViewerProps & React.RefAttributes<HTMLDivElement>>;
