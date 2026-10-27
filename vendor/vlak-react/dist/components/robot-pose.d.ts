import * as React from "react";
export interface RobotPoseComponent {
    id: string;
    label: string;
    value: number | null;
    unit?: string;
}
export interface RobotPoseRecord {
    id: string;
    label: string;
    frame: string | null;
    timeLabel?: string | null;
    status: string | null;
    translation: {
        x: number | null;
        y: number | null;
        z: number | null;
        unit: string;
    };
    /** Supply the representation and conventions explicitly; values are never converted or normalized. */
    orientation: {
        representation: string;
        components: readonly RobotPoseComponent[];
    };
}
export interface RobotPoseProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "defaultValue"> {
    label: string;
    poses: readonly RobotPoseRecord[];
    value?: string | null;
    defaultValue?: string | null;
    onValueChange?: (poseId: string | null) => void;
    readOnly?: boolean;
    description?: React.ReactNode;
}
/** Exact supplied Cartesian and orientation records, with no frame transform or pose computation. */
export declare const RobotPose: React.ForwardRefExoticComponent<RobotPoseProps & React.RefAttributes<HTMLFieldSetElement>>;
