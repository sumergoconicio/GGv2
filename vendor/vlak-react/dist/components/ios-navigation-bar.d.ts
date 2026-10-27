import * as React from "react";
export interface IOSNavigationBarAction extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
    id: string;
    label: string;
    icon?: React.ReactNode;
    /** Explicit DOM ID when another element needs to reference this action. */
    buttonId?: string;
}
export interface IOSNavigationBarProps extends Omit<React.HTMLAttributes<HTMLElement>, "title" | "children"> {
    title: React.ReactNode;
    onBack?: () => void;
    backLabel?: string;
    actions?: IOSNavigationBarAction[];
    orientation?: "horizontal" | "vertical";
    largeTitle?: boolean;
}
/** Compact and large-title navigation, with an optional trailing Duo action rail. */
export declare const IOSNavigationBar: React.ForwardRefExoticComponent<IOSNavigationBarProps & React.RefAttributes<HTMLElement>>;
