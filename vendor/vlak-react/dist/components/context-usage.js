"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { Collapsible } from "./collapsible.js";
import { Progress } from "./progress.js";
import { resolveContextPricing } from "./context-pricing.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
const styles = {
  root: {
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  body: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    $$css: true
  },
  metadata: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x4ro2ui",
    kMwMTN: "x1ixqp2s",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  list: {
    kogj98: "x1ghz6dp",
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    kGuDYH: "x1jq7itm",
    kcqcaj: "xss6m8b",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  row: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kjj79g: "x1qughib",
    kOIVth: "x1tmakyn",
    $$css: true
  },
  value: {
    kogj98: "x1ghz6dp",
    kMwMTN: "x1gney9c",
    $$css: true
  }
};
const valid = value => value !== undefined && Number.isFinite(value) && value >= 0;
const amount = value => valid(value) ? value.toLocaleString("en-US") : "Unavailable";

/** Context occupancy and caller-supplied token usage/pricing. No model catalog or prices are fetched. */
export const ContextUsage = /*#__PURE__*/React.forwardRef(function ContextUsage({
  usedTokens,
  maxTokens: explicitLimit,
  usage,
  pricing: explicitPricing,
  model: explicitModel,
  modelId,
  catalog,
  label = "Context usage",
  defaultOpen = false,
  className,
  style,
  ...props
}, ref) {
  const resolved = React.useMemo(() => modelId && catalog ? resolveContextPricing(modelId, catalog, {
    inputTokens: usage?.inputTokens
  }) : undefined, [modelId, catalog, usage?.inputTokens]);
  const maxTokens = explicitLimit ?? resolved?.maxTokens;
  const pricing = explicitPricing ?? resolved?.pricing;
  const model = explicitModel ?? resolved?.model ?? modelId;
  const known = valid(usedTokens) && valid(maxTokens) && maxTokens > 0;
  const percentage = known ? Math.round(usedTokens / maxTokens * 100) : undefined;
  const cached = usage?.cachedInputTokens;
  const reasoning = usage?.reasoningTokens;
  const input = usage?.inputTokens;
  const output = usage?.outputTokens;
  // Cached input is a subset of input; reasoning is a subset of output. Optional separate rates replace their parent rates.
  const buckets = [{
    count: input,
    rate: pricing?.inputPerMillion,
    subset: cached,
    subsetRate: pricing?.cacheReadPerMillion
  }, {
    count: output,
    rate: pricing?.outputPerMillion,
    subset: reasoning,
    subsetRate: pricing?.reasoningPerMillion
  }];
  let cost;
  if (pricing && buckets.every(bucket => valid(bucket.count) && (bucket.rate === undefined || valid(bucket.rate)) && (bucket.subsetRate === undefined || valid(bucket.subsetRate)) && (bucket.count === 0 || valid(bucket.rate)) && (bucket.subset === undefined || valid(bucket.subset) && bucket.subset <= bucket.count) && (bucket.count === 0 || bucket.subsetRate === undefined || bucket.subsetRate === bucket.rate || valid(bucket.subset)))) {
    cost = buckets.reduce((sum, bucket) => {
      const count = bucket.count;
      const subset = valid(bucket.subset) && valid(bucket.subsetRate) ? bucket.subset : 0;
      return sum + ((count - subset) * (bucket.rate ?? 0) + subset * (bucket.subsetRate ?? 0)) / 1_000_000;
    }, 0);
    if (!Number.isFinite(cost)) cost = undefined;
  }
  const money = cost === undefined ? "Unavailable" : `${cost.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 6
  })} ${pricing?.currency?.trim() || "USD"}`;
  const root = rs(["rs-context-usage", className], styles.root);
  const body = rs(["rs-context-usage-body"], styles.body);
  const metadata = rs(["rs-context-usage-metadata"], styles.metadata);
  const list = rs(["rs-context-usage-list"], styles.list);
  const row = rs(["rs-context-usage-row"], styles.row);
  const value = rs(["rs-context-usage-value"], styles.value);
  const stats = [{
    label: "Input tokens",
    value: amount(input)
  }, {
    label: "Output tokens",
    value: amount(output)
  }, {
    label: "Reasoning tokens",
    value: amount(reasoning)
  }, {
    label: "Cached input tokens",
    value: amount(cached)
  }];
  return /*#__PURE__*/_jsx(Collapsible, {
    ...props,
    ref: ref,
    title: `${label}${percentage === undefined ? "" : ` · ${percentage}%`}`,
    defaultOpen: defaultOpen,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: /*#__PURE__*/_jsxs("div", {
      ...body,
      children: [model && /*#__PURE__*/_jsx("p", {
        ...metadata,
        children: model
      }), known ? /*#__PURE__*/_jsx(Progress, {
        value: usedTokens,
        max: maxTokens,
        label: `${amount(usedTokens)} of ${amount(maxTokens)} tokens`
      }) : /*#__PURE__*/_jsx("p", {
        ...metadata,
        children: "Context limit unavailable."
      }), known && usedTokens > maxTokens && /*#__PURE__*/_jsx("p", {
        ...metadata,
        children: "The supplied usage exceeds this context limit."
      }), usage && /*#__PURE__*/_jsx("dl", {
        ...list,
        children: stats.map(item => /*#__PURE__*/_createElement("div", {
          ...row,
          key: item.label
        }, /*#__PURE__*/_jsx("dt", {
          children: item.label
        }), /*#__PURE__*/_jsx("dd", {
          ...value,
          children: item.value
        })))
      }), pricing && /*#__PURE__*/_jsxs("div", {
        ...row,
        children: [/*#__PURE__*/_jsx("span", {
          ...metadata,
          children: "Estimated cost from supplied rates"
        }), /*#__PURE__*/_jsx("span", {
          ...value,
          children: money
        })]
      })]
    })
  });
});
//# sourceMappingURL=context-usage.js.map
