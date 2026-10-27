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
    kMwMTN: "x1gney9c",
    kLWn49: "xfrs9s4",
    kHjlTd: "xj0a0fe",
    k1xSpc: "xrvj5dj",
    kOIVth: "x15iy025",
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
  name: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x1603h9y",
    k63SB2: "x1s688f",
    kLWn49: "xwn7fz2",
    kb6lSQ: "x1w69ole",
    $$css: true
  },
  status: {
    kGuDYH: "xboafo0",
    kmVPX3: "x48ff29",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    $$css: true
  },
  detail: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xkpwil5",
    kMwMTN: "x1ixqp2s",
    ks0D6T: "x1qp14f0",
    $$css: true
  },
  facts: {
    kogj98: "x1ghz6dp",
    k1xSpc: "xrvj5dj",
    kumcoG: "xnby9oq x1nk3w99",
    kOIVth: "x8fetqu",
    kmVPX3: "x1uz70x1",
    kWkggS: "x1nzd1wa",
    $$css: true
  },
  field: {
    k7Eaqz: "xeuugli",
    $$css: true
  },
  label: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  value: {
    kogj98: "x1ghz6dp",
    keoZOQ: "x1tbvfm1",
    kGuDYH: "xkpwil5",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  criteria: {
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    kB88ic: "xe8uvvx",
    kEafiO: "x1ro6g4h",
    kPef9Z: "x13fuv20",
    kLZC3w: "x1fq36pv",
    $$css: true
  },
  criterion: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    k8WAf4: "xgepmj6",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  criterionHead: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kjj79g: "x1qughib",
    kGNEyG: "x1pha0wt",
    kOIVth: "x1tmakyn",
    kGuDYH: "xkpwil5",
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    $$css: true
  }
};

/** Programme availability, supplied eligibility, and award terms kept as distinct facts. */
export const BenefitProgram = /*#__PURE__*/React.forwardRef(function BenefitProgram({
  programName,
  provider,
  status,
  eligibility,
  awardLabel,
  awardDetails,
  deadlineLabel,
  criteria,
  description,
  criteriaEmptyLabel = "Eligibility criteria not supplied",
  children,
  className,
  style,
  ...props
}, ref) {
  const root = rs(["rs-benefit-program", className], styles.root);
  const header = rs(["rs-benefit-program-header"], styles.header);
  const name = rs(["rs-benefit-program-name"], styles.name);
  const statusStyle = rs(["rs-benefit-program-status"], styles.status);
  const detail = rs(["rs-benefit-program-detail"], styles.detail);
  const facts = rs(["rs-benefit-program-facts"], styles.facts);
  const field = rs(["rs-benefit-program-field"], styles.field);
  const label = rs(["rs-benefit-program-label"], styles.label);
  const value = rs(["rs-benefit-program-value"], styles.value);
  const criteriaStyle = rs(["rs-benefit-program-criteria"], styles.criteria);
  const criterion = rs(["rs-benefit-program-criterion"], styles.criterion);
  const criterionHead = rs(["rs-benefit-program-criterion-head"], styles.criterionHead);
  const actions = rs(["rs-benefit-program-actions"], styles.actions);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    role: "group",
    "aria-label": programName,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsxs("div", {
      ...header,
      children: [/*#__PURE__*/_jsx("p", {
        ...name,
        children: programName
      }), /*#__PURE__*/_jsx("span", {
        ...statusStyle,
        children: status ?? "Status not supplied"
      })]
    }), description != null && /*#__PURE__*/_jsx("p", {
      ...detail,
      children: description
    }), /*#__PURE__*/_jsxs("dl", {
      ...facts,
      children: [/*#__PURE__*/_jsxs("div", {
        ...field,
        children: [/*#__PURE__*/_jsx("dt", {
          ...label,
          children: "Provider"
        }), /*#__PURE__*/_jsx("dd", {
          ...value,
          children: provider ?? "Provider not supplied"
        })]
      }), /*#__PURE__*/_jsxs("div", {
        ...field,
        children: [/*#__PURE__*/_jsx("dt", {
          ...label,
          children: "Your eligibility"
        }), /*#__PURE__*/_jsx("dd", {
          ...value,
          children: eligibility ?? "Eligibility not supplied"
        })]
      }), /*#__PURE__*/_jsxs("div", {
        ...field,
        children: [/*#__PURE__*/_jsx("dt", {
          ...label,
          children: "Award"
        }), /*#__PURE__*/_jsxs("dd", {
          ...value,
          children: [awardLabel ?? "Award amount not supplied", awardDetails != null && /*#__PURE__*/_jsx("p", {
            ...detail,
            children: awardDetails
          })]
        })]
      }), /*#__PURE__*/_jsxs("div", {
        ...field,
        children: [/*#__PURE__*/_jsx("dt", {
          ...label,
          children: "Application deadline"
        }), /*#__PURE__*/_jsx("dd", {
          ...value,
          children: deadlineLabel ?? "Deadline not supplied"
        })]
      })]
    }), criteria.length > 0 ? /*#__PURE__*/_jsx("ul", {
      ...criteriaStyle,
      "aria-label": "Eligibility criteria",
      children: criteria.map(item => /*#__PURE__*/_jsxs("li", {
        ...criterion,
        children: [/*#__PURE__*/_jsxs("div", {
          ...criterionHead,
          children: [/*#__PURE__*/_jsx("strong", {
            children: item.label
          }), /*#__PURE__*/_jsx("span", {
            children: item.status ?? "Status not supplied"
          })]
        }), item.description != null && /*#__PURE__*/_jsx("p", {
          ...detail,
          children: item.description
        })]
      }, item.id))
    }) : /*#__PURE__*/_jsx("p", {
      ...detail,
      children: criteriaEmptyLabel
    }), children != null && /*#__PURE__*/_jsx("div", {
      ...actions,
      children: children
    })]
  });
});
//# sourceMappingURL=benefit-program.js.map
