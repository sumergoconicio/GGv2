"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Combobox } from "./combobox.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  label: {
    kGuDYH: "x1jq7itm",
    k63SB2: "xk50ysn",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  option: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kOIVth: "x13z6uf9",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  icon: {
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kzqmXN: "xwqq7k2",
    kZKoxP: "xmll18r",
    kmuXW: "x2lah0s",
    $$css: true
  },
  text: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x1enigpx",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  metadata: {
    kGuDYH: "x4ro2ui",
    kMwMTN: "x1ixqp2s",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  detail: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    kmVPX3: "x79iv2k",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j xz1l38o",
    kaIpWk: "xkrxur",
    $$css: true
  },
  description: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x1jq7itm",
    kLWn49: "xfrs9s4",
    $$css: true
  }
};

/** Search and select models from an application-supplied catalog, without provider lookups. */
export const ModelSelector = /*#__PURE__*/React.forwardRef(function ModelSelector({
  models,
  value,
  defaultValue = "",
  onValueChange,
  label = "Model",
  disabled = false,
  className,
  style,
  ...props
}, ref) {
  const [inner, setInner] = React.useState(defaultValue);
  const current = value ?? inner;
  const selected = models.find(model => model.id === current);
  const id = React.useId();
  const root = rs(["rs-model-selector", className], styles.root);
  const heading = rs(["rs-model-selector-label"], styles.label);
  const option = rs(["rs-model-selector-option"], styles.option);
  const icon = rs(["rs-model-selector-icon"], styles.icon);
  const text = rs(["rs-model-selector-text"], styles.text);
  const metadata = rs(["rs-model-selector-metadata"], styles.metadata);
  const detail = rs(["rs-model-selector-detail"], styles.detail);
  const description = rs(["rs-model-selector-description"], styles.description);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("span", {
      ...heading,
      id: `${id}-label`,
      children: label
    }), /*#__PURE__*/_jsx(Combobox, {
      "aria-labelledby": `${id}-label`,
      value: current,
      disabled: disabled,
      placeholder: "Search models\u2026",
      emptyLabel: "No models match",
      onValueChange: next => {
        if (value === undefined) setInner(next);
        onValueChange?.(next);
      },
      options: models.map(model => ({
        value: model.id,
        disabled: model.disabled,
        searchText: [model.name, model.provider, model.description, ...(model.capabilities ?? [])].filter(Boolean).join(" "),
        label: /*#__PURE__*/_jsxs("span", {
          ...option,
          children: [model.icon && /*#__PURE__*/_jsx("span", {
            ...icon,
            "aria-hidden": "true",
            children: model.icon
          }), /*#__PURE__*/_jsxs("span", {
            ...text,
            children: [/*#__PURE__*/_jsx("span", {
              children: model.name
            }), /*#__PURE__*/_jsx("span", {
              ...metadata,
              children: [model.provider, ...(model.capabilities ?? [])].filter(Boolean).join(" · ")
            })]
          })]
        })
      }))
    }), selected && /*#__PURE__*/_jsxs("div", {
      ...detail,
      children: [/*#__PURE__*/_jsx("span", {
        ...heading,
        children: selected.name
      }), selected.description && /*#__PURE__*/_jsx("p", {
        ...description,
        children: selected.description
      }), /*#__PURE__*/_jsx("span", {
        ...metadata,
        children: [selected.provider, ...(selected.capabilities ?? []), selected.contextWindow != null && Number.isFinite(selected.contextWindow) && selected.contextWindow > 0 ? `${selected.contextWindow.toLocaleString("en-US")} token context` : undefined, selected.priceLabel].filter(Boolean).join(" · ")
      })]
    }), (!models.length || current && !selected) && /*#__PURE__*/_jsx("span", {
      ...metadata,
      role: "status",
      children: models.length ? "The selected model is unavailable. Choose another model." : "No models supplied."
    })]
  });
});
//# sourceMappingURL=model-selector.js.map
