"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useMergedRefs } from "../merge-refs.js";
import { Textarea } from "./textarea.js";
import { Button } from "./button.js";
import { Icon } from "./icon.js";
import { Attachment, Attachments, useFileAttachments } from "./attachments.js";
import { selectFiles } from "../file-selection.js";
import { captureScreenshot } from "../capture-screenshot.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
const MessageComposerContext = /*#__PURE__*/React.createContext(null);

/** Reads the nearest composer's draft and validated commands from a custom child or tool. */
export function useMessageComposer() {
  const context = React.useContext(MessageComposerContext);
  if (!context) throw new Error("useMessageComposer must be used inside MessageComposer.");
  return context;
}
const styles = {
  root: {
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kOIVth: "x8233eu",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  compact: {
    kOIVth: "x13z6uf9",
    $$css: true
  },
  row: {
    k1xSpc: "x78zum5",
    kGNEyG: "xuk3077",
    kOIVth: "xvh977a",
    kmVPX3: "x78pyy4",
    k7Eaqz: "xeuugli",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd",
    kaIpWk: "xkrxur",
    kWkggS: "xhpg8l3",
    $$css: true
  },
  area: {
    kB7OPa: "x9f619",
    kUk6DE: "x845mor",
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kAzted: "x1wszdd",
    kMv6JI: "xjb2p0i",
    kGuDYH: "x1jchvi3",
    kLWn49: "x1pujyh6",
    kMwMTN: "x1gney9c",
    kWkggS: "xjbqb8w",
    kMzoRj: "xc342km",
    kaIpWk: "xkrxur",
    k8WAf4: "xh3qy06",
    kg3NbH: "x97vtpp",
    kHenm0: "xtt52l0",
    kORKVm: "x10wlt62",
    kMeerF: "x1k57tk5 x784prv",
    k3XXqK: "x1t137rt x9v5kkp",
    kjBf7l: "xqbrbdq",
    kInvED: "x2ssjo2",
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x6s0dn4",
    kjj79g: "x1qughib",
    kOIVth: "x8233eu",
    $$css: true
  },
  action: {
    kzqmXN: "x14atkfc",
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kg3NbH: "x13s4r1c",
    $$css: true
  },
  iconAction: {
    kUk6DE: "x3psx0u",
    kCS8Yb: "ximofyd",
    kzqmXN: "x1uyfxw7 xla6mwc",
    ks0D6T: "x15xxtrl",
    kZKoxP: "x9ve8r1",
    kAzted: "x1wszdd",
    kg3NbH: "xnjsko4 x1faydb4",
    kSGwAc: "xpvyfi4",
    $$css: true
  },
  files: {
    k7Eaqz: "xeuugli",
    $$css: true
  },
  file: {
    k7Eaqz: "xeuugli",
    $$css: true
  },
  tools: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x6s0dn4",
    kOIVth: "x13z6uf9",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  drag: {
    kMeerF: "x1de99jn",
    k3XXqK: "x107h2d7",
    kjBf7l: "xqbrbdq",
    kInvED: "x2wh2y9",
    $$css: true
  },
  hint: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xboafo0",
    kLWn49: "xfrs9s4",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  input: {
    k1xSpc: "x1s85apg",
    $$css: true
  },
  srOnly: {
    kVAEAm: "x10l6tqk",
    kzqmXN: "x1i1rx1s",
    kZKoxP: "xjm9jq1",
    kmVPX3: "x1717udv",
    kogj98: "xkdpibf",
    kVQacm: "xb3r6kr",
    kz4h6p: "x1hyvwdk",
    khDVqt: "xuxw1ft",
    kMzoRj: "xc342km",
    $$css: true
  }
};

/** A message draft with attachments, IME-safe shortcuts, and retained text after send failures. */
export const MessageComposer = /*#__PURE__*/React.forwardRef(function MessageComposer({
  value,
  defaultValue = "",
  onValueChange,
  onSend,
  label = "Message",
  placeholder = "Write a message…",
  disabled = false,
  allowAttachments = false,
  accept,
  files: controlledFiles,
  defaultFiles = [],
  onFilesChange,
  multiple = true,
  maxFiles,
  maxFileSize,
  onAttachmentError,
  globalDrop = false,
  allowScreenshot = false,
  tools,
  renderAttachments,
  renderLayout,
  textareaProps = {},
  children,
  maxLength,
  sendOnEnter = false,
  generating = false,
  onStop,
  compact = false,
  maxRows = 6,
  className,
  style,
  ...props
}, ref) {
  const [inner, setInner] = React.useState(defaultValue);
  const current = value ?? inner;
  const [innerFiles, setInnerFiles] = React.useState(defaultFiles);
  const files = controlledFiles ?? innerFiles;
  const previews = useFileAttachments(files);
  const [rejections, setRejections] = React.useState([]);
  const [dragging, setDragging] = React.useState(false);
  const [capturing, setCapturing] = React.useState(false);
  const [captureAvailable, setCaptureAvailable] = React.useState(false);
  const capturedStream = React.useRef(null);
  const captureAbort = React.useRef(null);
  const mounted = React.useRef(true);
  const sendVersion = React.useRef(0);
  const [pending, setPending] = React.useState(false);
  const sending = React.useRef(false);
  const [status, setStatus] = React.useState("");
  const [failed, setFailed] = React.useState(false);
  const areaRef = React.useRef(null);
  const mergedRef = useMergedRefs(areaRef, ref, textareaProps.ref);
  const composing = React.useRef(false);
  const fileRef = React.useRef(null);
  const helpId = React.useId();
  const blocked = disabled || pending;
  const currentDraft = React.useRef({
    text: current,
    files
  });
  currentDraft.current = {
    text: current,
    files
  };
  const setFiles = next => {
    if (controlledFiles === undefined) {
      currentDraft.current.files = next;
      setInnerFiles(next);
    }
    onFilesChange?.(next);
  };
  React.useEffect(() => {
    mounted.current = true;
    setCaptureAvailable(typeof navigator.mediaDevices?.getDisplayMedia === "function");
    return () => {
      mounted.current = false;
      sendVersion.current++;
      captureAbort.current?.abort();
      for (const track of capturedStream.current?.getTracks() ?? []) track.stop();
    };
  }, []);
  const addFiles = incoming => {
    if (blocked || sending.current || !allowAttachments) return false;
    const {
      accepted,
      added,
      rejected
    } = selectFiles(Array.from(incoming), {
      files: currentDraft.current.files,
      accept,
      multiple,
      maxFiles,
      maxSize: maxFileSize
    });
    setRejections(rejected);
    if (rejected.length) onAttachmentError?.(rejected);
    if (added.length) setFiles(accepted);
    return added.length > 0;
  };
  const attachmentState = React.useRef({
    addFiles,
    blocked,
    allowAttachments
  });
  attachmentState.current = {
    addFiles,
    blocked,
    allowAttachments
  };
  React.useEffect(() => {
    if (!globalDrop || !allowAttachments) return;
    const over = event => {
      if (!attachmentState.current.blocked && event.dataTransfer?.types.includes("Files")) event.preventDefault();
    };
    const drop = event => {
      if (event.defaultPrevented || attachmentState.current.blocked || !event.dataTransfer?.files.length) return;
      event.preventDefault();
      attachmentState.current.addFiles(Array.from(event.dataTransfer.files));
    };
    document.addEventListener("dragover", over);
    document.addEventListener("drop", drop);
    return () => {
      document.removeEventListener("dragover", over);
      document.removeEventListener("drop", drop);
    };
  }, [globalDrop, allowAttachments]);
  const takeScreenshot = async () => {
    if (blocked || sending.current || capturing || captureAbort.current || !allowAttachments || !allowScreenshot || !captureAvailable) return;
    const controller = new AbortController();
    captureAbort.current = controller;
    setCapturing(true);
    setFailed(false);
    setStatus("Choose a screen or window to attach.");
    try {
      const file = await captureScreenshot(stream => {
        capturedStream.current = stream;
        if (!mounted.current) for (const track of stream.getTracks()) track.stop();
      }, controller.signal);
      if (mounted.current) setStatus(attachmentState.current.addFiles([file]) ? "Screenshot attached." : "");
    } catch {
      if (mounted.current) {
        setFailed(true);
        setStatus("Screen capture was cancelled or could not be attached.");
      }
    } finally {
      capturedStream.current = null;
      captureAbort.current = null;
      if (mounted.current) setCapturing(false);
    }
  };
  const rows = Number.isFinite(maxRows) ? Math.min(20, Math.max(1, Math.floor(maxRows))) : 6;
  const resize = React.useCallback(() => {
    const area = areaRef.current;
    if (!compact || !area) return;
    const computed = window.getComputedStyle(area);
    const number = property => Number.parseFloat(property) || 0;
    const lineHeight = number(computed.lineHeight) || number(computed.fontSize) * 1.375 || 22;
    const padding = number(computed.paddingTop) + number(computed.paddingBottom);
    const border = number(computed.borderTopWidth) + number(computed.borderBottomWidth);
    const minimum = number(computed.minHeight) || 44;
    const maximum = Math.max(minimum, rows * lineHeight + padding + border);
    // Release the previous height before measuring so shorter and cleared drafts shrink.
    area.style.height = "auto";
    const content = area.scrollHeight + border;
    area.style.height = `${Math.max(minimum, Math.min(content, maximum))}px`;
    area.style.maxHeight = `${maximum}px`;
    area.style.overflowY = content > maximum ? "auto" : "hidden";
  }, [compact, rows]);
  // biome-ignore lint/correctness/useExhaustiveDependencies: Draft changes alter the textarea's measured scroll height.
  React.useEffect(() => {
    resize();
  }, [resize, current]);
  React.useEffect(() => {
    const area = areaRef.current;
    if (!compact || !area || typeof ResizeObserver === "undefined") return;
    let width = area.clientWidth;
    const observer = new ResizeObserver(() => {
      const nextWidth = area.clientWidth;
      // Height changes are our own work; only remeasure when wrapping width changes.
      if (nextWidth === width) return;
      width = nextWidth;
      resize();
    });
    observer.observe(area);
    return () => observer.disconnect();
  }, [compact, resize]);
  const change = next => {
    if (value === undefined) {
      currentDraft.current.text = next;
      setInner(next);
    }
    onValueChange?.(next);
  };
  const submit = async () => {
    const draft = currentDraft.current;
    if (blocked || capturing || captureAbort.current || generating || sending.current || !draft.text.trim() && draft.files.length === 0) return false;
    if (areaRef.current && !areaRef.current.reportValidity()) return false;
    const snapshot = {
      text: draft.text,
      files: [...draft.files]
    };
    const request = ++sendVersion.current;
    sending.current = true;
    setPending(true);
    setFailed(false);
    setStatus("Sending…");
    try {
      await onSend({
        text: snapshot.text.trim(),
        files: snapshot.files
      });
      if (!mounted.current || request !== sendVersion.current) return false;
      if (currentDraft.current.text === snapshot.text) change("");
      setFiles(currentDraft.current.files.filter(file => !snapshot.files.includes(file)));
      setRejections([]);
      setStatus("Message sent.");
      return true;
    } catch {
      if (mounted.current && request === sendVersion.current) {
        setFailed(true);
        setStatus("The message could not be sent. Your draft is still here.");
      }
      return false;
    } finally {
      if (mounted.current && request === sendVersion.current) {
        sending.current = false;
        setPending(false);
        areaRef.current?.focus();
      }
    }
  };
  const root = rs(["rs-message-composer", compact && "rs-message-composer-compact", dragging && "rs-message-composer-drag", className], styles.root, compact && styles.compact, dragging && styles.drag);
  const row = rs(["rs-message-composer-row"], styles.row);
  const area = rs(["rs-message-composer-area"], styles.area);
  const actions = rs(["rs-message-composer-actions"], styles.actions);
  const action = rs(["rs-message-composer-action", compact && "rs-message-composer-icon-action"], styles.action, compact && styles.iconAction);
  const fileList = rs(["rs-message-composer-files"], styles.files);
  const toolRow = rs(["rs-message-composer-tools"], styles.tools);
  const file = rs(["rs-message-composer-file"], styles.file);
  const hint = rs(["rs-message-composer-hint", compact && "rs-message-composer-sr-only"], styles.hint, compact && styles.srOnly);
  const feedback = rs(["rs-message-composer-hint", compact && !failed && "rs-message-composer-sr-only"], styles.hint, compact && !failed && styles.srOnly);
  const input = rs(["rs-message-composer-input"], styles.input);
  const rejection = rs(["rs-message-composer-hint"], styles.hint);
  const draftProps = {
    ...textareaProps,
    ref: mergedRef,
    value: current,
    onChange: event => {
      textareaProps.onChange?.(event);
      if (!event.defaultPrevented) change(event.target.value);
    },
    placeholder,
    disabled: blocked,
    maxLength,
    "aria-describedby": [textareaProps["aria-describedby"], helpId].filter(Boolean).join(" "),
    onCompositionStart: event => {
      composing.current = true;
      textareaProps.onCompositionStart?.(event);
    },
    onCompositionEnd: event => {
      composing.current = false;
      textareaProps.onCompositionEnd?.(event);
    },
    onKeyDown: event => {
      textareaProps.onKeyDown?.(event);
      if (event.defaultPrevented || composing.current || event.nativeEvent.isComposing || event.keyCode === 229 || event.key !== "Enter") return;
      if (sendOnEnter && !event.shiftKey || event.metaKey || event.ctrlKey) {
        event.preventDefault();
        void submit();
      }
    }
  };
  const openFileDialog = () => {
    if (!blocked && !sending.current && allowAttachments) fileRef.current?.click();
  };
  const attachAction = allowAttachments && /*#__PURE__*/_jsxs(Button, {
    ...action,
    variant: "subtle",
    "aria-label": compact ? "Attach files" : undefined,
    title: compact ? "Attach files" : undefined,
    disabled: blocked,
    onClick: openFileDialog,
    children: [/*#__PURE__*/_jsx(Icon, {
      name: "attachment"
    }), !compact && "Attach"]
  });
  const removeAttachment = id => {
    const index = previews.findIndex(item => item.id === id);
    if (index >= 0 && !blocked && !sending.current) setFiles(currentDraft.current.files.filter(entry => entry !== files[index]));
  };
  const captureAction = allowAttachments && allowScreenshot && /*#__PURE__*/_jsxs(Button, {
    ...action,
    variant: "subtle",
    "aria-label": "Attach screenshot",
    title: captureAvailable ? "Attach screenshot" : "Screen capture is unavailable in this browser",
    disabled: blocked || capturing || !captureAvailable,
    onClick: () => void takeScreenshot(),
    children: [/*#__PURE__*/_jsx(Icon, {
      name: "camera"
    }), !compact && (capturing ? "Capturing…" : "Screenshot")]
  });
  const sendLabel = pending ? "Sending…" : "Send";
  const sendAction = generating ? /*#__PURE__*/_jsxs(Button, {
    ...action,
    type: "button",
    "aria-label": compact ? "Stop response" : undefined,
    title: compact ? "Stop response" : undefined,
    disabled: disabled || !onStop,
    onClick: onStop,
    children: [/*#__PURE__*/_jsx(Icon, {
      name: "stop"
    }), !compact && "Stop response"]
  }) : /*#__PURE__*/_jsxs(Button, {
    ...action,
    type: "submit",
    "aria-label": compact ? sendLabel : undefined,
    title: compact ? sendLabel : undefined,
    disabled: blocked || capturing || !current.trim() && files.length === 0,
    children: [/*#__PURE__*/_jsx(Icon, {
      name: "send"
    }), !compact && sendLabel]
  });
  const draftInput = compact ? /*#__PURE__*/_jsx("textarea", {
    ...draftProps,
    className: [area.className, textareaProps.className].filter(Boolean).join(" "),
    style: {
      ...area.style,
      ...textareaProps.style
    },
    rows: 1,
    "aria-label": textareaProps["aria-label"] ?? label
  }) : /*#__PURE__*/_jsx(Textarea, {
    ...draftProps,
    label: label
  });
  const attachmentList = files.length > 0 && /*#__PURE__*/_jsx("div", {
    ...fileList,
    children: renderAttachments ? renderAttachments(previews, {
      remove: removeAttachment,
      openFileDialog,
      disabled: blocked
    }) : /*#__PURE__*/_jsx(Attachments, {
      children: previews.map(data => /*#__PURE__*/_createElement(Attachment, {
        ...file,
        key: data.id,
        data: data,
        disabled: blocked,
        onRemove: () => removeAttachment(data.id)
      }))
    })
  });
  const state = {
    value: current,
    files,
    attachments: previews,
    setValue: next => {
      if (!blocked && !sending.current) change(next);
    },
    addFiles,
    removeAttachment,
    clearAttachments: () => {
      if (!blocked && !sending.current) {
        setFiles([]);
        setRejections([]);
      }
    },
    openFileDialog,
    captureScreenshot: takeScreenshot,
    focus: () => areaRef.current?.focus(),
    submit,
    stop: () => {
      if (!disabled && generating) onStop?.();
    },
    disabled: blocked,
    pending,
    generating,
    capturing,
    canSubmit: !blocked && !capturing && !generating && (current.trim().length > 0 || files.length > 0),
    canAttach: allowAttachments && !blocked,
    canCapture: allowAttachments && allowScreenshot && captureAvailable && !blocked && !capturing,
    status,
    failed
  };
  const parts = {
    input: draftInput,
    submit: sendAction,
    attach: attachAction,
    screenshot: captureAction,
    attachments: attachmentList,
    tools
  };
  return /*#__PURE__*/_jsx(MessageComposerContext.Provider, {
    value: state,
    children: /*#__PURE__*/_jsxs("form", {
      "aria-label": label,
      "aria-busy": pending || generating,
      ...props,
      className: root.className,
      style: {
        ...root.style,
        ...style
      },
      onSubmit: event => {
        event.preventDefault();
        void submit();
      },
      onDragOver: event => {
        props.onDragOver?.(event);
        if (!event.defaultPrevented && allowAttachments && !blocked && event.dataTransfer.types.includes("Files")) {
          event.preventDefault();
          setDragging(true);
        }
      },
      onDragLeave: event => {
        props.onDragLeave?.(event);
        if (!event.currentTarget.contains(event.relatedTarget)) setDragging(false);
      },
      onDrop: event => {
        props.onDrop?.(event);
        setDragging(false);
        if (!event.defaultPrevented && allowAttachments && !blocked && event.dataTransfer.files.length) {
          event.preventDefault();
          addFiles(Array.from(event.dataTransfer.files));
        }
      },
      onPaste: event => {
        props.onPaste?.(event);
        if (!event.defaultPrevented && allowAttachments && !blocked && event.clipboardData.files.length) {
          if (!event.clipboardData.getData("text/plain")) event.preventDefault();
          addFiles(Array.from(event.clipboardData.files));
        }
      },
      children: [allowAttachments && /*#__PURE__*/_jsx("input", {
        ...input,
        ref: fileRef,
        type: "file",
        multiple: multiple,
        accept: accept,
        tabIndex: -1,
        "aria-label": "Attach files",
        disabled: blocked,
        onChange: event => {
          addFiles(Array.from(event.target.files ?? []));
          event.target.value = "";
        }
      }), renderLayout ? renderLayout(parts, state) : /*#__PURE__*/_jsxs(_Fragment, {
        children: [compact ? /*#__PURE__*/_jsxs("div", {
          ...row,
          children: [draftInput, attachAction, sendAction]
        }) : draftInput, attachmentList, !compact && /*#__PURE__*/_jsxs("div", {
          ...actions,
          children: [/*#__PURE__*/_jsxs("div", {
            ...toolRow,
            children: [attachAction, captureAction]
          }), sendAction]
        }), (tools || compact && captureAction) && /*#__PURE__*/_jsxs("div", {
          ...toolRow,
          children: [compact && captureAction, tools]
        })]
      }), children, rejections.length > 0 && /*#__PURE__*/_jsx("div", {
        role: "alert",
        children: rejections.map(({
          file,
          reason
        }, index) => /*#__PURE__*/_createElement("p", {
          ...rejection,
          key: `${file.name}-${index}`
        }, file.name, ": ", reason))
      }), /*#__PURE__*/_jsx("p", {
        ...hint,
        id: helpId,
        children: sendOnEnter ? "Enter to send. Shift+Enter for a new line." : "Cmd or Ctrl+Enter to send."
      }), /*#__PURE__*/_jsx("p", {
        ...feedback,
        role: "status",
        children: status
      })]
    })
  });
});
//# sourceMappingURL=message-composer.js.map
