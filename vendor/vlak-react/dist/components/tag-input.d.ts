import * as React from "react";
export interface TagInputProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> {
    value?: string[];
    defaultValue?: string[];
    onValueChange?: (value: string[]) => void;
    label?: React.ReactNode;
    name?: string;
    disabled?: boolean;
    placeholder?: string;
    maxTags?: number;
    /** Return an error for an invalid token, or undefined to accept it. */
    validate?: (tag: string) => string | undefined;
    addLabel?: string;
    removeLabel?: (tag: string) => string;
}
export declare const TagInput: React.ForwardRefExoticComponent<TagInputProps & React.RefAttributes<HTMLInputElement>>;
