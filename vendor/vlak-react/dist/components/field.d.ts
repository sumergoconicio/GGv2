import * as React from "react";
export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
}
type FieldPart = "hint" | "error";
interface FieldContextValue {
    hintId: string;
    errorId: string;
    /** Ids of the parts currently rendered. */
    parts: {
        hint?: string;
        error?: string;
    };
    register: (part: FieldPart, id: string) => () => void;
}
export declare const FieldContext: React.Context<FieldContextValue | null>;
/** Hint and error parts: the id to render, registered while mounted. */
export declare function useFieldPart(part: FieldPart, explicitId?: string): string | undefined;
export interface FieldControlAria {
    "aria-describedby"?: string;
    "aria-invalid"?: React.AriaAttributes["aria-invalid"];
}
/**
 * Controls call this: the field's hint and error describe the control,
 * and a rendered error marks it invalid. Explicit props win.
 */
export declare function useFieldControl(props: FieldControlAria): FieldControlAria & {
    invalid: boolean;
};
/** Stack: label, control, hint or error. The hint and error describe the control. */
export declare const Field: React.ForwardRefExoticComponent<FieldProps & React.RefAttributes<HTMLDivElement>>;
export declare const FieldLabel: React.ForwardRefExoticComponent<React.LabelHTMLAttributes<HTMLLabelElement> & React.RefAttributes<HTMLLabelElement>>;
export declare const FieldHint: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
export declare const FieldError: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
export {};
