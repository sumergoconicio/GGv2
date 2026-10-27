import * as React from "react";
export interface AndroidSwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
    onCheckedChange?: (checked: boolean) => void;
}
export declare const AndroidSwitch: React.ForwardRefExoticComponent<AndroidSwitchProps & React.RefAttributes<HTMLInputElement>>;
