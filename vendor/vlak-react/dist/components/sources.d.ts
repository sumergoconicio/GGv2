import * as React from "react";
export interface CitationSource {
    id: string;
    title: string;
    url: string;
    description?: string;
    quote?: string;
}
export interface SourcesProps extends Omit<React.DetailsHTMLAttributes<HTMLDetailsElement>, "title"> {
    sources: readonly CitationSource[];
    label?: string;
    defaultOpen?: boolean;
}
/** External web addresses and document-relative references; executable URL schemes are omitted. */
export declare function sourceHref(value: string): string | undefined;
/** A counted native disclosure of application-supplied source links and optional quotes. */
export declare const Sources: React.ForwardRefExoticComponent<SourcesProps & React.RefAttributes<HTMLDetailsElement>>;
