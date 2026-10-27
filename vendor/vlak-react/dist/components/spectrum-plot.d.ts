import * as React from "react";
export interface SpectrumPoint {
    x: number;
    y: number;
}
export interface SpectrumPeak extends SpectrumPoint {
    id: string;
    label: string;
}
export interface SpectrumPlotProps extends React.HTMLAttributes<HTMLElement> {
    label: string;
    /** Up to 4096 supplied points, connected in the supplied order without resampling. */
    points: readonly SpectrumPoint[];
    xLabel: string;
    yLabel: string;
    xUnit?: string;
    yUnit?: string;
    xDomain?: readonly [number, number];
    yDomain?: readonly [number, number];
    /** Up to 128 supplied annotations. The component never detects peaks. */
    peaks?: readonly SpectrumPeak[];
    description?: React.ReactNode;
}
/** A supplied spectrum and peak annotations, with a paginated complete data table. */
export declare const SpectrumPlot: React.ForwardRefExoticComponent<SpectrumPlotProps & React.RefAttributes<HTMLElement>>;
