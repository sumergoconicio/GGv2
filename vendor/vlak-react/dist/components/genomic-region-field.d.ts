import * as React from "react";
export interface GenomicContig {
    id: string;
    label?: string;
    length: number;
}
export interface GenomicRegion {
    contig: string | null;
    start: number | null;
    end: number | null;
}
export interface GenomicRegionFieldProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "defaultValue"> {
    label: React.ReactNode;
    /** Fixed reference name or accession, submitted with the region. */
    reference: string;
    contigs: readonly GenomicContig[];
    value?: GenomicRegion;
    defaultValue?: GenomicRegion;
    onValueChange?: (value: GenomicRegion) => void;
    required?: boolean;
    readOnly?: boolean;
    description?: React.ReactNode;
}
/** A region in one-based inclusive coordinates. No assembly or half-open conversion is performed. */
export declare const GenomicRegionField: React.ForwardRefExoticComponent<GenomicRegionFieldProps & React.RefAttributes<HTMLFieldSetElement>>;
