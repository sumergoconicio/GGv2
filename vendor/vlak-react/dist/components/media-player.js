"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useMergedRefs } from "../merge-refs.js";
import { Button } from "./button.js";
import { Icon } from "./icon.js";
import { NativeSelect } from "./native-select.js";
import { Slider } from "./slider.js";
import { PlaybackControls } from "./playback-controls.js";
import { MediaScrubber } from "./media-scrubber.js";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kOIVth: "x8fetqu",
    $$css: true
  },
  media: {
    k1xSpc: "x1lliihq",
    kzqmXN: "xh8yej3",
    kskxy: "xkch13f",
    kWkggS: "x6583kg",
    $$css: true
  },
  heading: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x1jchvi3",
    k63SB2: "x1s688f",
    kLWn49: "xfrs9s4",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  controls: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x6s0dn4",
    kjj79g: "x1qughib",
    kOIVth: "x8233eu",
    $$css: true
  },
  action: {
    kzqmXN: "x14atkfc x16afccg",
    kg3NbH: "x1ryrjj2",
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    $$css: true
  },
  iconAction: {
    kzqmXN: "x1uyfxw7",
    kZKoxP: "x9ve8r1",
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kmVPX3: "x1717udv",
    kmuXW: "x2lah0s",
    $$css: true
  },
  volume: {
    kUk6DE: "x9op8dk",
    k7Eaqz: "x8a598m",
    kB7OPa: "x9f619",
    kg3NbH: "x8srd2o x16oe8tr",
    $$css: true
  },
  select: {
    kUk6DE: "xkz0k9k",
    kzqmXN: "xezivpi",
    k7Eaqz: "xeuugli",
    ks0D6T: "x193iq5w",
    $$css: true
  },
  status: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xkpwil5",
    kMwMTN: "x1ixqp2s",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  transcript: {
    kLWn49: "xfrs9s4",
    ks0D6T: "x1qp14f0",
    $$css: true
  },
  summary: {
    kAzted: "x1wszdd",
    kkrTdU: "x1ypdohk",
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    k63SB2: "xk50ysn",
    kPJHz1: "x784prv",
    k7shQP: "x9v5kkp",
    kZs9gx: "x14tvtkk",
    kiEn40: "x7s97pk",
    $$css: true
  }
};

/** Native media with Vlak transport, seeking, volume, captions, and recoverable loading errors. */
export const MediaPlayer = /*#__PURE__*/React.forwardRef(function MediaPlayer({
  src,
  sources = [],
  title,
  kind = "video",
  poster,
  preload = "metadata",
  tracks = [],
  transcript,
  onPlayingChange,
  onTimeChange,
  className,
  style,
  ...props
}, ref) {
  const mediaRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const mergedRef = useMergedRefs(mediaRef, ref);
  const [hydrated, setHydrated] = React.useState(false);
  const [playing, setPlaying] = React.useState(false);
  const [position, setPosition] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [volume, setVolume] = React.useState(1);
  const [muted, setMuted] = React.useState(false);
  const [status, setStatus] = React.useState("");
  const [failed, setFailed] = React.useState(false);
  const [captions, setCaptions] = React.useState(() => String(tracks.findIndex(track => track.default)));
  const [canFullscreen, setCanFullscreen] = React.useState(false);
  const [speed, setSpeed] = React.useState(1);
  const [buffered, setBuffered] = React.useState(0);
  const headingId = React.useId();
  const hasSources = sources.length > 0;
  const sourceKey = JSON.stringify([kind, sources.map(source => [source.src, source.type ?? ""]), src]);
  const previousSourceKey = React.useRef(sourceKey);
  React.useEffect(() => {
    setHydrated(true);
    setCanFullscreen(typeof containerRef.current?.requestFullscreen === "function");
  }, []);
  React.useEffect(() => {
    setPlaying(false);
    setPosition(0);
    setDuration(0);
    setBuffered(0);
    setFailed(false);
    setStatus("");
    if (previousSourceKey.current !== sourceKey) {
      previousSourceKey.current = sourceKey;
      if (hasSources) mediaRef.current?.load();
    }
  }, [sourceKey, hasSources]);
  const captionsKey = tracks.map(track => `${track.src}:${Boolean(track.default)}`).join("\n");
  const defaultCaptions = String(tracks.findIndex(track => track.default));
  React.useEffect(() => {
    setCaptions(defaultCaptions);
    const list = mediaRef.current?.textTracks;
    if (list) for (let index = 0; index < list.length; index++) list[index].mode = index === Number(defaultCaptions) ? "showing" : "disabled";
  }, [sourceKey, captionsKey, defaultCaptions]);
  const applyCaptions = selected => {
    const list = mediaRef.current?.textTracks;
    if (list) for (let index = 0; index < list.length; index++) list[index].mode = index === Number(selected) ? "showing" : "disabled";
  };
  const toggle = async next => {
    const media = mediaRef.current;
    if (!media) return;
    setFailed(false);
    setStatus("");
    if (!next) {
      media.pause();
      return;
    }
    try {
      await media.play();
    } catch {
      setStatus("Playback could not start. Try Play again.");
    }
  };
  const root = rs(["rs-media-player", className], styles.root);
  const media = rs(["rs-media-player-media"], styles.media);
  const heading = rs(["rs-media-player-title"], styles.heading);
  const controls = rs(["rs-media-player-controls"], styles.controls);
  const actionSx = rs(["rs-media-player-action"], styles.action);
  // Composed Button atomics keep their phone width, so preserve this row's intrinsic sizing.
  const action = {
    ...actionSx,
    style: {
      ...actionSx.style,
      width: "auto"
    }
  };
  const iconActionSx = rs(["rs-btn-ghost", "rs-media-player-icon-action"], styles.iconAction);
  // Keep composed Button padding and phone width from changing icon-only geometry.
  const iconAction = {
    ...iconActionSx,
    style: {
      ...iconActionSx.style,
      width: "var(--hit)",
      height: "var(--hit)",
      padding: 0
    }
  };
  const volumeStyle = rs(["rs-media-player-volume"], styles.volume);
  const selectStyle = rs(["rs-media-player-select"], styles.select);
  const message = rs(["rs-media-player-status"], styles.status);
  const transcriptStyle = rs(["rs-media-player-transcript"], styles.transcript);
  const summary = rs(["rs-media-player-summary"], styles.summary);
  const sourceElements = hasSources && /*#__PURE__*/_jsxs(_Fragment, {
    children: [sources.map((source, index) => /*#__PURE__*/_jsx("source", {
      src: source.src,
      type: source.type
    }, `${index}:${source.src}:${source.type ?? ""}`)), /*#__PURE__*/_jsx("source", {
      src: src
    }, `fallback:${src}`)]
  });
  const shared = {
    ...media,
    ref: mergedRef,
    src: hasSources ? undefined : src,
    preload,
    controls: !hydrated,
    "aria-label": title,
    onPlay: () => {
      setPlaying(true);
      onPlayingChange?.(true);
      setStatus("");
    },
    onPause: () => {
      setPlaying(false);
      onPlayingChange?.(false);
    },
    onEnded: () => {
      setPlaying(false);
      onPlayingChange?.(false);
    },
    onTimeUpdate: event => {
      setPosition(event.currentTarget.currentTime);
      onTimeChange?.(event.currentTarget.currentTime);
    },
    onDurationChange: event => setDuration(event.currentTarget.duration),
    onLoadedMetadata: event => {
      setDuration(event.currentTarget.duration);
      setFailed(false);
      setStatus("");
      applyCaptions(captions);
    },
    onWaiting: () => setStatus("Buffering media…"),
    onCanPlay: () => setStatus(""),
    onVolumeChange: event => {
      setVolume(event.currentTarget.volume);
      setMuted(event.currentTarget.muted);
    },
    onRateChange: event => setSpeed(event.currentTarget.playbackRate),
    onProgress: event => {
      const ranges = event.currentTarget.buffered;
      setBuffered(ranges.length ? ranges.end(ranges.length - 1) : 0);
    },
    onError: () => {
      setFailed(true);
      setPlaying(false);
      setStatus("The media could not load. Check the connection and retry.");
    }
  };
  return /*#__PURE__*/_jsxs("div", {
    ref: containerRef,
    role: "region",
    "aria-labelledby": headingId,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("h3", {
      ...heading,
      id: headingId,
      children: title
    }), kind === "video" ? /*#__PURE__*/_jsxs("video", {
      ...shared,
      poster: poster,
      playsInline: true,
      children: [sourceElements, tracks.map(track => /*#__PURE__*/_jsx("track", {
        kind: "captions",
        ...track
      }, track.src))]
    }) : /*#__PURE__*/_jsx("audio", {
      ...shared,
      children: sourceElements
    }), hydrated && /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsx(MediaScrubber, {
        value: position,
        duration: duration,
        buffered: buffered,
        disabled: failed,
        onValueChange: next => {
          const element = mediaRef.current;
          if (element && Number.isFinite(duration)) {
            element.currentTime = next;
            setPosition(next);
            onTimeChange?.(next);
          }
        }
      }), /*#__PURE__*/_jsxs("div", {
        ...controls,
        children: [/*#__PURE__*/_jsx(PlaybackControls, {
          playing: playing,
          disabled: failed,
          onPlayingChange: next => {
            void toggle(next);
          }
        }), /*#__PURE__*/_jsx(Button, {
          ...iconAction,
          variant: "ghost",
          "aria-label": muted ? "Unmute" : "Mute",
          onClick: () => {
            if (mediaRef.current) {
              mediaRef.current.muted = !muted;
              setMuted(!muted);
            }
          },
          children: /*#__PURE__*/_jsx(Icon, {
            name: muted ? "volume-off" : "volume"
          })
        }), /*#__PURE__*/_jsx("div", {
          ...volumeStyle,
          children: /*#__PURE__*/_jsx(Slider, {
            "aria-label": "Volume",
            min: 0,
            max: 1,
            step: 0.05,
            value: muted ? 0 : volume,
            onValueChange: next => {
              if (mediaRef.current) {
                mediaRef.current.volume = next;
                mediaRef.current.muted = false;
                setVolume(next);
                setMuted(false);
              }
            }
          })
        }), /*#__PURE__*/_jsx("div", {
          ...selectStyle,
          children: /*#__PURE__*/_jsx(NativeSelect, {
            "aria-label": "Playback speed",
            value: String(speed),
            onChange: event => {
              const next = Number(event.target.value);
              if (mediaRef.current) mediaRef.current.playbackRate = next;
              setSpeed(next);
            },
            children: [0.5, 0.75, 1, 1.25, 1.5, 2].map(rate => /*#__PURE__*/_jsxs("option", {
              value: String(rate),
              children: [rate, "\xD7 speed"]
            }, rate))
          })
        }), kind === "video" && tracks.length > 0 && /*#__PURE__*/_jsx("div", {
          ...selectStyle,
          children: /*#__PURE__*/_jsxs(NativeSelect, {
            "aria-label": "Captions",
            value: captions,
            onChange: event => {
              setCaptions(event.target.value);
              applyCaptions(event.target.value);
            },
            children: [/*#__PURE__*/_jsx("option", {
              value: "-1",
              children: "Captions off"
            }), tracks.map((track, index) => /*#__PURE__*/_jsx("option", {
              value: String(index),
              children: track.label
            }, track.src))]
          })
        }), kind === "video" && canFullscreen && /*#__PURE__*/_jsx(Button, {
          ...iconAction,
          variant: "ghost",
          "aria-label": "Full screen",
          onClick: () => {
            void containerRef.current?.requestFullscreen().catch(() => setStatus("Full screen is unavailable in this browser."));
          },
          children: /*#__PURE__*/_jsx(Icon, {
            name: "expand"
          })
        })]
      })]
    }), /*#__PURE__*/_jsx("p", {
      ...message,
      role: "status",
      children: status
    }), failed && /*#__PURE__*/_jsx(Button, {
      ...action,
      variant: "ghost",
      onClick: () => {
        setFailed(false);
        setStatus("Loading media…");
        mediaRef.current?.load();
      },
      children: "Retry media"
    }), transcript && /*#__PURE__*/_jsxs("details", {
      ...transcriptStyle,
      children: [/*#__PURE__*/_jsx("summary", {
        ...summary,
        children: "Transcript"
      }), transcript]
    })]
  });
});
//# sourceMappingURL=media-player.js.map
