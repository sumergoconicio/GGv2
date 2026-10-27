import * as React from "react";
export interface MediaTrack {
    src: string;
    srcLang: string;
    label: string;
    default?: boolean;
}
export interface MediaPlayerSource {
    src: string;
    type?: string;
}
export interface MediaPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
    src: string;
    /** Preferred sources in browser selection order. The required `src` is appended as the final fallback. */
    sources?: readonly MediaPlayerSource[];
    title: string;
    kind?: "audio" | "video";
    poster?: string;
    preload?: "none" | "metadata" | "auto";
    tracks?: readonly MediaTrack[];
    transcript?: React.ReactNode;
    onPlayingChange?: (playing: boolean) => void;
    onTimeChange?: (seconds: number) => void;
}
/** Native media with Vlak transport, seeking, volume, captions, and recoverable loading errors. */
export declare const MediaPlayer: React.ForwardRefExoticComponent<MediaPlayerProps & React.RefAttributes<HTMLMediaElement>>;
