import * as React from "react";
export interface DescriptionItem {
    id: string;
    label: React.ReactNode;
    value: React.ReactNode;
}
export interface DescriptionListProps extends React.HTMLAttributes<HTMLDListElement> {
    items: DescriptionItem[];
}
/** Aligned, semantic labels and values without an extra card. */
export declare const DescriptionList: React.ForwardRefExoticComponent<DescriptionListProps & React.RefAttributes<HTMLDListElement>>;
