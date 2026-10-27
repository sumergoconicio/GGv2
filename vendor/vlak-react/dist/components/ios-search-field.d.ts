import * as React from "react";
export interface IOSSearchFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "value" | "defaultValue" | "children"> {
    value?: string;
    defaultValue?: string;
    /** Fires when typing or using the clear action. */
    onValueChange?: (value: string) => void;
    clearLabel?: string;
}
/** A 48px search capsule with a native input and an explicit clear target. */
export declare const IOSSearchField: React.ForwardRefExoticComponent<IOSSearchFieldProps & React.RefAttributes<HTMLInputElement>>;
