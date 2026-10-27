import * as React from "react";
export interface MultiSelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface MultiSelectProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "onChange" | "defaultValue"> {
    options: MultiSelectOption[];
    value?: string[];
    defaultValue?: string[];
    onValueChange?: (value: string[]) => void;
    label?: React.ReactNode;
    placeholder?: string;
    searchable?: boolean;
    searchLabel?: string;
    emptyLabel?: React.ReactNode;
    clearLabel?: string;
}
/** A native disclosure containing named checkboxes; selections remain visible when collapsed. */
export declare const MultiSelect: React.ForwardRefExoticComponent<MultiSelectProps & React.RefAttributes<HTMLFieldSetElement>>;
