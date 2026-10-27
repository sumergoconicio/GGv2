import * as React from "react";
export interface WebPreviewLog {
    id?: string;
    level: "log" | "info" | "warn" | "error";
    message: string;
    timestamp?: string | Date;
}
export interface WebPreviewProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
    title?: string;
    url?: string;
    defaultUrl?: string;
    onUrlChange?: (url: string) => void;
    onBack?: () => void;
    onForward?: () => void;
    canGoBack?: boolean;
    canGoForward?: boolean;
    onReload?: () => void;
    logs?: WebPreviewLog[];
    maxLogEntries?: number;
    /** iframe permissions remain application-controlled; scripts and forms are allowed without same-origin access by default. */
    frameProps?: Omit<React.ComponentPropsWithRef<"iframe">, "src" | "srcDoc" | "title" | "children">;
}
export declare function isPreviewUrl(value: string): boolean;
/** URL navigation and a sandboxed iframe with host-supplied console messages. */
export declare const WebPreview: React.ForwardRefExoticComponent<WebPreviewProps & React.RefAttributes<HTMLElement>>;
