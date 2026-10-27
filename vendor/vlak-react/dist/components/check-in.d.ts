import * as React from "react";
export interface CheckInOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface CheckInProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "onChange" | "defaultValue"> {
    label: React.ReactNode;
    description?: React.ReactNode;
    /** Text answers supplied by the application. Values must be unique. */
    options: CheckInOption[];
    /** null is an unanswered check-in. */
    value?: string | null;
    defaultValue?: string | null;
    onValueChange?: (value: string | null) => void;
    required?: boolean;
    readOnly?: boolean;
    clearable?: boolean;
    clearLabel?: string;
}
/** A named text choice without an inferred clinical score. */
export declare const CheckIn: React.ForwardRefExoticComponent<CheckInProps & React.RefAttributes<HTMLFieldSetElement>>;
