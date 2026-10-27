import * as React from "react";
export interface SkeletonProps extends React.HTMLAttributes<HTMLSpanElement> {
    width?: number | string;
    height?: number | string;
}
export declare const Skeleton: React.ForwardRefExoticComponent<SkeletonProps & React.RefAttributes<HTMLSpanElement>>;
