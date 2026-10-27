import * as React from "react";
export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** Tip text. Shown on hover and on keyboard focus; Escape hides it. */
    tip: string;
}
/**
 * Whether a React element reaches the tab order on its own. `null`
 * when it cannot be told (a component), so callers leave it alone.
 */
export declare function isFocusableElement(el: React.ReactElement): boolean | null;
/**
 * Clones a trigger element with the description reference; a plain
 * element that is not focusable also gets tabIndex so keyboards
 * reach it. Components are trusted to forward the attribute.
 */
export declare function describeTrigger(el: React.ReactElement, id: string): React.ReactElement;
export declare const Tooltip: React.ForwardRefExoticComponent<TooltipProps & React.RefAttributes<HTMLSpanElement>>;
