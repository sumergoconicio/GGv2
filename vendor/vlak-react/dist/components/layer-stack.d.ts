import * as React from "react";
export interface CreativeLayer {
    id: string;
    label: string;
    visible: boolean;
    locked: boolean;
}
export interface LayerStackProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
    label: React.ReactNode;
    /** Ordered from top to bottom. */
    layers: CreativeLayer[];
    selectedId?: string | null;
    onSelect?: (id: string) => void;
    onLayersChange?: (layers: CreativeLayer[]) => void;
    disabled?: boolean;
}
/** A controlled layer order with explicit selection, visibility, lock and move actions. */
export declare const LayerStack: React.ForwardRefExoticComponent<LayerStackProps & React.RefAttributes<HTMLDivElement>>;
