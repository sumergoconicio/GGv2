import * as React from "react";
export interface ShimmerProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: string;
    active?: boolean;
    duration?: number;
    spread?: number;
}
/** Animated text for supplied progress. Screen readers receive the text once, without token announcements. */
export declare const Shimmer: React.ForwardRefExoticComponent<ShimmerProps & React.RefAttributes<HTMLSpanElement>>;
