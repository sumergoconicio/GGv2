"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { useInputValue } from "../use-input-value.js";
import { useMergedRefs } from "../merge-refs.js";
import { Select } from "./select.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8fetqu",
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
    kGuDYH: "x1jchvi3",
    k63SB2: "x1s688f",
    $$css: true
  },
  field: {
    k1xSpc: "xrvj5dj",
    kOIVth: "xpj7pl4",
    k7Eaqz: "xeuugli",
    kGuDYH: "xboafo0",
    $$css: true
  },
  select: {
    k7Eaqz: "xeuugli",
    kzqmXN: "xh8yej3",
    $$css: true
  },
  metadata: {
    k1xSpc: "xrvj5dj",
    kOIVth: "xb6y1gh",
    kogj98: "x1ghz6dp",
    kGuDYH: "xboafo0",
    $$css: true
  },
  detail: {
    k1xSpc: "xrvj5dj",
    kumcoG: "xkdkusw",
    kOIVth: "x13z6uf9",
    $$css: true
  },
  heading: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xkpwil5",
    k63SB2: "xk50ysn",
    $$css: true
  },
  values: {
    k1xSpc: "xrvj5dj",
    kumcoG: "x1nh781e",
    kOIVth: "x8233eu",
    kogj98: "xms0q6y",
    kGuDYH: "xboafo0",
    $$css: true
  },
  value: {
    kogj98: "x12yysl2",
    kGuDYH: "x1jchvi3",
    kcqcaj: "xss6m8b",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  text: {
    kogj98: "x1ghz6dp",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  copy: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    kHjlTd: "xj0a0fe",
    ks0D6T: "x1qp14f0",
    $$css: true
  }
};
const recorded = value => value == null ? "Not supplied" : Number.isFinite(value) ? String(value) : "Unavailable";

/** Exact supplied Cartesian and orientation records, with no frame transform or pose computation. */
export const RobotPose = /*#__PURE__*/React.forwardRef(function RobotPose({
  label,
  poses,
  value,
  defaultValue,
  onValueChange,
  readOnly = false,
  description,
  disabled,
  name,
  form,
  className,
  style,
  children,
  ...props
}, ref) {
  const [, refresh] = React.useReducer(n => n + 1, 0);
  const [current, setValue, fieldRef] = useInputValue(value, defaultValue === undefined ? poses[0]?.id ?? null : defaultValue, onValueChange, refresh);
  const merged = useMergedRefs(ref, fieldRef);
  const id = React.useId();
  const valid = poses.length <= 256 && poses.every(pose => pose.id.trim() && pose.label.trim()) && new Set(poses.map(pose => pose.id)).size === poses.length;
  const pose = valid ? poses.find(pose => pose.id === current) : undefined;
  const validOrientation = pose?.orientation.representation.trim() && pose.orientation.components.length > 0 && pose.orientation.components.length <= 16 && pose.orientation.components.every(component => component.id.trim() && component.label.trim()) && new Set(pose.orientation.components.map(component => component.id)).size === pose.orientation.components.length;
  const root = rs(["rs-robot-pose", className], styles.root);
  const legend = rs(["rs-robot-pose-legend"], styles.legend);
  const field = rs(["rs-robot-pose-field"], styles.field);
  const select = rs(["rs-robot-pose-select"], styles.select);
  const metadata = rs(["rs-robot-pose-metadata"], styles.metadata);
  const detail = rs(["rs-robot-pose-detail"], styles.detail);
  const heading = rs(["rs-robot-pose-heading"], styles.heading);
  const values = rs(["rs-robot-pose-values"], styles.values);
  const valueStyle = rs(["rs-robot-pose-value"], styles.value);
  const text = rs(["rs-robot-pose-text"], styles.text);
  const copy = rs(["rs-robot-pose-copy"], styles.copy);
  return /*#__PURE__*/_jsxs("fieldset", {
    ...props,
    ref: merged,
    disabled: disabled,
    name: name,
    form: form,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("legend", {
      ...legend,
      children: label
    }), description != null && /*#__PURE__*/_jsx("p", {
      ...copy,
      children: description
    }), !valid ? /*#__PURE__*/_jsx("p", {
      ...copy,
      children: "Pose records unavailable: supply unique identifiers and at most 256 labelled poses."
    }) : !poses.length ? /*#__PURE__*/_jsx("p", {
      ...copy,
      children: "No pose records supplied"
    }) : /*#__PURE__*/_jsxs("div", {
      ...field,
      children: [/*#__PURE__*/_jsx("span", {
        id: `${id}-record`,
        children: "Pose record"
      }), /*#__PURE__*/_jsx(Select, {
        ...select,
        fullWidth: true,
        "aria-labelledby": `${id}-record`,
        options: poses.map(item => ({
          value: item.id,
          label: item.label
        })),
        value: pose?.id ?? "",
        placeholder: "Choose a supplied pose",
        disabled: disabled,
        readOnly: readOnly,
        onValueChange: next => {
          if (!disabled && !readOnly) setValue(next);
        }
      })]
    }), pose ? /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsx("dl", {
        ...metadata,
        children: [["Frame", pose.frame?.trim() ? pose.frame : "Not supplied"], ["Recorded at", pose.timeLabel?.trim() ? pose.timeLabel : "Not supplied"], ["Status", pose.status?.trim() ? pose.status : "Not supplied"]].map(([label, value]) => /*#__PURE__*/_jsxs("div", {
          ...detail,
          children: [/*#__PURE__*/_jsx("dt", {
            children: label
          }), /*#__PURE__*/_jsx("dd", {
            ...text,
            children: value
          })]
        }, label))
      }), /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("p", {
          ...heading,
          children: "Translation"
        }), /*#__PURE__*/_jsxs("p", {
          ...copy,
          children: ["Unit: ", pose.translation.unit.trim() || "Not supplied"]
        }), /*#__PURE__*/_jsx("dl", {
          ...values,
          children: ["x", "y", "z"].map(axis => /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("dt", {
              children: axis.toUpperCase()
            }), /*#__PURE__*/_jsx("dd", {
              ...valueStyle,
              children: recorded(pose.translation[axis])
            })]
          }, axis))
        })]
      }), /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("p", {
          ...heading,
          children: "Orientation"
        }), /*#__PURE__*/_jsxs("p", {
          ...copy,
          children: ["Representation: ", pose.orientation.representation.trim() || "Not supplied"]
        }), validOrientation ? /*#__PURE__*/_jsx("dl", {
          ...values,
          children: pose.orientation.components.map(component => /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsxs("dt", {
              children: [component.label, component.unit?.trim() ? ` (${component.unit})` : ""]
            }), /*#__PURE__*/_jsx("dd", {
              ...valueStyle,
              children: recorded(component.value)
            })]
          }, component.id))
        }) : /*#__PURE__*/_jsx("p", {
          ...copy,
          children: "Orientation components unavailable"
        })]
      }), name && /*#__PURE__*/_jsx("input", {
        type: "hidden",
        name: name,
        form: form,
        value: pose.id
      })]
    }) : valid && poses.length > 0 && /*#__PURE__*/_jsx("p", {
      ...copy,
      children: current == null ? "No pose selected" : "Selected pose unavailable"
    }), /*#__PURE__*/_jsx("p", {
      ...copy,
      children: "Values and frame names are supplied records. Selecting a record does not transform, normalize, or command a pose."
    }), children]
  });
});
//# sourceMappingURL=robot-pose.js.map
