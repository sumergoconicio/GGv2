import * as React from "react";
export interface OverflowAction {
    id: string;
    label: string;
    onAction: () => void;
    disabled?: boolean;
}
export interface OverflowListProps extends React.HTMLAttributes<HTMLDivElement> {
    items: OverflowAction[];
    label?: string;
    /** Upper bound on visible priority actions, available width may show fewer. */
    maxVisible?: number;
}
/** Keeps priority actions in order and moves the remainder into a keyboard menu. */
export declare const OverflowList: React.ForwardRefExoticComponent<OverflowListProps & React.RefAttributes<HTMLDivElement>>;
