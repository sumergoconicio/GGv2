"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { Collapsible } from "./collapsible.js";
import { SnippetCopy } from "./snippet.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/** Parses V8/Node and Firefox/Safari locations; unknown frame text remains readable. */
export function parseStackTrace(trace, maxFrames = 200) {
  const limit = Number.isFinite(maxFrames) ? Math.min(2000, Math.max(1, Math.floor(maxFrames))) : 200;
  const frames = [];
  const messages = [];
  let omittedFrames = 0;
  for (const source of trace.split("\n")) {
    const raw = source.trim();
    if (!raw) continue;
    const v8 = raw.match(/^at\s+(?:(.*?)\s+\((.*)\)|(.*))$/);
    const firefox = !v8 ? raw.match(/^(.*?)@(.+)$/) : null;
    if (!v8 && !firefox && frames.length === 0) {
      messages.push(raw);
      continue;
    }
    if (frames.length >= limit) {
      omittedFrames++;
      continue;
    }
    const location = v8 ? v8[2] ?? v8[3] : firefox?.[2];
    const full = location?.match(/^(.*):(\d+):(\d+)$/);
    const short = !full ? location?.match(/^(.*):(\d+)$/) : null;
    const match = full ?? short;
    const filePath = match?.[1];
    frames.push({
      raw,
      functionName: v8?.[1] || firefox?.[1] || undefined,
      filePath,
      lineNumber: match ? Number(match[2]) : undefined,
      columnNumber: full ? Number(full[3]) : undefined,
      isInternal: /(?:^node:|[/\\]node_modules[/\\]|(?:^|[/\\])internal[/\\])/.test(filePath ?? raw)
    });
  }
  const message = messages.join("\n");
  const error = message.match(/^([\w.]*Error|Error|[\w.]*Exception):\s*([\s\S]*)$/);
  return {
    errorType: error?.[1],
    errorMessage: error?.[2] ?? message,
    frames,
    omittedFrames,
    raw: trace
  };
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
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  header: {
    k1xSpc: "x78zum5",
    kOIVth: "x8233eu",
    kGNEyG: "x1cy8zhl",
    kmVPX3: "x19btat0",
    $$css: true
  },
  heading: {
    k7Eaqz: "xeuugli",
    kUk6DE: "x12lumcd",
    k1xSpc: "xrvj5dj",
    kOIVth: "xvh977a",
    $$css: true
  },
  title: {
    k63SB2: "x1s688f",
    $$css: true
  },
  message: {
    kogj98: "x1ghz6dp",
    khDVqt: "x126k92a",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  content: {
    kmVPX3: "x19s2kg",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  list: {
    kB88ic: "xe8uvvx",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    $$css: true
  },
  frame: {
    k1xSpc: "xrvj5dj",
    kOIVth: "xvh977a",
    k7Eaqz: "xeuugli",
    k8WAf4: "x1o5vn8x",
    kMwMTN: "x1gney9c",
    kMv6JI: "x1mb2qyg",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  internal: {
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  location: {
    k7Eaqz: "xeuugli",
    kzqmXN: "xeq5yr9",
    ks0D6T: "x193iq5w",
    k9WMMc: "x1yc453h",
    kjj79g: "x1nhvcw1",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  note: {
    kogj98: "x1ghz6dp",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "xboafo0",
    $$css: true
  }
};
export const StackTrace = /*#__PURE__*/React.forwardRef(function StackTrace({
  trace,
  open,
  defaultOpen = false,
  onOpenChange,
  onFilePathClick,
  onCopy,
  maxFrames,
  children,
  className,
  style,
  ...props
}, ref) {
  const parsed = React.useMemo(() => parseStackTrace(trace, maxFrames), [trace, maxFrames]);
  const root = rs(["rs-stack-trace", className], styles.root);
  const header = rs(["rs-stack-trace-header"], styles.header);
  const heading = rs(["rs-stack-trace-heading"], styles.heading);
  const title = rs(["rs-stack-trace-title"], styles.title);
  const message = rs(["rs-stack-trace-message"], styles.message);
  const content = rs(["rs-stack-trace-content"], styles.content);
  const list = rs(["rs-stack-trace-list"], styles.list);
  const locationStyle = rs(["rs-stack-trace-location"], styles.location);
  const note = rs(["rs-stack-trace-note"], styles.note);
  return /*#__PURE__*/_jsxs("article", {
    "aria-label": parsed.errorType ?? "Stack trace",
    ...props,
    ref: ref,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsxs("header", {
      ...header,
      children: [/*#__PURE__*/_jsxs("div", {
        ...heading,
        children: [/*#__PURE__*/_jsx("span", {
          ...title,
          children: parsed.errorType ?? "Stack trace"
        }), parsed.errorMessage && /*#__PURE__*/_jsx("p", {
          ...message,
          children: parsed.errorMessage
        })]
      }), /*#__PURE__*/_jsx(SnippetCopy, {
        value: trace,
        label: "Copy stack trace",
        onCopy: onCopy
      })]
    }), /*#__PURE__*/_jsxs("div", {
      ...content,
      children: [/*#__PURE__*/_jsxs(Collapsible, {
        title: `${parsed.frames.length} stack ${parsed.frames.length === 1 ? "frame" : "frames"}`,
        open: open,
        defaultOpen: defaultOpen,
        onToggle: event => {
          const next = event.currentTarget.open;
          if (open !== undefined && next !== open) event.currentTarget.open = open;
          if (next !== open) onOpenChange?.(next);
        },
        children: [/*#__PURE__*/_jsx("ol", {
          ...list,
          children: parsed.frames.map((frame, index) => {
            const frameStyle = rs(["rs-stack-trace-frame", frame.isInternal && "rs-stack-trace-internal"], styles.frame, frame.isInternal && styles.internal);
            const location = frame.filePath ? `${frame.filePath}:${frame.lineNumber}${frame.columnNumber != null ? `:${frame.columnNumber}` : ""}` : frame.raw;
            return /*#__PURE__*/_jsxs("li", {
              ...frameStyle,
              children: [frame.functionName && /*#__PURE__*/_jsx("span", {
                children: frame.functionName
              }), frame.filePath && onFilePathClick ? /*#__PURE__*/_jsx(Button, {
                ...locationStyle,
                type: "button",
                variant: "subtle",
                onClick: () => onFilePathClick(frame.filePath, frame.lineNumber, frame.columnNumber),
                children: location
              }) : /*#__PURE__*/_jsx("span", {
                children: location
              }), frame.isInternal && /*#__PURE__*/_jsx("span", {
                ...note,
                children: "Internal frame"
              })]
            }, `${index}:${frame.raw}`);
          })
        }), parsed.omittedFrames > 0 && /*#__PURE__*/_jsxs("p", {
          ...note,
          children: [parsed.omittedFrames, " additional frames omitted. Copy includes the full trace."]
        }), parsed.frames.length === 0 && /*#__PURE__*/_jsx("p", {
          ...note,
          children: "No stack frames supplied."
        })]
      }), children]
    })]
  });
});
//# sourceMappingURL=stack-trace.js.map
