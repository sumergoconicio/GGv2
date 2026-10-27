"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useMergedRefs } from "../merge-refs.js";
import { useOverlayPosition } from "../use-overlay-position.js";
import { MenuPanel } from "./dropdown-menu.js";
import { Button } from "./button.js";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x6s0dn4",
    kOIVth: "xxhr3t",
    k7Eaqz: "xeuugli",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  selected: {
    kMwMTN: "x1gney9c x1pljmm8",
    kWkggS: "x1nzd1wa xf7h6k7",
    $$css: true
  },
  icon: {
    k1xSpc: "x1lliihq",
    kzqmXN: "x1xp8n7a",
    kZKoxP: "xmix8c7",
    kmuXW: "x2lah0s",
    kfzvcC: "x47corl",
    $$css: true
  },
  status: {
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x1dcheo9",
    kLWn49: "xfrs9s4",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  menu: {
    kB7OPa: "x9f619",
    kVAEAm: "xixxii4",
    kY2c9j: "xhupvvu",
    kzqmXN: "xrdac2d",
    kogj98: "x1ghz6dp",
    kmVPX3: "x78pyy4",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd xz1l38o",
    kaIpWk: "xkrxur",
    kWkggS: "xhpg8l3",
    kMwMTN: "x1gney9c",
    $$css: true
  }
};
function ActionGlyph({
  name
}) {
  const icon = rs(["rs-response-actions-icon"], styles.icon);
  return /*#__PURE__*/_jsxs("svg", {
    ...icon,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    focusable: "false",
    children: [name === "copy" && /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsx("rect", {
        x: "8",
        y: "8",
        width: "12",
        height: "13",
        rx: "1"
      }), /*#__PURE__*/_jsx("path", {
        d: "M16 8V3H4v13h4"
      })]
    }), name === "read" && /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsx("path", {
        d: "m11 4-6 5H2v6h3l6 5V4Z"
      }), /*#__PURE__*/_jsx("path", {
        d: "M15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"
      })]
    }), name === "stop" && /*#__PURE__*/_jsx("rect", {
      x: "5",
      y: "5",
      width: "14",
      height: "14",
      rx: "1"
    }), name === "feedback" && /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsx("path", {
        transform: "translate(1 0)",
        d: "M1 7h3v7H1zM4 7l3-5c1.5 0 2 1 1 4h4a1 1 0 0 1 1 1l-1.5 6a1 1 0 0 1-1 .8H4"
      }), /*#__PURE__*/_jsx("path", {
        transform: "translate(-1 0)",
        d: "M23 17h-3v-7h3zM20 17l-3 5c-1.5 0-2-1-1-4h-4a1 1 0 0 1-1-1l1.5-6a1 1 0 0 1 1-.8H20"
      })]
    }), name === "share" && /*#__PURE__*/_jsx("path", {
      d: "M12 16V2m-5 5 5-5 5 5M5 12H3v10h18V12h-2"
    })]
  });
}

/** Compact message actions. Speech and sharing run only after a button activation. */
export const ResponseActions = /*#__PURE__*/React.forwardRef(function ResponseActions({
  text,
  actions = ["copy", "read", "feedback", "share"],
  feedback,
  defaultFeedback = null,
  onFeedback,
  onShare,
  onReadingChange,
  className,
  style,
  children,
  "aria-label": label = "Response actions",
  ...props
}, ref) {
  const actionOrder = [...new Set(actions)];
  const hasRead = actionOrder.includes("read");
  const hasFeedback = actionOrder.includes("feedback");
  const rootRef = React.useRef(null);
  const mergedRef = useMergedRefs(rootRef, ref);
  const [innerFeedback, setInnerFeedback] = React.useState(defaultFeedback);
  const selected = feedback === undefined ? innerFeedback : feedback;
  const [busy, setBusy] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [canRead, setCanRead] = React.useState(false);
  const [reading, setReading] = React.useState(false);
  const locked = React.useRef(false);
  const version = React.useRef(0);
  const utterance = React.useRef(null);
  const readingRef = React.useRef(false);
  const readingCallback = React.useRef(onReadingChange);
  readingCallback.current = onReadingChange;
  const feedbackId = React.useId();
  const feedbackTrigger = React.useRef(null);
  const feedbackPanel = React.useRef(null);
  const [feedbackOpen, setFeedbackOpen] = React.useState(false);
  const [initialChoice, setInitialChoice] = React.useState("first");
  const placement = useOverlayPosition(feedbackOpen, feedbackPanel, feedbackTrigger, undefined, "bottom", {
    matchAnchorWidth: false
  });
  React.useEffect(() => {
    if (!feedbackOpen) return;
    const outside = event => {
      if (!feedbackTrigger.current?.contains(event.target) && !feedbackPanel.current?.contains(event.target)) setFeedbackOpen(false);
    };
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, [feedbackOpen]);
  function closeFeedback(reason) {
    setFeedbackOpen(false);
    if (reason !== "outside") feedbackTrigger.current?.focus();
  }
  function openFeedback(at = "first") {
    if (locked.current) return;
    setInitialChoice(at);
    setFeedbackOpen(true);
  }
  function feedbackKeyDown(event) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (feedbackOpen) closeFeedback("escape");else openFeedback(event.key === "ArrowUp" ? "last" : "first");
    } else if (event.key === "Escape" && feedbackOpen) {
      event.preventDefault();
      closeFeedback("escape");
    }
  }
  function updateReading(value, updateState = true) {
    if (updateState) setReading(value);
    if (readingRef.current === value) return;
    readingRef.current = value;
    readingCallback.current?.(value);
  }
  function stopReading(updateState = true) {
    const owned = utterance.current;
    if (!owned) return;
    utterance.current = null;
    owned.onend = null;
    owned.onerror = null;
    // The platform exposes one shared queue. Only cancel while our own utterance is pending or active.
    window.speechSynthesis.cancel();
    updateReading(false, updateState);
  }
  React.useEffect(() => {
    setCanRead(typeof window.speechSynthesis?.speak === "function" && typeof window.SpeechSynthesisUtterance === "function");
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Removing a control closes its owned interaction, without restarting on unrelated renders.
  React.useEffect(() => {
    if (!hasRead) stopReading();
    if (!hasFeedback && feedbackOpen) {
      setFeedbackOpen(false);
      rootRef.current?.querySelector("button:not(:disabled)")?.focus();
    }
  }, [hasRead, hasFeedback]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Replacing message text invalidates its pending actions and narration.
  React.useEffect(() => {
    version.current++;
    locked.current = false;
    setBusy(false);
    setMessage("");
    setReading(false);
    if (feedbackOpen) feedbackTrigger.current?.focus();
    setFeedbackOpen(false);
    return () => {
      version.current++;
      stopReading(false);
    };
  }, [text]);
  async function perform(action, errorMessage) {
    if (locked.current) return;
    locked.current = true;
    const request = ++version.current;
    setBusy(true);
    setMessage("");
    setFeedbackOpen(false);
    try {
      const result = await action();
      if (request === version.current) setMessage(result);
    } catch {
      if (request === version.current) setMessage(errorMessage);
    } finally {
      if (request === version.current) {
        locked.current = false;
        setBusy(false);
      }
    }
  }
  async function copyText() {
    if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
    await navigator.clipboard.writeText(text);
  }
  function copy() {
    void perform(async () => {
      await copyText();
      return "Copied";
    }, "Could not copy. Try again.");
  }
  function rate(value) {
    const next = selected === value ? null : value;
    const request = version.current + 1;
    void perform(async () => {
      await onFeedback?.(next);
      if (request === version.current && feedback === undefined) setInnerFeedback(next);
      return next === "positive" ? "Marked as helpful" : next === "negative" ? "Marked as unhelpful" : "Feedback cleared";
    }, "Could not save feedback. Try again.");
  }
  function share() {
    void perform(async () => {
      if (onShare) {
        await onShare();
        return "Shared";
      }
      if (typeof navigator.share === "function") {
        try {
          await navigator.share({
            text
          });
          return "Shared";
        } catch (error) {
          if (typeof error === "object" && error !== null && "name" in error && error.name === "AbortError") return "";
          throw error;
        }
      }
      await copyText();
      return "Copied response to share";
    }, "Could not share. Try again.");
  }
  function narrate() {
    if (utterance.current) {
      stopReading();
      setMessage("Reading stopped");
      return;
    }
    if (!canRead || !text) return;
    const speech = window.speechSynthesis;
    if (speech.speaking || speech.pending) {
      setMessage("Another reading is in progress. Try again when it finishes.");
      return;
    }
    const next = new window.SpeechSynthesisUtterance(text);
    utterance.current = next;
    next.onend = () => {
      if (utterance.current !== next) return;
      utterance.current = null;
      updateReading(false);
      setMessage("Reading finished");
    };
    next.onerror = () => {
      if (utterance.current !== next) return;
      utterance.current = null;
      updateReading(false);
      setMessage("Could not read aloud. Try again.");
    };
    updateReading(true);
    setMessage("");
    try {
      speech.speak(next);
    } catch {
      utterance.current = null;
      updateReading(false);
      setMessage("Could not read aloud. Try again.");
    }
  }
  const root = rs(["rs-response-actions-bar", className], styles.root);
  const feedbackButton = rs([selected !== null && "rs-response-actions-selected"], selected !== null && styles.selected);
  const menu = rs(["rs-response-actions-menu"], styles.menu);
  const status = rs(["rs-response-actions-status"], styles.status);
  const readingLabel = reading ? "Stop reading" : "Read aloud";
  const controls = {
    copy: /*#__PURE__*/_jsx(Button, {
      variant: "subtle",
      size: "icon",
      "aria-label": "Copy response",
      title: "Copy response",
      disabled: busy || !text,
      onClick: copy,
      children: /*#__PURE__*/_jsx(ActionGlyph, {
        name: "copy"
      })
    }),
    read: /*#__PURE__*/_jsx(Button, {
      variant: "subtle",
      size: "icon",
      "aria-label": readingLabel,
      title: canRead ? readingLabel : "Read aloud is unavailable in this browser",
      disabled: !canRead || !text,
      onClick: narrate,
      children: /*#__PURE__*/_jsx(ActionGlyph, {
        name: reading ? "stop" : "read"
      })
    }),
    feedback: /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsx(Button, {
        ...feedbackButton,
        variant: "subtle",
        size: "icon",
        ref: feedbackTrigger,
        id: `${feedbackId}-trigger`,
        "aria-label": "Rate response",
        title: selected === null ? "Rate response" : selected === "positive" ? "Rate response: Helpful" : "Rate response: Unhelpful",
        "aria-haspopup": "menu",
        "aria-expanded": feedbackOpen,
        "aria-controls": feedbackOpen ? `${feedbackId}-menu` : undefined,
        "aria-disabled": busy || undefined,
        "data-feedback": selected ?? "none",
        onClick: () => feedbackOpen ? closeFeedback("select") : openFeedback(),
        onKeyDown: feedbackKeyDown,
        children: /*#__PURE__*/_jsx(ActionGlyph, {
          name: "feedback"
        })
      }), feedbackOpen && hasFeedback && /*#__PURE__*/_jsx(MenuPanel, {
        id: `${feedbackId}-menu`,
        panelRef: feedbackPanel,
        labelledBy: `${feedbackId}-trigger`,
        initial: initialChoice,
        className: menu.className,
        style: {
          ...menu.style,
          ...placement
        },
        onClose: closeFeedback,
        items: [{
          label: "Helpful response",
          checked: selected === "positive",
          disabled: busy,
          onSelect: () => rate("positive")
        }, {
          label: "Unhelpful response",
          checked: selected === "negative",
          disabled: busy,
          onSelect: () => rate("negative")
        }]
      })]
    }),
    share: /*#__PURE__*/_jsx(Button, {
      variant: "subtle",
      size: "icon",
      "aria-label": "Share response",
      title: "Share response",
      disabled: busy || !text,
      onClick: share,
      children: /*#__PURE__*/_jsx(ActionGlyph, {
        name: "share"
      })
    })
  };
  return /*#__PURE__*/_jsxs("div", {
    role: "group",
    "aria-label": label,
    ...props,
    ref: mergedRef,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [actionOrder.map(action => /*#__PURE__*/_jsx(React.Fragment, {
      children: controls[action]
    }, action)), children, /*#__PURE__*/_jsx("span", {
      ...status,
      role: "status",
      "aria-live": "polite",
      "aria-atomic": "true",
      children: message
    })]
  });
});
//# sourceMappingURL=response-actions.js.map
