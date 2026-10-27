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
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    kmVPX3: "x1uz70x1",
    k7Eaqz: "xeuugli",
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
    kOIVth: "x13z6uf9",
    $$css: true
  },
  name: {
    k63SB2: "x1s688f",
    kHjlTd: "xj0a0fe",
    k7Eaqz: "xeuugli",
    kUk6DE: "x12lumcd",
    $$css: true
  },
  versions: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x6s0dn4",
    kOIVth: "x13z6uf9",
    kMv6JI: "x1mb2qyg",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  description: {
    kMwMTN: "x1ixqp2s",
    kogj98: "x1ghz6dp",
    $$css: true
  },
  list: {
    kZCmMZ: "xjh29tw",
    kogj98: "x1ghz6dp",
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    kMwMTN: "x1gney9c",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    $$css: true
  }
};

/** Supplied package changes and dependencies; never resolves or installs packages. */
export const PackageInfo = /*#__PURE__*/React.forwardRef(function PackageInfo({
  name,
  currentVersion,
  newVersion,
  changeType,
  description,
  dependencies,
  actions,
  children,
  className,
  style,
  ...props
}, ref) {
  const root = rs(["rs-package-info", className], styles.root);
  const header = rs(["rs-package-info-header"], styles.header);
  const nameStyle = rs(["rs-package-info-name"], styles.name);
  const versions = rs(["rs-package-info-versions"], styles.versions);
  const descriptionStyle = rs(["rs-package-info-description"], styles.description);
  const list = rs(["rs-package-info-list"], styles.list);
  const actionStyle = rs(["rs-package-info-actions"], styles.actions);
  return /*#__PURE__*/_jsxs("article", {
    "aria-label": `Package ${name}`,
    ...props,
    ref: ref,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsxs("header", {
      ...header,
      children: [/*#__PURE__*/_jsx("code", {
        ...nameStyle,
        children: name
      }), changeType && /*#__PURE__*/_jsx(Badge, {
        variant: "muted",
        children: changeType
      })]
    }), (currentVersion || newVersion) && /*#__PURE__*/_jsxs("div", {
      ...versions,
      children: [currentVersion && /*#__PURE__*/_jsxs("span", {
        children: ["Current ", currentVersion]
      }), currentVersion && newVersion && /*#__PURE__*/_jsx("span", {
        "aria-hidden": "true",
        children: "\u2192"
      }), newVersion && /*#__PURE__*/_jsxs("strong", {
        children: ["Proposed ", newVersion]
      })]
    }), description != null && /*#__PURE__*/_jsx("div", {
      ...descriptionStyle,
      children: description
    }), dependencies != null && /*#__PURE__*/_jsxs(Collapsible, {
      title: `Dependencies (${dependencies.length})`,
      children: [/*#__PURE__*/_jsx("ul", {
        ...list,
        children: dependencies.map(dependency => /*#__PURE__*/_jsxs("li", {
          children: [/*#__PURE__*/_jsx("code", {
            children: dependency.name
          }), " ", dependency.version, dependency.kind && ` · ${dependency.kind}`]
        }, `${dependency.kind}:${dependency.name}`))
      }), dependencies.length === 0 && /*#__PURE__*/_jsx("p", {
        ...descriptionStyle,
        children: "No dependencies."
      })]
    }), children, actions != null && /*#__PURE__*/_jsx("div", {
      ...actionStyle,
      children: actions
    })]
  });
});
//# sourceMappingURL=package-info.js.map
