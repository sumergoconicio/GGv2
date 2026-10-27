import * as React from "react";
import { type SelectOption } from "./select.js";
export interface ComboboxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> {
    options: SelectOption[];
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    emptyLabel?: React.ReactNode;
    disabled?: boolean;
}
/**
 * Editable combobox: the input holds focus, filters on typed text, and
 * points at the active option with aria-activedescendant.
 */
export declare const Combobox: React.ForwardRefExoticComponent<ComboboxProps & React.RefAttributes<HTMLDivElement>>;
