/** Capture one user-selected display frame. The caller must invoke this from an explicit user action. */
export async function captureScreenshot(onStream, signal) {
  const stream = await navigator.mediaDevices.getDisplayMedia({
    video: true,
    audio: false
  });
  onStream(stream);
  const video = document.createElement("video");
  try {
    if (signal?.aborted) throw new Error("Capture cancelled");
    if (stream.getVideoTracks().every(track => track.readyState === "ended")) throw new Error("Capture cancelled");
    video.muted = true;
    video.srcObject = stream;
    await new Promise((resolve, reject) => {
      const timeout = window.setTimeout(() => finish(new Error("The screen preview did not become available.")), 10_000);
      const abort = () => finish(new Error("Capture cancelled"));
      const finish = error => {
        window.clearTimeout(timeout);
        video.onloadeddata = null;
        video.onerror = null;
        signal?.removeEventListener("abort", abort);
        error ? reject(error) : resolve();
      };
      signal?.addEventListener("abort", abort, {
        once: true
      });
      video.onloadeddata = () => finish();
      video.onerror = () => finish(new Error("The screen preview could not be read."));
      void video.play().catch(() => finish(new Error("The screen preview could not be started.")));
    });
    if (!video.videoWidth || !video.videoHeight) throw new Error("The screen preview is empty.");
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Screen capture is unavailable.");
    context.drawImage(video, 0, 0);
    const blob = await new Promise((resolve, reject) => canvas.toBlob(value => value ? resolve(value) : reject(new Error("The screen preview could not be saved.")), "image/png"));
    return new File([blob], "screenshot.png", {
      type: "image/png"
    });
  } finally {
    for (const track of stream.getTracks()) track.stop();
    video.pause();
    video.srcObject = null;
  }
}
//# sourceMappingURL=capture-screenshot.js.map
