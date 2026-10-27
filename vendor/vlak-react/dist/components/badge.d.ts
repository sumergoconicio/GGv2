import * as React from "react";
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** Outline for recommendations, solid for done, muted for pending. */
    variant?: "outline" | "solid" | "muted";
}
export declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLSpanElement>>;
