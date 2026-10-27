import * as React from "react";
import { type IconName } from "./icon.js";
export interface BottomNavigationItem {
    id: string;
    label: string;
    href: string;
    icon?: IconName;
    count?: number;
}
export interface BottomNavigationProps extends React.HTMLAttributes<HTMLElement> {
    items: BottomNavigationItem[];
    current?: string;
    label?: string;
}
/** Mobile destinations with safe-area padding and native links. Keep to five items. */
export declare const BottomNavigation: React.ForwardRefExoticComponent<BottomNavigationProps & React.RefAttributes<HTMLElement>>;
