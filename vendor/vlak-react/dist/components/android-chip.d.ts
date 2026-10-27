import * as React from "react";
export interface AndroidChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    selected?: boolean;
    defaultSelected?: boolean;
    onSelectedChange?: (selected: boolean) => void;
    icon?: React.ReactNode;
}
export declare const AndroidChip: React.ForwardRefExoticComponent<AndroidChipProps & React.RefAttributes<HTMLButtonElement>>;
