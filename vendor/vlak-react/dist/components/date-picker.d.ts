import * as React from "react";
export interface DatePickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> {
    value?: Date;
    defaultValue?: Date;
    onValueChange?: (date: Date) => void;
    /** @deprecated Use `onValueChange`. */
    onChange?: (date: Date) => void;
    placeholder?: string;
    format?: (date: Date) => string;
    disabled?: boolean;
    min?: Date;
    max?: Date;
    isDateDisabled?: (date: Date) => boolean;
    locale?: string;
    /** Accessible name of the calendar dialog. */
    dialogLabel?: string;
}
/**
 * Hairline trigger that opens a calendar in a non-modal dialog. Focus
 * moves to the selected (or today's) day; Escape, Tab out, and a click
 * outside close it; focus returns to the trigger.
 */
export declare const DatePicker: React.ForwardRefExoticComponent<DatePickerProps & React.RefAttributes<HTMLDivElement>>;
