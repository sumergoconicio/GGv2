import * as React from "react";
export interface VirtualItem {
    id: string;
    label: string;
    content?: React.ReactNode;
}
export interface VirtualListProps extends React.HTMLAttributes<HTMLDivElement> {
    items: VirtualItem[];
    label: string;
    /** Fixed row height, at least 44px. */
    rowHeight?: number;
    height?: number;
    overscan?: number;
    emptyLabel?: string;
}
/** Fixed-height windowing with a retained focused row and keyboard navigation. */
export declare const VirtualList: React.ForwardRefExoticComponent<VirtualListProps & React.RefAttributes<HTMLDivElement>>;
