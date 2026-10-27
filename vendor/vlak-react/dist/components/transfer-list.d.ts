import * as React from "react";
export interface TransferListOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface TransferListProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "onChange" | "defaultValue"> {
    options: TransferListOption[];
    value?: string[];
    defaultValue?: string[];
    onValueChange?: (value: string[]) => void;
    label?: React.ReactNode;
    availableLabel?: string;
    selectedLabel?: string;
    addLabel?: string;
    removeLabel?: string;
    emptyLabel?: string;
}
export declare const TransferList: React.ForwardRefExoticComponent<TransferListProps & React.RefAttributes<HTMLFieldSetElement>>;
