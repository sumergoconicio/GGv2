"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Icon } from "./icon.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const DOW = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const DOW_LONG = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
function sameDay(a, b) {
  return !!a && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
const sameMonth = (a, b) => !!a && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
/** Numeric Date constructors reinterpret years 0–99 as 1900–1999. */
function civilDate(year, month, day) {
  const date = new Date(0);
  date.setHours(0, 0, 0, 0);
  date.setFullYear(year, month, day);
  return date;
}
const startOfMonth = d => civilDate(d.getFullYear(), d.getMonth(), 1);
const dayKey = d => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
const addDays = (d, n) => civilDate(d.getFullYear(), d.getMonth(), d.getDate() + n);
/** Same day-of-month `n` months on, clamped to the target month's length. */
function addMonths(d, n) {
  const first = civilDate(d.getFullYear(), d.getMonth() + n, 1);
  const last = civilDate(first.getFullYear(), first.getMonth() + 1, 0).getDate();
  return civilDate(first.getFullYear(), first.getMonth(), Math.min(d.getDate(), last));
}
const longDate = (d, locale = "en") => d.toLocaleDateString(locale, {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
});
const styles = {
  cal: {
    kzqmXN: "x1o9jwpy",
    ks0D6T: "x193iq5w",
    kXHlph: "xw2csxc",
    $$css: true
  },
  head: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kjj79g: "x1qughib",
    kGNEyG: "x6s0dn4",
    kAzted: "x1wszdd",
    k1K539: "x1hpqcdg",
    $$css: true
  },
  title: {
    kGuDYH: "xkpwil5",
    k63SB2: "xk50ysn",
    kb6lSQ: "xjat59b",
    kLWn49: "x16h55sf",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  nav: {
    k1xSpc: "x78zum5",
    kOIVth: "xxhr3t",
    kmuXW: "x2lah0s",
    keTefX: "xvc5jky",
    $$css: true
  },
  page: {
    kB7OPa: "x9f619",
    kzqmXN: "x1uyfxw7",
    kZKoxP: "x9ve8r1",
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kaIpWk: "xkrxur",
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kGuDYH: "x1dcheo9",
    kMwMTN: "x1ixqp2s",
    kMzoRj: "xc342km",
    ksu8eU: "xng3xce",
    kmVPX3: "x1717udv",
    kWkggS: "xjbqb8w xlt1z8a x1oallzf",
    kMv6JI: "xjb2p0i",
    kkrTdU: "x1ypdohk",
    kSiTet: "x1hc1fzr x1lfpgzf",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x14tvtkk x16jegui",
    kInvED: "x1bqaal",
    $$css: true
  },
  icon: {
    k1xSpc: "x1lliihq",
    kMwMTN: "x1heor9g",
    $$css: true
  },
  grid: {
    kzqmXN: "xh8yej3",
    $$css: true
  },
  row: {
    k1xSpc: "xrvj5dj",
    kumcoG: "x3rctrl",
    $$css: true
  },
  dow: {
    kGuDYH: "xboafo0",
    k63SB2: "xk50ysn",
    kMwMTN: "x1ixqp2s",
    k9WMMc: "x2b8uid",
    kLWn49: "xli6nsh",
    kLKAdn: "x1iul6r4",
    kGO01o: "xes99ow",
    kg3NbH: "xnjsko4",
    $$css: true
  },
  day: {
    kSiTet: "x1hc1fzr x1d16sem",
    kmkexE: "x1487y47 xrozb4q",
    kB7OPa: "x9f619",
    kzqmXN: "xh8yej3",
    kZKoxP: "x9ve8r1",
    k7Eaqz: "x1nb6za0",
    kAzted: "x1wszdd",
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kGuDYH: "x1dcheo9",
    kcqcaj: "xss6m8b",
    kMwMTN: "x1gney9c",
    kWkggS: "xjbqb8w xlt1z8a x1oallzf",
    kMzoRj: "xc342km",
    ksu8eU: "xng3xce",
    kaIpWk: "xkrxur",
    kkrTdU: "x1ypdohk",
    kMv6JI: "xjb2p0i",
    kmVPX3: "x1717udv",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x14tvtkk x16jegui",
    kInvED: "x1bqaal",
    $$css: true
  },
  out: {
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  today: {
    kGVxlE: "x7oa9qm",
    $$css: true
  },
  selected: {
    kmkexE: "x1487y47 xrozb4q",
    kWkggS: "xmgn9m6 x1qbdut0 xqau7aa xf7h6k7",
    kaIpWk: "xkrxur",
    kMwMTN: "x19rmm7l x1pljmm8",
    k63SB2: "x1s688f",
    kAXs8y: "x1kzknox",
    kGVxlE: "x1gnnqk1",
    kjBf7l: "x17nfzg9 xg8g161",
    kInvED: "x1h1whov",
    $$css: true
  }
};

/**
 * Month grid with one roving tab stop. Arrows move by day and week,
 * Home/End to the week's ends, PageUp/PageDown by month (Shift: year).
 * Selected is ink; today is a hairline.
 */
export const Calendar = /*#__PURE__*/React.forwardRef(function Calendar({
  value,
  defaultValue,
  onValueChange,
  onSelect,
  defaultMonth,
  weekStart = 1,
  fixedWeeks = true,
  autoFocus,
  min,
  max,
  disabled = false,
  isDateDisabled,
  locale = "en",
  className,
  style,
  onKeyDown,
  ...props
}, ref) {
  const idBase = React.useId();
  const titleId = `${idBase}-title`;
  const isControlled = value !== undefined;
  const [inner, setInner] = React.useState(defaultValue);
  const selectedDate = isControlled ? value : inner;
  const today = new Date();
  const dateOnly = d => civilDate(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  const unavailable = d => disabled || !!min && dateOnly(d) < dateOnly(min) || !!max && dateOnly(d) > dateOnly(max) || !!isDateDisabled?.(d);
  const [month, setMonth] = React.useState(() => startOfMonth(selectedDate ?? defaultMonth ?? today));
  const [focusDate, setFocusDate] = React.useState(() => selectedDate ?? (sameMonth(today, month) ? today : month));
  const cellRefs = React.useRef(new Map());
  const focusPending = React.useRef(false);

  /* Follow the value when it changes underneath: show its month, rove to it. */
  const valueKey = selectedDate ? dayKey(selectedDate) : "";
  const seenValueKey = React.useRef(valueKey);
  React.useEffect(() => {
    if (seenValueKey.current === valueKey) return;
    seenValueKey.current = valueKey;
    if (selectedDate) {
      setMonth(startOfMonth(selectedDate));
      setFocusDate(selectedDate);
    }
  }, [valueKey, selectedDate]);

  /* The roving cell is always inside the shown month. */
  const roving = sameMonth(focusDate, month) ? focusDate : sameMonth(selectedDate, month) ? selectedDate : sameMonth(today, month) ? today : month;
  React.useEffect(() => {
    if (!focusPending.current) return;
    focusPending.current = false;
    cellRefs.current.get(dayKey(roving))?.focus();
  });

  /* A picker requests focus after its measured overlay becomes visible. */
  const rovingOnMount = React.useRef(roving);
  React.useEffect(() => {
    if (autoFocus) cellRefs.current.get(dayKey(rovingOnMount.current))?.focus();
  }, [autoFocus]);
  const first = civilDate(month.getFullYear(), month.getMonth(), 1);
  const lead = (first.getDay() - weekStart + 7) % 7;
  const start = civilDate(month.getFullYear(), month.getMonth(), 1 - lead);
  const monthDays = civilDate(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const rowCount = fixedWeeks ? 6 : Math.ceil((lead + monthDays) / 7);
  const weeks = Array.from({
    length: rowCount
  }, (_, w) => Array.from({
    length: 7
  }, (_, d) => addDays(start, w * 7 + d)));
  const title = month.toLocaleDateString(locale, {
    month: "long",
    year: "numeric"
  });
  const weekdayDates = Array.from({
    length: 7
  }, (_, i) => new Date(2024, 0, 7 + weekStart + i));
  const dows = weekdayDates.map(d => d.toLocaleDateString(locale, {
    weekday: "narrow"
  }));
  const dowsLong = weekdayDates.map(d => d.toLocaleDateString(locale, {
    weekday: "long"
  }));
  const shift = delta => {
    const next = addMonths(month, delta);
    setMonth(startOfMonth(next));
    setFocusDate(addMonths(roving, delta));
  };
  const moveFocus = next => {
    if (min && dateOnly(next) < dateOnly(min)) next = min;
    if (max && dateOnly(next) > dateOnly(max)) next = max;
    setFocusDate(next);
    if (!sameMonth(next, month)) setMonth(startOfMonth(next));
    focusPending.current = true;
  };
  const choose = d => {
    if (unavailable(d)) return;
    if (!isControlled) setInner(d);
    onValueChange?.(d);
    onSelect?.(d);
    setFocusDate(d);
    if (!sameMonth(d, month)) setMonth(startOfMonth(d));
  };
  const onGridKeyDown = e => {
    onKeyDown?.(e);
    if (e.defaultPrevented) return;
    const from = roving;
    const dow = (from.getDay() - weekStart + 7) % 7;
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        moveFocus(addDays(from, -1));
        return;
      case "ArrowRight":
        e.preventDefault();
        moveFocus(addDays(from, 1));
        return;
      case "ArrowUp":
        e.preventDefault();
        moveFocus(addDays(from, -7));
        return;
      case "ArrowDown":
        e.preventDefault();
        moveFocus(addDays(from, 7));
        return;
      case "Home":
        e.preventDefault();
        moveFocus(addDays(from, -dow));
        return;
      case "End":
        e.preventDefault();
        moveFocus(addDays(from, 6 - dow));
        return;
      case "PageUp":
        e.preventDefault();
        moveFocus(addMonths(from, e.shiftKey ? -12 : -1));
        return;
      case "PageDown":
        e.preventDefault();
        moveFocus(addMonths(from, e.shiftKey ? 12 : 1));
        return;
      default:
        return;
    }
  };
  const cal = rs(["rs-cal", className], styles.cal);
  const head = rs(["rs-cal-head"], styles.head);
  const titleSx = rs(["rs-cal-title"], styles.title);
  const nav = rs(["rs-cal-nav"], styles.nav);
  const page = rs(["rs-page", "rs-cal-page"], styles.page);
  const icon = rs(["rs-cal-icon"], styles.icon);
  const grid = rs(["rs-cal-grid"], styles.grid);
  const row = rs(["rs-cal-row"], styles.row);
  const dow = rs(["rs-cal-dow"], styles.dow);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    ...props,
    className: cal.className,
    style: {
      ...cal.style,
      ...style
    },
    children: [/*#__PURE__*/_jsxs("div", {
      className: head.className,
      style: head.style,
      children: [/*#__PURE__*/_jsx("span", {
        id: titleId,
        className: titleSx.className,
        style: titleSx.style,
        "aria-live": "polite",
        children: title
      }), /*#__PURE__*/_jsxs("span", {
        className: nav.className,
        style: nav.style,
        children: [/*#__PURE__*/_jsx("button", {
          type: "button",
          className: page.className,
          style: page.style,
          disabled: disabled || !!min && startOfMonth(month) <= startOfMonth(min),
          "aria-label": "Previous month",
          onClick: () => shift(-1),
          children: /*#__PURE__*/_jsx(Icon, {
            name: "chevron-left",
            size: 16,
            className: icon.className,
            style: icon.style
          })
        }), /*#__PURE__*/_jsx("button", {
          type: "button",
          className: page.className,
          style: page.style,
          disabled: disabled || !!max && startOfMonth(month) >= startOfMonth(max),
          "aria-label": "Next month",
          onClick: () => shift(1),
          children: /*#__PURE__*/_jsx(Icon, {
            name: "chevron-right",
            size: 16,
            className: icon.className,
            style: icon.style
          })
        })]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: grid.className,
      style: grid.style,
      role: "grid",
      "aria-labelledby": titleId,
      onKeyDown: onGridKeyDown,
      children: [/*#__PURE__*/_jsx("div", {
        className: row.className,
        style: row.style,
        role: "row",
        children: dows.map((d, i) => /*#__PURE__*/_jsx("span", {
          className: dow.className,
          style: dow.style,
          role: "columnheader",
          "aria-label": dowsLong[i],
          children: d
        }, dowsLong[i]))
      }), weeks.map((week, w) => /*#__PURE__*/_jsx("div", {
        className: row.className,
        style: row.style,
        role: "row",
        children: week.map(d => {
          const out = d.getMonth() !== month.getMonth();
          const selected = sameDay(selectedDate, d);
          const isToday = sameDay(today, d);
          const key = dayKey(d);
          const day = rs(["rs-cal-day", out && "rs-cal-day-out", isToday && "rs-cal-day-today", selected && "rs-cal-day-selected"], styles.day, out && styles.out, isToday && styles.today, selected && styles.selected);
          return /*#__PURE__*/_jsx("button", {
            ref: el => {
              if (el) cellRefs.current.set(key, el);else cellRefs.current.delete(key);
            },
            type: "button",
            role: "gridcell",
            tabIndex: !disabled && !out && sameDay(roving, d) ? 0 : -1,
            className: day.className,
            style: day.style,
            "aria-selected": selected,
            "aria-disabled": unavailable(d) || undefined,
            "aria-current": isToday ? "date" : undefined,
            "aria-label": longDate(d, locale),
            onClick: () => choose(d),
            children: d.getDate()
          }, key);
        })
      }, w))]
    })]
  });
});
//# sourceMappingURL=calendar.js.map
