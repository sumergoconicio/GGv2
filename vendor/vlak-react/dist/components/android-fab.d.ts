import * as React from "react";
export interface AndroidFabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode;
}
export declare const AndroidFab: React.ForwardRefExoticComponent<AndroidFabProps & React.RefAttributes<HTMLButtonElement>>;
