import * as React from "react";
import { type DropdownMenuItem } from "./dropdown-menu.js";
export interface MenubarProps extends React.HTMLAttributes<HTMLDivElement> {
    menus: Array<{
        label: React.ReactNode;
        items: DropdownMenuItem[];
    }>;
}
/**
 * Dropdown menus in a hairline strip. The triggers are menuitems with one
 * roving tab stop; ArrowLeft/ArrowRight move between them and an open
 * menu follows.
 */
export declare const Menubar: React.ForwardRefExoticComponent<MenubarProps & React.RefAttributes<HTMLDivElement>>;
