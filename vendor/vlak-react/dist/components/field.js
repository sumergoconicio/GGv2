"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { cx } from "../cx.js";
import { jsx as _jsx } from "react/jsx-runtime";
const styles = {
  field: {
    kzqmXN: "xh8yej3",
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kOIVth: "x13z6uf9 x1wht0sx",
    $$css: true
  },
  label: {
    kGuDYH: "xboafo0 x1k6fd34",
    k63SB2: "x1s688f",
    kMwMTN: "x1ixqp2s",
    kb6lSQ: "xjat59b",
    kLWn49: "x1d3mw78",
    $$css: true
  },
  hint: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xboafo0 xwxtnfu",
    k63SB2: "xk50ysn",
    kMwMTN: "x1ixqp2s",
    kb6lSQ: "xjat59b",
    kLWn49: "x1d3mw78",
    $$css: true
  },
  error: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xboafo0 xwxtnfu",
    k63SB2: "xk50ysn",
    kMwMTN: "x1gney9c",
    kb6lSQ: "xjat59b",
    kLWn49: "x1d3mw78",
    $$css: true
  }
};

/* ── Context: hint and error ids reach the control ── */

export const FieldContext = /*#__PURE__*/React.createContext(null);

/** Hint and error parts: the id to render, registered while mounted. */
export function useFieldPart(part, explicitId) {
  const ctx = React.useContext(FieldContext);
  const id = explicitId ?? (part === "hint" ? ctx?.hintId : ctx?.errorId);
  // `register` is stable; the context value is not (it carries `parts`).
  const register = ctx?.register;
  React.useEffect(() => {
    if (!register || !id) return;
    return register(part, id);
  }, [register, part, id]);
  return id;
}
/**
 * Controls call this: the field's hint and error describe the control,
 * and a rendered error marks it invalid. Explicit props win.
 */
export function useFieldControl(props) {
  const ctx = React.useContext(FieldContext);
  const describedBy = cx(props["aria-describedby"], ctx?.parts.hint, ctx?.parts.error) || undefined;
  const ariaInvalid = props["aria-invalid"] ?? (ctx?.parts.error ? true : undefined);
  return {
    "aria-describedby": describedBy,
    "aria-invalid": ariaInvalid,
    invalid: ariaInvalid === true || ariaInvalid === "true"
  };
}

/** Stack: label, control, hint or error. The hint and error describe the control. */
export const Field = /*#__PURE__*/React.forwardRef(function Field({
  className,
  style,
  ...props
}, ref) {
  const base = React.useId();
  const [parts, setParts] = React.useState({});
  const register = React.useCallback((part, id) => {
    setParts(current => current[part] === id ? current : {
      ...current,
      [part]: id
    });
    return () => {
      setParts(current => current[part] === id ? {
        ...current,
        [part]: undefined
      } : current);
    };
  }, []);
  const value = React.useMemo(() => ({
    hintId: `${base}-hint`,
    errorId: `${base}-error`,
    parts,
    register
  }), [base, parts, register]);
  const sx = rs(["rs-field", className], styles.field);
  return /*#__PURE__*/_jsx(FieldContext.Provider, {
    value: value,
    children: /*#__PURE__*/_jsx("div", {
      ref: ref,
      ...props,
      className: sx.className,
      style: {
        ...sx.style,
        ...style
      }
    })
  });
});
export const FieldLabel = /*#__PURE__*/React.forwardRef(function FieldLabel({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-field-label", className], styles.label);
  return /*#__PURE__*/_jsx("label", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
export const FieldHint = /*#__PURE__*/React.forwardRef(function FieldHint({
  className,
  style,
  id,
  ...props
}, ref) {
  const hintId = useFieldPart("hint", id);
  const sx = rs(["rs-field-hint", className], styles.hint);
  return /*#__PURE__*/_jsx("p", {
    ref: ref,
    ...props,
    id: hintId,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
export const FieldError = /*#__PURE__*/React.forwardRef(function FieldError({
  className,
  style,
  id,
  ...props
}, ref) {
  const errorId = useFieldPart("error", id);
  const sx = rs(["rs-field-error", className], styles.error);
  return /*#__PURE__*/_jsx("p", {
    ref: ref,
    role: "alert",
    ...props,
    id: errorId,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
//# sourceMappingURL=field.js.map
