import * as React from "react";
export interface ClipTrack {
    id: string;
    label: string;
}
export interface TimelineClip {
    id: string;
    trackId: string;
    label: string;
    start: number;
    duration: number;
}
export interface ClipTimelineProps extends React.HTMLAttributes<HTMLDivElement> {
    label: React.ReactNode;
    tracks: ClipTrack[];
    clips: TimelineClip[];
    duration: number;
    unit: "seconds" | "frames";
    position?: number | null;
    selectedClipId?: string | null;
    onSeek?: (position: number) => void;
    onSelectClip?: (id: string) => void;
    disabled?: boolean;
}
/** Supplied clip positions, with separate reachable selection and seek controls. */
export declare const ClipTimeline: React.ForwardRefExoticComponent<ClipTimelineProps & React.RefAttributes<HTMLDivElement>>;
