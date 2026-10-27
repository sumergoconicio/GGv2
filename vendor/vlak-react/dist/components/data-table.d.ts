import * as React from "react";
export interface DataTableColumn<Row> {
    key: string;
    header: React.ReactNode;
    /** Cell renderer; defaults to the row's value at `key`. */
    render?: (row: Row) => React.ReactNode;
    sortable?: boolean;
    /** Sort accessor; defaults to the row's value at `key`. */
    sortValue?: (row: Row) => string | number;
}
export interface DataTableProps<Row> extends React.HTMLAttributes<HTMLDivElement> {
    columns: Array<DataTableColumn<Row>>;
    rows: Row[];
    rowKey?: (row: Row, index: number) => React.Key;
    emptyLabel?: React.ReactNode;
    caption?: string;
    sort?: DataTableSort | null;
    defaultSort?: DataTableSort | null;
    onSortChange?: (sort: DataTableSort | null) => void;
    selectable?: boolean;
    selectedKeys?: React.Key[];
    defaultSelectedKeys?: React.Key[];
    onSelectionChange?: (keys: React.Key[]) => void;
    filterable?: boolean;
    filter?: string;
    defaultFilter?: string;
    onFilterChange?: (filter: string) => void;
    filterRow?: (row: Row, filter: string) => boolean;
}
export interface DataTableSort {
    key: string;
    dir: "asc" | "desc";
}
/** Sortable rows over the plain rs-table. */
export declare const DataTable: <Row extends Record<string, unknown>>(props: DataTableProps<Row> & React.RefAttributes<HTMLDivElement>) => React.ReactElement;
