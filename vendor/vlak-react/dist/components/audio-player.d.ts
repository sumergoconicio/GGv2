import * as React from "react";
export interface GeneratedSpeechAudio {
    base64: string;
    mediaType: string;
}
export interface AudioPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    src?: string;
    data?: GeneratedSpeechAudio;
    transcript?: React.ReactNode;
    preload?: "none" | "metadata" | "auto";
    onTimeChange?: (seconds: number) => void;
    onPlayingChange?: (playing: boolean) => void;
}
export interface AudioPlayerState {
    playing: boolean;
    pending: boolean;
    currentTime: number;
    duration: number;
    volume: number;
    muted: boolean;
    error: string;
    play: () => Promise<void>;
    pause: () => void;
    seek: (seconds: number) => void;
    setVolume: (volume: number) => void;
    toggleMute: () => void;
    retry: () => void;
}
export interface AudioPlayerControlsProps extends React.HTMLAttributes<HTMLDivElement> {
    seekOffset?: number;
    disabled?: boolean;
}
/** Access the native media controller from controls nested inside AudioPlayer. */
export declare function useAudioPlayer(): AudioPlayerState;
/** Native audio for URLs or generated speech, with replaceable controls and explicit media ownership. */
export declare const AudioPlayer: React.ForwardRefExoticComponent<AudioPlayerProps & React.RefAttributes<HTMLAudioElement>>;
/** Default transport, bounded skip seeking and volume; replace or compose with useAudioPlayer. */
export declare const AudioPlayerControls: React.ForwardRefExoticComponent<AudioPlayerControlsProps & React.RefAttributes<HTMLDivElement>>;
