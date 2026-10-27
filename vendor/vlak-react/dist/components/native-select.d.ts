import * as React from "react";
export interface NativeSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: React.ReactNode;
}
/** The platform list. Vlak chrome. */
export declare const NativeSelect: React.ForwardRefExoticComponent<NativeSelectProps & React.RefAttributes<HTMLSelectElement>>;
