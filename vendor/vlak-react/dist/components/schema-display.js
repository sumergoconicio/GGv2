"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Badge } from "./badge.js";
import { Collapsible } from "./collapsible.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    k7Eaqz: "xeuugli",
    kzqmXN: "xh8yej3",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j xz1l38o",
    kaIpWk: "xkrxur",
    kMwMTN: "x1gney9c",
    kWkggS: "xhpg8l3",
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  header: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x6s0dn4",
    kOIVth: "x8233eu",
    kmVPX3: "x1uz70x1",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  path: {
    k7Eaqz: "xeuugli",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  content: {
    kmVPX3: "x1uz70x1",
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  description: {
    kogj98: "x1ghz6dp",
    kMwMTN: "x1ixqp2s",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  list: {
    kB88ic: "xe8uvvx",
    kogj98: "x1ghz6dp",
    kZCmMZ: "x1m83qfk",
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  property: {
    k1xSpc: "xrvj5dj",
    kOIVth: "xvh977a",
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  line: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    kGNEyG: "x6s0dn4",
    kHjlTd: "xj0a0fe",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  note: {
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    $$css: true
  }
};

/** Endpoint documentation with bounded, expandable object and array schemas. */
export const SchemaDisplay = /*#__PURE__*/React.forwardRef(function SchemaDisplay({
  method,
  path,
  description,
  parameters,
  requestBody,
  responseBody,
  maxDepth = 6,
  maxNodes = 200,
  children,
  className,
  style,
  ...props
}, ref) {
  const root = rs(["rs-schema-display", className], styles.root);
  const header = rs(["rs-schema-display-header"], styles.header);
  const pathStyle = rs(["rs-schema-display-path"], styles.path);
  const content = rs(["rs-schema-display-content"], styles.content);
  const descriptionStyle = rs(["rs-schema-display-description"], styles.description);
  const list = rs(["rs-schema-display-list"], styles.list);
  const propertyStyle = rs(["rs-schema-display-property"], styles.property);
  const line = rs(["rs-schema-display-line"], styles.line);
  const note = rs(["rs-schema-display-note"], styles.note);
  const depthLimit = Number.isFinite(maxDepth) ? Math.min(20, Math.max(1, Math.floor(maxDepth))) : 6;
  let remaining = Number.isFinite(maxNodes) ? Math.min(2000, Math.max(1, Math.floor(maxNodes))) : 200;
  const renderProperties = (properties, depth, parents) => {
    const nodes = [];
    for (const [index, property] of properties.entries()) {
      if (remaining-- <= 0) {
        nodes.push(/*#__PURE__*/_jsx("li", {
          ...note,
          children: "More properties omitted."
        }, "limit"));
        break;
      }
      const nested = property.properties ?? (property.items ? [property.items] : undefined);
      const circular = parents.has(property);
      const nextParents = new Set(parents).add(property);
      nodes.push(/*#__PURE__*/_jsxs("li", {
        ...propertyStyle,
        children: [/*#__PURE__*/_jsxs("div", {
          ...line,
          children: [/*#__PURE__*/_jsx("code", {
            children: property.name
          }), /*#__PURE__*/_jsx(Badge, {
            variant: "muted",
            children: property.type
          }), property.location && /*#__PURE__*/_jsx("span", {
            ...note,
            children: property.location
          }), property.required && /*#__PURE__*/_jsx("strong", {
            ...note,
            children: "Required"
          })]
        }), property.description && /*#__PURE__*/_jsx("p", {
          ...descriptionStyle,
          children: property.description
        }), nested && (circular ? /*#__PURE__*/_jsx("span", {
          ...note,
          children: "Recursive reference."
        }) : depth >= depthLimit ? /*#__PURE__*/_jsx("span", {
          ...note,
          children: "Depth limit reached."
        }) : /*#__PURE__*/_jsx(Collapsible, {
          title: `${property.items ? "Items" : "Properties"} of ${property.name}`,
          defaultOpen: depth === 0,
          children: renderProperties(nested, depth + 1, nextParents)
        }))]
      }, `${index}:${property.name}`));
    }
    return /*#__PURE__*/_jsx("ul", {
      ...list,
      children: nodes
    });
  };
  return /*#__PURE__*/_jsxs("article", {
    "aria-label": `${method} ${path}`,
    ...props,
    ref: ref,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsxs("header", {
      ...header,
      children: [/*#__PURE__*/_jsx(Badge, {
        variant: "muted",
        children: method
      }), /*#__PURE__*/_jsx("code", {
        ...pathStyle,
        children: path
      })]
    }), /*#__PURE__*/_jsxs("div", {
      ...content,
      children: [description != null && /*#__PURE__*/_jsx("div", {
        ...descriptionStyle,
        children: description
      }), parameters != null && /*#__PURE__*/_jsx(Collapsible, {
        title: `Parameters (${parameters.length})`,
        defaultOpen: true,
        children: parameters.length ? renderProperties(parameters, 0, new Set()) : /*#__PURE__*/_jsx("p", {
          ...descriptionStyle,
          children: "No parameters."
        })
      }), requestBody != null && /*#__PURE__*/_jsx(Collapsible, {
        title: "Request body",
        defaultOpen: true,
        children: requestBody.length ? renderProperties(requestBody, 0, new Set()) : /*#__PURE__*/_jsx("p", {
          ...descriptionStyle,
          children: "No request body."
        })
      }), responseBody != null && /*#__PURE__*/_jsx(Collapsible, {
        title: "Response body",
        defaultOpen: true,
        children: responseBody.length ? renderProperties(responseBody, 0, new Set()) : /*#__PURE__*/_jsx("p", {
          ...descriptionStyle,
          children: "No response body."
        })
      }), children]
    })]
  });
});
//# sourceMappingURL=schema-display.js.map
