import * as React from "react";
export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
}
export declare const Tabs: React.ForwardRefExoticComponent<TabsProps & React.RefAttributes<HTMLDivElement>>;
export interface TabListProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Stacked tabs answer Up/Down instead of Left/Right. */
    orientation?: "horizontal" | "vertical";
}
/** Roving tabs: arrows step, Home/End jump, and selection follows focus. */
export declare const TabList: React.ForwardRefExoticComponent<TabListProps & React.RefAttributes<HTMLDivElement>>;
export interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    value: string;
}
export declare const Tab: React.ForwardRefExoticComponent<TabProps & React.RefAttributes<HTMLButtonElement>>;
export interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string;
}
export declare const TabPanel: React.ForwardRefExoticComponent<TabPanelProps & React.RefAttributes<HTMLDivElement>>;
