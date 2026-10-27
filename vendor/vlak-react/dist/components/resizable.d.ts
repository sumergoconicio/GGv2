import * as React from "react";
export interface SplitProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Starting share of the first pane, in percent. */
    initial?: number;
    min?: number;
    max?: number;
    /** Accessible name of the handle. */
    handleLabel?: string;
    children: [React.ReactNode, React.ReactNode];
}
/** Two panes on a draggable hairline. Arrows step, Home/End jump; the axis follows the layout. */
export declare const Split: React.ForwardRefExoticComponent<SplitProps & React.RefAttributes<HTMLDivElement>>;
