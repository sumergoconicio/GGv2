import * as React from "react";
export interface AndroidListProps extends React.HTMLAttributes<HTMLUListElement> {
}
export declare const AndroidList: React.ForwardRefExoticComponent<AndroidListProps & React.RefAttributes<HTMLUListElement>>;
export interface AndroidListRowProps extends Omit<React.LiHTMLAttributes<HTMLLIElement>, "children"> {
    headline: React.ReactNode;
    supportingText?: React.ReactNode;
    overline?: React.ReactNode;
    leading?: React.ReactNode;
    trailing?: React.ReactNode;
    onAction?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    /** Native attributes for the row's optional button. Trailing controls remain siblings. */
    actionProps?: Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children" | "onClick" | "disabled" | "className" | "style">;
}
export declare const AndroidListRow: React.ForwardRefExoticComponent<AndroidListRowProps & React.RefAttributes<HTMLLIElement>>;
