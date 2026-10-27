import * as React from "react";
export interface TreeNode {
    id: string;
    label: string;
    disabled?: boolean;
    children?: TreeNode[]; /** Decorative file or folder icon. Keep label as plain text for keyboard search. */
    icon?: React.ReactNode;
}
export interface TreeViewProps extends Omit<React.HTMLAttributes<HTMLUListElement>, "defaultValue" | "onSelect"> {
    nodes: TreeNode[];
    label: string;
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    expanded?: string[];
    defaultExpanded?: string[];
    onExpandedChange?: (ids: string[]) => void;
    /** Custom non-interactive row content. The node's plain label still names the tree item. */
    renderLabel?: (node: TreeNode, state: {
        selected: boolean;
        expanded: boolean;
    }) => React.ReactNode;
}
/** Single selection and APG-style roving focus through a hierarchical collection. */
export declare const TreeView: React.ForwardRefExoticComponent<TreeViewProps & React.RefAttributes<HTMLUListElement>>;
