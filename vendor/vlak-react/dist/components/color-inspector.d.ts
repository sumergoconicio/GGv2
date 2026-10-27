import * as React from "react";
export interface InspectorColor {
    hex: string;
    alpha: number | null;
}
export interface ColorInspectorProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "defaultValue" | "onChange"> {
    label: React.ReactNode;
    value?: InspectorColor;
    defaultValue?: InspectorColor;
    /** Receives editable hex text and alpha, including incomplete values. */
    onValueChange?: (value: InspectorColor) => void;
    readOnly?: boolean;
}
/** A data swatch and editable six-digit hex and alpha, on a monochrome shell. */
export declare const ColorInspector: React.ForwardRefExoticComponent<ColorInspectorProps & React.RefAttributes<HTMLFieldSetElement>>;
