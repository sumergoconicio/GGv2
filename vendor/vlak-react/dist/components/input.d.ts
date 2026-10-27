import * as React from "react";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /** Label rendered above the field at 12px. */
    label?: React.ReactNode;
    /** Marks the field as validated: ink border and ink feedback text. */
    ok?: boolean;
    /** Quiet feedback line under the field. */
    feedback?: React.ReactNode;
    /** Hint under the field; it describes the control. */
    hint?: React.ReactNode;
    /** Error under the field; it describes the control and marks it invalid. */
    error?: React.ReactNode;
    /** Control only — no field stack. For Field / InputGroup. */
    plain?: boolean;
    /** Flush into an InputGroup: no own stroke. */
    grouped?: boolean;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
