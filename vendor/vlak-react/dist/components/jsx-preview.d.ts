import * as React from "react";
export interface JSXPreviewProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "onError"> {
    jsx: string;
    streaming?: boolean;
    /** Trusted, display-only application components. Do not expose components that execute operations during render. */
    components?: Record<string, React.ElementType>;
    /** Plain data only. Calls, functions, accessors and prototype access are rejected. */
    bindings?: Record<string, unknown>;
    onError?: (error: Error) => void;
    fallback?: React.ReactNode | ((error: Error) => React.ReactNode);
}
/** Optional Acorn-validated JSX data renderer. This is not a general JavaScript sandbox. */
export declare const JSXPreview: React.ForwardRefExoticComponent<JSXPreviewProps & React.RefAttributes<HTMLDivElement>>;
