import * as React from "react";
export interface NumberFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "value" | "defaultValue" | "onChange" | "size" | "min" | "max" | "step"> {
    value?: number | null;
    defaultValue?: number | null;
    onValueChange?: (value: number | null) => void;
    min?: number;
    max?: number;
    step?: number;
    label?: React.ReactNode;
    unit?: string;
    incrementLabel?: string;
    decrementLabel?: string;
    /** Stack the increase button above decrease at the end of the field. */
    controlsPlacement?: "inline" | "stacked";
}
/** Numeric input with native validation and bounded increment/decrement actions. */
export declare const NumberField: React.ForwardRefExoticComponent<NumberFieldProps & React.RefAttributes<HTMLInputElement>>;
