import * as React from "react";
export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
}
/** One 204 module rail. Flush items, hairline edge. */
export declare const Sidebar: React.ForwardRefExoticComponent<SidebarProps & React.RefAttributes<HTMLElement>>;
export declare const SidebarHead: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
    /** Landmark name; pages carry several navs. */
    "aria-label"?: string;
}
export declare const SidebarNav: React.ForwardRefExoticComponent<SidebarNavProps & React.RefAttributes<HTMLElement>>;
export interface SidebarItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    current?: boolean;
}
export declare const SidebarItem: React.ForwardRefExoticComponent<SidebarItemProps & React.RefAttributes<HTMLAnchorElement>>;
export declare const SidebarLabel: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
export declare const SidebarFoot: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
