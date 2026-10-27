"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useMergedRefs } from "../merge-refs.js";
import { Button } from "./button.js";
import { ButtonGroup } from "./button-group.js";
import { Slider } from "./slider.js";
import { MediaScrubber } from "./media-scrubber.js";
import { Icon } from "./icon.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const AudioPlayerContext = /*#__PURE__*/React.createContext(null);

/** Access the native media controller from controls nested inside AudioPlayer. */
export function useAudioPlayer() {
  const context = React.useContext(AudioPlayerContext);
  if (!context) throw new Error("useAudioPlayer must be used inside AudioPlayer.");
  return context;
}
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kmVPX3: "x79iv2k",
    kB7OPa: "x9f619",
    kMwMTN: "x1gney9c",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j xz1l38o",
    kaIpWk: "xkrxur",
    $$css: true
  },
  heading: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x1jq7itm",
    kLWn49: "xfrs9s4",
    k63SB2: "xk50ysn",
    $$css: true
  },
  controls: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  row: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kwnvtZ: "x1a02dak",
    kOIVth: "x8233eu",
    $$css: true
  },
  volume: {
    kUk6DE: "x11i4osm",
    k7Eaqz: "xz6sds4",
    ks0D6T: "x1s8ub08",
    $$css: true
  },
  status: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x4ro2ui",
    kMwMTN: "x1ixqp2s",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  transcript: {
    kGuDYH: "x1jq7itm",
    kLWn49: "xfrs9s4",
    ks0D6T: "x1qp14f0",
    $$css: true
  }
};

/** Native audio for URLs or generated speech, with replaceable controls and explicit media ownership. */
export const AudioPlayer = /*#__PURE__*/React.forwardRef(function AudioPlayer({
  title,
  src,
  data,
  transcript,
  preload = "metadata",
  onTimeChange,
  onPlayingChange,
  children,
  className,
  style,
  ...props
}, ref) {
  const validData = data && /^audio\/[a-z0-9.+-]+$/i.test(data.mediaType) && /^[a-z0-9+/=\s]+$/i.test(data.base64);
  const source = src ?? (validData ? `data:${data.mediaType};base64,${data.base64.replace(/\s/g, "")}` : "");
  const mediaRef = React.useRef(null);
  const mergedRef = useMergedRefs(mediaRef, ref);
  const [playing, setPlaying] = React.useState(false);
  const [pending, setPending] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [volume, setVolumeState] = React.useState(1);
  const [muted, setMuted] = React.useState(false);
  const [error, setError] = React.useState("");
  const [hydrated, setHydrated] = React.useState(false);
  const version = React.useRef(0);
  const busy = React.useRef(false);
  const callbacks = React.useRef({
    onTimeChange,
    onPlayingChange
  });
  callbacks.current = {
    onTimeChange,
    onPlayingChange
  };
  const id = React.useId();
  React.useEffect(() => {
    const media = mediaRef.current;
    version.current++;
    busy.current = false;
    // Cached/data audio can finish loading before hydration installs the native event handlers.
    // Read the element first so switching to custom controls preserves its ready metadata.
    setHydrated(true);
    setPlaying(media ? !media.paused && !media.ended : false);
    setPending(false);
    setCurrentTime(media && Number.isFinite(media.currentTime) ? media.currentTime : 0);
    setDuration(media && Number.isFinite(media.duration) ? media.duration : 0);
    setVolumeState(media?.volume ?? 1);
    setMuted(media?.muted ?? false);
    setError(source ? media?.error ? "Audio could not load. Retry the source." : "" : "Supply an audio address or valid generated speech data.");
    return () => {
      version.current++;
      busy.current = false;
      media?.pause();
    };
  }, [source]);
  const play = async () => {
    const media = mediaRef.current;
    if (!media || !source || busy.current) return;
    busy.current = true;
    const request = ++version.current;
    setPending(true);
    setError("");
    try {
      await media.play();
    } catch {
      if (request === version.current) setError("Audio could not play. Try again.");
    } finally {
      if (request === version.current) {
        busy.current = false;
        setPending(false);
      }
    }
  };
  const pause = () => {
    version.current++;
    busy.current = false;
    setPending(false);
    mediaRef.current?.pause();
  };
  const seek = seconds => {
    const media = mediaRef.current;
    if (!media || !Number.isFinite(seconds) || !Number.isFinite(media.duration) || media.duration <= 0) return;
    const next = Math.min(media.duration, Math.max(0, seconds));
    media.currentTime = next;
    setCurrentTime(next);
    callbacks.current.onTimeChange?.(next);
  };
  const setVolume = next => {
    if (mediaRef.current && Number.isFinite(next)) {
      mediaRef.current.volume = Math.max(0, Math.min(1, next));
      mediaRef.current.muted = false;
      setVolumeState(mediaRef.current.volume);
      setMuted(false);
    }
  };
  const toggleMute = () => {
    if (mediaRef.current) {
      mediaRef.current.muted = !mediaRef.current.muted;
      setMuted(mediaRef.current.muted);
    }
  };
  const retry = () => {
    setError("");
    mediaRef.current?.load();
  };
  const root = rs(["rs-audio-player", className], styles.root);
  const heading = rs(["rs-audio-player-heading"], styles.heading);
  const status = rs(["rs-audio-player-status"], styles.status);
  const transcriptStyle = rs(["rs-audio-player-transcript"], styles.transcript);
  const state = {
    playing,
    pending,
    currentTime,
    duration,
    volume,
    muted,
    error,
    play,
    pause,
    seek,
    setVolume,
    toggleMute,
    retry
  };
  return /*#__PURE__*/_jsx(AudioPlayerContext.Provider, {
    value: state,
    children: /*#__PURE__*/_jsxs("div", {
      ...props,
      role: "region",
      "aria-labelledby": id,
      className: root.className,
      style: {
        ...root.style,
        ...style
      },
      children: [/*#__PURE__*/_jsx("h3", {
        ...heading,
        id: id,
        children: title
      }), /*#__PURE__*/_jsx("audio", {
        ref: mergedRef,
        src: source || undefined,
        preload: preload,
        controls: !hydrated,
        "aria-label": title,
        onPlay: () => {
          setPlaying(true);
          callbacks.current.onPlayingChange?.(true);
        },
        onPause: () => {
          setPlaying(false);
          callbacks.current.onPlayingChange?.(false);
        },
        onEnded: () => {
          setPlaying(false);
          callbacks.current.onPlayingChange?.(false);
        },
        onTimeUpdate: event => {
          setCurrentTime(event.currentTarget.currentTime);
          callbacks.current.onTimeChange?.(event.currentTarget.currentTime);
        },
        onDurationChange: event => setDuration(Number.isFinite(event.currentTarget.duration) ? event.currentTarget.duration : 0),
        onLoadedMetadata: event => {
          setDuration(Number.isFinite(event.currentTarget.duration) ? event.currentTarget.duration : 0);
          setError("");
        },
        onVolumeChange: event => {
          setVolumeState(event.currentTarget.volume);
          setMuted(event.currentTarget.muted);
        },
        onError: () => {
          version.current++;
          busy.current = false;
          setPending(false);
          setPlaying(false);
          callbacks.current.onPlayingChange?.(false);
          setError("Audio could not load. Retry the source.");
        }
      }, source), hydrated && (children ?? /*#__PURE__*/_jsx(AudioPlayerControls, {
        disabled: !source
      })), /*#__PURE__*/_jsx("p", {
        ...status,
        role: "status",
        children: error
      }), error && source && /*#__PURE__*/_jsx(Button, {
        variant: "subtle",
        size: "sm",
        onClick: retry,
        children: "Retry audio"
      }), transcript && /*#__PURE__*/_jsx("div", {
        ...transcriptStyle,
        children: transcript
      })]
    })
  });
});

/** Default transport, bounded skip seeking and volume; replace or compose with useAudioPlayer. */
export const AudioPlayerControls = /*#__PURE__*/React.forwardRef(function AudioPlayerControls({
  seekOffset = 10,
  disabled = false,
  className,
  style,
  ...props
}, ref) {
  const audio = useAudioPlayer();
  const offset = Number.isFinite(seekOffset) && seekOffset > 0 ? seekOffset : 10;
  const root = rs(["rs-audio-player-controls", className], styles.controls);
  const row = rs(["rs-audio-player-row"], styles.row);
  const volume = rs(["rs-audio-player-volume"], styles.volume);
  return /*#__PURE__*/_jsxs("div", {
    ...props,
    ref: ref,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx(MediaScrubber, {
      value: audio.currentTime,
      duration: audio.duration,
      onValueChange: audio.seek,
      disabled: disabled || audio.duration <= 0
    }), /*#__PURE__*/_jsxs("div", {
      ...row,
      children: [/*#__PURE__*/_jsxs(ButtonGroup, {
        "aria-label": "Audio playback",
        children: [/*#__PURE__*/_jsx(Button, {
          variant: "subtle",
          size: "icon",
          "aria-label": `Back ${offset} seconds`,
          disabled: disabled || audio.duration <= 0 || audio.currentTime <= 0,
          onClick: () => audio.seek(audio.currentTime - offset),
          children: /*#__PURE__*/_jsx(Icon, {
            name: "skip-back"
          })
        }), /*#__PURE__*/_jsx(Button, {
          variant: "subtle",
          size: "icon",
          "aria-label": audio.playing ? "Pause audio" : "Play audio",
          disabled: disabled || audio.pending,
          onClick: () => {
            if (audio.playing) audio.pause();else void audio.play();
          },
          children: /*#__PURE__*/_jsx(Icon, {
            name: audio.playing ? "pause" : "play"
          })
        }), /*#__PURE__*/_jsx(Button, {
          variant: "subtle",
          size: "icon",
          "aria-label": `Forward ${offset} seconds`,
          disabled: disabled || audio.duration <= 0 || audio.currentTime >= audio.duration,
          onClick: () => audio.seek(audio.currentTime + offset),
          children: /*#__PURE__*/_jsx(Icon, {
            name: "skip-forward"
          })
        })]
      }), /*#__PURE__*/_jsx(Button, {
        variant: "subtle",
        size: "icon",
        "aria-label": audio.muted ? "Unmute audio" : "Mute audio",
        disabled: disabled,
        onClick: audio.toggleMute,
        children: /*#__PURE__*/_jsx(Icon, {
          name: audio.muted ? "volume-off" : "volume"
        })
      }), /*#__PURE__*/_jsx("div", {
        ...volume,
        children: /*#__PURE__*/_jsx(Slider, {
          "aria-label": "Audio volume",
          min: 0,
          max: 1,
          step: 0.05,
          value: audio.muted ? 0 : audio.volume,
          onValueChange: audio.setVolume,
          disabled: disabled
        })
      })]
    })]
  });
});
//# sourceMappingURL=audio-player.js.map
