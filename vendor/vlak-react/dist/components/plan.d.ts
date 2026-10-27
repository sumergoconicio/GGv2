import * as React from "react";
import { type ReasoningProps } from "./reasoning.js";
export interface PlanProps extends Omit<ReasoningProps, "title" | "status"> {
    title: string;
    description?: string;
    streaming?: boolean;
    actions?: React.ReactNode;
    footer?: React.ReactNode;
}
/** A proposed plan with supplied steps and actions. Execution remains application-owned. */
export declare const Plan: React.ForwardRefExoticComponent<PlanProps & React.RefAttributes<HTMLDetailsElement>>;
