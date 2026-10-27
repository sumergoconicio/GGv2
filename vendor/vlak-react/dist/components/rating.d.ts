import * as React from "react";
export interface RatingProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "onChange" | "defaultValue"> {
    value?: number;
    defaultValue?: number;
    onValueChange?: (value: number) => void;
    max?: number;
    label?: React.ReactNode;
    getLabel?: (value: number, max: number) => string;
    clearable?: boolean;
    clearLabel?: string;
    required?: boolean;
}
/** A discrete score using native radios; zero means no rating. */
export declare const Rating: React.ForwardRefExoticComponent<RatingProps & React.RefAttributes<HTMLFieldSetElement>>;
