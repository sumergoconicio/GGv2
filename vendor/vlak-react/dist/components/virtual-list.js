"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    kORKVm: "x1odjw0f",
    kZeWKH: "xish69e",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    kVAEAm: "x1n2onr6",
    $$css: true
  },
  canvas: {
    kVAEAm: "x1n2onr6",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  item: {
    kVAEAm: "x10l6tqk",
    kkqhue: "x17y0mx6",
    k87sOh: "x13vifvy",
    kB7OPa: "x9f619",
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kg3NbH: "x1ryrjj2",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    kjBf7l: "xqbrbdq",
    kInvED: "x2ssjo2",
    kVQacm: "xb3r6kr",
    $$css: true
  },
  empty: {
    kmVPX3: "x1uz70x1",
    kMwMTN: "x1ixqp2s",
    kLWn49: "xfrs9s4",
    $$css: true
  }
};

/** Fixed-height windowing with a retained focused row and keyboard navigation. */
export const VirtualList = /*#__PURE__*/React.forwardRef(function VirtualList({
  items,
  label,
  rowHeight = 44,
  height = 352,
  overscan = 4,
  emptyLabel = "No items",
  className,
  style,
  onScroll,
  ...props
}, ref) {
  const rowSize = Math.max(44, Number.isFinite(rowHeight) ? rowHeight : 44);
  const viewport = Math.max(rowSize, Number.isFinite(height) ? height : 352);
  const extra = Math.max(0, Math.min(50, Number.isFinite(overscan) ? Math.floor(overscan) : 4));
  const local = React.useRef(null);
  const rows = React.useRef(new Map());
  const [scroll, setScroll] = React.useState(0);
  const [activeId, setActiveId] = React.useState();
  const pendingFocus = React.useRef(null);
  const pendingRemoval = React.useRef(false);
  const lastIndex = React.useRef(0);
  const indexById = React.useMemo(() => new Map(items.map((item, index) => [item.id, index])), [items]);
  const latestIndexes = React.useRef(indexById);
  latestIndexes.current = indexById;
  const found = activeId == null ? undefined : indexById.get(activeId);
  const activeIndex = found ?? Math.max(0, Math.min(lastIndex.current, items.length - 1));
  if (found != null) lastIndex.current = found;
  const start = Math.max(0, Math.min(Math.max(0, items.length - 1), Math.floor(scroll / rowSize) - extra));
  const end = Math.min(items.length, start + Math.ceil(viewport / rowSize) + extra * 2);
  const indexes = new Set(Array.from({
    length: end - start
  }, (_, index) => start + index));
  if (items.length) indexes.add(activeIndex);
  const focus = React.useCallback(index => {
    const item = items[index];
    if (!item || !local.current) return;
    const top = index * rowSize;
    let nextScroll = local.current.scrollTop;
    if (top < nextScroll) nextScroll = top;else if (top + rowSize > nextScroll + viewport) nextScroll = top + rowSize - viewport;
    local.current.scrollTop = nextScroll;
    const mounted = rows.current.get(item.id);
    pendingFocus.current = mounted ? null : item.id;
    setScroll(nextScroll);
    setActiveId(item.id);
    mounted?.focus({
      preventScroll: true
    });
  }, [items, rowSize, viewport]);
  React.useLayoutEffect(() => {
    const max = Math.max(0, items.length * rowSize - viewport);
    if (local.current && local.current.scrollTop > max) {
      local.current.scrollTop = max;
      setScroll(max);
    }
    if (pendingRemoval.current) {
      pendingRemoval.current = false;
      if (items.length) focus(activeIndex);else local.current?.focus();
    }
    if (pendingFocus.current) {
      rows.current.get(pendingFocus.current)?.focus({
        preventScroll: true
      });
      pendingFocus.current = null;
    }
  }, [items, rowSize, viewport, activeIndex, focus]);
  const root = rs(["rs-virtual-list", className], styles.root);
  const canvas = rs(["rs-virtual-list-canvas"], styles.canvas);
  const itemStyle = rs(["rs-virtual-list-item"], styles.item);
  const empty = rs(["rs-virtual-list-empty"], styles.empty);
  return /*#__PURE__*/_jsxs("div", {
    ref: element => {
      local.current = element;
      if (typeof ref === "function") ref(element);else if (ref) ref.current = element;
    },
    role: "list",
    "aria-label": label,
    tabIndex: items.length ? undefined : 0,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      height: viewport,
      ...style
    },
    onScroll: event => {
      setScroll(event.currentTarget.scrollTop);
      onScroll?.(event);
    },
    children: [/*#__PURE__*/_jsx("div", {
      ...canvas,
      role: "none",
      style: {
        ...canvas.style,
        height: items.length * rowSize
      },
      children: [...indexes].sort((a, b) => a - b).map(index => {
        const item = items[index];
        return /*#__PURE__*/_jsx("div", {
          ref: element => {
            if (element) rows.current.set(item.id, element);else {
              if (!latestIndexes.current.has(item.id) && rows.current.get(item.id)?.contains(document.activeElement)) pendingRemoval.current = true;
              rows.current.delete(item.id);
            }
          },
          ...itemStyle,
          style: {
            ...itemStyle.style,
            height: rowSize,
            transform: `translateY(${index * rowSize}px)`
          },
          role: "listitem",
          "aria-posinset": index + 1,
          "aria-setsize": items.length,
          tabIndex: index === activeIndex ? 0 : -1,
          onFocus: () => setActiveId(item.id),
          onKeyDown: event => {
            if (event.target !== event.currentTarget) return;
            const target = event.key === "Home" ? 0 : event.key === "End" ? items.length - 1 : event.key === "ArrowDown" ? Math.min(items.length - 1, index + 1) : event.key === "ArrowUp" ? Math.max(0, index - 1) : -1;
            if (target >= 0) {
              event.preventDefault();
              focus(target);
            }
          },
          children: item.content ?? item.label
        }, item.id);
      })
    }), !items.length && /*#__PURE__*/_jsx("div", {
      ...empty,
      role: "listitem",
      children: emptyLabel
    })]
  });
});
//# sourceMappingURL=virtual-list.js.map
