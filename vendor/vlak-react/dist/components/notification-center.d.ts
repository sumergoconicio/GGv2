import * as React from "react";
export interface NotificationItem {
    id: string;
    title: string;
    description?: React.ReactNode;
    dateTime?: string;
    timeLabel?: string;
    read?: boolean;
    action?: {
        label: string;
        onAction: () => void;
    };
}
export interface NotificationCenterProps extends Omit<React.HTMLAttributes<HTMLElement>, "defaultValue"> {
    value?: NotificationItem[];
    defaultValue?: NotificationItem[];
    onValueChange?: (items: NotificationItem[]) => void;
    label?: string;
    emptyLabel?: string;
}
/** Persistent notifications with controlled read/unread and dismissal state. */
export declare const NotificationCenter: React.ForwardRefExoticComponent<NotificationCenterProps & React.RefAttributes<HTMLElement>>;
