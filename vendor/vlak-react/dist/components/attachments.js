"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { Icon } from "./icon.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const AttachmentLayout = /*#__PURE__*/React.createContext("grid");
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    kmVPX3: "x1717udv",
    kogj98: "x1ghz6dp",
    kB88ic: "xe8uvvx",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  grid: {
    kumcoG: "x1p797x9",
    $$css: true
  },
  inline: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x1cy8zhl",
    $$css: true
  },
  list: {
    kumcoG: "x1mkdm3x",
    $$css: true
  },
  inlineItem: {
    kzqmXN: "x14atkfc",
    ks0D6T: "x193iq5w",
    kUk6DE: "xkz0k9k",
    kmVPX3: "x78pyy4",
    $$css: true
  },
  listItem: {
    kzqmXN: "xh8yej3",
    kB7OPa: "x9f619",
    $$css: true
  },
  inlineThumbnail: {
    kzqmXN: "x1td3qas",
    kZKoxP: "x10w6t97",
    $$css: true
  },
  inlineDetail: {
    k1xSpc: "x1s85apg",
    $$css: true
  },
  inlineMedia: {
    ks0D6T: "x1vxnb6q",
    $$css: true
  },
  item: {
    k7Eaqz: "xeuugli",
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kOIVth: "x13z6uf9",
    kmVPX3: "x7gbtqy",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kaIpWk: "xkrxur",
    kWkggS: "xhpg8l3",
    $$css: true
  },
  row: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kOIVth: "x13z6uf9",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  thumbnail: {
    kzqmXN: "x1useyqa",
    kZKoxP: "xsdox4t",
    kVIFPx: "xl1xv1r",
    kaIpWk: "xkrxur",
    kmuXW: "x2lah0s",
    $$css: true
  },
  fileIcon: {
    kzqmXN: "x1useyqa",
    kZKoxP: "xsdox4t",
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kMwMTN: "x1ixqp2s",
    kWkggS: "x1nzd1wa",
    kaIpWk: "xkrxur",
    kmuXW: "x2lah0s",
    $$css: true
  },
  info: {
    k1xSpc: "xrvj5dj",
    kOIVth: "xvh977a",
    kUk6DE: "x12lumcd",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  name: {
    kGuDYH: "x1dcheo9",
    k63SB2: "xk50ysn",
    kMwMTN: "x1gney9c",
    kHjlTd: "xj0a0fe",
    kogj98: "x1ghz6dp",
    $$css: true
  },
  detail: {
    kGuDYH: "xboafo0",
    kLWn49: "x37zpob",
    kMwMTN: "x1ixqp2s",
    kogj98: "x1ghz6dp",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  action: {
    kzqmXN: "x187nhsf",
    k7Eaqz: "x1nb6za0",
    ks0D6T: "x1k2d6hx",
    kZKoxP: "xn3w4p2",
    kmVPX3: "x1717udv",
    kmuXW: "x2lah0s",
    $$css: true
  },
  media: {
    k1xSpc: "x1lliihq",
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kskxy: "x1xiyphd",
    kaIpWk: "xkrxur",
    $$css: true
  },
  link: {
    kMwMTN: "x1gney9c",
    kybGjl: "x1bvjpef",
    kcSHmL: "x1ohr1zr",
    kMeerF: "x1k57tk5 x784prv",
    k3XXqK: "xaatb59",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  status: {
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    kogj98: "x1ghz6dp",
    $$css: true
  },
  progress: {
    kzqmXN: "xh8yej3",
    kZKoxP: "xols6we",
    keaTxX: "x12r28v4",
    $$css: true
  }
};
function attachmentUrl(url) {
  if (!url || Array.from(url).some(character => character.charCodeAt(0) <= 32 || character.charCodeAt(0) === 127)) return undefined;
  try {
    return ["http:", "https:", "blob:"].includes(new URL(url, "https://vlak.invalid").protocol) ? url : undefined;
  } catch {
    return undefined;
  }
}

/** A responsive list of application-owned files and media. */
export const Attachments = /*#__PURE__*/React.forwardRef(function Attachments({
  label = "Attachments",
  variant = "grid",
  className,
  style,
  ...props
}, ref) {
  const root = rs(["rs-attachments", variant === "grid" && "rs-attachments-grid", variant === "inline" && "rs-attachments-inline", variant === "list" && "rs-attachments-list", className], styles.root, variant === "grid" && styles.grid, variant === "inline" && styles.inline, variant === "list" && styles.list);
  return /*#__PURE__*/_jsx(AttachmentLayout.Provider, {
    value: variant,
    children: /*#__PURE__*/_jsx("ul", {
      ...props,
      ref: ref,
      "aria-label": label,
      className: root.className,
      style: {
        ...root.style,
        ...style
      }
    })
  });
});

/** File metadata and native media previews, with explicit application actions. */
export const Attachment = /*#__PURE__*/React.forwardRef(function Attachment({
  data,
  variant,
  disabled = false,
  onRemove,
  onRetry,
  preview,
  className,
  style,
  ...props
}, ref) {
  const inheritedVariant = React.useContext(AttachmentLayout);
  const layout = variant ?? inheritedVariant;
  const isInline = layout === "inline";
  const url = attachmentUrl(data.url);
  const download = url?.slice(0, 5).toLowerCase() === "blob:";
  const mediaType = data.mediaType?.toLowerCase() ?? "";
  const image = mediaType.startsWith("image/");
  const audio = mediaType.startsWith("audio/");
  const video = mediaType.startsWith("video/");
  const root = rs(["rs-attachment", isInline && "rs-attachment-inline", layout === "list" && "rs-attachment-list", className], styles.item, isInline && styles.inlineItem, layout === "list" && styles.listItem);
  const row = rs(["rs-attachment-row"], styles.row);
  const thumbnail = rs(["rs-attachment-thumbnail", isInline && "rs-attachment-thumbnail-inline"], styles.thumbnail, isInline && styles.inlineThumbnail);
  const fileIcon = rs(["rs-attachment-file-icon", isInline && "rs-attachment-thumbnail-inline"], styles.fileIcon, isInline && styles.inlineThumbnail);
  const info = rs(["rs-attachment-info"], styles.info);
  const name = rs(["rs-attachment-name"], styles.name);
  const detail = rs(["rs-attachment-detail", isInline && "rs-attachment-detail-inline"], styles.detail, isInline && styles.inlineDetail);
  const action = rs(["rs-attachment-action"], styles.action);
  const media = rs(["rs-attachment-media", isInline && "rs-attachment-media-inline"], styles.media, isInline && styles.inlineMedia);
  const link = rs(["rs-attachment-link"], styles.link);
  const status = rs(["rs-attachment-status"], styles.status);
  const progress = rs(["rs-attachment-progress"], styles.progress);
  return /*#__PURE__*/_jsxs("li", {
    ...props,
    ref: ref,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsxs("div", {
      ...row,
      children: [image && url ? /*#__PURE__*/_jsx("img", {
        ...thumbnail,
        src: url,
        alt: "",
        loading: "lazy",
        referrerPolicy: "no-referrer"
      }) : /*#__PURE__*/_jsx("span", {
        ...fileIcon,
        "aria-hidden": "true",
        children: /*#__PURE__*/_jsx(Icon, {
          name: "attachment"
        })
      }), /*#__PURE__*/_jsxs("div", {
        ...info,
        children: [/*#__PURE__*/_jsx("p", {
          ...name,
          children: url ? /*#__PURE__*/_jsx("a", {
            ...link,
            href: url,
            download: download ? data.name || true : undefined,
            target: download ? undefined : "_blank",
            rel: download ? undefined : "noopener noreferrer",
            children: data.name
          }) : data.name
        }), /*#__PURE__*/_jsx("p", {
          ...detail,
          children: [data.mediaType, data.size === undefined ? undefined : `${data.size.toLocaleString()} bytes`].filter(Boolean).join(" · ")
        })]
      }), onRetry && data.status === "error" && /*#__PURE__*/_jsx(Button, {
        ...action,
        variant: "subtle",
        "aria-label": `Retry ${data.name}`,
        title: `Retry ${data.name}`,
        disabled: disabled,
        onClick: onRetry,
        children: /*#__PURE__*/_jsx(Icon, {
          name: "refresh"
        })
      }), onRemove && /*#__PURE__*/_jsx(Button, {
        ...action,
        variant: "subtle",
        "aria-label": `Remove ${data.name}`,
        title: `Remove ${data.name}`,
        disabled: disabled,
        onClick: onRemove,
        children: /*#__PURE__*/_jsx(Icon, {
          name: "close",
          size: 12
        })
      })]
    }), preview ?? (url && audio ? /*#__PURE__*/_jsx("audio", {
      ...media,
      controls: true,
      preload: "none",
      src: url,
      "aria-label": `Audio preview of ${data.name}`
    }) : url && video ? /*#__PURE__*/_jsx("video", {
      ...media,
      controls: true,
      preload: "metadata",
      src: url,
      "aria-label": `Video preview of ${data.name}`
    }) : null), data.status === "uploading" && data.progress !== undefined && /*#__PURE__*/_jsx("progress", {
      ...progress,
      max: 100,
      value: Math.min(100, Math.max(0, data.progress)),
      "aria-label": `Uploading ${data.name}`
    }), data.status && data.status !== "ready" && /*#__PURE__*/_jsx("p", {
      ...status,
      role: data.status === "error" ? "alert" : "status",
      children: data.status === "error" ? data.error || "This file could not be uploaded." : "Uploading…"
    })]
  });
});

/** Creates local preview URLs and revokes them when files leave the list or the owner unmounts. */
export function useFileAttachments(files) {
  const prefix = React.useId();
  const ids = React.useRef(new WeakMap());
  const sequence = React.useRef(0);
  const [previews, setPreviews] = React.useState(new Map());
  const urls = React.useRef(new Map());
  React.useEffect(() => {
    let changed = false;
    for (const [file, url] of urls.current) if (!files.includes(file)) {
      URL.revokeObjectURL(url);
      urls.current.delete(file);
      changed = true;
    }
    if (typeof URL.createObjectURL === "function") for (const file of files) if (!urls.current.has(file)) {
      urls.current.set(file, URL.createObjectURL(file));
      changed = true;
    }
    if (changed) setPreviews(new Map(urls.current));
  }, [files]);
  React.useEffect(() => () => {
    for (const url of urls.current.values()) URL.revokeObjectURL(url);
    urls.current.clear();
  }, []);
  return files.map(file => {
    if (!ids.current.has(file)) ids.current.set(file, `${prefix}-${++sequence.current}`);
    return {
      id: ids.current.get(file),
      name: file.name,
      mediaType: file.type,
      size: file.size,
      url: previews.get(file),
      status: "ready"
    };
  });
}
//# sourceMappingURL=attachments.js.map
