"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Dialog } from "./dialog.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  palette: {
    kzqmXN: "xht4xr3 xvolacv",
    ks0D6T: "x95b5qq xcji143",
    kmVPX3: "x1717udv",
    kVQacm: "xb3r6kr",
    $$css: true
  },
  input: {
    kB7OPa: "x9f619",
    kzqmXN: "xh8yej3",
    kMzoRj: "xc342km",
    kt9PQ7: "xcv4u0r",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kWkggS: "xjbqb8w",
    kMv6JI: "xjb2p0i",
    kGuDYH: "xkpwil5 x1cncyzl",
    kb6lSQ: "xjat59b",
    kMwMTN: "x1gney9c",
    k8WAf4: "x142x9wm",
    kg3NbH: "xnxx81d",
    kMeerF: "x1k57tk5 x784prv",
    k3XXqK: "x1t137rt x9v5kkp",
    kjBf7l: "x14tvtkk",
    kInvED: "x1bqaal",
    kAzted: "x1wszdd xs41724",
    k8Qsv1: "x6adxn2",
    $$css: true
  },
  list: {
    kskxy: "x1bsj13w",
    kORKVm: "x1odjw0f",
    kmVPX3: "xd7ozn7",
    $$css: true
  },
  group: {
    kGuDYH: "x12lo8hy x8hqeb2",
    k63SB2: "x1s688f",
    kb6lSQ: "xjat59b",
    kMwMTN: "x1ixqp2s",
    kLKAdn: "x1b58sdr x6v3z81",
    kwRFfy: "x5tukcl xu9b65w",
    kGO01o: "xes99ow xxlrwmu",
    kZCmMZ: "xd1uisr x1wc43q6",
    $$css: true
  },
  item: {
    kB7OPa: "x9f619",
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kjj79g: "x1qughib",
    kOIVth: "x8233eu",
    kzqmXN: "xh8yej3",
    k9WMMc: "x1yc453h",
    kMzoRj: "xc342km",
    kWkggS: "xjbqb8w",
    kMv6JI: "xjb2p0i",
    kGuDYH: "x1roswp1 xzwmqnn",
    kb6lSQ: "xjat59b",
    kMwMTN: "x1gney9c",
    k8WAf4: "x18g2hj5 x93xex7",
    kg3NbH: "xvpgqt4 x507p67",
    kaIpWk: "xkrxur x16r9t5",
    kkrTdU: "x1ypdohk",
    kAzted: "x1wszdd xs41724",
    $$css: true
  },
  itemActive: {
    kWkggS: "xow1vt1",
    $$css: true
  },
  content: {
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kOIVth: "xvh977a",
    k7Eaqz: "xeuugli",
    kUk6DE: "x12lumcd",
    $$css: true
  },
  description: {
    k1xSpc: "x1lliihq",
    kGuDYH: "xboafo0",
    kLWn49: "x37zpob",
    kMwMTN: "x1ixqp2s",
    kVQacm: "xb3r6kr",
    kg5iWk: "xlyipyv",
    khDVqt: "xuxw1ft",
    $$css: true
  },
  descriptionActive: {
    kMwMTN: "x1gney9c",
    $$css: true
  },
  hint: {
    kGuDYH: "x12lo8hy",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  hintActive: {
    kMwMTN: "x1gney9c",
    $$css: true
  },
  empty: {
    kmVPX3: "xomzojh xz7c091",
    k9WMMc: "x2b8uid",
    kGuDYH: "x1dcheo9 xrgdnwz",
    kMwMTN: "x1ixqp2s",
    $$css: true
  }
};
const PAGE = 10;

/** Search, arrows, enter. The input keeps focus; the list is aria-activedescendant. */
export const Command = /*#__PURE__*/React.forwardRef(function Command({
  groups,
  value,
  defaultValue = "",
  onValueChange,
  placeholder = "Type a command or search…",
  inputLabel = "Command",
  shouldFilter = true,
  emptyLabel = "Nothing found.",
  onDone,
  className,
  style,
  ...props
}, ref) {
  const idBase = React.useId();
  const inputId = `${idBase}-input`;
  const listboxId = `${idBase}-listbox`;
  const optionId = index => `${idBase}-opt-${index}`;
  const activeRef = React.useRef(null);
  const composing = React.useRef(false);
  const [inner, setInner] = React.useState(defaultValue);
  const query = value ?? inner;
  const q = query.trim().toLowerCase();
  const filtered = groups.map(group => ({
    ...group,
    items: shouldFilter ? group.items.filter(item => item.label.toLowerCase().includes(q) || item.keywords?.toLowerCase().includes(q)) : group.items
  })).filter(group => group.items.length > 0);
  const flat = filtered.flatMap(group => group.items);
  const hasList = flat.length > 0;
  // Compare displayed identities, not array references: callers may recreate
  // their groups on every render while keyboard selection should stay put.
  const selectionKey = JSON.stringify([query, filtered.map(group => [group.label, group.items.map(item => item.id ?? item.label)])]);
  const [selection, setSelection] = React.useState({
    key: selectionKey,
    index: 0
  });
  if (selection.key !== selectionKey) {
    // Persist the reset so returning to an earlier query cannot revive its selection.
    setSelection({
      key: selectionKey,
      index: 0
    });
  }
  const activeIndex = selection.key === selectionKey ? Math.max(0, Math.min(flat.length - 1, selection.index)) : 0;
  const setActiveIndex = next => setSelection(current => {
    const index = current.key === selectionKey ? Math.max(0, Math.min(flat.length - 1, current.index)) : 0;
    return {
      key: selectionKey,
      index: typeof next === "function" ? next(index) : next
    };
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: Scroll the current option after selection or displayed results change.
  React.useEffect(() => {
    activeRef.current?.scrollIntoView?.({
      block: "nearest"
    });
  }, [activeIndex, selectionKey]);
  const run = item => {
    onDone?.();
    item.onSelect?.();
  };
  const onKeyDown = e => {
    if (composing.current || e.nativeEvent.isComposing || e.nativeEvent.keyCode === 229) return;
    const last = Math.max(0, flat.length - 1);
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex(index => Math.min(last, index + 1));
        return;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex(index => Math.max(0, index - 1));
        return;
      case "Home":
        e.preventDefault();
        setActiveIndex(0);
        return;
      case "End":
        e.preventDefault();
        setActiveIndex(last);
        return;
      case "PageUp":
        e.preventDefault();
        setActiveIndex(index => Math.max(0, index - PAGE));
        return;
      case "PageDown":
        e.preventDefault();
        setActiveIndex(index => Math.min(last, index + PAGE));
        return;
      case "Enter":
        {
          e.preventDefault();
          const item = flat[activeIndex];
          if (item) run(item);
          return;
        }
      case "Escape":
        e.preventDefault();
        onDone?.();
        return;
      default:
        return;
    }
  };
  const root = rs(["rs-command", className], styles.root);
  const input = rs(["rs-command-input"], styles.input);
  const list = rs(["rs-command-list"], styles.list);
  const empty = rs(["rs-command-empty"], styles.empty);
  const groupSx = rs(["rs-command-group"], styles.group);
  const content = rs(["rs-command-content"], styles.content);
  let cursor = -1;
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("input", {
      id: inputId,
      className: input.className,
      style: input.style,
      autoFocus: true,
      type: "text",
      autoComplete: "off",
      placeholder: placeholder,
      role: "combobox",
      "aria-expanded": hasList,
      "aria-controls": hasList ? listboxId : undefined,
      "aria-activedescendant": hasList && flat[activeIndex] ? optionId(activeIndex) : undefined,
      "aria-autocomplete": "list",
      "aria-label": inputLabel,
      value: query,
      onChange: e => {
        if (value === undefined) setInner(e.target.value);
        onValueChange?.(e.target.value);
      },
      onCompositionStart: () => {
        composing.current = true;
      },
      onCompositionEnd: () => {
        composing.current = false;
      },
      onKeyDown: onKeyDown
    }), /*#__PURE__*/_jsxs("div", {
      id: hasList ? listboxId : undefined,
      role: hasList ? "listbox" : undefined,
      "aria-labelledby": hasList ? inputId : undefined,
      tabIndex: -1,
      className: list.className,
      style: list.style,
      onMouseDown: e => e.preventDefault(),
      children: [flat.length === 0 && /*#__PURE__*/_jsx("div", {
        className: empty.className,
        style: empty.style,
        children: emptyLabel
      }), filtered.map((group, gi) => {
        const groupLabelId = `${idBase}-group-${gi}`;
        return /*#__PURE__*/_jsxs("div", {
          role: "group",
          "aria-labelledby": group.label ? groupLabelId : undefined,
          children: [group.label && /*#__PURE__*/_jsx("div", {
            id: groupLabelId,
            role: "presentation",
            className: groupSx.className,
            style: groupSx.style,
            children: group.label
          }), group.items.map(item => {
            cursor++;
            const index = cursor;
            const active = index === activeIndex;
            const labelId = `${optionId(index)}-label`;
            const descriptionId = `${optionId(index)}-description`;
            const hintId = `${optionId(index)}-hint`;
            const hasDescription = item.description != null;
            const row = rs(["rs-command-item", active && "rs-command-item-active"], styles.item, active && styles.itemActive);
            const description = rs(["rs-command-description", active && "rs-command-description-active"], styles.description, active && styles.descriptionActive);
            const hint = rs(["rs-command-hint", active && "rs-command-hint-active"], styles.hint, active && styles.hintActive);
            return /*#__PURE__*/_jsxs("div", {
              id: optionId(index),
              ref: active ? activeRef : undefined,
              role: "option",
              tabIndex: -1,
              "aria-selected": active,
              "aria-labelledby": hasDescription ? labelId : undefined,
              "aria-describedby": hasDescription ? [descriptionId, item.hint != null && hintId].filter(Boolean).join(" ") : undefined,
              className: row.className,
              style: row.style,
              onPointerEnter: () => setActiveIndex(index),
              onClick: () => run(item),
              children: [/*#__PURE__*/_jsxs("span", {
                className: content.className,
                style: content.style,
                children: [/*#__PURE__*/_jsx("span", {
                  id: labelId,
                  children: item.label
                }), hasDescription && /*#__PURE__*/_jsx("span", {
                  id: descriptionId,
                  className: description.className,
                  style: description.style,
                  children: item.description
                })]
              }), item.hint != null && /*#__PURE__*/_jsx("span", {
                id: hintId,
                className: hint.className,
                style: hint.style,
                children: item.hint
              })]
            }, item.id ?? `${gi}-${item.label}`);
          })]
        }, gi);
      })]
    })]
  });
});
/** The palette in a native <dialog>. Wire ⌘K in your app to setOpen(true). */
export const CommandDialog = /*#__PURE__*/React.forwardRef(function CommandDialog({
  open,
  onClose,
  className,
  "aria-label": ariaLabel = "Commands",
  "aria-labelledby": ariaLabelledBy,
  ...props
}, ref) {
  return /*#__PURE__*/_jsx(Dialog, {
    ref: ref,
    open: open,
    onClose: onClose,
    "aria-label": ariaLabelledBy ? undefined : ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    className: ["rs-command-dialog", className].filter(Boolean).join(" "),
    extraStyles: [styles.palette],
    children: open && /*#__PURE__*/_jsx(Command, {
      onDone: onClose,
      ...props
    })
  });
});
//# sourceMappingURL=command.js.map
