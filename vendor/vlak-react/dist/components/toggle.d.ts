import * as React from "react";
export interface ToggleProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
    pressed?: boolean;
    defaultPressed?: boolean;
    onPressedChange?: (pressed: boolean) => void;
    /** Subtle uses a quiet hover and a soft selected fill. */
    variant?: "default" | "subtle";
}
/** Press switch; state lives in aria-pressed. */
export declare const Toggle: React.ForwardRefExoticComponent<ToggleProps & React.RefAttributes<HTMLButtonElement>>;
export interface ToggleGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
    options: Array<{
        value: string;
        label: React.ReactNode;
    }>;
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    /** Subtle groups use a soft rail and individually rounded selected items. */
    variant?: "default" | "subtle";
}
/** One pressed at a time. */
export declare const ToggleGroup: React.ForwardRefExoticComponent<ToggleGroupProps & React.RefAttributes<HTMLDivElement>>;
