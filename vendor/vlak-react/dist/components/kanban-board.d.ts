import * as React from "react";
export interface KanbanColumn {
    id: string;
    label: string;
}
export interface KanbanCard {
    id: string;
    title: string;
    columnId: string;
    description?: React.ReactNode;
    disabled?: boolean;
}
export interface KanbanBoardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue"> {
    columns: readonly KanbanColumn[];
    value?: KanbanCard[];
    defaultValue?: KanbanCard[];
    onValueChange?: (cards: KanbanCard[]) => void;
    label?: string;
}
/** Movable cards with drag, keyboard reordering, and named destination selectors. */
export declare const KanbanBoard: React.ForwardRefExoticComponent<KanbanBoardProps & React.RefAttributes<HTMLDivElement>>;
