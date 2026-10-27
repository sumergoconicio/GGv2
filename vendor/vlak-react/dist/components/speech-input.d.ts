import * as React from "react";
import { type ButtonProps } from "./button.js";
export type SpeechInputStatus = "idle" | "requesting" | "listening" | "processing" | "error" | "unsupported";
export interface SpeechInputProps extends Omit<ButtonProps, "onError"> {
    onTranscript: (text: string) => void;
    onInterimTranscript?: (text: string) => void;
    onAudioRecorded?: (audio: Blob, context: {
        signal: AbortSignal;
    }) => Promise<string>;
    onStatusChange?: (status: SpeechInputStatus) => void;
    onError?: (error: Error) => void;
    mode?: "auto" | "recognition" | "recording";
    deviceId?: string;
    lang?: string;
    /** Stops and processes a recording after this many seconds. Defaults to 120. */
    maxDuration?: number;
}
/** User-activated speech capture with an application-owned transcription fallback. */
export declare const SpeechInput: React.ForwardRefExoticComponent<SpeechInputProps & React.RefAttributes<HTMLButtonElement>>;
