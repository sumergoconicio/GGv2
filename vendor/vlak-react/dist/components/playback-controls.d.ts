import * as React from "react";
export interface PlaybackControlsProps extends React.HTMLAttributes<HTMLDivElement> {
    playing?: boolean;
    defaultPlaying?: boolean;
    onPlayingChange?: (playing: boolean) => void;
    onPrevious?: () => void;
    onNext?: () => void;
    onStop?: () => void;
    disabled?: boolean;
    previousDisabled?: boolean;
    nextDisabled?: boolean;
    previousLabel?: string;
    nextLabel?: string;
    label?: string;
}
/** Named, keyboard-operable transport buttons. Playback state may be owned by a media element. */
export declare const PlaybackControls: React.ForwardRefExoticComponent<PlaybackControlsProps & React.RefAttributes<HTMLDivElement>>;
