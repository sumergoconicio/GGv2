"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { Icon } from "./icon.js";
import { NativeSelect } from "./native-select.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
  columns: {
    k1xSpc: "xrvj5dj",
    kprqdN: "x1mt1orb",
    klIVar: "xewgvhm",
    kOIVth: "x8fetqu",
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    ks0D6T: "x193iq5w",
    kB7OPa: "x9f619",
    kXHlph: "xw2csxc",
    kvh3hx: "x7p5m3t",
    kmVPX3: "x78pyy4",
    katHQp: "x162g1qv",
    kc424l: "x1di6z1p",
    kjBf7l: "xqbrbdq",
    kInvED: "x2ssjo2",
    $$css: true
  },
  column: {
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kSGwAc: "x1y8v6su",
    kOIVth: "x8233eu",
    k7Eaqz: "xeuugli",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kaIpWk: "xkrxur",
    kmVPX3: "x7gbtqy",
    k5xd4v: "x1bhewko",
    $$css: true
  },
  heading: {
    kogj98: "x1ghz6dp",
    kg3NbH: "x1ryrjj2",
    kAzted: "x1wszdd",
    kGuDYH: "x6u19be",
    k63SB2: "x1s688f",
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kjj79g: "x1qughib",
    kOIVth: "x13z6uf9",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  list: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    kH6xsr: "x3ct3a4",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  card: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    k7Eaqz: "xeuugli",
    kmVPX3: "x79iv2k",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kaIpWk: "xkrxur",
    kWkggS: "xhpg8l3",
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  header: {
    k1xSpc: "xrvj5dj",
    kumcoG: "x1lusn50",
    kGNEyG: "x6s0dn4",
    kOIVth: "x13z6uf9",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  title: {
    k63SB2: "x1s688f",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  detail: {
    kMwMTN: "x1ixqp2s",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  controls: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x6s0dn4",
    kOIVth: "x13z6uf9",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  destination: {
    kUk6DE: "xck25dg",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  reorder: {
    k1xSpc: "x78zum5",
    kOIVth: "xvh977a",
    keTefX: "xvc5jky",
    kmuXW: "x2lah0s",
    $$css: true
  },
  action: {
    kzqmXN: "x1uyfxw7",
    k7Eaqz: "xtp0tkc",
    kZKoxP: "x9ve8r1",
    kAzted: "x1wszdd",
    kmVPX3: "x1717udv",
    kmuXW: "x2lah0s",
    kaIpWk: "xkrxur",
    $$css: true
  },
  status: {
    kogj98: "x1ghz6dp",
    kg3NbH: "x1ryrjj2",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "xboafo0",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  help: {
    kVAEAm: "x10l6tqk",
    kzqmXN: "x1i1rx1s",
    kZKoxP: "xjm9jq1",
    kVQacm: "xb3r6kr",
    kz4h6p: "x1hyvwdk",
    khDVqt: "xuxw1ft",
    $$css: true
  }
};

/** Movable cards with drag, keyboard reordering, and named destination selectors. */
export const KanbanBoard = /*#__PURE__*/React.forwardRef(function KanbanBoard({
  columns,
  value,
  defaultValue = [],
  onValueChange,
  label = "Board",
  className,
  style,
  ...props
}, ref) {
  const [inner, setInner] = React.useState(defaultValue);
  const cards = value ?? inner;
  const [announcement, setAnnouncement] = React.useState("");
  const dragging = React.useRef(null);
  const destinations = React.useRef(new Map());
  const handles = React.useRef(new Map());
  const pending = React.useRef(null);
  React.useLayoutEffect(() => {
    const request = pending.current;
    if (!request || request.order.length !== cards.length || !request.order.every((entry, index) => entry.id === cards[index]?.id && entry.columnId === cards[index]?.columnId)) return;
    pending.current = null;
    setAnnouncement(request.message);
    if (request.focus === "destination") destinations.current.get(request.id)?.focus();else if (request.focus === "handle") handles.current.get(request.id)?.focus();
  }, [cards]);
  const commit = (next, id, message, focus) => {
    pending.current = {
      id,
      order: next.map(card => ({
        id: card.id,
        columnId: card.columnId
      })),
      message,
      focus
    };
    if (value === undefined) setInner(next);
    onValueChange?.(next);
  };
  const reorder = (id, destination) => {
    const item = cards.find(card => card.id === id);
    if (!item || item.disabled) return;
    const items = cards.filter(card => card.columnId === item.columnId);
    const source = items.findIndex(card => card.id === id);
    if (destination < 0 || destination >= items.length || source === destination) return;
    const ordered = [...items];
    ordered.splice(source, 1);
    ordered.splice(destination, 0, item);
    let at = 0;
    commit(cards.map(card => card.columnId === item.columnId ? ordered[at++] : card), id, `${item.title}, position ${destination + 1} of ${items.length}`, "handle");
  };
  const move = (id, columnId, before) => {
    const item = cards.find(card => card.id === id);
    const destination = columns.find(column => column.id === columnId);
    if (!item || item.disabled || !destination || item.columnId === columnId) return;
    const remaining = cards.filter(card => card.id !== id);
    const target = before == null ? undefined : remaining.filter(card => card.columnId === columnId)[before];
    const insertAt = target ? remaining.findIndex(card => card.id === target.id) : remaining.length;
    remaining.splice(insertAt, 0, {
      ...item,
      columnId
    });
    const focus = document.activeElement === destinations.current.get(id) ? "destination" : document.activeElement === handles.current.get(id) ? "handle" : null;
    commit(remaining, id, `${item.title} moved to ${destination.label}.`, focus);
  };
  const root = rs(["rs-kanban-board", className], styles.root);
  const columnGrid = rs(["rs-kanban-columns"], styles.columns);
  const columnStyle = rs(["rs-kanban-column"], styles.column);
  const heading = rs(["rs-kanban-heading"], styles.heading);
  const list = rs(["rs-kanban-list"], styles.list);
  const cardStyle = rs(["rs-kanban-card"], styles.card);
  const header = rs(["rs-kanban-card-header"], styles.header);
  const title = rs(["rs-kanban-title"], styles.title);
  const detail = rs(["rs-kanban-detail"], styles.detail);
  const controls = rs(["rs-kanban-controls"], styles.controls);
  const destination = rs(["rs-kanban-destination"], styles.destination);
  const reorderStyle = rs(["rs-kanban-reorder"], styles.reorder);
  const action = rs(["rs-kanban-action"], styles.action);
  const actionStyle = {
    ...action.style,
    width: vlak.hit,
    padding: 0
  };
  const status = rs(["rs-kanban-status"], styles.status);
  const help = rs(["rs-kanban-help"], styles.help);
  const id = React.useId();
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
    children: [/*#__PURE__*/_jsx("span", {
      ...help,
      id: `${id}-help`,
      children: "Use the move buttons, or focus a card handle and press Alt with Arrow up or Arrow down. Scroll horizontally to see more columns."
    }), /*#__PURE__*/_jsx("div", {
      ...columnGrid,
      role: "group",
      "aria-label": `${label} columns`,
      tabIndex: 0,
      children: columns.map((column, columnIndex) => {
        const items = cards.filter(card => card.columnId === column.id);
        const titleId = `${id}-${columnIndex}`;
        return /*#__PURE__*/_jsxs("section", {
          ...columnStyle,
          "aria-labelledby": titleId,
          onDragOver: event => {
            if (dragging.current) event.preventDefault();
          },
          onDrop: event => {
            if (dragging.current) {
              event.preventDefault();
              move(dragging.current, column.id);
              dragging.current = null;
            }
          },
          children: [/*#__PURE__*/_jsxs("h3", {
            ...heading,
            id: titleId,
            children: [column.label, /*#__PURE__*/_jsx("span", {
              children: items.length
            })]
          }), /*#__PURE__*/_jsx("ol", {
            ...list,
            "aria-label": `${column.label} cards`,
            children: items.map((card, index) => /*#__PURE__*/_jsxs("li", {
              ...cardStyle,
              onDragOver: event => {
                if (dragging.current) event.preventDefault();
              },
              onDrop: event => {
                const source = cards.find(item => item.id === dragging.current);
                if (!source) return;
                event.preventDefault();
                event.stopPropagation();
                if (source.columnId === column.id) reorder(source.id, index);else move(source.id, column.id, index);
                dragging.current = null;
              },
              children: [/*#__PURE__*/_jsxs("div", {
                ...header,
                children: [/*#__PURE__*/_jsx("span", {
                  ...title,
                  children: card.title
                }), /*#__PURE__*/_jsx(Button, {
                  ...action,
                  style: actionStyle,
                  ref: element => {
                    if (element) handles.current.set(card.id, element);else handles.current.delete(card.id);
                  },
                  variant: "ghost",
                  disabled: card.disabled,
                  draggable: !card.disabled,
                  "aria-label": `Move ${card.title}`,
                  "aria-describedby": `${id}-help`,
                  onDragStart: event => {
                    dragging.current = card.id;
                    event.dataTransfer.effectAllowed = "move";
                    event.dataTransfer.setData("text/plain", card.id);
                  },
                  onDragEnd: () => {
                    dragging.current = null;
                  },
                  onKeyDown: event => {
                    if (event.altKey && (event.key === "ArrowUp" || event.key === "ArrowDown")) {
                      event.preventDefault();
                      reorder(card.id, index + (event.key === "ArrowUp" ? -1 : 1));
                    }
                  },
                  children: /*#__PURE__*/_jsx(Icon, {
                    name: "grip"
                  })
                })]
              }), card.description != null && /*#__PURE__*/_jsx("div", {
                ...detail,
                children: card.description
              }), /*#__PURE__*/_jsxs("div", {
                ...controls,
                children: [/*#__PURE__*/_jsx("div", {
                  ...destination,
                  children: /*#__PURE__*/_jsx(NativeSelect, {
                    ref: element => {
                      if (element) destinations.current.set(card.id, element);else destinations.current.delete(card.id);
                    },
                    "aria-label": `Move ${card.title} to`,
                    value: card.columnId,
                    disabled: card.disabled,
                    onChange: event => move(card.id, event.currentTarget.value),
                    children: columns.map(option => /*#__PURE__*/_jsx("option", {
                      value: option.id,
                      children: option.label
                    }, option.id))
                  })
                }), /*#__PURE__*/_jsxs("div", {
                  ...reorderStyle,
                  children: [/*#__PURE__*/_jsx(Button, {
                    ...action,
                    style: actionStyle,
                    variant: "ghost",
                    disabled: card.disabled || index === 0,
                    "aria-label": `Move ${card.title} up`,
                    onClick: () => reorder(card.id, index - 1),
                    children: /*#__PURE__*/_jsx(Icon, {
                      name: "arrow-up"
                    })
                  }), /*#__PURE__*/_jsx(Button, {
                    ...action,
                    style: actionStyle,
                    variant: "ghost",
                    disabled: card.disabled || index === items.length - 1,
                    "aria-label": `Move ${card.title} down`,
                    onClick: () => reorder(card.id, index + 1),
                    children: /*#__PURE__*/_jsx(Icon, {
                      name: "arrow-down"
                    })
                  })]
                })]
              })]
            }, card.id))
          }), items.length === 0 && /*#__PURE__*/_jsx("p", {
            ...status,
            children: "No cards."
          })]
        }, column.id);
      })
    }), /*#__PURE__*/_jsx("p", {
      ...status,
      role: "status",
      children: announcement
    })]
  });
});
//# sourceMappingURL=kanban-board.js.map
