import * as React from "react";
export interface EnvironmentVariable {
    name: string;
    value: string;
    required?: boolean;
    description?: string;
}
export interface EnvironmentVariablesProps extends Omit<React.HTMLAttributes<HTMLElement>, "onCopy" | "title"> {
    variables: EnvironmentVariable[];
    title?: React.ReactNode;
    showValues?: boolean;
    defaultShowValues?: boolean;
    onShowValuesChange?: (show: boolean) => void;
    onCopy?: (value: string) => void | Promise<void>;
}
/** POSIX shell-safe assignments. Invalid names are rejected rather than emitted as executable shell text. */
export declare function formatEnvironmentExports(variables: EnvironmentVariable[]): string;
/** Masked values with deliberate reveal and exact-value/export copy actions. */
export declare const EnvironmentVariables: React.ForwardRefExoticComponent<EnvironmentVariablesProps & React.RefAttributes<HTMLElement>>;
