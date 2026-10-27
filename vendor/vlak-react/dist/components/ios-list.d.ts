import * as React from "react";
export interface IOSListProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
    title?: React.ReactNode;
    footer?: React.ReactNode;
}
export interface IOSListRowProps extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
    label: React.ReactNode;
    description?: React.ReactNode;
    leading?: React.ReactNode;
    trailing?: React.ReactNode;
    disabled?: boolean;
    disclosure?: boolean;
}
/** An inset group of rows; controls remain separate focus targets. */
export declare const IOSList: React.ForwardRefExoticComponent<IOSListProps & React.RefAttributes<HTMLElement>>;
/** Supply onClick for a native button, or omit it to hold a switch or other input. */
export declare const IOSListRow: React.ForwardRefExoticComponent<IOSListRowProps & React.RefAttributes<HTMLElement>>;
