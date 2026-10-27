import * as React from "react";
export type WidgetStatus = "ready" | "loading" | "empty" | "error";
export interface WidgetProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
    /** Visible name of this widget and its region. */
    title: React.ReactNode;
    /** Name or linked attribution for the application or integration supplying the content. */
    provider?: React.ReactNode;
    /** Optional decorative provider or content mark. */
    icon?: React.ReactNode;
    description?: React.ReactNode;
    /** Application-supplied data state. The widget never fetches data itself. */
    status?: WidgetStatus;
    statusLabel?: string;
    emptyMessage?: string;
    errorMessage?: string;
    onRetry?: () => void | Promise<void>;
    /** Application-owned controls, rendered after the content. */
    actions?: React.ReactNode;
    /** Supporting source, update time, or context below the actions. */
    footer?: React.ReactNode;
    children?: React.ReactNode;
}
export interface WidgetEmbedProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
    /** Descriptive name of the embedded interface, announced to assistive technology. */
    title: string;
    /** Address supplied by the application or its connected provider. */
    src: string;
}
/** An explicitly sized provider iframe for a Widget. Permissions and provider messaging remain application-owned. */
export declare const WidgetEmbed: React.ForwardRefExoticComponent<WidgetEmbedProps & React.RefAttributes<HTMLIFrameElement>>;
/** A shared surface for application and third-party React content, with explicit data states. */
export declare const Widget: React.ForwardRefExoticComponent<WidgetProps & React.RefAttributes<HTMLElement>>;
