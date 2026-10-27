import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kB7OPa: "x9f619",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kmVPX3: "xomzojh",
    k1xSpc: "xrvj5dj",
    kOIVth: "x15iy025",
    kMwMTN: "x1gney9c",
    kWkggS: "xhpg8l3",
    kHjlTd: "xj0a0fe",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  header: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kjj79g: "x1qughib",
    kGNEyG: "x1pha0wt",
    kOIVth: "x8233eu",
    $$css: true
  },
  title: {
    kogj98: "x1ghz6dp",
    k63SB2: "x1s688f",
    kGuDYH: "xkpwil5",
    $$css: true
  },
  status: {
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kmVPX3: "x48ff29",
    kGuDYH: "xboafo0",
    $$css: true
  },
  holder: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x1aueamr",
    k63SB2: "xk50ysn",
    kb6lSQ: "x1b4dsll",
    kLWn49: "x132q4wb",
    $$css: true
  },
  fields: {
    kogj98: "x1ghz6dp",
    k1xSpc: "xrvj5dj",
    kumcoG: "xnby9oq x1nk3w99",
    kOIVth: "x8fetqu",
    $$css: true
  },
  field: {
    k7Eaqz: "xeuugli",
    $$css: true
  },
  label: {
    kogj98: "x1ghz6dp",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "xboafo0",
    $$css: true
  },
  value: {
    kogj98: "x1ghz6dp",
    keoZOQ: "x1tbvfm1",
    kGuDYH: "xkpwil5",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  detail: {
    kogj98: "x1ghz6dp",
    kMwMTN: "x1ixqp2s",
    ks0D6T: "x1qp14f0",
    kGuDYH: "xkpwil5",
    $$css: true
  },
  actions: {
    kEafiO: "x1ro6g4h",
    kPef9Z: "x13fuv20",
    kLZC3w: "x1fq36pv",
    kLKAdn: "x12t3zde",
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    $$css: true
  }
};

/** A credential record using only the supplied, display-safe identity information. */
export const IdentityDocument = /*#__PURE__*/React.forwardRef(function IdentityDocument({
  documentTitle,
  holderName,
  maskedIdentifier,
  identifierLabel = "Document number",
  issuer,
  issuedLabel,
  expiresLabel,
  status,
  statusDetail,
  children,
  className,
  style,
  ...props
}, ref) {
  const root = rs(["rs-identity-document", className], styles.root);
  const header = rs(["rs-identity-document-header"], styles.header);
  const title = rs(["rs-identity-document-title"], styles.title);
  const statusStyle = rs(["rs-identity-document-status"], styles.status);
  const holder = rs(["rs-identity-document-holder"], styles.holder);
  const fields = rs(["rs-identity-document-fields"], styles.fields);
  const field = rs(["rs-identity-document-field"], styles.field);
  const label = rs(["rs-identity-document-label"], styles.label);
  const value = rs(["rs-identity-document-value"], styles.value);
  const detail = rs(["rs-identity-document-detail"], styles.detail);
  const actions = rs(["rs-identity-document-actions"], styles.actions);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    role: "group",
    "aria-label": documentTitle,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsxs("div", {
      ...header,
      children: [/*#__PURE__*/_jsx("p", {
        ...title,
        children: documentTitle
      }), /*#__PURE__*/_jsx("span", {
        ...statusStyle,
        children: status ?? "Status not supplied"
      })]
    }), /*#__PURE__*/_jsx("p", {
      ...holder,
      children: holderName ?? "Holder not supplied"
    }), /*#__PURE__*/_jsxs("dl", {
      ...fields,
      children: [/*#__PURE__*/_jsxs("div", {
        ...field,
        children: [/*#__PURE__*/_jsx("dt", {
          ...label,
          children: identifierLabel
        }), /*#__PURE__*/_jsx("dd", {
          ...value,
          children: maskedIdentifier?.trim() ? maskedIdentifier : "Identifier not supplied"
        })]
      }), /*#__PURE__*/_jsxs("div", {
        ...field,
        children: [/*#__PURE__*/_jsx("dt", {
          ...label,
          children: "Issuer"
        }), /*#__PURE__*/_jsx("dd", {
          ...value,
          children: issuer ?? "Issuer not supplied"
        })]
      }), /*#__PURE__*/_jsxs("div", {
        ...field,
        children: [/*#__PURE__*/_jsx("dt", {
          ...label,
          children: "Issued"
        }), /*#__PURE__*/_jsx("dd", {
          ...value,
          children: issuedLabel ?? "Issue date not supplied"
        })]
      }), /*#__PURE__*/_jsxs("div", {
        ...field,
        children: [/*#__PURE__*/_jsx("dt", {
          ...label,
          children: "Expires"
        }), /*#__PURE__*/_jsx("dd", {
          ...value,
          children: expiresLabel ?? "Expiry date not supplied"
        })]
      })]
    }), statusDetail != null && /*#__PURE__*/_jsx("p", {
      ...detail,
      children: statusDetail
    }), children != null && /*#__PURE__*/_jsx("div", {
      ...actions,
      children: children
    })]
  });
});
//# sourceMappingURL=identity-document.js.map
