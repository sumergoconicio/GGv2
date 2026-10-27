import * as React from "react";
/** Shared state for compound inputs. Native form reset restores uncontrolled defaults. */
export declare function useInputValue<T, E extends HTMLElement>(value: T | undefined, defaultValue: T, onValueChange?: (value: T) => void, onReset?: () => void): readonly [T, (next: T) => void, React.RefObject<E | null>];
