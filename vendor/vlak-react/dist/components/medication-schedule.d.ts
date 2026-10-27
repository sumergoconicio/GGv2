import * as React from "react";
export interface MedicationScheduleAction {
    id: string;
    /** An explicit recording choice, for example "Record as taken". */
    label: string;
    disabled?: boolean;
}
export interface MedicationScheduleItem {
    id: string;
    name: string;
    dose: React.ReactNode;
    timeLabel: React.ReactNode;
    /** Optional machine-readable value; never parsed or reformatted. */
    dateTime?: string;
    /** Recorded status supplied by the application, never inferred from the time. */
    status: React.ReactNode;
    instructions?: React.ReactNode;
    actions?: readonly MedicationScheduleAction[];
    pending?: boolean;
    pendingLabel?: React.ReactNode;
    disabled?: boolean;
}
export interface MedicationScheduleProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onAction"> {
    items: readonly MedicationScheduleItem[];
    /** Display label supplied by the application, including any relevant UTC offset. */
    timeZone: React.ReactNode;
    dateLabel?: React.ReactNode;
    emptyLabel?: React.ReactNode;
    /** Requests a record change. The caller persists it and supplies updated items. */
    onAction?: (itemId: string, actionId: string) => void;
}
/** A controlled record of supplied medication rows, not a dosing or reminder engine. */
export declare const MedicationSchedule: React.ForwardRefExoticComponent<MedicationScheduleProps & React.RefAttributes<HTMLDivElement>>;
