import * as React from "react";
export interface ItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
    title: React.ReactNode;
    description?: React.ReactNode;
    meta?: React.ReactNode;
}
/** A flush row. Title occupies the cell; meta trails. */
export declare const Item: React.ForwardRefExoticComponent<ItemProps & React.RefAttributes<HTMLDivElement>>;
