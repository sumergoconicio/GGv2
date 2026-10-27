import * as React from "react";
export interface TimeFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "value" | "defaultValue" | "onChange"> {
    /** A 24-hour HTML time value, HH:mm or HH:mm:ss. The browser localizes editing. */
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    label?: React.ReactNode;
    hint?: React.ReactNode;
    error?: React.ReactNode;
}
/** The platform time editor, including its locale, keyboard and step validation. */
export declare const TimeField: React.ForwardRefExoticComponent<TimeFieldProps & React.RefAttributes<HTMLInputElement>>;
