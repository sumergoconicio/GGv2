import * as React from "react";
import type { DropdownMenuItem } from "./dropdown-menu.js";
export interface ContextMenuProps extends React.HTMLAttributes<HTMLDivElement> {
    items: DropdownMenuItem[];
}
/**
 * Menu at the pointer on right-click, or anchored to the trigger on
 * Shift+F10 / the ContextMenu key. The wrapper is tabbable (pass
 * `tabIndex={-1}` when the child is focusable itself); focus returns to
 * whatever had it when the menu closes.
 */
export declare const ContextMenu: React.ForwardRefExoticComponent<ContextMenuProps & React.RefAttributes<HTMLDivElement>>;
