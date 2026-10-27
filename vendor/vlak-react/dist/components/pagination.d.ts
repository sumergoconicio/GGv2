import * as React from "react";
export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
    /** Current 1-based page. */
    page: number;
    count: number;
    onPageChange?: (page: number) => void;
    /** Pages kept visible around the current one. */
    siblings?: number;
}
export declare const Pagination: React.ForwardRefExoticComponent<PaginationProps & React.RefAttributes<HTMLElement>>;
