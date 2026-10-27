import * as React from "react";
export interface MasterDetailItem {
    id: string;
    label: string;
    description?: string;
    detail: React.ReactNode;
}
export interface MasterDetailProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue"> {
    items: MasterDetailItem[];
    label?: string;
    value?: string | null;
    defaultValue?: string | null;
    onValueChange?: (id: string | null) => void;
    emptyLabel?: string;
}
/** List/detail selection with a mobile back path and preserved item focus. */
export declare const MasterDetail: React.ForwardRefExoticComponent<MasterDetailProps & React.RefAttributes<HTMLDivElement>>;
