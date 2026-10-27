import * as React from "react";
export interface ActivityEvent {
    id: string;
    title: React.ReactNode;
    dateTime: string;
    timeLabel?: string;
    actor?: React.ReactNode;
    description?: React.ReactNode;
    details?: React.ReactNode;
}
export interface ActivityTimelineProps extends React.HTMLAttributes<HTMLOListElement> {
    events: ActivityEvent[];
    emptyLabel?: string;
    locale?: string;
    timeZone?: string;
}
/** Chronological events in caller-supplied order, with optional native disclosures. */
export declare const ActivityTimeline: React.ForwardRefExoticComponent<ActivityTimelineProps & React.RefAttributes<HTMLOListElement>>;
