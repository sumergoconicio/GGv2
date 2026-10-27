import * as React from "react";
export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
}
/** Native form. Fields stack. One primary action at the end. */
export declare const Form: React.ForwardRefExoticComponent<FormProps & React.RefAttributes<HTMLFormElement>>;
