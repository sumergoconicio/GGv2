import * as React from "react";
export interface AlertProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
    title?: React.ReactNode;
    /** Solid ink variant. */
    variant?: "outline" | "solid";
    icon?: React.ReactNode;
    /**
     * Static content is a note. Set "polite" (role=status) or "assertive"
     * (role=alert) only when the alert appears in response to something.
     */
    live?: "polite" | "assertive";
}
export declare const Alert: React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLDivElement>>;
