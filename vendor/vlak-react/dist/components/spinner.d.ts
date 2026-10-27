import * as React from "react";
export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
    label?: string;
}
/** Hairline ring. Stops under prefers-reduced-motion. */
export declare const Spinner: React.ForwardRefExoticComponent<SpinnerProps & React.RefAttributes<HTMLSpanElement>>;
