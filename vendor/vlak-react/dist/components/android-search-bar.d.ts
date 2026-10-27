import * as React from "react";
export interface AndroidSearchBarProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "value" | "defaultValue" | "size"> {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    clearLabel?: string;
    containerClassName?: string;
    containerStyle?: React.CSSProperties;
}
export declare const AndroidSearchBar: React.ForwardRefExoticComponent<AndroidSearchBarProps & React.RefAttributes<HTMLInputElement>>;
