import * as React from "react";
import * as stylex from "@stylexjs/stylex";
export interface DropdownMenuItem {
    label?: React.ReactNode;
    /** Plain text for type-ahead when `label` is not a string. */
    searchText?: string;
    onSelect?: () => void;
    disabled?: boolean;
    separator?: boolean;
    /** Checked items use menuitemcheckbox semantics. */
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    /** A nested action menu. A parent item opens its children rather than selecting. */
    items?: DropdownMenuItem[];
}
export interface DropdownMenuProps extends React.HTMLAttributes<HTMLDivElement> {
    label: React.ReactNode;
    items: DropdownMenuItem[];
    /** Preferred opening side. The menu still flips when needed to remain visible. */
    side?: "auto" | "top" | "bottom";
}
export declare const menuStyles: Readonly<{
    readonly select: Readonly<{
        readonly position: stylex.StyleXClassNameFor<"position", "relative">;
        readonly display: stylex.StyleXClassNameFor<"display", "block" | "inline-block">;
        readonly minWidth: stylex.StyleXClassNameFor<"minWidth", 0 | "var(--rs-select-min-width, 11.25rem)">;
        readonly width: stylex.StyleXClassNameFor<"width", "100%" | null>;
    }>;
    readonly dropdown: Readonly<{
        readonly boxSizing: stylex.StyleXClassNameFor<"boxSizing", "border-box">;
        readonly display: stylex.StyleXClassNameFor<"display", "flex">;
        readonly alignItems: stylex.StyleXClassNameFor<"alignItems", "center">;
        readonly justifyContent: stylex.StyleXClassNameFor<"justifyContent", "space-between">;
        readonly gap: stylex.StyleXClassNameFor<"gap", "0.75rem">;
        readonly paddingBlock: stylex.StyleXClassNameFor<"paddingBlock", "0.75rem" | "0.5625rem">;
        readonly paddingInline: stylex.StyleXClassNameFor<"paddingInline", "0.875rem" | "0.75rem">;
        readonly borderWidth: stylex.StyleXClassNameFor<"borderWidth", string>;
        readonly borderStyle: stylex.StyleXClassNameFor<"borderStyle", "solid">;
        readonly borderColor: stylex.StyleXClassNameFor<"borderColor", string>;
        readonly borderRadius: stylex.StyleXClassNameFor<"borderRadius", string>;
        readonly fontSize: stylex.StyleXClassNameFor<"fontSize", string>;
        readonly color: stylex.StyleXClassNameFor<"color", string>;
        readonly letterSpacing: stylex.StyleXClassNameFor<"letterSpacing", "-0.01em">;
        readonly cursor: stylex.StyleXClassNameFor<"cursor", "pointer">;
        readonly fontFamily: stylex.StyleXClassNameFor<"fontFamily", "inherit">;
        readonly backgroundColor: stylex.StyleXClassNameFor<"backgroundColor", "transparent">;
        readonly width: stylex.StyleXClassNameFor<"width", "100%">;
        readonly minHeight: stylex.StyleXClassNameFor<"minHeight", string>;
        readonly outlineWidth: stylex.StyleXClassNameFor<"outlineWidth", 2 | null>;
        readonly outlineStyle: stylex.StyleXClassNameFor<"outlineStyle", "solid" | null>;
        readonly outlineColor: stylex.StyleXClassNameFor<"outlineColor", string | null>;
        readonly outlineOffset: stylex.StyleXClassNameFor<"outlineOffset", 2 | null>;
    }>;
    readonly menu: Readonly<{
        readonly boxSizing: stylex.StyleXClassNameFor<"boxSizing", "border-box">;
        readonly padding: stylex.StyleXClassNameFor<"padding", "0.25rem">;
        readonly borderWidth: stylex.StyleXClassNameFor<"borderWidth", string>;
        readonly borderStyle: stylex.StyleXClassNameFor<"borderStyle", "solid">;
        readonly borderColor: stylex.StyleXClassNameFor<"borderColor", string>;
        readonly borderRadius: stylex.StyleXClassNameFor<"borderRadius", string>;
        readonly marginTop: stylex.StyleXClassNameFor<"marginTop", 0 | "0.375rem">;
        readonly overflow: stylex.StyleXClassNameFor<"overflow", "hidden">;
        readonly backgroundColor: stylex.StyleXClassNameFor<"backgroundColor", string>;
        readonly boxShadow: stylex.StyleXClassNameFor<"boxShadow", "none" | "0 8px 24px rgba(0,0,0,0.06)">;
    }>;
    readonly menuOverlay: Readonly<{
        readonly position: stylex.StyleXClassNameFor<"position", "absolute">;
        readonly top: stylex.StyleXClassNameFor<"top", "100%">;
        readonly insetInlineStart: stylex.StyleXClassNameFor<"insetInlineStart", 0>;
        readonly insetInlineEnd: stylex.StyleXClassNameFor<"insetInlineEnd", 0>;
        readonly zIndex: stylex.StyleXClassNameFor<"zIndex", string>;
    }>;
    readonly menuFixed: Readonly<{
        readonly position: stylex.StyleXClassNameFor<"position", "fixed">;
        readonly zIndex: stylex.StyleXClassNameFor<"zIndex", string>;
        readonly marginTop: stylex.StyleXClassNameFor<"marginTop", 0>;
        readonly minWidth: stylex.StyleXClassNameFor<"minWidth", "10rem">;
    }>;
    readonly menuCal: Readonly<{
        readonly insetInlineEnd: stylex.StyleXClassNameFor<"insetInlineEnd", "auto">;
        readonly padding: stylex.StyleXClassNameFor<"padding", "0.75rem">;
    }>;
    readonly menuCombobox: Readonly<{
        readonly position: stylex.StyleXClassNameFor<"position", "absolute">;
        readonly top: stylex.StyleXClassNameFor<"top", "100%">;
        readonly insetInlineStart: stylex.StyleXClassNameFor<"insetInlineStart", 0>;
        readonly insetInlineEnd: stylex.StyleXClassNameFor<"insetInlineEnd", 0>;
        readonly zIndex: stylex.StyleXClassNameFor<"zIndex", string>;
        readonly maxHeight: stylex.StyleXClassNameFor<"maxHeight", "15rem">;
        readonly overflowY: stylex.StyleXClassNameFor<"overflowY", "auto">;
    }>;
    readonly item: Readonly<{
        readonly boxSizing: stylex.StyleXClassNameFor<"boxSizing", "border-box">;
        readonly display: stylex.StyleXClassNameFor<"display", "flex">;
        readonly alignItems: stylex.StyleXClassNameFor<"alignItems", "center">;
        readonly gap: stylex.StyleXClassNameFor<"gap", "0.5rem">;
        readonly paddingBlock: stylex.StyleXClassNameFor<"paddingBlock", "0.75rem" | "0.5625rem">;
        readonly paddingInline: stylex.StyleXClassNameFor<"paddingInline", "0.875rem" | "0.75rem">;
        readonly fontSize: stylex.StyleXClassNameFor<"fontSize", string>;
        readonly color: stylex.StyleXClassNameFor<"color", string>;
        readonly letterSpacing: stylex.StyleXClassNameFor<"letterSpacing", "-0.01em">;
        readonly borderWidth: stylex.StyleXClassNameFor<"borderWidth", 0>;
        readonly borderRadius: stylex.StyleXClassNameFor<"borderRadius", string>;
        readonly width: stylex.StyleXClassNameFor<"width", "100%">;
        readonly textAlign: stylex.StyleXClassNameFor<"textAlign", "start">;
        readonly cursor: stylex.StyleXClassNameFor<"cursor", "pointer">;
        readonly backgroundColor: stylex.StyleXClassNameFor<"backgroundColor", string>;
        readonly fontFamily: stylex.StyleXClassNameFor<"fontFamily", "inherit">;
        readonly minHeight: stylex.StyleXClassNameFor<"minHeight", string>;
        readonly outlineWidth: stylex.StyleXClassNameFor<"outlineWidth", 0 | 2>;
        readonly outlineStyle: stylex.StyleXClassNameFor<"outlineStyle", "none" | "solid">;
        readonly outlineColor: stylex.StyleXClassNameFor<"outlineColor", "HighlightText">;
        readonly outlineOffset: stylex.StyleXClassNameFor<"outlineOffset", -2>;
        readonly forcedColorAdjust: stylex.StyleXClassNameFor<"forcedColorAdjust", "none">;
    }>;
    readonly itemIndicator: Readonly<{
        readonly display: stylex.StyleXClassNameFor<"display", "inline-flex">;
        readonly alignItems: stylex.StyleXClassNameFor<"alignItems", "center">;
        readonly justifyContent: stylex.StyleXClassNameFor<"justifyContent", "center">;
        readonly flex: stylex.StyleXClassNameFor<"flex", "0 0 1rem">;
        readonly width: stylex.StyleXClassNameFor<"width", "1rem">;
        readonly height: stylex.StyleXClassNameFor<"height", "1rem">;
    }>;
    readonly itemLabel: Readonly<{
        readonly flex: stylex.StyleXClassNameFor<"flex", "1 1 auto">;
        readonly minWidth: stylex.StyleXClassNameFor<"minWidth", 0>;
        readonly overflowWrap: stylex.StyleXClassNameFor<"overflowWrap", "anywhere">;
    }>;
    readonly itemActive: Readonly<{
        readonly backgroundColor: stylex.StyleXClassNameFor<"backgroundColor", string>;
        readonly color: stylex.StyleXClassNameFor<"color", string>;
    }>;
    readonly itemDisabled: Readonly<{
        readonly color: stylex.StyleXClassNameFor<"color", string>;
        readonly cursor: stylex.StyleXClassNameFor<"cursor", "default">;
    }>;
    readonly sep: Readonly<{
        readonly borderWidth: stylex.StyleXClassNameFor<"borderWidth", 0>;
        readonly borderTopWidth: stylex.StyleXClassNameFor<"borderTopWidth", string>;
        readonly borderTopStyle: stylex.StyleXClassNameFor<"borderTopStyle", "solid">;
        readonly borderTopColor: stylex.StyleXClassNameFor<"borderTopColor", string>;
        readonly marginBlock: stylex.StyleXClassNameFor<"marginBlock", "0.25rem">;
        readonly marginInline: stylex.StyleXClassNameFor<"marginInline", "0.5rem">;
    }>;
}>;
/** Text a menu item answers to for type-ahead. */
export declare function menuItemText(item: DropdownMenuItem): string;
/**
 * Next index whose text starts with `query`, searching forward from `from`
 * and wrapping. A repeated single letter cycles through its matches.
 */
export declare function typeAheadIndex(texts: string[], from: number, query: string): number;
/** Why a menu closed; decides whether focus goes back to the trigger. */
export type MenuCloseReason = "escape" | "select" | "tab" | "outside" | "arrow";
export interface MenuPanelProps {
    id: string;
    items: DropdownMenuItem[];
    /** Class and style from an rs() call; the panel adds nothing of its own. */
    className?: string;
    style?: React.CSSProperties;
    labelledBy?: string;
    /** Which item takes focus on open (ArrowUp opens on the last). */
    initial?: "first" | "last";
    onClose: (reason: MenuCloseReason) => void;
    /** ArrowLeft/ArrowRight, for a menubar to move to the neighbour menu. */
    onHorizontal?: (dir: -1 | 1) => void;
    /** The `role="menu"` element, for outside-click checks. */
    panelRef?: React.Ref<HTMLDivElement>;
    /** Internal nested-menu return action. */
    onBack?: () => void;
}
/**
 * The open `role="menu"` list: roving tabindex, arrows wrap, Home/End,
 * type-ahead, Escape and Tab close. Focus lands on the first item on mount.
 */
export declare function MenuPanel({ id, items, className, style, labelledBy, initial, onClose, onHorizontal, panelRef, onBack, }: MenuPanelProps): React.JSX.Element;
/** Action menu with menu semantics and keyboard navigation. */
export declare const DropdownMenu: React.ForwardRefExoticComponent<DropdownMenuProps & React.RefAttributes<HTMLDivElement>>;
