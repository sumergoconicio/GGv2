"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { Icon } from "./icon.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  action: {
    kzqmXN: "x1uyfxw7",
    k7Eaqz: "xtp0tkc",
    kZKoxP: "x9ve8r1",
    kmVPX3: "x1717udv",
    kmuXW: "x2lah0s",
    $$css: true
  }
};

/** Named, keyboard-operable transport buttons. Playback state may be owned by a media element. */
export const PlaybackControls = /*#__PURE__*/React.forwardRef(function PlaybackControls({
  playing,
  defaultPlaying = false,
  onPlayingChange,
  onPrevious,
  onNext,
  onStop,
  disabled = false,
  previousDisabled = false,
  nextDisabled = false,
  previousLabel = "Previous track",
  nextLabel = "Next track",
  label = "Playback controls",
  className,
  style,
  ...props
}, ref) {
  const [inner, setInner] = React.useState(defaultPlaying);
  const active = playing ?? inner;
  const change = next => {
    if (playing === undefined) setInner(next);
    onPlayingChange?.(next);
  };
  const root = rs(["rs-playback-controls", className], styles.root);
  const primaryActionSx = rs(["rs-btn-primary", "rs-playback-action"], styles.action);
  const ghostActionSx = rs(["rs-btn-ghost", "rs-playback-action"], styles.action);
  // Button's composed atomics must not add text padding or stretch these icon controls.
  const actionStyle = {
    width: "var(--hit)",
    height: "var(--hit)",
    padding: 0
  };
  const primaryAction = {
    ...primaryActionSx,
    style: {
      ...primaryActionSx.style,
      ...actionStyle
    }
  };
  const ghostAction = {
    ...ghostActionSx,
    style: {
      ...ghostActionSx.style,
      ...actionStyle
    }
  };
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    role: "group",
    "aria-label": label,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [onPrevious && /*#__PURE__*/_jsx(Button, {
      ...ghostAction,
      variant: "ghost",
      disabled: disabled || previousDisabled,
      "aria-label": previousLabel,
      onClick: onPrevious,
      children: /*#__PURE__*/_jsx(Icon, {
        name: "skip-back"
      })
    }), /*#__PURE__*/_jsx(Button, {
      ...primaryAction,
      disabled: disabled,
      "aria-label": active ? "Pause" : "Play",
      onClick: () => change(!active),
      children: /*#__PURE__*/_jsx(Icon, {
        name: active ? "pause" : "play"
      })
    }), onNext && /*#__PURE__*/_jsx(Button, {
      ...ghostAction,
      variant: "ghost",
      disabled: disabled || nextDisabled,
      "aria-label": nextLabel,
      onClick: onNext,
      children: /*#__PURE__*/_jsx(Icon, {
        name: "skip-forward"
      })
    }), onStop && /*#__PURE__*/_jsx(Button, {
      ...ghostAction,
      variant: "ghost",
      disabled: disabled,
      "aria-label": "Stop",
      onClick: () => {
        change(false);
        onStop();
      },
      children: /*#__PURE__*/_jsx(Icon, {
        name: "stop"
      })
    })]
  });
});
//# sourceMappingURL=playback-controls.js.map
