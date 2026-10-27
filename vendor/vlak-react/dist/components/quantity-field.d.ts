import * as React from "react";
export interface QuantityValue {
    amount: number | null;
    unit: string | null;
}
export interface QuantityUnit {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface QuantityFieldProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "defaultValue"> {
    label: React.ReactNode;
    units: readonly QuantityUnit[];
    value?: QuantityValue;
    defaultValue?: QuantityValue;
    /** Requests a quantity change. A unit change preserves the amount; the host owns conversion. */
    onValueChange?: (value: QuantityValue) => void;
    description?: React.ReactNode;
    /** Input names: name submits the amount; unitName defaults to name + '.unit'. */
    unitName?: string;
    amountLabel?: string;
    unitLabel?: string;
    unitPlaceholder?: string;
    min?: number;
    max?: number;
    step?: number | "any";
    required?: boolean;
    readOnly?: boolean;
}
/** A native numeric input and unit selector. Selection never converts the amount. */
export declare const QuantityField: React.ForwardRefExoticComponent<QuantityFieldProps & React.RefAttributes<HTMLFieldSetElement>>;
