import * as React from "react";
export interface IOSSwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "checked" | "defaultChecked" | "children"> {
    checked?: boolean;
    defaultChecked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
}
/** The native checkbox owns focus, form submission and Space activation. */
export declare const IOSSwitch: React.ForwardRefExoticComponent<IOSSwitchProps & React.RefAttributes<HTMLInputElement>>;
