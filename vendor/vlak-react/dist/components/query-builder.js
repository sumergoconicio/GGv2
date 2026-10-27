"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { Input } from "./input.js";
import { NativeSelect } from "./native-select.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const operators = [{
  value: "is",
  label: "is"
}, {
  value: "is-not",
  label: "is not"
}, {
  value: "contains",
  label: "contains"
}, {
  value: "greater-than",
  label: "is greater than"
}, {
  value: "less-than",
  label: "is less than"
}];
function fieldOperators(field) {
  return operators.filter(operator => field?.type === "number" ? operator.value !== "contains" : !["greater-than", "less-than"].includes(operator.value));
}
/** Human-readable summary only. This is not SQL and never executes a query. */
export function describeQuery(group, fields) {
  if (!group.rules.length) return "No conditions";
  return `(${group.rules.map(rule => "rules" in rule ? describeQuery(rule, fields) : `${fields.find(field => field.id === rule.field)?.label ?? rule.field} ${operators.find(operator => operator.value === rule.operator)?.label ?? rule.operator} ${JSON.stringify(rule.value)}`).join(` ${group.combinator} `)})`;
}
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8fetqu",
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  group: {
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kmVPX3: "x1uz70x1",
    kogj98: "x1ghz6dp",
    k7Eaqz: "xeuugli",
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    $$css: true
  },
  legend: {
    k63SB2: "x1s688f",
    kGuDYH: "xkpwil5",
    kg3NbH: "xllzysa",
    $$css: true
  },
  rule: {
    k1xSpc: "xrvj5dj",
    kumcoG: "x1mep8l",
    kOIVth: "x13z6uf9",
    kGNEyG: "xpqajaz",
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    $$css: true
  },
  summary: {
    kogj98: "x1ghz6dp",
    ks0D6T: "x1qp14f0",
    kHjlTd: "xj0a0fe",
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    kMwMTN: "x1ixqp2s",
    $$css: true
  }
};
function replaceGroup(tree, id, next) {
  return tree.id === id ? next(tree) : {
    ...tree,
    rules: tree.rules.map(rule => "rules" in rule ? replaceGroup(rule, id, next) : rule)
  };
}

/** A structured filter expression with nested groups and native field editors. */
export const QueryBuilder = /*#__PURE__*/React.forwardRef(function QueryBuilder({
  fields,
  value,
  defaultValue,
  onValueChange,
  label = "Filter conditions",
  maxDepth = 3,
  className,
  style,
  ...props
}, ref) {
  const prefix = React.useId();
  const counter = React.useRef(0);
  const makeId = () => `${prefix}-${++counter.current}`;
  const [inner, setInner] = React.useState(() => defaultValue ?? {
    id: `${prefix}-root`,
    combinator: "and",
    rules: []
  });
  const current = value ?? inner;
  const depthLimit = Math.max(1, Math.min(8, Number.isFinite(maxDepth) ? Math.floor(maxDepth) : 3));
  const root = rs(["rs-query-builder", className], styles.root);
  const groupStyle = rs(["rs-query-builder-group"], styles.group);
  const legend = rs(["rs-query-builder-legend"], styles.legend);
  const row = rs(["rs-query-builder-rule"], styles.rule);
  const actions = rs(["rs-query-builder-actions"], styles.actions);
  const summary = rs(["rs-query-builder-summary"], styles.summary);
  const update = (id, change) => {
    const next = replaceGroup(current, id, change);
    if (value === undefined) setInner(next);
    onValueChange?.(next);
  };
  const renderGroup = (group, depth, parent) => /*#__PURE__*/_jsxs("fieldset", {
    ...groupStyle,
    children: [/*#__PURE__*/_jsx("legend", {
      ...legend,
      children: depth === 0 ? label : `Condition group ${depth + 1}`
    }), /*#__PURE__*/_jsxs(NativeSelect, {
      label: "Match conditions",
      value: group.combinator,
      onChange: event => update(group.id, previous => ({
        ...previous,
        combinator: event.target.value
      })),
      children: [/*#__PURE__*/_jsx("option", {
        value: "and",
        children: "All conditions"
      }), /*#__PURE__*/_jsx("option", {
        value: "or",
        children: "Any condition"
      })]
    }), group.rules.map((rule, index) => "rules" in rule ? renderGroup(rule, depth + 1, group.id) : /*#__PURE__*/_jsxs("div", {
      ...row,
      children: [/*#__PURE__*/_jsx(NativeSelect, {
        label: `Field ${index + 1}`,
        value: rule.field,
        onChange: event => {
          const fieldId = event.currentTarget.value;
          const allowed = fieldOperators(fields.find(field => field.id === fieldId));
          update(group.id, previous => ({
            ...previous,
            rules: previous.rules.map(entry => entry.id === rule.id ? {
              ...rule,
              field: fieldId,
              operator: allowed.some(operator => operator.value === rule.operator) ? rule.operator : "is",
              value: ""
            } : entry)
          }));
        },
        children: fields.map(field => /*#__PURE__*/_jsx("option", {
          value: field.id,
          children: field.label
        }, field.id))
      }), /*#__PURE__*/_jsxs(NativeSelect, {
        label: `Operator ${index + 1}`,
        value: rule.operator,
        onChange: event => update(group.id, previous => ({
          ...previous,
          rules: previous.rules.map(entry => entry.id === rule.id ? {
            ...rule,
            operator: event.target.value
          } : entry)
        })),
        children: [!fieldOperators(fields.find(field => field.id === rule.field)).some(operator => operator.value === rule.operator) && /*#__PURE__*/_jsx("option", {
          value: rule.operator,
          disabled: true,
          children: "Choose an operator"
        }), fieldOperators(fields.find(field => field.id === rule.field)).map(operator => /*#__PURE__*/_jsx("option", {
          value: operator.value,
          children: operator.label
        }, operator.value))]
      }), /*#__PURE__*/_jsx(Input, {
        label: `Value ${index + 1}`,
        type: fields.find(field => field.id === rule.field)?.type ?? "text",
        value: rule.value,
        onChange: event => update(group.id, previous => ({
          ...previous,
          rules: previous.rules.map(entry => entry.id === rule.id ? {
            ...rule,
            value: event.target.value
          } : entry)
        }))
      }), /*#__PURE__*/_jsx(Button, {
        variant: "ghost",
        "aria-label": `Remove condition ${index + 1}`,
        onClick: event => {
          const fieldset = event.currentTarget.closest("fieldset");
          fieldset?.querySelector("select")?.focus();
          update(group.id, previous => ({
            ...previous,
            rules: previous.rules.filter(entry => entry.id !== rule.id)
          }));
        },
        children: "Remove"
      })]
    }, rule.id)), !group.rules.length && /*#__PURE__*/_jsx("p", {
      ...summary,
      children: "No conditions in this group"
    }), /*#__PURE__*/_jsxs("div", {
      ...actions,
      children: [/*#__PURE__*/_jsx(Button, {
        variant: "ghost",
        disabled: !fields.length,
        onClick: () => update(group.id, previous => ({
          ...previous,
          rules: [...previous.rules, {
            id: makeId(),
            field: fields[0].id,
            operator: "is",
            value: ""
          }]
        })),
        children: "Add condition"
      }), depth + 1 < depthLimit && /*#__PURE__*/_jsx(Button, {
        variant: "ghost",
        onClick: () => update(group.id, previous => ({
          ...previous,
          rules: [...previous.rules, {
            id: makeId(),
            combinator: "and",
            rules: []
          }]
        })),
        children: "Add group"
      }), parent && /*#__PURE__*/_jsx(Button, {
        variant: "ghost",
        onClick: event => {
          const parentFieldset = event.currentTarget.closest("fieldset")?.parentElement?.closest("fieldset");
          parentFieldset?.querySelector("select")?.focus();
          update(parent, previous => ({
            ...previous,
            rules: previous.rules.filter(entry => entry.id !== group.id)
          }));
        },
        children: "Remove group"
      })]
    })]
  }, group.id);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [renderGroup(current, 0), /*#__PURE__*/_jsx("p", {
      ...summary,
      role: "note",
      "aria-label": "Query summary",
      children: describeQuery(current, fields)
    })]
  });
});
//# sourceMappingURL=query-builder.js.map
