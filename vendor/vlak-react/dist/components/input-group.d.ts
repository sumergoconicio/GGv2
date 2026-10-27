import * as React from "react";
export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Place the addon after the field. */
    end?: boolean;
}
/** Addon and field share one control boundary. */
export declare const InputGroup: React.ForwardRefExoticComponent<InputGroupProps & React.RefAttributes<HTMLDivElement>>;
export declare const InputAddon: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLSpanElement> & React.RefAttributes<HTMLSpanElement>>;
