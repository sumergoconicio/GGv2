import * as React from "react";
export interface CoordinateReferenceOption {
    value: string;
    label: string;
    description?: React.ReactNode;
    disabled?: boolean;
}
export interface CoordinateReferenceAxis {
    id: string;
    label: string;
    unit?: string | null;
    min?: number;
    max?: number;
}
export interface CoordinateReferenceValue {
    reference: string | null;
    coordinates: Record<string, number | null>;
}
export interface CoordinateReferenceFieldProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "defaultValue"> {
    label: React.ReactNode;
    /** Two or three axes in the supplied coordinate order. Units are never inferred. */
    axes: readonly CoordinateReferenceAxis[];
    references: readonly CoordinateReferenceOption[];
    value?: CoordinateReferenceValue;
    defaultValue?: CoordinateReferenceValue;
    /** Assigning a reference preserves every numeric value. The host owns reprojection. */
    onValueChange?: (value: CoordinateReferenceValue) => void;
    description?: React.ReactNode;
    referenceLabel?: string;
    unknownReferenceLabel?: string;
    required?: boolean;
    readOnly?: boolean;
}
/** Numeric coordinates and an explicitly assigned reference, without implicit conversion. */
export declare const CoordinateReferenceField: React.ForwardRefExoticComponent<CoordinateReferenceFieldProps & React.RefAttributes<HTMLFieldSetElement>>;
