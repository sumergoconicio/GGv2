"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Icon } from "./icon.js";
import { jsx as _jsx } from "react/jsx-runtime";
const styles = {
  toggle: {
    kmkexE: "x1487y47 xrozb4q",
    kVAEAm: "xixxii4",
    k87sOh: "xati1ur",
    kt4wiu: "xorcwq8 x1m10s6w",
    kY2c9j: "xbshbgh",
    kzqmXN: "x1uyfxw7",
    kZKoxP: "x9ve8r1",
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kmVPX3: "x1835gkm",
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kVQacm: "xb3r6kr",
    kWkggS: "xjbqb8w",
    kMzoRj: "xc342km",
    ksu8eU: "xng3xce",
    kaIpWk: "xkrxur",
    kkrTdU: "x1ypdohk",
    kMwMTN: "x1ixqp2s xcfh57o",
    kMeerF: "x1k57tk5 x784prv",
    k3XXqK: "x1t137rt x9v5kkp",
    kjBf7l: "x1uczgqu x14tvtkk",
    kInvED: "x1wfwxd8 x7s97pk",
    ku685b: "xp0qt9u",
    $$css: true
  },
  inline: {
    kVAEAm: "x1n2onr6",
    k87sOh: "x80663w",
    kt4wiu: "x1woyocn",
    kY2c9j: "x1vjfegm",
    ku685b: "xkcp37y",
    $$css: true
  },
  mark: {
    kzqmXN: "xp8d6y2",
    kZKoxP: "xam5rvr",
    k1xSpc: "x1lliihq",
    kmuXW: "x2lah0s",
    $$css: true
  }
};

/**
 * One filled family mark on a 24px square, about 18–20px of drawn ink.
 * Moon on paper, sun on black. The button sets
 * data-theme="dark" on <html> and persists the choice.
 * Apps pin it top-right; catalog and previews use the inline modifier.
 * The name states the action ("Switch to dark scheme"), so it changes with the state.
 */
export const ThemeToggle = /*#__PURE__*/React.forwardRef(function ThemeToggle({
  storageKey = "vlak-theme",
  onThemeChange,
  className,
  style,
  onClick,
  ...props
}, ref) {
  const [dark, setDark] = React.useState(null);
  React.useEffect(() => {
    const media = window.matchMedia?.("(prefers-color-scheme: dark)");
    const read = () => {
      const explicit = document.documentElement.dataset.theme;
      setDark(explicit === "dark" || explicit !== "light" && !!media?.matches);
    };
    read();
    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"]
    });
    media?.addEventListener("change", read);
    return () => {
      observer.disconnect();
      media?.removeEventListener("change", read);
    };
  }, []);
  const toggle = e => {
    const explicit = document.documentElement.dataset.theme;
    const effectiveDark = explicit === "dark" || explicit !== "light" && !!window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const next = !effectiveDark;
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try {
      localStorage.setItem(storageKey, next ? "dark" : "light");
    } catch {
      /* private mode */
    }
    setDark(next);
    onThemeChange?.(next);
    onClick?.(e);
  };
  const inline = typeof className === "string" && className.split(/\s+/).includes("rs-theme-toggle-inline");
  const sx = rs(["rs-theme-toggle", className], styles.toggle, inline && styles.inline);
  const mark = rs([dark ? "rs-theme-sun" : "rs-theme-moon"], styles.mark);
  return /*#__PURE__*/_jsx("button", {
    ref: ref,
    type: "button",
    "aria-label": dark ? "Switch to light scheme" : "Switch to dark scheme",
    onClick: toggle,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    },
    children: /*#__PURE__*/_jsx(Icon, {
      name: dark ? "sun" : "moon",
      variant: "filled",
      size: 24,
      className: mark.className,
      style: mark.style
    })
  });
});
//# sourceMappingURL=theme-toggle.js.map
