import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx } from "react/jsx-runtime";
const styles = {
  form: {
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kOIVth: "x8fetqu x6nw5rs",
    ks0D6T: "xboxxrt xyl5pi8",
    kzqmXN: "xvolacv",
    kogj98: "x1ghz6dp",
    kMwMTN: "x1gney9c",
    $$css: true
  }
};

/** Native form. Fields stack. One primary action at the end. */
export const Form = /*#__PURE__*/React.forwardRef(function Form({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-form", className], styles.form);
  return /*#__PURE__*/_jsx("form", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
//# sourceMappingURL=form.js.map
