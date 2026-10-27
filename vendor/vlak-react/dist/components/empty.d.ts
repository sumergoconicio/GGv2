import * as React from "react";
export interface EmptyProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
    title?: React.ReactNode;
    action?: React.ReactNode;
}
/** A vacant cell. Title, one sentence, optional action. */
export declare const Empty: React.ForwardRefExoticComponent<EmptyProps & React.RefAttributes<HTMLDivElement>>;
