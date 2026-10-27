import * as React from "react";
export interface MeasurementValueProps extends React.HTMLAttributes<HTMLDivElement> {
    label: React.ReactNode;
    /** Strings preserve supplied significant figures. Non-finite numbers are unavailable. */
    value?: number | string | null;
    unit?: string;
    /** A supplied symmetric, non-negative uncertainty in the same unit as value. */
    uncertainty?: number | null;
    uncertaintyLabel?: React.ReactNode;
    /** Scientific notation changes numeric formatting only; supplied strings are unchanged. */
    notation?: "plain" | "scientific";
    status?: "recorded" | "pending" | "unavailable";
    source?: React.ReactNode;
    description?: React.ReactNode;
}
/** A supplied scientific reading without inferred precision, confidence or unit conversion. */
export declare const MeasurementValue: React.ForwardRefExoticComponent<MeasurementValueProps & React.RefAttributes<HTMLDivElement>>;
