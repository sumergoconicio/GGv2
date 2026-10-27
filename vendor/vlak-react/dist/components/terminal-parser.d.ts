export interface TerminalAttributes {
    bold?: boolean;
    dim?: boolean;
    italic?: boolean;
    underline?: boolean;
    strike?: boolean;
    inverse?: boolean;
    foreground?: string;
    background?: string;
}
export interface TerminalRun extends TerminalAttributes {
    text: string;
}
export interface TerminalParserState {
    mode: "text" | "escape" | "csi" | "osc" | "osc-escape";
    parameters: string;
    attributes: TerminalAttributes;
    runs: TerminalRun[];
}
export declare function createTerminalParser(): TerminalParserState;
/** Incremental SGR output parser. OSC (including clipboard and hyperlink commands) is discarded. */
export declare function appendTerminalOutput(previous: TerminalParserState, text: string): TerminalParserState;
