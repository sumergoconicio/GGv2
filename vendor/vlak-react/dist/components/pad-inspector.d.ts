import * as React from "react";
export interface PadInspectorMeasurement {
    id: string;
    label: string;
    value: number | string | null;
    unit: string | null;
}
export interface PadInspectorPad {
    id: string;
    number?: string | null;
    reference?: string | null;
    net?: string | null;
    /** null or omitted means unknown; an empty list means none recorded. */
    layers?: readonly string[] | null;
    type?: string | null;
    shape?: string | null;
    geometry?: readonly PadInspectorMeasurement[];
    disabled?: boolean;
}
export interface PadInspectorProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "defaultValue"> {
    label: React.ReactNode;
    pads: readonly PadInspectorPad[];
    value?: string | null;
    defaultValue?: string | null;
    /** Requests pad selection only. The host owns board and schematic cross-highlighting. */
    onValueChange?: (id: string | null) => void;
    boardLabel?: React.ReactNode;
    description?: React.ReactNode;
    selectionLabel?: string;
    required?: boolean;
    readOnly?: boolean;
}
/** Inspects supplied pad records without inferring connectivity, shape or dimensions. */
export declare const PadInspector: React.ForwardRefExoticComponent<PadInspectorProps & React.RefAttributes<HTMLFieldSetElement>>;
