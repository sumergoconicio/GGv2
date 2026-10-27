/** Capture one user-selected display frame. The caller must invoke this from an explicit user action. */
export declare function captureScreenshot(onStream: (stream: MediaStream) => void, signal?: AbortSignal): Promise<File>;
