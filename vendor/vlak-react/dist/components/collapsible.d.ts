import * as React from "react";
export interface CollapsibleProps extends Omit<React.DetailsHTMLAttributes<HTMLDetailsElement>, "title"> {
    title: React.ReactNode;
    defaultOpen?: boolean;
}
/** A bare native <details>. */
export declare const Collapsible: React.ForwardRefExoticComponent<CollapsibleProps & React.RefAttributes<HTMLDetailsElement>>;
