import * as React from "react";
import { type ButtonProps } from "./button.js";
export interface SuggestionsProps extends React.HTMLAttributes<HTMLDivElement> {
    wrap?: boolean;
}
export interface SuggestionProps extends Omit<ButtonProps, "onClick" | "onSelect" | "value"> {
    value: string;
    onSelect?: (value: string) => void;
}
export declare const Suggestions: React.ForwardRefExoticComponent<SuggestionsProps & React.RefAttributes<HTMLDivElement>>;
export declare const Suggestion: React.ForwardRefExoticComponent<SuggestionProps & React.RefAttributes<HTMLButtonElement>>;
