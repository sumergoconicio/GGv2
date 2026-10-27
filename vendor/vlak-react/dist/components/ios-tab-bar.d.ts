import * as React from "react";
export interface IOSTabBarItem extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children" | "value"> {
    id: string;
    label: string;
    icon?: React.ReactNode;
    panelId?: string;
    /** Optional stable DOM ID for a panel's aria-labelledby. */
    buttonId?: string;
}
export interface IOSTabBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue" | "onChange" | "children"> {
    items: IOSTabBarItem[];
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    orientation?: "horizontal" | "vertical";
    label?: string;
}
/** Automatically activated peer tabs. Supply panelId for the associated content. */
export declare const IOSTabBar: React.ForwardRefExoticComponent<IOSTabBarProps & React.RefAttributes<HTMLDivElement>>;
