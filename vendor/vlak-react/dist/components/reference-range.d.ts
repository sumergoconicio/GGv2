import * as React from "react";
export interface ReferenceRangeProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
    value?: number | null;
    /** Caller-supplied lower bound. Omit for an upper bound only. */
    minimum?: number | null;
    /** Caller-supplied upper bound. Omit for a lower bound only. */
    maximum?: number | null;
    unit?: string;
    /** Display formatting for the supplied numeric value. */
    valueLabel?: string;
    /** Optional contextual label, such as the laboratory's reference interval. */
    rangeLabel?: string;
}
/** A supplied numeric reference interval. Position describes arithmetic, never clinical status. */
export declare const ReferenceRange: React.ForwardRefExoticComponent<ReferenceRangeProps & React.RefAttributes<HTMLDivElement>>;
