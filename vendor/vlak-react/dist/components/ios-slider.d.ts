import * as React from "react";
export interface IOSSliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "value" | "defaultValue" | "min" | "max" | "step" | "children"> {
    value?: number;
    defaultValue?: number;
    min?: number;
    max?: number;
    step?: number | "any";
    onValueChange?: (value: number) => void;
}
/** Native range keyboard and form behavior beneath the iOS pill thumb. */
export declare const IOSSlider: React.ForwardRefExoticComponent<IOSSliderProps & React.RefAttributes<HTMLInputElement>>;
