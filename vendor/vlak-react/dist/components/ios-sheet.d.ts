import * as React from "react";
export interface IOSSheetProps extends Omit<React.DialogHTMLAttributes<HTMLDialogElement>, "open" | "onClose" | "title"> {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    onClose?: () => void;
    title: React.ReactNode;
    description?: React.ReactNode;
    closeLabel?: string;
    dismissable?: boolean;
    lightDismiss?: boolean;
}
/** A modal bottom sheet. The platform owns the focus trap and top layer. */
export declare const IOSSheet: React.ForwardRefExoticComponent<IOSSheetProps & React.RefAttributes<HTMLDialogElement>>;
