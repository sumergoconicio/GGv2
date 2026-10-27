import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import { type Leaves } from "../rs.js";
export interface NativeDialogOptions {
    open: boolean;
    onClose?: () => void;
    /**
     * Escape (and any other platform close request) asks the parent to
     * close. Off, the dialog must be answered; maps to closedby="none".
     */
    dismissable?: boolean;
    /** A click on the backdrop closes too; maps to closedby="any". */
    lightDismiss?: boolean;
    /** Renders a labelled close button in the top corner. */
    closeLabel?: string;
}
export interface DialogProps extends Omit<React.DialogHTMLAttributes<HTMLDialogElement>, "open" | "onClose">, NativeDialogOptions {
    /** Extra StyleX leaves merged after the dialog frame (command palette). */
    extraStyles?: Leaves;
}
export declare const dialogStyles: Readonly<{
    readonly frame: Readonly<{
        readonly boxSizing: stylex.StyleXClassNameFor<"boxSizing", "border-box">;
        readonly maxWidth: stylex.StyleXClassNameFor<"maxWidth", "20rem" | "calc(100vw - 32px)">;
        readonly width: stylex.StyleXClassNameFor<"width", "calc(100vw - 32px)" | null>;
        readonly borderWidth: stylex.StyleXClassNameFor<"borderWidth", string>;
        readonly borderStyle: stylex.StyleXClassNameFor<"borderStyle", "solid">;
        readonly borderColor: stylex.StyleXClassNameFor<"borderColor", string>;
        readonly borderRadius: stylex.StyleXClassNameFor<"borderRadius", string>;
        readonly padding: stylex.StyleXClassNameFor<"padding", "1.25rem" | "24px 20px">;
        readonly backgroundColor: stylex.StyleXClassNameFor<"backgroundColor", string>;
        readonly color: stylex.StyleXClassNameFor<"color", string>;
        readonly boxShadow: stylex.StyleXClassNameFor<"boxShadow", "none">;
        readonly "::backdrop": stylex.StyleXClassNameFor<"::backdrop", {
            readonly backgroundColor: readonly ["rgba(0,0,0,0.25)", `color-mix(in srgb, ${stylex.StyleXVar<string>} 55%, transparent)`];
        }>;
    }>;
    readonly title: Readonly<{
        readonly display: stylex.StyleXClassNameFor<"display", "block">;
        readonly fontSize: stylex.StyleXClassNameFor<"fontSize", "1.125rem" | "0.9375rem">;
        readonly fontWeight: stylex.StyleXClassNameFor<"fontWeight", 600>;
        readonly letterSpacing: stylex.StyleXClassNameFor<"letterSpacing", "-0.01em">;
        readonly color: stylex.StyleXClassNameFor<"color", string>;
        readonly marginTop: stylex.StyleXClassNameFor<"marginTop", 0>;
        readonly marginInlineEnd: stylex.StyleXClassNameFor<"marginInlineEnd", 0>;
        readonly marginBottom: stylex.StyleXClassNameFor<"marginBottom", "0.625rem" | "0.375rem">;
        readonly marginInlineStart: stylex.StyleXClassNameFor<"marginInlineStart", 0>;
    }>;
    readonly body: Readonly<{
        readonly fontSize: stylex.StyleXClassNameFor<"fontSize", "1rem" | "0.84375rem">;
        readonly color: stylex.StyleXClassNameFor<"color", string>;
        readonly letterSpacing: stylex.StyleXClassNameFor<"letterSpacing", "-0.01em">;
        readonly lineHeight: stylex.StyleXClassNameFor<"lineHeight", 1.45>;
        readonly marginTop: stylex.StyleXClassNameFor<"marginTop", 0>;
        readonly marginInlineEnd: stylex.StyleXClassNameFor<"marginInlineEnd", 0>;
        readonly marginBottom: stylex.StyleXClassNameFor<"marginBottom", "1.25rem" | "1rem">;
        readonly marginInlineStart: stylex.StyleXClassNameFor<"marginInlineStart", 0>;
    }>;
    readonly actions: Readonly<{
        readonly display: stylex.StyleXClassNameFor<"display", "flex">;
        readonly justifyContent: stylex.StyleXClassNameFor<"justifyContent", "flex-end">;
        readonly flexDirection: stylex.StyleXClassNameFor<"flexDirection", "column" | "row">;
        readonly alignItems: stylex.StyleXClassNameFor<"alignItems", "flex-end" | "stretch">;
        readonly gap: stylex.StyleXClassNameFor<"gap", "0.5rem" | "0.625rem">;
    }>;
    readonly close: Readonly<{
        readonly transition: stylex.StyleXClassNameFor<"transition", string>;
        readonly float: stylex.StyleXClassNameFor<"float", "inline-end">;
        readonly boxSizing: stylex.StyleXClassNameFor<"boxSizing", "border-box">;
        readonly display: stylex.StyleXClassNameFor<"display", "inline-flex">;
        readonly alignItems: stylex.StyleXClassNameFor<"alignItems", "center">;
        readonly justifyContent: stylex.StyleXClassNameFor<"justifyContent", "center">;
        readonly width: stylex.StyleXClassNameFor<"width", string>;
        readonly height: stylex.StyleXClassNameFor<"height", string>;
        readonly marginTop: stylex.StyleXClassNameFor<"marginTop", "-0.5rem" | "-0.75rem">;
        readonly marginInlineEnd: stylex.StyleXClassNameFor<"marginInlineEnd", "-0.5rem" | "-0.75rem">;
        readonly marginInlineStart: stylex.StyleXClassNameFor<"marginInlineStart", "0.5rem">;
        readonly padding: stylex.StyleXClassNameFor<"padding", 0>;
        readonly borderWidth: stylex.StyleXClassNameFor<"borderWidth", 0>;
        readonly borderRadius: stylex.StyleXClassNameFor<"borderRadius", string>;
        readonly backgroundColor: stylex.StyleXClassNameFor<"backgroundColor", string | null>;
        readonly color: stylex.StyleXClassNameFor<"color", string>;
        readonly cursor: stylex.StyleXClassNameFor<"cursor", "pointer">;
        readonly outlineWidth: stylex.StyleXClassNameFor<"outlineWidth", 2 | null>;
        readonly outlineStyle: stylex.StyleXClassNameFor<"outlineStyle", "solid" | null>;
        readonly outlineColor: stylex.StyleXClassNameFor<"outlineColor", string | null>;
        readonly outlineOffset: stylex.StyleXClassNameFor<"outlineOffset", 2 | null>;
    }>;
}>;
type DialogPart = "title" | "body";
interface DialogContextValue {
    titleId: string;
    bodyId: string;
    register: (part: DialogPart, id: string) => () => void;
}
export declare const DialogContext: React.Context<DialogContextValue | null>;
/**
 * Title and body parts call this: it hands back the id the dialog
 * points aria-labelledby / aria-describedby at, and registers the
 * part so the attribute only exists while the part is rendered.
 */
export declare function useDialogPart(part: DialogPart, explicitId?: string): string | undefined;
interface NativeDialogProps {
    onCancel?: React.ReactEventHandler<HTMLDialogElement>;
    "aria-label"?: string;
    "aria-labelledby"?: string;
    "aria-describedby"?: string;
}
/**
 * Drives a native <dialog> from an `open` prop. Escape and light dismiss
 * become an `onClose` call; the parent's `open` stays the source of
 * truth. Returns the ref, the attributes for the element, and the
 * context value the title/body parts register into.
 */
export declare function useNativeDialog({ open, onClose, dismissable, lightDismiss }: NativeDialogOptions, props: NativeDialogProps, forwardedRef?: React.ForwardedRef<HTMLDialogElement>): {
    ref: (node: HTMLDialogElement | null) => void;
    context: DialogContextValue;
    dialogProps: {
        onCancel: (e: React.SyntheticEvent<HTMLDialogElement>) => void;
        onClose: () => void;
        "aria-labelledby": string | undefined;
        "aria-describedby": string | undefined;
    };
};
export interface DialogCloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** The accessible name. */
    label: string;
}
/**
 * Corner close: a labelled button with the close mark. The caller
 * paints it with its own class over dialogStyles.close.
 */
export declare function DialogCloseButton({ label, ...props }: DialogCloseButtonProps): React.JSX.Element;
/**
 * A native <dialog>. Focus trapping, Escape, and the backdrop come
 * from the platform; the title names it and the body describes it.
 */
export declare const Dialog: React.ForwardRefExoticComponent<DialogProps & React.RefAttributes<HTMLDialogElement>>;
export interface DialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    /** Heading level. The dialog is named by this element either way. */
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}
export declare const DialogTitle: React.ForwardRefExoticComponent<DialogTitleProps & React.RefAttributes<HTMLHeadingElement>>;
export declare const DialogBody: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
export declare const DialogActions: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export {};
