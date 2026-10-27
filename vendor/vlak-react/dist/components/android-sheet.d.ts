import * as React from "react";
export interface AndroidSheetProps extends Omit<React.DialogHTMLAttributes<HTMLDialogElement>, "open" | "onClose"> {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    onClose?: () => void;
    dismissable?: boolean;
    lightDismiss?: boolean;
    closeLabel?: string;
}
export declare const AndroidSheet: React.ForwardRefExoticComponent<AndroidSheetProps & React.RefAttributes<HTMLDialogElement>>;
export declare const AndroidSheetTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
export declare const AndroidSheetBody: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
