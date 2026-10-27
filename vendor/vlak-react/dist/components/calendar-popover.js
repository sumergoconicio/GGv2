"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { cx } from "../cx.js";
import { useMergedRefs } from "../merge-refs.js";
import { useOverlayPosition } from "../use-overlay-position.js";
import { Calendar } from "./calendar.js";
import { Input } from "./input.js";
import { Button } from "./button.js";
import { Icon } from "./icon.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const styles = {
  root: {
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kOIVth: "x13z6uf9",
    $$css: true
  },
  label: {
    kGuDYH: "xboafo0 x1k6fd34",
    k63SB2: "x1s688f",
    kMwMTN: "x1ixqp2s",
    kLWn49: "x1d3mw78",
    $$css: true
  },
  control: {
    k1xSpc: "x78zum5",
    kGNEyG: "x1qjc9v5",
    k7Eaqz: "xeuugli",
    kAzted: "x1wszdd",
    kB7OPa: "x9f619",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd",
    kaIpWk: "xkrxur",
    kWkggS: "xhpg8l3",
    kMeerF: "x1k57tk5 x16gxa91",
    k3XXqK: "x1t137rt x14xc8xn",
    kjBf7l: "xqbrbdq x17te1i1",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  input: {
    k7Eaqz: "xeuugli",
    kzqmXN: "xh8yej3",
    kUk6DE: "x1cqoux5",
    kZKoxP: "x9ve8r1",
    kAzted: "x1wszdd",
    kcqcaj: "xss6m8b",
    kInvED: "x2ssjo2",
    $$css: true
  },
  trigger: {
    kmuXW: "x2lah0s",
    kzqmXN: "x1uyfxw7",
    kZKoxP: "x9ve8r1",
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kmVPX3: "x1717udv",
    kMzoRj: "xc342km",
    kaIpWk: "xkrxur",
    $$css: true
  },
  panel: {
    kB7OPa: "x9f619",
    kVAEAm: "xixxii4",
    kpwlN0: "x1anvkwx",
    kogj98: "x1ghz6dp",
    kzqmXN: "x1uo287k",
    ks0D6T: "xps4azt",
    kmVPX3: "xuh7c21",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kaIpWk: "x1po71e9",
    kWkggS: "xhpg8l3",
    kMwMTN: "x1gney9c",
    kVQacm: "xysyzu8",
    kZeWKH: "xish69e",
    kGVxlE: "xiwnnou xhn7pgl",
    kGyWv1: "x1940xdq",
    $$css: true
  },
  grid: {
    kzqmXN: "xh8yej3",
    $$css: true
  },
  time: {
    k1xSpc: "xrvj5dj",
    kumcoG: "x1o61qjw",
    kOIVth: "x13z6uf9",
    k8WAf4: "xo0yzjp",
    kg3NbH: "x10s9kua",
    kUOVxO: "x19ateuu",
    kEafiO: "x1ro6g4h",
    kPef9Z: "x13fuv20",
    kLZC3w: "x1fq36pv",
    $$css: true
  },
  actions: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kOIVth: "xvh977a",
    kwnvtZ: "x1a02dak",
    keoZOQ: "x1mjqqkp",
    kUOVxO: "x19ateuu",
    kLKAdn: "x1iul6r4",
    kg3NbH: "x10s9kua",
    kEafiO: "x1ro6g4h",
    kPef9Z: "x13fuv20",
    kLZC3w: "x1fq36pv",
    $$css: true
  },
  action: {
    kzqmXN: "x14atkfc",
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kg3NbH: "x97vtpp",
    k71WvV: "xq6kdv4",
    kMzoRj: "xc342km",
    kWkggS: "xjbqb8w",
    k63SB2: "xk50ysn",
    kInvED: "x2ssjo2",
    $$css: true
  },
  done: {
    kzqmXN: "x14atkfc",
    k7Eaqz: "xtp0tkc",
    kg3NbH: "x13s4r1c",
    $$css: true
  },
  feedback: {
    kogj98: "x1ghz6dp",
    kGuDYH: "xboafo0 xwxtnfu",
    kMwMTN: "x1ixqp2s",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  error: {
    kMwMTN: "x1gney9c",
    $$css: true
  }
};
const pad = value => String(value).padStart(2, "0");
const dateString = date => `${String(date.getFullYear()).padStart(4, "0")}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
const canonical = (value, type) => type === "datetime-local" ? value.replace(" ", "T") : value;
const display = (value, type) => type === "datetime-local" ? value.replace("T", " ") : value;
function parseDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return;
  const [year, month, day] = value.split("-").map(Number);
  if (year < 1 || year > 9999) return;
  const date = new Date(0);
  date.setFullYear(year, month - 1, day);
  date.setHours(12, 0, 0, 0);
  if (date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day) return date;
}
function valid(value, type) {
  return type === "date" ? Boolean(parseDate(value)) : /^\d{4}-\d{2}-\d{2}T(?:[01]\d|2[0-3]):[0-5]\d$/.test(value) && Boolean(parseDate(value.slice(0, 10)));
}
const usable = element => Boolean(element?.isConnected && !element.closest("[hidden],[inert],dialog:not([open])") && element.getClientRects().length && getComputedStyle(element).visibility !== "hidden");

/** Editable civil dates with native form validation and a top-layer calendar. */
export const CalendarPopover = /*#__PURE__*/React.forwardRef(function CalendarPopover({
  type = "date",
  value,
  defaultValue = "",
  onValueChange,
  min,
  max,
  label,
  hint,
  error,
  feedback,
  ok,
  weekStart = 1,
  locale = "en",
  triggerLabel = "Open calendar",
  dialogLabel,
  required,
  disabled,
  readOnly,
  name,
  form,
  id,
  className,
  style,
  placeholder,
  onKeyDown,
  onBlur,
  onInvalid,
  ...props
}, forwardedRef) {
  const generatedId = React.useId(),
    inputId = id ?? generatedId,
    panelId = `${inputId}-calendar`;
  const rootRef = React.useRef(null),
    controlRef = React.useRef(null),
    inputRef = React.useRef(null),
    triggerRef = React.useRef(null),
    panelRef = React.useRef(null);
  const mergedRef = useMergedRefs(inputRef, forwardedRef);
  const controlled = value !== undefined;
  const [inner, setInner] = React.useState(defaultValue);
  const current = canonical(controlled ? value : inner, type);
  const [open, setOpen] = React.useState(false),
    openRef = React.useRef(false);
  const [showError, setShowError] = React.useState(false),
    [panelError, setPanelError] = React.useState("");
  const [draft, setDraft] = React.useState({
    day: "",
    hours: "09",
    minutes: "00"
  });
  const context = React.useRef(null);
  const minValue = min && valid(min, type) ? min : undefined,
    maxValue = max && valid(max, type) ? max : undefined;
  const minDay = parseDate(minValue?.slice(0, 10) ?? "0001-01-01"),
    maxDay = parseDate(maxValue?.slice(0, 10) ?? "9999-12-31");
  const placement = useOverlayPosition(open, panelRef, controlRef, undefined, "bottom", {
    popover: "auto",
    edge: 1,
    matchAnchorWidth: false
  });
  const issue = next => {
    if (!next) return required ? "Enter a date." : "";
    if (!valid(next, type)) return type === "date" ? "Enter a valid date as YYYY-MM-DD." : "Enter a valid date and time as YYYY-MM-DD HH:mm.";
    if (minValue && next < minValue) return `Choose ${display(minValue, type)} or later.`;
    if (maxValue && next > maxValue) return `Choose ${display(maxValue, type)} or earlier.`;
    return "";
  };
  const message = issue(current);
  React.useLayoutEffect(() => {
    inputRef.current?.setCustomValidity(message);
  }, [message]);
  const sameContext = React.useCallback(() => {
    const owner = rootRef.current;
    const dialog = owner?.closest("dialog") ?? null;
    return usable(owner) && dialog === context.current && (!dialog || dialog.open);
  }, []);
  const close = React.useCallback((restore = false) => {
    const canRestore = restore && sameContext() && usable(triggerRef.current);
    openRef.current = false;
    const panel = panelRef.current;
    if (typeof panel?.hidePopover === "function" && panel.matches(":popover-open")) panel.hidePopover();
    setOpen(false);
    setPanelError("");
    if (canRestore) triggerRef.current?.focus({
      preventScroll: true
    });
  }, [sameContext]);
  const change = next => {
    if (!controlled) setInner(next);
    onValueChange?.(next);
  };
  const choose = next => {
    const problem = issue(next);
    if (problem) {
      setPanelError(problem);
      return;
    }
    setShowError(false);
    change(next);
    close(true);
  };
  const draftValue = type === "date" ? draft.day : `${draft.day}T${draft.hours.padStart(2, "0")}:${draft.minutes.padStart(2, "0")}`;
  const validClock = /^\d{1,2}$/.test(draft.hours) && Number(draft.hours) <= 23 && /^\d{1,2}$/.test(draft.minutes) && Number(draft.minutes) <= 59;
  const draftIssue = type === "datetime-local" && !validClock ? "Enter hours from 0 to 23 and minutes from 0 to 59." : issue(draftValue);
  const clampTime = (day, hours, minutes) => {
    let next = `${day}T${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
    if (minValue?.slice(0, 10) === day && next < minValue) next = minValue;
    if (maxValue?.slice(0, 10) === day && next > maxValue) next = maxValue;
    return {
      day,
      hours: next.slice(11, 13),
      minutes: next.slice(14, 16)
    };
  };
  const show = () => {
    if (disabled || readOnly) return;
    context.current = rootRef.current?.closest("dialog") ?? null;
    let seed = valid(current, type) ? current : `${dateString(new Date())}${type === "datetime-local" ? "T09:00" : ""}`;
    if (minValue && seed < minValue) seed = minValue;
    if (maxValue && seed > maxValue) seed = maxValue;
    setDraft({
      day: seed.slice(0, 10),
      hours: type === "datetime-local" ? seed.slice(11, 13) : "09",
      minutes: type === "datetime-local" ? seed.slice(14, 16) : "00"
    });
    setPanelError("");
    openRef.current = true;
    setOpen(true);
  };
  const selectDay = day => {
    const next = dateString(day);
    if (type === "date") choose(next);else {
      setDraft(state => clampTime(next, state.hours, state.minutes));
      setPanelError("");
    }
  };
  React.useEffect(() => {
    if (!open) return;
    const owner = rootRef.current;
    const onFocus = event => {
      if (event.target instanceof Node && !owner?.contains(event.target)) close();
    };
    const onPointer = event => {
      if (event.target instanceof Node && !owner?.contains(event.target)) close();
    };
    const observer = new MutationObserver(() => {
      if (!sameContext()) close();
    });
    for (let ancestor = owner; ancestor; ancestor = ancestor.parentElement) observer.observe(ancestor, {
      attributes: true,
      attributeFilter: ["hidden", "inert", "open", "class", "style"]
    });
    document.addEventListener("focusin", onFocus);
    document.addEventListener("pointerdown", onPointer, true);
    return () => {
      observer.disconnect();
      document.removeEventListener("focusin", onFocus);
      document.removeEventListener("pointerdown", onPointer, true);
    };
  }, [open, close, sameContext]);
  const seen = React.useRef({
    current,
    type,
    min,
    max,
    disabled,
    readOnly
  });
  React.useLayoutEffect(() => {
    const before = seen.current;
    seen.current = {
      current,
      type,
      min,
      max,
      disabled,
      readOnly
    };
    if (openRef.current && (before.current !== current || before.type !== type || before.min !== min || before.max !== max || disabled || readOnly)) close();
  }, [current, type, min, max, disabled, readOnly, close]);
  React.useEffect(() => {
    const reset = event => {
      if (event.target !== inputRef.current?.form) return;
      queueMicrotask(() => {
        if (event.defaultPrevented || !inputRef.current?.isConnected) return;
        if (!controlled) setInner(defaultValue);
        setShowError(false);
        close();
      });
    };
    document.addEventListener("reset", reset, true);
    return () => document.removeEventListener("reset", reset, true);
  }, [controlled, defaultValue, close]);
  const root = rs(["rs-calendar-popover", className], styles.root);
  const lab = rs(["rs-calendar-popover-label"], styles.label);
  const control = rs(["rs-calendar-popover-control"], styles.control);
  const field = rs(["rs-calendar-popover-input"], styles.input);
  const trigger = rs(["rs-calendar-popover-trigger"], styles.trigger);
  const panel = rs(["rs-calendar-popover-panel"], styles.panel);
  const grid = rs(["rs-calendar-popover-grid"], styles.grid);
  const time = rs(["rs-calendar-popover-time"], styles.time);
  const actions = rs(["rs-calendar-popover-actions"], styles.actions);
  const action = rs(["rs-calendar-popover-action"], styles.action);
  const done = rs(["rs-calendar-popover-done"], styles.done);
  const quiet = rs(["rs-calendar-popover-feedback"], styles.feedback);
  const err = rs(["rs-calendar-popover-error"], styles.feedback, styles.error);
  const shownError = error ?? (showError ? message : "");
  const describedBy = cx(props["aria-describedby"], hint != null && `${inputId}-hint`, Boolean(shownError) && `${inputId}-error`) || undefined;
  const today = dateString(new Date());
  const todayDisabled = Boolean(minValue && today < minValue.slice(0, 10) || maxValue && today > maxValue.slice(0, 10));
  return /*#__PURE__*/_jsxs("div", {
    ref: rootRef,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [label != null && /*#__PURE__*/_jsx("label", {
      htmlFor: inputId,
      className: lab.className,
      style: lab.style,
      children: label
    }), /*#__PURE__*/_jsxs("div", {
      ref: controlRef,
      className: control.className,
      style: control.style,
      children: [/*#__PURE__*/_jsx(Input, {
        ...props,
        ref: mergedRef,
        id: inputId,
        plain: true,
        grouped: true,
        type: "text",
        value: display(current, type),
        required: required,
        disabled: disabled,
        readOnly: readOnly,
        form: form,
        ok: ok,
        "aria-describedby": describedBy,
        "aria-invalid": shownError ? true : props["aria-invalid"],
        placeholder: placeholder ?? (type === "date" ? "YYYY-MM-DD" : "YYYY-MM-DD HH:mm"),
        className: field.className,
        style: field.style,
        onChange: event => {
          change(canonical(event.target.value, type));
          setShowError(false);
        },
        onBlur: event => {
          onBlur?.(event);
          setShowError(true);
        },
        onInvalid: event => {
          setShowError(true);
          onInvalid?.(event);
        },
        onKeyDown: event => {
          onKeyDown?.(event);
          if (event.defaultPrevented) return;
          if (event.key === "ArrowDown") {
            event.preventDefault();
            show();
          } else if (event.key === "Escape" && openRef.current) {
            event.preventDefault();
            event.stopPropagation();
            close(true);
          }
        }
      }), /*#__PURE__*/_jsx(Button, {
        ref: triggerRef,
        type: "button",
        variant: "ghost",
        className: trigger.className,
        style: trigger.style,
        "aria-label": triggerLabel,
        "aria-haspopup": "dialog",
        "aria-expanded": open,
        "aria-controls": open ? panelId : undefined,
        disabled: disabled || readOnly,
        onClick: () => openRef.current ? close(true) : show(),
        onKeyDown: event => {
          if (event.key === "ArrowDown") {
            event.preventDefault();
            show();
          } else if (event.key === "Escape" && openRef.current) {
            event.preventDefault();
            event.stopPropagation();
            close(true);
          }
        },
        children: /*#__PURE__*/_jsx(Icon, {
          name: "calendar",
          size: 16
        })
      })]
    }), name != null && /*#__PURE__*/_jsx("input", {
      type: "hidden",
      name: name,
      value: current,
      form: form,
      disabled: disabled
    }), feedback != null && /*#__PURE__*/_jsx("span", {
      className: quiet.className,
      style: quiet.style,
      children: feedback
    }), hint != null && /*#__PURE__*/_jsx("span", {
      id: `${inputId}-hint`,
      className: quiet.className,
      style: quiet.style,
      children: hint
    }), shownError && /*#__PURE__*/_jsx("span", {
      id: `${inputId}-error`,
      role: "alert",
      className: err.className,
      style: err.style,
      children: shownError
    }), /*#__PURE__*/_jsx("div", {
      ref: panelRef,
      id: panelId,
      hidden: !open,
      popover: "auto",
      role: "dialog",
      "aria-label": dialogLabel ?? (type === "date" ? "Choose date" : "Choose date and time"),
      className: panel.className,
      style: {
        ...panel.style,
        ...placement
      },
      onToggle: event => {
        if (event.nativeEvent.newState === "closed" && openRef.current) close();
      },
      onKeyDown: event => {
        if (event.key === "Escape") {
          event.preventDefault();
          event.stopPropagation();
          close(true);
        } else if (event.key === "Enter" && event.target instanceof HTMLInputElement) {
          event.preventDefault();
          if (draftIssue) setPanelError(draftIssue);else choose(draftValue);
        }
      },
      children: open && /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx(Calendar, {
          fixedWeeks: false,
          className: grid.className,
          style: grid.style,
          value: parseDate(draft.day),
          defaultMonth: parseDate(draft.day),
          min: minDay,
          max: maxDay,
          weekStart: weekStart,
          locale: locale,
          autoFocus: placement.visibility === "visible",
          onValueChange: selectDay
        }), type === "datetime-local" && /*#__PURE__*/_jsxs("div", {
          className: time.className,
          style: time.style,
          children: [/*#__PURE__*/_jsx(Input, {
            label: "Hours",
            type: "number",
            inputMode: "numeric",
            min: 0,
            max: 23,
            step: 1,
            value: draft.hours,
            onChange: event => {
              setDraft(state => ({
                ...state,
                hours: event.target.value
              }));
              setPanelError("");
            }
          }), /*#__PURE__*/_jsx(Input, {
            label: "Minutes",
            type: "number",
            inputMode: "numeric",
            min: 0,
            max: 59,
            step: 1,
            value: draft.minutes,
            onChange: event => {
              setDraft(state => ({
                ...state,
                minutes: event.target.value
              }));
              setPanelError("");
            }
          })]
        }), panelError && /*#__PURE__*/_jsx("p", {
          role: "alert",
          className: err.className,
          style: err.style,
          children: panelError
        }), /*#__PURE__*/_jsxs("div", {
          className: actions.className,
          style: actions.style,
          children: [/*#__PURE__*/_jsx(Button, {
            type: "button",
            variant: "ghost",
            className: action.className,
            style: action.style,
            disabled: todayDisabled,
            onClick: () => selectDay(new Date()),
            children: "Today"
          }), !required && /*#__PURE__*/_jsx(Button, {
            type: "button",
            variant: "ghost",
            className: action.className,
            style: action.style,
            onClick: () => {
              change("");
              setShowError(false);
              close(true);
            },
            children: "Clear"
          }), type === "datetime-local" && /*#__PURE__*/_jsx(Button, {
            type: "button",
            className: done.className,
            style: done.style,
            onClick: () => {
              if (draftIssue) setPanelError(draftIssue);else choose(draftValue);
            },
            children: "Done"
          })]
        })]
      })
    })]
  });
});
//# sourceMappingURL=calendar-popover.js.map
