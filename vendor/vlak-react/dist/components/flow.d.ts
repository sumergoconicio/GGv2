import * as React from "react";
export interface FlowProps extends React.HTMLAttributes<HTMLDivElement> {
}
export interface FlowStepProps extends React.HTMLAttributes<HTMLDivElement> {
}
export interface FlowAddProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}
/** Dashed 1px pipeline. */
export declare const Flow: React.ForwardRefExoticComponent<FlowProps & React.RefAttributes<HTMLDivElement>>;
export declare const FlowStep: React.ForwardRefExoticComponent<FlowStepProps & React.RefAttributes<HTMLDivElement>>;
export declare const FlowNum: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLSpanElement> & React.RefAttributes<HTMLSpanElement>>;
export declare const FlowTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
export declare const FlowBody: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
export declare const FlowSubs: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export declare const FlowSub: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLSpanElement> & React.RefAttributes<HTMLSpanElement>>;
export declare const FlowSubAdd: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLSpanElement> & React.RefAttributes<HTMLSpanElement>>;
export declare const FlowAdd: React.ForwardRefExoticComponent<FlowAddProps & React.RefAttributes<HTMLButtonElement>>;
export declare const FlowPlus: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLSpanElement> & React.RefAttributes<HTMLSpanElement>>;
