import * as React from "react";
export type SchedulerView = "agenda" | "week" | "month";
export interface SchedulerEvent {
    id: string;
    title: string;
    start: Date;
    end: Date;
    disabled?: boolean;
}
export interface SchedulerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue"> {
    events: readonly SchedulerEvent[];
    value?: Date;
    defaultValue?: Date;
    onValueChange?: (day: Date) => void;
    view?: SchedulerView;
    defaultView?: SchedulerView;
    onViewChange?: (view: SchedulerView) => void;
    onEventSelect?: (event: SchedulerEvent) => void;
    onSlotSelect?: (start: Date) => void;
    onEventMove?: (event: SchedulerEvent, next: {
        start: Date;
        end: Date;
    }) => void;
    weekStart?: 0 | 1;
    locale?: string;
    /** IANA zone, for example Europe/Amsterdam. Defaults to the browser zone. */
    timeZone?: string;
    label?: string;
    disabled?: boolean;
}
/** Agenda, week, and month planning in an explicit or browser-local zone. Mutations are callbacks. */
export declare const Scheduler: React.ForwardRefExoticComponent<SchedulerProps & React.RefAttributes<HTMLDivElement>>;
