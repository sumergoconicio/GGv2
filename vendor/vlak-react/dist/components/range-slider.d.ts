import * as React from "react";
export interface RangeSliderProps extends Omit<React.HTMLAttributes<HTMLFieldSetElement>, "onChange" | "defaultValue"> {
    value?: [number, number];
    defaultValue?: [number, number];
    onValueChange?: (value: [number, number]) => void;
    min?: number;
    max?: number;
    step?: number;
    label?: React.ReactNode;
    lowerLabel?: string;
    upperLabel?: string;
    name?: string;
    disabled?: boolean;
    formatValue?: (value: number) => string;
}
export declare const RangeSlider: React.ForwardRefExoticComponent<RangeSliderProps & React.RefAttributes<HTMLFieldSetElement>>;
