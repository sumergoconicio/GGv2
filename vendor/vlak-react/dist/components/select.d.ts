import * as React from "react";
export interface SelectOption {
    value: string;
    label: React.ReactNode;
    /** Plain text for type-ahead and filtering when `label` is not a string. */
    searchText?: string;
    /** Visible but unavailable options are skipped by keyboard navigation. */
    disabled?: boolean;
}
/** Text an option answers to: `searchText`, a string label, else the value. */
export declare function optionText(option: SelectOption): string;
export interface SelectProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> {
    options: SelectOption[];
    value?: string;
    defaultValue?: string;
    placeholder?: React.ReactNode;
    onValueChange?: (value: string) => void;
    disabled?: boolean;
    /** Fill a compound field without imposing a minimum column width. */
    fullWidth?: boolean;
    name?: string;
    form?: string;
    required?: boolean;
    readOnly?: boolean;
}
/**
 * Select-only combobox: the trigger holds focus and points at the active
 * option with aria-activedescendant; the listbox overlays.
 */
export declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLDivElement>>;
