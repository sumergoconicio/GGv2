import * as React from "react";
/** Keep lightweight overlays inside the visual viewport. The native top layer avoids clipping. */
export declare function useOverlayPosition(open: boolean, panel: React.RefObject<HTMLElement | null>, anchor: React.RefObject<HTMLElement | null>, point?: {
    x: number;
    y: number;
} | null, placement?: "bottom" | "inline-end", options?: {
    popover?: "auto" | "manual";
    edge?: number;
    matchAnchorWidth?: boolean;
    /** Preferred block side. Collision handling may use the opposite side. */
    side?: "auto" | "top" | "bottom";
}): React.CSSProperties;
