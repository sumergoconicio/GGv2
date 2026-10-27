import * as React from "react";
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /** In-copy gradient underline, inset 1px. */
    underline?: boolean;
}
/** Text link with a hairline underline. In-copy variant is inset 1px. */
export declare const Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>;
