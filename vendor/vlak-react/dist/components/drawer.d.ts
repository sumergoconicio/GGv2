import * as React from "react";
import { type NativeDialogOptions } from "./dialog.js";
export interface DrawerProps extends Omit<React.DialogHTMLAttributes<HTMLDialogElement>, "open" | "onClose">, NativeDialogOptions {
}
/**
 * A native <dialog> from the bottom edge. The platform provides the
 * focus trap, Escape, and the backdrop; the title names it.
 */
export declare const Drawer: React.ForwardRefExoticComponent<DrawerProps & React.RefAttributes<HTMLDialogElement>>;
export interface DrawerTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}
export declare const DrawerTitle: React.ForwardRefExoticComponent<DrawerTitleProps & React.RefAttributes<HTMLHeadingElement>>;
export declare const DrawerBody: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
