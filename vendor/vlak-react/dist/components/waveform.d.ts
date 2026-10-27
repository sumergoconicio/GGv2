import * as React from "react";
export interface WaveformRegion {
    start: number;
    end: number;
}
export interface WaveformProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue"> {
    /** Amplitudes from zero to one; values are clamped. */
    samples: readonly number[];
    label: string;
    value?: number;
    defaultValue?: number;
    onValueChange?: (position: number) => void;
    disabled?: boolean;
    region?: WaveformRegion;
    defaultRegion?: WaveformRegion;
    onRegionChange?: (region: WaveformRegion) => void;
}
/** A waveform from supplied amplitude data, optionally scrubbed through a native range. */
export declare const Waveform: React.ForwardRefExoticComponent<WaveformProps & React.RefAttributes<HTMLDivElement>>;
