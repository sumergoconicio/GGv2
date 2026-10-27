import * as React from "react";
export interface ToastOptions {
    description?: React.ReactNode;
    /** Overrides the computed lifetime, in milliseconds. */
    duration?: number;
}
/** Fire a toast from anywhere; a mounted <Toaster /> renders it. */
export declare function toast(title: React.ReactNode, options?: ToastOptions): void;
export interface ToasterProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The shortest a toast stays, in milliseconds. Longer text stays longer. */
    duration?: number;
    /** Accessible name of the close button on every toast. */
    closeLabel?: string;
}
export declare const Toaster: React.ForwardRefExoticComponent<ToasterProps & React.RefAttributes<HTMLDivElement>>;
