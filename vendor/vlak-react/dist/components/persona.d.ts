import * as React from "react";
export type PersonaState = "idle" | "listening" | "thinking" | "speaking" | "asleep";
export type PersonaVariant = "waveform" | "orb" | "rings";
export interface PersonaVisualContext {
    state: PersonaState;
    size: number;
    /** Normalized input/output energy, or the state's representative intensity. */
    intensity: number;
    /** Whether motion is allowed by visibility, user preferences and paused/state. */
    animated: boolean;
}
export interface PersonaProps extends React.HTMLAttributes<HTMLDivElement> {
    state?: PersonaState;
    variant?: PersonaVariant;
    size?: number;
    label?: string;
    /** Input/output energy in the range 0–1. Asleep always settles to zero. */
    intensity?: number;
    /** Stop motion without changing the conversational state. */
    paused?: boolean;
    /** Called initially and whenever the effective motion policy changes. */
    onMotionChange?: (animated: boolean) => void;
    /** A custom decorative visual. The application owns its rendering lifecycle. */
    children?: React.ReactNode;
    /** Custom visuals should honor animated and release their own rendering resources. */
    renderVisual?: (context: PersonaVisualContext) => React.ReactNode;
}
/** Three native monochrome visuals share five conversational states and an optional custom renderer. */
export declare const Persona: React.ForwardRefExoticComponent<PersonaProps & React.RefAttributes<HTMLDivElement>>;
