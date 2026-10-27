import * as React from "react";
export type ConnectionState = "connecting" | "connected" | "offline" | "reconnecting";
export interface ConnectionStatusProps extends React.HTMLAttributes<HTMLDivElement> {
    state: ConnectionState;
    label?: string;
    description?: React.ReactNode;
    onRetry?: () => void | Promise<void>;
}
/** Application-supplied connection state. A successful retry does not assume reconnection. */
export declare const ConnectionStatus: React.ForwardRefExoticComponent<ConnectionStatusProps & React.RefAttributes<HTMLDivElement>>;
