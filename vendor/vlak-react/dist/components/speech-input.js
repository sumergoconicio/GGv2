"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "x3nfvp2",
    kXwgrk: "xdt5ytf",
    kGNEyG: "x7a106z",
    k7Eaqz: "xeuugli",
    ks0D6T: "x193iq5w",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  message: {
    kogj98: "x1ghz6dp",
    keoZOQ: "x1mjqqkp x1q4886k",
    kGuDYH: "x4ro2ui",
    kMwMTN: "x1ixqp2s",
    kLWn49: "xfrs9s4",
    ks0D6T: "x6amaq2",
    $$css: true
  },
  icon: {
    kzqmXN: "xsk17dz",
    kZKoxP: "xaylbqo",
    kmuXW: "x2lah0s",
    $$css: true
  }
};
function recognitionConstructor() {
  const browser = window;
  return browser.SpeechRecognition ?? browser.webkitSpeechRecognition;
}
function release(session) {
  clearTimeout(session.timer);
  session.abort.abort();
  if (session.recognition) {
    session.recognition.onstart = null;
    session.recognition.onresult = null;
    session.recognition.onend = null;
    session.recognition.onerror = null;
    try {
      session.recognition.abort();
    } catch {/* Already stopped. */}
  }
  if (session.recorder) {
    session.recorder.ondataavailable = null;
    session.recorder.onstop = null;
    session.recorder.onerror = null;
    if (session.recorder.state !== "inactive") {
      try {
        session.recorder.stop();
      } catch {/* Already stopped. */}
    }
  }
  session.stream?.getTracks().forEach(track => {
    track.stop();
  });
}

/** User-activated speech capture with an application-owned transcription fallback. */
export const SpeechInput = /*#__PURE__*/React.forwardRef(function SpeechInput({
  onTranscript,
  onInterimTranscript,
  onAudioRecorded,
  onStatusChange,
  onError,
  mode = "auto",
  deviceId,
  lang = "en-US",
  maxDuration = 120,
  disabled = false,
  children,
  className,
  style,
  onClick,
  "aria-label": ariaLabel,
  "aria-describedby": describedBy,
  ...props
}, ref) {
  const [status, setStatus] = React.useState("idle");
  const [message, setMessage] = React.useState("");
  const [available, setAvailable] = React.useState(false);
  const sessionRef = React.useRef(null);
  const sequence = React.useRef(0);
  const mounted = React.useRef(false);
  const state = React.useRef("idle");
  const callbacks = React.useRef({
    onTranscript,
    onInterimTranscript,
    onAudioRecorded,
    onStatusChange,
    onError
  });
  callbacks.current = {
    onTranscript,
    onInterimTranscript,
    onAudioRecorded,
    onStatusChange,
    onError
  };
  const id = React.useId();
  const transition = React.useCallback((next, text = "") => {
    if (!mounted.current) return;
    state.current = next;
    setStatus(next);
    setMessage(text);
    callbacks.current.onStatusChange?.(next);
  }, []);
  const current = session => mounted.current && sessionRef.current === session && !session.abort.signal.aborted;
  const finish = (session, next = "idle", text = "") => {
    if (!current(session)) return;
    sessionRef.current = null;
    release(session);
    transition(next, text);
  };
  const fail = (session, reason) => {
    if (!current(session)) return;
    const error = reason instanceof Error ? reason : new Error(String(reason));
    finish(session, "error", error.name === "NotAllowedError" ? "Microphone permission was denied. Allow access and try again." : error.message || "Speech input failed. Try again.");
    callbacks.current.onError?.(error);
  };
  const hasRecorderCallback = Boolean(onAudioRecorded);
  // A capture configuration change cancels its previous session; callback identities do not.
  // biome-ignore lint/correctness/useExhaustiveDependencies: deviceId, lang and disabled invalidate owned capture resources.
  React.useEffect(() => {
    mounted.current = true;
    const recording = typeof MediaRecorder === "function" && typeof navigator.mediaDevices?.getUserMedia === "function" && hasRecorderCallback;
    const recognition = Boolean(recognitionConstructor());
    const supported = mode === "recording" ? recording : mode === "recognition" ? recognition : recognition || recording;
    setAvailable(supported);
    transition(supported ? "idle" : "unsupported", supported ? "" : "Speech input is unavailable. This browser needs an application transcription service.");
    return () => {
      mounted.current = false;
      const session = sessionRef.current;
      sessionRef.current = null;
      if (session) release(session);
    };
  }, [mode, deviceId, lang, disabled, hasRecorderCallback, transition]);
  const stopRecording = session => {
    if (!current(session)) return;
    clearTimeout(session.timer);
    transition("processing", "Transcribing recording…");
    try {
      session.recorder?.stop();
      session.stream?.getTracks().forEach(track => {
        track.stop();
      });
    } catch (reason) {
      fail(session, reason);
    }
  };
  const activate = async () => {
    const existing = sessionRef.current;
    if (existing) {
      if (state.current === "requesting" || state.current === "processing") {
        finish(existing, "idle", "Speech input canceled.");
        return;
      }
      if (existing.recognition) {
        clearTimeout(existing.timer);
        transition("processing", "Finishing speech…");
        try {
          existing.recognition.stop();
        } catch (reason) {
          fail(existing, reason);
        }
      } else stopRecording(existing);
      return;
    }
    if (!available || disabled) return;
    const session = {
      id: ++sequence.current,
      abort: new AbortController(),
      chunks: []
    };
    sessionRef.current = session;
    transition("requesting", "Waiting for microphone…");
    const duration = Number.isFinite(maxDuration) && maxDuration > 0 ? Math.min(maxDuration, 3600) : 120;
    try {
      const Constructor = recognitionConstructor();
      const recordingPreferred = mode === "recording" || mode === "auto" && deviceId && callbacks.current.onAudioRecorded;
      if (Constructor && !recordingPreferred) {
        const recognition = new Constructor();
        session.recognition = recognition;
        recognition.lang = lang;
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.onstart = () => {
          if (current(session)) transition("listening", "Listening…");
        };
        recognition.onresult = event => {
          if (!current(session)) return;
          let final = "";
          let interim = "";
          for (let index = event.resultIndex; index < event.results.length; index++) {
            const result = event.results[index];
            if (!result?.[0]) continue;
            if (result.isFinal) final += result[0].transcript;else interim += result[0].transcript;
          }
          if (final.trim()) callbacks.current.onTranscript(final.trim());
          callbacks.current.onInterimTranscript?.(interim);
        };
        recognition.onend = () => finish(session, "idle", "Speech input stopped.");
        recognition.onerror = event => fail(session, new Error(event.error === "not-allowed" ? "Microphone permission was denied. Allow access and try again." : `Speech recognition stopped: ${event.error}. Try again.`));
        recognition.start();
        session.timer = setTimeout(() => {
          if (current(session)) {
            transition("processing", "Finishing speech…");
            try {
              recognition.stop();
            } catch (reason) {
              fail(session, reason);
            }
          }
        }, duration * 1000);
      } else {
        if (!callbacks.current.onAudioRecorded) throw new Error("An application transcription service is required for recording.");
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: deviceId ? {
            deviceId: {
              exact: deviceId
            }
          } : true
        });
        session.stream = stream;
        if (!current(session)) {
          stream.getTracks().forEach(track => {
            track.stop();
          });
          return;
        }
        const mimeType = ["audio/webm;codecs=opus", "audio/mp4", "audio/webm"].find(type => typeof MediaRecorder.isTypeSupported === "function" && MediaRecorder.isTypeSupported(type));
        const recorder = new MediaRecorder(stream, mimeType ? {
          mimeType
        } : undefined);
        session.recorder = recorder;
        recorder.ondataavailable = event => {
          if (current(session) && event.data.size) session.chunks.push(event.data);
        };
        recorder.onerror = () => fail(session, new Error("The microphone recording failed. Try again."));
        recorder.onstop = async () => {
          if (!current(session)) return;
          clearTimeout(session.timer);
          stream.getTracks().forEach(track => {
            track.stop();
          });
          transition("processing", "Transcribing recording…");
          try {
            const blob = new Blob(session.chunks, {
              type: recorder.mimeType || session.chunks[0]?.type || ""
            });
            if (!blob.size) throw new Error("No audio was recorded. Try again.");
            const text = await callbacks.current.onAudioRecorded(blob, {
              signal: session.abort.signal
            });
            if (!current(session)) return;
            if (text.trim()) callbacks.current.onTranscript(text.trim());
            finish(session, "idle", text.trim() ? "Transcript ready." : "No speech was detected. Try again.");
          } catch (reason) {
            fail(session, reason);
          }
        };
        recorder.start();
        transition("listening", "Recording…");
        session.timer = setTimeout(() => stopRecording(session), duration * 1000);
      }
    } catch (reason) {
      fail(session, reason);
    }
  };
  const root = rs(["rs-speech-input"], styles.root);
  const feedback = rs(["rs-speech-input-message"], styles.message);
  const icon = rs(["rs-speech-input-icon"], styles.icon);
  const active = status === "listening" || status === "requesting" || status === "processing";
  const label = status === "requesting" || status === "processing" ? "Cancel speech input" : status === "listening" ? "Stop speech input" : "Start speech input";
  return /*#__PURE__*/_jsxs("span", {
    ...root,
    children: [/*#__PURE__*/_jsxs(Button, {
      variant: "subtle",
      ...props,
      ref: ref,
      className: className,
      style: style,
      disabled: disabled || !available,
      "aria-label": ariaLabel ?? label,
      "aria-describedby": [describedBy, `${id}-status`].filter(Boolean).join(" "),
      "aria-pressed": active,
      onClick: event => {
        onClick?.(event);
        if (!event.defaultPrevented) void activate();
      },
      children: [/*#__PURE__*/_jsx("svg", {
        ...icon,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1",
        "aria-hidden": "true",
        children: active ? /*#__PURE__*/_jsx("rect", {
          x: "6",
          y: "6",
          width: "12",
          height: "12",
          rx: "1"
        }) : /*#__PURE__*/_jsxs(_Fragment, {
          children: [/*#__PURE__*/_jsx("rect", {
            x: "8",
            y: "2",
            width: "8",
            height: "14",
            rx: "4"
          }), /*#__PURE__*/_jsx("path", {
            d: "M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8"
          })]
        })
      }), children ?? label]
    }), /*#__PURE__*/_jsx("span", {
      ...feedback,
      id: `${id}-status`,
      role: "status",
      children: message
    })]
  });
});
//# sourceMappingURL=speech-input.js.map
