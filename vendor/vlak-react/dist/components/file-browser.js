"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Icon } from "./icon.js";
import { Input } from "./input.js";
import { TreeView } from "./tree-view.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kOIVth: "x8fetqu",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  toolbar: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    $$css: true
  },
  breadcrumbs: {
    k7Eaqz: "xeuugli",
    ks0D6T: "x193iq5w",
    $$css: true
  },
  path: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kwnvtZ: "x1a02dak",
    kOIVth: "xvh977a",
    kH6xsr: "x3ct3a4",
    kmVPX3: "x1717udv",
    kogj98: "x1ghz6dp",
    $$css: true
  },
  crumbItem: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kOIVth: "xvh977a",
    k7Eaqz: "xeuugli",
    ks0D6T: "x193iq5w",
    $$css: true
  },
  crumb: {
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    ks0D6T: "x3ffi5q",
    k8WAf4: "xt970qd",
    kg3NbH: "x18a9hih",
    kB7OPa: "x9f619",
    kMzoRj: "xc342km",
    kaIpWk: "xkrxur",
    kWkggS: "xjbqb8w xqol87o",
    kMwMTN: "x1ixqp2s xcfh57o",
    kMv6JI: "xjb2p0i",
    kGuDYH: "xkpwil5",
    k63SB2: "xo1l8bm",
    kLWn49: "xfrs9s4",
    kkrTdU: "x1ypdohk",
    kPJHz1: "x784prv",
    k7shQP: "x9v5kkp",
    kZs9gx: "x14tvtkk",
    kiEn40: "x1bqaal",
    $$css: true
  },
  crumbCurrent: {
    kMwMTN: "x1gney9c",
    k63SB2: "xk50ysn",
    $$css: true
  },
  action: {
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kOIVth: "x13z6uf9",
    kzqmXN: "x14atkfc",
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kB7OPa: "x9f619",
    k8WAf4: "x18g2hj5",
    kg3NbH: "x1ryrjj2",
    kMv6JI: "xjb2p0i",
    kGuDYH: "xkpwil5",
    k63SB2: "xk50ysn",
    kLWn49: "xfrs9s4",
    khDVqt: "xuxw1ft",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kaIpWk: "xkrxur",
    kVAM5u: "x1cn24jd xaxtmmi",
    kWkggS: "xjbqb8w xlt1z8a x1oallzf x1oqui1x x1awx03v",
    kMwMTN: "x1gney9c x1q5mit8 x9dgriy xybgkc0",
    kkrTdU: "x1ypdohk x1s07b3s",
    kmkexE: "x1487y47 xrozb4q",
    kMeerF: "x1k57tk5 x784prv",
    k3XXqK: "x1t137rt x9v5kkp",
    kjBf7l: "xqbrbdq x17te1i1",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  active: {
    kWkggS: "x6583kg xlt1z8a xqau7aa xf7h6k7",
    kMwMTN: "x1gney9c x1pljmm8",
    k63SB2: "x1s688f",
    $$css: true
  },
  body: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x1cy8zhl",
    kOIVth: "x1rg3fk9",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  tree: {
    kCS8Yb: "xohosi4 xyz7so7",
    kzQI83: "x1c4vz4f",
    kmuXW: "xs83m0k",
    k7Eaqz: "xeuugli",
    ks0D6T: "x193iq5w",
    $$css: true
  },
  content: {
    kUk6DE: "xgdhuxi",
    k7Eaqz: "xeuugli",
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kOIVth: "x8233eu",
    $$css: true
  },
  list: {
    kH6xsr: "x3ct3a4",
    kmVPX3: "x1717udv",
    kogj98: "x1ghz6dp",
    k1xSpc: "xrvj5dj",
    kumcoG: "x1mkdm3x",
    kOIVth: "x13z6uf9",
    $$css: true
  },
  grid: {
    kumcoG: "x1pfsneu",
    $$css: true
  },
  item: {
    k1xSpc: "x78zum5",
    kOIVth: "x8233eu",
    kGNEyG: "x6s0dn4",
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kAzted: "x1wszdd",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd",
    kaIpWk: "xkrxur",
    kmVPX3: "x79iv2k",
    kWkggS: "xjbqb8w",
    kMwMTN: "x1gney9c",
    k9WMMc: "x1yc453h",
    kMv6JI: "xjb2p0i",
    kGuDYH: "xkpwil5",
    kkrTdU: "x1ypdohk",
    kPJHz1: "x784prv",
    k7shQP: "x9v5kkp",
    kZs9gx: "x14tvtkk",
    kiEn40: "x7s97pk",
    kWC4TW: "x1q5mit8",
    kYPGJ8: "x1s07b3s",
    $$css: true
  },
  tile: {
    kXwgrk: "xdt5ytf",
    kGNEyG: "x1cy8zhl",
    kAzted: "xdmy4d6",
    $$css: true
  },
  selected: {
    kWkggS: "x6583kg",
    k63SB2: "x1s688f",
    $$css: true
  },
  name: {
    kUk6DE: "x12lumcd",
    k7Eaqz: "xeuugli",
    ks0D6T: "x193iq5w",
    kVQacm: "xb3r6kr",
    kg5iWk: "xlyipyv",
    khDVqt: "xuxw1ft",
    $$css: true
  },
  meta: {
    kMwMTN: "x1ixqp2s",
    kGuDYH: "xboafo0",
    kcqcaj: "xss6m8b",
    kLWn49: "xfrs9s4",
    khDVqt: "xuxw1ft",
    k7Eaqz: "xeuugli",
    kVQacm: "xb3r6kr",
    kg5iWk: "xlyipyv",
    kmuXW: "xs83m0k",
    $$css: true
  },
  empty: {
    kogj98: "x1ghz6dp",
    k8WAf4: "xgepmj6",
    kMwMTN: "x1ixqp2s",
    kLWn49: "xfrs9s4",
    $$css: true
  }
};
function findPath(entries, id) {
  if (id == null) return [];
  for (const entry of entries) {
    if (entry.id === id) return [entry];
    if (entry.children) {
      const child = findPath(entry.children, id);
      if (child) return [entry, ...child];
    }
  }
  return null;
}
const folderNodes = entries => entries.filter(entry => entry.kind === "folder").map(entry => ({
  id: entry.id,
  label: entry.name,
  disabled: entry.disabled,
  children: folderNodes(entry.children ?? [])
}));

/** A controlled file collection with folder tree, breadcrumbs, search, and list or grid views. */
export const FileBrowser = /*#__PURE__*/React.forwardRef(function FileBrowser({
  entries,
  label = "Files",
  rootLabel = "Files",
  value,
  defaultValue,
  onValueChange,
  folder,
  defaultFolder = null,
  onFolderChange,
  onOpen,
  className,
  style,
  ...props
}, ref) {
  const [inner, setInner] = React.useState(defaultValue);
  const [innerFolder, setInnerFolder] = React.useState(defaultFolder);
  const [view, setView] = React.useState("list");
  const [query, setQuery] = React.useState("");
  const rootId = React.useId();
  const folderId = folder === undefined ? innerFolder : folder;
  const rawPath = findPath(entries, folderId) ?? [];
  const path = rawPath.at(-1)?.kind === "file" ? rawPath.slice(0, -1) : rawPath;
  const currentFolder = path.at(-1);
  const pathKey = JSON.stringify(path.map(entry => entry.id));
  const [expandedIds, setExpandedIds] = React.useState(() => [rootId, ...path.map(entry => entry.id)]);
  React.useEffect(() => {
    const visibleAncestors = [rootId, ...JSON.parse(pathKey)];
    setExpandedIds(previous => visibleAncestors.every(id => previous.includes(id)) ? previous : [...new Set([...previous, ...visibleAncestors])]);
  }, [pathKey, rootId]);
  const visible = (currentFolder?.children ?? entries).filter(entry => entry.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
  const selected = value ?? inner;
  const chosen = (currentFolder?.children ?? entries).find(entry => entry.id === selected);
  const navigate = next => {
    if (folder === undefined) setInnerFolder(next);
    onFolderChange?.(next);
    setQuery("");
  };
  const select = entry => {
    if (entry.disabled) return;
    if (entry.kind === "folder") navigate(entry.id);else {
      if (value === undefined) setInner(entry.id);
      onValueChange?.(entry.id);
    }
  };
  const root = rs(["rs-file-browser", className], styles.root);
  const toolbar = rs(["rs-file-browser-toolbar"], styles.toolbar);
  const breadcrumbs = rs(["rs-file-browser-breadcrumbs"], styles.breadcrumbs);
  const pathStyle = rs(["rs-file-browser-path"], styles.path);
  const crumbItem = rs(["rs-file-browser-crumb-item"], styles.crumbItem);
  const rootCrumb = rs(["rs-file-browser-crumb", path.length === 0 && "rs-file-browser-crumb-current"], styles.crumb, path.length === 0 && styles.crumbCurrent);
  const action = rs(["rs-file-browser-action"], styles.action);
  const body = rs(["rs-file-browser-body"], styles.body);
  const tree = rs(["rs-file-browser-tree"], styles.tree);
  const content = rs(["rs-file-browser-content"], styles.content);
  const list = rs(["rs-file-browser-list", view === "grid" && "rs-file-browser-grid"], styles.list, view === "grid" && styles.grid);
  const name = rs(["rs-file-browser-name"], styles.name);
  const meta = rs(["rs-file-browser-meta"], styles.meta);
  const empty = rs(["rs-file-browser-empty"], styles.empty);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    role: "region",
    "aria-label": label,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("nav", {
      ...breadcrumbs,
      "aria-label": `${label} breadcrumbs`,
      children: /*#__PURE__*/_jsxs("ol", {
        ...pathStyle,
        children: [/*#__PURE__*/_jsx("li", {
          ...crumbItem,
          children: /*#__PURE__*/_jsx("button", {
            ...rootCrumb,
            type: "button",
            "aria-current": path.length === 0 ? "location" : undefined,
            onClick: () => navigate(null),
            children: /*#__PURE__*/_jsx("span", {
              ...name,
              title: rootLabel,
              children: rootLabel
            })
          })
        }), path.map((entry, index) => {
          const current = index === path.length - 1;
          const crumb = rs(["rs-file-browser-crumb", current && "rs-file-browser-crumb-current"], styles.crumb, current && styles.crumbCurrent);
          return /*#__PURE__*/_jsxs("li", {
            ...crumbItem,
            children: [/*#__PURE__*/_jsx(Icon, {
              name: "chevron-right",
              size: 12
            }), /*#__PURE__*/_jsx("button", {
              ...crumb,
              type: "button",
              "aria-current": current ? "location" : undefined,
              onClick: () => navigate(entry.id),
              children: /*#__PURE__*/_jsx("span", {
                ...name,
                title: entry.name,
                children: entry.name
              })
            })]
          }, entry.id);
        })]
      })
    }), /*#__PURE__*/_jsxs("div", {
      ...body,
      children: [/*#__PURE__*/_jsx("aside", {
        ...tree,
        "aria-label": `${label} folders`,
        children: /*#__PURE__*/_jsx(TreeView, {
          nodes: [{
            id: rootId,
            label: rootLabel,
            children: folderNodes(entries)
          }],
          label: `${label} folder tree`,
          value: currentFolder?.id ?? rootId,
          expanded: expandedIds,
          onExpandedChange: setExpandedIds,
          onValueChange: id => navigate(id === rootId ? null : id)
        })
      }), /*#__PURE__*/_jsxs("div", {
        ...content,
        children: [/*#__PURE__*/_jsx(Input, {
          type: "search",
          "aria-label": "Search this folder",
          placeholder: "Search this folder",
          value: query,
          onChange: event => setQuery(event.target.value)
        }), /*#__PURE__*/_jsxs("div", {
          ...toolbar,
          role: "group",
          "aria-label": "File view",
          children: [["list", "grid"].map(mode => {
            const choice = rs(["rs-file-browser-action", view === mode && "rs-file-browser-view-active"], styles.action, view === mode && styles.active);
            return /*#__PURE__*/_jsxs("button", {
              ...choice,
              type: "button",
              "aria-pressed": view === mode,
              onClick: () => setView(mode),
              children: [/*#__PURE__*/_jsx(Icon, {
                name: mode
              }), mode === "list" ? "List" : "Grid"]
            }, mode);
          }), onOpen && /*#__PURE__*/_jsx("button", {
            ...action,
            type: "button",
            disabled: !chosen || chosen.disabled,
            onClick: () => {
              if (chosen && !chosen.disabled) onOpen(chosen);
            },
            children: "Open selected"
          })]
        }), /*#__PURE__*/_jsx("ul", {
          ...list,
          "aria-label": currentFolder?.name ?? label,
          children: visible.map(entry => {
            const selectedFile = entry.kind === "file" && entry.id === selected;
            const row = rs(["rs-file-browser-item", view === "grid" && "rs-file-browser-tile", selectedFile && "rs-file-browser-selected"], styles.item, view === "grid" && styles.tile, selectedFile && styles.selected);
            return /*#__PURE__*/_jsx("li", {
              children: /*#__PURE__*/_jsxs("button", {
                ...row,
                type: "button",
                disabled: entry.disabled,
                "aria-pressed": entry.kind === "file" ? selectedFile : undefined,
                onClick: () => select(entry),
                onDoubleClick: () => {
                  if (!entry.disabled && entry.kind === "file") onOpen?.(entry);
                },
                children: [/*#__PURE__*/_jsx(Icon, {
                  name: entry.kind === "folder" ? "folder" : "file",
                  size: view === "grid" ? 24 : 16
                }), /*#__PURE__*/_jsx("span", {
                  ...name,
                  title: entry.name,
                  children: entry.name
                }), /*#__PURE__*/_jsxs("span", {
                  ...meta,
                  children: [entry.kind === "folder" ? "Folder" : entry.size ?? "File", entry.modified ? ` · ${entry.modified}` : ""]
                })]
              })
            }, entry.id);
          })
        }), visible.length === 0 && /*#__PURE__*/_jsx("p", {
          ...empty,
          role: "status",
          children: query ? "No files match this search." : "This folder is empty."
        })]
      })]
    })]
  });
});
//# sourceMappingURL=file-browser.js.map
