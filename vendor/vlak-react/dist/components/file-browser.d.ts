import * as React from "react";
export interface BrowserEntry {
    id: string;
    name: string;
    kind: "file" | "folder";
    children?: BrowserEntry[];
    size?: string;
    modified?: string;
    disabled?: boolean;
}
export interface FileBrowserProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue" | "onSelect"> {
    entries: BrowserEntry[];
    label?: string;
    /** Visible root-folder name, separate from the accessible browser label. */
    rootLabel?: string;
    value?: string;
    defaultValue?: string;
    onValueChange?: (id: string) => void;
    folder?: string | null;
    defaultFolder?: string | null;
    onFolderChange?: (id: string | null) => void;
    onOpen?: (entry: BrowserEntry) => void;
}
/** A controlled file collection with folder tree, breadcrumbs, search, and list or grid views. */
export declare const FileBrowser: React.ForwardRefExoticComponent<FileBrowserProps & React.RefAttributes<HTMLDivElement>>;
