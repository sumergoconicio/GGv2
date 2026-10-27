import * as React from "react";
export interface AgentToolDefinition {
    name: string;
    description?: string;
    inputSchema?: unknown;
}
export interface AgentProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
    name: string;
    model?: string;
    instructions?: React.ReactNode;
    tools?: AgentToolDefinition[];
    outputSchema?: unknown;
    /** Optional rich/schema renderer. The default safely displays objects or escaped source text. */
    renderSchema?: (schema: unknown, context: "input" | "output") => React.ReactNode;
}
/** Inspect agent configuration without instantiating tools or executing instructions. */
export declare const Agent: React.ForwardRefExoticComponent<AgentProps & React.RefAttributes<HTMLElement>>;
