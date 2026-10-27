import * as React from "react";
export interface CheckpointProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onError"> {
    label: React.ReactNode;
    onRestore?: () => void | Promise<void>;
    restoreLabel?: string;
    disabled?: boolean;
    onError?: (error: unknown) => void;
}
/** A restore marker. The application owns saved history and the async restore operation. */
export declare const Checkpoint: React.ForwardRefExoticComponent<CheckpointProps & React.RefAttributes<HTMLDivElement>>;
