import * as React from "react";
export interface CalendarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect" | "defaultValue"> {
    value?: Date;
    defaultValue?: Date;
    onValueChange?: (date: Date) => void;
    /** @deprecated Use `onValueChange`. */
    onSelect?: (date: Date) => void;
    defaultMonth?: Date;
    /** 0 = Sunday, 1 = Monday. */
    weekStart?: 0 | 1;
    /** Keep six week rows. False shows only the four to six rows this month needs. */
    fixedWeeks?: boolean;
    /** Move focus to the roving day on mount (a date picker opening). */
    autoFocus?: boolean;
    min?: Date;
    max?: Date;
    disabled?: boolean;
    isDateDisabled?: (date: Date) => boolean;
    locale?: string;
}
/**
 * Month grid with one roving tab stop. Arrows move by day and week,
 * Home/End to the week's ends, PageUp/PageDown by month (Shift: year).
 * Selected is ink; today is a hairline.
 */
export declare const Calendar: React.ForwardRefExoticComponent<CalendarProps & React.RefAttributes<HTMLDivElement>>;
