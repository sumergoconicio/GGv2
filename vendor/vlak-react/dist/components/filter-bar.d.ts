import * as React from "react";
export interface ActiveFilter {
    id: string;
    label: string;
}
export interface FilterBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue"> {
    value?: ActiveFilter[];
    defaultValue?: ActiveFilter[];
    onValueChange?: (filters: ActiveFilter[]) => void;
    resultCount?: number;
    label?: string;
}
/** Removable active filters and result count. Supply filter editors as children. */
export declare const FilterBar: React.ForwardRefExoticComponent<FilterBarProps & React.RefAttributes<HTMLDivElement>>;
