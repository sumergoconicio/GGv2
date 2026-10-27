import * as React from "react";
export interface AudioMeterChannel {
    id: string;
    label: string;
    level: number | null;
    peak?: number | null;
}
export interface AudioMeterProps extends React.HTMLAttributes<HTMLDivElement> {
    label: React.ReactNode;
    channels: AudioMeterChannel[];
    min?: number;
    max?: number;
}
/** Supplied channel levels and peaks; no audio analysis or peak holding. */
export declare const AudioMeter: React.ForwardRefExoticComponent<AudioMeterProps & React.RefAttributes<HTMLDivElement>>;
