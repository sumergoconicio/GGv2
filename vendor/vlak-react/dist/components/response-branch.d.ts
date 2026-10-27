import * as React from "react";
export interface ResponseBranchItem {
    /** Stable identity for a saved response alternative. */
    id: string;
    content: React.ReactNode;
    label?: string;
}
export interface ResponseBranchProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "defaultValue"> {
    branches: readonly ResponseBranchItem[];
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    label?: string;
}
/** Navigates application-owned response alternatives without changing conversation history. */
export declare const ResponseBranch: React.ForwardRefExoticComponent<ResponseBranchProps & React.RefAttributes<HTMLDivElement>>;
