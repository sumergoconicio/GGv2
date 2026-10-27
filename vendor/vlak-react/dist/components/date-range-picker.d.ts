import * as React from "react";
export interface DateRangeValue {
    start: string;
    end: string;
}
export interface DateRangePickerProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "onChange" | "defaultValue"> {
    /** ISO calendar dates, YYYY-MM-DD; no time zone conversion. */
    value?: DateRangeValue;
    defaultValue?: DateRangeValue;
    onValueChange?: (value: DateRangeValue) => void;
    label?: React.ReactNode;
    startLabel?: string;
    endLabel?: string;
    min?: string;
    max?: string;
    required?: boolean;
}
/** Two native date editors share bounds; changing the start beyond the end clears the end. */
export declare const DateRangePicker: React.ForwardRefExoticComponent<DateRangePickerProps & React.RefAttributes<HTMLFieldSetElement>>;
