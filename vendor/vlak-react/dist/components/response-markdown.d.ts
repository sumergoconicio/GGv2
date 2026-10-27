import * as React from "react";
import { type Components } from "streamdown";
export interface ResponseMarkdownProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
    children: string;
    /** True while the application is receiving this response. */
    streaming?: boolean;
    math?: boolean;
    diagrams?: boolean;
    lineNumbers?: boolean;
    /** Only images from these exact origins load. The default renders image descriptions. */
    imageOrigins?: readonly string[];
    /** Origin used to resolve relative image addresses. */
    baseUrl?: string;
    /** Trusted application components override Vlak's Markdown elements. */
    components?: Components;
}
/** Optional streaming Markdown, math, code, and diagrams with Vlak paint and safe default URLs. */
export declare const ResponseMarkdown: React.ForwardRefExoticComponent<ResponseMarkdownProps & React.RefAttributes<HTMLDivElement>>;
