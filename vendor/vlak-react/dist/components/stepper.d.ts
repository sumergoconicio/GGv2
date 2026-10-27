import * as React from "react";
export interface Step {
    name: React.ReactNode;
    sub?: React.ReactNode;
}
export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
    steps: Step[];
    /** 0-based index of the active step; everything before it is done. */
    current: number;
}
export declare const Stepper: React.ForwardRefExoticComponent<StepperProps & React.RefAttributes<HTMLDivElement>>;
