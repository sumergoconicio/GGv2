"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useInputValue } from "../use-input-value.js";
import { useMergedRefs } from "../merge-refs.js";
import { Button } from "./button.js";
import { Checkbox } from "./checkbox.js";
import { Radio, RadioGroup } from "./radio.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    k7Eaqz: "xeuugli",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    kMzoRj: "xc342km",
    kMwMTN: "x1gney9c",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  legend: {
    kmVPX3: "x1717udv",
    k1K539: "x1gr9t9r",
    k63SB2: "x1s688f",
    kGuDYH: "xkpwil5",
    $$css: true
  },
  copy: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    kHjlTd: "xj0a0fe",
    ks0D6T: "x1qp14f0",
    $$css: true
  },
  list: {
    kH6xsr: "x3ct3a4",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  row: {
    k8WAf4: "xgepmj6",
    kg3NbH: "x1ryrjj2",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    k7Eaqz: "xeuugli",
    kPJHz1: "x784prv",
    k7shQP: "x9v5kkp",
    kZs9gx: "x14tvtkk",
    kiEn40: "x1bqaal",
    $$css: true
  },
  selected: {
    kWkggS: "x1nzd1wa x18t4had",
    $$css: true
  },
  head: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kjj79g: "x1qughib",
    kwnvtZ: "x1a02dak",
    kOIVth: "x1tmakyn",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  identity: {
    k1xSpc: "xrvj5dj",
    k7Eaqz: "xeuugli",
    kHjlTd: "xj0a0fe",
    kGuDYH: "xkpwil5",
    $$css: true
  },
  coordinateList: {
    k1xSpc: "xrvj5dj",
    kumcoG: "x185a7wo",
    kOIVth: "x1tmakyn",
    kqGvvJ: "x1k89h87",
    kUOVxO: "xrxpjvj",
    $$css: true
  },
  coordinate: {
    k7Eaqz: "xeuugli",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  axis: {
    kogj98: "x1ghz6dp",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "xboafo0",
    $$css: true
  },
  number: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xkpwil5",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    keoZOQ: "xhj8ucd",
    $$css: true
  },
  action: {
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kzqmXN: "x14atkfc",
    $$css: true
  },
  status: {
    kVAEAm: "x10l6tqk",
    kzqmXN: "x1i1rx1s",
    kZKoxP: "xjm9jq1",
    kVQacm: "xb3r6kr",
    kz4h6p: "x1hyvwdk",
    khDVqt: "xuxw1ft",
    $$css: true
  }
};
const axes = ["x", "y", "z"];
const hasUnit = unit => typeof unit === "string" && unit.trim().length > 0;
function coordinate(value) {
  if (value == null) return "Not supplied";
  if (!Number.isFinite(value)) return "Unavailable";
  return Object.is(value, -0) ? "-0" : String(value);
}
/** Supplied stage coordinates and controlled plan edits. No stage motion or coordinate conversion occurs. */
export const StagePositionList = /*#__PURE__*/React.forwardRef(function StagePositionList({
  label,
  coordinateFrame,
  units,
  positions,
  value = null,
  onValueChange,
  onEnabledChange,
  onOrderChange,
  onRemove,
  description,
  readOnly = false,
  disabled,
  name,
  form,
  className,
  style,
  children,
  "aria-describedby": ariaDescribedBy,
  ...props
}, ref) {
  const [, refresh] = React.useReducer(revision => revision + 1, 0);
  const [,, fieldRef] = useInputValue(positions, positions, undefined, refresh);
  const mergedRef = useMergedRefs(ref, fieldRef);
  const pendingFocus = React.useRef(null);
  const rows = React.useRef(new Map());
  const radios = React.useRef(new Map());
  const [announcement, setAnnouncement] = React.useState("");
  const id = React.useId();
  const valid = positions.length <= 128 && positions.every(position => typeof position.id === "string" && position.id.trim()) && new Set(positions.map(position => position.id)).size === positions.length;
  const selected = valid && value != null && positions.some(position => position.id === value);
  const frameLabel = coordinateFrame?.id.trim() && coordinateFrame.label.trim() ? `${coordinateFrame.label} (${coordinateFrame.id})` : "Not supplied";
  const describedBy = [ariaDescribedBy, `${id}-frame`, `${id}-selection`, description != null && `${id}-description`].filter(Boolean).join(" ");
  React.useLayoutEffect(() => {
    const request = pendingFocus.current;
    if (!request || !valid) return;
    const index = positions.findIndex(position => position.id === request.id);
    const accepted = request.kind === "remove" ? index < 0 : request.order.length === positions.length && request.order.every((key, i) => positions[i]?.id === key);
    if (!accepted) return;
    pendingFocus.current = null;
    setAnnouncement(request.kind === "remove" ? `${request.name} (${request.id}) removed; ${positions.length} positions remain` : `${request.name} (${request.id}), position ${index + 1} of ${positions.length}`);
    const active = request.control.ownerDocument.activeElement;
    if (!request.ownedFocus || active !== request.control && active !== request.control.ownerDocument.body) return;
    if (request.kind === "order" && request.control.isConnected && !request.control.disabled) return;
    const targetId = request.kind === "order" ? request.id : [request.next, request.previous, positions[0]?.id].find(key => key != null && rows.current.has(key));
    const radio = targetId == null ? undefined : radios.current.get(targetId);
    const target = radio && !radio.disabled ? radio : targetId == null ? fieldRef.current : rows.current.get(targetId);
    target?.focus({
      preventScroll: true
    });
  }, [positions, valid, fieldRef]);
  function requestOrder(index, delta, control) {
    const position = positions[index];
    if (!position || disabled || readOnly || position.pending || positions[index + delta]?.pending || !positions[index + delta]) return;
    const order = positions.map(entry => entry.id);
    [order[index], order[index + delta]] = [order[index + delta], order[index]];
    pendingFocus.current = {
      kind: "order",
      id: position.id,
      name: position.name || "Unnamed position",
      order,
      control,
      ownedFocus: control.ownerDocument.activeElement === control
    };
    onOrderChange?.(order);
  }
  function requestRemoval(index, control) {
    const position = positions[index];
    if (!position || disabled || readOnly || position.pending) return;
    pendingFocus.current = {
      kind: "remove",
      id: position.id,
      name: position.name || "Unnamed position",
      order: [],
      control,
      ownedFocus: control.ownerDocument.activeElement === control,
      next: positions[index + 1]?.id,
      previous: positions[index - 1]?.id
    };
    onRemove?.(position.id);
  }
  const root = rs(["rs-stage-position-list", className], styles.root);
  const legend = rs(["rs-stage-position-list-legend"], styles.legend);
  const copy = rs(["rs-stage-position-list-copy"], styles.copy);
  const list = rs(["rs-stage-position-list-items"], styles.list);
  const head = rs(["rs-stage-position-list-head"], styles.head);
  const identity = rs(["rs-stage-position-list-identity"], styles.identity);
  const coordinateList = rs(["rs-stage-position-list-coordinates"], styles.coordinateList);
  const coordinateStyle = rs(["rs-stage-position-list-coordinate"], styles.coordinate);
  const axisStyle = rs(["rs-stage-position-list-axis"], styles.axis);
  const number = rs(["rs-stage-position-list-number"], styles.number);
  const actions = rs(["rs-stage-position-list-actions"], styles.actions);
  const action = rs(["rs-stage-position-list-action"], styles.action);
  const status = rs(["rs-stage-position-list-status"], styles.status);
  return /*#__PURE__*/_jsxs("fieldset", {
    ...props,
    ref: mergedRef,
    tabIndex: props.tabIndex ?? -1,
    disabled: disabled,
    name: name,
    form: form,
    "aria-describedby": describedBy,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("legend", {
      ...legend,
      id: `${id}-label`,
      children: label
    }), description != null && /*#__PURE__*/_jsx("div", {
      ...copy,
      id: `${id}-description`,
      children: description
    }), /*#__PURE__*/_jsxs("p", {
      ...copy,
      id: `${id}-frame`,
      children: ["Coordinate frame: ", frameLabel]
    }), /*#__PURE__*/_jsx("p", {
      ...copy,
      id: `${id}-selection`,
      children: selected ? `Selected: ${positions.find(position => position.id === value)?.name || "Unnamed position"} (${value})` : value == null ? "No position selected" : "Selected position unavailable"
    }), !valid ? /*#__PURE__*/_jsx("p", {
      ...copy,
      children: "Positions unavailable: supply unique nonempty identifiers and at most 128 positions"
    }) : positions.length === 0 ? /*#__PURE__*/_jsx("p", {
      ...copy,
      children: "No stage positions supplied"
    }) : /*#__PURE__*/_jsx(RadioGroup, {
      "aria-labelledby": `${id}-label`,
      name: name,
      value: selected ? value : "",
      onValueChange: onValueChange,
      children: /*#__PURE__*/_jsx("ol", {
        ...list,
        children: positions.map((position, index) => {
          const isSelected = selected && position.id === value;
          const row = rs(["rs-stage-position-list-row", isSelected && "rs-stage-position-list-selected"], styles.row, isSelected && styles.selected);
          const context = `${position.name || "Unnamed position"} (${position.id})`;
          const locked = disabled || readOnly || position.pending;
          return /*#__PURE__*/_jsxs("li", {
            ...row,
            ref: element => {
              if (element) rows.current.set(position.id, element);else rows.current.delete(position.id);
            },
            tabIndex: -1,
            "aria-label": context,
            children: [/*#__PURE__*/_jsxs("div", {
              ...head,
              children: [/*#__PURE__*/_jsx(Radio, {
                ref: element => {
                  if (element) radios.current.set(position.id, element);else radios.current.delete(position.id);
                },
                value: position.id,
                form: form,
                disabled: disabled || !onValueChange,
                "aria-describedby": `${id}-${index}-coordinates`,
                label: /*#__PURE__*/_jsxs("span", {
                  ...identity,
                  children: [/*#__PURE__*/_jsx("span", {
                    children: position.name || "Unnamed position"
                  }), /*#__PURE__*/_jsxs("span", {
                    ...copy,
                    children: ["(", position.id, ")"]
                  })]
                })
              }), /*#__PURE__*/_jsx(Checkbox, {
                checked: position.enabled === true,
                indeterminate: typeof position.enabled !== "boolean",
                disabled: locked || !onEnabledChange,
                form: form,
                label: "Include",
                "aria-label": `${context}: Include`,
                onCheckedChange: enabled => onEnabledChange?.(position.id, enabled)
              })]
            }), /*#__PURE__*/_jsx("dl", {
              ...coordinateList,
              id: `${id}-${index}-coordinates`,
              children: axes.map(axis => /*#__PURE__*/_jsxs("div", {
                ...coordinateStyle,
                children: [/*#__PURE__*/_jsxs("dt", {
                  ...axisStyle,
                  children: [axis.toUpperCase(), " (", hasUnit(units[axis]) ? units[axis] : "Unit not supplied", ")"]
                }), /*#__PURE__*/_jsx("dd", {
                  ...number,
                  children: coordinate(position[axis])
                })]
              }, axis))
            }), /*#__PURE__*/_jsx("p", {
              ...copy,
              children: typeof position.enabled !== "boolean" ? "Inclusion unavailable" : position.enabled ? "Included in plan" : "Excluded from plan"
            }), position.pending && /*#__PURE__*/_jsx("p", {
              ...copy,
              children: "Edit pending; supplied record remains unchanged"
            }), (onOrderChange || onRemove) && /*#__PURE__*/_jsxs("div", {
              ...actions,
              children: [onOrderChange && /*#__PURE__*/_jsxs(_Fragment, {
                children: [/*#__PURE__*/_jsx(Button, {
                  ...action,
                  type: "button",
                  variant: "ghost",
                  "aria-label": `${context}: Move up`,
                  disabled: locked || index === 0 || positions[index - 1]?.pending,
                  onClick: event => requestOrder(index, -1, event.currentTarget),
                  children: "Move up"
                }), /*#__PURE__*/_jsx(Button, {
                  ...action,
                  type: "button",
                  variant: "ghost",
                  "aria-label": `${context}: Move down`,
                  disabled: locked || index === positions.length - 1 || positions[index + 1]?.pending,
                  onClick: event => requestOrder(index, 1, event.currentTarget),
                  children: "Move down"
                })]
              }), onRemove && /*#__PURE__*/_jsx(Button, {
                ...action,
                type: "button",
                variant: "ghost",
                "aria-label": `${context}: Remove`,
                disabled: locked,
                onClick: event => requestRemoval(index, event.currentTarget),
                children: "Remove"
              })]
            })]
          }, position.id);
        })
      })
    }), name && selected && !onValueChange && /*#__PURE__*/_jsx("input", {
      type: "hidden",
      name: name,
      form: form,
      value: value
    }), /*#__PURE__*/_jsx("span", {
      ...status,
      role: "status",
      children: announcement
    }), children]
  });
});
//# sourceMappingURL=stage-position-list.js.map
