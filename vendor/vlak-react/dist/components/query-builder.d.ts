import * as React from "react";
export interface QueryField {
    id: string;
    label: string;
    type?: "text" | "number";
}
export interface QueryRule {
    id: string;
    field: string;
    operator: "is" | "is-not" | "contains" | "greater-than" | "less-than";
    value: string;
}
export interface QueryGroup {
    id: string;
    combinator: "and" | "or";
    rules: Array<QueryRule | QueryGroup>;
}
export interface QueryBuilderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue"> {
    fields: QueryField[];
    value?: QueryGroup;
    defaultValue?: QueryGroup;
    onValueChange?: (query: QueryGroup) => void;
    label?: string;
    /** Maximum group nesting, capped at eight. */
    maxDepth?: number;
}
/** Human-readable summary only. This is not SQL and never executes a query. */
export declare function describeQuery(group: QueryGroup, fields: QueryField[]): string;
/** A structured filter expression with nested groups and native field editors. */
export declare const QueryBuilder: React.ForwardRefExoticComponent<QueryBuilderProps & React.RefAttributes<HTMLDivElement>>;
