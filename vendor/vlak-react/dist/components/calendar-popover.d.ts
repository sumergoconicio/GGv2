import * as React from "react";
import { type InputProps } from "./input.js";
export interface CalendarPopoverProps extends Omit<InputProps, "type" | "value" | "defaultValue" | "onChange" | "min" | "max" | "plain" | "grouped"> {
    type?: "date" | "datetime-local";
    /** Local canonical value. Typed partial drafts are emitted too. */
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    min?: string;
    max?: string;
    weekStart?: 0 | 1;
    locale?: string;
    triggerLabel?: string;
    dialogLabel?: string;
}
/** Editable civil dates with native form validation and a top-layer calendar. */
export declare const CalendarPopover: React.ForwardRefExoticComponent<CalendarPopoverProps & React.RefAttributes<HTMLInputElement>>;
