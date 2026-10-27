import * as React from "react";
import { type ToolCallProps } from "./tool-call.js";
export interface SandboxProps extends Omit<ToolCallProps, "input" | "output"> {
    code: string;
    language?: string;
    output?: React.ReactNode;
    codeContent?: React.ReactNode;
    tab?: "code" | "output";
    defaultTab?: "code" | "output";
    onTabChange?: (tab: "code" | "output") => void;
}
/** A code/output disclosure. Execution and process isolation remain application-owned. */
export declare const Sandbox: React.ForwardRefExoticComponent<SandboxProps & React.RefAttributes<HTMLDetailsElement>>;
