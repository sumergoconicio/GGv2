import * as React from "react";
export interface SchemaProperty {
    name: string;
    type: string;
    required?: boolean;
    description?: string;
    properties?: SchemaProperty[];
    items?: SchemaProperty;
}
export interface SchemaParameter extends SchemaProperty {
    location?: "path" | "query" | "header" | "cookie";
}
export interface SchemaDisplayProps extends React.HTMLAttributes<HTMLElement> {
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS";
    path: string;
    description?: React.ReactNode;
    parameters?: SchemaParameter[];
    requestBody?: SchemaProperty[];
    responseBody?: SchemaProperty[];
    /** Bounds recursive schema rendering. Defaults to 6 levels and 200 properties. */
    maxDepth?: number;
    maxNodes?: number;
}
/** Endpoint documentation with bounded, expandable object and array schemas. */
export declare const SchemaDisplay: React.ForwardRefExoticComponent<SchemaDisplayProps & React.RefAttributes<HTMLElement>>;
