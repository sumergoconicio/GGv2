import * as React from "react";
export interface CodeBlockProps extends React.HTMLAttributes<HTMLElement> {
    code: string;
    language?: string;
    lineNumbers?: boolean;
    wrap?: boolean;
    copyable?: boolean;
    onCopyCode?: (code: string) => void | Promise<void>;
}
/** Plain source with optional numbering and honest asynchronous copy feedback. */
export declare const CodeBlock: React.ForwardRefExoticComponent<CodeBlockProps & React.RefAttributes<HTMLElement>>;
