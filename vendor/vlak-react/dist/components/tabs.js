"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useMergedRefs } from "../merge-refs.js";
import { jsx as _jsx } from "react/jsx-runtime";
const TabsContext = /*#__PURE__*/React.createContext(null);
function useTabsContext(component) {
  const ctx = React.useContext(TabsContext);
  if (!ctx) throw new Error(`<${component}> must be used inside <Tabs>`);
  return ctx;
}
const styles = {
  list: {
    k1xSpc: "x78zum5",
    kGNEyG: "x1pha0wt x11g0wa5",
    kOIVth: "x1yju4uz x17gopzu",
    kzqmXN: "xvolacv",
    ks0D6T: "x6c8nl2 xyl5pi8",
    kMzoRj: "xc342km",
    ksu8eU: "xng3xce",
    kt9PQ7: "x1qhh985 x16tzqa9",
    kfdmCh: "x1sy0etr x1g926jq",
    kL6WhQ: "x16stqrj xzhvcl",
    kGVxlE: "x1gnnqk1",
    kWkggS: "xjbqb8w",
    $$css: true
  },
  vertical: {
    kXwgrk: "xdt5ytf",
    kGNEyG: "x1qjc9v5",
    kOIVth: "xxhr3t",
    kt9PQ7: "x1qhh985",
    kfdmCh: "x1sy0etr",
    $$css: true
  },
  tab: {
    kysU6D: "xjyslct",
    kB7OPa: "x9f619",
    kzQI83: "xzezc5b",
    kmuXW: "x103hado",
    kCS8Yb: "x1fiteza",
    k1xSpc: "x1p0ob66",
    kGNEyG: "x1wbzo2s",
    kjj79g: "x1flt2ig",
    kAzted: "x1wszdd xs41724",
    k7Eaqz: "xtp0tkc",
    k8WAf4: "x18g2hj5 x1j53ye5",
    kg3NbH: "xnjsko4 x10wakp9",
    kGuDYH: "xkpwil5 xzwmqnn",
    kMv6JI: "xjb2p0i",
    k63SB2: "xo1l8bm",
    kMwMTN: "x1ixqp2s x9dgriy",
    kb6lSQ: "xjat59b",
    kybGjl: "x1hl2dhg",
    k9WMMc: "x1yc453h xtpl96i",
    kWkggS: "xjbqb8w",
    kKwaWg: "x18o3ruo",
    kGVxlE: "x1gnnqk1",
    kMzoRj: "xc342km",
    ksu8eU: "xng3xce",
    kaIpWk: "x2u8bby",
    kkrTdU: "x1ypdohk",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "x14tvtkk",
    kInvED: "x7s97pk",
    $$css: true
  },
  active: {
    kMwMTN: "x1gney9c xpq31cd",
    k63SB2: "x1s688f",
    kMzoRj: "xc342km",
    ksu8eU: "xng3xce",
    kGVxlE: "xmgu1b3",
    kt9PQ7: "x1qhh985 xoge9h",
    kfdmCh: "x1sy0etr x1f9f4g9",
    kL6WhQ: "x16stqrj x17pzqcd",
    $$css: true
  }
};
export const Tabs = /*#__PURE__*/React.forwardRef(function Tabs({
  value,
  defaultValue,
  onValueChange,
  children,
  ...props
}, ref) {
  const idBase = React.useId();
  const [panels, setPanels] = React.useState(() => new Set());
  const registerPanel = React.useCallback(v => {
    setPanels(prev => prev.has(v) ? prev : new Set(prev).add(v));
    return () => setPanels(prev => {
      if (!prev.has(v)) return prev;
      const next = new Set(prev);
      next.delete(v);
      return next;
    });
  }, []);
  const [inner, setInner] = React.useState(defaultValue ?? "");
  const [tabs, setTabs] = React.useState(() => new Map());
  const registerTab = React.useCallback((v, element, disabled) => {
    setTabs(prev => new Map(prev).set(v, {
      element,
      disabled
    }));
    return () => setTabs(prev => {
      const next = new Map(prev);
      next.delete(v);
      return next;
    });
  }, []);
  const isControlled = value !== undefined;
  const requested = isControlled ? value : inner;
  const enabled = [...tabs].filter(([, tab]) => !tab.disabled).sort(([, a], [, b]) => a.element.compareDocumentPosition(b.element) & 4 ? -1 : 1);
  const current = enabled.some(([v]) => v === requested) ? requested : enabled[0]?.[0] ?? requested;
  React.useEffect(() => {
    if (!isControlled && enabled.length && current !== inner) setInner(current);
  }, [isControlled, enabled.length, current, inner]);
  const setValue = next => {
    if (!isControlled) setInner(next);
    onValueChange?.(next);
  };
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    ...props,
    children: /*#__PURE__*/_jsx(TabsContext.Provider, {
      value: {
        value: current,
        setValue,
        idBase,
        panels,
        registerPanel,
        registerTab
      },
      children: children
    })
  });
});
/** Roving tabs: arrows step, Home/End jump, and selection follows focus. */
export const TabList = /*#__PURE__*/React.forwardRef(function TabList({
  orientation = "horizontal",
  className,
  style,
  onKeyDown,
  ...props
}, ref) {
  const vertical = orientation === "vertical";
  const handleKeyDown = e => {
    onKeyDown?.(e);
    if (e.defaultPrevented) return;
    const prevKey = vertical ? "ArrowUp" : "ArrowLeft";
    const nextKey = vertical ? "ArrowDown" : "ArrowRight";
    if (e.key !== prevKey && e.key !== nextKey && e.key !== "Home" && e.key !== "End") return;
    const tabs = Array.from(e.currentTarget.querySelectorAll('[role="tab"]:not(:disabled)'));
    const index = tabs.indexOf(document.activeElement);
    if (index === -1 || tabs.length === 0) return;
    e.preventDefault();
    const next = e.key === "Home" ? 0 : e.key === "End" ? tabs.length - 1 : e.key === nextKey ? (index + 1) % tabs.length : (index - 1 + tabs.length) % tabs.length;
    tabs[next]?.focus();
    tabs[next]?.click();
  };
  const sx = rs(["rs-tabs", vertical && "rs-tabs-vertical", className], styles.list, vertical && styles.vertical);
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    role: "tablist",
    "aria-orientation": vertical ? "vertical" : undefined,
    onKeyDown: handleKeyDown,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
export const Tab = /*#__PURE__*/React.forwardRef(function Tab({
  value,
  className,
  style,
  onClick,
  disabled = false,
  ...props
}, ref) {
  const ctx = useTabsContext("Tab");
  const element = React.useRef(null);
  const mergedRef = useMergedRefs(ref, element);
  const registerTab = ctx.registerTab;
  React.useEffect(() => element.current ? registerTab(value, element.current, disabled) : undefined, [registerTab, value, disabled]);
  const selected = ctx.value === value;
  const sx = rs(["rs-tab", selected && "rs-tab-active", className], styles.tab, selected && styles.active);
  return /*#__PURE__*/_jsx("button", {
    ref: mergedRef,
    type: "button",
    role: "tab",
    disabled: disabled,
    id: `${ctx.idBase}-tab-${value}`,
    "aria-selected": selected,
    "aria-controls": ctx.panels.has(value) ? `${ctx.idBase}-panel-${value}` : undefined,
    tabIndex: selected ? 0 : -1,
    onClick: e => {
      onClick?.(e);
      if (!e.defaultPrevented) ctx.setValue(value);
    },
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
export const TabPanel = /*#__PURE__*/React.forwardRef(function TabPanel({
  value,
  ...props
}, ref) {
  const ctx = useTabsContext("TabPanel");
  const selected = ctx.value === value;
  const register = ctx.registerPanel;
  React.useEffect(() => register(value), [register, value]);
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    role: "tabpanel",
    id: `${ctx.idBase}-panel-${value}`,
    "aria-labelledby": `${ctx.idBase}-tab-${value}`,
    hidden: !selected,
    ...props
  });
});
//# sourceMappingURL=tabs.js.map
