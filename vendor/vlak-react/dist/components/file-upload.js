"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useMergedRefs } from "../merge-refs.js";
import { useInputValue } from "../use-input-value.js";
import { Button } from "./button.js";
import { Progress } from "./progress.js";
import { fileSelectionKey as fileKey, selectFiles } from "../file-selection.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  drop: {
    kVAEAm: "x1n2onr6",
    k1xSpc: "xrvj5dj",
    kfiyM8: "xc26acl",
    kAPf3g: "x1o2pa38",
    kOIVth: "x13z6uf9",
    kAzted: "x1iisefq",
    kmVPX3: "xomzojh",
    kB7OPa: "x9f619",
    kMzoRj: "x1kz39yt",
    ksu8eU: "xbsl7fq",
    kVAM5u: "x1cn24jd",
    kaIpWk: "xkrxur",
    kMwMTN: "x1gney9c",
    kWkggS: "xhpg8l3",
    kMeerF: "x16gxa91",
    k3XXqK: "x14xc8xn",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  drag: {
    kWkggS: "x6583kg",
    kI3sdo: "x1vbb3y2",
    $$css: true
  },
  input: {
    kVAEAm: "x10l6tqk",
    kpwlN0: "x10a8y8t",
    kzqmXN: "xh8yej3",
    kZKoxP: "x5yr21d",
    kSiTet: "xg01cxk",
    kkrTdU: "x1ypdohk",
    $$css: true
  },
  title: {
    kGuDYH: "x1jq7itm",
    k63SB2: "xk50ysn",
    k9WMMc: "x2b8uid",
    $$css: true
  },
  description: {
    kGuDYH: "x4ro2ui",
    kMwMTN: "x1ixqp2s",
    k9WMMc: "x2b8uid",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  list: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    kB88ic: "xe8uvvx",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    $$css: true
  },
  item: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    kmVPX3: "x79iv2k",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kaIpWk: "xkrxur",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  row: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kjj79g: "x1qughib",
    kGNEyG: "x6s0dn4",
    kOIVth: "x13z6uf9",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  name: {
    kUk6DE: "x3daqg1",
    kHjlTd: "xj0a0fe",
    kGuDYH: "x1jq7itm",
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    $$css: true
  },
  action: {
    kzqmXN: "x14atkfc",
    $$css: true
  },
  status: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x4ro2ui",
    kMwMTN: "x1ixqp2s",
    $$css: true
  }
};

/** Validated file selection, with an optional cancellable upload transport. */
export const FileUpload = /*#__PURE__*/React.forwardRef(function FileUpload({
  value,
  defaultValue = [],
  onValueChange,
  accept,
  multiple = true,
  maxFiles,
  maxSize,
  disabled,
  name,
  label = "Choose files",
  description = "Drop files here or browse",
  onReject,
  onUpload,
  className,
  style,
  ...props
}, ref) {
  const [files, setFiles, inputRef] = useInputValue(value, defaultValue, onValueChange, () => {
    for (const controller of controllers.current.values()) controller.abort();
    controllers.current.clear();
    setUploads(new Map());
    setRejections([]);
  });
  const mergedRef = useMergedRefs(ref, inputRef);
  const [dragging, setDragging] = React.useState(false);
  const [rejections, setRejections] = React.useState([]);
  const [uploads, setUploads] = React.useState(new Map());
  const controllers = React.useRef(new Map());
  const latest = React.useRef({
    files,
    name,
    disabled
  });
  latest.current = {
    files,
    name,
    disabled
  };
  const id = React.useId();
  React.useEffect(() => {
    const form = inputRef.current?.form;
    if (!form) return;
    const appendFiles = event => {
      const data = event.formData;
      const state = latest.current;
      if (data && state.name && !state.disabled) for (const file of state.files) data.append(state.name, file, file.name);
    };
    form.addEventListener("formdata", appendFiles);
    return () => form.removeEventListener("formdata", appendFiles);
  }, [inputRef]);
  React.useEffect(() => () => {
    for (const controller of controllers.current.values()) controller.abort();
  }, []);
  React.useEffect(() => {
    for (const [file, controller] of controllers.current) if (!files.includes(file)) {
      controller.abort();
      controllers.current.delete(file);
    }
    setUploads(previous => {
      const remaining = [...previous].filter(([file]) => files.includes(file));
      return remaining.length === previous.size ? previous : new Map(remaining);
    });
  }, [files]);
  const update = (file, state) => setUploads(previous => new Map(previous).set(file, state));
  const upload = async file => {
    if (!onUpload || disabled) return;
    controllers.current.get(file)?.abort();
    const controller = new AbortController();
    controllers.current.set(file, controller);
    update(file, {
      status: "uploading"
    });
    try {
      await onUpload(file, {
        signal: controller.signal,
        onProgress: percentage => {
          if (!controller.signal.aborted) update(file, {
            status: "uploading",
            progress: Math.min(100, Math.max(0, percentage))
          });
        }
      });
      if (!controller.signal.aborted) update(file, {
        status: "complete",
        progress: 100
      });
    } catch (error) {
      if (!controller.signal.aborted) update(file, {
        status: "error",
        error: error instanceof Error ? error.message : "Upload failed"
      });
    } finally {
      if (controllers.current.get(file) === controller) controllers.current.delete(file);
    }
  };
  const choose = incoming => {
    if (disabled) return;
    const {
      accepted,
      added,
      rejected
    } = selectFiles(incoming, {
      files,
      accept,
      multiple,
      maxFiles,
      maxSize
    });
    setRejections(rejected);
    if (rejected.length) onReject?.(rejected);
    if (added.length) {
      setFiles(accepted);
      for (const file of added) void upload(file);
    }
  };
  const root = rs(["rs-file-upload", className], styles.root);
  const drop = rs(["rs-file-upload-drop", dragging && "rs-file-upload-drag"], styles.drop, dragging && styles.drag);
  const input = rs(["rs-file-upload-input"], styles.input);
  const title = rs(["rs-file-upload-title"], styles.title);
  const desc = rs(["rs-file-upload-description"], styles.description);
  const list = rs(["rs-file-upload-list"], styles.list);
  const item = rs(["rs-file-upload-item"], styles.item);
  const row = rs(["rs-file-upload-row"], styles.row);
  const filename = rs(["rs-file-upload-name"], styles.name);
  const actions = rs(["rs-file-upload-actions"], styles.actions);
  const action = rs(["rs-file-upload-action"], styles.action);
  const status = rs(["rs-file-upload-status"], styles.status);
  return /*#__PURE__*/_jsxs("div", {
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsxs("div", {
      className: drop.className,
      style: drop.style,
      onDragOver: event => {
        event.preventDefault();
        if (!disabled) setDragging(true);
      },
      onDragLeave: event => {
        if (!event.currentTarget.contains(event.relatedTarget)) setDragging(false);
      },
      onDrop: event => {
        event.preventDefault();
        setDragging(false);
        choose(Array.from(event.dataTransfer.files));
      },
      children: [/*#__PURE__*/_jsx("span", {
        className: title.className,
        style: title.style,
        children: label
      }), /*#__PURE__*/_jsx("span", {
        id: `${id}-hint`,
        className: desc.className,
        style: desc.style,
        children: description
      }), /*#__PURE__*/_jsx("input", {
        ref: mergedRef,
        type: "file",
        "aria-label": label,
        "aria-describedby": `${id}-hint`,
        disabled: disabled,
        accept: accept,
        multiple: multiple,
        className: input.className,
        style: input.style,
        onChange: event => {
          choose(Array.from(event.currentTarget.files ?? []));
          event.currentTarget.value = "";
        }
      })]
    }), rejections.length > 0 && /*#__PURE__*/_jsx("div", {
      role: "alert",
      children: rejections.map(({
        file,
        reason
      }) => /*#__PURE__*/_jsxs("p", {
        className: status.className,
        style: status.style,
        children: [file.name, ": ", reason]
      }, fileKey(file)))
    }), files.length > 0 && /*#__PURE__*/_jsx("ul", {
      "aria-label": "Selected files",
      className: list.className,
      style: list.style,
      children: files.map(file => {
        const state = uploads.get(file);
        return /*#__PURE__*/_jsxs("li", {
          className: item.className,
          style: item.style,
          children: [/*#__PURE__*/_jsxs("div", {
            className: row.className,
            style: row.style,
            children: [/*#__PURE__*/_jsx("span", {
              className: filename.className,
              style: filename.style,
              children: file.name
            }), /*#__PURE__*/_jsxs("div", {
              className: actions.className,
              style: actions.style,
              children: [state?.status === "uploading" && /*#__PURE__*/_jsx(Button, {
                variant: "ghost",
                disabled: disabled,
                className: action.className,
                style: action.style,
                "aria-label": `Cancel upload of ${file.name}`,
                onClick: () => {
                  controllers.current.get(file)?.abort();
                  update(file, {
                    status: "cancelled"
                  });
                },
                children: "Cancel"
              }), (state?.status === "error" || state?.status === "cancelled") && onUpload && /*#__PURE__*/_jsx(Button, {
                variant: "ghost",
                disabled: disabled,
                className: action.className,
                style: action.style,
                "aria-label": `Retry upload of ${file.name}`,
                onClick: () => void upload(file),
                children: "Retry"
              }), /*#__PURE__*/_jsx(Button, {
                variant: "ghost",
                disabled: disabled,
                className: action.className,
                style: action.style,
                "aria-label": `Remove ${file.name}`,
                onClick: () => {
                  controllers.current.get(file)?.abort();
                  setFiles(files.filter(entry => entry !== file));
                  inputRef.current?.focus();
                },
                children: "Remove"
              })]
            })]
          }), state?.status === "uploading" && state.progress != null ? /*#__PURE__*/_jsx(Progress, {
            label: `Uploading ${file.name}`,
            value: state.progress
          }) : /*#__PURE__*/_jsx("p", {
            role: "status",
            className: status.className,
            style: status.style,
            children: state?.status === "error" ? state.error : state?.status === "complete" ? "Uploaded" : state?.status === "cancelled" ? "Cancelled" : state?.status === "uploading" ? "Uploading" : `${file.size.toLocaleString()} bytes · Ready`
          })]
        }, fileKey(file));
      })
    })]
  });
});
//# sourceMappingURL=file-upload.js.map
