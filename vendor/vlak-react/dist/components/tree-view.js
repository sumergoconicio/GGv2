"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { Icon } from "./icon.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    kH6xsr: "x3ct3a4",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    kMwMTN: "x1gney9c",
    k7Eaqz: "xeuugli",
    kzqmXN: "xh8yej3",
    kB7OPa: "x9f619",
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  group: {
    kH6xsr: "x3ct3a4",
    kogj98: "x1ghz6dp",
    kZCmMZ: "x8945me",
    k7Eaqz: "xeuugli",
    kB7OPa: "x9f619",
    $$css: true
  },
  item: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kOIVth: "xvh977a",
    kAzted: "x1wszdd",
    k7Eaqz: "xtp0tkc",
    kzqmXN: "xh8yej3",
    kg3NbH: "xllzysa",
    kB7OPa: "x9f619",
    kaIpWk: "xkrxur",
    kkrTdU: "x1ypdohk",
    kjBf7l: "xqbrbdq",
    kInvED: "x2ssjo2",
    kPJHz1: "x784prv",
    k7shQP: "x9v5kkp",
    $$css: true
  },
  label: {
    kUk6DE: "x12lumcd",
    k7Eaqz: "xeuugli",
    kVQacm: "xb3r6kr",
    kg5iWk: "xlyipyv",
    khDVqt: "xuxw1ft",
    $$css: true
  },
  icon: {
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kzqmXN: "xcdlrvm",
    kZKoxP: "x1l36t39",
    kmuXW: "x2lah0s",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  selected: {
    kWkggS: "x6583kg",
    k63SB2: "x1s688f",
    $$css: true
  },
  disabled: {
    kMwMTN: "x1ixqp2s",
    kkrTdU: "x1h6gzvc",
    $$css: true
  },
  spacer: {
    kzqmXN: "x1uyfxw7",
    kmuXW: "x2lah0s",
    $$css: true
  },
  disclosure: {
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kzqmXN: "x1uyfxw7",
    kZKoxP: "x9ve8r1",
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kmuXW: "x2lah0s",
    kB7OPa: "x9f619",
    kMzoRj: "xc342km",
    kaIpWk: "xkrxur",
    kWkggS: "xjbqb8w",
    kMwMTN: "x1gney9c",
    kkrTdU: "x1ypdohk",
    kmVPX3: "x1717udv",
    $$css: true
  }
};
function flatten(nodes, open, parent) {
  return nodes.flatMap(node => [{
    node,
    parent
  }, ...(node.children && open.has(node.id) ? flatten(node.children, open, node.id) : [])]);
}

/** Single selection and APG-style roving focus through a hierarchical collection. */
export const TreeView = /*#__PURE__*/React.forwardRef(function TreeView({
  nodes,
  label,
  value,
  defaultValue,
  onValueChange,
  expanded,
  defaultExpanded = [],
  onExpandedChange,
  renderLabel,
  className,
  style,
  onKeyDown,
  ...props
}, ref) {
  const [inner, setInner] = React.useState(defaultValue);
  const [innerExpanded, setInnerExpanded] = React.useState(defaultExpanded);
  const [focused, setFocused] = React.useState(defaultValue);
  const current = value ?? inner;
  const open = new Set(expanded ?? innerExpanded);
  const visible = flatten(nodes, open);
  const active = visible.some(item => item.node.id === focused) ? focused : visible[0]?.node.id;
  const elements = React.useRef(new Map());
  const typeAhead = React.useRef({
    text: "",
    time: 0
  });
  const treeId = React.useId();
  const expand = (id, state) => {
    const next = new Set(open);
    if (state) next.add(id);else next.delete(id);
    const ids = [...next];
    if (expanded === undefined) setInnerExpanded(ids);
    onExpandedChange?.(ids);
  };
  const select = node => {
    if (node.disabled) return;
    if (value === undefined) setInner(node.id);
    onValueChange?.(node.id);
  };
  const focus = id => {
    if (!id) return;
    setFocused(id);
    elements.current.get(id)?.focus();
  };
  const root = rs(["rs-tree-view", className], styles.root);
  const group = rs(["rs-tree-view-group"], styles.group);
  const spacer = rs(["rs-tree-view-spacer"], styles.spacer);
  const disclosure = rs(["rs-tree-view-disclosure"], styles.disclosure);
  const text = rs(["rs-tree-view-label"], styles.label);
  const renderNodes = (items, level) => items.map((node, index) => {
    const selected = node.id === current;
    const disabled = Boolean(node.disabled);
    const row = rs(["rs-tree-view-item", selected && "rs-tree-view-selected", disabled && "rs-tree-view-disabled"], styles.item, selected && styles.selected, disabled && styles.disabled);
    return /*#__PURE__*/_jsxs("li", {
      role: "none",
      children: [/*#__PURE__*/_jsxs("div", {
        ...row,
        ref: element => {
          if (element) elements.current.set(node.id, element);else elements.current.delete(node.id);
        },
        role: "treeitem",
        "aria-label": node.label,
        "aria-owns": node.children?.length && open.has(node.id) ? `${treeId}-${encodeURIComponent(node.id)}` : undefined,
        "aria-level": level,
        "aria-posinset": index + 1,
        "aria-setsize": items.length,
        "aria-selected": selected,
        "aria-disabled": disabled || undefined,
        "aria-expanded": node.children?.length ? open.has(node.id) : undefined,
        tabIndex: node.id === active ? 0 : -1,
        onFocus: () => setFocused(node.id),
        onClick: () => {
          focus(node.id);
          select(node);
        },
        onDoubleClick: () => {
          if (!disabled && node.children?.length) expand(node.id, !open.has(node.id));
        },
        onKeyDown: event => {
          const at = visible.findIndex(item => item.node.id === node.id);
          let next;
          if (event.key === "ArrowDown") next = visible[Math.min(visible.length - 1, at + 1)]?.node.id;else if (event.key === "ArrowUp") next = visible[Math.max(0, at - 1)]?.node.id;else if (event.key === "Home") next = visible[0]?.node.id;else if (event.key === "End") next = visible.at(-1)?.node.id;else if (event.key === "ArrowRight") {
            if (node.children?.length) {
              if (!open.has(node.id)) expand(node.id, true);else next = node.children[0]?.id;
            }
          } else if (event.key === "ArrowLeft") {
            if (node.children?.length && open.has(node.id)) expand(node.id, false);else next = visible[at]?.parent;
          } else if (event.key === "Enter" || event.key === " ") select(node);else if (event.key.length === 1 && !event.metaKey && !event.ctrlKey && !event.altKey) {
            const now = Date.now();
            typeAhead.current.text = now - typeAhead.current.time < 700 ? typeAhead.current.text + event.key.toLocaleLowerCase() : event.key.toLocaleLowerCase();
            typeAhead.current.time = now;
            const order = [...visible.slice(at + 1), ...visible.slice(0, at + 1)];
            next = order.find(item => item.node.label.toLocaleLowerCase().startsWith(typeAhead.current.text))?.node.id;
          } else return;
          event.preventDefault();
          event.stopPropagation();
          if (next) focus(next);
        },
        children: [node.children?.length ? /*#__PURE__*/_jsx("button", {
          ...disclosure,
          type: "button",
          tabIndex: -1,
          disabled: disabled,
          "aria-label": `${open.has(node.id) ? "Collapse" : "Expand"} ${node.label}`,
          onClick: event => {
            event.stopPropagation();
            focus(node.id);
            expand(node.id, !open.has(node.id));
          },
          children: /*#__PURE__*/_jsx(Icon, {
            name: "chevron-right",
            rotate: open.has(node.id) ? 90 : undefined
          })
        }) : /*#__PURE__*/_jsx("span", {
          ...spacer,
          "aria-hidden": "true"
        }), node.icon && /*#__PURE__*/_jsx("span", {
          ...rs(["rs-tree-view-icon"], styles.icon),
          "aria-hidden": "true",
          children: node.icon
        }), /*#__PURE__*/_jsx("span", {
          ...text,
          title: node.label,
          children: renderLabel ? renderLabel(node, {
            selected,
            expanded: open.has(node.id)
          }) : node.label
        })]
      }), node.children?.length && open.has(node.id) ? /*#__PURE__*/_jsx("ul", {
        ...group,
        role: "group",
        id: `${treeId}-${encodeURIComponent(node.id)}`,
        children: renderNodes(node.children, level + 1)
      }) : null]
    }, node.id);
  });
  // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: The APG tree pattern explicitly uses a ul with role=tree and roving treeitems.
  return /*#__PURE__*/_jsx("ul", {
    ref: ref,
    role: "tree",
    "aria-label": label,
    ...props,
    onKeyDown: onKeyDown,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: renderNodes(nodes, 1)
  });
});
//# sourceMappingURL=tree-view.js.map
