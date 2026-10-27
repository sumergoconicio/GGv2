import * as React from "react";
export interface PropertyField {
    id: string;
    label: string;
    type?: "text" | "number" | "select" | "switch";
    unit?: string;
    options?: Array<{
        value: string;
        label: string;
    }>;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    description?: string;
}
export type PropertyValues = Record<string, string | number | boolean>;
export interface PropertyGridProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue"> {
    fields: PropertyField[];
    value?: PropertyValues;
    defaultValue?: PropertyValues;
    onValueChange?: (values: PropertyValues) => void;
    label?: string;
}
/** Editable property rows with shared label/value/unit alignment. */
export declare const PropertyGrid: React.ForwardRefExoticComponent<PropertyGridProps & React.RefAttributes<HTMLDivElement>>;
