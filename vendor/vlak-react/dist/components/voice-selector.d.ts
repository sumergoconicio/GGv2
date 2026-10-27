import * as React from "react";
export interface VoiceOption {
    id: string;
    name: string;
    provider?: string;
    language?: string;
    description?: string;
    attributes?: readonly string[];
    previewSrc?: string;
    /** A text alternative for speech in the preview sample. */
    previewText?: string;
    disabled?: boolean;
}
export interface VoiceSelectorProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue"> {
    voices: readonly VoiceOption[];
    value?: string;
    defaultValue?: string;
    onValueChange?: (voiceId: string) => void;
    label?: string;
    disabled?: boolean;
}
/** Supplied voice metadata and optional real audio samples; provider catalogs remain application-owned. */
export declare const VoiceSelector: React.ForwardRefExoticComponent<VoiceSelectorProps & React.RefAttributes<HTMLDivElement>>;
