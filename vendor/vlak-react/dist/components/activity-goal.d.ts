import * as React from "react";
export interface ActivityGoalProps extends React.HTMLAttributes<HTMLDivElement> {
    label: React.ReactNode;
    description?: React.ReactNode;
    /** A supplied amount. null means no recorded amount; zero is a valid record. */
    current: number | null;
    /** A positive caller-owned goal. null means no goal has been set. */
    target: number | null;
    unit: string;
}
/** Progress toward a supplied activity goal, without recommended targets or scores. */
export declare const ActivityGoal: React.ForwardRefExoticComponent<ActivityGoalProps & React.RefAttributes<HTMLDivElement>>;
