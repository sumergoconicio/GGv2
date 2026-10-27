import * as React from "react";
export interface NavigationMenuProps extends React.HTMLAttributes<HTMLElement> {
    items: Array<{
        label: React.ReactNode;
        href: string;
        current?: boolean;
    }>;
    /** Landmark name; pages carry several navs. */
    "aria-label"?: string;
}
/** Links in a row; the current page is ink. */
export declare const NavigationMenu: React.ForwardRefExoticComponent<NavigationMenuProps & React.RefAttributes<HTMLElement>>;
