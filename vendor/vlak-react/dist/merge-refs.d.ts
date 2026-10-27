import * as React from "react";
/** Writes a node into a ref of either shape; a missing ref is a no-op. */
export declare function setRef<T>(ref: React.Ref<T> | undefined, value: T | null): void;
/**
 * One callback ref that feeds every ref given: a component's own ref on
 * its root and the ref forwarded from the parent. Stable while the refs
 * are, so React attaches it once.
 */
export declare function useMergedRefs<T>(...refs: Array<React.Ref<T> | undefined>): React.RefCallback<T>;
