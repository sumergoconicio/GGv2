import * as React from "react";
export interface CarePlanTask {
    id: string;
    title: string;
    owner?: React.ReactNode;
    dueLabel?: React.ReactNode;
    /** The application's recorded status. Not inferred from a due date. */
    status: React.ReactNode;
    description?: React.ReactNode;
    /** Omit for unknown completion; a control requires an explicit boolean. */
    completed?: boolean;
    pending?: boolean;
    pendingLabel?: React.ReactNode;
    disabled?: boolean;
}
export interface CarePlanProps extends React.HTMLAttributes<HTMLDivElement> {
    tasks: readonly CarePlanTask[];
    description?: React.ReactNode;
    emptyLabel?: React.ReactNode;
    /** Requests a change only. Persist it and return updated tasks from the caller. */
    onCompletedChange?: (taskId: string, completed: boolean) => void;
}
/** A supplied care task list with controlled completion requests and explicit pending states. */
export declare const CarePlan: React.ForwardRefExoticComponent<CarePlanProps & React.RefAttributes<HTMLDivElement>>;
