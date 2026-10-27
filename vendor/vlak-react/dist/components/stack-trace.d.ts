import * as React from "react";
export interface StackFrame {
    raw: string;
    functionName?: string;
    filePath?: string;
    lineNumber?: number;
    columnNumber?: number;
    isInternal: boolean;
}
export interface ParsedStackTrace {
    errorType?: string;
    errorMessage: string;
    frames: StackFrame[];
    omittedFrames: number;
    raw: string;
}
export interface StackTraceProps extends Omit<React.HTMLAttributes<HTMLElement>, "onCopy"> {
    trace: string;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    onFilePathClick?: (filePath: string, line?: number, column?: number) => void;
    onCopy?: (trace: string) => void | Promise<void>;
    maxFrames?: number;
}
/** Parses V8/Node and Firefox/Safari locations; unknown frame text remains readable. */
export declare function parseStackTrace(trace: string, maxFrames?: number): ParsedStackTrace;
export declare const StackTrace: React.ForwardRefExoticComponent<StackTraceProps & React.RefAttributes<HTMLElement>>;
