import * as React from "react";
import { type LineChartProps } from "./line.js";
export type AreaChartProps = Omit<LineChartProps, "area">;
/** Filled field. Same law as the line: hairlines, texture, one optional spot. */
export declare const AreaChart: React.ForwardRefExoticComponent<AreaChartProps & React.RefAttributes<HTMLDivElement>>;
