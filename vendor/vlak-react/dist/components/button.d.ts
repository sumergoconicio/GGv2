import * as React from "react";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Solid ink primary, hairline ghost, or borderless subtle. One primary per view. */
    variant?: "primary" | "ghost" | "subtle";
    /** Icon buttons stay square at every breakpoint. Supply an accessible name. */
    size?: "default" | "sm" | "icon";
    /** Flush into a ButtonGroup: no own stroke, one ink seam. */
    grouped?: boolean;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
