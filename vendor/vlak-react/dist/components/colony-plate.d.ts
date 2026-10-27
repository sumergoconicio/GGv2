import * as React from "react";
export interface ColonyMarker {
    id: string;
    label: string;
    /** Normalized plate coordinates from 0 to 100, with the origin at the upper left. */
    x: number | null;
    y: number | null;
    description?: React.ReactNode;
    disabled?: boolean;
}
export interface ColonyPlateProps extends Omit<React.HTMLAttributes<HTMLElement>, "defaultValue"> {
    label: string;
    markers: readonly ColonyMarker[];
    plateId?: string;
    source?: React.ReactNode;
    /** The source's recorded count, independent of the number of supplied marker records. */
    recordedCount?: number | null;
    value?: string | null;
    defaultValue?: string | null;
    onValueChange?: (id: string | null) => void;
    readOnly?: boolean;
}
/** A supplied plate record. Marker positions and source count are never detected or inferred. */
export declare const ColonyPlate: React.ForwardRefExoticComponent<ColonyPlateProps & React.RefAttributes<HTMLElement>>;
