import * as React from "react";
export type AlarmAction = "acknowledge" | "shelve" | "unshelve";
export type AlarmFilter = "all" | "active" | "unacknowledged" | "shelved";
export interface AlarmRecord {
    id: string;
    label: string;
    source?: string;
    priority?: string;
    condition: "active" | "cleared" | "unknown";
    acknowledgement: "acknowledged" | "unacknowledged" | "unknown";
    shelving: "shelved" | "unshelved" | "unknown";
    /** Supplied expiry text; the component never schedules a shelving timer. */
    shelvedUntilLabel?: string;
    dateTime?: string;
    timeLabel?: string;
    note?: React.ReactNode;
    /** Actions allowed by the host, independently of the displayed lifecycle fields. */
    actions?: readonly AlarmAction[];
    pending?: boolean;
}
export interface AlarmPanelProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
    alarms: readonly AlarmRecord[];
    filter?: AlarmFilter;
    defaultFilter?: AlarmFilter;
    onFilterChange?: (filter: AlarmFilter) => void;
    /** Requests an operation. Update the supplied record only after the host confirms it. */
    onAction?: (id: string, action: AlarmAction) => void;
    disabled?: boolean;
    description?: React.ReactNode;
}
/** An industrial alarm's condition, acknowledgement and shelving are independent records. */
export declare const AlarmPanel: React.ForwardRefExoticComponent<AlarmPanelProps & React.RefAttributes<HTMLDivElement>>;
