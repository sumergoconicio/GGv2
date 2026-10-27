import * as React from "react";
export interface ChannelStripValue {
    gain: number;
    pan: number;
    muted: boolean;
    solo: boolean;
}
export interface ChannelStripProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "onChange" | "defaultValue"> {
    label: React.ReactNode;
    value?: ChannelStripValue;
    defaultValue?: ChannelStripValue;
    onValueChange?: (value: ChannelStripValue) => void;
    gainMin?: number;
    gainMax?: number;
    readOnly?: boolean;
}
/** Gain, pan, mute and solo state for an application-owned audio channel. */
export declare const ChannelStrip: React.ForwardRefExoticComponent<ChannelStripProps & React.RefAttributes<HTMLFieldSetElement>>;
