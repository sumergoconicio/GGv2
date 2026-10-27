"use client";

import * as React from "react";

/** Writes a node into a ref of either shape; a missing ref is a no-op. */
export function setRef(ref, value) {
  if (typeof ref === "function") ref(value);else if (ref) ref.current = value;
}

/**
 * One callback ref that feeds every ref given: a component's own ref on
 * its root and the ref forwarded from the parent. Stable while the refs
 * are, so React attaches it once.
 */
export function useMergedRefs(...refs) {
  return React.useCallback(node => {
    for (const ref of refs) setRef(ref, node);
  },
  // biome-ignore lint/correctness/useExhaustiveDependencies: the refs are the dependency list
  refs);
}
//# sourceMappingURL=merge-refs.js.map
