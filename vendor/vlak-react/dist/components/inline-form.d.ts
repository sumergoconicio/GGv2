import * as React from "react";
export interface InlineFormProps extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
    placeholder?: string;
    buttonLabel?: React.ReactNode;
    successLabel?: React.ReactNode;
    pendingLabel?: React.ReactNode;
    errorLabel?: React.ReactNode;
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    /** The action only appears once this returns true. Defaults to a loose e-mail check. */
    validate?: (value: string) => boolean;
    onSubmit?: (value: string) => void | Promise<void>;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}
/** One field, one action; asynchronous actions only confirm after they resolve. */
export declare const InlineForm: React.ForwardRefExoticComponent<InlineFormProps & React.RefAttributes<HTMLFormElement>>;
