import * as React from "react";
import { type IconName } from "./icon.js";
export interface ToolbarAction {
    id: string;
    label: string;
    icon?: IconName;
    disabled?: boolean;
    pressed?: boolean;
    onAction: () => void;
}
export interface ToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
    actions: ToolbarAction[];
    orientation?: "horizontal" | "vertical";
}
/** Named action collection with one Tab stop and roving keyboard focus. */
export declare const Toolbar: React.ForwardRefExoticComponent<ToolbarProps & React.RefAttributes<HTMLDivElement>>;
