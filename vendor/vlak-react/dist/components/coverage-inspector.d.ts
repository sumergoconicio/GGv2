import * as React from "react";
export interface CoverageLocus {
    position: number;
    depth: number | null;
    bases?: Readonly<Record<string, number | null>>;
    forward?: number | null;
    reverse?: number | null;
}
export interface CoverageInspectorProps extends Omit<React.HTMLAttributes<HTMLElement>, "defaultValue"> {
    label: string;
    contig: string;
    reference?: string;
    loci: readonly CoverageLocus[];
    /** A supplied one-based position, not an array index. */
    value?: number | null;
    defaultValue?: number | null;
    onValueChange?: (position: number | null) => void;
}
/** Supplied coverage and counts, with missing depth distinct from recorded zero and no variant calls. */
export declare const CoverageInspector: React.ForwardRefExoticComponent<CoverageInspectorProps & React.RefAttributes<HTMLElement>>;
