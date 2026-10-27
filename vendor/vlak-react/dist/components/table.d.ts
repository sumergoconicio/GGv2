import * as React from "react";
export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
}
export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
    /** 2px rules, ink cells. */
    total?: boolean;
}
export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
    total?: boolean;
}
export interface TableHeaderCellProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
}
/** Open grid, 1px row rules, last column right-aligned. */
export declare const Table: React.ForwardRefExoticComponent<TableProps & React.RefAttributes<HTMLTableElement>>;
export declare const TableHead: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
export declare const TableBody: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
export declare const TableRow: React.ForwardRefExoticComponent<TableRowProps & React.RefAttributes<HTMLTableRowElement>>;
export declare const TableTh: React.ForwardRefExoticComponent<TableHeaderCellProps & React.RefAttributes<HTMLTableCellElement>>;
export declare const TableTd: React.ForwardRefExoticComponent<TableCellProps & React.RefAttributes<HTMLTableCellElement>>;
