import * as React from "react";
export interface ParameterKnobProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "value" | "defaultValue" | "onChange" | "min" | "max" | "step"> {
    label: React.ReactNode;
    value?: number;
    defaultValue?: number;
    onValueChange?: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    unit?: string;
}
/** A rotary display driven by a native horizontal range input. */
export declare const ParameterKnob: React.ForwardRefExoticComponent<ParameterKnobProps & React.RefAttributes<HTMLInputElement>>;
