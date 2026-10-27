import * as React from "react";
export interface ApplicationMilestone {
    id: string;
    label: React.ReactNode;
    status: React.ReactNode;
    description?: React.ReactNode;
    dateLabel?: React.ReactNode;
    dateTime?: string;
    /** Explicitly marks the current step. No step is selected from its date or status. */
    current?: boolean;
}
export interface ApplicationStatusProps extends React.HTMLAttributes<HTMLDivElement> {
    applicationTitle: string;
    reference?: React.ReactNode;
    status: React.ReactNode;
    statusDetail?: React.ReactNode;
    updatedLabel?: React.ReactNode;
    milestones: readonly ApplicationMilestone[];
    nextStep?: React.ReactNode;
    milestonesEmptyLabel?: React.ReactNode;
}
/** A case reference, explicit decision status, and supplied milestones with no inferred progress. */
export declare const ApplicationStatus: React.ForwardRefExoticComponent<ApplicationStatusProps & React.RefAttributes<HTMLDivElement>>;
