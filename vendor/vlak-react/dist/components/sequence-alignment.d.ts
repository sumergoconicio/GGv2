import * as React from "react";
export interface AlignedRead {
    id: string;
    label: string;
    sequence: string;
}
/** One-based aligned column indexes, independent of supplied genomic positions. */
export interface AlignmentSelection {
    startColumn: number;
    endColumn: number;
}
export interface SequenceAlignmentProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue"> {
    label: string;
    contig: string;
    referenceLabel: string;
    referenceSequence: string;
    /** One supplied one-based reference position per column; null means a reference gap. */
    positions: readonly (number | null)[];
    reads: readonly AlignedRead[];
    value?: AlignmentSelection | null;
    defaultValue?: AlignmentSelection | null;
    onValueChange?: (value: AlignmentSelection | null) => void;
    readOnly?: boolean;
}
/** A bounded window of already aligned strings; reference positions and gaps are caller-supplied. */
export declare const SequenceAlignment: React.ForwardRefExoticComponent<SequenceAlignmentProps & React.RefAttributes<HTMLDivElement>>;
