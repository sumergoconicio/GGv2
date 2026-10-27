"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import { rs } from "../rs.js";
import { useMergedRefs } from "../merge-refs.js";
import { useInputValue } from "../use-input-value.js";
import { Input } from "./input.js";
import { jsx as _jsx } from "react/jsx-runtime";
const styles = {
  input: {
    k7Eaqz: "xeuugli",
    kcqcaj: "xss6m8b",
    kQNsl9: "x14xwphu",
    $$css: true
  }
};

/** The platform time editor, including its locale, keyboard and step validation. */
export const TimeField = /*#__PURE__*/React.forwardRef(function TimeField({
  value,
  defaultValue = "",
  onValueChange,
  className,
  style,
  ...props
}, ref) {
  const [current, setValue, inputRef] = useInputValue(value, defaultValue, onValueChange);
  const mergedRef = useMergedRefs(ref, inputRef);
  const sx = rs(["rs-time-field", className], styles.input);
  return /*#__PURE__*/_jsx(Input, {
    ...props,
    ref: mergedRef,
    type: "time",
    value: current,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    },
    onChange: event => setValue(event.currentTarget.value)
  });
});
//# sourceMappingURL=time-field.js.map
