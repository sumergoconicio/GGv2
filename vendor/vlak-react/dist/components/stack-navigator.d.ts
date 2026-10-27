import * as React from "react";
export interface StackPosition {
    value?: number | string | null;
    label?: string;
    disabled?: boolean;
}
export interface StackAxis {
    id: string;
    label: string;
    unit?: string;
    positions: readonly StackPosition[];
}
/** Zero-based supplied position indexes. null means no selected position. */
export type StackSelection = Readonly<Record<string, number | null>>;
export interface StackNavigatorProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "defaultValue"> {
    label: React.ReactNode;
    axes: readonly StackAxis[];
    value?: StackSelection;
    defaultValue?: StackSelection;
    onValueChange?: (value: StackSelection) => void;
    description?: React.ReactNode;
    readOnly?: boolean;
}
/** Navigates supplied stack coordinates without calculating stage positions or calling an instrument. */
export declare const StackNavigator: React.ForwardRefExoticComponent<StackNavigatorProps & React.RefAttributes<HTMLFieldSetElement>>;
