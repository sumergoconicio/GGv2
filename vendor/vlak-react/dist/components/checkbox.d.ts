import * as React from "react";
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: React.ReactNode;
    indeterminate?: boolean;
    onCheckedChange?: (checked: boolean) => void;
}
/** A real native checkbox; the visible 16px box mirrors its state. */
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
