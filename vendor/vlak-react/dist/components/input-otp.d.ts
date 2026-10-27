import * as React from "react";
export interface InputOTPProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> {
    length?: number;
    value?: string;
    defaultValue?: string;
    onValueChange?: (code: string) => void;
    name?: string;
    disabled?: boolean;
    readOnly?: boolean;
    /** @deprecated Use onValueChange. */
    onChange?: (code: string) => void;
    /** Called once every cell is filled. */
    onComplete?: (code: string) => void;
    "aria-label"?: string;
}
/** One cell per character. Auto-advance, backspace, paste. */
export declare const InputOTP: React.ForwardRefExoticComponent<InputOTPProps & React.RefAttributes<HTMLDivElement>>;
