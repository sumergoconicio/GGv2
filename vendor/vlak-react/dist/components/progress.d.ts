import * as React from "react";
export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    value: number;
    max?: number;
    /** Label above the bar; it names the bar. The percentage lives here, never inside the bar. */
    label?: React.ReactNode;
}
export declare const Progress: React.ForwardRefExoticComponent<ProgressProps & React.RefAttributes<HTMLDivElement>>;
