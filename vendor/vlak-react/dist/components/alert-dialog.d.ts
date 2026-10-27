import * as React from "react";
import { type DialogProps } from "./dialog.js";
export interface AlertDialogProps extends Omit<DialogProps, "dismissable" | "lightDismiss" | "closeLabel"> {
}
/**
 * A native <dialog> that requires an explicit answer. Escape and
 * light dismiss are off (closedby="none"); the actions close it.
 */
export declare const AlertDialog: React.ForwardRefExoticComponent<AlertDialogProps & React.RefAttributes<HTMLDialogElement>>;
export { DialogTitle as AlertDialogTitle, DialogBody as AlertDialogBody, DialogActions as AlertDialogActions, } from "./dialog.js";
