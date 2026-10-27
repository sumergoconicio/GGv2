import * as React from "react";
export interface FormError {
    id: string;
    message: string;
}
export interface ErrorSummaryProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
    errors: FormError[];
    title?: React.ReactNode;
    /** Move focus to the summary after a failed submission, not while typing. */
    autoFocus?: boolean;
}
/** A form-wide summary linking each message to the field that needs attention. */
export declare const ErrorSummary: React.ForwardRefExoticComponent<ErrorSummaryProps & React.RefAttributes<HTMLDivElement>>;
