"use client";

import * as React from "react";

/** Shared state for compound inputs. Native form reset restores uncontrolled defaults. */
export function useInputValue(value, defaultValue, onValueChange, onReset) {
  const [inner, setInner] = React.useState(defaultValue);
  const element = React.useRef(null);
  const controlled = value !== undefined;
  const reset = React.useRef({
    controlled,
    defaultValue,
    onReset
  });
  reset.current = {
    controlled,
    defaultValue,
    onReset
  };
  React.useEffect(() => {
    const node = element.current;
    const form = node && "form" in node ? node.form : node?.closest("form");
    if (!form) return;
    const handleReset = event => {
      queueMicrotask(() => {
        if (!event.defaultPrevented) {
          if (!reset.current.controlled) setInner(reset.current.defaultValue);
          reset.current.onReset?.();
        }
      });
    };
    form.addEventListener("reset", handleReset);
    return () => form.removeEventListener("reset", handleReset);
  }, []);
  const setValue = next => {
    if (!controlled) setInner(next);
    onValueChange?.(next);
  };
  return [controlled ? value : inner, setValue, element];
}
//# sourceMappingURL=use-input-value.js.map
