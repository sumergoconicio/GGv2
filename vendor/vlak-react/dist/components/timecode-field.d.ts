import * as React from "react";
export interface TimecodeFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "value" | "defaultValue" | "onChange" | "pattern"> {
    label: React.ReactNode;
    /** Integer non-drop frame rate from 1 to 99. */
    frameRate: number;
    value?: string;
    defaultValue?: string;
    /** Receives editable text, including incomplete or invalid input. */
    onValueChange?: (value: string) => void;
}
/** Editable hours, minutes, seconds and frames for integer non-drop timecode. */
export declare const TimecodeField: React.ForwardRefExoticComponent<TimecodeFieldProps & React.RefAttributes<HTMLInputElement>>;
