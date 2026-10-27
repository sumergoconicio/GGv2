import * as React from "react";
import { type ReasoningProps } from "./reasoning.js";
export interface ThoughtStep {
    id: string;
    title: React.ReactNode;
    state?: "pending" | "active" | "complete";
    description?: React.ReactNode;
    content?: React.ReactNode;
    sources?: React.ReactNode;
    image?: React.ReactNode;
    caption?: React.ReactNode;
    icon?: React.ReactNode;
}
export interface ThoughtStepsProps extends ReasoningProps {
    steps: readonly ThoughtStep[];
}
/** Application-supplied work summaries, with per-step state and supporting evidence. */
export declare const ThoughtSteps: React.ForwardRefExoticComponent<ThoughtStepsProps & React.RefAttributes<HTMLDetailsElement>>;
