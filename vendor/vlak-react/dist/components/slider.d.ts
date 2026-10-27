import * as React from "react";
export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "value" | "defaultValue" | "onChange"> {
    value?: number;
    defaultValue?: number;
    min?: number;
    max?: number;
    step?: number;
    onValueChange?: (value: number) => void;
}
/** A native range input drives the ink track. */
export declare const Slider: React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<HTMLInputElement>>;
