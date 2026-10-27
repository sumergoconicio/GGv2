import * as React from "react";
export interface HighlightedCodeProps extends React.HTMLAttributes<HTMLElement> {
    code: string;
    language?: string;
    /** Keep an unfinished source block readable without repeatedly highlighting it. */
    streaming?: boolean;
    lineNumbers?: boolean;
    /** Maximum scrollable source height in pixels. */
    maxHeight?: number;
    copyable?: boolean;
    downloadable?: boolean;
    filename?: string;
    onCopyCode?: (code: string) => void | Promise<void>;
}
/** Optional Shiki renderer with lazy grammars, monochrome tokens, and exact-source copy. */
export declare const HighlightedCode: React.ForwardRefExoticComponent<HighlightedCodeProps & React.RefAttributes<HTMLElement>>;
