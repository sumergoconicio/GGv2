import * as React from "react";
export interface AcquisitionChannel {
    id: string;
    label: string;
    disabled?: boolean;
}
export interface AcquisitionStepAction {
    id: string;
    label: string;
    disabled?: boolean;
}
export interface AcquisitionStep {
    id: string;
    label: string;
    exposure: number | null;
    exposureUnit: string;
    time: number | null;
    timeUnit: string;
    depth: number | null;
    depthUnit: string;
    channel: string | null;
    /** Actual recorded state supplied by the host, never inferred from edits or requests. */
    status: string;
    confirmedLabel?: string;
    pending?: boolean;
    actions?: readonly AcquisitionStepAction[];
}
export interface AcquisitionSequencerProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
    label: React.ReactNode;
    steps: readonly AcquisitionStep[];
    channels: readonly AcquisitionChannel[];
    onStepsChange?: (steps: readonly AcquisitionStep[]) => void;
    onAction?: (stepId: string, actionId: string) => void;
    description?: React.ReactNode;
    readOnly?: boolean;
}
/** A controlled capture plan editor and recorded-state display, without an acquisition engine. */
export declare const AcquisitionSequencer: React.ForwardRefExoticComponent<AcquisitionSequencerProps & React.RefAttributes<HTMLFieldSetElement>>;
