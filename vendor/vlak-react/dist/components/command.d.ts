import * as React from "react";
export interface CommandItem {
    /** Stable identity when different commands share a visible label. */
    id?: string;
    label: string;
    description?: React.ReactNode;
    hint?: React.ReactNode;
    keywords?: string;
    onSelect?: () => void;
}
export interface CommandGroup {
    label?: string;
    items: CommandItem[];
}
export interface CommandProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue"> {
    groups: CommandGroup[];
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    inputLabel?: string;
    /** Disable built-in filtering when the application supplies ranked results. */
    shouldFilter?: boolean;
    emptyLabel?: React.ReactNode;
    onDone?: () => void;
}
/** Search, arrows, enter. The input keeps focus; the list is aria-activedescendant. */
export declare const Command: React.ForwardRefExoticComponent<CommandProps & React.RefAttributes<HTMLDivElement>>;
export interface CommandDialogProps extends CommandProps {
    open: boolean;
    onClose?: () => void;
}
/** The palette in a native <dialog>. Wire ⌘K in your app to setOpen(true). */
export declare const CommandDialog: React.ForwardRefExoticComponent<CommandDialogProps & React.RefAttributes<HTMLDialogElement>>;
