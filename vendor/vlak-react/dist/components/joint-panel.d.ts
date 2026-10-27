import * as React from "react";
export interface JointRecord {
    id: string;
    label: string;
    unit: string;
    reported: number | null;
    minimum: number | null;
    maximum: number | null;
}
export type JointTargets = Record<string, number | null>;
export interface JointPanelProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "defaultValue"> {
    label: string;
    joints: readonly JointRecord[];
    value?: JointTargets;
    defaultValue?: JointTargets;
    onValueChange?: (targets: JointTargets) => void;
    /** Requests the complete draft. Motion and confirmation belong to the host. */
    onRequestTargets?: (targets: JointTargets) => void;
    pending?: boolean;
    confirmedLabel?: React.ReactNode;
    timeLabel?: React.ReactNode;
    description?: React.ReactNode;
    readOnly?: boolean;
}
/** Draft joint targets remain separate from host-reported positions and request confirmation. */
export declare const JointPanel: React.ForwardRefExoticComponent<JointPanelProps & React.RefAttributes<HTMLFieldSetElement>>;
