import * as React from "react";
export type AudioDeviceStatus = "loading" | "ready" | "denied" | "unavailable" | "error";
export interface AudioDevicesState {
    devices: readonly MediaDeviceInfo[];
    status: AudioDeviceStatus;
    error: string | null;
    requestAccess: () => Promise<void>;
    refresh: () => Promise<void>;
}
/** Enumerates inputs without opening a microphone; requestAccess is an explicit user action. */
export declare function useAudioDevices(): AudioDevicesState;
export interface MicSelectorProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue"> {
    value?: string;
    defaultValue?: string;
    onValueChange?: (deviceId: string) => void;
    label?: string;
    disabled?: boolean;
}
/** Searchable microphone choice. The application owns capture and the selected device's use. */
export declare const MicSelector: React.ForwardRefExoticComponent<MicSelectorProps & React.RefAttributes<HTMLDivElement>>;
