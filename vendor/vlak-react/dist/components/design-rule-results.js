"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Select } from "./select.js";
import { Button } from "./button.js";
import { useInputValue } from "../use-input-value.js";
import { useMergedRefs } from "../merge-refs.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
const initial = {
  severity: "all",
  status: "all"
};
const severityLabels = {
  error: "Error",
  warning: "Warning",
  info: "Information"
};
const statusLabels = {
  open: "Open",
  resolved: "Resolved",
  excluded: "Excluded"
};
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x1fsutb",
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
    kGuDYH: "x1jq7itm",
    k63SB2: "x1s688f",
    $$css: true
  },
  filters: {
    k1xSpc: "xrvj5dj",
    kumcoG: "xnby9oq x1nk3w99",
    kOIVth: "x8233eu",
    $$css: true
  },
  field: {
    k1xSpc: "xrvj5dj",
    k7Eaqz: "xeuugli",
    kOIVth: "xpj7pl4",
    kGuDYH: "x4ro2ui",
    $$css: true
  },
  control: {
    k7Eaqz: "xeuugli",
    kzqmXN: "xh8yej3",
    kAzted: "x1wszdd",
    $$css: true
  },
  list: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    kB88ic: "xe8uvvx",
    kmVPX3: "x1717udv",
    kogj98: "x1ghz6dp",
    $$css: true
  },
  item: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    k7Eaqz: "xeuugli",
    kmVPX3: "x8hbxov",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    $$css: true
  },
  selected: {
    kWkggS: "x1nzd1wa",
    kVAM5u: "x1cn24jd x19k3fcw",
    $$css: true
  },
  title: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x1jq7itm",
    k63SB2: "x1s688f",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  properties: {
    k1xSpc: "xrvj5dj",
    kumcoG: "xyqyb5s",
    kOIVth: "xb6y1gh",
    kogj98: "x1ghz6dp",
    $$css: true
  },
  term: {
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x4ro2ui",
    $$css: true
  },
  detail: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x4ro2ui",
    kcqcaj: "xss6m8b",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    $$css: true
  },
  action: {
    kAzted: "x1wszdd",
    ks0D6T: "x193iq5w",
    $$css: true
  },
  note: {
    kogj98: "x1ghz6dp",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x4ro2ui",
    kHjlTd: "xj0a0fe",
    ks0D6T: "x1qp14f0",
    $$css: true
  }
};
function supplied(value) {
  return value?.trim() ? value : "Not supplied";
}
function coordinate(value) {
  return value == null ? "Not supplied" : Number.isFinite(value) ? String(value) : "Unavailable";
}

/** Supplied rule-check outcomes with local or controlled filters and host-confirmed actions. */
export const DesignRuleResults = /*#__PURE__*/React.forwardRef(function DesignRuleResults({
  label,
  violations,
  filter,
  defaultFilter = initial,
  onFilterChange,
  selectedId,
  onSelect,
  onResolve,
  runLabel,
  description,
  disabled,
  name,
  form,
  className,
  style,
  children,
  "aria-describedby": ariaDescribedBy,
  ...props
}, ref) {
  const id = React.useId();
  const [, refresh] = React.useReducer(n => n + 1, 0);
  const [current, setFilter, fieldRef] = useInputValue(filter, defaultFilter, onFilterChange, refresh);
  const mergedRef = useMergedRefs(ref, fieldRef);
  const validRecords = violations.every(item => item.id.length > 0) && new Set(violations.map(item => item.id)).size === violations.length;
  const visible = violations.filter(item => (current.severity === "all" || (current.severity === "unknown" ? item.severity == null : item.severity === current.severity)) && (current.status === "all" || (current.status === "unknown" ? item.status == null : item.status === current.status)));
  const describedBy = [ariaDescribedBy, description != null && `${id}-description`, `${id}-count`].filter(Boolean).join(" ");
  const root = rs(["rs-design-rule-results", className], styles.root);
  const legend = rs(["rs-design-rule-results-legend"], styles.legend);
  const filters = rs(["rs-design-rule-results-filters"], styles.filters);
  const field = rs(["rs-design-rule-results-label"], styles.field);
  const control = rs(["rs-design-rule-results-control"], styles.control);
  const list = rs(["rs-design-rule-results-list"], styles.list);
  const title = rs(["rs-design-rule-results-title"], styles.title);
  const properties = rs(["rs-design-rule-results-properties"], styles.properties);
  const term = rs(["rs-design-rule-results-term"], styles.term);
  const detail = rs(["rs-design-rule-results-detail"], styles.detail);
  const actions = rs(["rs-design-rule-results-actions"], styles.actions);
  const action = rs(["rs-design-rule-results-action"], styles.action);
  const note = rs(["rs-design-rule-results-note"], styles.note);
  return /*#__PURE__*/_jsxs("fieldset", {
    ...props,
    ref: mergedRef,
    name: name,
    form: form,
    disabled: disabled,
    "aria-describedby": describedBy,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("legend", {
      ...legend,
      children: label
    }), runLabel != null && /*#__PURE__*/_jsx("p", {
      ...note,
      children: runLabel
    }), description != null && /*#__PURE__*/_jsx("p", {
      ...note,
      id: `${id}-description`,
      children: description
    }), /*#__PURE__*/_jsxs("div", {
      ...filters,
      children: [/*#__PURE__*/_jsxs("div", {
        ...field,
        children: [/*#__PURE__*/_jsx("span", {
          id: `${id}-severity-label`,
          children: "Severity"
        }), /*#__PURE__*/_jsx(Select, {
          ...control,
          fullWidth: true,
          name: name ? `${name}.severity` : undefined,
          form: form,
          value: current.severity,
          disabled: disabled,
          "aria-labelledby": `${id}-severity-label`,
          options: [{
            value: "all",
            label: "All severities"
          }, {
            value: "error",
            label: "Error"
          }, {
            value: "warning",
            label: "Warning"
          }, {
            value: "info",
            label: "Information"
          }, {
            value: "unknown",
            label: "Unknown severity"
          }],
          onValueChange: next => {
            if (!disabled) setFilter({
              ...current,
              severity: next
            });
          }
        })]
      }), /*#__PURE__*/_jsxs("div", {
        ...field,
        children: [/*#__PURE__*/_jsx("span", {
          id: `${id}-status-label`,
          children: "Result status"
        }), /*#__PURE__*/_jsx(Select, {
          ...control,
          fullWidth: true,
          name: name ? `${name}.status` : undefined,
          form: form,
          value: current.status,
          disabled: disabled,
          "aria-labelledby": `${id}-status-label`,
          options: [{
            value: "all",
            label: "All statuses"
          }, {
            value: "open",
            label: "Open"
          }, {
            value: "resolved",
            label: "Resolved"
          }, {
            value: "excluded",
            label: "Excluded"
          }, {
            value: "unknown",
            label: "Unknown status"
          }],
          onValueChange: next => {
            if (!disabled) setFilter({
              ...current,
              status: next
            });
          }
        })]
      })]
    }), /*#__PURE__*/_jsx("p", {
      ...note,
      id: `${id}-count`,
      "aria-live": "polite",
      children: validRecords ? `${visible.length} of ${violations.length} results` : "Result records unavailable"
    }), !validRecords ? /*#__PURE__*/_jsx("p", {
      ...note,
      children: "Result identifiers must be unique and non-empty."
    }) : /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsx("ul", {
        ...list,
        children: visible.map((item, index) => {
          const row = rs(["rs-design-rule-results-item", selectedId === item.id && "rs-design-rule-results-selected"], styles.item, selectedId === item.id && styles.selected);
          const detailsId = `${id}-result-${index}`;
          const blocked = disabled || item.disabled || item.pending;
          const fields = [["Result identifier", item.id], ["Severity", item.severity == null ? "Unknown" : severityLabels[item.severity] ?? "Unknown"], ["Confirmed status", item.status == null ? "Unknown" : statusLabels[item.status] ?? "Unknown"], ["Rule", supplied(item.rule)], ["Layer", supplied(item.layer)], ["Net", supplied(item.net)]];
          return /*#__PURE__*/_createElement("li", {
            ...row,
            key: item.id
          }, /*#__PURE__*/_jsxs("p", {
            ...title,
            children: [item.title, selectedId === item.id ? " · Selected" : ""]
          }), item.description != null && /*#__PURE__*/_jsx("div", {
            ...note,
            children: item.description
          }), /*#__PURE__*/_jsx("div", {
            id: detailsId,
            children: /*#__PURE__*/_jsxs("dl", {
              ...properties,
              children: [fields.map(([key, value]) => /*#__PURE__*/_jsxs("div", {
                children: [/*#__PURE__*/_jsx("dt", {
                  ...term,
                  children: key
                }), /*#__PURE__*/_jsx("dd", {
                  ...detail,
                  children: value
                })]
              }, key)), /*#__PURE__*/_jsxs("div", {
                children: [/*#__PURE__*/_jsx("dt", {
                  ...term,
                  children: "Location"
                }), /*#__PURE__*/_jsx("dd", {
                  ...detail,
                  children: item.location ? `X: ${coordinate(item.location.x)}, Y: ${coordinate(item.location.y)}; unit: ${supplied(item.location.unit)}` : "Not supplied"
                })]
              }), /*#__PURE__*/_jsxs("div", {
                children: [/*#__PURE__*/_jsx("dt", {
                  ...term,
                  children: "Objects"
                }), /*#__PURE__*/_jsx("dd", {
                  ...detail,
                  children: item.objects == null ? "Not supplied" : item.objects.length === 0 ? "None recorded" : item.objects.join(", ")
                })]
              })]
            })
          }), item.pending && /*#__PURE__*/_jsx("p", {
            ...note,
            children: "Update pending"
          }), (onSelect || onResolve && item.status === "open" && item.canResolve !== false) && /*#__PURE__*/_jsxs("div", {
            ...actions,
            "aria-busy": item.pending || undefined,
            children: [onSelect && /*#__PURE__*/_jsx(Button, {
              variant: "ghost",
              ...action,
              type: "button",
              disabled: blocked,
              "aria-label": `Select result ${item.id}: ${item.title}`,
              "aria-describedby": detailsId,
              onClick: () => onSelect(item.id),
              children: "Select"
            }), onResolve && item.status === "open" && item.canResolve !== false && /*#__PURE__*/_jsx(Button, {
              variant: "ghost",
              ...action,
              type: "button",
              disabled: blocked,
              "aria-label": `Request resolution for ${item.id}: ${item.title}`,
              "aria-describedby": detailsId,
              onClick: () => onResolve(item.id),
              children: "Request resolution"
            })]
          }));
        })
      }), violations.length === 0 ? /*#__PURE__*/_jsx("p", {
        ...note,
        children: "No rule-check results supplied"
      }) : visible.length === 0 ? /*#__PURE__*/_jsx("p", {
        ...note,
        children: "No results match these filters"
      }) : null, selectedId != null && !violations.some(item => item.id === selectedId) && /*#__PURE__*/_jsxs("p", {
        ...note,
        children: ["Selected result unavailable: ", selectedId]
      })]
    }), children]
  });
});
//# sourceMappingURL=design-rule-results.js.map
