import * as React from "react";
export interface IOSSegmentedControlItem {
    id: string;
    label: string;
    disabled?: boolean;
}
export interface IOSSegmentedControlProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue" | "onChange" | "children"> {
    items: IOSSegmentedControlItem[];
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    name?: string;
    form?: string;
    disabled?: boolean;
    label?: string;
}
/** A mutually exclusive choice with one Tab stop and arrow-key selection. */
export declare const IOSSegmentedControl: React.ForwardRefExoticComponent<IOSSegmentedControlProps & React.RefAttributes<HTMLDivElement>>;
