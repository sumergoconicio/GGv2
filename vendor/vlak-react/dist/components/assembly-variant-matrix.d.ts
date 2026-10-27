import * as React from "react";
export interface AssemblyReference {
    id: string;
    label: string;
    partLabel?: string;
}
export interface AssemblyVariant {
    id: string;
    label: string;
}
export interface AssemblyVariantState {
    referenceId: string;
    variantId: string;
    populated: boolean | null;
    includeInBom: boolean | null;
    includeInPlacement: boolean | null;
}
export interface AssemblyVariantMatrixProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "defaultValue" | "onChange"> {
    label: React.ReactNode;
    references: AssemblyReference[];
    variants: AssemblyVariant[];
    value?: AssemblyVariantState[];
    defaultValue?: AssemblyVariantState[];
    onValueChange?: (cells: AssemblyVariantState[]) => void;
    readOnly?: boolean;
}
/** Independent fitted, bill-of-materials and placement choices per reference and variant. */
export declare const AssemblyVariantMatrix: React.ForwardRefExoticComponent<AssemblyVariantMatrixProps & React.RefAttributes<HTMLFieldSetElement>>;
