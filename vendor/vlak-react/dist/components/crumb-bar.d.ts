import * as React from "react";
export interface CrumbBarItem {
    label: React.ReactNode;
    href?: string;
}
export interface CrumbBarProps extends React.HTMLAttributes<HTMLElement> {
    trail: CrumbBarItem[];
    /** Pixels of scroll before the bar solidifies and the crumbs fade in. */
    threshold?: number;
    /** Root crumb, held in the TOC column from 900px. */
    root?: CrumbBarItem;
    /** Abbreviated root shown on phones in place of the full label. */
    rootShort?: React.ReactNode;
}
/**
 * The fixed top bar of the house chrome. Transparent at rest; once the
 * page cover scrolls away it gains the paper background and its bottom
 * hairline, and the breadcrumbs fade in. While hidden the trail is
 * inert and invisible, so nothing focuses into an unseen link.
 */
export declare const CrumbBar: React.ForwardRefExoticComponent<CrumbBarProps & React.RefAttributes<HTMLElement>>;
