import * as React from "react";
export interface RasterSourceBand {
    id: string;
    label: string;
    description?: React.ReactNode;
    unit?: string | null;
    /** undefined means unknown, null means no missing-data sentinel, and zero is a valid sentinel. */
    noDataValue?: number | null;
    disabled?: boolean;
}
export interface RasterChannelMapping {
    bandId: string | null;
    minimum: number | null;
    maximum: number | null;
}
export type RasterStretch = "none" | "min-max" | "clip" | "stretch-clip";
export interface RasterBandConfiguration {
    mode: "rgb" | "single";
    stretch: RasterStretch;
    red: RasterChannelMapping;
    green: RasterChannelMapping;
    blue: RasterChannelMapping;
    single: RasterChannelMapping;
}
export interface RasterBandMixerProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "defaultValue"> {
    label: React.ReactNode;
    bands: readonly RasterSourceBand[];
    value?: RasterBandConfiguration;
    defaultValue?: RasterBandConfiguration;
    /** Emits configuration only. The host owns rendering and any statistics or range calculation. */
    onValueChange?: (value: RasterBandConfiguration) => void;
    description?: React.ReactNode;
    readOnly?: boolean;
}
/** Selects source bands and display ranges. No pixels, statistics or missing-data rules are inferred. */
export declare const RasterBandMixer: React.ForwardRefExoticComponent<RasterBandMixerProps & React.RefAttributes<HTMLFieldSetElement>>;
