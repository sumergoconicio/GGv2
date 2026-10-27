import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { Dialog } from "./dialog.js";
import { jsx as _jsx } from "react/jsx-runtime";
const styles = {
  lock: {
    kaIpWk: "xkrxur",
    kGVxlE: "x1gnnqk1",
    $$css: true
  }
};
/**
 * A native <dialog> that requires an explicit answer. Escape and
 * light dismiss are off (closedby="none"); the actions close it.
 */
export const AlertDialog = /*#__PURE__*/React.forwardRef(function AlertDialog({
  className,
  extraStyles,
  ...props
}, ref) {
  return /*#__PURE__*/_jsx(Dialog, {
    ref: ref,
    role: "alertdialog",
    dismissable: false,
    className: className ? `rs-alert-dialog ${className}` : "rs-alert-dialog",
    extraStyles: [styles.lock, ...(extraStyles ?? [])],
    ...props
  });
});
export { DialogTitle as AlertDialogTitle, DialogBody as AlertDialogBody, DialogActions as AlertDialogActions } from "./dialog.js";
//# sourceMappingURL=alert-dialog.js.map
