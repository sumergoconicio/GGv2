"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { SnippetCopy } from "./snippet.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/** POSIX shell-safe assignments. Invalid names are rejected rather than emitted as executable shell text. */
export function formatEnvironmentExports(variables) {
  return variables.map(({
    name,
    value
  }) => {
    if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(name)) throw new Error("Invalid environment variable name");
    return `export ${name}='${value.replaceAll("'", "'\\''")}'`;
  }).join("\n");
}
const styles = {
  root: {
    k7Eaqz: "xeuugli",
    kzqmXN: "xh8yej3",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j xz1l38o",
    kaIpWk: "xkrxur",
    kMwMTN: "x1gney9c",
    kWkggS: "xhpg8l3",
    $$css: true
  },
  header: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x6s0dn4",
    kOIVth: "x13z6uf9",
    kmVPX3: "xrqs5gp",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  title: {
    kUk6DE: "x12lumcd",
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    k63SB2: "x1s688f",
    $$css: true
  },
  list: {
    kogj98: "x1ghz6dp",
    kmVPX3: "xq3cggq",
    $$css: true
  },
  row: {
    k1xSpc: "xrvj5dj",
    kumcoG: "x1dw7rwd x7qz0k8",
    kGNEyG: "x6s0dn4",
    kOIVth: "x13z6uf9",
    k8WAf4: "x18g2hj5",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  name: {
    kogj98: "x1ghz6dp",
    k7Eaqz: "xeuugli",
    kHjlTd: "xj0a0fe",
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  value: {
    kogj98: "x1ghz6dp",
    k7Eaqz: "xeuugli",
    kHjlTd: "xj0a0fe",
    kMv6JI: "x1mb2qyg",
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    kBCFzs: "xm5moh1 xbdgs89",
    $$css: true
  },
  controls: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kjj79g: "x13a6bvl",
    kOIVth: "xvh977a",
    kogj98: "x1ghz6dp",
    kBCFzs: "xm5moh1 x14u2p5z",
    kbNqZ1: "x15daork xy3nu09",
    $$css: true
  },
  note: {
    k1xSpc: "x1lliihq",
    kogj98: "x1ghz6dp",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "xboafo0",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  footer: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x6s0dn4",
    kOIVth: "x13z6uf9",
    kmVPX3: "xrqs5gp",
    $$css: true
  }
};

/** Masked values with deliberate reveal and exact-value/export copy actions. */
export const EnvironmentVariables = /*#__PURE__*/React.forwardRef(function EnvironmentVariables({
  variables,
  title = "Environment variables",
  showValues,
  defaultShowValues = false,
  onShowValuesChange,
  onCopy,
  className,
  style,
  "aria-label": label,
  "aria-labelledby": labelledBy,
  ...props
}, ref) {
  const titleId = React.useId();
  const [innerShow, setInnerShow] = React.useState(defaultShowValues);
  const [revealed, setRevealed] = React.useState({});
  const visible = showValues ?? innerShow;
  const setVisible = show => {
    if (showValues === undefined) setInnerShow(show);
    setRevealed({});
    onShowValuesChange?.(show);
  };
  let exports = "";
  let validNames = true;
  try {
    exports = formatEnvironmentExports(variables);
  } catch {
    validNames = false;
  }
  const root = rs(["rs-environment-variables", className], styles.root);
  const header = rs(["rs-environment-variables-header"], styles.header);
  const titleStyle = rs(["rs-environment-variables-title"], styles.title);
  const list = rs(["rs-environment-variables-list"], styles.list);
  const row = rs(["rs-environment-variables-row"], styles.row);
  const name = rs(["rs-environment-variables-name"], styles.name);
  const valueStyle = rs(["rs-environment-variables-value"], styles.value);
  const controls = rs(["rs-environment-variables-controls"], styles.controls);
  const note = rs(["rs-environment-variables-note"], styles.note);
  const footer = rs(["rs-environment-variables-footer"], styles.footer);
  return /*#__PURE__*/_jsxs("section", {
    ...props,
    ref: ref,
    "aria-label": label,
    "aria-labelledby": labelledBy ?? (label == null ? titleId : undefined),
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsxs("header", {
      ...header,
      children: [/*#__PURE__*/_jsx("span", {
        ...titleStyle,
        id: titleId,
        children: title
      }), /*#__PURE__*/_jsx(Button, {
        type: "button",
        variant: "subtle",
        "aria-pressed": visible,
        onClick: () => setVisible(!visible),
        children: visible ? "Hide all values" : "Show all values"
      })]
    }), /*#__PURE__*/_jsx("dl", {
      ...list,
      children: variables.map(variable => {
        const shown = visible || revealed[variable.name] === variable.value;
        return /*#__PURE__*/_jsxs("div", {
          ...row,
          children: [/*#__PURE__*/_jsxs("dt", {
            ...name,
            children: [/*#__PURE__*/_jsx("code", {
              children: variable.name
            }), variable.required && /*#__PURE__*/_jsx("span", {
              ...note,
              children: "Required"
            }), variable.description && /*#__PURE__*/_jsx("span", {
              ...note,
              children: variable.description
            })]
          }), /*#__PURE__*/_jsx("dd", {
            ...valueStyle,
            children: shown ? variable.value || "(empty)" : /*#__PURE__*/_jsx("span", {
              role: "img",
              "aria-label": "Value hidden",
              children: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
            })
          }), /*#__PURE__*/_jsxs("dd", {
            ...controls,
            children: [!visible && /*#__PURE__*/_jsx(Button, {
              type: "button",
              variant: "subtle",
              "aria-label": `${shown ? "Hide" : "Show"} ${variable.name}`,
              "aria-pressed": shown,
              onClick: () => setRevealed(current => {
                const next = {
                  ...current
                };
                if (shown) delete next[variable.name];else next[variable.name] = variable.value;
                return next;
              }),
              children: shown ? "Hide" : "Show"
            }), /*#__PURE__*/_jsx(SnippetCopy, {
              value: variable.value,
              label: `Copy ${variable.name}`,
              onCopy: onCopy
            })]
          })]
        }, variable.name);
      })
    }), /*#__PURE__*/_jsx("footer", {
      ...footer,
      children: variables.length === 0 ? /*#__PURE__*/_jsx("span", {
        ...note,
        children: "No environment variables."
      }) : validNames ? /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx("span", {
          ...note,
          children: "Shell exports"
        }), /*#__PURE__*/_jsx(SnippetCopy, {
          value: exports,
          label: "Copy environment exports",
          onCopy: onCopy
        })]
      }) : /*#__PURE__*/_jsx("span", {
        ...note,
        children: "Export unavailable: variable names must contain letters, digits or underscores and cannot start with a digit."
      })
    })]
  });
});
//# sourceMappingURL=environment-variables.js.map
