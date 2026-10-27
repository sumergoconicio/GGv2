import * as React from "react";
export interface RobotMissionAction {
    id: string;
    label: string;
    disabled?: boolean;
    description?: string;
}
export interface RobotMissionStep {
    id: string;
    label: string;
    detail?: string;
    status: string;
    confirmedLabel?: string;
    pending?: boolean;
    actions?: readonly RobotMissionAction[];
}
export interface RobotMissionQueueProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
    label: string;
    steps: readonly RobotMissionStep[];
    /** Proposed step identifiers in order; the host confirms and supplies the resulting records. */
    onOrderChange?: (stepIds: readonly string[]) => void;
    onAction?: (stepId: string, actionId: string) => void;
    readOnly?: boolean;
    description?: React.ReactNode;
}
/** A supplied mission order, recorded step states, and explicit host request actions. */
export declare const RobotMissionQueue: React.ForwardRefExoticComponent<RobotMissionQueueProps & React.RefAttributes<HTMLFieldSetElement>>;
