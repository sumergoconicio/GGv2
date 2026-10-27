import * as React from "react";
export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
    name?: string;
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
}
export declare const RadioGroup: React.ForwardRefExoticComponent<RadioGroupProps & React.RefAttributes<HTMLDivElement>>;
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "value"> {
    value: string;
    label?: React.ReactNode;
}
/** A real native radio inside a RadioGroup; the ink dot mirrors its state. */
export declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>;
