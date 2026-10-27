"use client";

import * as React from "react";
import { Button } from "./button.js";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
function json(value) {
  try {
    return JSON.stringify(value, null, 2) ?? "";
  } catch {
    return "[Unable to serialize this result]";
  }
}
function fenced(value) {
  const longest = Math.max(2, ...[...value.matchAll(/`+/g)].map(match => match[0].length));
  const fence = "`".repeat(longest + 1);
  return `${fence}json\n${value}\n${fence}`;
}
/** Serializes explicit text, file and tool parts; unsupported application objects are never stringified as messages. */
export function serializeConversation(messages, {
  title,
  serializePart
} = {}) {
  const blocks = messages.map(message => {
    const parts = message.parts?.map(part => {
      const custom = serializePart?.(part, message);
      if (custom !== undefined) return custom;
      if (part.type === "text") return part.text;
      if (part.type === "file") return `Attachment: ${part.filename}${part.url ? `\n${part.url}` : ""}`;
      if (part.type === "tool") return [`Tool: ${part.name}`, part.input !== undefined ? `Input:\n${fenced(json(part.input))}` : "", part.output !== undefined ? `Output:\n${fenced(json(part.output))}` : ""].filter(Boolean).join("\n\n");
      return "";
    }).filter(Boolean).join("\n\n");
    return `## ${message.role.replace(/[\r\n]+/g, " ")}\n\n${parts ?? message.content ?? ""}`;
  });
  return [title ? `# ${title.replace(/[\r\n]+/g, " ")}` : "", ...blocks].filter(Boolean).join("\n\n") + "\n";
}
/** Downloads a Markdown snapshot using supplied message data, without reading rendered DOM. */
export const ConversationDownload = /*#__PURE__*/React.forwardRef(function ConversationDownload({
  messages,
  filename = "conversation.md",
  title,
  serializePart,
  onError,
  children = "Download conversation",
  ...props
}, ref) {
  const [failed, setFailed] = React.useState(false);
  const urls = React.useRef(new Map());
  React.useEffect(() => () => {
    for (const [url, timer] of urls.current) {
      clearTimeout(timer);
      URL.revokeObjectURL(url);
    }
    urls.current.clear();
  }, []);
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Button, {
      ref: ref,
      variant: "subtle",
      ...props,
      onClick: () => {
        setFailed(false);
        try {
          const blob = new Blob([serializeConversation(messages, {
            title,
            serializePart
          })], {
            type: "text/markdown;charset=utf-8"
          });
          const url = URL.createObjectURL(blob);
          const anchor = document.createElement("a");
          anchor.href = url;
          anchor.download = filename;
          document.body.append(anchor);
          anchor.click();
          anchor.remove();
          urls.current.set(url, setTimeout(() => {
            URL.revokeObjectURL(url);
            urls.current.delete(url);
          }, 1000));
        } catch (error) {
          setFailed(true);
          onError?.(error);
        }
      },
      children: children
    }), failed && /*#__PURE__*/_jsx("span", {
      role: "alert",
      children: "The conversation could not be downloaded. Try again."
    })]
  });
});
//# sourceMappingURL=conversation-export.js.map
