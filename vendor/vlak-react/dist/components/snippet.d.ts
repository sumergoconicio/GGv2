import * as React from "react";
export interface SnippetCopyProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, "onCopy"> {
    value: string;
    label?: string;
    onCopy?: (value: string) => void | Promise<void>;
}
export interface SnippetProps extends Omit<React.HTMLAttributes<HTMLElement>, "onCopy" | "prefix"> {
    code: string;
    prefix?: React.ReactNode;
    label?: string;
    copyLabel?: string;
    copyable?: boolean;
    onCopy?: (value: string) => void | Promise<void>;
}
/** Exact-value clipboard action shared by compact developer views. */
export declare const SnippetCopy: React.ForwardRefExoticComponent<SnippetCopyProps & React.RefAttributes<HTMLSpanElement>>;
/** A compact, selectable command or code line; the decorative prefix is not copied. */
export declare const Snippet: React.ForwardRefExoticComponent<SnippetProps & React.RefAttributes<HTMLElement>>;
