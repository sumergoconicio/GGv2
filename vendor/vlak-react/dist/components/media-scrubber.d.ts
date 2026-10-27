import * as React from "react";
import { type SliderProps } from "./slider.js";
export interface MediaChapter {
    time: number;
    label: string;
}
export interface MediaScrubberProps extends Omit<SliderProps, "min" | "max"> {
    duration: number;
    label?: string;
    showTime?: boolean;
    /** Last buffered second. */
    buffered?: number;
    chapters?: readonly MediaChapter[];
    /** Thumbnail or other visual preview for the pointed or focused second. */
    preview?: (seconds: number) => React.ReactNode;
}
/** Elapsed media time, including hours when needed. Invalid duration is displayed as zero. */
export declare function formatMediaTime(seconds: number): string;
/** A native range in seconds with elapsed and total time. The input remains a 44px target. */
export declare const MediaScrubber: React.ForwardRefExoticComponent<MediaScrubberProps & React.RefAttributes<HTMLInputElement>>;
