import * as React from "react";
export interface StagePosition {
    readonly id: string;
    name: string;
    x: number | null;
    y: number | null;
    z: number | null;
    enabled: boolean;
    /** A supplied pending edit locks this record and adjacent reorder requests. */
    pending?: boolean;
}
export interface StageCoordinateFrame {
    id: string;
    label: string;
}
export interface StagePositionUnits {
    x: string | null;
    y: string | null;
    z: string | null;
}
export interface StagePositionListProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "defaultValue"> {
    label: React.ReactNode;
    coordinateFrame: StageCoordinateFrame | null;
    units: StagePositionUnits;
    positions: readonly StagePosition[];
    /** Controlled selected record identifier; pair with onValueChange for inspection. Missing or unknown identifiers never select a fallback. */
    value?: string | null;
    onValueChange?: (id: string) => void;
    onEnabledChange?: (id: string, enabled: boolean) => void;
    /** Requests an order of existing identifiers without changing records. */
    onOrderChange?: (ids: readonly string[]) => void;
    onRemove?: (id: string) => void;
    description?: React.ReactNode;
    /** Prevents record edits; inspection selection remains available. */
    readOnly?: boolean;
}
/** Supplied stage coordinates and controlled plan edits. No stage motion or coordinate conversion occurs. */
export declare const StagePositionList: React.ForwardRefExoticComponent<StagePositionListProps & React.RefAttributes<HTMLFieldSetElement>>;
