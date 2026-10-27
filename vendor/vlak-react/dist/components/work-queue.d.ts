import * as React from "react";
export interface WorkQueueItem {
    id: string;
    content: React.ReactNode;
    description?: React.ReactNode;
    completed?: boolean;
    disabled?: boolean;
    attachments?: React.ReactNode;
    actions?: React.ReactNode;
}
export interface WorkQueueSection {
    id: string;
    title: string;
    items: readonly WorkQueueItem[];
    defaultOpen?: boolean;
}
export interface WorkQueueProps extends React.HTMLAttributes<HTMLElement> {
    sections: readonly WorkQueueSection[];
    label?: string;
    onItemCheckedChange?: (sectionId: string, itemId: string, checked: boolean) => void;
    emptyMessage?: React.ReactNode;
}
/** Supplied prompt and todo sections. Checking a row requests a change; the application owns scheduling. */
export declare const WorkQueue: React.ForwardRefExoticComponent<WorkQueueProps & React.RefAttributes<HTMLElement>>;
