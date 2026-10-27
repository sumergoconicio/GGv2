import * as React from "react";
export interface SpacingValue {
    top: number | null;
    right: number | null;
    bottom: number | null;
    left: number | null;
}
export interface SpacingControlProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "defaultValue" | "onChange"> {
    label: React.ReactNode;
    value?: SpacingValue;
    defaultValue?: SpacingValue;
    onValueChange?: (value: SpacingValue) => void;
    linked?: boolean;
    defaultLinked?: boolean;
    onLinkedChange?: (linked: boolean) => void;
    unit?: string;
    min?: number;
    max?: number;
    step?: number;
    readOnly?: boolean;
}
/** Four native numeric fields; linking applies the next edit to every side. */
export declare const SpacingControl: React.ForwardRefExoticComponent<SpacingControlProps & React.RefAttributes<HTMLFieldSetElement>>;
