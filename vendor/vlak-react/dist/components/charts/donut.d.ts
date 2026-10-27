import * as React from "react";
export interface DonutProps extends React.HTMLAttributes<HTMLDivElement> {
    value: number;
    max?: number;
    size?: number;
    label?: React.ReactNode;
    unit?: string;
    valueFormat?: (value: number) => string;
    spot?: boolean | string;
    /** BCP 47 tag for number formatting; undefined is the reader's own. */
    locale?: string;
}
export declare const Donut: React.ForwardRefExoticComponent<DonutProps & React.RefAttributes<HTMLDivElement>>;
export type ShareSlice = {
    label: string;
    value: number;
};
export interface ShareProps extends React.HTMLAttributes<HTMLDivElement> {
    slices: ShareSlice[];
    unit?: string;
    valueFormat?: (n: number) => string;
    spot?: boolean | string;
    /** BCP 47 tag for number formatting; undefined is the reader's own. */
    locale?: string;
}
export declare const Share: React.ForwardRefExoticComponent<ShareProps & React.RefAttributes<HTMLDivElement>>;
