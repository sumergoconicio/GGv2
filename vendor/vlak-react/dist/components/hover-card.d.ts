import * as React from "react";
export interface HoverCardProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** A focusable element is used as is; anything else gets one tab stop. */
    trigger: React.ReactNode;
    /** Keep the panel shown regardless of hover or focus: for docs, tests, and static previews. */
    open?: boolean;
}
/**
 * Preview panel on hover or keyboard focus. CSS shows it; the panel
 * describes the trigger, and Escape hides it until the pointer leaves.
 */
export declare const HoverCard: React.ForwardRefExoticComponent<HoverCardProps & React.RefAttributes<HTMLSpanElement>>;
