import * as React from "react";
export interface PatchPort {
    id: string;
    label: string;
    group?: string;
    signalType: string;
}
export interface PatchConnection {
    sourceId: string;
    destinationId: string;
}
export interface PatchbayProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "defaultValue" | "onChange"> {
    label: React.ReactNode;
    sources: PatchPort[];
    destinations: PatchPort[];
    value?: PatchConnection[];
    defaultValue?: PatchConnection[];
    onValueChange?: (connections: PatchConnection[]) => void;
    /** Additional host constraints. Matching signal types are required by default. */
    getBlockReason?: (source: PatchPort, destination: PatchPort) => string | null;
    readOnly?: boolean;
}
/** A connection matrix for supplied ports; the caller owns the routing engine. */
export declare const Patchbay: React.ForwardRefExoticComponent<PatchbayProps & React.RefAttributes<HTMLFieldSetElement>>;
