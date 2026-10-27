import * as React from "react";
export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
    maxHeight?: number | string;
    /** Name of the scrolling region; it is keyboard-focusable, so it needs one. */
    "aria-label"?: string;
}
/** Hidden scrollbar; feathered top and bottom edges. A named, focusable region. */
export declare const ScrollArea: React.ForwardRefExoticComponent<ScrollAreaProps & React.RefAttributes<HTMLDivElement>>;
