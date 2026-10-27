import * as React from "react";
export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Trigger content, rendered in a ghost button. */
    trigger: React.ReactNode;
    /** Where the panel sits relative to the trigger. */
    align?: "start" | "end";
}
/**
 * The native Popover API. The panel lives in the top layer; light
 * dismiss comes from the platform. Anchor positioning places it where
 * supported; otherwise it is measured, follows scroll and resize, and
 * flips above the trigger when there is no room below.
 */
export declare function Popover({ trigger, align, className, style, children, onToggle, ...props }: PopoverProps): React.JSX.Element;
export declare const PopoverTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLSpanElement> & React.RefAttributes<HTMLSpanElement>>;
export declare const PopoverBody: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
