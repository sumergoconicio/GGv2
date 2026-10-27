import * as React from "react";
export interface PatientBannerIdentifier {
    id: string;
    label: React.ReactNode;
    value: React.ReactNode;
}
export interface PatientBannerContextItem {
    id: string;
    label: React.ReactNode;
    /** Supply the recorded value or an explicit unknown/not-reviewed statement. */
    value: React.ReactNode;
}
export interface PatientBannerProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Caller-supplied identity. No age or other demographic values are inferred. */
    patientName: string;
    identifiers?: readonly PatientBannerIdentifier[];
    contextItems?: readonly PatientBannerContextItem[];
    identifiersEmptyLabel?: React.ReactNode;
    /** Missing context never means that no allergies or alerts exist. */
    contextEmptyLabel?: React.ReactNode;
}
/** A supplied patient identity and explicitly recorded context, without clinical inference. */
export declare const PatientBanner: React.ForwardRefExoticComponent<PatientBannerProps & React.RefAttributes<HTMLDivElement>>;
