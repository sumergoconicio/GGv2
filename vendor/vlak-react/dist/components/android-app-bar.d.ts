import * as React from "react";
export interface AndroidAppBarProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
    title: React.ReactNode;
    navigation?: React.ReactNode;
    actions?: React.ReactNode;
    variant?: "small" | "medium";
}
export declare const AndroidAppBar: React.ForwardRefExoticComponent<AndroidAppBarProps & React.RefAttributes<HTMLElement>>;
export declare const AndroidAppBarAction: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
