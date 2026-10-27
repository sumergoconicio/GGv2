import * as React from "react";
export interface AppointmentCardProps extends React.HTMLAttributes<HTMLDivElement> {
    appointmentTitle: string;
    dateLabel: React.ReactNode;
    timeLabel: React.ReactNode;
    /** Supplied display timezone; the component performs no date conversion. */
    timeZone: React.ReactNode;
    dateTime?: string;
    clinician?: React.ReactNode;
    location?: React.ReactNode;
    status: React.ReactNode;
    /** Actual links or buttons whose actions are owned by the application. */
    children?: React.ReactNode;
}
/** Appointment details exactly as supplied, with an application-owned action slot. */
export declare const AppointmentCard: React.ForwardRefExoticComponent<AppointmentCardProps & React.RefAttributes<HTMLDivElement>>;
