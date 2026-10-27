import * as React from "react";
export interface Crumb {
    label: React.ReactNode;
    href?: string;
}
export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
    items: Crumb[];
}
/** A trail: ordered list in a nav, the current page marked. */
export declare const Breadcrumbs: React.ForwardRefExoticComponent<BreadcrumbsProps & React.RefAttributes<HTMLElement>>;
