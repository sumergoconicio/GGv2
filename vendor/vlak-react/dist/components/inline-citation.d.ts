import * as React from "react";
import { type CitationSource } from "./sources.js";
export interface InlineCitationProps extends React.HTMLAttributes<HTMLSpanElement> {
    sources: readonly CitationSource[];
    label?: string;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    index?: number;
    defaultIndex?: number;
    onIndexChange?: (index: number) => void;
}
/** A keyboard-reachable source preview with count, quotes and navigation through multiple citations. */
export declare const InlineCitation: React.ForwardRefExoticComponent<InlineCitationProps & React.RefAttributes<HTMLSpanElement>>;
