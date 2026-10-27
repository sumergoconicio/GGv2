import * as React from "react";
export interface ResponseEditorProps extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit" | "onError"> {
    text: string;
    onSave: (text: string) => void | Promise<void>;
    onCancel: () => void;
    label?: string;
    saveLabel?: string;
    disabled?: boolean;
    onError?: (error: unknown) => void;
}
/** Multiline message editing with async save, cancellation, and failed-draft retention. */
export declare const ResponseEditor: React.ForwardRefExoticComponent<ResponseEditorProps & React.RefAttributes<HTMLFormElement>>;
