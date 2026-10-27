import * as React from "react";
export interface ActivityRingGoal {
    id: string;
    label: string;
    /** A recorded amount; null is unrecorded and zero is valid. */
    current: number | null;
    /** A positive personal target supplied by the application. */
    target: number | null;
    unit: string;
}
export interface ActivityRingsProps extends React.HTMLAttributes<HTMLElement> {
    label: string;
    /** One to six goals are drawn from the outside inward. Every goal retains a text record. */
    goals: readonly ActivityRingGoal[];
    description?: React.ReactNode;
    /** Sweep each ring into its supplied value on first view. Reduced motion stays instant. */
    animate?: boolean;
    /** Gentle lines rotate every ten seconds without immediate repetition. false hides the line. */
    encouragement?: readonly string[] | false;
}
/** Concentric personal-goal progress, with a complete named record for each ring. */
export declare const ActivityRings: React.ForwardRefExoticComponent<ActivityRingsProps & React.RefAttributes<HTMLElement>>;
