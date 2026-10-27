import * as React from "react";
export interface CiteProps extends React.HTMLAttributes<HTMLElement> {
}
export interface RefsProps extends React.OlHTMLAttributes<HTMLOListElement> {
}
export interface RefItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
}
export interface CiteBoxProps extends React.HTMLAttributes<HTMLDivElement> {
}
/** Inline superscript citation. */
export declare const Cite: React.ForwardRefExoticComponent<CiteProps & React.RefAttributes<HTMLElement>>;
export declare const CiteLink: React.ForwardRefExoticComponent<React.AnchorHTMLAttributes<HTMLAnchorElement> & React.RefAttributes<HTMLAnchorElement>>;
/** Numbered 1px list. Numerals hang in the gutter. */
export declare const Refs: React.ForwardRefExoticComponent<RefsProps & React.RefAttributes<HTMLOListElement>>;
export declare const RefItem: React.ForwardRefExoticComponent<RefItemProps & React.RefAttributes<HTMLLIElement>>;
export declare const RefAuthors: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLSpanElement> & React.RefAttributes<HTMLSpanElement>>;
export declare const RefDoi: React.ForwardRefExoticComponent<React.AnchorHTMLAttributes<HTMLAnchorElement> & React.RefAttributes<HTMLAnchorElement>>;
export declare const CiteBox: React.ForwardRefExoticComponent<CiteBoxProps & React.RefAttributes<HTMLDivElement>>;
export declare const CiteBoxLabel: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export declare const CiteBoxText: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
