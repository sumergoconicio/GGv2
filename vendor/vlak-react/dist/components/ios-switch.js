"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useMergedRefs } from "../merge-refs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "x3nfvp2",
    kVAEAm: "x1n2onr6",
    kGNEyG: "x6s0dn4",
    kzqmXN: "x1fu8urw",
    k7Eaqz: "x4m7ku4",
    kZKoxP: "xn3w4p2",
    kAzted: "x1gg8mnh",
    kXLuUW: "xxymvpz",
    kmuXW: "x2lah0s",
    kaIpWk: "x13pz1uv",
    kMeerF: "x1k57tk5 x16gxa91",
    k3XXqK: "xaatb59",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  disabled: {
    kSiTet: "xyd83as",
    $$css: true
  },
  track: {
    kVAEAm: "x10l6tqk",
    kkqhue: "x17y0mx6",
    k87sOh: "xfr5jun",
    kZKoxP: "x1fgtraw",
    kaIpWk: "xixl9f9",
    kB7OPa: "x9f619",
    kMzoRj: "xmkeg23",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd xaxtmmi",
    kWkggS: "x6583kg x18t4had",
    kfzvcC: "x47corl",
    kmkexE: "xbo1r1l xrozb4q",
    $$css: true
  },
  on: {
    kWkggS: "xmgn9m6 xf7h6k7",
    kVAM5u: "xli9mpl x19k3fcw",
    kAXs8y: "x1kzknox",
    $$css: true
  },
  thumb: {
    kVAEAm: "x10l6tqk",
    k87sOh: "x1eu8d0j",
    kLqNvP: "xaoy8p5",
    kZKoxP: "xxk0z11",
    kzqmXN: "x1guw455",
    kaIpWk: "x4pepcl",
    kB7OPa: "x9f619",
    kMzoRj: "xmkeg23",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd xaxtmmi",
    kWkggS: "xhpg8l3 x18t4had",
    kfzvcC: "x47corl",
    kmkexE: "xz7fab1 xrozb4q",
    $$css: true
  },
  thumbOn: {
    kLqNvP: "xqpl54q",
    kVAM5u: "x9r1u3d",
    kWkggS: "xhpg8l3 x12t9e9r",
    kAXs8y: "x1kzknox",
    $$css: true
  },
  input: {
    kVAEAm: "x10l6tqk",
    kpwlN0: "x10a8y8t",
    kzqmXN: "xh8yej3",
    kZKoxP: "x5yr21d",
    kogj98: "x1ghz6dp",
    kSiTet: "xg01cxk",
    kkrTdU: "x1ypdohk x1s07b3s",
    $$css: true
  }
};

/** The native checkbox owns focus, form submission and Space activation. */
export const IOSSwitch = /*#__PURE__*/React.forwardRef(function IOSSwitch({
  checked,
  defaultChecked = false,
  onCheckedChange,
  onChange,
  disabled,
  className,
  style,
  ...props
}, forwardedRef) {
  const [inner, setInner] = React.useState(defaultChecked);
  const input = React.useRef(null);
  const ref = useMergedRefs(input, forwardedRef);
  const controlled = checked !== undefined;
  const on = controlled ? checked : inner;
  React.useEffect(() => {
    const form = props.form ? document.getElementById(props.form) : input.current?.form;
    let mounted = true;
    const reset = event => queueMicrotask(() => {
      if (mounted && !controlled && !event.defaultPrevented) {
        if (input.current) input.current.checked = defaultChecked;
        setInner(defaultChecked);
      }
    });
    form?.addEventListener("reset", reset);
    return () => {
      mounted = false;
      form?.removeEventListener("reset", reset);
    };
  }, [controlled, defaultChecked, props.form]);
  const root = rs(["rs-ios-switch", disabled && "rs-ios-switch-disabled", className], styles.root, disabled && styles.disabled);
  const track = rs(["rs-ios-switch-track", on && "rs-ios-switch-on"], styles.track, on && styles.on);
  const thumb = rs(["rs-ios-switch-thumb", on && "rs-ios-switch-thumb-on"], styles.thumb, on && styles.thumbOn);
  const field = rs(["rs-ios-switch-input"], styles.input);
  return /*#__PURE__*/_jsxs("span", {
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("span", {
      ...track,
      "aria-hidden": "true"
    }), /*#__PURE__*/_jsx("span", {
      ...thumb,
      "aria-hidden": "true"
    }), /*#__PURE__*/_jsx("input", {
      ...props,
      ...field,
      ref: ref,
      type: "checkbox",
      role: "switch",
      "aria-checked": on,
      checked: on,
      disabled: disabled,
      onChange: event => {
        onChange?.(event);
        if (event.defaultPrevented) return;
        if (!controlled) setInner(event.currentTarget.checked);
        onCheckedChange?.(event.currentTarget.checked);
      }
    })]
  });
});
//# sourceMappingURL=ios-switch.js.map
