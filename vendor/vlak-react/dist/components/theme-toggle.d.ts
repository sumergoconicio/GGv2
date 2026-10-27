import * as React from "react";
export interface ThemeToggleProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
    /** localStorage key the choice persists under. */
    storageKey?: string;
    onThemeChange?: (dark: boolean) => void;
}
/**
 * One filled family mark on a 24px square, about 18–20px of drawn ink.
 * Moon on paper, sun on black. The button sets
 * data-theme="dark" on <html> and persists the choice.
 * Apps pin it top-right; catalog and previews use the inline modifier.
 * The name states the action ("Switch to dark scheme"), so it changes with the state.
 */
export declare const ThemeToggle: React.ForwardRefExoticComponent<ThemeToggleProps & React.RefAttributes<HTMLButtonElement>>;
