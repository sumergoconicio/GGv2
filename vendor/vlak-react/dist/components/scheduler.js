"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { Button } from "./button.js";
import { Icon } from "./icon.js";
import { Input } from "./input.js";
import { NativeSelect } from "./native-select.js";
import { Dialog, DialogTitle } from "./dialog.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
const styles = {
  root: {
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kOIVth: "x8fetqu",
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    $$css: true
  },
  toolbar: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x6s0dn4",
    kOIVth: "x13z6uf9",
    $$css: true
  },
  action: {
    kzqmXN: "x14atkfc",
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kg3NbH: "x1ryrjj2",
    $$css: true
  },
  title: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x1jchvi3",
    k63SB2: "x1s688f",
    kLWn49: "xfrs9s4",
    kUk6DE: "xehxkzz",
    $$css: true
  },
  scroll: {
    kXHlph: "xw2csxc",
    kmVPX3: "x78pyy4",
    kPJHz1: "x784prv",
    k7shQP: "x9v5kkp",
    kZs9gx: "x14tvtkk",
    kiEn40: "x1bqaal",
    $$css: true
  },
  week: {
    k1xSpc: "xrvj5dj",
    kumcoG: "x1a1leux",
    k7Eaqz: "x1cu11pk",
    kOIVth: "xxhr3t",
    $$css: true
  },
  day: {
    kmVPX3: "x79iv2k",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  selected: {
    kWkggS: "x6583kg",
    $$css: true
  },
  date: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kMzoRj: "xc342km",
    kaIpWk: "xkrxur",
    kWkggS: "xjbqb8w",
    kMwMTN: "x1gney9c",
    kGuDYH: "x1dcheo9",
    k63SB2: "x1s688f",
    kMv6JI: "xjb2p0i",
    kkrTdU: "x1ypdohk",
    kg3NbH: "x97vtpp",
    kPJHz1: "x784prv",
    k7shQP: "x9v5kkp",
    kZs9gx: "x14tvtkk",
    kiEn40: "x7s97pk",
    $$css: true
  },
  month: {
    kzqmXN: "xh8yej3",
    k7Eaqz: "xo56fzp",
    kPzzVL: "x140o2bo",
    kLvRdT: "x1mwwwfo",
    $$css: true
  },
  weekday: {
    kmVPX3: "x79iv2k",
    kGuDYH: "xboafo0",
    k63SB2: "xk50ysn",
    k9WMMc: "x1yc453h",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  cell: {
    kXLuUW: "x16dsc37",
    kZKoxP: "xw76nk8",
    kmVPX3: "x7gbtqy",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    $$css: true
  },
  outside: {
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  list: {
    kH6xsr: "x3ct3a4",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kOIVth: "x8233eu",
    $$css: true
  },
  event: {
    k7Eaqz: "xeuugli",
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kOIVth: "xvh977a",
    k8WAf4: "x18g2hj5",
    $$css: true
  },
  eventButton: {
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kGNEyG: "x1cy8zhl",
    kOIVth: "xvh977a",
    kzqmXN: "xh8yej3",
    kAzted: "x1wszdd",
    kmVPX3: "x7gbtqy",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd",
    kaIpWk: "xkrxur",
    kWkggS: "xhpg8l3",
    kMwMTN: "x1gney9c",
    kGuDYH: "xkpwil5",
    kMv6JI: "xjb2p0i",
    k9WMMc: "x1yc453h",
    kHjlTd: "xj0a0fe",
    kkrTdU: "x1ypdohk",
    kPJHz1: "x784prv",
    k7shQP: "x9v5kkp",
    kZs9gx: "x14tvtkk",
    kiEn40: "x7s97pk",
    kWC4TW: "x1q5mit8",
    kYPGJ8: "x1s07b3s",
    $$css: true
  },
  time: {
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    kLWn49: "xfrs9s4",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  empty: {
    kogj98: "x1ghz6dp",
    k8WAf4: "xo0yzjp",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x1dcheo9",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  form: {
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kOIVth: "x8fetqu",
    $$css: true
  }
};
const validDate = date => Number.isFinite(date.getTime());
// UTC Dates below represent civil calendar days, not event instants. This keeps
// calendar arithmetic independent from server zone and daylight-saving offsets.
const addDays = (date, days) => new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + days));
const sameDay = (a, b) => a.getUTCFullYear() === b.getUTCFullYear() && a.getUTCMonth() === b.getUTCMonth() && a.getUTCDate() === b.getUTCDate();
const dateInput = date => `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, "0")}-${String(date.getUTCDate()).padStart(2, "0")}`;
const zoneFormatters = new Map();
function zoneParts(date, timeZone) {
  let formatter = zoneFormatters.get(timeZone);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h23"
    });
    zoneFormatters.set(timeZone, formatter);
  }
  const parts = Object.fromEntries(formatter.formatToParts(date).map(part => [part.type, part.value]));
  return {
    year: Number(parts.year),
    month: Number(parts.month),
    day: Number(parts.day),
    hour: Number(parts.hour),
    minute: Number(parts.minute),
    second: Number(parts.second)
  };
}
function dayInZone(date, timeZone) {
  const parts = zoneParts(date, timeZone);
  return new Date(Date.UTC(parts.year, parts.month - 1, parts.day));
}
function timeInput(date, timeZone) {
  const parts = zoneParts(date, timeZone);
  return `${String(parts.hour).padStart(2, "0")}:${String(parts.minute).padStart(2, "0")}`;
}
function atTime(day, time, timeZone) {
  const [hours, minutes] = time.split(":").map(Number);
  if (!Number.isFinite(hours) || !Number.isFinite(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) return null;
  const target = Date.UTC(day.getUTCFullYear(), day.getUTCMonth(), day.getUTCDate(), hours, minutes);
  const civilTimestamp = instant => {
    const parts = zoneParts(new Date(instant), timeZone);
    return Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute, parts.second);
  };
  let guess = target;
  for (let attempt = 0; attempt < 4; attempt++) {
    const delta = target - civilTimestamp(guess);
    if (delta === 0) {
      // A repeated fall-back time selects its earlier valid occurrence.
      for (const minutesEarlier of [120, 90, 60, 30]) {
        const earlier = guess - minutesEarlier * 60000;
        if (civilTimestamp(earlier) === target) return new Date(earlier);
      }
      return new Date(guess);
    }
    guess += delta;
  }
  return null; // A spring-forward gap has no matching civil clock time.
}
function parseDay(value) {
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return null;
  const result = new Date(Date.UTC(year, month - 1, day));
  return validDate(result) && result.getUTCMonth() === month - 1 && result.getUTCDate() === day ? result : null;
}

/** Agenda, week, and month planning in an explicit or browser-local zone. Mutations are callbacks. */
export const Scheduler = /*#__PURE__*/React.forwardRef(function Scheduler({
  events,
  value,
  defaultValue,
  onValueChange,
  view,
  defaultView = "week",
  onViewChange,
  onEventSelect,
  onSlotSelect,
  onEventMove,
  weekStart = 1,
  locale = "en",
  timeZone,
  label = "Schedule",
  disabled = false,
  className,
  style,
  ...props
}, ref) {
  const zone = timeZone ?? Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => setHydrated(true), []);
  const [inner, setInner] = React.useState(() => defaultValue && validDate(defaultValue) ? defaultValue : new Date());
  const selected = dayInZone(value && validDate(value) ? value : inner, zone);
  const [innerView, setInnerView] = React.useState(defaultView);
  const currentView = view ?? innerView;
  const [slotTime, setSlotTime] = React.useState("09:00");
  const [editing, setEditing] = React.useState(null);
  const [editDay, setEditDay] = React.useState("");
  const [editTime, setEditTime] = React.useState("");
  const [editError, setEditError] = React.useState("");
  const [announcement, setAnnouncement] = React.useState("");
  const changeDay = day => {
    if (disabled || !validDate(day)) return;
    const instant = atTime(day, "00:00", zone) ?? atTime(day, "12:00", zone);
    if (!instant) return;
    if (value === undefined) setInner(instant);
    onValueChange?.(instant);
  };
  const shift = direction => {
    if (currentView === "month") {
      const first = new Date(Date.UTC(selected.getUTCFullYear(), selected.getUTCMonth() + direction, 1));
      const last = new Date(Date.UTC(first.getUTCFullYear(), first.getUTCMonth() + 1, 0)).getUTCDate();
      changeDay(new Date(Date.UTC(first.getUTCFullYear(), first.getUTCMonth(), Math.min(last, selected.getUTCDate()))));
    } else changeDay(addDays(selected, direction * (currentView === "week" ? 7 : 1)));
  };
  const sorted = React.useMemo(() => events.filter(event => validDate(event.start) && validDate(event.end) && event.end > event.start).slice().sort((a, b) => a.start.getTime() - b.start.getTime()).map(event => ({
    event,
    firstDay: dayInZone(event.start, zone),
    lastDay: dayInZone(new Date(event.end.getTime() - 1), zone)
  })), [events, zone]);
  const forDay = day => sorted.filter(item => item.firstDay <= day && item.lastDay >= day).map(item => item.event);
  const timeFormat = date => date.toLocaleTimeString(locale, {
    timeZone: zone,
    hour: "2-digit",
    minute: "2-digit"
  });
  const range = event => sameDay(dayInZone(event.start, zone), dayInZone(event.end, zone)) ? `${timeFormat(event.start)}–${timeFormat(event.end)}` : `${event.start.toLocaleString(locale, {
    timeZone: zone,
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  })} – ${event.end.toLocaleString(locale, {
    timeZone: zone,
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  })}`;
  const weekday = day => day.toLocaleDateString(locale, {
    timeZone: "UTC",
    weekday: "short"
  });
  const dayLabel = day => day.toLocaleDateString(locale, {
    timeZone: "UTC",
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });
  const weekBeginning = addDays(selected, -((selected.getUTCDay() - weekStart + 7) % 7));
  const week = Array.from({
    length: 7
  }, (_, index) => addDays(weekBeginning, index));
  const firstOfMonth = new Date(Date.UTC(selected.getUTCFullYear(), selected.getUTCMonth(), 1));
  const monthBeginning = addDays(firstOfMonth, -((firstOfMonth.getUTCDay() - weekStart + 7) % 7));
  const titleText = currentView === "month" ? selected.toLocaleDateString(locale, {
    timeZone: "UTC",
    month: "long",
    year: "numeric"
  }) : currentView === "agenda" ? dayLabel(selected) : `${week[0].toLocaleDateString(locale, {
    timeZone: "UTC",
    month: "short",
    day: "numeric"
  })} – ${week[6].toLocaleDateString(locale, {
    timeZone: "UTC",
    month: "short",
    day: "numeric",
    year: "numeric"
  })}`;
  const root = rs(["rs-scheduler", className], styles.root);
  const toolbar = rs(["rs-scheduler-toolbar"], styles.toolbar);
  const action = rs(["rs-scheduler-action"], styles.action);
  const title = rs(["rs-scheduler-title"], styles.title);
  const scroll = rs(["rs-scheduler-scroll"], styles.scroll);
  const weekStyle = rs(["rs-scheduler-week"], styles.week);
  const dateStyle = rs(["rs-scheduler-date"], styles.date);
  const monthStyle = rs(["rs-scheduler-month"], styles.month);
  const weekdayStyle = rs(["rs-scheduler-weekday"], styles.weekday);
  const list = rs(["rs-scheduler-list"], styles.list);
  const eventStyle = rs(["rs-scheduler-event"], styles.event);
  const eventButton = rs(["rs-scheduler-event-button"], styles.eventButton);
  const time = rs(["rs-scheduler-time"], styles.time);
  const empty = rs(["rs-scheduler-empty"], styles.empty);
  const form = rs(["rs-scheduler-form"], styles.form);
  // Server and browser may have different zones or clocks. The named shell is
  // stable on both; calendar dates are introduced only after hydration.
  if (!hydrated) return /*#__PURE__*/_jsx("div", {
    ref: ref,
    role: "region",
    "aria-label": label,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: /*#__PURE__*/_jsx("p", {
      ...empty,
      role: "status",
      children: "Loading schedule\u2026"
    })
  });
  const eventList = day => {
    const items = forDay(day);
    return items.length ? /*#__PURE__*/_jsx("ol", {
      ...list,
      children: items.map(event => /*#__PURE__*/_createElement("li", {
        ...eventStyle,
        key: event.id
      }, onEventSelect ? /*#__PURE__*/_jsxs("button", {
        ...eventButton,
        type: "button",
        disabled: disabled || event.disabled,
        onClick: () => onEventSelect(event),
        children: [event.title, /*#__PURE__*/_jsx("span", {
          ...time,
          children: range(event)
        })]
      }) : /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx("span", {
          children: event.title
        }), /*#__PURE__*/_jsx("span", {
          ...time,
          children: range(event)
        })]
      }), onEventMove && /*#__PURE__*/_jsx(Button, {
        ...action,
        variant: "ghost",
        disabled: disabled || event.disabled,
        "aria-label": `Reschedule ${event.title}`,
        onClick: () => {
          setEditing(event);
          setEditError("");
          setEditDay(dateInput(dayInZone(event.start, zone)));
          setEditTime(timeInput(event.start, zone));
        },
        children: "Reschedule"
      })))
    }) : /*#__PURE__*/_jsx("p", {
      ...empty,
      children: "No events."
    });
  };
  const chooseSlot = day => {
    const next = atTime(day, slotTime, zone);
    if (!next) {
      setAnnouncement(`That time does not exist in ${zone} because the clocks change. Choose another time.`);
      return;
    }
    if (!disabled) onSlotSelect?.(next);
  };
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    role: "region",
    "aria-label": label,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsxs("div", {
      ...toolbar,
      children: [/*#__PURE__*/_jsx("h3", {
        ...title,
        "aria-live": "polite",
        children: titleText
      }), /*#__PURE__*/_jsx(Button, {
        ...action,
        variant: "ghost",
        "aria-label": `Previous ${currentView === "agenda" ? "day" : currentView}`,
        disabled: disabled,
        onClick: () => shift(-1),
        children: /*#__PURE__*/_jsx(Icon, {
          name: "chevron-left"
        })
      }), /*#__PURE__*/_jsx(Button, {
        ...action,
        variant: "ghost",
        disabled: disabled,
        onClick: () => changeDay(dayInZone(new Date(), zone)),
        children: "Today"
      }), /*#__PURE__*/_jsx(Button, {
        ...action,
        variant: "ghost",
        "aria-label": `Next ${currentView === "agenda" ? "day" : currentView}`,
        disabled: disabled,
        onClick: () => shift(1),
        children: /*#__PURE__*/_jsx(Icon, {
          name: "chevron-right"
        })
      })]
    }), /*#__PURE__*/_jsxs("div", {
      ...toolbar,
      children: [/*#__PURE__*/_jsx(Input, {
        type: "date",
        "aria-label": "Selected date",
        value: dateInput(selected),
        disabled: disabled,
        onChange: event => {
          const day = parseDay(event.target.value);
          if (day) changeDay(day);
        }
      }), /*#__PURE__*/_jsxs(NativeSelect, {
        "aria-label": "Schedule view",
        value: currentView,
        disabled: disabled,
        onChange: event => {
          const next = event.target.value;
          if (view === undefined) setInnerView(next);
          onViewChange?.(next);
        },
        children: [/*#__PURE__*/_jsx("option", {
          value: "agenda",
          children: "Agenda"
        }), /*#__PURE__*/_jsx("option", {
          value: "week",
          children: "Week"
        }), /*#__PURE__*/_jsx("option", {
          value: "month",
          children: "Month"
        })]
      })]
    }), /*#__PURE__*/_jsxs("p", {
      ...time,
      children: ["Times in ", zone]
    }), onSlotSelect && /*#__PURE__*/_jsxs("div", {
      ...toolbar,
      children: [/*#__PURE__*/_jsx(Input, {
        type: "time",
        "aria-label": "New event time",
        value: slotTime,
        disabled: disabled,
        onChange: event => setSlotTime(event.target.value)
      }), /*#__PURE__*/_jsxs(Button, {
        ...action,
        variant: "ghost",
        disabled: disabled || !slotTime,
        onClick: () => chooseSlot(selected),
        children: [/*#__PURE__*/_jsx(Icon, {
          name: "plus"
        }), "Add event"]
      })]
    }), currentView === "agenda" ? eventList(selected) : /*#__PURE__*/_jsx("div", {
      ...scroll,
      tabIndex: 0,
      role: "region",
      "aria-label": `${currentView === "week" ? "Week" : "Month"} calendar`,
      children: currentView === "week" ? /*#__PURE__*/_jsx("div", {
        ...weekStyle,
        children: week.map(day => {
          const active = sameDay(day, selected);
          const cell = rs(["rs-scheduler-day", active && "rs-scheduler-selected"], styles.day, active && styles.selected);
          return /*#__PURE__*/_jsxs("section", {
            ...cell,
            "aria-label": dayLabel(day),
            children: [/*#__PURE__*/_jsxs("button", {
              ...dateStyle,
              type: "button",
              "aria-label": dayLabel(day),
              "aria-pressed": active,
              disabled: disabled,
              onClick: () => changeDay(day),
              children: [weekday(day), " ", day.getUTCDate()]
            }), eventList(day), onSlotSelect && /*#__PURE__*/_jsxs(Button, {
              ...action,
              variant: "ghost",
              disabled: disabled || !slotTime,
              "aria-label": `Schedule on ${dayLabel(day)}`,
              onClick: () => chooseSlot(day),
              children: [/*#__PURE__*/_jsx(Icon, {
                name: "plus",
                size: 12
              }), slotTime]
            })]
          }, dateInput(day));
        })
      }) : /*#__PURE__*/_jsxs("table", {
        ...monthStyle,
        "aria-label": titleText,
        children: [/*#__PURE__*/_jsx("thead", {
          children: /*#__PURE__*/_jsx("tr", {
            children: week.map(day => /*#__PURE__*/_jsx("th", {
              ...weekdayStyle,
              scope: "col",
              children: weekday(day)
            }, day.getUTCDay()))
          })
        }), /*#__PURE__*/_jsx("tbody", {
          children: Array.from({
            length: 6
          }, (_, row) => /*#__PURE__*/_jsx("tr", {
            children: Array.from({
              length: 7
            }, (_, column) => {
              const day = addDays(monthBeginning, row * 7 + column);
              const active = sameDay(day, selected);
              const outside = day.getUTCMonth() !== selected.getUTCMonth();
              const cell = rs(["rs-scheduler-cell", active && "rs-scheduler-selected", outside && "rs-scheduler-outside"], styles.cell, active && styles.selected, outside && styles.outside);
              return /*#__PURE__*/_jsxs("td", {
                ...cell,
                children: [/*#__PURE__*/_jsx("button", {
                  ...dateStyle,
                  type: "button",
                  "aria-label": dayLabel(day),
                  "aria-pressed": active,
                  disabled: disabled,
                  onClick: () => changeDay(day),
                  children: day.getUTCDate()
                }), eventList(day)]
              }, column);
            })
          }, row))
        })]
      })
    }), /*#__PURE__*/_jsx("p", {
      ...empty,
      role: "status",
      children: announcement
    }), /*#__PURE__*/_jsxs(Dialog, {
      open: editing !== null,
      onClose: () => setEditing(null),
      closeLabel: "Cancel reschedule",
      children: [/*#__PURE__*/_jsxs(DialogTitle, {
        children: ["Reschedule ", editing?.title]
      }), /*#__PURE__*/_jsxs("form", {
        ...form,
        onSubmit: event => {
          event.preventDefault();
          const day = parseDay(editDay);
          if (!editing || !day || !editTime) return;
          const start = atTime(day, editTime, zone);
          if (!start) {
            setEditError(`That time does not exist in ${zone} because the clocks change. Choose another time.`);
            return;
          }
          const end = new Date(start.getTime() + editing.end.getTime() - editing.start.getTime());
          onEventMove?.(editing, {
            start,
            end
          });
          setAnnouncement(`${editing.title} rescheduled to ${dayLabel(dayInZone(start, zone))} at ${timeFormat(start)}.`);
          setEditing(null);
        },
        children: [/*#__PURE__*/_jsx(Input, {
          label: "Date",
          type: "date",
          value: editDay,
          required: true,
          onChange: event => setEditDay(event.target.value)
        }), /*#__PURE__*/_jsx(Input, {
          label: "Start time",
          type: "time",
          value: editTime,
          required: true,
          onChange: event => setEditTime(event.target.value)
        }), editError && /*#__PURE__*/_jsx("p", {
          ...empty,
          role: "alert",
          children: editError
        }), /*#__PURE__*/_jsx(Button, {
          type: "submit",
          children: "Save schedule"
        })]
      })]
    })]
  });
});
//# sourceMappingURL=scheduler.js.map
