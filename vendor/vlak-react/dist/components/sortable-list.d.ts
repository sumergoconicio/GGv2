import * as React from "react";
export interface SortableItem {
    id: string;
    label: string;
    content?: React.ReactNode;
    disabled?: boolean;
}
export interface SortableListProps extends Omit<React.HTMLAttributes<HTMLOListElement>, "defaultValue"> {
    value?: SortableItem[];
    defaultValue?: SortableItem[];
    onValueChange?: (items: SortableItem[]) => void;
    label?: string;
}
/** Reordering through drag, named move buttons, or Alt and the arrow keys. */
export declare const SortableList: React.ForwardRefExoticComponent<SortableListProps & React.RefAttributes<HTMLOListElement>>;
