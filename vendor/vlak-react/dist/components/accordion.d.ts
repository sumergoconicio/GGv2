import * as React from "react";
export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
    /** One item open at a time, via the platform's own `name` grouping. */
    exclusive?: boolean;
}
/** Native <details> rows on hairlines. */
export declare const Accordion: React.ForwardRefExoticComponent<AccordionProps & React.RefAttributes<HTMLDivElement>>;
export interface AccordionItemProps extends Omit<React.DetailsHTMLAttributes<HTMLDetailsElement>, "title"> {
    title: React.ReactNode;
    defaultOpen?: boolean;
}
export declare const AccordionItem: React.ForwardRefExoticComponent<AccordionItemProps & React.RefAttributes<HTMLDetailsElement>>;
