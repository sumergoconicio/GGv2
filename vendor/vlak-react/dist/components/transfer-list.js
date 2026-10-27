"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useMergedRefs } from "../merge-refs.js";
import { useInputValue } from "../use-input-value.js";
import { Checkbox } from "./checkbox.js";
import { Button } from "./button.js";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
const styles = {
  root: {
    kMzoRj: "xc342km",
    kmVPX3: "x1717udv",
    kogj98: "x1ghz6dp",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  legend: {
    kGuDYH: "x4ro2ui",
    kMwMTN: "x1ixqp2s",
    k1K539: "x1gr9t9r",
    kmVPX3: "x1717udv",
    $$css: true
  },
  columns: {
    k1xSpc: "xrvj5dj",
    kumcoG: "x37c5m6 x1nk3w99",
    kOIVth: "x8233eu",
    kGNEyG: "x6s0dn4",
    $$css: true
  },
  panel: {
    k7Eaqz: "xeuugli",
    kogj98: "x1ghz6dp",
    kmVPX3: "x79iv2k",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd",
    kaIpWk: "xkrxur",
    kSGwAc: "xkh2ocl",
    $$css: true
  },
  heading: {
    kg3NbH: "xllzysa",
    kGuDYH: "x1jq7itm",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  list: {
    k1xSpc: "xrvj5dj",
    kOIVth: "xvh977a",
    kAzted: "x1iisefq",
    kfiyM8: "x10ukxgv",
    kskxy: "xfegkp8",
    kORKVm: "x1odjw0f",
    $$css: true
  },
  item: {
    kAzted: "x1wszdd",
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kg3NbH: "xllzysa",
    $$css: true
  },
  actions: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    $$css: true
  },
  action: {
    kzqmXN: "x14atkfc",
    $$css: true
  },
  empty: {
    kogj98: "x1ghz6dp",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x1jq7itm",
    $$css: true
  },
  status: {
    kogj98: "xms0q6y",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x4ro2ui",
    $$css: true
  }
};
export const TransferList = /*#__PURE__*/React.forwardRef(function TransferList({
  options,
  value,
  defaultValue = [],
  onValueChange,
  label = "Assign options",
  availableLabel = "Available",
  selectedLabel = "Selected",
  addLabel = "Add selected",
  removeLabel = "Remove selected",
  emptyLabel = "No options",
  name,
  disabled,
  className,
  style,
  ...props
}, ref) {
  const [current, setValue, fieldRef] = useInputValue(value, defaultValue, onValueChange, () => setMarked([]));
  const mergedRef = useMergedRefs(ref, fieldRef);
  const [marked, setMarked] = React.useState([]);
  const available = options.filter(option => !current.includes(option.value));
  const selected = current.map(entry => options.find(option => option.value === entry) ?? {
    value: entry,
    label: `${entry} (unavailable)`
  });
  const chosenAvailable = available.filter(option => marked.includes(option.value) && !option.disabled);
  const chosenSelected = selected.filter(option => marked.includes(option.value) && !option.disabled);
  const root = rs(["rs-transfer-list", className], styles.root);
  const legend = rs(["rs-transfer-list-legend"], styles.legend);
  const columns = rs(["rs-transfer-list-columns"], styles.columns);
  const panel = rs(["rs-transfer-list-panel"], styles.panel);
  const heading = rs(["rs-transfer-list-heading"], styles.heading);
  const list = rs(["rs-transfer-list-options"], styles.list);
  const item = rs(["rs-transfer-list-item"], styles.item);
  const actions = rs(["rs-transfer-list-actions"], styles.actions);
  const action = rs(["rs-transfer-list-action"], styles.action);
  const empty = rs(["rs-transfer-list-empty"], styles.empty);
  const status = rs(["rs-transfer-list-status"], styles.status);
  const renderPanel = (title, entries) => /*#__PURE__*/_jsxs("fieldset", {
    className: panel.className,
    style: panel.style,
    children: [/*#__PURE__*/_jsxs("legend", {
      className: heading.className,
      style: heading.style,
      children: [title, " (", entries.length, ")"]
    }), /*#__PURE__*/_jsxs("div", {
      className: list.className,
      style: list.style,
      children: [entries.map(option => /*#__PURE__*/_jsx("div", {
        className: item.className,
        style: item.style,
        children: /*#__PURE__*/_jsx(Checkbox, {
          label: option.label,
          disabled: disabled || option.disabled,
          checked: marked.includes(option.value),
          onChange: event => {
            const checked = event.currentTarget.checked;
            setMarked(previous => checked ? [...previous, option.value] : previous.filter(entry => entry !== option.value));
          }
        })
      }, option.value)), !entries.length && /*#__PURE__*/_jsx("p", {
        className: empty.className,
        style: empty.style,
        children: emptyLabel
      })]
    })]
  });
  return /*#__PURE__*/_jsxs("fieldset", {
    ...props,
    ref: mergedRef,
    disabled: disabled,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("legend", {
      className: legend.className,
      style: legend.style,
      children: label
    }), /*#__PURE__*/_jsxs("div", {
      className: columns.className,
      style: columns.style,
      children: [renderPanel(availableLabel, available), /*#__PURE__*/_jsxs("div", {
        className: actions.className,
        style: actions.style,
        children: [/*#__PURE__*/_jsx(Button, {
          variant: "ghost",
          disabled: disabled || !chosenAvailable.length,
          className: action.className,
          style: action.style,
          onClick: () => {
            setValue([...current, ...chosenAvailable.map(option => option.value)]);
            setMarked([]);
          },
          children: addLabel
        }), /*#__PURE__*/_jsx(Button, {
          variant: "ghost",
          disabled: disabled || !chosenSelected.length,
          className: action.className,
          style: action.style,
          onClick: () => {
            setValue(current.filter(entry => !chosenSelected.some(option => option.value === entry)));
            setMarked([]);
          },
          children: removeLabel
        })]
      }), renderPanel(selectedLabel, selected)]
    }), /*#__PURE__*/_jsxs("p", {
      role: "status",
      className: status.className,
      style: status.style,
      children: [selected.length, " selected"]
    }), name && current.map(entry => /*#__PURE__*/_jsx("input", {
      type: "hidden",
      name: name,
      value: entry,
      disabled: disabled
    }, entry))]
  });
});
//# sourceMappingURL=transfer-list.js.map
