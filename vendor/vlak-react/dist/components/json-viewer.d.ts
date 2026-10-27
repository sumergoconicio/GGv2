import * as React from "react";
export interface JSONViewerProps extends React.HTMLAttributes<HTMLDivElement> {
    data: unknown;
    label?: string;
    searchable?: boolean;
    /** Bounds rendering of unusually deep data. */
    maxDepth?: number;
    /** Maximum children shown per object or array. */
    maxEntries?: number;
    /** Total node budget across the inspected document. */
    maxNodes?: number;
    /** Maximum string characters displayed per value, before escaping. */
    maxStringLength?: number;
}
/** Bounded JSON inspection using native disclosures and path/value search. */
export declare const JSONViewer: React.ForwardRefExoticComponent<JSONViewerProps & React.RefAttributes<HTMLDivElement>>;
