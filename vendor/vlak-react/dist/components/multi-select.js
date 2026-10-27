"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useMergedRefs } from "../merge-refs.js";
import { useInputValue } from "../use-input-value.js";
import { useFieldControl } from "./field.js";
import { Checkbox } from "./checkbox.js";
import { Input } from "./input.js";
import { Button } from "./button.js";
import { Icon } from "./icon.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    k7Eaqz: "xeuugli",
    kMzoRj: "xc342km",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    $$css: true
  },
  legend: {
    kmVPX3: "x1717udv",
    k1K539: "xhbfen4",
    kGuDYH: "x4ro2ui",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  trigger: {
    k1xSpc: "x78zum5",
    kjj79g: "x1qughib",
    kGNEyG: "x6s0dn4",
    kOIVth: "x8233eu",
    kB7OPa: "x9f619",
    kAzted: "x1wszdd",
    kmVPX3: "x2nx7ib",
    kMwMTN: "x1gney9c",
    kWkggS: "xhpg8l3",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd",
    kaIpWk: "xkrxur",
    kGuDYH: "x1jq7itm",
    kkrTdU: "x1ypdohk",
    kB88ic: "xe8uvvx",
    kGqHtl: "x1i5lizr",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  panel: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    keoZOQ: "x1mjqqkp",
    kmVPX3: "x79iv2k",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd",
    kaIpWk: "xkrxur",
    kWkggS: "xhpg8l3",
    $$css: true
  },
  options: {
    k1xSpc: "xrvj5dj",
    kOIVth: "xvh977a",
    kskxy: "x1n6c4r2",
    kORKVm: "x1odjw0f",
    kZeWKH: "xish69e",
    $$css: true
  },
  option: {
    kAzted: "x1wszdd",
    kg3NbH: "x97vtpp",
    kaIpWk: "xkrxur",
    $$css: true
  },
  selected: {
    kWkggS: "x6583kg xf7h6k7",
    kMwMTN: "x1gney9c x1pljmm8",
    $$css: true
  },
  empty: {
    kogj98: "x1ghz6dp",
    k8WAf4: "xo0yzjp",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x1jq7itm",
    $$css: true
  },
  clear: {
    kFhvOy: "x1lqcxt8",
    kzqmXN: "x14atkfc",
    $$css: true
  }
};

/** A native disclosure containing named checkboxes; selections remain visible when collapsed. */
export const MultiSelect = /*#__PURE__*/React.forwardRef(function MultiSelect({
  options,
  value,
  defaultValue = [],
  onValueChange,
  label = "Options",
  placeholder = "Select options",
  searchable = true,
  searchLabel = "Filter options",
  emptyLabel = "No matching options",
  clearLabel = "Clear selection",
  name,
  disabled,
  className,
  style,
  onKeyDown,
  ...props
}, ref) {
  const [current, setValue, fieldRef] = useInputValue(value, defaultValue, onValueChange, () => setQuery(""));
  const mergedRef = useMergedRefs(ref, fieldRef);
  const [query, setQuery] = React.useState("");
  const detailsRef = React.useRef(null);
  const summaryRef = React.useRef(null);
  const field = useFieldControl(props);
  const availableOptions = [...options, ...current.filter(item => !options.some(option => option.value === item)).map(item => ({
    value: item,
    label: `${item} (unavailable)`
  }))];
  const selected = availableOptions.filter(option => current.includes(option.value));
  const shown = availableOptions.filter(option => option.label.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
  const summary = selected.length ? `${selected.slice(0, 2).map(option => option.label).join(", ")}${selected.length > 2 ? ` +${selected.length - 2}` : ""}` : placeholder;
  const root = rs(["rs-multi-select", className], styles.root);
  const legend = rs(["rs-multi-select-legend"], styles.legend);
  const trigger = rs(["rs-multi-select-trigger"], styles.trigger);
  const panel = rs(["rs-multi-select-panel"], styles.panel);
  const list = rs(["rs-multi-select-options"], styles.options);
  const empty = rs(["rs-multi-select-empty"], styles.empty);
  const clear = rs(["rs-multi-select-clear"], styles.clear);
  return /*#__PURE__*/_jsxs("fieldset", {
    ...props,
    ref: mergedRef,
    disabled: disabled,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    "aria-describedby": field["aria-describedby"],
    "aria-invalid": field["aria-invalid"],
    onKeyDown: event => {
      onKeyDown?.(event);
      if (!event.defaultPrevented && event.key === "Escape" && detailsRef.current?.open) {
        event.preventDefault();
        detailsRef.current.open = false;
        summaryRef.current?.focus();
      }
    },
    children: [/*#__PURE__*/_jsx("legend", {
      className: legend.className,
      style: legend.style,
      children: label
    }), /*#__PURE__*/_jsxs("details", {
      ref: detailsRef,
      children: [/*#__PURE__*/_jsxs("summary", {
        ref: summaryRef,
        "aria-disabled": disabled || undefined,
        tabIndex: disabled ? -1 : undefined,
        className: trigger.className,
        style: trigger.style,
        onClick: event => {
          if (disabled) event.preventDefault();
        },
        children: [/*#__PURE__*/_jsx("span", {
          children: summary
        }), /*#__PURE__*/_jsx(Icon, {
          name: "chevron-down",
          size: 16
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: panel.className,
        style: panel.style,
        children: [searchable && /*#__PURE__*/_jsx(Input, {
          plain: true,
          "aria-label": searchLabel,
          value: query,
          onChange: event => setQuery(event.currentTarget.value),
          type: "search",
          disabled: disabled
        }), /*#__PURE__*/_jsxs("div", {
          className: list.className,
          style: list.style,
          children: [shown.map(option => {
            const checked = current.includes(option.value);
            const row = rs(["rs-multi-select-option", checked && "rs-multi-select-selected"], styles.option, checked && styles.selected);
            return /*#__PURE__*/_jsx("div", {
              className: row.className,
              style: row.style,
              children: /*#__PURE__*/_jsx(Checkbox, {
                label: option.label,
                checked: checked,
                disabled: disabled || option.disabled,
                onChange: event => setValue(event.currentTarget.checked ? [...current, option.value] : current.filter(item => item !== option.value))
              })
            }, option.value);
          }), !shown.length && /*#__PURE__*/_jsx("p", {
            role: "status",
            className: empty.className,
            style: empty.style,
            children: emptyLabel
          })]
        })]
      })]
    }), current.length > 0 && /*#__PURE__*/_jsx(Button, {
      variant: "ghost",
      disabled: disabled || selected.every(option => option.disabled),
      className: clear.className,
      style: clear.style,
      onClick: () => setValue(current.filter(item => options.find(option => option.value === item)?.disabled)),
      children: clearLabel
    }), name && current.map(item => /*#__PURE__*/_jsx("input", {
      type: "hidden",
      name: name,
      value: item,
      disabled: disabled
    }, item))]
  });
});
//# sourceMappingURL=multi-select.js.map
