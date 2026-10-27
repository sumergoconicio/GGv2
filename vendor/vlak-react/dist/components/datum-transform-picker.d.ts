import * as React from "react";
export interface DatumTransformGrid {
    id: string;
    label: string;
    available: boolean | null;
}
export interface DatumTransformation {
    id: string;
    label: string;
    accuracy?: React.ReactNode;
    area?: React.ReactNode;
    /** The host determines whether this operation can be used. Null means unknown. */
    available: boolean | null;
    unavailableReason?: React.ReactNode;
    /** An empty array explicitly means no support grids are required. */
    grids?: readonly DatumTransformGrid[];
}
export interface DatumTransformPickerProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "defaultValue"> {
    label: React.ReactNode;
    sourceReference: React.ReactNode;
    destinationReference: React.ReactNode;
    transformations: readonly DatumTransformation[];
    /** null means no operation selected; an unknown identifier stays explicitly unavailable. */
    value?: string | null;
    defaultValue?: string | null;
    onValueChange?: (value: string | null) => void;
    description?: React.ReactNode;
    selectionLabel?: string;
    noneLabel?: string;
    required?: boolean;
    readOnly?: boolean;
}
/** Compares host-supplied operations and keeps unavailable alternatives visible. */
export declare const DatumTransformPicker: React.ForwardRefExoticComponent<DatumTransformPickerProps & React.RefAttributes<HTMLFieldSetElement>>;
