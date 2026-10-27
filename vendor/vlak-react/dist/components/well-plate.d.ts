import * as React from "react";
export interface WellPosition {
    row: string;
    column: string;
}
export interface WellRecord extends WellPosition {
    status: string;
    label?: string;
    disabled?: boolean;
}
export interface WellPlateProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue"> {
    label: string;
    rows: readonly string[];
    columns: readonly string[];
    wells: readonly WellRecord[];
    value?: WellPosition | null;
    defaultValue?: WellPosition | null;
    onValueChange?: (value: WellPosition) => void;
    description?: React.ReactNode;
    disabled?: boolean;
    /** Static well cells add no tab stops; their scroll container remains focusable. */
    readOnly?: boolean;
}
/** A plate of up to 1536 wells, with roving keyboard focus and explicit unrecorded cells. */
export declare const WellPlate: React.ForwardRefExoticComponent<WellPlateProps & React.RefAttributes<HTMLDivElement>>;
