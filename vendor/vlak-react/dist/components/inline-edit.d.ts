import * as React from "react";
export interface InlineEditProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    label?: string;
    name?: string;
    disabled?: boolean;
    placeholder?: string;
    validate?: (value: string) => string | undefined;
    /** Resolves before the value is committed. Rejections leave the draft editable. */
    onSave?: (value: string) => void | Promise<void>;
    editLabel?: string;
    saveLabel?: string;
    cancelLabel?: string;
}
export declare const InlineEdit: React.ForwardRefExoticComponent<InlineEditProps & React.RefAttributes<HTMLDivElement>>;
