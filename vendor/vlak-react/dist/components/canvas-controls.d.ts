import * as React from "react";
export interface CanvasControlsProps extends React.HTMLAttributes<HTMLDivElement> {
    zoom?: number;
    defaultZoom?: number;
    onZoomChange?: (zoom: number) => void;
    minZoom?: number;
    maxZoom?: number;
    step?: number;
    onFit?: () => void;
    onReset?: () => void;
    disabled?: boolean;
    label?: string;
}
/** Zoom, fit, and reset actions for a canvas. The canvas owns pan and rendering. */
export declare const CanvasControls: React.ForwardRefExoticComponent<CanvasControlsProps & React.RefAttributes<HTMLDivElement>>;
