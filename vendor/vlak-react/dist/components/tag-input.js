"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useMergedRefs } from "../merge-refs.js";
import { useInputValue } from "../use-input-value.js";
import { useFieldControl } from "./field.js";
import { Input } from "./input.js";
import { Button } from "./button.js";
import { Icon } from "./icon.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  label: {
    kGuDYH: "x4ro2ui",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  list: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    kmVPX3: "x1717udv",
    kogj98: "x1ghz6dp",
    kB88ic: "xe8uvvx",
    $$css: true
  },
  tag: {
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kOIVth: "xvh977a",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd",
    kaIpWk: "xkrxur",
    k8WAf4: "x1o5vn8x",
    kZCmMZ: "x1m83qfk",
    kwRFfy: "x1do52mm",
    kGuDYH: "x1jq7itm",
    $$css: true
  },
  remove: {
    kB7OPa: "x9f619",
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kmuXW: "x2lah0s",
    kzqmXN: "x1uyfxw7",
    k7Eaqz: "xtp0tkc",
    kZKoxP: "x9ve8r1",
    kAzted: "x1wszdd",
    kmVPX3: "x1717udv",
    kogj98: "x1ghz6dp",
    kysU6D: "xjyslct",
    kMv6JI: "xjb2p0i",
    kGuDYH: "x1qlqyl8",
    kLWn49: "xo5v014",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kaIpWk: "xkrxur",
    kVAM5u: "x9r1u3d xaxtmmi xoxf62l",
    kWkggS: "xjbqb8w xlt1z8a x1oqui1x x1awx03v xqau7aa x14oswdw",
    kMwMTN: "x1gney9c x9dgriy x2ptlbc xybgkc0",
    kkrTdU: "x1ypdohk x1s07b3s",
    kSiTet: "x1hc1fzr x1lfpgzf x1nyumiu x3dy84y",
    kmkexE: "x1487y47 xrozb4q",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "xqbrbdq x17te1i1",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  row: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    kGNEyG: "x7a106z",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  input: {
    kUk6DE: "xck25dg",
    k7Eaqz: "xtp0tkc",
    $$css: true
  },
  add: {
    kzqmXN: "x14atkfc",
    kmuXW: "x2lah0s",
    $$css: true
  },
  feedback: {
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x4ro2ui",
    kogj98: "x1ghz6dp",
    kLWn49: "xfrs9s4",
    $$css: true
  }
};
export const TagInput = /*#__PURE__*/React.forwardRef(function TagInput({
  value,
  defaultValue = [],
  onValueChange,
  label = "Tags",
  name,
  disabled,
  placeholder = "Add a tag",
  maxTags,
  validate,
  addLabel = "Add",
  removeLabel = tag => `Remove ${tag}`,
  className,
  style,
  ...props
}, ref) {
  const [current, setValue, rootRef] = useInputValue(value, defaultValue, onValueChange, () => {
    setDraft("");
    setError("");
  });
  const [draft, setDraft] = React.useState("");
  const [error, setError] = React.useState("");
  const inputRef = React.useRef(null);
  const mergedRef = useMergedRefs(ref, inputRef);
  const removeRefs = React.useRef([]);
  const id = React.useId();
  const field = useFieldControl(props);
  const add = (text = draft) => {
    const candidates = text.split(/[,\n\r]+/).map(tag => tag.trim()).filter(Boolean);
    if (!candidates.length) return;
    const next = [...new Set([...current, ...candidates])];
    const invalid = candidates.map(tag => validate?.(tag)).find(Boolean);
    if (invalid || maxTags != null && next.length > maxTags) {
      setError(invalid ?? `Use at most ${maxTags} ${maxTags === 1 ? "tag" : "tags"}`);
      return;
    }
    setValue(next);
    setDraft("");
    setError("");
    inputRef.current?.focus();
  };
  const root = rs(["rs-tag-input", className], styles.root);
  const lab = rs(["rs-tag-input-label"], styles.label);
  const list = rs(["rs-tag-input-list"], styles.list);
  const tag = rs(["rs-tag-input-tag"], styles.tag);
  const remove = rs(["rs-tag-input-remove"], styles.remove);
  const row = rs(["rs-tag-input-row"], styles.row);
  const input = rs(["rs-tag-input-input"], styles.input);
  const action = rs(["rs-tag-input-add"], styles.add);
  const feedback = rs(["rs-tag-input-feedback"], styles.feedback);
  return /*#__PURE__*/_jsxs("div", {
    ...props,
    ref: rootRef,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("label", {
      htmlFor: id,
      className: lab.className,
      style: lab.style,
      children: label
    }), current.length > 0 && /*#__PURE__*/_jsx("ul", {
      "aria-label": "Current tags",
      className: list.className,
      style: list.style,
      children: current.map((item, index) => /*#__PURE__*/_jsxs("li", {
        className: tag.className,
        style: tag.style,
        children: [/*#__PURE__*/_jsx("span", {
          children: item
        }), /*#__PURE__*/_jsx("button", {
          type: "button",
          ref: node => {
            removeRefs.current[index] = node;
          },
          className: remove.className,
          style: remove.style,
          disabled: disabled,
          "aria-label": removeLabel(item),
          onClick: () => {
            setValue(current.filter(entry => entry !== item));
            inputRef.current?.focus();
          },
          children: /*#__PURE__*/_jsx(Icon, {
            name: "close",
            size: 16
          })
        })]
      }, item))
    }), /*#__PURE__*/_jsxs("div", {
      className: row.className,
      style: row.style,
      children: [/*#__PURE__*/_jsx(Input, {
        ref: mergedRef,
        id: id,
        plain: true,
        value: draft,
        disabled: disabled,
        placeholder: placeholder,
        className: input.className,
        style: input.style,
        "aria-describedby": [field["aria-describedby"], `${id}-hint`, error ? `${id}-error` : null].filter(Boolean).join(" "),
        "aria-invalid": error ? true : field["aria-invalid"],
        onChange: event => {
          setDraft(event.currentTarget.value);
          setError("");
        },
        onKeyDown: event => {
          if (event.nativeEvent.isComposing) return;
          if (event.key === "Enter" || event.key === ",") {
            event.preventDefault();
            add();
          }
          if (event.key === "Escape") {
            setDraft("");
            setError("");
          }
          if (event.key === "Backspace" && !draft) {
            event.preventDefault();
            removeRefs.current[current.length - 1]?.focus();
          }
        },
        onPaste: event => {
          const text = event.clipboardData.getData("text");
          if (/[,\n\r]/.test(text)) {
            event.preventDefault();
            const start = event.currentTarget.selectionStart ?? draft.length;
            const end = event.currentTarget.selectionEnd ?? start;
            add(draft.slice(0, start) + text + draft.slice(end));
          }
        }
      }), /*#__PURE__*/_jsx(Button, {
        variant: "ghost",
        disabled: disabled || !draft.trim(),
        className: action.className,
        style: action.style,
        onClick: () => add(),
        children: addLabel
      })]
    }), /*#__PURE__*/_jsxs("p", {
      id: `${id}-hint`,
      className: feedback.className,
      style: feedback.style,
      children: ["Press Enter or comma to add a tag", maxTags != null ? `, up to ${maxTags}` : ""]
    }), error && /*#__PURE__*/_jsx("p", {
      id: `${id}-error`,
      role: "alert",
      className: feedback.className,
      style: feedback.style,
      children: error
    }), name && current.map(item => /*#__PURE__*/_jsx("input", {
      type: "hidden",
      name: name,
      value: item,
      disabled: disabled
    }, item))]
  });
});
//# sourceMappingURL=tag-input.js.map
