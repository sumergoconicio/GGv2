import * as React from "react";
import { type NativeDialogOptions } from "./dialog.js";
export interface SheetProps extends Omit<React.DialogHTMLAttributes<HTMLDialogElement>, "open" | "onClose">, NativeDialogOptions {
    side?: "left" | "right";
}
/**
 * A native <dialog> at the screen edge. The platform provides the
 * focus trap, Escape, and the backdrop; the title names it.
 */
export declare const Sheet: React.ForwardRefExoticComponent<SheetProps & React.RefAttributes<HTMLDialogElement>>;
export interface SheetTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}
export declare const SheetTitle: React.ForwardRefExoticComponent<SheetTitleProps & React.RefAttributes<HTMLHeadingElement>>;
export declare const SheetBody: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
