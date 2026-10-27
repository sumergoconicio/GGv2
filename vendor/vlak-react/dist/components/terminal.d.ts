import * as React from "react";
export interface TerminalProps extends Omit<React.HTMLAttributes<HTMLElement>, "onCopy" | "title"> {
    output: string;
    title?: React.ReactNode;
    streaming?: boolean;
    autoScroll?: boolean;
    /** Explicitly opt into original ANSI colors. The default retains text attributes in monochrome. */
    ansiColors?: boolean;
    onClear?: () => void;
    onCopy?: (output: string) => void | Promise<void>;
    maxHeight?: React.CSSProperties["maxHeight"];
    /** Maximum visible source characters. Copy retains the complete original output. */
    maxCharacters?: number;
}
/** Streaming console output with incremental ANSI attributes; not a shell or terminal emulator. */
export declare const Terminal: React.ForwardRefExoticComponent<TerminalProps & React.RefAttributes<HTMLElement>>;
