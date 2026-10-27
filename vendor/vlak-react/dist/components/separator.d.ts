import * as React from "react";
export interface SeparatorProps extends React.HTMLAttributes<HTMLElement> {
    orientation?: "horizontal" | "vertical";
}
export declare const Separator: React.ForwardRefExoticComponent<SeparatorProps & React.RefAttributes<HTMLElement>>;
