import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  root: {
    kB7OPa: "x9f619",
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kmVPX3: "xomzojh",
    kMwMTN: "x1gney9c",
    kWkggS: "xhpg8l3",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kOIVth: "x15iy025",
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
    kGuDYH: "x1c3i2sq",
    k63SB2: "x1s688f",
    kLWn49: "xwn7fz2",
    kb6lSQ: "x1w69ole",
    $$css: true
  },
  status: {
    kGuDYH: "xboafo0",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kmVPX3: "x48ff29",
    $$css: true
  },
  when: {
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kOIVth: "xvh977a",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  date: {
    kGuDYH: "x1aueamr",
    k63SB2: "xk50ysn",
    kb6lSQ: "x1w69ole",
    $$css: true
  },
  time: {
    kGuDYH: "xkpwil5",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  details: {
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
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    kEafiO: "x1ro6g4h",
    kPef9Z: "x13fuv20",
    kLZC3w: "x1fq36pv",
    kLKAdn: "x12t3zde",
    $$css: true
  }
};

/** Appointment details exactly as supplied, with an application-owned action slot. */
export const AppointmentCard = /*#__PURE__*/React.forwardRef(function AppointmentCard({
  appointmentTitle,
  dateLabel,
  timeLabel,
  timeZone,
  dateTime,
  clinician,
  location,
  status,
  children,
  className,
  style,
  ...props
}, ref) {
  const root = rs(["rs-appointment-card", className], styles.root);
  const header = rs(["rs-appointment-card-header"], styles.header);
  const title = rs(["rs-appointment-card-title"], styles.title);
  const statusStyle = rs(["rs-appointment-card-status"], styles.status);
  const when = rs(["rs-appointment-card-when"], styles.when);
  const date = rs(["rs-appointment-card-date"], styles.date);
  const time = rs(["rs-appointment-card-time"], styles.time);
  const details = rs(["rs-appointment-card-details"], styles.details);
  const field = rs(["rs-appointment-card-field"], styles.field);
  const label = rs(["rs-appointment-card-label"], styles.label);
  const value = rs(["rs-appointment-card-value"], styles.value);
  const actions = rs(["rs-appointment-card-actions"], styles.actions);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    role: "group",
    "aria-label": appointmentTitle,
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
        children: appointmentTitle
      }), /*#__PURE__*/_jsx("span", {
        ...statusStyle,
        children: status
      })]
    }), /*#__PURE__*/_jsxs("div", {
      ...when,
      children: [dateTime ? /*#__PURE__*/_jsx("time", {
        ...date,
        dateTime: dateTime,
        children: dateLabel
      }) : /*#__PURE__*/_jsx("span", {
        ...date,
        children: dateLabel
      }), /*#__PURE__*/_jsxs("span", {
        ...time,
        children: [timeLabel, " \xB7 ", timeZone]
      })]
    }), /*#__PURE__*/_jsxs("dl", {
      ...details,
      children: [/*#__PURE__*/_jsxs("div", {
        ...field,
        children: [/*#__PURE__*/_jsx("dt", {
          ...label,
          children: "Clinician"
        }), /*#__PURE__*/_jsx("dd", {
          ...value,
          children: clinician ?? "Clinician not supplied"
        })]
      }), /*#__PURE__*/_jsxs("div", {
        ...field,
        children: [/*#__PURE__*/_jsx("dt", {
          ...label,
          children: "Location"
        }), /*#__PURE__*/_jsx("dd", {
          ...value,
          children: location ?? "Location not supplied"
        })]
      })]
    }), children != null && /*#__PURE__*/_jsx("div", {
      ...actions,
      children: children
    })]
  });
});
//# sourceMappingURL=appointment-card.js.map
