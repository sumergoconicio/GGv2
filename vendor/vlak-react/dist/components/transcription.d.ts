import * as React from "react";
export interface TranscriptionSegment {
    id: string;
    text: string;
    startSecond: number;
    endSecond: number;
    speaker?: string;
}
export interface TranscriptionProps extends React.HTMLAttributes<HTMLDivElement> {
    segments: readonly TranscriptionSegment[];
    currentTime?: number;
    onSeek?: (seconds: number) => void;
    label?: string;
    /** Follow active text until the reader scrolls. Off by default. */
    autoScroll?: boolean;
    maxHeight?: number | string;
}
/** Supplied timed text. Playback remains application-owned; only activation requests a seek. */
export declare const Transcription: React.ForwardRefExoticComponent<TranscriptionProps & React.RefAttributes<HTMLDivElement>>;
