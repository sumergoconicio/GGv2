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
    k1xSpc: "xrvj5dj",
    kOIVth: "x15iy025",
    kMwMTN: "x1gney9c",
    kLWn49: "xfrs9s4",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  header: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kjj79g: "x1qughib",
    kGNEyG: "x1pha0wt",
    kOIVth: "x1tmakyn",
    $$css: true
  },
  title: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x1c3i2sq",
    k63SB2: "x1s688f",
    kLWn49: "xwn7fz2",
    $$css: true
  },
  reference: {
    kMwMTN: "x1ixqp2s",
    kGuDYH: "xkpwil5",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  overview: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    $$css: true
  },
  status: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xngnso2",
    k63SB2: "xk50ysn",
    kLWn49: "x132q4wb",
    kb6lSQ: "x1b4dsll",
    $$css: true
  },
  detail: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xkpwil5",
    kMwMTN: "x1ixqp2s",
    ks0D6T: "x1qp14f0",
    $$css: true
  },
  milestones: {
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    kB88ic: "xe8uvvx",
    kEafiO: "x1ro6g4h",
    kPef9Z: "x13fuv20",
    kLZC3w: "x1fq36pv",
    $$css: true
  },
  milestone: {
    k1xSpc: "xrvj5dj",
    kumcoG: "x1kztow8 x1nk3w99",
    kOIVth: "x1tmakyn",
    kmVPX3: "x1uz70x1",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  current: {
    kWkggS: "x1nzd1wa x18t4had",
    k63SB2: "x1s688f",
    $$css: true
  },
  milestoneLabel: {
    kGuDYH: "xkpwil5",
    $$css: true
  },
  milestoneMeta: {
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kGNEyG: "xuk3077 xspaawh",
    kOIVth: "xvh977a",
    kGuDYH: "xboafo0",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  next: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x13z6uf9",
    kGuDYH: "xkpwil5",
    $$css: true
  },
  nextLabel: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    $$css: true
  }
};

/** A case reference, explicit decision status, and supplied milestones with no inferred progress. */
export const ApplicationStatus = /*#__PURE__*/React.forwardRef(function ApplicationStatus({
  applicationTitle,
  reference,
  status,
  statusDetail,
  updatedLabel,
  milestones,
  nextStep,
  milestonesEmptyLabel = "Application milestones not supplied",
  children,
  className,
  style,
  ...props
}, ref) {
  const root = rs(["rs-application-status", className], styles.root);
  const header = rs(["rs-application-status-header"], styles.header);
  const title = rs(["rs-application-status-title"], styles.title);
  const referenceStyle = rs(["rs-application-status-reference"], styles.reference);
  const overview = rs(["rs-application-status-overview"], styles.overview);
  const statusStyle = rs(["rs-application-status-status"], styles.status);
  const detail = rs(["rs-application-status-detail"], styles.detail);
  const milestonesStyle = rs(["rs-application-status-milestones"], styles.milestones);
  const milestoneLabel = rs(["rs-application-status-milestone-label"], styles.milestoneLabel);
  const milestoneMeta = rs(["rs-application-status-milestone-meta"], styles.milestoneMeta);
  const next = rs(["rs-application-status-next"], styles.next);
  const nextLabel = rs(["rs-application-status-next-label"], styles.nextLabel);
  const actions = rs(["rs-application-status-actions"], styles.actions);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    role: "group",
    "aria-label": applicationTitle,
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
        children: applicationTitle
      }), /*#__PURE__*/_jsx("span", {
        ...referenceStyle,
        children: reference ?? "Case reference not supplied"
      })]
    }), /*#__PURE__*/_jsxs("div", {
      ...overview,
      children: [/*#__PURE__*/_jsx("p", {
        ...statusStyle,
        children: status ?? "Status not supplied"
      }), statusDetail != null && /*#__PURE__*/_jsx("p", {
        ...detail,
        children: statusDetail
      }), /*#__PURE__*/_jsx("p", {
        ...detail,
        children: updatedLabel ?? "Update time not supplied"
      })]
    }), milestones.length > 0 ? /*#__PURE__*/_jsx("ol", {
      ...milestonesStyle,
      "aria-label": "Application milestones",
      children: milestones.map(item => {
        const milestone = rs(["rs-application-status-milestone", item.current && "rs-application-status-current"], styles.milestone, item.current && styles.current);
        return /*#__PURE__*/_jsxs("li", {
          ...milestone,
          "aria-current": item.current ? "step" : undefined,
          children: [/*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("span", {
              ...milestoneLabel,
              children: item.label
            }), item.description != null && /*#__PURE__*/_jsx("p", {
              ...detail,
              children: item.description
            })]
          }), /*#__PURE__*/_jsxs("div", {
            ...milestoneMeta,
            children: [/*#__PURE__*/_jsx("span", {
              children: item.status ?? "Status not supplied"
            }), item.dateTime && item.dateLabel != null ? /*#__PURE__*/_jsx("time", {
              dateTime: item.dateTime,
              children: item.dateLabel
            }) : /*#__PURE__*/_jsx("span", {
              children: item.dateLabel ?? "Date not supplied"
            })]
          })]
        }, item.id);
      })
    }) : /*#__PURE__*/_jsx("p", {
      ...detail,
      children: milestonesEmptyLabel
    }), /*#__PURE__*/_jsxs("div", {
      ...next,
      children: [/*#__PURE__*/_jsx("p", {
        ...nextLabel,
        children: "Next step"
      }), /*#__PURE__*/_jsx("div", {
        children: nextStep ?? "Next step not supplied"
      })]
    }), children != null && /*#__PURE__*/_jsx("div", {
      ...actions,
      children: children
    })]
  });
});
//# sourceMappingURL=application-status.js.map
