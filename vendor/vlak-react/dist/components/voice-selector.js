"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { Combobox } from "./combobox.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    k7Eaqz: "xeuugli",
    kzqmXN: "xh8yej3",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  label: {
    kGuDYH: "x1jq7itm",
    k63SB2: "xk50ysn",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  option: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x1enigpx",
    $$css: true
  },
  metadata: {
    kGuDYH: "x4ro2ui",
    kMwMTN: "x1ixqp2s",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  detail: {
    kmVPX3: "x79iv2k",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j xz1l38o",
    kaIpWk: "xkrxur",
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    $$css: true
  },
  message: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x4ro2ui",
    kMwMTN: "x1ixqp2s",
    kLWn49: "xfrs9s4",
    $$css: true
  }
};

/** Supplied voice metadata and optional real audio samples; provider catalogs remain application-owned. */
export const VoiceSelector = /*#__PURE__*/React.forwardRef(function VoiceSelector({
  voices,
  value,
  defaultValue = "",
  onValueChange,
  label = "Voice",
  disabled = false,
  className,
  style,
  ...props
}, ref) {
  const [inner, setInner] = React.useState(defaultValue);
  const selected = voices.find(voice => voice.id === (value ?? inner));
  const [playing, setPlaying] = React.useState(false);
  const [pending, setPending] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const mediaRef = React.useRef(null);
  const version = React.useRef(0);
  const busy = React.useRef(false);
  const id = React.useId();
  React.useEffect(() => {
    const media = mediaRef.current;
    version.current++;
    busy.current = false;
    setPlaying(false);
    setPending(false);
    setMessage("");
    return () => {
      version.current++;
      busy.current = false;
      media?.pause();
    };
  }, [selected?.id, selected?.previewSrc, disabled]);
  const preview = async () => {
    const media = mediaRef.current;
    if (!media || disabled || selected?.disabled || busy.current) return;
    if (playing) {
      media.pause();
      setPlaying(false);
      return;
    }
    busy.current = true;
    const request = ++version.current;
    setPending(true);
    setMessage("");
    try {
      await media.play();
      if (request === version.current) setPlaying(!media.paused);
    } catch {
      if (request === version.current) setMessage("The voice sample could not play. Try again.");
    } finally {
      if (request === version.current) {
        busy.current = false;
        setPending(false);
      }
    }
  };
  const root = rs(["rs-voice-selector", className], styles.root);
  const heading = rs(["rs-voice-selector-label"], styles.label);
  const option = rs(["rs-voice-selector-option"], styles.option);
  const metadata = rs(["rs-voice-selector-metadata"], styles.metadata);
  const detail = rs(["rs-voice-selector-detail"], styles.detail);
  const status = rs(["rs-voice-selector-message"], styles.message);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("span", {
      ...heading,
      id: `${id}-label`,
      children: label
    }), /*#__PURE__*/_jsx(Combobox, {
      value: value ?? inner,
      onValueChange: next => {
        if (value === undefined) setInner(next);
        onValueChange?.(next);
      },
      "aria-labelledby": `${id}-label`,
      placeholder: "Search voices\u2026",
      emptyLabel: "No voices match",
      disabled: disabled,
      options: voices.map(voice => ({
        value: voice.id,
        disabled: voice.disabled,
        searchText: [voice.name, voice.provider, voice.language, voice.description, ...(voice.attributes ?? [])].filter(Boolean).join(" "),
        label: /*#__PURE__*/_jsxs("span", {
          ...option,
          children: [/*#__PURE__*/_jsx("span", {
            children: voice.name
          }), /*#__PURE__*/_jsx("span", {
            ...metadata,
            children: [voice.provider, voice.language, ...(voice.attributes ?? [])].filter(Boolean).join(" · ")
          })]
        })
      }))
    }), selected && /*#__PURE__*/_jsxs("div", {
      ...detail,
      children: [/*#__PURE__*/_jsx("span", {
        children: selected.name
      }), selected.description && /*#__PURE__*/_jsx("p", {
        ...status,
        children: selected.description
      }), /*#__PURE__*/_jsx("span", {
        ...metadata,
        children: [selected.provider, selected.language, ...(selected.attributes ?? [])].filter(Boolean).join(" · ")
      }), selected.previewSrc && /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx("audio", {
          ref: mediaRef,
          src: selected.previewSrc,
          preload: "none",
          "aria-label": `${selected.name} voice sample`,
          onPlay: () => setPlaying(true),
          onPause: () => setPlaying(false),
          onEnded: () => setPlaying(false),
          onError: () => {
            version.current++;
            busy.current = false;
            setPlaying(false);
            setPending(false);
            setMessage("The voice sample could not load. Try again.");
          }
        }, `${selected.id}:${selected.previewSrc}`), selected.previewText && /*#__PURE__*/_jsx("p", {
          ...status,
          children: selected.previewText
        }), /*#__PURE__*/_jsx(Button, {
          variant: "subtle",
          size: "sm",
          disabled: disabled || selected.disabled || pending,
          onClick: () => {
            void preview();
          },
          children: pending ? "Loading sample…" : playing ? "Stop sample" : "Preview voice"
        })]
      })]
    }), /*#__PURE__*/_jsx("p", {
      ...status,
      role: "status",
      children: message || (voices.length === 0 ? "No voices supplied." : (value ?? inner) && !selected ? "The selected voice is unavailable. Choose another voice." : "")
    })]
  });
});
//# sourceMappingURL=voice-selector.js.map
