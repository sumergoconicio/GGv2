import * as React from "react";
export interface AndroidNavigationItem {
    value: string;
    label: string;
    icon?: React.ReactNode;
    href?: string;
    disabled?: boolean;
    target?: React.HTMLAttributeAnchorTarget;
    rel?: string;
}
export interface AndroidNavigationProps extends Omit<React.HTMLAttributes<HTMLElement>, "defaultValue" | "onChange"> {
    items: AndroidNavigationItem[];
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    orientation?: "horizontal" | "vertical";
}
export declare const AndroidNavigation: React.ForwardRefExoticComponent<AndroidNavigationProps & React.RefAttributes<HTMLElement>>;
