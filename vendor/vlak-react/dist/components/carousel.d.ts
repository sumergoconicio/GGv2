import * as React from "react";
export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Name of the carousel region. */
    "aria-label"?: string;
}
/** One slide: a named group, "n of N" unless you name it yourself. */
export declare const CarouselSlide: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
/** Native scroll snap; the buttons nudge. The track is the named, focusable carousel region. */
export declare const Carousel: React.ForwardRefExoticComponent<CarouselProps & React.RefAttributes<HTMLDivElement>>;
