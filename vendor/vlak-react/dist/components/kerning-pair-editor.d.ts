import * as React from "react";
export interface KerningPair {
    id: string;
    left: string;
    right: string;
    label?: string;
}
export type KerningOffsets = Record<string, number | null>;
export interface KerningPairEditorProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "defaultValue" | "onChange"> {
    label: React.ReactNode;
    pairs: KerningPair[];
    fontFamily: string;
    unitsPerEm: number;
    baselineOffsets?: KerningOffsets;
    value?: KerningOffsets;
    defaultValue?: KerningOffsets;
    onValueChange?: (offsets: KerningOffsets) => void;
    activePairId?: string | null;
    defaultActivePairId?: string | null;
    onActivePairChange?: (id: string | null) => void;
    min?: number;
    max?: number;
    readOnly?: boolean;
}
/** Explicit pair offsets with browser font previews, without font-file editing or shaping. */
export declare const KerningPairEditor: React.ForwardRefExoticComponent<KerningPairEditorProps & React.RefAttributes<HTMLFieldSetElement>>;
