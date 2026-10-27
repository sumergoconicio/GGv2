import * as React from "react";
export interface WorkOffsetAxis {
    id: string;
    label: string;
    unit: string;
    machine: number | null;
    work: number | null;
}
export interface WorkOffsetSystem {
    id: string;
    label: string;
    disabled?: boolean;
}
export interface WorkOffsetValue {
    systemId: string | null;
    offsets: Record<string, number | null>;
}
export interface WorkOffsetPanelProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "defaultValue"> {
    label: string;
    axes: readonly WorkOffsetAxis[];
    systems: readonly WorkOffsetSystem[];
    /** Actual active system reported by the controller, independent of the draft selection. */
    activeSystemId: string | null;
    value?: WorkOffsetValue;
    defaultValue?: WorkOffsetValue;
    onValueChange?: (value: WorkOffsetValue) => void;
    /** Request a complete offset update; machine control and coordinate calculations belong to the host. */
    onApply?: (value: WorkOffsetValue) => void;
    offsetState?: "active" | "suspended" | "unknown";
    pending?: boolean;
    readOnly?: boolean;
    description?: React.ReactNode;
}
/** Edit a proposed offset while retaining independently supplied machine and work positions. */
export declare const WorkOffsetPanel: React.ForwardRefExoticComponent<WorkOffsetPanelProps & React.RefAttributes<HTMLFieldSetElement>>;
